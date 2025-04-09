'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, Home, Info, Boxes, Calendar, MessageSquare, Leaf, Package } from 'lucide-react'
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
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    }

    return (
        <nav className="lg:hidden fixed z-50 w-full">
            {/* Mobile Navbar */}
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

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-50 p-2 rounded-full"
                            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                        >
                            {isOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with reduced animation complexity */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-16 pb-6 px-4 h-[100dvh] w-screen overflow-auto"
                    >
                        <div className="flex flex-col space-y-1 mt-4">
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href
                                
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium",
                                            isActive 
                                                ? "bg-primary/10 text-primary" 
                                                : "hover:bg-muted"
                                        )}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        <span>{item.name}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
} 