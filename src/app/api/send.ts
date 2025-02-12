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
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { to, subject, message } = req.body;

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
  } catch (error: any) {
    console.error("Mailgun Error:", error);
    return res.status(500).json({ message: "Error sending email", error: error.message });
  }
}
