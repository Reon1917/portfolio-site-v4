import { Resend } from 'resend';

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define your target email address (where you want to receive emails)
const TO_EMAIL = process.env.EMAIL_TO || 'your-personal-email@example.com'; // Fallback for safety
// Define your sending email address (must be a verified domain in Resend)
const FROM_EMAIL = process.env.EMAIL_FROM || 'onboarding@resend.dev'; // Default or your verified sender

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields (name, email, message).' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate email format (simple regex)
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set.");
      return new Response(JSON.stringify({ error: 'Server configuration error: Email service is not available.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${FROM_EMAIL}>`, // Sender name and email
      to: [TO_EMAIL],
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email, // Set the sender's email as reply_to
      html: `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; max-width: 600px; margin: 20px auto; }
              h2 { color: #0056b3; }
              p { margin-bottom: 10px; }
              strong { color: #555; }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>New Message from Portfolio Contact Form</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return new Response(JSON.stringify({ error: 'Failed to send email due to a server error.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Email sent successfully!', emailId: data?.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('API Route Error:', err);
    // Check if it's a JSON parsing error or other
    if (err instanceof SyntaxError) {
        return new Response(JSON.stringify({ error: 'Invalid request format.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    return new Response(JSON.stringify({ error: 'An unexpected error occurred on the server.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
