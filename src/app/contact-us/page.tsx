'use client'

import Layout from "@/components/layout"
import { motion } from "framer-motion"
import { GradientText } from "@/components/ui/gradient-text"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Globe2, Clock, ArrowRight, CheckCircle, Award } from "lucide-react"
import { HeroSection } from "@/components/blocks/hero-section-dark"
import Image from "next/image"
import { BackToTop } from "@/components/back-to-top"

import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { useForm, ValidationError } from '@formspree/react'
import { useRouter } from 'next/navigation'

const Map = dynamic(() => import('@/components/ui/mapbox-map'), { ssr: false });

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mblkrzok");
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  // Redirect to homepage after 3 seconds when form is submitted successfully
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, router]);

  return (
    <Layout>
      <section className="min-h-screen pt-24 px-2 sm:px-4 bg-gradient-to-br from-primary/5 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left: Map and contact info */}
          <div className="flex-1 flex flex-col justify-between rounded-3xl bg-white/70 dark:bg-black/40 backdrop-blur-lg shadow-2xl border border-white/20 dark:border-black/20 p-6 md:p-8 min-h-[480px] animate-fade-in">
            <div className="mb-6">
              <h2 className="text-3xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Our Office</h2>
              <div className="flex items-start gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-gray-700 dark:text-gray-200 text-base font-medium">Al Barsha South 3rd, Miracle Garden, Arjan, The Light Commercial Tower, Unit No 415</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:04-4205898" className="text-gray-700 dark:text-gray-200 text-base underline font-medium">04-4205898</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@classicstarbuilding.com" className="text-gray-700 dark:text-gray-200 text-base underline font-medium">info@classicstarbuilding.com</a>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/30">
              <Map
                mapboxAccessToken="pk.eyJ1Ijoic3Noc3NuIiwiYSI6ImNtZDZkN2QybjA2OG0ycXF2aGwyM2VvZnUifQ.qhN6wRL5XGu_GvWmwAjXFQ"
                style={{ width: '100%', height: '100%', minHeight: 240, borderRadius: '1rem' }}
                marker={{ lng: 55.2471, lat: 25.0700 }}
                zoom={14}
                mapStyle={resolvedTheme === 'dark' ? 'mapbox://styles/mapbox/dark-v11' : 'mapbox://styles/mapbox/streets-v11'}
              />
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="flex-1 flex flex-col justify-center animate-fade-in">
            <Card className="p-6 md:p-8 h-full flex flex-col justify-center rounded-3xl bg-white/80 dark:bg-black/40 shadow-2xl border border-white/20 dark:border-black/20">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-extrabold text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Get In Touch</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-base">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>
                </div>
                {state.succeeded ? (
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-blue-500/10 to-cyan-400/10 rounded-2xl" />
                    <div className="relative bg-white/80 dark:bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-black/20">
                      <div className="text-center space-y-6">
                        {/* Animated Checkmark */}
                        <div className="relative">
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 260, 
                              damping: 20,
                              delay: 0.2 
                            }}
                            className="w-20 h-20 mx-auto bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center"
                          >
                            <motion.div
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ 
                                duration: 0.8, 
                                delay: 0.5,
                                ease: "easeInOut"
                              }}
                            >
                              <CheckCircle className="w-12 h-12 text-white" />
                            </motion.div>
                          </motion.div>
                          
                          {/* Ripple effect */}
                          <motion.div
                            initial={{ scale: 0, opacity: 0.8 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: 0.8,
                              repeat: Infinity,
                              repeatDelay: 2
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
                          />
                        </div>

                        {/* Success Message */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="space-y-3"
                        >
                          <h4 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                            Message Sent Successfully!
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Thank you for reaching out. We'll get back to you within 24 hours.
                          </p>
                        </motion.div>

                        {/* Redirect Message */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="pt-4 border-t border-gray-200 dark:border-gray-700"
                        >
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Redirecting to homepage in <span className="font-semibold text-sky-500">3 seconds</span>...
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input 
                            id="first-name" 
                            name="firstName" 
                            placeholder="Enter your first name" 
                            required 
                          />
                          <ValidationError 
                            prefix="First name" 
                            field="firstName"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input 
                            id="last-name" 
                            name="lastName" 
                            placeholder="Enter your last name" 
                            required 
                          />
                          <ValidationError 
                            prefix="Last name" 
                            field="lastName"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="Enter your email" 
                          required 
                        />
                        <ValidationError 
                          prefix="Email" 
                          field="email"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          placeholder="Enter your phone number (e.g., 0501234567)" 
                        />
                        <ValidationError 
                          prefix="Phone" 
                          field="phone"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Reason for Contact</Label>
                        <Select name="service" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a reason" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <ValidationError 
                          prefix="Service" 
                          field="service"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="Type your message here..." 
                          required 
                          className="resize-none"
                        />
                        <ValidationError 
                          prefix="Message" 
                          field="message"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={state.submitting}>
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
                <div className="mt-8 text-center text-sm text-gray-500">
                  <p>By submitting this form, you agree to our <a href="#" className="text-primary underline">terms of service</a> and <a href="#" className="text-primary underline">privacy policy</a>.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}