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
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-5 ${className}`}>
      {/* Card chip */}
      <div className="absolute top-4 left-4 w-9 h-6 bg-emerald-400/80 rounded" />

      {/* Card network circles */}
      <div className="absolute top-4 right-4 flex space-x-[-5px]">
        <div className="w-6 h-6 rounded-full bg-emerald-500/50" />
        <div className="w-6 h-6 rounded-full bg-gray-400/40" />
      </div>

      {/* Balance */}
      <div className="mt-5">
        <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-[0.15em]">{label}</p>
        <div className="flex items-start">
          <span className="text-2xl font-bold tracking-tight">{prefix}</span>
          <span className="text-2xl font-bold tracking-tight">{integer}</span>
          <span className="text-xs font-semibold ml-px mt-1 text-gray-400">.{decimal}</span>
        </div>
      </div>

      {/* Bottom stripe */}
      <div className="mt-5 pt-3 border-t border-white/10 flex justify-between text-[10px] text-gray-500">
        <span>FinCalc</span>
        <span className="text-emerald-400/60">Financial Calculator</span>
      </div>
    </div>
  );
}
