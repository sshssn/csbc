'use client'

import dynamic from 'next/dynamic'
import { type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { GradientTracing } from './ui/gradient-tracing'

// Critical path components loaded immediately
import { TopBanner } from './top-banner'
import { MobileNavbar } from './mobile-navbar'

// Dynamically load non-critical components 
const HeroHeader = dynamic(() => import('./hero5-header').then(mod => mod.HeroHeader), {
  ssr: true,
  loading: () => <div className="h-16 lg:h-20" />
})

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
    const pathname = usePathname()
    const isCargoTracking = pathname === '/cargo-tracking'

    return (
        <>
            {/* Performance Optimizations */}
            <PerformanceOptimizations />
            
            {!isCargoTracking && (
                <>
                    <TopBanner />
                    <MobileNavbar />
                    <div className="hidden lg:block">
                        <HeroHeader />
                    </div>
                </>
            )}
            {isCargoTracking ? (
                <div className="flex min-h-screen flex-col">
                    <div className="flex items-center justify-center h-screen">
                        <GradientTracing 
                            height={40}
                            width={40}
                        />
                    </div>
                </div>
            ) : (
                <main className="overflow-x-hidden">
                    {children}
                </main>
            )}
            <Footer />
            <BackToTop />
        </>
    )
} 