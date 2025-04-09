'use client'

import { HeroHeader } from './hero5-header'
import { type ReactNode } from 'react'
import { GradientTracing } from './ui/gradient-tracing'
import { usePathname } from 'next/navigation'
import { TopBanner } from './top-banner'
import { BackToTop } from './back-to-top'
import { Footer } from './ui/footer'

export default function Layout({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const isCargoTracking = pathname === '/cargo-tracking'

    return (
        <>
            {!isCargoTracking && (
                <>
                    <TopBanner />
                    <HeroHeader />
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
                <main>
                    {children}
                </main>
            )}
            <Footer />
            <BackToTop />
        </>
    )
} 