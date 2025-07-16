import { GradientButton } from "@/components/ui/gradient-button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2 } from "lucide-react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

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
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  
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

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b dark:border-gray-800",
        visible ? "translate-y-0" : "-translate-y-full",
        isMenuOpen
          ? "bg-white/95 backdrop-blur-xl"
          : isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-white/90 backdrop-blur-md",
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
          <div className="hidden md:flex md:space-x-1 items-center">
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
            <Link href="/projects" className="ml-2 flex items-center gap-1 p-2 rounded-full hover:bg-primary/10 transition" aria-label="Projects">
              <Building2 className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary font-medium">Projects</span>
            </Link>
            {/* Desktop Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="ml-2 rounded-full p-2 bg-gray-100 dark:bg-black focus:outline-none flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700" />
                )}
              </button>
            )}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            
            {/* Modern Hamburger Button */}
            <button
              aria-label="Toggle menu"
              className="flex md:hidden justify-center items-center w-10 h-10 rounded-full bg-primary/5 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 relative flex justify-center items-center">
                <span
                  className={`absolute block h-0.5 w-5 transform transition duration-300 ease-in-out rounded-full bg-gray-700 dark:bg-gray-300 ${
                    isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 transform transition duration-300 ease-in-out rounded-full bg-gray-700 dark:bg-gray-300 ${
                    isMenuOpen ? "opacity-0 w-0" : "opacity-100 w-5"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-5 transform transition duration-300 ease-in-out rounded-full bg-gray-700 dark:bg-gray-300 ${
                    isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animations */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
              animate={{ opacity: 1, height: 'auto', overflow: 'hidden' }}
              exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t dark:border-gray-800 bg-white/95 backdrop-blur-xl dark:bg-black/95"
            >
              <motion.div 
                className="px-4 py-4 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-3 text-sm transition-colors hover:text-primary rounded-md",
                        pathname === item.href
                          ? "text-primary font-medium bg-gray-100/80 dark:bg-gray-900/80"
                          : "text-gray-700 dark:text-gray-400 hover:text-primary/80 hover:bg-gray-50/80 dark:hover:bg-gray-900/50"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  className="pt-2 pb-1"
                >
                  <div className="relative overflow-hidden rounded-md p-[1.5px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <Link 
                      href="/projects"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-10 w-full items-center justify-center rounded-[6px] bg-white dark:bg-gray-950 px-3 py-2 text-sm font-medium text-gray-900 dark:text-white transition-colors hover:bg-gray-50/90 dark:hover:bg-gray-900/90"
                    >
                      View Projects
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}