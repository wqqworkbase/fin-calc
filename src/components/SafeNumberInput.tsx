'use client';
import { useState, useCallback, ChangeEvent } from 'react';

interface SafeNumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  maxDigits?: number;
  step?: string;
  className?: string;
  placeholder?: string;
}

export default function SafeNumberInput({
  value,
  onChange,
  min,
  max,
  maxDigits = 12,
  step,
  className = '',
  placeholder,
}: SafeNumberInputProps) {
  const [displayValue, setDisplayValue] = useState(value > 0 ? String(value) : '');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;

      // Block non-numeric input (allow digits, one decimal point, leading minus)
      if (!/^-?\d*\.?\d*$/.test(raw) && raw !== '') {
        return;
      }

      // Prevent excessive digits before decimal
      const parts = raw.replace(/^-/, '').split('.');
      if (parts[0] && parts[0].length > maxDigits) {
        return;
      }

      // Prevent excessive decimal places (max 6)
      if (parts[1] && parts[1].length > 6) {
        return;
      }

      setDisplayValue(raw);

      const num = raw === '' || raw === '-' || raw === '.' ? 0 : parseFloat(raw);
      if (isNaN(num)) return;

      if (min !== undefined && num < min) return;
      if (max !== undefined && num > max) return;

      onChange(num);
    },
    [onChange, min, max, maxDigits]
  );

  // Sync external value changes (e.g., from other fields)
  if (value > 0 && displayValue === '') {
    // Only sync if component was just initialized
  }

  return (
    <input
      type="text"
      inputMode="decimal"
      value={displayValue}
      onChange={handleChange}
      placeholder={placeholder ?? '0'}
      step={step}
      className={`w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 outline-none transition ${className}`}
    />
  );
}
