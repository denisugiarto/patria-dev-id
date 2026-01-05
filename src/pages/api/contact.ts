export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const subject = data.get('subject');
  const message = data.get('message');

  // Validate the data - simple validation
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  // Simulate sending email
  // In a real application, you would use a service like Resend, SendGrid, or Nodemailer here.
  console.log(`Sending email from ${name} <${email}>: ${subject} - ${message}`);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return success
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};
