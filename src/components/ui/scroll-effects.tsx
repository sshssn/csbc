'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

type ScrollEffectType = 
  | 'fade-in'
  | 'slide-up'
  | 'scale-in'
  | 'parallax'
  | 'rotate'
  | 'floating'
  | 'blur-in'
  | 'color-shift';

interface ScrollEffectProps {
  children: React.ReactNode;
  className?: string;
  type?: ScrollEffectType | ScrollEffectType[];
  intensity?: number;
  threshold?: number;
  delay?: number;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  parallaxSpeed?: number;
  rotateMax?: number;
  floatIntensity?: number;
  blurMax?: number;
  colorFrom?: string;
  colorTo?: string;
  once?: boolean;
}

export function ScrollEffect({
  children,
  className,
  type = 'fade-in',
  intensity = 1,
  threshold = 0.1,
  delay = 0,
  springConfig = { stiffness: 100, damping: 30, mass: 1 },
  parallaxSpeed = 0.5,
  rotateMax = 10,
  floatIntensity = 10,
  blurMax = 10,
  colorFrom = 'rgba(0,0,0,0)',
  colorTo = 'rgba(255,255,255,1)',
  once = true,
}: ScrollEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const springScrollY = useSpring(scrollYProgress, {
    stiffness: springConfig.stiffness,
    damping: springConfig.damping,
    mass: springConfig.mass,
  });

  // Create an array of effect types if single string provided
  const effectTypes = Array.isArray(type) ? type : [type];

  // Prepare motion values based on active effects
  const motionValues: Record<string, MotionValue<any>> = {};

  if (effectTypes.includes('fade-in')) {
    motionValues.opacity = useTransform(springScrollY, [0, threshold], [0, 1]);
  }

  if (effectTypes.includes('slide-up')) {
    motionValues.y = useTransform(springScrollY, [0, threshold], [50 * intensity, 0]);
  }

  if (effectTypes.includes('scale-in')) {
    motionValues.scale = useTransform(springScrollY, [0, threshold], [0.8, 1]);
  }

  if (effectTypes.includes('parallax')) {
    motionValues.y = useTransform(springScrollY, [0, 1], [0, -100 * parallaxSpeed]);
  }

  if (effectTypes.includes('rotate')) {
    motionValues.rotate = useTransform(springScrollY, [0, threshold], [rotateMax * intensity, 0]);
  }

  if (effectTypes.includes('blur-in')) {
    motionValues.filter = useTransform(
      springScrollY,
      [0, threshold], 
      [`blur(${blurMax * intensity}px)`, 'blur(0px)']
    );
  }

  if (effectTypes.includes('color-shift')) {
    motionValues.backgroundColor = useTransform(
      springScrollY,
      [0, threshold],
      [colorFrom, colorTo]
    );
  }

  // Create floating animation if needed
  const floatingStyle = effectTypes.includes('floating')
    ? {
        y: [
          -floatIntensity * intensity, 
          floatIntensity * intensity, 
          -floatIntensity * intensity
        ],
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: 'mirror' as const,
        },
      }
    : {};

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={effectTypes.includes('fade-in') ? { opacity: 0 } : {}}
      whileInView={effectTypes.includes('fade-in') ? { opacity: 1 } : {}}
      viewport={{ once }}
      style={motionValues}
      animate={floatingStyle}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
} 