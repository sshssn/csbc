import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function TopBanner() {
    return (
        <div className="bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center py-2 px-4 text-xs sm:text-sm">
                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
                        <Link 
                            href="mailto:info@ek-cargo.com"
                            className="flex items-center gap-1.5 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                        >
                            <Mail className="w-3.5 h-3.5" />
                            <span className="hidden xs:inline">info@ek-cargo.com</span>
                        </Link>
                        <Link 
                            href="tel:+97143709998"
                            className="flex items-center gap-1.5 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                        >
                            <Phone className="w-3.5 h-3.5" />
                            <span>+971 4370 9998</span>
                        </Link>
                    </div>
                    <Link 
                        href="https://maps.app.goo.gl/pzmwvHbVcMncsePt7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors mt-2 sm:mt-0 text-center sm:text-left"
                    >
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="line-clamp-1">Shangri-La Dubai, Sheikh Zayed Road, Dubai, UAE</span>
                    </Link>
                </div>
            </div>
        </div>
    )
} 