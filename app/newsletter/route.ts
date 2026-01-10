import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  await resend.contacts.create({
    email,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  });

  return NextResponse.json({ success: true });
}
