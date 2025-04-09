'use client'

import React from 'react'
import { ArrowRight, Clock, Globe, BarChart, Shield, Award, PenTool, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Content5() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-black"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[400px] -z-10 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
            
            <div className="container mx-auto px-4 max-w-6xl relative">
                {/* Heading section with animated gradient border */}
                <div className="relative mx-auto max-w-3xl mb-16 text-center">
                    <div className="absolute -inset-1 rounded-lg blur-md bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20"></div>
                    <div className="relative bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Global</span> Logistics
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Seamlessly connecting businesses across continents with precision, reliability, and innovation
                        </p>
                    </div>
                </div>
                
                {/* Main grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Feature image - takes 5 columns on large screens */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden group h-full min-h-[400px] border border-gray-200 dark:border-gray-800">
                            <Image 
                                src="/images/value.jpg" 
                                alt="Global Logistics Network" 
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-white text-2xl font-bold mb-2">Global Reach, Local Expertise</h3>
                                <p className="text-white/90">Operating in over 50 countries with local knowledge and global standards</p>
                                <Link href="/about-us" className="inline-flex items-center text-white mt-4 group/link">
                                    Learn more about our network 
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* Features grid - takes 7 columns on large screens */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Clock,
                                    title: "24/7 Operations",
                                    description: "Round-the-clock service ensuring your logistics needs are met anytime, anywhere",
                                    color: "from-blue-500 to-cyan-400"
                                },
                                {
                                    icon: Globe,
                                    title: "Worldwide Network",
                                    description: "Strategic partnerships across continents ensuring seamless global coverage",
                                    color: "from-purple-500 to-indigo-500"
                                },
                                {
                                    icon: BarChart,
                                    title: "Real-time Analytics",
                                    description: "Advanced tracking and performance analytics for complete visibility",
                                    color: "from-amber-500 to-orange-400"
                                },
                                {
                                    icon: Shield,
                                    title: "Secure Transport",
                                    description: "Industry-leading security protocols protecting your valuable cargo",
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
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Excellence in Every Shipment</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        At EK360 Cargo, we don't just move goods – we deliver peace of mind. Our integrated approach combines cutting-edge technology with decades of expertise to create logistics solutions that transform your supply chain into a competitive advantage.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                {/* Bottom CTA section - Updated to match HeroSection style */}
                <div className="mt-16 text-center">
                    <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#8B5CF6_0%,#EC4899_50%,#8B5CF6_100%)]" />
                        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950/80 px-3 py-1 text-sm font-medium text-gray-900 dark:text-white backdrop-blur-sm">
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
