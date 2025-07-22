import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getI18n, getScopedI18n } from '@/locales/server'
import { I18nProviderClient } from '@/locales/client'
import { LocaleSelector } from '@/components/locale-selector'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Footer } from '@/components/footer'
import { GlassPanel } from '@/components/ui/glass-panel'
import { NavBar } from '@/components/navbar'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { VerticalNav } from '@/components/vertical-nav'
import { Toaster } from '@/components/ui/toaster'

// Load the S3 domain from our configuration file
import { S3_DOMAIN } from '@/config/cloudfront'

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
    template: "%s | Classic Star Building",
    default: "Classic Star Building - Main Contractors in UAE",
  },
  description:
    "Classic Star Building specializes in luxury villas, warehouses, and major RCC & Steel Works with 20+ years of excellence.",
  generator: "Next.js",
  applicationName: "Classic Star Building",
  keywords: ["construction", "building", "contractor", "luxury villas", "warehouses", "RCC", "steel works", "UAE"],
  authors: [{ name: "Classic Star Building", url: "https://classicstarbuilding.com" }],
  creator: "Classic Star Building",
  publisher: "Classic Star Building",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://classicstarbuilding.com"),
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
        <link rel="preconnect" href={S3_DOMAIN} crossOrigin="anonymous" />
        
        {/* Detect JS availability before page load */}
        <script dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');`
        }} />
        
        {/* Preload critical assets */}
        <link rel="preload" href={`${S3_DOMAIN}/images/posters/home-poster.jpg`} as="image" />
        {/* App logo as favicon */}
        <link rel="icon" href="/images/dark.png" type="image/png" />
        
        {/* Meta tags */}
        <meta name="google-site-verification" content="your-verification-code" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#18181b" />
          <meta name="msapplication-TileColor" content="#18181b" />
          <meta name="theme-color" content="#18181b" />

          {/* Preload key resources */}
          <link rel="preconnect" href={S3_DOMAIN} crossOrigin="anonymous" />
          <link rel="preload" as="font" href="/fonts/Satoshi-Variable.woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href="/fonts/Satoshi-VariableItalic.woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href="/fonts/ClashDisplay-Variable.woff2" crossOrigin="anonymous" />
          <link rel="preload" href={`${S3_DOMAIN}/images/posters/home-poster.jpg`} as="image" />
        </>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}>
        {/* Minimal critical HTML for fast LCP */}
        {children}
        {/* Add JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Classic Star Building",
              "url": "https://classicstarbuilding.com",
              "logo": "https://classicstarbuilding.com/logo.png",
              "description": "Main Contractors in UAE specializing in luxury villas, warehouses, and major RCC & Steel Works.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "UAE"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
