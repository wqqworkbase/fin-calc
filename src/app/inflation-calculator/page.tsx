'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { calculateInflation, getAvailableYears, generateInflationFAQs } from '@/lib/calculations/inflation';

export default function InflationCalculator() {
  const years = getAvailableYears();
  const [amount, setAmount] = useState(100);
  const [fromYear, setFromYear] = useState(2000);
  const [toYear, setToYear] = useState(2025);

  const result = useMemo(() => {
    try {
      return calculateInflation(amount, fromYear, toYear);
    } catch {
      return null;
    }
  }, [amount, fromYear, toYear]);

  return (
    <CalculatorLayout
      title="Inflation Calculator"
      description="See how inflation erodes purchasing power over time using official U.S. Bureau of Labor Statistics CPI-U data from 1913 to present."
      path="/inflation-calculator"
      faqs={generateInflationFAQs()}
      relatedCalculators={[
        { title: 'Compound Interest Calculator', path: '/compound-interest-calculator' },
        { title: 'Retirement Savings Calculator', path: '/retirement-savings-calculator' },
        { title: 'Savings Goal Calculator', path: '/savings-goal-calculator' },
        { title: 'US Tax Calculator', path: '/us-tax-calculator' },
      ]}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
            <input type="text" inputMode="decimal" autoComplete="off" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">From Year</label>
              <select value={fromYear} onChange={(e) => setFromYear(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400">
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To Year</label>
              <select value={toYear} onChange={(e) => setToYear(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400">
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {result ? (
            <>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-emerald-600 mb-1">${amount.toLocaleString()} in {fromYear} equals</p>
                <p className="text-2xl font-bold text-gray-900">${result.adjustedValue.toLocaleString()} in {toYear}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Price Multiplier</p>
                  <p className="text-lg font-semibold">{result.multiplier}x</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3">
                  <p className="text-xs text-yellow-600">Annual Inflation Rate</p>
                  <p className="text-lg font-semibold text-yellow-700">{(result.annualizedRate * 100).toFixed(2)}%</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Purchasing Power Change</p>
                <p className="text-sm">
                  {toYear > fromYear
                    ? `$${amount.toLocaleString()} in ${fromYear} has the same buying power as $${result.adjustedValue.toLocaleString()} in ${toYear}. Prices increased by ${((result.multiplier - 1) * 100).toFixed(1)}%.`
                    : `$${amount.toLocaleString()} in ${fromYear} would only buy what $${result.adjustedValue.toLocaleString()} buys in ${toYear}. The dollar was worth ${(result.multiplier * 100).toFixed(1)}% more.`}
                </p>
              </div>
            </>
          ) : (
            <div className="bg-red-50 rounded-lg p-4 text-red-600 text-sm">
              Unable to calculate. Please select valid years (1913-2025).
            </div>
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
}
