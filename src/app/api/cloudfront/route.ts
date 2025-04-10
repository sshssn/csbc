import { NextRequest, NextResponse } from 'next/server';

// S3/CloudFront domain
const CLOUDFRONT_URL = 'https://d2h9e6wlbpf4nc.cloudfront.net';

export async function GET(request: NextRequest) {
  try {
    // Get path parameter from the URL
    const searchParams = request.nextUrl.searchParams;
    const path = searchParams.get('path');
    
    // Validate path
    if (!path) {
      return NextResponse.json(
        { error: 'Path parameter is required' },
        { status: 400 }
      );
    }
    
    // Security check: Only allow access to video and image files
    if (!path.match(/\.(mp4|webm|jpg|jpeg|png|gif|webp|avif)$/i)) {
      return NextResponse.json(
        { error: 'Invalid file type requested' },
        { status: 403 }
      );
    }
    
    // Clean the path parameter to prevent directory traversal
    const cleanPath = path.replace(/^\/+/, '').replace(/\.\.+/g, '');
    
    // Construct the CloudFront URL
    const cloudFrontUrl = `${CLOUDFRONT_URL}/${cleanPath}`;
    
    // Fetch the content from CloudFront
    const response = await fetch(cloudFrontUrl, {
      headers: {
        'Origin': process.env.NEXT_PUBLIC_SITE_URL || 'https://ekcargo.dev',
        'Referer': process.env.NEXT_PUBLIC_SITE_URL || 'https://ekcargo.dev',
      },
    });
    
    // If CloudFront returns an error, return a fallback response
    if (!response.ok) {
      return NextResponse.json(
        { error: `CloudFront returned ${response.status}` },
        { status: response.status }
      );
    }
    
    // Get content type from CloudFront response
    const contentType = response.headers.get('content-type') || '';
    
    // Create a new Response with the CloudFront content
    const data = await response.arrayBuffer();
    
    // Create a response with proper headers
    const proxyResponse = new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Access-Control-Allow-Origin': '*',
      },
    });
    
    return proxyResponse;
  } catch (error) {
    console.error('CloudFront proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to proxy content from CloudFront' },
      { status: 500 }
    );
  }
} 