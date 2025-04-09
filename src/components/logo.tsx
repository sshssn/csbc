'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
    size?: keyof typeof sizes
    className?: string
    forceDark?: boolean
}

const sizes = {
    xxsmall: { width: 72, height: 24 },
    xsmall: { width: 100, height: 33 },
    small: { width: 120, height: 40 },
    medium: { width: 150, height: 50 },
    large: { width: 180, height: 60 }
}

export function Logo({ size = 'medium', className, forceDark = false }: LogoProps) {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const dimensions = sizes[size]

    if (!mounted) {
        return <div style={{ width: dimensions.width, height: dimensions.height }} />
    }

    return (
        <div className={cn("relative inline-block", className)}>
            <Image
                src={forceDark || resolvedTheme === 'dark' ? '/images/dark.png' : '/images/light.png'}
                alt="EK360 Cargo Logo"
                width={dimensions.width}
                height={dimensions.height}
                className="object-contain"
                priority
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = forceDark || resolvedTheme === 'dark' ? '/images/light.png' : '/images/dark.png';
                }}
            />
        </div>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center', className)}>
            <svg
                className="size-7 w-7 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6 16H4C2.89543 16 2 15.1046 2 14V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V14C22 15.1046 21.1046 16 20 16H18"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6 16V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V16"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 9L16 13"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8 13L12 9"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="ml-2 font-bold text-lg">EK360 Cargo</span>
        </div>
    )
}
