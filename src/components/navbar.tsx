import { GradientButton } from "@/components/ui/gradient-button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact-us" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => { setIsMenuOpen(false) }, [pathname])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
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
  function handleScroll() {
    const currentScrollPos = window.scrollY
    setIsScrolled(currentScrollPos > 10)
    const isScrolledDown = prevScrollPos < currentScrollPos
    setVisible(isScrolledDown ? false : true)
    if (Math.abs(prevScrollPos - currentScrollPos) > 5) {
      setPrevScrollPos(currentScrollPos)
    }
  }
  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
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
                    : "text-gray-700 hover:text-primary/80"
                )}
              >
                {item.name}
              </Link>
            ))}
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
                  className={`absolute block h-0.5 w-5 transform transition duration-300 ease-in-out rounded-full bg-gray-700 ${
                    isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 transform transition duration-300 ease-in-out rounded-full bg-gray-700 ${
                    isMenuOpen ? "opacity-0 w-0" : "opacity-100 w-5"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-5 transform transition duration-300 ease-in-out rounded-full bg-gray-700 ${
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
              className="md:hidden border-t bg-white/95 backdrop-blur-xl"
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
                          ? "text-primary font-medium bg-gray-100/80"
                          : "text-gray-700 hover:text-primary/80 hover:bg-gray-50/80"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}