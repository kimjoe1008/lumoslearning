import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure Mailgun SMTP Transport
const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587, // Use 465 for SSL, 587 for TLS
  secure: false, // false for TLS, true for SSL
  auth: {
    user: process.env.MAILGUN_SMTP_USER, // Your Mailgun SMTP username (postmaster@yourdomain.com)
    pass: process.env.MAILGUN_SMTP_PASS, // Your Mailgun SMTP password
  },
});

export async function POST(req: Request) {
  try {
    const { to, subject, message } = await req.json();

    if (!to || !subject || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Send email via Mailgun SMTP
    await transporter.sendMail({
      from: `"Lumos Learning" <${process.env.MAILGUN_SMTP_USER}>`, // Must match Mailgun domain
      to,
      subject,
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ message: "✅ Email sent successfully!" }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Mailgun SMTP Error:", error);
      return NextResponse.json({ message: "❌ SMTP Error", error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "❌ Unknown error occurred" }, { status: 500 });
  }
}
