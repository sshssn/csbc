import { Logo } from "@/components/logo"
import { Icons } from "@/components/ui/icons"
import Link from "next/link"

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact-us' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/classicstarbuilding/',
      icon: Icons.instagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/classic-star-building/',
      icon: Icons.linkedin,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center space-y-8 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="scale-75">
            <Logo size="small" />
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 hover:text-primary transition-colors dark:text-gray-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center space-x-6">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors dark:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Classic Star Building LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 