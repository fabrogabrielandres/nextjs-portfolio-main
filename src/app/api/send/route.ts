import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["fabrogabrielandres@gmail.com"],
      subject: subject,
      react: `
      <h1>fromEmail ${fromEmail} ;
      email ${email} ;
      subject: ${subject};
      message: ${message};
      </h1>`,
      // <h1></h1>
      // <p>Thank you for contacting us!</p>
      // <p>New message submitted:</p>
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
