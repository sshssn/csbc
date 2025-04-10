import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { GradientText } from '@/components/ui/gradient-text'
import { 
  VIDEO_SOURCES, 
  VIDEO_POSTERS, 
  DEFAULT_POSTER,
  FALLBACK_VIDEO_SOURCES,
  FALLBACK_POSTERS,
  DEFAULT_FALLBACK_POSTER,
  DEFAULT_FALLBACK_VIDEO,
  DIRECT_VIDEO_SOURCES,
  S3_DOMAIN
} from '@/config/cloudfront'

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
    const pathname = usePathname() as ValidPath;
    const [s3Failed, setS3Failed] = React.useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const [videoReady, setVideoReady] = React.useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    // Get the correct video URL based on path and S3 status
    const videoUrl = React.useMemo(() => {
      if (s3Failed) {
        return pathname in FALLBACK_VIDEO_SOURCES 
          ? FALLBACK_VIDEO_SOURCES[pathname] 
          : videoSrc || "/video/hero.mp4";
      }
      return pathname in VIDEO_SOURCES 
        ? VIDEO_SOURCES[pathname] 
        : videoSrc || VIDEO_SOURCES['/'];
    }, [pathname, s3Failed, videoSrc]);

    // Get the correct poster URL based on path and S3 status
    const posterUrl = React.useMemo(() => {
      if (s3Failed) {
        return pathname in FALLBACK_POSTERS 
          ? FALLBACK_POSTERS[pathname] 
          : DEFAULT_FALLBACK_POSTER;
      }
      return pathname in VIDEO_POSTERS 
        ? VIDEO_POSTERS[pathname] 
        : DEFAULT_POSTER;
    }, [pathname, s3Failed]);

    // Check if we should load video based on connection and preferences
    const shouldLoadVideo = React.useMemo(() => {
      // Check for data saver and reduced motion
      const prefersReducedMotion = typeof window !== 'undefined' 
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
        : false;
      const saveData = typeof navigator !== 'undefined' && navigator.connection?.saveData;
      
      // Don't load video if user has data saving or prefers reduced motion
      return !(prefersReducedMotion || saveData);
    }, []);

    // Handle video loading and errors
    React.useEffect(() => {
      if (videoRef.current && shouldLoadVideo) {
        const video = videoRef.current;
        
        const handleLoadedData = () => {
          setIsVideoLoaded(true);
          setVideoReady(true);
          
          // Try to play the video
          const playPromise = video.play();
          
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              // If autoplay fails, try muted autoplay
              video.muted = true;
              video.play().catch((err) => {
                // If still failing, switch to local files
                setS3Failed(true);
              });
            });
          }
        };

        const handleError = () => {
          if (!s3Failed) {
            setS3Failed(true);
          }
        };

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('error', handleError);

        return () => {
          video.removeEventListener('loadeddata', handleLoadedData);
          video.removeEventListener('error', handleError);
        };
      }
    }, [videoUrl, s3Failed, shouldLoadVideo]);

    // Implement lazy loading
    React.useEffect(() => {
      if (videoRef.current && shouldLoadVideo) {
        // Use Intersection Observer for lazy loading
        const options = {
          rootMargin: '0px',
          threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            // Only load video when in viewport
            if (entry.isIntersecting && videoRef.current) {
              // Start loading the video
              videoRef.current.setAttribute('preload', 'auto');
              // Set the proper sources
              const currentSource = videoRef.current.querySelector('source');
              if (currentSource) {
                currentSource.setAttribute('src', videoUrl);
                videoRef.current.load();
              }
              
              observer.unobserve(videoRef.current);
            }
          });
        }, options);

        observer.observe(videoRef.current);
        return () => {
          if (videoRef.current) {
            observer.unobserve(videoRef.current);
          }
        };
      }
    }, [videoUrl, shouldLoadVideo]);

    return (
      <div className={cn("relative min-h-screen flex flex-col", className)} ref={ref} {...props}>
        <div className="absolute inset-0 z-[0] h-full w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black">
          {/* Static background for all devices */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${posterUrl})`, filter: 'brightness(0.7)' }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/80" />
          
          {/* Video with lazy loading and optimization */}
          {shouldLoadVideo && (
            <video
              ref={videoRef}
              autoPlay={false}
              loop
              muted
              playsInline
              preload="none"
              className={cn(
                "absolute top-0 left-0 h-full w-full object-cover brightness-[0.7]",
                videoReady ? "opacity-100" : "opacity-0",
                "transition-opacity duration-500"
              )}
              poster={posterUrl}
              onError={() => {
                setS3Failed(true);
              }}
            >
              <source src="" type="video/mp4" />
              {/* No source initially, will be set by intersection observer */}
            </video>
          )}
        </div>
        
        <section className="relative max-w-full mx-auto z-10 flex-grow flex items-center justify-center">
          <div className="max-w-screen-xl mx-auto px-4 gap-6 md:gap-12 md:px-8 text-center">
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
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-full px-3 py-2 md:px-5 md:py-3 sm:px-7 sm:py-4 inline-block shadow-lg border border-white/10 w-[90vw] md:w-auto max-w-full">
                <div className="max-w-full mx-auto font-medium tracking-wide text-xs md:text-sm sm:text-base px-2 text-white dark:text-white">
                  {description}
                </div>
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
