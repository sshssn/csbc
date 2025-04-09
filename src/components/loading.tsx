'use client'

import { useEffect, useState, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { GradientTracing } from '@/components/ui/gradient-tracing'
import { withSuspense } from '@/components/with-suspense'

function LoadingAnimationContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GradientTracing width={60} height={60} />
    </motion.div>
  )
}

export const LoadingAnimation = withSuspense(LoadingAnimationContent); 