'use client';
import { useEffect, useRef, useState } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'horizontal' | 'rectangle';
  className?: string;
}

export default function AdUnit({ slot, format = 'horizontal', className = '' }: AdUnitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || filled) return;

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
    } catch {}

    // Poll for ad fill
    const check = () => {
      const hasContent = ins.clientHeight > 5 || ins.querySelector('iframe');
      if (hasContent) {
        setFilled(true);
      }
    };

    const timer = setInterval(() => {
      check();
      if (filled) clearInterval(timer);
    }, 300);

    // Stop polling after 5s
    const stop = setTimeout(() => { clearInterval(timer); check(); }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(stop);
      if (container.contains(ins)) {
        try { container.removeChild(ins); } catch {}
      }
    };
  }, [slot, filled]);

  // Only render something if ad actually filled
  return (
    <div
      ref={containerRef}
      className={`w-full ${filled ? className : ''}`}
      style={filled ? undefined : { height: 0, overflow: 'hidden' }}
    />
  );
}
