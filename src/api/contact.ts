import nodemailer from "nodemailer";
import fetch from "node-fetch";

const RATE_LIMIT = new Map<string, number[]>();

export default async function handler(req: any, res: any) {
  console.log("gott here ");
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const ip = req.headers["x-forwarded-for"] || "unknown";
  const now = Date.now();

  const requests = RATE_LIMIT.get(ip) || [];
  const recent = requests.filter((t: number) => now - t < 10 * 60 * 1000);

  if (recent.length >= 5) {
    return res.status(429).json({ message: "Too many requests" });
  }

  RATE_LIMIT.set(ip, [...recent, now]);

  const { name, email, phone, subject, message, token } = req.body;

  if (!name || !email || !message || !token) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const captchaRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    },
  );

  interface RecaptchaResponse {
    success: boolean;
    score?: number;
    action?: string;
    hostname?: string;
  }

  const captchaData = (await captchaRes.json()) as RecaptchaResponse;
  if (!captchaData.success || captchaData.score < 0.5) {
    return res.status(403).json({ message: "Captcha failed" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: "info@oakolawoleandco.com",
      pass: process.env.ZOHO_EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact" <info@oakolawoleandco.com>`,
      to: "info@oakolawoleandco.com",
      replyTo: email,
      subject: subject || "New Website Enquiry",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p>${message}</p>
      `,
    });

    await transporter.sendMail({
      from: `"O.A. Kolawole & Co." <info@oakolawoleandco.com>`,
      to: email,
      subject: "We’ve received your message",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting O.A. Kolawole & Co.</p>
        <p>We have received your message and will respond shortly.</p>
        <p>Kind regards,<br/>O.A. Kolawole & Co.</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Email failed" });
  }
}
