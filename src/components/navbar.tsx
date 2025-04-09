import { GradientButton } from "@/components/ui/gradient-button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact-us" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-2xl dark:bg-black/90 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto">
        <div className="flex h-[12.6px] items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3">
              <Logo size="xxsmall" />
            </Link>
            <div className="hidden md:flex md:space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-1 text-[16.8px] transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary font-medium"
                      : "text-gray-700 dark:text-gray-400 text-[16.8px] hover:text-primary/80"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <GradientButton asChild className="h-8.4 text-[14.4px] bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary/80 hover:to-primary/90">
              <Link href="/cargo-tracking">Track Shipment</Link>
            </GradientButton>
          </div>
        </div>
      </div>
    </nav>
  )
}