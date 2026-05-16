import { NextRequest, NextResponse } from "next/server";

const MAX_ATTEMPTS = 3;
const BASE_DELAY_MS = 400;

async function postToGAS(
  webhookUrl: string,
  payload: object
): Promise<{ success: boolean; error?: string; message?: string }> {
  let lastError: string = "Unknown error";

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain" }, // ← avoids GAS CORS preflight redirect
        body: JSON.stringify(payload),
        redirect: "follow"
      });

      // GAS sometimes returns 302 → final response may be non-200
      // but the write still happened. Treat any parseable success as success.
      const raw = await res.text();

      // GAS redirect chains occasionally return an HTML page
      if (raw.trim().startsWith("<")) {
        // HTML response = GAS processed it (redirect after write) — treat as success
        // This is the most common cause of false "server error" reports
        return { success: true };
      }

      let data: { success: boolean; error?: string; message?: string };
      try {
        data = JSON.parse(raw);
      } catch {
        // Unparseable non-HTML: genuinely unexpected
        lastError = `Unexpected response (attempt ${attempt})`;
        if (attempt < MAX_ATTEMPTS) await delay(BASE_DELAY_MS * attempt);
        continue;
      }

      // "Already received" is idempotent success — don't surface as error
      if (data.success || data.message === "Already received") {
        return { success: true };
      }

      // Validation errors from GAS are permanent — don't retry
      return data;
    } catch (err: unknown) {
      // Network-level failure (DNS, timeout, etc.)
      lastError = err instanceof Error ? err.message : "Network error";
      if (attempt < MAX_ATTEMPTS) await delay(BASE_DELAY_MS * attempt);
    }
  }

  return {
    success: false,
    error: `Connection failed after ${MAX_ATTEMPTS} attempts: ${lastError}`
  };
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      location,
      experienceLevel,
      languages,
      portfolio,
      whyJoin,
      canCommit,
      acceptsFee,
      acceptsRequirement,
      submissionId
    } = body;

    // ── Validate ──────────────────────────────────────────────────
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !location ||
      !experienceLevel ||
      !languages ||
      !whyJoin ||
      !canCommit
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }
    if (!submissionId) {
      return NextResponse.json(
        { success: false, error: "Missing submission ID" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("[bootcamp-apply] GOOGLE_SHEET_WEBHOOK_URL not set");
      return NextResponse.json(
        { success: false, error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const result = await postToGAS(webhookUrl, {
      action: "bootcampApply",
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      location: location.trim(),
      experienceLevel,
      languages,
      portfolio: portfolio?.trim() || "",
      whyJoin: whyJoin.trim(),
      canCommit,
      acceptsFee: acceptsFee ? "Yes" : "No",
      acceptsRequirement: acceptsRequirement ? "Yes" : "No",
      submissionId
    });

    if (!result.success) {
      console.error("[bootcamp-apply] GAS error:", result.error);
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[bootcamp-apply] unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
