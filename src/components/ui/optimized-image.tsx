'use client'

import Image, { ImageProps as NextImageProps } from 'next/image'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<NextImageProps, 'onLoad'> {
  fallbackSrc?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  className,
  imgClassName,
  fallbackSrc = '/images/placeholder.jpg',
  width,
  height,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  
  useEffect(() => {
    // Only set up intersection observer if not priority
    if (priority) {
      setIsInView(true)
      return
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' } // Start loading 200px before it enters viewport
    )
    
    const container = document.getElementById(`image-container-${alt?.replace(/\s+/g, '-')}`)
    if (container) {
      observer.observe(container)
    }
    
    return () => observer.disconnect()
  }, [alt, priority])
  
  if (!isInView) {
    // Return placeholder before in view
    return (
      <div
        id={`image-container-${alt?.replace(/\s+/g, '-')}`}
        className={cn('bg-gray-100 dark:bg-gray-800 relative overflow-hidden', className)}
        style={{ width: typeof width === 'number' ? `${width}px` : width, height: typeof height === 'number' ? `${height}px` : height }}
      />
    )
  }
  
  return (
    <div 
      id={`image-container-${alt?.replace(/\s+/g, '-')}`}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Loading skeleton */}
      {loading && !error && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse" />
      )}
      
      <Image
        src={error ? fallbackSrc : src}
        alt={alt || ""}
        width={width}
        height={height}
        className={cn(
          'transition-opacity duration-300',
          loading ? 'opacity-0' : 'opacity-100',
          imgClassName
        )}
        onLoadingComplete={() => setLoading(false)}
        onError={() => {
          setError(true)
          setLoading(false)
        }}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
    </div>
  )
} 