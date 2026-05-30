export function formatDecimal(value: number): { integer: string; decimal: string } {
  const str = value.toFixed(2);
  const [integer, decimal] = str.split('.');
  const formattedInteger = parseInt(integer).toLocaleString();
  return { integer: formattedInteger, decimal };
}

interface FormattedAmountProps {
  value: number;
  prefix?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: { integer: 'text-lg', decimal: 'text-[0.55em]' },
  md: { integer: 'text-xl', decimal: 'text-[0.55em]' },
  lg: { integer: 'text-2xl', decimal: 'text-[0.5em]' },
  xl: { integer: 'text-3xl', decimal: 'text-[0.45em]' },
};

export default function FormattedAmount({ value, prefix = '$', className = '', size = 'lg' }: FormattedAmountProps) {
  const { integer, decimal } = formatDecimal(value);
  const sz = sizeClasses[size];

  return (
    <span className={`inline-flex items-start ${className}`}>
      <span className="mr-0.5">{prefix}</span>
      <span className={`font-bold ${sz.integer} leading-none`}>{integer}</span>
      <span className={`${sz.decimal} font-semibold ml-px leading-none`}>.{decimal}</span>
    </span>
  );
}
