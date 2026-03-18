import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, amount, frequency } = await req.json();

    if (!name || !email || !amount) {
      return NextResponse.json(
        { success: false, error: "Name, email and amount are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("[donate] GOOGLE_SHEET_WEBHOOK_URL is not set");
      return NextResponse.json(
        { success: false, error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      // action: "donate" tells the combined script which handler to use
      body: JSON.stringify({ action: "donate", name, email, amount, frequency })
    });

    const raw = await res.text();
    let data: { success: boolean; error?: string };
    try {
      data = JSON.parse(raw);
    } catch {
      data = res.ok
        ? { success: true }
        : { success: false, error: "Unexpected response" };
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("[donate] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
