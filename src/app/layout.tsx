import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Optimize font loading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Don't preload mono font as it's less critical
  fallback: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
}

export const metadata: Metadata = {
  title: {
    template: "%s | EK360 Cargo",
    default: "EK360 Cargo - Global Logistics & Freight Solutions",
  },
  description:
    "EK360 Cargo provides comprehensive logistics solutions globally, including air, sea, and land freight forwarding.",
  generator: "Next.js",
  applicationName: "EK360 Cargo",
  keywords: ["logistics", "cargo", "freight", "shipping", "supply chain", "transport", "air freight", "sea freight", "land freight"],
  authors: [{ name: "EK360 Cargo", url: "https://ek360.cargo.com" }],
  creator: "EK360 Cargo",
  publisher: "EK360 Cargo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ek360.cargo.com"),
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="no-js">
      <head>
        {/* Critical preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://d1example12345.cloudfront.net" crossOrigin="anonymous" />
        
        {/* Detect JS availability before page load */}
        <script dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');`
        }} />
        
        {/* Preload critical assets */}
        <link rel="preload" href="https://d1example12345.cloudfront.net/images/posters/home-poster.jpg" as="image" />
        
        {/* Meta tags */}
        <meta name="google-site-verification" content="your-verification-code" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Minimal critical HTML for fast LCP */}
          <div id="critical-hero" className="critical-hero-placeholder md:hidden" />
          
          {children}
          
          {/* Add JSON-LD structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "EK360 Cargo",
                "url": "https://ek360.cargo.com",
                "logo": "https://ek360.cargo.com/logo.png",
                "description": "Global logistics and freight solutions",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Dubai",
                  "addressCountry": "UAE"
                }
              })
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
