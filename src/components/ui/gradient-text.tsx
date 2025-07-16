'use client'
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

function GradientText({
  className,
  children,
  as: Component = 'span',
  ...props
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export { GradientText };