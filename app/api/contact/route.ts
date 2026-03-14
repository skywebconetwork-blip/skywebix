import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/ContactEmail';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Skywebix Contact <onboarding@resend.dev>', // Update this with a verified domain later
      to: [process.env.EMAIL_TO!], // User's requested email
      subject: `New Lead: ${name} from Skywebix`,
      react: ContactEmail({ name, email, phone, company, message }),
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
