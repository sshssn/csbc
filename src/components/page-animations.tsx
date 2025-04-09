'use client';

import React, { useEffect, useRef } from 'react';
import { FadeInText } from '@/components/ui/fade-in-text';
import { ScrollEffect } from '@/components/ui/scroll-effects';

interface PageAnimationsProps {
  children: React.ReactNode;
  textFadeDelay?: number;
}

export function PageAnimations({ children, textFadeDelay = 0.2 }: PageAnimationsProps) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    // Get all the text elements that we want to animate
    const headings = pageRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const paragraphs = pageRef.current.querySelectorAll('p');
    const lists = pageRef.current.querySelectorAll('ul, ol');
    const images = pageRef.current.querySelectorAll('img');
    const cards = pageRef.current.querySelectorAll('.card, [class*="rounded"]');
    const buttons = pageRef.current.querySelectorAll('button, .button, [class*="btn"]');

    // Apply fade-in animations with staggered delays
    const applyAnimations = (elements: NodeListOf<Element>, baseDelay: number, increment: number) => {
      elements.forEach((element, index) => {
        if (!element.classList.contains('animate-none') && !element.closest('.animate-none')) {
          element.classList.add('opacity-0');
          
          // Create a new animation
          const animation = element.animate(
            [
              { opacity: 0, transform: 'translateY(20px)' },
              { opacity: 1, transform: 'translateY(0)' }
            ],
            {
              duration: 800,
              delay: baseDelay + (index * increment),
              fill: 'forwards',
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
            }
          );
          
          // Set the element to be visible when animation completes
          animation.onfinish = () => {
            element.classList.remove('opacity-0');
          };
        }
      });
    };

    // Apply animations with different delays for different element types
    applyAnimations(headings, textFadeDelay, 100);
    applyAnimations(paragraphs, textFadeDelay + 200, 100);
    applyAnimations(lists, textFadeDelay + 300, 100);
    applyAnimations(images, textFadeDelay + 100, 150);
    applyAnimations(cards, textFadeDelay + 150, 120);
    applyAnimations(buttons, textFadeDelay + 400, 80);
    
    // Clean up animations if component unmounts
    return () => {
      const animated = pageRef.current?.querySelectorAll('.opacity-0');
      animated?.forEach(el => el.classList.remove('opacity-0'));
    };
  }, [textFadeDelay]);

  return (
    <div ref={pageRef} className="page-animations-container">
      {children}
    </div>
  );
}

// Utility components for direct use in JSX
export function FadeInHeading({ children, ...props }: React.ComponentProps<typeof FadeInText>) {
  return (
    <FadeInText direction="up" duration={0.8} {...props}>
      {children}
    </FadeInText>
  );
}

export function FadeInParagraph({ children, ...props }: React.ComponentProps<typeof FadeInText>) {
  return (
    <FadeInText direction="up" duration={0.6} delay={0.1} {...props}>
      {children}
    </FadeInText>
  );
}

export function ParallaxImage({ children, ...props }: React.ComponentProps<typeof ScrollEffect>) {
  return (
    <ScrollEffect type={['fade-in', 'parallax']} parallaxSpeed={0.2} {...props}>
      {children}
    </ScrollEffect>
  );
}

export function FloatingElement({ children, ...props }: React.ComponentProps<typeof ScrollEffect>) {
  return (
    <ScrollEffect type="floating" floatIntensity={5} {...props}>
      {children}
    </ScrollEffect>
  );
}

export function ScaleInElement({ children, ...props }: React.ComponentProps<typeof ScrollEffect>) {
  return (
    <ScrollEffect type={['fade-in', 'scale-in']} {...props}>
      {children}
    </ScrollEffect>
  );
} 