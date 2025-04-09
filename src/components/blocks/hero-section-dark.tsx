import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { GradientText } from '@/components/ui/gradient-text'

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string | React.ReactNode
  ctaText?: string
  ctaHref?: string
  videoSrc?: string
  bottomImage?: {
    light: string
    dark: string
  }
  children?: React.ReactNode
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Build products for everyone",
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaText = "Browse courses",
      ctaHref = "#",
      videoSrc = "/video/hero.mp4",
      bottomImage = null,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative min-h-screen flex flex-col", className)} ref={ref} {...props}>
        <div className="absolute inset-0 z-[0] h-full w-full overflow-hidden">
          <video
            key={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 h-full w-full object-cover brightness-85"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <section className="relative max-w-full mx-auto z-10 flex-grow flex items-center justify-center">
          <div className="max-w-screen-xl mx-auto px-4 gap-12 md:px-8 text-center">
            <div className="space-y-5 max-w-3xl mx-auto">
              <h1 className="text-sm text-gray-200 group font-geist mx-auto px-5 py-2 bg-white/10 dark:bg-white/5 border-[1px] border-white/20 rounded-3xl w-fit backdrop-blur-sm">
                {title}
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>
              <h2 className="text-4xl tracking-tighter font-geist text-white mx-auto md:text-6xl">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                  {subtitle.gradient}
                </span>
              </h2>
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-full px-7.4 py-[0.9rem] inline-block shadow-lg border border-white/10 w-[90vw] md:w-auto max-w-full whitespace-nowrap overflow-x-auto scrollbar-hide">
                <div className="max-w-full mx-auto font-medium tracking-wide whitespace-nowrap">
                  {description}
                </div>
              </div>
              {ctaText && ctaHref && (
                <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 pt-4">
                  <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950/80 backdrop-blur-sm text-xs font-medium">
                      <a
                        href={ctaHref}
                        className="inline-flex rounded-full text-center group items-center w-full justify-center text-white border-input border-[1px] border-white/20 hover:bg-white/10 transition-all sm:w-auto py-4 px-10"
                      >
                        {ctaText}
                      </a>
                    </div>
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>
        {children && (
          <section className="relative z-10 pb-16 sm:pb-20 -mt-16 sm:-mt-20">
            <div className="container mx-auto px-4">
              {children}
            </div>
          </section>
        )}
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }
