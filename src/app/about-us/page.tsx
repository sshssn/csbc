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
import AnimatedCounter from "@/components/animated-counter";

// 1. Update stats with live counters and Ongoing Projects to 10+
const stats = [
  { icon: BadgeCheck, title: 100, desc: "Satisfied Clients", suffix: "+" },
  { icon: Globe2, title: 100, desc: "Projects Completed", suffix: "+" },
  { icon: ShieldCheck, title: 20, desc: "Years of Experience", suffix: "+" },
  { icon: Rocket, title: 10, desc: "Ongoing Projects", suffix: "+" }
];

export default function AboutUs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        {/* Hero Section with Animated Stats Overlay */}
        <HeroSection 
          videoSrc="https://mhy2q3qipm.ufs.sh/f/nND0FwvkWb7Xh4RDjRGXVqp2Cgry4T3ZlWhRM8jb901nkKzu"
          title="Leading Main Contractors in UAE."
          subtitle={{
            regular: "Building Excellence, ",
            gradient: "Delivering Quality."
          }}
          description={
            <>
              Specializing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">luxury villas</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">warehouse construction</span> with sustainable building solutions.
              {/* Animated Stats Grid inside Hero */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.desc}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-2xl bg-white/10 dark:bg-white/5 border border-white/20 shadow-xl p-6 flex flex-col items-center glass-bento"
                    style={{ boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.10)', background: 'rgba(255,255,255,0.10)', border: '1.5px solid rgba(255,255,255,0.18)' }}
                  >
                    <stat.icon className="w-8 h-8 text-primary mb-2" />
                    <motion.span
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.2 + idx * 0.1 }}
                      className="text-2xl md:text-3xl font-extrabold text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-1"
                    >
                      <AnimatedCounter value={stat.title} suffix={stat.suffix} />
                    </motion.span>
                    <p className="text-base text-gray-700 dark:text-gray-200 font-medium text-center">{stat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </>
          }
          ctaText="Discover Our Services"
          ctaHref="/services"
          className="min-h-screen flex items-center justify-center"
        />

        {/* Company Overview Section - Glass Bento Card */}
        <section className="py-20 bg-transparent">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 p-10 md:p-16 flex flex-col items-center glass-bento"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.18)' }}
            >
              <FadeInHeading as="h2" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                About <span className="text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Classic Star Building</span>
              </FadeInHeading>
              <FadeInParagraph className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed text-center">
                Classic Star Building is a leading main contractor specializing in the construction of luxury villas and warehouses in the United Arab Emirates. With a team of experienced and skilled professionals, we are committed to providing our clients with the highest quality of construction and finishes. We offer a comprehensive range of services, from design and planning to construction and completion. We are also proud to be a leading provider of green building solutions, and we use only the latest and most sustainable materials and methods in our projects.
              </FadeInParagraph>
              <div className="mt-8 p-4 rounded-xl border border-white/20 text-center bg-white/20 dark:bg-white/10 backdrop-blur-md">
                <p className="text-base font-semibold text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Established since 2007 | Commercial License no: 604411
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CEO Message Section - Glass Bento Card, No Image */}
        <section className="py-16 bg-transparent">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 p-10 md:p-16 flex flex-col items-center glass-bento relative"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.18)' }}
            >
              <FadeInHeading as="h2" className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-center">
                Message from the CEO
              </FadeInHeading>
              <FadeInParagraph className="text-lg text-gray-700 dark:text-gray-200 mb-4 md:mb-6 italic text-center">
                “At Classic Star Building, we believe in building more than just structures—we build trust, deliver on time, and set new standards for quality. Our passion for luxury villas and innovative warehouses has made us a trusted partner across the UAE. We’re committed to exceeding your expectations, every step of the way.”
              </FadeInParagraph>
              <div className="text-base text-gray-700 dark:text-gray-200 font-semibold text-center mt-2">— MD. Hannan</div>
            </motion.div>
          </div>
        </section>

        {/* Values Section - Glass Bento Grid */}
        <section className="py-20 bg-transparent">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 p-12 flex flex-col items-center glass-bento mb-12"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.18)' }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">Our Philosophy</span> & Values
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-200 font-medium text-center max-w-2xl mx-auto">
                We believe in building more than just structures—we build trust, innovation, and a legacy of excellence for every client and every project.
              </p>
            </motion.div>
            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { icon: BadgeCheck, value: 100, desc: "Satisfied Clients", suffix: "+" },
                { icon: Globe2, value: 100, desc: "Projects Completed", suffix: "+" },
                { icon: ShieldCheck, value: 20, desc: "Years of Experience", suffix: "+" },
                { icon: Rocket, value: 10, desc: "Ongoing Projects", suffix: "+" }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.desc}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-2xl bg-white/10 dark:bg-white/5 border border-white/20 shadow-xl p-8 flex flex-col items-center glass-bento"
                  style={{ boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.10)', background: 'rgba(255,255,255,0.10)', border: '1.5px solid rgba(255,255,255,0.18)' }}
                >
                  <stat.icon className="w-10 h-10 text-primary mb-4" />
                  <motion.span
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.2 + idx * 0.1 }}
                    className="text-4xl md:text-5xl font-extrabold text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </motion.span>
                  <p className="text-lg text-gray-700 dark:text-gray-200 font-medium text-center">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Values Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 p-8 md:col-span-3 flex flex-col items-center glass-bento relative"
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.18)' }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 via-purple-500/5 to-transparent rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
                    <HeartHandshake className="w-10 h-10 md:w-16 md:h-16 text-primary" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">Our Mission</h3>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                      To deliver exceptional construction services with the highest standards of quality, safety, and sustainability. We aim to create innovative and sustainable building solutions that exceed client expectations while contributing to the development of the UAE's infrastructure.
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Value Cards Grid */}
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
                  title: "Quality", 
                  desc: "Delivering construction excellence with premium materials and skilled craftsmanship", 
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
                  title: "Innovation", 
                  desc: "Implementing cutting-edge construction technologies and sustainable building methods", 
                  color: "purple" as const
                },
                { 
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  ), 
                  title: "Safety", 
                  desc: "Ensuring the highest safety standards on every construction site and project", 
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
                  desc: "Maintaining the highest standards of construction quality and client satisfaction", 
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
                  title: "Sustainability", 
                  desc: "Building with eco-friendly materials and green construction practices",
                  color: "cyan" as const
                },
                { 
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  ), 
                  title: "Transparency", 
                  desc: "Providing clear communication and visibility throughout the construction process", 
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