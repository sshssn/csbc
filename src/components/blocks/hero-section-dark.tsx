import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { GradientText } from '@/components/ui/gradient-text'
import { VIDEO_SOURCES, VIDEO_POSTERS, DEFAULT_POSTER } from '@/config/cloudfront'

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
      videoSrc,
      bottomImage = null,
      children,
      ...props
    },
    ref,
  ) => {
    const pathname = usePathname() as ValidPath;
    // Use CloudFront video sources
    const videoUrl = (pathname && pathname in VIDEO_SOURCES) 
      ? VIDEO_SOURCES[pathname] 
      : videoSrc || VIDEO_SOURCES['/'];
    
    // Get poster image from CloudFront
    const posterUrl = (pathname && pathname in VIDEO_POSTERS)
      ? VIDEO_POSTERS[pathname]
      : DEFAULT_POSTER;
    
    // Performance optimization states
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(true); // Default to mobile for SSR
    const [shouldLoadVideo, setShouldLoadVideo] = React.useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    
    // Check if we should show video based on user preference and device capabilities
    React.useEffect(() => {
      // Performance detection function
      const checkPerformance = () => {
        // Check for device, connection, and user preferences that might indicate poor performance
        const isMobileDevice = window.innerWidth < 768;
        const hasSaveData = Boolean(window.navigator.connection?.saveData);
        const hasSlowConnection = window.navigator.connection?.effectiveType === 'slow-2g' || 
                                 window.navigator.connection?.effectiveType === '2g';
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const hasSlowDevice = /iPhone|iPad|iPod|Android/.test(window.navigator.userAgent) && 
                             (window.navigator as any).deviceMemory !== undefined && 
                             (window.navigator as any).deviceMemory < 4;
                               
        // Combine all factors
        const shouldOptimize = isMobileDevice || hasSaveData || hasSlowConnection || prefersReducedMotion || hasSlowDevice;
        
        setIsMobile(shouldOptimize);
        
        // Even on desktop, only load video if performance metrics are good
        const canLoadVideo = !shouldOptimize && 
                           'connection' in navigator && 
                           (navigator.connection as NetworkInformation)?.effectiveType === '4g';
        
        setShouldLoadVideo(canLoadVideo);
      };
      
      // Run performance check
      checkPerformance();
      
      // Set up resizing listener
      const handleResize = () => {
        checkPerformance();
      };
      
      window.addEventListener('resize', handleResize, { passive: true });
      
      // Lazy load video using Intersection Observer
      if (!isMobile && ref && 'current' in ref && ref.current) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              // Small delay to prioritize other critical resources
              setTimeout(() => {
                setIsLoaded(true);
              }, 300);
              observer.disconnect();
            }
          },
          { threshold: 0.1 }
        );
        
        observer.observe(ref.current);
        
        return () => {
          observer.disconnect();
          window.removeEventListener('resize', handleResize);
        };
      }
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [ref, isMobile]);
    
    // Implement preconnect for CloudFront domain
    React.useEffect(() => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = 'https://d1example12345.cloudfront.net';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }, []);
    
    return (
      <div className={cn("relative min-h-screen flex flex-col", className)} ref={ref} {...props}>
        {/* Critical CSS placeholder - visible immediately during load */}
        <div className="critical-hero-placeholder" />
        
        <div className="absolute inset-0 z-[0] h-full w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black">
          {/* Static background for all devices */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${posterUrl})`, filter: 'brightness(0.7)' }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/80" />
          
          {/* Video for high-performance devices only */}
          {isLoaded && shouldLoadVideo && (
            <video
              ref={videoRef}
              key={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute top-0 left-0 h-full w-full object-cover brightness-[0.7]"
              poster={posterUrl}
              onLoadStart={() => {
                if (videoRef.current) {
                  videoRef.current.playbackRate = 0.8; // Slightly slower playback for better performance
                }
              }}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}
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
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-full px-5 py-3 sm:px-7 sm:py-4 inline-block shadow-lg border border-white/10 w-[90vw] md:w-auto max-w-full">
                <div className="max-w-full mx-auto font-medium tracking-wide text-sm sm:text-base">
                  {description}
                </div>
              </div>
              {ctaText && ctaHref && (
                <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 pt-4">
                  <a
                    href={ctaHref}
                    className="inline-flex rounded-full text-center items-center justify-center text-white bg-primary hover:bg-primary/90 transition-colors sm:w-auto py-3 sm:py-4 px-8 sm:px-10 font-medium"
                  >
                    {ctaText}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {children && (
          <section className="relative z-10 pb-16 sm:pb-20 -mt-16 sm:-mt-20 critical-content">
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
