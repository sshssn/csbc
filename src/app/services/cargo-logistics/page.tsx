'use client'

import Layout from "@/components/layout"
import { GradientText } from "@/components/ui/gradient-text"
import { ConsultationForm } from "@/components/consultation-form"
import { RelatedServices } from "@/components/related-services"
import { BackToTop } from "@/components/back-to-top"
import { motion } from "framer-motion"
import { Ship, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"

const features = [
  "Door-to-door delivery solutions",
  "Real-time shipment tracking",
  "Custom clearance services",
  "Specialized cargo handling",
  "Global network coverage",
  "24/7 customer support"
]

const services = [
  { title: "Cargo, Logistics & Freight", href: "/services/cargo-logistics" },
  { title: "Storage & Warehousing", href: "/services/warehousing" },
  { title: "Military & Defense", href: "/services/military" },
  { title: "Events & Exhibitions", href: "/services/events" },
  { title: "Special Projects", href: "/services/projects" },
  { title: "Charter Flights", href: "/services/charter" },
  { title: "Luxury Cars", href: "/services/luxury-cars" },
  { title: "Luxury Products", href: "/services/luxury-products" }
]

export default function CargoLogistics() {
  const currentIndex = services.findIndex(s => s.href === "/services/cargo-logistics")
  const prevService = services[currentIndex - 1] || services[services.length - 1]
  const nextService = services[currentIndex + 1] || services[0]

  return (
    <Layout>
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <GradientText as="span">Cargo</GradientText>, Logistics & Freight Forwarding
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Comprehensive logistics solutions including air freight, sea freight, and land transport. We handle everything from FCL to LCL shipments with global reach.
              </p>
            </div>

            <div className="aspect-video relative rounded-2xl overflow-hidden mb-16">
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
              <Ship className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-gray-400" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  <GradientText as="span">Key</GradientText> Features
                </h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <ConsultationForm />
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-800">
              <Link href={prevService.href}>
                <GradientButton className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  {prevService.title}
                </GradientButton>
              </Link>
              <Link href={nextService.href}>
                <GradientButton className="flex items-center gap-2">
                  {nextService.title}
                  <ArrowRight className="w-4 h-4" />
                </GradientButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <RelatedServices currentService="/services/cargo-logistics" />
      <BackToTop />
    </Layout>
  )
} 