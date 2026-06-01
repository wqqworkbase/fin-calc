'use client';
import { useEffect, useRef, useState } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'horizontal' | 'rectangle';
  className?: string;
}

export default function AdUnit({ slot, format = 'horizontal', className = '' }: AdUnitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create ins element
    const ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', 'ca-pub-1859323496106950');
    ins.setAttribute('data-ad-slot', slot);
    ins.setAttribute('data-ad-format', 'auto');
    ins.setAttribute('data-full-width-responsive', 'true');

    // Clear any existing content
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(ins);

    // Try to load the ad
    try {
      const w = window as unknown as Record<string, any>;
      (w.adsbygoogle = w.adsbygoogle || []).push({});
    } catch {
      // AdSense not available
    }

    // After a short delay, check if ad filled
    const timer = setTimeout(() => {
      const hasContent = ins.clientHeight > 5 || ins.querySelector('iframe');
      if (hasContent) {
        setLoaded(true);
      } else {
        setFailed(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [slot]);

  // Collapsed state — nothing rendered (content flows up)
  if (failed) return null;

  // Expected ad height for CLS prevention (approximate)
  const reserveHeight = format === 'rectangle' ? '280px' : '90px';

  return (
    <div
      ref={containerRef}
      className={`w-full ${className}`}
      style={{ minHeight: loaded ? 'auto' : reserveHeight }}
    >
      {!loaded && (
        <div className="flex items-center justify-center bg-gray-50/50 rounded-lg border border-gray-100/50"
          style={{ height: reserveHeight }}>
          <span className="text-gray-300 text-[10px] tracking-wider uppercase">Ad</span>
        </div>
      )}
    </div>
  );
}
