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
    <div className={`relative overflow-hidden rounded-2xl aspect-[8/5] bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800 flex flex-col justify-between p-5 shadow-lg ${className}`}>
      {/* Watermark pattern — subtle $ symbols and circles */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        viewBox="0 0 400 250"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="card-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <text x="10" y="40" fontSize="36" fill="white" fontWeight="bold" fontFamily="serif">$</text>
            <circle cx="50" cy="15" r="8" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="5" cy="55" r="4" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#card-pattern)" />
        {/* Large decorative concentric circles */}
        <circle cx="330" cy="200" r="140" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
        <circle cx="330" cy="200" r="120" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
        <circle cx="330" cy="200" r="100" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
        {/* Bottom left decorative arc */}
        <path d="M -20 280 Q 80 180 40 100" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
        <path d="M -10 290 Q 90 190 50 110" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
      </svg>

      {/* Top: chip */}
      <div className="relative z-10">
        <div className="w-10 h-7 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-200 rounded-[4px] shadow-inner" />
      </div>

      {/* Bottom: balance */}
      <div className="relative z-10">
        <p className="text-[11px] font-medium mb-2 uppercase tracking-[0.2em] text-white/60">{label}</p>
        <div className="flex items-start">
          <span className="text-[28px] md:text-[32px] font-bold tracking-tight text-[#FDFCF8]">{prefix}</span>
          <span className="text-[28px] md:text-[32px] font-bold tracking-tight text-[#FDFCF8]">{integer}</span>
          <span className="text-sm font-semibold ml-0.5 mt-1.5 text-white/50">.{decimal}</span>
        </div>
      </div>
    </div>
  );
}
