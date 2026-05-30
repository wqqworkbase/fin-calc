interface FinancialCardProps {
  label: string;
  value: number;
  prefix?: string;
  className?: string;
}

export default function FinancialCard({ label, value, prefix = '$', className = '' }: FinancialCardProps) {
  const formatted = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const [integer, decimal] = formatted.split('.');

  return (
    <div className={`mx-auto ${className}`} style={{ maxWidth: '85%' }}>
      <div
        className="relative overflow-hidden rounded-2xl aspect-[1.586/1] flex flex-col justify-between p-5 shadow-xl"
        style={{
          background: 'linear-gradient(145deg, #1a4731 0%, #1e5c3a 15%, #2d8a56 30%, #228b4a 45%, #1a6b3a 60%, #0f4a25 80%, #0a3320 100%)',
        }}
      >
        {/* Metallic sheen overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.15) 100%)',
          }}
        />

        {/* Subtle grid texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 250" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="0.8" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dots)" opacity="0.5" />
        </svg>

        {/* Decorative world-map-like curves */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 400 250" preserveAspectRatio="none">
          <ellipse cx="320" cy="100" rx="160" ry="200" fill="none" stroke="white" strokeWidth="0.8" transform="rotate(-15 320 100)" />
          <ellipse cx="310" cy="105" rx="145" ry="185" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(-15 310 105)" />
          <ellipse cx="300" cy="110" rx="130" ry="170" fill="none" stroke="white" strokeWidth="0.3" transform="rotate(-15 300 110)" />
          {/* Horizontal wave lines */}
          <path d="M 0 80 Q 50 70 100 85 T 200 80 T 300 85 T 400 75" fill="none" stroke="white" strokeWidth="0.6" opacity="0.7" />
          <path d="M 0 140 Q 50 150 100 135 T 200 145 T 300 135 T 400 140" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
          <path d="M 0 200 Q 50 190 100 205 T 200 195 T 300 205 T 400 195" fill="none" stroke="white" strokeWidth="0.4" opacity="0.3" />
        </svg>

        {/* Top section: BANK label + chip */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="ml-3 mt-3">
            {/* EMV chip */}
            <svg viewBox="0 0 48 36" className="w-14 h-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="chip-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#D4A843" />
                  <stop offset="50%" stopColor="#E8C75C" />
                  <stop offset="100%" stopColor="#B89030" />
                </linearGradient>
              </defs>
              <rect x="1" y="1" width="46" height="34" rx="5" fill="url(#chip-grad)" stroke="#8B6914" strokeWidth="0.8" />
              <rect x="3.5" y="3.5" width="41" height="29" rx="3" fill="#C8A040" opacity="0.5" />
              <rect x="8" y="5.5" width="11" height="4.5" rx="1.2" fill="#F0D878" stroke="#B89030" strokeWidth="0.4" />
              <rect x="27" y="5.5" width="11" height="4.5" rx="1.2" fill="#F0D878" stroke="#B89030" strokeWidth="0.4" />
              <rect x="8" y="12" width="11" height="4.5" rx="1.2" fill="#F0D878" stroke="#B89030" strokeWidth="0.4" />
              <rect x="27" y="12" width="11" height="4.5" rx="1.2" fill="#F0D878" stroke="#B89030" strokeWidth="0.4" />
              <rect x="8" y="18.5" width="11" height="4.5" rx="1.2" fill="#F0D878" stroke="#B89030" strokeWidth="0.4" />
              <rect x="27" y="18.5" width="11" height="4.5" rx="1.2" fill="#F0D878" stroke="#B89030" strokeWidth="0.4" />
              <line x1="24" y1="5" x2="24" y2="28" stroke="#B89030" strokeWidth="0.35" opacity="0.6" />
              <line x1="5" y1="18" x2="43" y2="18" stroke="#B89030" strokeWidth="0.25" opacity="0.3" />
            </svg>
          </div>

          {/* Contactless icon + BANK label */}
          <div className="flex flex-col items-end gap-1.5 mr-1 mt-3">
            <svg viewBox="0 0 24 24" className="w-6 h-6 opacity-70" fill="none" stroke="#FDFCF8" strokeWidth="1.3">
              <path d="M4 12a8 8 0 0 1 8-8M8 12a4 4 0 0 1 4-4M12 12h.01" strokeLinecap="round" />
            </svg>
            <span className="text-[12px] font-bold tracking-[0.35em] text-[#FDFCF8]/70 uppercase">BANK</span>
          </div>
        </div>

        {/* Middle: card number area — left empty, just decorative */}
        <div className="relative z-10 flex-1" />

        {/* Bottom section: CARD label + balance */}
        <div className="relative z-10 flex items-end justify-between">
          <div className="pb-1">
            <p className="text-[9px] font-medium mb-1 uppercase tracking-[0.22em] text-[#FDFCF8]/50">{label}</p>
            <div className="flex items-start">
              <span className="text-[25px] md:text-[29px] font-bold tracking-tight leading-none text-[#FDFCF8] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{prefix}</span>
              <span className="w-[0.12em] flex-shrink-0" />
              <span className="text-[25px] md:text-[29px] font-bold tracking-tight leading-none text-[#FDFCF8] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{integer}</span>
              <span className="text-[15px] font-semibold ml-0.5 mt-1.5 leading-none text-[#FDFCF8]/80">.{decimal}</span>
            </div>
          </div>
          <div className="text-right pb-1">
            <span className="text-[12px] font-bold tracking-[0.35em] text-[#FDFCF8]/70 uppercase">CARD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
