'use client'

import Layout from "@/components/layout";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { 
  BadgeCheck, 
  Globe2,
  ShieldCheck,
  Rocket,
  HeartHandshake
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from 'react'
import { Suspense } from 'react';
import { HeroSection } from "@/components/blocks/hero-section-dark";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FadeInHeading, FadeInParagraph, ParallaxImage } from "@/components/page-animations";

const stats = [
  { icon: BadgeCheck, title: "200+", desc: "Satisfied Clients" },
  { icon: Globe2, title: "50+", desc: "Warehouses" },
  { icon: ShieldCheck, title: "250+", desc: "Destinations" },
  { icon: Rocket, title: "70+", desc: "Special Projects" }
];

export default function AboutUs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        {/* Hero Section without Stats for proper full video background */}
        <HeroSection 
          videoSrc="/video/hero2.mp4"
          title="Your Global Logistics Partner."
          subtitle={{
            regular: "Connecting Continents, ",
            gradient: "Delivering Trust."
          }}
          description={
            <>Over a decade of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 font-bold">pioneering logistics</span> solutions tailored to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">global needs</span>.</>
          }
          ctaText="Discover Our Services"
          ctaHref="/services"
        />

        {/* Stats Cards Section - Separate from hero for better mobile display */}
        <section className="relative z-10 py-12 md:py-16 bg-gradient-to-b from-gray-900 to-gray-900/90 dark:from-black dark:to-black/95 -mt-20 md:-mt-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-black/50 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <value.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CEO Message Section - Fixed for mobile */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-black/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-center">
                {/* CEO Image Container - Fixed for mobile */}
                <div className="relative mx-auto w-[80%] md:w-[80%] pt-12 md:pt-0">
                  <GlowingEffect 
                    disabled={false} 
                    glow={true} 
                    variant="default" 
                    spread={40} 
                    blur={20}
                  >
                  <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                    <Image
                      src="/images/ceo.jpg"
                      alt="CEO Portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  </GlowingEffect>
                  <div className="absolute -bottom-6 -right-6 max-w-[80%] bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 dark:border-gray-800">
                    <p className="font-semibold text-base md:text-lg text-gray-900 dark:text-white">Nader Nashash</p>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">CEO & Founder</p>
                  </div>
                </div>
                
                {/* CEO Message - Fixed for mobile */}
                <div>
                  <FadeInHeading as="h2" className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                    Message from the CEO
                  </FadeInHeading>
                  <FadeInParagraph className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6 italic">
                    &quot;Integrated Logistics Pioneer, Delivering Excellence Worldwide. Bringing the top-notch of our global experience by your side!&quot;
                  </FadeInParagraph>
                  <div className="space-y-3 md:space-y-4 text-gray-600 dark:text-gray-300">
                    <FadeInParagraph delay={0.2}>
                      As an integrated logistics provider, we are constantly innovating to offer our clients individually optimized logistics services.
                    </FadeInParagraph>
                    <FadeInParagraph delay={0.3}>
                      The clearing and forwarding industry, in addition to cargo, transportation, and logistics, is ever-changing and becoming even more sophisticated.
                    </FadeInParagraph>
                    <FadeInParagraph delay={0.4}>
                      At EK 360 Cargo, we are determined to continuously improve our service delivery methods and policies with the objective of exceeding client expectations and staying ahead of the competition.
                    </FadeInParagraph>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                        <Link
                          href="/contact-us"
                          className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/30 via-primary/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/40 hover:via-primary/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-3 md:py-4 px-6 md:px-10 text-sm md:text-base"
                        >
                          Get in Touch
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Fixed for mobile */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-16">
              <FadeInHeading>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">Philosophy</span> & Values
                </h2>
              </FadeInHeading>
              <FadeInParagraph className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                These principles guide every decision we make and every service we deliver
              </FadeInParagraph>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Main Values Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-black/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-xl transition-shadow md:col-span-3 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 via-purple-500/5 to-transparent rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
                    <HeartHandshake className="w-10 h-10 md:w-16 md:h-16 text-primary" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">Our Mission</h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      With a focus on the dynamic challenges of global trade, our mission is to design, build and deliver flexible, integrated, best-in-class and cost-effective logistics solutions on time and with quality. We aim to create a sustainable business and innovative future through a differentiated logistics experience.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Value Cards Grid - Fixed for mobile */}
              {[
                { 
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <path d="M12 18v-6"/>
                      <path d="M8 15h8"/>
                    </svg>
                  ), 
                  title: "Trust", 
                  desc: "Building lasting relationships through reliability and transparency", 
                  color: "blue" as const
                },
                { 
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                      <path d="M2 12h20"/>
                    </svg>
                  ), 
                  title: "Global Reach", 
                  desc: "Connecting businesses worldwide with seamless logistics solutions", 
                  color: "purple" as const
                },
                { 
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  ), 
                  title: "Security", 
                  desc: "Ensuring your cargo's safety with advanced tracking and protection", 
                  color: "green" as const
                },
                { 
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <path d="M22 4 12 14.01l-3-3"/>
                    </svg>
                  ), 
                  title: "Excellence", 
                  desc: "Delivering exceptional service quality in every aspect of our operations", 
                  color: "amber" as const
                },
                { 
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                      <path d="M12 2v8"/>
                      <path d="m4.93 10.93 1.41 1.41"/>
                      <path d="M2 18h2"/>
                      <path d="M20 18h2"/>
                      <path d="m19.07 10.93-1.41 1.41"/>
                      <path d="M22 22H2"/>
                      <path d="m8 22 4-10 4 10"/>
                      <path d="M12 14v4"/>
                    </svg>
                  ), 
                  title: "Innovation", 
                  desc: "Pioneering new solutions for tomorrow's logistics challenges",
                  color: "cyan" as const
                },
                { 
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  ), 
                  title: "Visibility", 
                  desc: "Providing clear, real-time information throughout the logistics process", 
                  color: "rose" as const
                },
              ].map((value, index) => {
                const colorMap = {
                  blue: "from-blue-500 to-indigo-600 bg-blue-50 dark:bg-blue-950/20",
                  purple: "from-purple-500 to-indigo-600 bg-purple-50 dark:bg-purple-950/20",
                  green: "from-green-500 to-emerald-600 bg-green-50 dark:bg-green-950/20",
                  amber: "from-amber-500 to-orange-600 bg-amber-50 dark:bg-amber-950/20",
                  cyan: "from-cyan-500 to-blue-600 bg-cyan-50 dark:bg-cyan-950/20",
                  rose: "from-rose-500 to-pink-600 bg-rose-50 dark:bg-rose-950/20"
                } as const;
                
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-black/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 p-5 md:p-6"
                >
                  <div className="absolute inset-0 z-0 transition-opacity opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-white/10 dark:from-gray-800/5 dark:to-gray-900/10" />
                  
                  <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${colorMap[value.color]} transition-transform duration-300 transform origin-left scale-x-0 group-hover:scale-x-100`} />

                  <div className="relative flex flex-col h-full">
                    <div className={`rounded-xl p-3 mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ${value.color === 'cyan' ? 'bg-cyan-50 dark:bg-cyan-950/20 text-cyan-600 dark:text-cyan-400' : 
                    value.color === 'blue' ? 'bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400' :
                    value.color === 'purple' ? 'bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400' :
                    value.color === 'green' ? 'bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400' :
                    value.color === 'amber' ? 'bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400' :
                    'bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400'}`}>
                      {value.icon({ className: "w-5 h-5 md:w-6 md:h-6" })}
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{value.desc}</p>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sustainability Section - Fixed for mobile */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-background mt-8 md:mt-0">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-12 items-center">
                <div className="relative order-2 lg:order-1 pt-12 lg:pt-0">
                  <ParallaxImage>
                    <div className="aspect-square relative rounded-2xl overflow-hidden">
                      <Image
                        src="/images/value.jpg"
                        alt="Sustainability"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </ParallaxImage>
                  <div className="absolute -bottom-6 -left-6 max-w-[80%] bg-white/60 dark:bg-black/60 backdrop-blur-[6px] rounded-2xl p-4 md:p-6 shadow-lg border border-white/20 dark:border-gray-800/50">
                    <HeartHandshake className="w-8 h-8 md:w-12 md:h-12 text-primary mb-2 md:mb-3" />
                    <p className="font-semibold text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:from-primary/90 dark:to-purple-500">CSR & Sustainability</p>
                    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300">Making a difference</p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <FadeInHeading as="h2" className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                    Our Commitment to Sustainability
                  </FadeInHeading>
                  <div className="space-y-3 md:space-y-4 text-gray-600 dark:text-gray-300">
                    <FadeInParagraph delay={0.2}>
                      This is the world we all want. Making it happens? That&apos;s going to take leadership, creativity - and the full force of our collective ambitions.
                    </FadeInParagraph>
                    <FadeInParagraph delay={0.3}>
                      The built environment holds many of the keys to this future. Fighting climate change. Protecting biodiversity. Adapting to growing populations and changing lifestyles. Creating a society where every individual is valued and able to thrive.
                    </FadeInParagraph>
                    <FadeInParagraph delay={0.4}>
                      We are at a significant and exciting chapter in history. As our business keeps growing in scale and influence, we&apos;re harnessing our unique capabilities to be a force for positive change.
                    </FadeInParagraph>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                        <Link
                          href="/sustainability"
                          className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/30 via-primary/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/40 hover:via-primary/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-3 md:py-4 px-6 md:px-10 text-sm md:text-base"
                        >
                          Learn More About Our Impact
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Suspense>
  );
} 