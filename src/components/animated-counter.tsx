import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number; // ms
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 1200, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    raf.current = requestAnimationFrame(animate);
    return () => { if (raf.current !== null) cancelAnimationFrame(raf.current); };
  }, [value, duration]);

  return <span>{displayValue}{suffix}</span>;
};

export default AnimatedCounter; 