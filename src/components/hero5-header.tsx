import Link from 'next/link'
import { Logo } from './logo'
import { Home, Boxes, Building2, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Boxes },
  { name: 'Projects', href: '/projects', icon: Building2 },
    { name: 'Contact Us', href: '/contact-us', icon: MessageSquare },
]

export function NewHeader() {
    return (
    <header className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 w-[70vw] max-w-2xl bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl flex justify-center items-center py-1 px-2">
      <nav className="flex w-full justify-between items-center gap-4">
        {[
          <Link key="logo" href="/" className="flex items-center">
            <Logo size="xxsmall" />
          </Link>,
          ...navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center group px-1 py-0.5 rounded-lg transition-all hover:bg-white/60"
            >
              <item.icon size={22} className="mb-0.5 text-gray-700 group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-medium text-gray-700 group-hover:text-primary transition-colors">
                {item.name}
              </span>
                            </Link>
          ))
        ]}
            </nav>
        </header>
    )
}
