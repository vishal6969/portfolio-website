// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Vishal <vm925623@gmail.com>",
      to: [email],
      subject: subject,
      react: (
        <>
          <p>{message}</p>
        </>
      ),
    });

    console.log(data, " data");
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
