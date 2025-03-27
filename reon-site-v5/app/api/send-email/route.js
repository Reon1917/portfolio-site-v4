import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with your API key
// You'll need to add this as an environment variable in production
const resend = new Resend(process.env.RESEND_API_KEY || 'your_api_key');
const contactEmail = process.env.CONTACT_EMAIL || 'linmaytphyo03@gmail.com';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: contactEmail,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      reply_to: email,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 