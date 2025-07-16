'use client'
import Link from 'next/link'
import { Logo } from './logo'
import { Menu, Sun, Moon, Home, Info, Boxes, Calendar, MessageSquare, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { ExpandableTabs } from '@/components/ui/expandable-tabs'

const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about-us', icon: Info },
    { name: 'Services', href: '/services', icon: Boxes },
    { name: 'Projects', href: '/projects', icon: require('lucide-react').Building2 },
    { name: 'Sustainability', href: '/sustainability', icon: Leaf },
    { name: 'Contact Us', href: '/contact-us', icon: MessageSquare },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    React.useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const tabs = menuItems.map(item => ({
        title: item.name,
        icon: item.icon,
        href: item.href
    }))

    const handleTabChange = (index: number | null) => {
        if (index !== null && tabs[index]) {
            window.location.href = tabs[index].href
        }
    }

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-4 py-1">
                <div className={cn('mx-auto max-w-6xl transition-all duration-300 lg:px-8', isScrolled ? 'bg-background/80 max-w-5xl rounded-2xl border backdrop-blur-lg lg:px-6' : '')}>
                    <div className="relative flex items-center justify-between py-2">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center py-1">
                                <Logo size="xxsmall" forceDark={true} />
                            </Link>
                        </div>

                        <div className="hidden lg:flex justify-center flex-1 mx-8">
                            <ExpandableTabs 
                                tabs={tabs}
                                onChange={handleTabChange}
                                className="bg-transparent border-none shadow-none w-auto"
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                                className="rounded-full p-2.5 bg-gray-100 dark:bg-black focus:outline-none"
                                aria-label="Toggle theme"
                            >
                                {mounted && (resolvedTheme === 'dark' ? (
                                    <Sun className="h-6 w-6 text-yellow-500" />
                                ) : (
                                    <Moon className="h-6 w-6 text-gray-700" />
                                ))}
                            </button>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 p-2.5 cursor-pointer lg:hidden hover:bg-gray-100 dark:hover:bg-black rounded-full">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 h-6 w-6 duration-200 text-gray-900 dark:text-white" />
                                <svg 
                                    className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto h-6 w-6 -rotate-180 scale-0 opacity-0 duration-200 text-gray-900 dark:text-white" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    {menuState && (
                        <div className="lg:hidden w-full p-4 mt-2 mb-4 rounded-2xl border bg-background shadow-lg shadow-zinc-300/10 dark:shadow-none">
                            <ExpandableTabs 
                                tabs={tabs}
                                onChange={handleTabChange}
                                className="w-full bg-transparent border-none shadow-none"
                            />
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
