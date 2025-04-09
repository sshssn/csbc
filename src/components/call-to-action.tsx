'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Truck, Ship, Plane } from 'lucide-react'
import { GradientButton } from '@/components/ui/gradient-button'

export default function CallToAction() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-black">
            <div className="container mx-auto flex flex-col items-center justify-center space-y-4 px-4 md:px-6 max-w-6xl">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready To Ship?</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Get in touch with our logistics experts today to discuss your cargo needs.
                    </p>
                </div>
                <div className="mx-auto flex w-full flex-col justify-center gap-4 sm:flex-row sm:items-center">
                    <GradientButton asChild>
                        <Link href="/contact-us">Contact Us</Link>
                    </GradientButton>
                    <GradientButton asChild variant="variant">
                        <Link href="/cargo-tracking">Track Shipment</Link>
                    </GradientButton>
                </div>
            </div>
        </section>
    )
}
