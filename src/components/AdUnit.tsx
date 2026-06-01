'use client';
import { useEffect, useRef, useState } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'horizontal' | 'rectangle';
  className?: string;
}

export default function AdUnit({ slot, format = 'horizontal', className = '' }: AdUnitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create ins element via vanilla DOM
    const ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', 'ca-pub-1859323496106950');
    ins.setAttribute('data-ad-slot', slot);
    ins.setAttribute('data-ad-format', 'auto');
    ins.setAttribute('data-full-width-responsive', 'true');
    container.appendChild(ins);

    try {
      const w = window as unknown as Record<string, any>;
      (w.adsbygoogle = w.adsbygoogle || []).push({});
    } catch { /* AdSense not available */ }

    // Check if ad filled after a delay
    const timer = setTimeout(() => {
      const filled = ins.clientHeight > 5 || ins.querySelector('iframe');
      if (!filled) setFailed(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      // Only remove the ins if it's still a child
      if (container.contains(ins)) {
        container.removeChild(ins);
      }
    };
  }, [slot]);

  if (failed) return null;

  return (
    <div ref={containerRef} className={`w-full ${className}`} />
  );
}
