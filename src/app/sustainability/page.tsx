'use client'

import Layout from "@/components/layout";
import { HeroSection } from "@/components/blocks/hero-section-dark";
import { GradientText } from "@/components/ui/gradient-text";
import { motion } from "framer-motion";
import { 
  Leaf, 
  Recycle, 
  Truck, 
  Lightbulb, 
  Target, 
  HeartHandshake,
  Globe2,
  BarChart,
  CheckCircle,
  TreePine,
  Factory,
  Wind,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from 'react';
import { cn } from "@/lib/utils";

// Define types for accent colors
type AccentColor = 'emerald' | 'green' | 'teal' | 'blue' | 'cyan';

// Initiatives data with proper typing
interface Initiative {
  icon: React.ElementType;
  title: string;
  description: string;
  accent: AccentColor;
}

const initiatives: Initiative[] = [
  { 
    icon: Recycle, 
    title: "Construction Waste Reduction", 
    description: "Implementing strict waste management and recycling protocols on all our construction sites to minimize landfill impact.",
    accent: "emerald"
  },
  { 
    icon: Lightbulb, 
    title: "Energy-Efficient Building Design", 
    description: "Incorporating energy-saving technologies and materials in every project, including LED lighting, insulation, and smart systems.",
    accent: "cyan" 
  },
  { 
    icon: Factory, 
    title: "Sustainable Materials Sourcing", 
    description: "Prioritizing the use of locally sourced, recycled, and certified green materials to reduce our carbon footprint.",
    accent: "blue" 
  },
  { 
    icon: HeartHandshake, 
    title: "Community & Environmental Partnerships", 
    description: "Collaborating with local organizations and authorities to promote green spaces, tree planting, and community well-being.",
    accent: "green" 
  },
];

// Goals data
const goals = [
  "Achieve 30% reduction in construction waste by 2028",
  "Increase use of certified green materials to 60% of all projects",
  "Design all new projects to exceed UAE energy efficiency standards",
  "Expand on-site renewable energy (solar, etc.) to 50% of eligible projects",
  "Support local community green initiatives and tree planting annually",
  "Train 100% of staff in sustainable construction best practices"
];

// Utility function to get accent color classes
const getAccentClasses = (accent: AccentColor): string => {
  const accentMap: Record<AccentColor, string> = {
    emerald: "from-emerald-500 to-emerald-700 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400",
    green: "from-green-500 to-green-700 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400",
    teal: "from-teal-500 to-teal-700 bg-teal-50 dark:bg-teal-950/20 text-teal-700 dark:text-teal-400",
    blue: "from-blue-500 to-blue-700 bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400",
    cyan: "from-cyan-500 to-cyan-700 bg-cyan-50 dark:bg-cyan-950/20 text-cyan-700 dark:text-cyan-400"
  };
  
  return accentMap[accent] || "from-emerald-500 to-emerald-700 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400";
};

export default function SustainabilityPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        {/* Hero Section - UNTOUCHED */}
        <HeroSection 
          videoSrc="https://mhy2q3qipm.ufs.sh/f/nND0FwvkWb7XCEvCwIaSRlBiutDohmJ105kjbZqnPeAMaTFX"
          title="Sustainable Construction."
          subtitle={{
            regular: "Building the Future, ",
            gradient: "Responsibly."
          }}
          description={
            <>Committed to sustainable construction and environmental care.</>
          }
          ctaText="Learn About Our Impact"
          ctaHref="#initiatives"
        />

        {/* Commitment Section - REDESIGNED */}
        <section className="py-16 md:py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <div className="absolute -left-4 -top-4 w-20 h-20 rounded-full bg-gradient-to-br from-green-400/40 to-emerald-500/40 blur-2xl" />
                    <div className="absolute -right-10 bottom-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/30 to-teal-500/30 blur-3xl" />
                    
                    <div className="relative bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
                      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
                        <Leaf className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                        Our Environmental <GradientText as="span">Commitment</GradientText>
                      </h2>
                      <div className="space-y-4 text-gray-600 dark:text-gray-300">
                        <p className="text-lg">
                          At Classic Star Building, we believe that responsible construction is essential for a sustainable future. We are dedicated to reducing our environmental impact, building energy-efficient structures, and creating positive change in the communities we serve.
                        </p>
                        <p>
                          Our approach goes beyond compliance. We innovate with green building techniques, invest in sustainable materials, and empower our teams to deliver projects that are both high-quality and environmentally conscious.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid grid-cols-2 gap-6"
                >
                  {[
                    { 
                      icon: TreePine, 
                      title: "Carbon Offset", 
                      description: "31,240 tons of CO₂ offset through our verified reforestation partners",
                      accent: "emerald" as AccentColor
                    },
                    { 
                      icon: Factory, 
                      title: "Sustainable Facilities", 
                      description: "37 warehouses globally with green certifications",
                      accent: "blue" as AccentColor 
                    },
                    { 
                      icon: Wind, 
                      title: "Renewable Energy", 
                      description: "42% of operations powered by renewable energy sources",
                      accent: "teal" as AccentColor
                    },
                    { 
                      icon: Sparkles, 
                      title: "Water Conservation", 
                      description: "18.3 million gallons of water saved annually",
                      accent: "cyan" as AccentColor
                    }
                  ].map((stat, index) => {
                    const accentClasses = getAccentClasses(stat.accent);
                    return (
                      <div 
                        key={index}
                        className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-800 flex flex-col"
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center mb-3",
                          `bg-${stat.accent}-50 dark:bg-${stat.accent}-950/20`
                        )}>
                          <stat.icon className={cn(
                            "w-5 h-5",
                            `text-${stat.accent}-600 dark:text-${stat.accent}-400`
                          )} />
                        </div>
                        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{stat.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
                      </div>
                    )
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Initiatives Section - REDESIGNED */}
        <section id="initiatives" className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 via-gray-50/70 to-white dark:from-gray-900/50 dark:via-gray-900/70 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <GradientText as="span" className="text-sm font-medium px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-800">
                  Our Green Initiatives
                </GradientText>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
                  Making a Positive <GradientText as="span">Environmental Impact</GradientText>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  We are actively advancing sustainable construction practices—reducing waste, saving energy, and building for a greener tomorrow in the UAE.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {initiatives.map((initiative, index) => {
                const accentClasses = getAccentClasses(initiative.accent);
                
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

                    <div className="p-6">
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                        `bg-${initiative.accent}-50 dark:bg-${initiative.accent}-950/20`
                      )}>
                        <initiative.icon className={cn(
                          "w-6 h-6",
                          `text-${initiative.accent}-600 dark:text-${initiative.accent}-400`
                        )} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {initiative.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {initiative.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Goals Section - REDESIGNED */}
        <section className="py-16 md:py-24 bg-white dark:bg-black overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
                {/* Sustainable Image Bento Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-black rounded-2xl overflow-hidden shadow-xl border border-gray-800"
                >
                  <div className="relative">
                    <div className="aspect-[4/3]">
                      <Image
                        src="/images/sustainable.png"
                        alt="Sustainable Logistics Future"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                        priority
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">🍃</span>
                        <h3 className="text-2xl font-bold text-white">Sustainable Construction Future</h3>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex space-x-1">
                          {[1, 2, 3].map((_, i) => (
                            <div key={i} className={`w-2 h-8 rounded-full bg-emerald-400 animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }} />
                          ))}
                        </div>
                        <p className="ml-3 text-lg text-white/90 font-medium bg-black/20 backdrop-blur-sm rounded-md px-3 py-1">
                          Measuring Our Progress
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Goals Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Sustainability</span> Goals
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Our journey towards sustainability is ongoing. We set ambitious goals, measure our progress, and continually seek new ways to build responsibly and reduce our impact on the environment.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {goals.map((goal, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                            <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          </div>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{goal}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <Link href="/contact-us">
                      <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                          <span className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/30 via-primary/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/40 hover:via-primary/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-3 sm:py-4 px-6 sm:px-10 text-sm sm:text-base">
                            Partner With Us for a Sustainable Future
                          </span>
                        </div>
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Sustainability CTA - NEW */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50/50 via-gray-50/70 to-white dark:from-gray-900/50 dark:via-gray-900/70 dark:to-black overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-grid-gray-200/40 dark:bg-grid-gray-800/20 bg-[center_top_-1px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-800">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400">Green Building</span> Movement
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Together, we can shape a more sustainable construction industry—balancing progress with environmental responsibility for generations to come.
                </p>
              </div>
              
              <div className="flex items-center justify-center">
                <Link href="/contact-us">
                  <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#84D894,#07A14C,#40B677,#84D894)]" />
                    <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                      <span className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/30 via-green-400/20 to-transparent dark:from-zinc-300/5 dark:via-green-500/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/40 hover:via-green-400/30 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-green-500/30 transition-all sm:w-auto py-4 px-10 text-base">
                        Get in Touch
                      </span>
                    </div>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Suspense>
  );
} 