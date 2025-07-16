'use client'

import Layout from "@/components/layout"
import { GradientText } from "@/components/ui/gradient-text"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Plane,
  Ship,
  Truck,
  Warehouse,
  Building2,
  Briefcase,
  Globe2,
  ShieldCheck,
  Factory,
  Car,
  ShoppingBag,
  Users,
  Tent,
  ArrowRight,
  CheckCircle,
  Home,
  Hammer,
  Wrench,
  HardHat
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BackToTop } from "@/components/back-to-top"
import { withSuspense } from '@/components/with-suspense'
import { HeroSection } from "@/components/blocks/hero-section-dark"
import { GradientButton } from "@/components/ui/gradient-button"

// Define a type for the service accent
type AccentColor = 'blue' | 'amber' | 'red' | 'purple' | 'green' | 'cyan' | 'indigo' | 'rose';

// Update the services array item type
interface ServiceItem {
  title: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  image: string;
  accent: AccentColor;
}

const services: ServiceItem[] = [
  {
    title: "Luxury Villa Construction in the UAE",
    icon: Home,
    description: "Crafting bespoke luxury villas that blend architectural brilliance with the highest standards of comfort and exclusivity. Our expert team delivers iconic residences tailored for the UAE’s most discerning clients.",
    features: [
      "Signature villa designs for elite lifestyles",
      "Premium materials & smart home integration",
      "Turnkey project management from concept to completion",
      "Award-winning craftsmanship recognized across the UAE"
    ],
    image: "/images/luxury.jpg",
    accent: "indigo"
  },
  {
    title: "Warehouse Construction & Structural Upgrades",
    icon: Warehouse,
    description: "Specialists in large-scale warehouse development, major RCC and steelworks modifications, and future-ready logistics hubs. We optimize every build for efficiency, durability, and operational excellence.",
    features: [
      "Advanced RCC & steel structure engineering",
      "Custom layouts for logistics and storage",
      "Rapid project delivery for business continuity",
      "Compliance with UAE industrial standards"
    ],
    image: "/images/warehouse.jpg",
    accent: "amber"
  },
  {
    title: "Modern & Elegant Architectural Design",
    icon: Globe2,
    description: "Elevating spaces with contemporary, elegant design solutions that reflect the UAE’s dynamic spirit. Our architects create visually stunning, functional environments for homes and businesses alike.",
    features: [
      "Cutting-edge design with timeless appeal",
      "Seamless integration of form and function",
      "Sustainable, eco-conscious materials",
      "Personalized approach for every client"
    ],
    image: "/images/modern.jpg",
    accent: "rose"
  }
]

// Utility function to get accent color classes with proper typing
const getAccentClasses = (accent: AccentColor): string => {
  const accentMap: Record<AccentColor, string> = {
    blue: "from-blue-500 to-blue-700 bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400",
    amber: "from-amber-500 to-amber-700 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400",
    red: "from-red-500 to-red-700 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400",
    purple: "from-purple-500 to-purple-700 bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400",
    green: "from-green-500 to-green-700 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400",
    cyan: "from-cyan-500 to-cyan-700 bg-cyan-50 dark:bg-cyan-950/20 text-cyan-700 dark:text-cyan-400",
    indigo: "from-indigo-500 to-indigo-700 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400",
    rose: "from-rose-500 to-rose-700 bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400"
  };
  
  return accentMap[accent] || "from-primary to-primary/70 bg-primary/5 text-primary";
};

function Services() {
  return (
    <Layout>
      <HeroSection 
        videoSrc="https://mhy2q3qipm.ufs.sh/f/nND0FwvkWb7XO4v1AJGKAb5g9m7QhRXHFwyv1ltEiVf4P8cj"
        title="Construction Services."
        subtitle={{
          regular: "Comprehensive Solutions for ",
          gradient: "Building Excellence."
        }}
        description={
          <>Expert construction services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 font-bold">luxury villas</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 font-bold">warehouse construction</span> with sustainable building practices.</>
        }
        ctaText="Explore Services"
        ctaHref="#services-list"
      />
      
      <section className="relative py-20" id="services-list">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Elevating UAE Skylines</span> with Unmatched Craftsmanship
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 font-medium">
              Discover the art of building: from iconic luxury villas to advanced industrial spaces, our expertise shapes the future of construction in the Emirates.
            </p>
          </div>

          {/* Custom Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="group relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 hover:scale-105 transition-all duration-500 min-h-[520px] flex flex-col glass-bento"
                  style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.18)' }}
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                    <div className="absolute top-4 right-4 p-3 rounded-xl bg-white/30 backdrop-blur-md shadow-lg z-20">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="inline-block px-4 py-2 text-lg font-bold rounded-full bg-black/40 text-white shadow-md backdrop-blur-sm border border-white/20">
                        {service.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-200 mb-6 text-base leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-base text-gray-700 dark:text-gray-200">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto flex flex-col gap-2">
                      <GradientButton 
                        asChild 
                        className="w-full text-lg font-semibold py-3"
                      >
                        <Link href="/contact-us">
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </GradientButton>
                      <a href="/projects" className="block text-primary underline text-base hover:text-primary/80 text-center">See Related Projects</a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      <BackToTop />
    </Layout>
  )
}

export default withSuspense(Services) 