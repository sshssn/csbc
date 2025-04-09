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
        title="EK360 Cargo."
        subtitle={{
          regular: "Your ",
          gradient: "Global Full-Service Logistics Provider."
        }}
        description={
          <>Your trusted partner in global logistics solutions, delivering excellence across <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Air</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Sea</span>, &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Land</span>.</>
        }
        ctaText="Get Started"
        ctaHref="#features"
      />
      <LogoSlider />
      <Features9 id="features" />
      <Content5 />
      <FAQ />
      <CTA />
    </Layout>
  )
}
