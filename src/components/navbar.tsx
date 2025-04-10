import { GradientButton } from "@/components/ui/gradient-button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact-us" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-2xl dark:bg-black/90 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto">
        <div className="flex h-14 md:h-16 items-center justify-between px-3 md:px-4">
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
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 text-gray-700 dark:text-gray-400 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t dark:border-gray-800">
            <div className="px-3 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-sm transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary font-medium"
                      : "text-gray-700 dark:text-gray-400 hover:text-primary/80"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <GradientButton asChild className="w-full h-9 text-sm bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary/80 hover:to-primary/90">
                <Link href="/cargo-tracking" onClick={() => setIsMenuOpen(false)}>Track Shipment</Link>
              </GradientButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}