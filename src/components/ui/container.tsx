import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fluid?: boolean;
  className?: string;
}

export function Container({
  children,
  className,
  fluid = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        fluid ? 'w-full' : 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 