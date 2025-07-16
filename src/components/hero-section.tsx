import React, { useEffect, useRef, useState } from 'react'
import { Package2, Search } from 'lucide-react'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from '@/components/hero5-header'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { GradientText } from '@/components/ui/gradient-text'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoError, setVideoError] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handleCanPlay = () => {
                console.log('Video can play - video element:', video);
                setVideoLoaded(true);
                video.play().catch(error => {
                    console.error('Video playback failed:', error);
                    setVideoError(true);
                });
            };

            const handleError = (e: any) => {
                console.error('Video error:', e);
                console.error('Video error details:', {
                    error: e.error,
                    message: e.message,
                    type: e.type,
                    target: e.target
                });
                setVideoError(true);
            };

            const handleLoadStart = () => {
                console.log('Video load started');
            };

            const handleLoadedData = () => {
                console.log('Video data loaded');
            };

            video.addEventListener('loadstart', handleLoadStart);
            video.addEventListener('loadeddata', handleLoadedData);
            video.addEventListener('canplay', handleCanPlay);
            video.addEventListener('error', handleError);

            return () => {
                video.removeEventListener('loadstart', handleLoadStart);
                video.removeEventListener('loadeddata', handleLoadedData);
                video.removeEventListener('canplay', handleCanPlay);
                video.removeEventListener('error', handleError);
            };
        }
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <HeroHeader />

            <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-background via-background/98 to-background dark:from-background dark:via-background/95 dark:to-background">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95 dark:from-background/90 dark:via-background/75 dark:to-background/90 z-10" />
                    {!videoError && (
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`absolute inset-0 w-full h-full object-cover dark:brightness-75 transition-opacity duration-1000 ${videoLoaded ? 'opacity-90' : 'opacity-0'}`}
                            style={{ objectFit: 'cover', transform: 'scale(1.1)' }}
                            onError={(e) => {
                                console.error('Video error event:', e);
                                setVideoError(true);
                            }}
                        >
                            <source src="https://mhy2q3qipm.ufs.sh/f/nND0FwvkWb7XUQcqCcBzW3NZpXDofkJSFOrGCH0RxeIy9VAY" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                    {videoError && (
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/10" />
                    )}
                </div>

                <Container className="relative z-20">
                    <section>
                        <div className="relative pt-32 lg:pb-16 lg:pt-40">
                            <div className="relative z-10 mx-auto max-w-4xl text-center">
                                <GradientText 
                                    as="h1"
                                    className="text-balance text-4xl font-medium sm:text-5xl md:text-6xl">
                                    Global Logistics Excellence
                                </GradientText>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 md:mt-12 max-w-2xl text-pretty text-lg text-gray-800 dark:text-white">
                                    We are a privately owned company that provides top-notch logistics and cargo solutions in UAE, KSA, and worldwide.
                                </TextEffect>

                                <div className="mt-8 md:mt-12">
                                    {/* Content can be added here */}
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
        </>
    )
}
