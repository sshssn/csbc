'use client'

import { useEffect } from 'react'

// Extend PerformanceEntry for LCP
interface LargestContentfulPaintEntry extends PerformanceEntry {
  element?: Element;
  renderTime?: number;
  loadTime?: number;
  size?: number;
  url?: string;
  id?: string;
}

// Usage: <Suspense fallback={null}><PerformanceOptimizations /></Suspense>
export function PerformanceOptimizations() {
  useEffect(() => {
    // Optimize LCP (Largest Contentful Paint)
    const makeLCPFaster = () => {
      // Add rel=preload for LCP assets dynamically when required
      const maybeAddPreload = (url: string, as: string) => {
        if (!document.querySelector(`link[href="${url}"]`)) {
          const preload = document.createElement('link')
          preload.rel = 'preload'
          preload.href = url
          preload.as = as
          document.head.appendChild(preload)
        }
      }
      
      // Find LCP element and preload its image if it's an image
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        
        if (entries.length > 0) {
          const lcpElement = entries[0] as LargestContentfulPaintEntry
          if (lcpElement.element) {
            const lcpNode = document.querySelector(`img[src*="${lcpElement.element.getAttribute?.('src')}"]`)
            
            if (lcpNode instanceof HTMLImageElement && lcpNode.src) {
              maybeAddPreload(lcpNode.src, 'image')
            }
          }
        }
        
        observer.disconnect()
      })
      
      observer.observe({ type: 'largest-contentful-paint', buffered: true })
    }
    
    // Delay non-critical JS
    const optimizeNonCriticalJS = () => {
      // Wait until idle to load heavier JS
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          // We could add any non-critical scripts here
          // For example, analytics, etc.
        })
      } else {
        setTimeout(() => {
          // Fallback for browsers that don't support requestIdleCallback
        }, 2000)
      }
    }
    
    // Disable hover effects on mobile for better performance
    const optimizeMobileInteractions = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      
      if (isTouchDevice) {
        document.documentElement.classList.add('touch-device')
        
        // Add specific CSS override
        const style = document.createElement('style')
        style.textContent = `
          .touch-device .hover-effect {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        `
        document.head.appendChild(style)
      }
    }
    
    // Register optimization functions to execute at appropriate times
    if (document.readyState === 'complete') {
      optimizeNonCriticalJS()
      optimizeMobileInteractions()
    } else {
      window.addEventListener('load', optimizeNonCriticalJS)
      window.addEventListener('DOMContentLoaded', optimizeMobileInteractions)
    }
    
    // Run immediately for critical optimizations
    makeLCPFaster()
    
    return () => {
      window.removeEventListener('load', optimizeNonCriticalJS)
      window.removeEventListener('DOMContentLoaded', optimizeMobileInteractions)
      // Any performance observers we've created should be disconnected
    }
  }, [])
  
  // This component doesn't render anything
  return null
} 