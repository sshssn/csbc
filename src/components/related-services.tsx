import { GradientText } from "@/components/ui/gradient-text"
import { ButtonColorful } from "@/components/ui/button-colorful"
import Link from "next/link"
import { motion } from "framer-motion"
import { GradientButton } from '@/components/ui/gradient-button'
import Image from 'next/image'

interface RelatedServicesProps {
  currentService: string
}

const services = [
  { title: "Cargo & Freight", href: "/services/cargo-logistics", image: "/images/services/cargo-logistics.jpg" },
  { title: "Storage & Warehousing", href: "/services/warehousing", image: "/images/services/warehousing.jpg" },
  { title: "Military & Defense", href: "/services/military", image: "/images/services/military.jpg" },
  { title: "Events & Exhibitions", href: "/services/events", image: "/images/services/events.jpg" },
  { title: "Special Projects", href: "/services/projects", image: "/images/services/projects.jpg" },
  { title: "Charter Flights", href: "/services/charter", image: "/images/services/charter.jpg" },
  { title: "Luxury Cars", href: "/services/luxury-cars", image: "/images/services/luxury-cars.jpg" },
  { title: "Luxury Products", href: "/services/luxury-products", image: "/images/services/luxury-products.jpg" }
]

export function RelatedServices({ currentService }: RelatedServicesProps) {
  const relatedServices = services.filter(service => service.href !== currentService).slice(0, 3)

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Explore Our Other <GradientText as="span">Services</GradientText>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Discover more ways we can help your business grow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <GradientButton asChild>
                <Link href={service.href}>Learn More</Link>
              </GradientButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 