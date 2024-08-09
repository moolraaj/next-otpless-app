import { NextResponse } from 'next/server';

export async function POST(request) {
  const { orderId } = await request.json();

  try {
    const response = await fetch('https://auth.otpless.app/auth/otp/v1/resend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'clientId': process.env.NEXT_PUBLIC_CLIENT_ID,
        'clientSecret': process.env.NEXT_PUBLIC_CLIENT_SECRET,
      },
      body: JSON.stringify({ orderId }),
    });

    const result = await response.json();

     return NextResponse.json({result})
  } catch (error) {
    console.error('Error resending OTP:', error);
    return NextResponse.json({ error: 'Internal server issue' }, { status: 500 });
  }
}
