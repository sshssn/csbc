'use client'

import { useEffect, useRef, useState } from 'react'

interface TurnstileProps {
  siteKey: string
  onSuccess: (token: string) => void
  onError?: () => void
  theme?: 'light' | 'dark'
  className?: string
}

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: any) => string
      reset: (widgetId: string) => void
    }
  }
}

export function Turnstile({ 
  siteKey, 
  onSuccess, 
  onError, 
  theme = 'light',
  className = '' 
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [widgetId, setWidgetId] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load Turnstile script if not already loaded
    if (typeof window !== 'undefined' && !window.turnstile) {
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
      script.async = true
      script.onload = () => setIsLoaded(true)
      document.head.appendChild(script)
    } else if (typeof window !== 'undefined' && window.turnstile) {
      setIsLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (!isLoaded || !containerRef.current || !siteKey) return

    // Render Turnstile widget
    const id = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: theme,
      callback: (token: string) => {
        onSuccess(token)
      },
      'error-callback': () => {
        onError?.()
      },
      'expired-callback': () => {
        onError?.()
      }
    })

    setWidgetId(id)
  }, [isLoaded, siteKey, theme, onSuccess, onError])

  return (
    <div 
      ref={containerRef} 
      className={`cf-turnstile ${className}`}
    />
  )
} 