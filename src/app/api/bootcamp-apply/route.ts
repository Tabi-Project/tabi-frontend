import { NextRequest, NextResponse } from "next/server";

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
      paymentScreenshot,
      fileName
    } = body;

    // ── 1. Validate required fields ────────────────────────────────
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !location ||
      !experienceLevel ||
      !languages ||
      !whyJoin ||
      !canCommit ||
      !acceptsFee ||
      !acceptsRequirement ||
      !paymentScreenshot
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

    // ── 2. Check env var ───────────────────────────────────────────
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("[bootcamp-apply] GOOGLE_SHEET_WEBHOOK_URL is not set");
      return NextResponse.json(
        { success: false, error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    // ── 3. Forward to Google Apps Script ──────────────────────────
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
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
        acceptsFee,
        acceptsRequirement,
        paymentScreenshot, // base64 data URL
        fileName: fileName || "receipt.jpg"
      })
    });

    const raw = await res.text();
    let data: { success: boolean; error?: string };
    try {
      data = JSON.parse(raw);
    } catch {
      data = res.ok
        ? { success: true }
        : { success: false, error: "Unexpected response from webhook" };
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("[bootcamp-apply] unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
