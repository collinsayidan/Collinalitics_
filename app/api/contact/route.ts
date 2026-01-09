import * as nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, message, website } = await req.json();

    // 🛡️ Honeypot spam protection
    if (website && website.trim() !== "") {
      return new Response("Spam detected", { status: 400 });
    }

    // 🛡️ Server-side validation
    if (!name || name.length < 2) {
      return new Response("Invalid name", { status: 400 });
    }

    if (!email || !email.includes("@") || !email.includes(".")) {
      return new Response("Invalid email", { status: 400 });
    }

    if (!message || message.length < 10) {
      return new Response("Message too short", { status: 400 });
    }

    // 📧 Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📩 Send email
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 🗄️ Save message to database
    await prisma.message.create({
      data: {
        name,
        email,
        message,
      },
    });

    return new Response("Message sent & saved successfully", { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response("Failed to process message", { status: 500 });
  }
}
