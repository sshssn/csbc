'use client'

import Layout from "@/components/layout"
import { motion } from "framer-motion"
import { GradientText } from "@/components/ui/gradient-text"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Globe2, Clock, ArrowRight, CheckCircle } from "lucide-react"
import { HeroSection } from "@/components/blocks/hero-section-dark"
import Image from "next/image"
import { BackToTop } from "@/components/back-to-top"

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection 
        videoSrc="/video/hero.mp4"
        title="Connect With Us."
        subtitle={{
          regular: "Let's Discuss Your ",
          gradient: "Logistics Requirements"
        }}
        description={
          <>We're here to help with your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">logistics challenges</span> and answer any <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">questions</span> you may have.</>
        }
        ctaText="Get In Touch"
        ctaHref="#contact-form"
      />

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
              {/* Left Column - Contact Info and Map */}
              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/40 dark:bg-gray-950/40 backdrop-blur-2xl rounded-3xl p-8 shadow-lg border border-white/10 dark:border-gray-800/30"
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <GradientText as="span">Contact Information</GradientText>
                    </h2>

                    <div className="space-y-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Shangri-La Dubai, Sheikh Zayed Road, Dubai, UAE
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Phone</h3>
                          <a href="tel:+97143709998" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                            +971 4370 9998
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Email</h3>
                          <a href="mailto:info@ek-cargo.com" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                            info@ek-cargo.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 10:00 AM - 2:00 PM
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 aspect-video rounded-2xl overflow-hidden">
                      <iframe
                        className="dark:filter dark:invert dark:hue-rotate-180 transition-all duration-500 ease-in-out"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.196123456789!2d55.2712!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sShangri-La%20Hotel%2C%20Dubai!5e0!3m2!1sen!2sae!4v1645543212345!5m2!1sen!2sae"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/40 dark:bg-gray-950/40 backdrop-blur-2xl rounded-3xl p-8 shadow-lg border border-white/10 dark:border-gray-800/30"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">
                      <GradientText as="span">Send us a Message</GradientText>
                    </h2>
                    <div className="flex items-center space-x-1 text-sm">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">We're Online</span>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="e.g., Mohammed Al Mansoori"
                          className="w-full bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@company.ae"
                          className="w-full bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number (Optional)
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+971 5X XXX XXXX"
                          className="w-full bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company (Optional)
                        </label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="e.g., Etihad Group LLC"
                          className="w-full bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Freight & Logistics Inquiry"
                        className="w-full bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your logistics requirements and we'll get back to you within 24 hours."
                        className="w-full bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 min-h-[150px]"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="terms"
                            aria-describedby="terms-description"
                            name="terms"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="font-medium text-gray-700 dark:text-gray-300">
                            I agree to the privacy policy
                          </label>
                        </div>
                      </div>

                      <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                          <Button
                            type="submit"
                            className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/30 via-primary/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/40 hover:via-primary/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10"
                          >
                            Send Message
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </span>
                    </div>
                  </form>
                </motion.div>

                {/* Service Areas */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8 bg-white/40 dark:bg-gray-950/40 backdrop-blur-2xl rounded-3xl p-8 shadow-lg border border-white/10 dark:border-gray-800/30"
                >
                  <h2 className="text-2xl font-bold mb-6">
                    <GradientText as="span">Service Areas</GradientText>
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "UAE", emoji: "🇦🇪" },
                      { name: "KSA", emoji: "🇸🇦" }
                    ].map((region, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white/20 dark:bg-gray-900/20 p-3 rounded-xl">
                        <span className="text-xl">{region.emoji}</span>
                        <span className="font-medium">{region.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <h3 className="font-semibold mb-4">Why Choose Us:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "24/7 Customer Support",
                        "Experienced Team",
                        "Global Network",
                        "Fast Response Time",
                        "Customized Solutions",
                        "Transparent Pricing"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <BackToTop />
    </Layout>
  )
} 