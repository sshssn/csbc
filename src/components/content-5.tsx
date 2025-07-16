'use client'

import React from 'react'
import { ArrowRight, Clock, Globe, BarChart, Shield, Award, PenTool, ChevronRight, Building2, Home, Hammer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Content5() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 bg-white dark:bg-black"></div>
            
            <div className="container mx-auto px-4 max-w-6xl relative">
                {/* Heading section with animated gradient border */}
                <div className="relative mx-auto max-w-3xl mb-16 text-center">
                    <div className="absolute -inset-1 rounded-lg blur-md bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20"></div>
                    <div className="relative bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600" style={{ WebkitTextFillColor: 'initial' }}>Excellence</span> in Construction
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Specializing in luxury villas and warehouse construction with sustainable building practices across the UAE
                        </p>
                    </div>
                </div>
                
                {/* Main grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Feature image - takes 5 columns on large screens */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden group h-full min-h-[400px] border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-primary/10 to-purple-500/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-white text-2xl font-bold mb-2">UAE Construction Leaders</h3>
                                <p className="text-white/90">20+ years of experience delivering exceptional construction projects across all Emirates</p>
                                <Link href="/about-us" className="inline-flex items-center text-white mt-4 group/link">
                                    Learn more about our expertise 
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Building2 className="w-32 h-32 text-primary/20" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Features grid - takes 7 columns on large screens */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Building2,
                                    title: "Main Contractors",
                                    description: "Leading main contractors specializing in luxury villas and warehouse construction",
                                    color: "from-blue-500 to-cyan-400"
                                },
                                {
                                    icon: Home,
                                    title: "Luxury Villas",
                                    description: "Expert construction of high-end luxury villas with premium finishes",
                                    color: "from-purple-500 to-indigo-500"
                                },
                                {
                                    icon: Hammer,
                                    title: "Quality Construction",
                                    description: "Premium materials and skilled craftsmanship ensuring exceptional results",
                                    color: "from-amber-500 to-orange-400"
                                },
                                {
                                    icon: Shield,
                                    title: "Green Building",
                                    description: "Sustainable construction practices using eco-friendly materials and methods",
                                    color: "from-green-500 to-emerald-400"
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative group p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden"
                                >
                                    <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${feature.color} transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}></div>
                                    <feature.icon className={`h-10 w-10 mb-4 bg-gradient-to-br ${feature.color} text-white p-2 rounded-lg`} />
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* Vision statement */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm border border-white/20 dark:border-gray-800/50"
                        >
                            <div className="flex items-start gap-4">
                                <Award className="h-12 w-12 text-primary flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Excellence in Every Project</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        At Classic Star Building, we don't just construct buildings – we create lasting legacies. Our integrated approach combines cutting-edge construction technology with decades of expertise to deliver projects that exceed expectations and stand the test of time.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                {/* Bottom CTA section - Updated to match HeroSection style */}
                <div className="mt-16 text-center">
                    <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                            <Link
                                href="/services"
                                className="inline-flex rounded-full text-center group items-center w-full justify-center text-gray-900 dark:text-white border-input border-[1px] border-transparent dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all sm:w-auto py-3 px-8"
                            >
                                Explore Our Services
                                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                            </Link>
                        </div>
                    </span>
                </div>
            </div>
        </section>
    )
}
