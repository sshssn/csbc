'use client';

import React, { useState, useEffect } from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const partnerLogos = [
  {
    name: 'Emaar Properties',
    lightLogo: '/images/emaar.png',
    darkLogo: '/images/emaar.png',
    width: 100,
    height: 50
  },
  {
    name: 'Nakheel',
    lightLogo: '/images/nakheel.png',
    darkLogo: '/images/nakheel.png',
    width: 120,
    height: 50
  },
  {
    name: 'Dubai Properties',
    lightLogo: '/images/dubai-properties.png',
    darkLogo: '/images/dubai-properties.png',
    width: 120,
    height: 50
  },
  {
    name: 'Meraas',
    lightLogo: '/images/meraas.png',
    darkLogo: '/images/meraas.png',
    width: 100,
    height: 50
  },
  {
    name: 'Aldar Properties',
    lightLogo: '/images/aldar.png',
    darkLogo: '/images/aldar.png',
    width: 100,
    height: 50
  },
  {
    name: 'Sorouh',
    lightLogo: '/images/sorouh.png',
    darkLogo: '/images/sorouh.png',
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
                <div className="flex items-center justify-center w-full h-full">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {logo.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      Construction Partner
                    </div>
                  </div>
                </div>
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