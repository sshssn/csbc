'use client'

import Layout from "@/components/layout"
import { HeroSection } from "@/components/blocks/hero-section-dark"
import Features9 from '@/components/features-9'
import Content5 from '@/components/content-5'
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { LogoSlider } from "@/components/logo-slider"
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/animated-counter";
import { BadgeCheck, Globe2, ShieldCheck, Rocket } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

const stats = [
  { icon: BadgeCheck, title: 100, desc: "Satisfied Clients", suffix: "+" },
  { icon: Globe2, title: 100, desc: "Projects Completed", suffix: "+" },
  { icon: ShieldCheck, title: 20, desc: "Years of Experience", suffix: "+" }
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Animated Stats Overlay (from About Us) */}
      <HeroSection 
        title="Leading Main Contractors in UAE."
        subtitle={{
          regular: "Building Excellence, ",
          gradient: "Delivering Quality."
        }}
        description={
          <>
            Specializing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">luxury villas</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">warehouse construction</span> with sustainable building solutions.

            {/* Animated Stats Grid inside Hero */}
            <div className="w-full mt-10 flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.desc}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={cn(
                      "rounded-2xl bg-white/50 border border-white/30 shadow-xl p-6 flex flex-col items-center glass-bento",
                    )}
                    style={{
                      boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.10)',
                      background: 'rgba(255,255,255,0.45)',
                      border: '1.5px solid rgba(255,255,255,0.25)'
                    }}
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
                    <p className="text-base text-gray-700 font-medium text-center">{stat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        }
      />
    </Layout>
  );
}
        videoSrc="https://mhy2q3qipm.ufs.sh/f/nND0FwvkWb7XzLcZh1YgBEP5hvKxN3qOI6fUGZCDLARTrM8m"
        ctaText="Services"
        ctaHref="/services"
        className="min-h-screen flex items-center justify-center"
      />

      {/* Unique Company Vision Section - replaces duplicated Services section */}
      <section className="relative py-20" id="company-vision">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">Our Vision for the Future</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-100 font-medium">
              We are committed to redefining the standards of construction in the UAE by blending innovation, sustainability, and luxury. Our projects are designed to inspire, elevate lifestyles, and contribute to a greener tomorrow.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10">
            <div className="relative w-full md:w-2/3 lg:w-3/4 h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
              <img
                src="/images/modern.jpg"
                alt="Modern Vision Construction"
                className="object-cover object-center w-full h-full rounded-3xl flex-1"
                style={{ objectFit: 'cover' }}
              />
              <div className="mt-6 md:mt-8 text-left max-w-xl mx-auto w-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                  Building Tomorrow, Today
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our team leverages the latest technologies and sustainable practices to deliver projects that stand the test of time. We believe in creating spaces that are not only beautiful and functional, but also environmentally responsible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Company Overview Section - Shortened */}
      <section className="py-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-10 md:p-16 flex flex-col items-center glass-bento">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
              About <span className="text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Classic Star Building</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-center">
              Classic Star Building is a leading main contractor specializing in luxury villas and warehouses in the UAE. Our experienced team delivers the highest quality construction and finishes, from design to completion.
            </p>
            <div className="mt-8 p-4 rounded-xl border border-white/20 text-center bg-white/20 backdrop-blur-md">
              <p className="text-base font-semibold text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Established since 2007 | Commercial License no: 604411
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section - Shortened */}
      <section className="py-16 bg-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-10 md:p-16 flex flex-col items-center glass-bento relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-center">
              Message from the CEO
            </h2>
            <p className="text-lg text-gray-700 mb-4 md:mb-6 italic text-center">
              “We believe in building more than just structures—we build trust, deliver on time, and set new standards for quality. Our passion for luxury villas and innovative warehouses has made us a trusted partner across the UAE.”
            </p>
            <div className="text-base text-gray-700 font-semibold text-center mt-2">— MD. Hannan</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
