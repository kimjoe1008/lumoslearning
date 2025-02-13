import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAILGUN_SMTP_USER,
    pass: process.env.MAILGUN_SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { to, subject, message } = await req.json();

    if (!to || !subject || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Lumos Learning" <${process.env.MAILGUN_SMTP_USER}>`,
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
