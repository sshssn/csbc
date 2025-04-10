import { GradientButton } from "@/components/ui/gradient-button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact-us" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Handle scroll events for navbar hiding
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY
    
    // Add scrolled class when scrolled
    setIsScrolled(currentScrollPos > 10)
    
    // Auto-hide navbar on scroll down, show on scroll up
    const isScrolledDown = prevScrollPos < currentScrollPos
    setVisible(isScrolledDown ? false : true)
    
    // Only update on sufficient scroll change to prevent jitter
    if (Math.abs(prevScrollPos - currentScrollPos) > 5) {
      setPrevScrollPos(currentScrollPos)
    }
  }, [prevScrollPos])
  
  // Set up scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
  
  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <nav 
      className={cn(
        "fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300 border-b dark:border-gray-800 shadow-sm",
        visible ? "translate-y-0" : "-translate-y-full",
        isMenuOpen ? "bg-white dark:bg-black" : "bg-white/90 dark:bg-black/90",
        isScrolled ? "shadow-md" : ""
      )}
    >
      <div className="container mx-auto">
        <div className="flex h-12 md:h-16 items-center justify-between px-3 md:px-4">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo size="xxsmall" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-1 text-sm transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary font-medium"
                    : "text-gray-700 dark:text-gray-400 hover:text-primary/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <GradientButton asChild className="hidden md:flex h-8 text-sm bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary/80 hover:to-primary/90">
              <Link href="/cargo-tracking">Track Shipment</Link>
            </GradientButton>
            
            {/* Mobile Menu Button - Optimized for speed */}
            <button
              aria-label="Toggle menu"
              className="md:hidden p-1.5 text-gray-700 dark:text-gray-400 hover:text-primary focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide transition for smoothness */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t dark:border-gray-800",
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-3 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-sm transition-colors hover:text-primary rounded-md",
                  pathname === item.href
                    ? "text-primary font-medium bg-gray-100 dark:bg-gray-900"
                    : "text-gray-700 dark:text-gray-400 hover:text-primary/80 hover:bg-gray-50 dark:hover:bg-gray-900/50"
                )}
              >
                {item.name}
              </Link>
            ))}
            <GradientButton asChild className="w-full h-9 mt-2 text-sm bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary/80 hover:to-primary/90">
              <Link href="/cargo-tracking">Track Shipment</Link>
            </GradientButton>
          </div>
        </div>
      </div>
    </nav>
  )
}