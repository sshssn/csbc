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
  CheckCircle
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BackToTop } from "@/components/back-to-top"
import { withSuspense } from '@/components/with-suspense'
import { HeroSection } from "@/components/blocks/hero-section-dark"

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
    title: "Cargo, Logistics & Freight Forwarding",
    icon: Ship,
    description: "Comprehensive logistics solutions including air freight, sea freight, and land transport. We handle everything from FCL to LCL shipments with global reach.",
    features: [
      "Door-to-door delivery solutions",
      "Real-time shipment tracking",
      "Custom clearance services",
      "Specialized cargo handling"
    ],
    image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=3540&auto=format&fit=crop",
    accent: "blue"
  },
  {
    title: "Storage & Warehousing Parks",
    icon: Warehouse,
    description: "State-of-the-art warehousing facilities in strategic locations, offering comprehensive storage solutions with value-added services.",
    features: [
      "Temperature-controlled storage",
      "Inventory management systems",
      "24/7 security monitoring",
      "Value-added services"
    ],
    image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?q=80&w=3540&auto=format&fit=crop",
    accent: "amber"
  },
  {
    title: "Military, Defense & Government Logistics",
    icon: ShieldCheck,
    description: "Specialized logistics solutions for defense and government sectors, handling sensitive and critical shipments with utmost security.",
    features: [
      "Secure transportation",
      "Classified cargo handling",
      "Government compliance",
      "Emergency logistics support"
    ],
    image: "https://images.unsplash.com/photo-1696402443627-fcaf13c0fb8e?q=80&w=3540&auto=format&fit=crop",
    accent: "red"
  },
  {
    title: "Fairs, Exhibitions & Events Logistics",
    icon: Tent,
    description: "End-to-end event logistics management, from planning to execution, ensuring seamless delivery and setup for exhibitions worldwide.",
    features: [
      "Exhibition material handling",
      "On-site support",
      "Time-critical delivery",
      "Global event coverage"
    ],
    image: "https://images.unsplash.com/photo-1645303229276-99278e23102c?q=80&w=3474&auto=format&fit=crop",
    accent: "purple"
  },
  {
    title: "Special & Mega Projects",
    icon: Factory,
    description: "Expert handling of large-scale industrial projects, from power plants to infrastructure development, with specialized equipment and planning.",
    features: [
      "Project cargo specialists",
      "Heavy lift operations",
      "Industrial logistics",
      "Turn-key solutions"
    ],
    image: "/images/services/mega.png",
    accent: "green"
  },
  {
    title: "Charter Flights Services",
    icon: Plane,
    description: "Customized air charter solutions for both passenger and cargo operations, with global reach and specialized handling capabilities.",
    features: [
      "24/7 charter availability",
      "Global network access",
      "Specialized cargo handling",
      "Express solutions"
    ],
    image: "/images/services/charter.png",
    accent: "cyan"
  },
  {
    title: "Luxury Cars Shipments",
    icon: Car,
    description: "Premium transportation services for high-end vehicles, ensuring secure and professional handling from origin to destination.",
    features: [
      "Enclosed transport",
      "GPS tracking",
      "Insurance coverage",
      "Door-to-door service"
    ],
    image: "/images/services/luxurycars.png",
    accent: "indigo"
  },
  {
    title: "Luxury Products Logistics",
    icon: ShoppingBag,
    description: "Specialized handling of high-value luxury goods with premium security measures and time-critical delivery solutions.",
    features: [
      "High-security storage",
      "Temperature control",
      "Value protection",
      "Express delivery"
    ],
    image: "/images/services/luxuryproducts.png",
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
        videoSrc="/video/hero4.mp4"
        title="Logistics & Cargo Services."
        subtitle={{
          regular: "Comprehensive Solutions for ",
          gradient: "Global Logistics Challenges."
        }}
        description={
          <>Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 font-bold">freight & logistics</span> excellence across <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 font-bold">global supply chains</span>.</>
        }
        ctaText="Explore Services"
        ctaHref="#services-list"
      />
      
      <section className="relative py-20" id="services-list">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <GradientText as="span">Comprehensive</GradientText> Logistics Solutions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From standard freight to specialized logistics, we deliver excellence across every service.
            </p>
          </div>

          {/* Custom Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const accentClasses = getAccentClasses(service.accent);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                >
                  <div className="absolute inset-0 z-0 transition-opacity opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-white/10 dark:from-gray-800/5 dark:to-gray-900/10" />
                  
                  <div className={cn(
                    "absolute h-1 top-0 left-0 right-0 bg-gradient-to-r transition-transform duration-300 transform origin-left scale-x-0 group-hover:scale-x-100",
                    accentClasses.split(' ')[0] + " " + accentClasses.split(' ')[1]
                  )} />

                  <div className="flex flex-col h-full">
                    <div className="relative w-full aspect-video">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <div className={cn(
                        "absolute top-4 right-4 p-2 rounded-lg z-20",
                        `bg-${service.accent}-100 dark:bg-${service.accent}-900/30`
                      )}>
                        <service.icon className={cn(
                          "w-6 h-6",
                          `text-${service.accent}-700 dark:text-${service.accent}-400`
                        )} />
                      </div>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className={cn(
                          "inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white",
                        )}>
                          {service.title}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className={cn(
                                "w-4 h-4 mt-0.5 flex-shrink-0",
                                `text-${service.accent}-500 dark:text-${service.accent}-400`
                              )} />
                              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Added CTA Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-gray-50/50 via-gray-50/70 to-white dark:from-gray-900/50 dark:via-gray-900/70 dark:to-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-200/40 dark:bg-grid-gray-800/20 bg-[center_top_-1px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-800">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Optimize Your <GradientText as="span">Logistics</GradientText> Experience?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get in touch with our experts to discuss how our comprehensive logistics solutions can transform your supply chain operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Globe2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Global Network</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Access our worldwide logistics infrastructure and partner network.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Trusted Security</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Industry-leading security measures for all shipments and storage.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Custom Solutions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tailored logistics plans designed for your specific needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Expert Team</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Industry veterans with decades of combined experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/contact-us">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <span className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/30 via-primary/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/40 hover:via-primary/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10 text-base">
                      Contact Our Logistics Experts
                    </span>
                  </div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <BackToTop />
    </Layout>
  )
}

export default withSuspense(Services) 