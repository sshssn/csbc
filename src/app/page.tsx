'use client'

import Layout from "@/components/layout"
import { HeroSection } from "@/components/blocks/hero-section-dark"
import Features9 from '@/components/features-9'
import Content5 from '@/components/content-5'
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { LogoSlider } from "@/components/logo-slider"

export default function Home() {
  return (
    <Layout>
      <HeroSection 
        title="Classic Star Building."
        subtitle={{
          regular: "Leading ",
          gradient: <>
            Main Contractors in{' '}
            <span>
              <span className="font-bold text-red-600">U</span>
              <span className="font-bold text-green-600">A</span>
              <span className="font-bold text-black dark:text-white">E</span>
            </span>.
          </>
        }}
        description={
          <>Specializing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Luxury Villas</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Warehouses</span>, &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Major RCC & Steel Works</span> with 20+ years of excellence.</>
        }
        ctaText="Our Solutions"
        ctaHref="#features"
        videoSrc="/video/hero.mp4"
      />
      <Features9 id="features" />
      <Content5 />
      <FAQ />
      <CTA />
    </Layout>
  )
}
