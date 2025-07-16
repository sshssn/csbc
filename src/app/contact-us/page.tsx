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
import { Turnstile } from '@/components/ui/turnstile'

const Map = dynamic(() => import('@/components/ui/mapbox-map'), { ssr: false });

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const { resolvedTheme } = useTheme();

  const handleTurnstileSuccess = (token: string) => {
    setTurnstileToken(token);
  };

  const handleTurnstileError = () => {
    setTurnstileToken("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileToken) {
      setError("Please complete the security check");
      return;
    }

    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      'cf-turnstile-response': turnstileToken,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        console.log('Submission successful, Ray ID:', result.rayId);
      } else {
        setError(result.error || 'Failed to send message');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="min-h-screen pt-24 px-2 sm:px-4 bg-gradient-to-br from-primary/5 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left: Map and contact info */}
          <div className="flex-1 flex flex-col justify-between rounded-3xl bg-white/70 dark:bg-black/40 backdrop-blur-lg shadow-2xl border border-white/20 dark:border-black/20 p-6 md:p-8 min-h-[480px] animate-fade-in">
            <div className="mb-6">
              <h2 className="text-3xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Our Office</h2>
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
                  <h3 className="text-3xl font-extrabold text-gradient bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Request Consultation</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-base">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>
                </div>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                    <h4 className="text-xl font-semibold mb-2">Thank you!</h4>
                    <p className="text-gray-600 dark:text-gray-300">Your message has been sent. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input id="first-name" name="firstName" placeholder="Enter your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input id="last-name" name="lastName" placeholder="Enter your last name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" />
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
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" placeholder="Type your message here..." required className="resize-none" />
                      </div>
                    </div>
                    {/* Cloudflare Turnstile */}
                    <div className="flex justify-center">
                      <Turnstile
                        siteKey="0x4AAAAAAABkMYinukE5OysO" // Replace with your actual site key
                        onSuccess={handleTurnstileSuccess}
                        onError={handleTurnstileError}
                        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                      />
                    </div>
                    <input type="hidden" name="cf-turnstile-response" value={turnstileToken} />
                    {error && (
                      <div className="text-red-500 text-sm text-center">{error}</div>
                    )}
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
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