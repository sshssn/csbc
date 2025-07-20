'use client'

import { type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { GradientTracing } from './ui/gradient-tracing'
import { useEffect } from 'react';
import { Icons } from './ui/icons'
import dynamic from 'next/dynamic'

// Critical path components loaded immediately
import { TopBanner } from './top-banner'
import { MobileNavbar } from './mobile-navbar'
import { Navbar } from './navbar'
import { NewHeader } from './hero5-header'

// Dynamically load non-critical components 
const Footer = dynamic(() => import('./ui/footer').then(mod => mod.Footer), {
  ssr: false,
  loading: () => <div className="h-64 bg-background" />
})

const BackToTop = dynamic(() => import('./back-to-top').then(mod => mod.BackToTop), {
  ssr: false
})

// Dynamically import performance optimizations to reduce initial bundle
const PerformanceOptimizations = dynamic(
  () => import('./performance-optimizations').then(mod => mod.PerformanceOptimizations),
  { ssr: false, loading: () => null }
)

export default function Layout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    // Remove useTheme and dark mode logic
    useEffect(() => {
      // Optionally, add any WhatsApp widget script here if needed
    }, []);
    return (
        <>
            {/* Performance Optimizations */}
            <PerformanceOptimizations />
            
            <TopBanner />
            {/* Only show HeroHeader on large screens (remove Navbar) */}
            <div className="hidden lg:block">
                <NewHeader />
            </div>
            <MobileNavbar />
            
            <main className="overflow-x-hidden">
                {children}
            </main>
            <Footer />
            <BackToTop />
            {/* WhatsApp Floating Button - Official Black Icon */}
            <a
              href="https://wa.me/971529208432"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="fixed z-50 bg-transparent border-none"
              style={{
                position: 'fixed',
                // Move up by 7% on mobile so it doesn't overlap with bottom nav
                bottom: typeof window !== 'undefined' && window.innerWidth <= 640 ? 'calc(80px + 7vh)' : '24px',
                left: '24px',
                zIndex: 1000,
                padding: 0,
                background: 'none',
                border: 'none',
                display: 'block',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                transition: 'transform 0.2s',
              }}
            >
              <Icons.whatsapp style={{ width: 36, height: 36, display: 'block' }} />
            </a>
        </>
    )
} 