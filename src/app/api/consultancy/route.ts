import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, businessName, email, challenge } = await req.json();

    if (!name || !businessName || !email || !challenge) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("[consultancy] GOOGLE_SHEET_WEBHOOK_URL is not set");
      return NextResponse.json(
        { success: false, error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        action: "consultancy",
        name,
        businessName,
        email,
        challenge
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
    console.error("[consultancy] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
