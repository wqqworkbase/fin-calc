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
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white p-5 ${className}`}>
      {/* Card chip */}
      <div className="absolute top-3 left-3 w-8 h-6 bg-yellow-400/80 rounded-sm" />

      {/* Card network icon */}
      <div className="absolute top-3 right-3 flex space-x-[-6px]">
        <div className="w-6 h-6 rounded-full bg-red-500/60" />
        <div className="w-6 h-6 rounded-full bg-yellow-400/60" />
      </div>

      {/* Balance */}
      <div className="mt-4">
        <p className="text-xs text-slate-300 mb-1 uppercase tracking-wider">{label}</p>
        <div className="flex items-start">
          <span className="text-2xl font-bold">{prefix}</span>
          <span className="text-2xl font-bold">{integer}</span>
          <span className="text-xs font-semibold ml-px mt-1">.{decimal}</span>
        </div>
      </div>

      {/* Bottom stripe */}
      <div className="mt-4 pt-3 border-t border-white/10 flex justify-between text-[10px] text-slate-400">
        <span>FinCalc Financial Calculator</span>
      </div>
    </div>
  );
}
