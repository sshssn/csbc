'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Sun, Moon, Home, Info, Boxes, Calendar, MessageSquare, Building2 } from 'lucide-react'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Boxes },
    { name: 'Projects', href: '/projects', icon: Building2 },
    { name: 'Contact Us', href: '/contact-us', icon: MessageSquare },
]

export function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()
    // Remove useTheme and dark mode logic

    // Add scroll state for sticky/condensed nav
    const [showFloatingNav, setShowFloatingNav] = useState(false);
    const [condensed, setCondensed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const topBanner = document.querySelector('[data-topbanner]');
            const bannerBottom = topBanner ? topBanner.getBoundingClientRect().bottom : 0;
            setShowFloatingNav(window.scrollY > (bannerBottom || 80));
            setCondensed(window.scrollY > (bannerBottom + 40 || 120));
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Use passive listeners to improve scroll performance
    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])
    
    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])
    
    // Simple menu component to reduce bundle size
    const menuVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return (
        <>
            {/* Bento-style Floating Top Nav for Mobile Only */}
            {showFloatingNav && (
                <div className={`fixed top-3 left-0 w-full flex justify-center z-50 sm:hidden pointer-events-none transition-all duration-300 ${condensed ? 'py-1' : ''}` }>
                    <div className={`pointer-events-auto flex items-center justify-between gap-2 ${condensed ? 'px-3 py-1' : 'px-6 py-2'} rounded-2xl min-w-[45vw] bg-white/95 shadow-2xl backdrop-blur-lg border border-white/30 w-fit mx-auto transition-all duration-300 sm:hidden`} style={{background: 'linear-gradient(90deg, #fff 80%, #f3f4f6 100%)'}}>
                        <div className="flex-1 flex justify-center">
                            <Logo size="xxsmall" className={condensed ? 'w-6 h-6' : 'w-8 h-8'} />
                        </div>
                    </div>
                </div>
            )}
            {/* Top mobile header: logo only */}
            {/* Mobile menu dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="sm:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md"
                    >
                        <div className="flex flex-col py-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "px-4 py-2 text-base transition-colors hover:text-primary",
                                        pathname === item.href
                                            ? "text-primary font-medium"
                                            : "text-gray-700 hover:text-primary/80"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* iOS-style Bottom Navigation for Mobile Only */}
            <nav className="fixed bottom-3 left-0 w-full flex justify-center z-50 sm:hidden pointer-events-none">
                <div className="pointer-events-auto flex w-[95vw] max-w-md justify-between items-center px-2 py-1.5 rounded-2xl bg-white/80 shadow-xl backdrop-blur-md border border-white/20">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    'flex flex-col items-center justify-center flex-1 px-1 py-1 rounded-xl transition-all',
                                    isActive ? 'text-primary font-bold' : 'text-black',
                                    'hover:bg-primary/10'
                                )}
                                aria-label={item.name}
                            >
                                <item.icon className="w-6 h-6 mb-0.5 text-black" />
                                <span className="text-xs leading-none font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    )
} 