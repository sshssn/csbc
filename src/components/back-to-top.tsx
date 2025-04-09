'use client'

import { useEffect, useState } from 'react'
import { ChevronUp, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const [isAtBottom, setIsAtBottom] = useState(false)

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
                    className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50"
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
                            <motion.div
                                initial={false}
                                animate={{
                                    rotate: isAtBottom ? 360 : 0,
                                    scale: isAtBottom ? [1, 1.2, 1] : 1
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    {isAtBottom ? (
                                        <motion.div
                                            key="check"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Check className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="arrow"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}