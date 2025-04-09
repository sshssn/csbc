'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutExpo for a more dynamic effect
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      
      countRef.current = Math.floor(easeOutExpo * end);
      setCount(countRef.current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span>{prefix}{count}{suffix}</span>
  );
};

export default function Stats2() {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section className="py-16 md:py-24 w-full" ref={statsRef}>
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-black">
                            Our Impact
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Delivering Excellence Since <span className="text-primary">2009</span>
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            We're proud of our achievements and the trust our clients place in us.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-10 w-10 text-primary"
                            >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                            </svg>
                        </div>
                        <div className="space-y-1 text-center">
                            <h3 className="text-3xl font-bold sm:text-4xl">
                                {isVisible ? <Counter end={15} duration={1500} suffix="+" /> : "15+"}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Years Experience</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-10 w-10 text-primary"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <div className="space-y-1 text-center">
                            <h3 className="text-3xl font-bold sm:text-4xl">
                                {isVisible ? <Counter end={5000} duration={2000} suffix="+" /> : "5000+"}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Satisfied Clients</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-10 w-10 text-primary"
                            >
                                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                                <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                            </svg>
                        </div>
                        <div className="space-y-1 text-center">
                            <h3 className="text-3xl font-bold sm:text-4xl">
                                {isVisible ? <Counter end={50} duration={1200} suffix="K+" /> : "50K+"}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Shipments Handled</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-10 w-10 text-primary"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="m19 19-3.3-3.3" />
                                <path d="M2.5 12h3" />
                                <path d="M12 2.5v3" />
                                <path d="M18.5 12h3" />
                                <path d="M12 18.5v3" />
                            </svg>
                        </div>
                        <div className="space-y-1 text-center">
                            <h3 className="text-3xl font-bold sm:text-4xl">
                                {isVisible ? <Counter end={100} duration={1500} suffix="+" /> : "100+"}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Countries Covered</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
