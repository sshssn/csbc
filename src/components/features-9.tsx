'use client'
import { Logo } from '@/components/logo'
import { Activity, Map as MapIcon, MessageCircle } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { cn } from '@/lib/utils'
import { BadgeCheck, Briefcase, CheckCircle, Globe, Lock, ShieldCheck } from 'lucide-react'
import { GradientText } from '@/components/ui/gradient-text'

const features = [
    {
        icon: <BadgeCheck className="size-6 text-blue-500" />,
        title: 'Trusted',
        description: 'An integrated logistics pioneer with local and global presence and experience.'
    },
    {
        icon: <CheckCircle className="size-6 text-emerald-500" />,
        title: 'Reliable',
        description: 'Specialists in services including aerospace logistics, exhibitions, and defense logistics.'
    },
    {
        icon: <Briefcase className="size-6 text-purple-500" />,
        title: 'Advanced',
        description: 'Proven scalability and flexibility to manage shipments and contracts of any industry.'
    },
    {
        icon: <Lock className="size-6 text-red-500" />,
        title: 'Secure',
        description: 'Committed to our values as a customer-centric experience organization.'
    },
    {
        icon: <Globe className="size-6 text-amber-500" />,
        title: 'Worldwide',
        description: 'Global reach through strategic partnerships with trusted international partners.'
    }
]

export default function Features9({ id }: { id?: string }) {
    return (
        <section id={id} className="py-24">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-black">Solutions.</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        <GradientText as="span">Pioneering</GradientText> Global Logistics Excellence
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        We are a privately owned company that provides top-notch logistics and cargo solutions in UAE, KSA, and worldwide.
                    </p>
                </div>
            </div>
            <div className="container mx-auto flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 max-w-5xl">
                    {features.slice(0, 3).map((feature, index) => (
                        <div 
                            key={index} 
                            className="grid gap-1 p-6 transition-all hover:bg-gray-100 dark:hover:bg-black rounded-xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="rounded-full border p-2 bg-background">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold">{feature.title}</h3>
                            </div>
                            <div className="pt-4">
                                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                    
                    <div className="lg:col-span-3 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.slice(3).map((feature, index) => (
                            <div 
                                key={index + 3} 
                                className="grid gap-1 p-6 transition-all hover:bg-gray-100 dark:hover:bg-black rounded-xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full border p-2 bg-background">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{feature.title}</h3>
                                </div>
                                <div className="pt-4">
                                    <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'var(--color-background)',
    color: 'currentColor',
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={svgOptions.radius} fill={svgOptions.color} />
            ))}
        </svg>
    )
}

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: '#2563eb',
    },
    mobile: {
        label: 'Mobile',
        color: '#60a5fa',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'May', desktop: 56, mobile: 224 },
    { month: 'June', desktop: 56, mobile: 224 },
    { month: 'January', desktop: 126, mobile: 252 },
    { month: 'February', desktop: 205, mobile: 410 },
    { month: 'March', desktop: 200, mobile: 126 },
    { month: 'April', desktop: 400, mobile: 800 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer className="h-120 aspect-auto md:h-96" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}>
                <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip active cursor={false} content={<ChartTooltipContent className="dark:bg-muted" />} />
                <Area strokeWidth={2} dataKey="mobile" type="stepBefore" fill="url(#fillMobile)" fillOpacity={0.1} stroke="var(--color-mobile)" stackId="a" />
                <Area strokeWidth={2} dataKey="desktop" type="stepBefore" fill="url(#fillDesktop)" fillOpacity={0.1} stroke="var(--color-desktop)" stackId="a" />
            </AreaChart>
        </ChartContainer>
    )
}
