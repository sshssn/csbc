'use client'

import Layout from "@/components/layout";
// Remove BentoGrid imports if not used elsewhere
// import { BentoGrid, BentoItem } from "@/components/ui/bento-grid"; 
import { Calendar, MapPin, BookOpen } from "lucide-react"; 
import Link from "next/link";
import { Suspense } from 'react';
import { withSuspense } from '@/components/with-suspense';
import { HeroSection } from "@/components/blocks/hero-section-dark";
// import { Badge } from "@/components/ui/badge"; // Remove Badge import
import { Button } from "@/components/ui/button"; // Import Button
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; // Import Card components
import { GradientText } from "@/components/ui/gradient-text"; // Import GradientText

// Define type for a single event for clarity
interface EventItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  meta: string;
  status: string;
  tags: string[];
  cta: {
    text: string;
    href: string;
  }
}

function UpcomingEventsContent() {
  // Updated event details for ADIBF 2025
  const singleEvent: EventItem = {
    title: "34th Abu Dhabi International Book Fair",
    description: "Engage with gripping speakers, themes, and sessions. Focus on Ibn Sina, Caribbean Culture, and \"One Thousand and One Nights\". Visit us at ADNEC Centre Abu Dhabi for inspiration, culture, and entertainment.",
    icon: <BookOpen className="h-5 w-5 text-primary" />, // Using BookOpen icon
    meta: "April 26 - May 5, 2025 | ADNEC Centre Abu Dhabi",
    status: "Dates Announced",
    tags: ["Book Fair", "Culture", "Abu Dhabi", "Literature", "Arts"],
    cta: {
      text: "Plan Your Visit",
      href: "https://adbookfair.com/en/adibf" // Link to the official site
    }
  };
  
  // Remove the other events if they exist in the original array
  // const upcomingEvents: EventItem[] = [ singleEvent ]; 

  return (
    <Layout>
      <HeroSection 
        title="Upcoming Event"
        subtitle={{
          regular: "Join EK360 at the ",
          gradient: "Abu Dhabi Int'l Book Fair."
        }}
        description={
          <>
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 font-semibold">culture</span>, inspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 font-semibold">talks</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 font-semibold">literature</span> at ADIBF 2025.
          </>
        }
        videoSrc="/video/hero5.mp4" 
        ctaText="Learn More"
        ctaHref="https://adbookfair.com/en/adibf" // Added CTA to Hero
      />

      <div className="container mx-auto px-4 py-16 sm:py-24">
        {/* Display single event in a Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden shadow-lg border-border/30 bg-card/80 backdrop-blur-lg">
            <CardHeader className="p-6 border-b border-border/20 bg-muted/30">
              <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                    {singleEvent.icon} 
                  </div>
                  <CardTitle className="text-xl font-semibold">{singleEvent.title}</CardTitle>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{singleEvent.meta}</span>
                </div>
                {/* Updated status styling */}
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
                    {singleEvent.status}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6 text-card-foreground">
              <p className="mb-6">
                {singleEvent.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {singleEvent.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-xs font-medium bg-secondary/50 text-secondary-foreground border border-border/20">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 bg-muted/30 border-t border-border/20">
              <Link href={singleEvent.cta.href} passHref legacyBehavior>
                <Button size="lg" className="w-full" asChild>
                    <a>{singleEvent.cta.text}</a>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        {/* Remove the link to current events */}
        {/* <div className="text-center">
          <Link href="/events/current" className="text-primary hover:underline">
            View current & past events →
          </Link>
        </div> */}
      </div>
    </Layout>
  );
}

export default withSuspense(UpcomingEventsContent); 