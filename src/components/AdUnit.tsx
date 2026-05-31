'use client';
import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'horizontal' | 'rectangle';
  className?: string;
}

export default function AdUnit({ slot, format = 'horizontal', className = '' }: AdUnitProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.querySelector('ins')) {
      const ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.setAttribute('data-ad-client', 'ca-pub-1859323496106950');
      ins.setAttribute('data-ad-slot', slot);
      ins.setAttribute('data-ad-format', 'auto');
      ins.setAttribute('data-full-width-responsive', 'true');
      containerRef.current.appendChild(ins);

      try {
        const w = window as unknown as Record<string, any>;
        (w.adsbygoogle = w.adsbygoogle || []).push({});
      } catch {
        // AdSense not loaded — expected during development
      }
    }
  }, [slot]);

  const sizeClass =
    format === 'rectangle'
      ? 'min-h-[280px] md:min-h-[280px]'
      : 'min-h-[90px] md:min-h-[90px]';

  return (
    <div
      ref={containerRef}
      className={`w-full ${sizeClass} flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100 ${className}`}
    >
      <span className="text-gray-400 text-xs">Advertisement</span>
    </div>
  );
}
