import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, service, message, 'cf-turnstile-response': turnstileToken } = body

    // Get Ray ID from Cloudflare headers
    const rayId = request.headers.get('cf-ray') || 'unknown'
    const cfConnectingIp = request.headers.get('cf-connecting-ip') || 'unknown'

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Turnstile token is required' },
        { status: 400 }
      )
    }

    // Verify with Cloudflare Turnstile
    const verificationResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY, // Add this to your environment variables
        response: turnstileToken,
        remoteip: cfConnectingIp,
      }),
    })

    const verificationResult = await verificationResponse.json()

    if (!verificationResult.success) {
      console.error('Turnstile verification failed:', verificationResult)
      return NextResponse.json(
        { error: 'Security check failed' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the submission with Ray ID

    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      rayId,
      ip: cfConnectingIp,
      timestamp: new Date().toISOString(),
    })

    // For now, just return success
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      rayId,
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 