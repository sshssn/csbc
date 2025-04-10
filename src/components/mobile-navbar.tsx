'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Sun, Moon, Home, Info, Boxes, Calendar, MessageSquare, Leaf, Package } from 'lucide-react'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about-us', icon: Info },
    { name: 'Services', href: '/services', icon: Boxes },
    { name: 'Sustainability', href: '/sustainability', icon: Leaf },
    { name: 'Events', href: '/events/upcoming', icon: Calendar },
    { name: 'Contact Us', href: '/contact-us', icon: MessageSquare },
]

export function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()
    const { theme, setTheme, resolvedTheme } = useTheme()

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
        <nav className="lg:hidden relative z-50 w-full">
            {/* Mobile Navbar - Not sticky */}
            <div 
                className={cn(
                    "transition-all duration-300 px-4 py-2", 
                    isScrolled 
                        ? "bg-background/80 backdrop-blur-lg border-b" 
                        : ""
                )}
            >
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center z-50" onClick={() => setIsOpen(false)}>
                        <Logo size="xxsmall" forceDark={true} />
                    </Link>

                    <div className="flex items-center gap-3">
                        <Link 
                            href="/cargo-tracking" 
                            className="flex items-center gap-1 rounded-full bg-primary/10 text-primary px-3 py-1.5 text-xs font-medium"
                        >
                            <Package className="w-3 h-3" />
                            <span>Track</span>
                        </Link>
                        
                        {mounted && (
                            <button
                                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                                className="rounded-full p-2 bg-gray-100 dark:bg-black focus:outline-none"
                                aria-label="Toggle theme"
                            >
                                {resolvedTheme === 'dark' ? (
                                    <Sun className="h-4 w-4 text-yellow-500" />
                                ) : (
                                    <Moon className="h-4 w-4 text-gray-700" />
                                )}
                            </button>
                        )}

                        {/* Improved Hamburger Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex flex-col justify-center items-center w-10 h-10 relative z-50 rounded-md"
                            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                        >
                            <span className={cn(
                                "bg-primary w-6 h-0.5 rounded-full transition-all duration-300 ease-out",
                                isOpen ? "transform rotate-45 translate-y-[6px]" : "mb-1.5"
                            )} />
                            <span className={cn(
                                "bg-primary w-6 h-0.5 rounded-full transition-all duration-300 ease-out",
                                isOpen ? "opacity-0" : ""
                            )} />
                            <span className={cn(
                                "bg-primary w-6 h-0.5 rounded-full transition-all duration-300 ease-out",
                                isOpen ? "transform -rotate-45 -translate-y-[6px]" : "mt-1.5"
                            )} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Improved Mobile Menu - Full Screen Experience */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background pt-20 pb-6 px-6 h-[100dvh] w-screen overflow-auto flex flex-col"
                    >
                        <div className="flex flex-col space-y-4 mt-8">
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href
                                
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-4 py-4 border-b border-gray-100 dark:border-gray-800 transition-colors font-medium text-lg",
                                            isActive 
                                                ? "text-primary" 
                                                : "text-gray-700 dark:text-gray-300"
                                        )}
                                    >
                                        <item.icon className="h-6 w-6" />
                                        <span>{item.name}</span>
                                    </Link>
                                )
                            })}
                        </div>
                        
                        <div className="mt-auto pt-8">
                            <Link 
                                href="/cargo-tracking"
                                className="flex items-center justify-center gap-2 bg-primary text-white w-full py-4 rounded-lg font-medium text-lg"
                            >
                                <Package className="w-5 h-5" />
                                <span>Track Your Shipment</span>
                            </Link>
                            
                            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                                © {new Date().getFullYear()} EK360 Cargo. All rights reserved.
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
} 