import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { GradientText } from '@/components/ui/gradient-text'

// For TypeScript support of Navigator.connection
interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: '2g' | '3g' | '4g' | 'slow-2g';
}

declare global {
  interface Navigator {
    connection?: NetworkInformation;
  }
}

// Define valid path types
type ValidPath = '/' | '/about-us' | '/sustainability' | '/services' | '/events/upcoming' | '/contact-us';

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string | React.ReactNode
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

// Remove debug logs in production
if (process.env.NODE_ENV === 'development') {
  console.log('CloudFront proxy enabled for videos');
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
      videoSrc,
      bottomImage = null,
      children,
      ...props
    },
    ref,
  ) => {
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const [videoReady, setVideoReady] = React.useState(false);
    const [shouldLoadVideo, setShouldLoadVideo] = React.useState(true);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    // Only use the provided videoSrc
    const videoUrl = videoSrc || "/video/hero.mp4";
    const posterUrl = undefined;

    React.useEffect(() => {
      setShouldLoadVideo(true);
    }, []);

    return (
      <div className={cn("relative min-h-screen h-screen flex flex-col", className)} ref={ref} {...props}>
        <div className="absolute inset-0 z-[0] h-full w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black">
          {/* Video with lazy loading and optimization */}
          {shouldLoadVideo ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className={cn(
                "absolute top-0 left-0 h-full w-full object-cover brightness-[0.7]",
                videoReady ? "opacity-100" : "opacity-0", 
                "transition-opacity duration-500"
              )}
              src={videoUrl}
              onCanPlay={() => setVideoReady(true)}
            />
          ) : null}
        </div>
        
        <section className="relative max-w-full mx-auto z-10 flex-grow flex items-center justify-center min-h-screen h-screen">
          <div className="max-w-screen-xl mx-auto px-4 gap-6 md:gap-12 md:px-8 text-center flex flex-col justify-center min-h-screen h-screen">
            <div className="space-y-3 md:space-y-5 max-w-3xl mx-auto">
              <h1 className="text-xs md:text-sm text-gray-200 group font-geist mx-auto px-3 py-1 md:px-5 md:py-2 bg-white/10 dark:bg-white/5 border-[1px] border-white/20 rounded-3xl w-fit backdrop-blur-sm">
                {title}
                <ChevronRight className="inline w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 duration-300" />
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-6xl tracking-tighter font-geist text-white mx-auto px-4">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                  {subtitle.gradient}
                </span>
              </h2>
              <div className="max-w-full mx-auto font-medium tracking-wide text-xs md:text-sm sm:text-base px-2 text-white dark:text-white mt-4">
                {description}
              </div>
              {ctaText && ctaHref && (
                <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 pt-3 md:pt-4">
                  <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950/80 backdrop-blur-sm text-xs font-medium">
                      <a
                        href={ctaHref}
                        className="inline-flex rounded-full text-center group items-center w-full justify-center text-white border-input border-[1px] border-white/20 hover:bg-white/10 transition-all sm:w-auto py-2 md:py-3 px-6 md:px-8 sm:px-10"
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
          <section className="relative z-10 pb-8 sm:pb-12 md:pb-16 -mt-8 sm:-mt-12 md:-mt-16 critical-content">
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
