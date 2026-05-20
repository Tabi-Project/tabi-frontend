// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { firstName, lastName, email, phone, industry, experience } = body;

//     // Validation – phone is now required
//     if (
//       !firstName ||
//       !lastName ||
//       !email ||
//       !phone ||
//       !industry ||
//       !experience
//     ) {
//       return NextResponse.json(
//         { success: false, error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
//     if (!webhookUrl) {
//       return NextResponse.json(
//         { success: false, error: "Server configuration error" },
//         { status: 500 }
//       );
//     }

//     const response = await fetch(webhookUrl, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         action: "webinar",
//         firstName,
//         lastName,
//         email,
//         phone,
//         industry,
//         experience,
//         source: "SLA Webinar"
//       })
//     });

//     const result = await response.json();
//     return NextResponse.json(result);
//   } catch {
//     return NextResponse.json(
//       { success: false, error: "Internal error" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, industry, experience } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !industry ||
      !experience
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    console.log("Posting to webhook:", webhookUrl); // ← add
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "webinar",
        firstName,
        lastName,
        email,
        phone,
        industry,
        experience,
        source: "SLA Webinar"
      })
    });

    const result = await response.json();
    console.log("Apps Script response:", result);
    return NextResponse.json(result);
  } catch (err) {
    console.error("API route error:", err); 
    return NextResponse.json(
      { success: false, error: "Internal error: " + (err as Error).message },
      { status: 500 }
    );
  }
}