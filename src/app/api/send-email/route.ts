import { NextRequest, NextResponse } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";

// Initialize Mailgun client
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
});

export async function POST(req: NextRequest) {
  try {
    const { to, subject, message } = await req.json();

    if (!to || !subject || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      from: `Lumos Learning <${process.env.MAILGUN_SENDER_EMAIL}>`,
      to,
      subject,
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully!", response }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Mailgun Error:", error);
      return NextResponse.json({ message: "Error sending email", error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Unknown error occurred" }, { status: 500 });
  }
}
