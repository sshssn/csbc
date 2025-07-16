'use client'

import { useEffect, useState, useRef } from 'react'
import { ChevronUp, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const [isAtBottom, setIsAtBottom] = useState(false)
    const [showCheck, setShowCheck] = useState(false)
    const checkTimeout = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.pageYOffset
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const isBottom = windowHeight + scrolled >= documentHeight - 10
            setIsAtBottom(isBottom)
            setIsVisible(scrolled > 300)
        }
        window.addEventListener('scroll', toggleVisibility)
        toggleVisibility()
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    useEffect(() => {
        if (isAtBottom) {
            setShowCheck(true)
            if (checkTimeout.current) clearTimeout(checkTimeout.current)
            checkTimeout.current = setTimeout(() => setShowCheck(false), 1000)
        } else {
            setShowCheck(false)
            if (checkTimeout.current) clearTimeout(checkTimeout.current)
        }
    }, [isAtBottom])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        setIsAtBottom(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed right-4 sm:right-8 z-50"
                    style={{
                        bottom: typeof window !== 'undefined' && window.innerWidth <= 640 ? '96px' : '2rem',
                    }}
                >
                    <div className="relative backdrop-blur-xl group overflow-hidden rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-emerald-500/30 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 border border-white/10 dark:border-white/5 rounded-full" />
                        <motion.button
                            onClick={scrollToTop}
                            className={cn(
                                'h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-lg flex items-center justify-center relative z-10',
                                'shadow-lg shadow-black/5 dark:shadow-white/5 transition-all duration-300 ease-in-out',
                                'hover:bg-white/20 dark:hover:bg-black/20'
                            )}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                {showCheck ? (
                                    <motion.span
                                        key="check"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center justify-center"
                                    >
                                        <Check className="w-6 h-6 text-green-500" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="arrow"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center justify-center"
                                    >
                                        <ChevronUp className="w-6 h-6 text-black dark:text-white" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}