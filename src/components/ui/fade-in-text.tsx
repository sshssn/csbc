'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type FadeDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: FadeDirection;
  distance?: number;
  staggerChildren?: number;
  staggerDirection?: 'forward' | 'reverse';
}

export function FadeInText({
  children,
  className,
  as: Component = 'div',
  delay = 0,
  duration = 0.5,
  once = true,
  direction = 'up',
  distance = 20,
  staggerChildren = 0,
  staggerDirection = 'forward',
}: FadeInTextProps) {
  // Set initial animation based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'none':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  // If staggering children, wrap each child in a motion element
  if (staggerChildren > 0 && React.Children.count(children) > 1) {
    const staggerArray = React.Children.toArray(children);
    
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerChildren,
          staggerDirection: staggerDirection === 'forward' ? 1 : -1,
          delayChildren: delay,
        },
      },
    };

    const itemVariants = {
      hidden: getInitialPosition(),
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: duration,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };

    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        variants={containerVariants}
      >
        {staggerArray.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Standard fade effect for a single element
  return (
    <motion.div
      className={cn(className)}
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once }}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {Component === 'div' ? children : <Component>{children}</Component>}
    </motion.div>
  );
} 