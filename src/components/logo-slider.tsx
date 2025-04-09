'use client';

import React, { useState, useEffect } from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const partnerLogos = [
  {
    name: 'Emaar',
    lightLogo: '/images/emaar.png',
    darkLogo: '/images/emaar.png',
    width: 100,
    height: 50
  },
  {
    name: 'Expo Sharjah',
    lightLogo: '/images/expo-shj-light.svg',
    darkLogo: '/images/expo-shj-dark.svg',
    width: 120,
    height: 50
  },
  {
    name: 'GDXB',
    lightLogo: '/images/gdxb.svg',
    darkLogo: '/images/gdxb.svg',
    width: 120,
    height: 50
  },
  {
    name: 'GES International',
    lightLogo: '/images/ges.png',
    darkLogo: '/images/ges.png',
    width: 100,
    height: 50
  },
  {
    name: 'RTA',
    lightLogo: '/images/rta.png',
    darkLogo: '/images/rta.png',
    width: 100,
    height: 50
  },
  {
    name: 'Saudi',
    lightLogo: '/images/saudi.png',
    darkLogo: '/images/saudi.png',
    width: 100,
    height: 50
  }
];

export function LogoSlider() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure we have a theme value even before mounted
  const currentTheme = mounted ? resolvedTheme : 'light';

  return (
    <div className="py-8 bg-gray-50 dark:bg-black border-t border-b border-gray-100 dark:border-gray-900">
      <div className="container mx-auto px-4">
        {mounted ? (
          <InfiniteSlider
            gap={48}
            duration={35}
            durationOnHover={70}
            className="py-4"
          >
            {partnerLogos.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center min-w-40 h-20 px-4 py-2 bg-white dark:bg-black rounded-lg shadow-sm"
              >
                <Image
                  src={currentTheme === 'dark' ? logo.darkLogo : logo.lightLogo}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </InfiniteSlider>
        ) : (
          <div className="h-20 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
} 