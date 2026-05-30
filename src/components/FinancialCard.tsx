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
      <div className="relative overflow-hidden rounded-2xl aspect-[1.586/1] bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800 flex flex-col justify-between p-5 shadow-lg">
        {/* Watermark — $ pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          viewBox="0 0 400 250"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="card-bg" x="0" y="0" width="55" height="55" patternUnits="userSpaceOnUse">
              <text x="8" y="42" fontSize="44" fill="white" fontWeight="900" fontFamily="serif">$</text>
              <circle cx="48" cy="12" r="7" fill="none" stroke="white" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#card-bg)" />
          {/* Concentric circles — top right */}
          <circle cx="340" cy="30" r="130" fill="none" stroke="white" strokeWidth="0.8" opacity="0.5" />
          <circle cx="340" cy="30" r="110" fill="none" stroke="white" strokeWidth="0.6" opacity="0.35" />
          <circle cx="340" cy="30" r="90" fill="none" stroke="white" strokeWidth="0.4" opacity="0.2" />
        </svg>

        {/* Top: realistic EMV chip */}
        <div className="relative z-10">
          <svg viewBox="0 0 48 36" className="w-11 h-8" xmlns="http://www.w3.org/2000/svg">
            {/* Chip base */}
            <rect x="1" y="1" width="46" height="34" rx="5" fill="#C8A84E" stroke="#A08830" strokeWidth="0.8" />
            {/* Inner background */}
            <rect x="3" y="3" width="42" height="30" rx="3.5" fill="#D4B85C" />
            {/* Horizontal contact pads */}
            <rect x="8" y="5" width="12" height="5" rx="1" fill="#E8CC6E" stroke="#B89838" strokeWidth="0.5" />
            <rect x="28" y="5" width="12" height="5" rx="1" fill="#E8CC6E" stroke="#B89838" strokeWidth="0.5" />
            <rect x="8" y="12" width="12" height="5" rx="1" fill="#E8CC6E" stroke="#B89838" strokeWidth="0.5" />
            <rect x="28" y="12" width="12" height="5" rx="1" fill="#E8CC6E" stroke="#B89838" strokeWidth="0.5" />
            <rect x="8" y="19" width="12" height="5" rx="1" fill="#E8CC6E" stroke="#B89838" strokeWidth="0.5" />
            <rect x="28" y="19" width="12" height="5" rx="1" fill="#E8CC6E" stroke="#B89838" strokeWidth="0.5" />
            {/* Center vertical line */}
            <line x1="24" y1="5" x2="24" y2="29" stroke="#B89838" strokeWidth="0.4" opacity="0.5" />
          </svg>
        </div>

        {/* Bottom: balance */}
        <div className="relative z-10 pb-1">
          <p className="text-[10px] font-medium mb-1.5 uppercase tracking-[0.22em] text-white/55">{label}</p>
          <div className="flex items-start">
            <span className="text-[30px] md:text-[34px] font-bold tracking-tighter leading-none text-[#FDFCF8]">{prefix}</span>
            <span className="text-[30px] md:text-[34px] font-bold tracking-tighter leading-none text-[#FDFCF8]">{integer}</span>
            <span className="text-[13px] font-semibold ml-0.5 mt-1.5 leading-none text-white/45">.{decimal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
