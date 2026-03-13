import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_Z1SSwqrH_E3oV9NmzZ53PwPxmDULjG8nh');

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, email, service, date, message } = data;

    const { data: resData, error } = await resend.emails.send({
      from: 'Mumtaz Dental Care <onboarding@resend.dev>',
      to: ['ahsan.objects@gmail.com'],
      subject: `New Appointment: ${name} - ${service}`,
      html: `
        <h1>New Appointment Request</h1>
        <p><strong>Patient Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Message:</strong> ${message || 'No message'}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ success: false, error: error.message || 'Email failed to send', details: error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: resData });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
