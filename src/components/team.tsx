import Link from 'next/link'
import { Card } from "@/components/ui/card"

export default function Team() {
    return (
        <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-black">
                            Leadership
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Message from the CEO
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Discover our vision and commitment to excellence in logistics.
                        </p>
                    </div>
                </div>
                
                <div className="mt-16">
                    <Card className="p-8 bg-gray-50 dark:bg-black border-0 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            <div className="md:col-span-1">
                                <img 
                                    src="/images/ceo.jpg" 
                                    alt="CEO Portrait" 
                                    className="rounded-lg shadow-md object-cover w-full h-96"
                                />
                                <div className="text-center mt-4">
                                    <h4 className="font-bold text-xl">Nader Nashash</h4>
                                    <p className="text-gray-500 dark:text-gray-400">CEO & FOUNDER</p>
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="text-2xl font-bold mb-4">Our Vision for Excellence</h3>
                                <blockquote className="border-l-4 border-primary pl-4 italic mb-6 text-gray-700 dark:text-gray-300">
                                    "Integrated Logistics Pioneer, Delivering Excellence Worldwide. Bringing the top-notch of our global experience by your side!"
                                </blockquote>
                                <p className="mb-4">As an integrated logistics provider, we are constantly innovating to offer our clients individually optimized logistics services.</p>
                                <p className="mb-4">The clearing and forwarding industry, in addition to cargo, transportation, and logistics, is ever-changing and becoming even more sophisticated.</p>
                                <p className="mb-4">Players in these industries must constantly innovate and upgrade their operating methods to serve their clients more efficiently and cost-effectively.</p>
                                <p className="mb-6">At EK 360 Cargo, we are determined to continuously improve our service delivery methods and policies with the objective of exceeding client expectations and staying ahead of the competition.</p>
                                <p className="font-bold">We are committed to being Trusted, Reliable, Advanced, and Secure.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
