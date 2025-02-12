import type { NextApiRequest, NextApiResponse } from "next";
import formData from "form-data";
import Mailgun from "mailgun.js";

// Initialize Mailgun client
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // ✅ Ensure only POST requests are allowed
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed. Use POST." });
  }

  const { to, subject, message } = req.body;

  // ✅ Ensure required fields are provided
  if (!to || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      from: `Lumos Learning <${process.env.MAILGUN_SENDER_EMAIL}>`,
      to,
      subject,
      text: message,
      html: `<p>${message}</p>`,
    });

    return res.status(200).json({ message: "Email sent successfully!", response });
  } catch (error: unknown) { // ✅ Fixed TypeScript error
    if (error instanceof Error) {
      console.error("Mailgun Error:", error);
      return res.status(500).json({
        message: "Error sending email",
        error: error.message,
      });
    }
    return res.status(500).json({ message: "Unknown error occurred" });
  }
}
