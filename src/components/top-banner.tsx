import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function TopBanner() {
    return (
        <div className="bg-white border-b border-gray-100">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-2 px-4 text-xs sm:text-sm">
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
                    <Link 
                        href="mailto:info@classicstarbuilding.com"
                        className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors"
                    >
                        <Mail className="w-3.5 h-3.5" />
                        <span className="hidden xs:inline">info@classicstarbuilding.com</span>
                    </Link>
                    <span className="flex items-center gap-1.5 text-gray-600">
                        <Phone className="w-3.5 h-3.5" />
                        <span>04-4205898 Monday - Friday: 8am - 5pm</span>
                    </span>
                </div>
                <span className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors mt-2 sm:mt-0 text-center sm:text-left">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="line-clamp-1">Al Barsha South 3rd Miracle Garden, Arjan The Light Commercial Tower, Unit No 415</span>
                </span>
            </div>
        </div>
    )
} 