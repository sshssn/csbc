'use client'

import Layout from "@/components/layout"
import { GradientText } from "@/components/ui/gradient-text"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Building2,
  Home,
  Warehouse,
  Factory,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Award
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BackToTop } from "@/components/back-to-top"
import { withSuspense } from '@/components/with-suspense'
import { HeroSection } from "@/components/blocks/hero-section-dark"
import { BentoGrid } from "@/components/ui/bento-grid";
import CompletedProjectsBento from "@/components/completed-projects-bento";
import OngoingProjectsBento from "@/components/ongoing-projects-bento";

interface Project {
  id: string;
  title: string;
  category: 'Luxury Villa' | 'Warehouse' | 'Commercial' | 'Industrial' | 'RCC Works' | 'Steel Structure';
  description: string;
  image: string;
  location: string;
  completionDate: string;
  size: string;
  status: 'Completed' | 'Ongoing' | 'Planning';
  features: string[];
  stats: {
    area: string;
    duration: string;
    team: string;
  };
}

const projects: Project[] = [
  {
    id: "villa-1",
    title: "Palm Jumeirah Luxury Villa",
    category: "Luxury Villa",
    description: "A stunning 8-bedroom luxury villa with modern architecture, smart home integration, and panoramic sea views.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=3540&auto=format&fit=crop",
    location: "Palm Jumeirah, Dubai",
    completionDate: "2024",
    size: "15,000 sq ft",
    status: "Completed",
    features: ["Smart home system", "Private pool", "Landscape design", "Premium finishes"],
    stats: {
      area: "15,000 sq ft",
      duration: "18 months",
      team: "45 members"
    }
  },
  {
    id: "warehouse-1",
    title: "Jebel Ali Logistics Center",
    category: "Warehouse",
    description: "State-of-the-art warehouse facility with advanced automation systems and climate-controlled storage areas.",
    image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?q=80&w=3540&auto=format&fit=crop",
    location: "Jebel Ali, Dubai",
    completionDate: "2024",
    size: "50,000 sq ft",
    status: "Completed",
    features: ["Automated systems", "Climate control", "Loading docks", "Security systems"],
    stats: {
      area: "50,000 sq ft",
      duration: "12 months",
      team: "60 members"
    }
  },
  {
    id: "commercial-1",
    title: "Downtown Office Complex",
    category: "Commercial",
    description: "Modern office complex featuring sustainable design, energy-efficient systems, and flexible workspace solutions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3540&auto=format&fit=crop",
    location: "Downtown Dubai",
    completionDate: "2024",
    size: "25,000 sq ft",
    status: "Ongoing",
    features: ["LEED certified", "Smart building", "Flexible spaces", "Green roof"],
    stats: {
      area: "25,000 sq ft",
      duration: "16 months",
      team: "40 members"
    }
  },
  {
    id: "industrial-1",
    title: "Al Ain Manufacturing Facility",
    category: "Industrial",
    description: "Advanced manufacturing facility with specialized equipment installation and industrial safety systems.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=3540&auto=format&fit=crop",
    location: "Al Ain Industrial City",
    completionDate: "2023",
    size: "75,000 sq ft",
    status: "Completed",
    features: ["Heavy machinery", "Safety systems", "Utility infrastructure", "Quality control"],
    stats: {
      area: "75,000 sq ft",
      duration: "24 months",
      team: "80 members"
    }
  },
  {
    id: "rcc-1",
    title: "Sheikh Zayed Bridge",
    category: "RCC Works",
    description: "Major reinforced concrete bridge construction with advanced structural engineering and quality control systems.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=3540&auto=format&fit=crop",
    location: "Abu Dhabi",
    completionDate: "2023",
    size: "2.5 km",
    status: "Completed",
    features: ["Structural engineering", "Quality concrete", "Advanced formwork", "Testing systems"],
    stats: {
      area: "2.5 km",
      duration: "36 months",
      team: "120 members"
    }
  },
  {
    id: "steel-1",
    title: "Dubai Steel Tower",
    category: "Steel Structure",
    description: "Innovative steel structure with precision fabrication and advanced welding techniques for commercial use.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=3540&auto=format&fit=crop",
    location: "Dubai Marina",
    completionDate: "2024",
    size: "30,000 sq ft",
    status: "Ongoing",
    features: ["Custom fabrication", "Precision erection", "Quality welding", "Structural testing"],
    stats: {
      area: "30,000 sq ft",
      duration: "14 months",
      team: "50 members"
    }
  },
  {
    id: "villa-2",
    title: "Emirates Hills Villa",
    category: "Luxury Villa",
    description: "Contemporary luxury villa with sustainable design, solar integration, and smart home automation.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=3540&auto=format&fit=crop",
    location: "Emirates Hills, Dubai",
    completionDate: "2024",
    size: "12,000 sq ft",
    status: "Completed",
    features: ["Solar panels", "Smart automation", "Sustainable materials", "Landscape design"],
    stats: {
      area: "12,000 sq ft",
      duration: "16 months",
      team: "35 members"
    }
  },
  {
    id: "warehouse-2",
    title: "Sharjah Distribution Center",
    category: "Warehouse",
    description: "Modern distribution center with automated sorting systems and efficient logistics infrastructure.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=3540&auto=format&fit=crop",
    location: "Sharjah Industrial Area",
    completionDate: "2023",
    size: "40,000 sq ft",
    status: "Completed",
    features: ["Automated sorting", "Efficient layout", "Security systems", "Loading facilities"],
    stats: {
      area: "40,000 sq ft",
      duration: "10 months",
      team: "55 members"
    }
  }
];

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    case 'Ongoing':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
    case 'Planning':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
  }
};

const getCategoryIcon = (category: Project['category']) => {
  switch (category) {
    case 'Luxury Villa':
      return Home;
    case 'Warehouse':
      return Warehouse;
    case 'Commercial':
      return Building2;
    case 'Industrial':
      return Factory;
    case 'RCC Works':
      return Building2;
    case 'Steel Structure':
      return Building2;
    default:
      return Building2;
  }
};

function Projects() {
  return (
    <Layout>
      <HeroSection 
        title="Completed Projects."
        subtitle={{
          regular: "Explore our diverse portfolio of ",
          gradient: "Completed Projects."
        }}
        description={
          <>Discover our completed construction projects, each a testament to our expertise, quality, and commitment to client satisfaction.</>
        }
        ctaText="Contact Us"
        ctaHref="/contact-us"
        videoSrc="/video/hero5.mp4"
      />
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Completed Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our diverse portfolio of completed construction projects, showcasing our expertise and commitment to quality.
            </p>
          </div>
          {/* Custom Completed Projects Bento Grid */}
          <CompletedProjectsBento />
        </div>
      </section>
      {/* Ongoing Projects Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Ongoing Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              View our current construction projects in progress, reflecting our ongoing dedication to excellence.
            </p>
          </div>
          <OngoingProjectsBento />
        </div>
      </section>
      <BackToTop />
    </Layout>
  )
}

export default withSuspense(Projects) 