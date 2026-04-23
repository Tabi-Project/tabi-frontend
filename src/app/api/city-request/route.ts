import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, mobile, linkedin, city } = await req.json();

    if (!name || !email || !mobile || !city) {
      return NextResponse.json(
        { success: false, error: "Name, email, mobile and city are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("[city-request] Missing GOOGLE_SHEET_WEBHOOK_URL");
      return NextResponse.json(
        { success: false, error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "cityRequest",
        name,
        email,
        mobile,
        linkedin: linkedin || "",
        city,
        source: "website"
      })
    });

    const raw = await response.text();
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      data = response.ok
        ? { success: true }
        : { success: false, error: "Unexpected response" };
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("[city-request] error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
