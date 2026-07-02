'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import FinancialCard from '@/components/FinancialCard';
import FormattedAmount from '@/components/FormattedAmount';
import ROIArticle from '@/components/articles/ROIArticle';
import { calculateROI, generateROIFAQs } from '@/lib/calculations/roi-calculator';

export default function ROICalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [finalValue, setFinalValue] = useState(25000);
  const [years, setYears] = useState(7);
  const result = useMemo(() => calculateROI(initialInvestment, finalValue, years), [initialInvestment, finalValue, years]);

  return (
    <CalculatorLayout title="Investment Return Calculator (ROI & CAGR)" description="Calculate your total return on investment, annualized growth rate (CAGR), and see how many times your money has doubled."
      path="/roi-calculator" faqs={generateROIFAQs()} article={<ROIArticle />}
      relatedCalculators={[{ title: 'Compound Interest', path: '/compound-interest-calculator' }, { title: 'APR → EAR', path: '/apr-to-ear-calculator' }, { title: 'Savings Goal', path: '/savings-goal-calculator' }]}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Initial Investment ($)</label><input type="text" inputMode="decimal" autoComplete="off" value={initialInvestment} onChange={e => setInitialInvestment(parseFloat(e.target.value) || 0)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
          <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Final Value ($)</label><input type="text" inputMode="decimal" autoComplete="off" value={finalValue} onChange={e => setFinalValue(parseFloat(e.target.value) || 0)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
          <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Years Held</label><input type="text" inputMode="decimal" autoComplete="off" value={years} onChange={e => setYears(parseFloat(e.target.value) || 1)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
        </div>
        <div className="space-y-4">
          <FinancialCard label="Total Gain" value={result.totalGain} />
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-400">Total ROI</p><p className="text-lg font-semibold">{result.roiPercent}%</p></div>
            <div className="bg-emerald-50 rounded-xl p-3"><p className="text-xs text-emerald-500">Annual CAGR</p><p className="text-lg font-semibold text-emerald-700">{result.cagrPercent}%</p></div>
            <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-400">Annualized Gain</p><FormattedAmount value={result.annualizedGain} size="md" className="text-gray-800" /></div>
            <div className="bg-amber-50 rounded-xl p-3"><p className="text-xs text-amber-500">Money Doubled</p><p className="text-lg font-semibold text-amber-700">{result.doubledTimes}x</p></div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
