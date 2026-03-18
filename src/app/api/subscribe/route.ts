import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json();

    // ── 1. Validate email ─────────────────────────────────────────
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    // ── 2. Check env var is present ───────────────────────────────
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("[subscribe] GOOGLE_SHEET_WEBHOOK_URL is not set");
      return NextResponse.json(
        { success: false, error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    // ── 3. Call Google Apps Script ────────────────────────────────
    const res = await fetch(webhookUrl, {
      method: "POST",
      // Google Apps Script requires text/plain to avoid CORS preflight on its end
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ email, source: source ?? "website" })
    });

    // ── 4. Apps Script returns plain text sometimes — handle both ──
    const raw = await res.text();

    let data: { success: boolean; error?: string };
    try {
      data = JSON.parse(raw);
    } catch {
      // If it's not JSON, treat a 200 as success
      data = res.ok
        ? { success: true }
        : { success: false, error: "Unexpected response from webhook" };
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("[subscribe] unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
