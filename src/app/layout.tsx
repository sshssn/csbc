import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://ek360cargo.com"),
  title: "EK360 Cargo - Global Logistics & Shipping Solutions",
  description: "EK360 Cargo provides comprehensive freight, logistics, and supply chain solutions across Dubai, Saudi Arabia, and the GCC region. Fast, reliable, and secure cargo services.",
  keywords: "logistics, cargo, shipping, freight, Dubai, Saudi Arabia, GCC, supply chain, air freight, sea freight, warehousing",
  authors: [{ name: "EK360 Cargo" }],
  robots: "index, follow",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ek360cargo.com",
    siteName: "EK360 Cargo",
    title: "EK360 Cargo - Global Logistics & Shipping Solutions",
    description: "Leading logistics provider in Dubai, Saudi Arabia and GCC region. Offering comprehensive freight and supply chain solutions.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EK360 Cargo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EK360 Cargo - Global Logistics & Shipping Solutions",
    description: "Leading logistics provider in Dubai, Saudi Arabia and GCC region. Offering comprehensive freight and supply chain solutions.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="your-verification-code" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
