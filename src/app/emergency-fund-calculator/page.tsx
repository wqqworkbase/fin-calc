'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import FormattedAmount from '@/components/FormattedAmount';
import EmergencyFundArticle from '@/components/articles/EmergencyFundArticle';
import { calculateEmergencyFund, generateEmergencyFundFAQs } from '@/lib/calculations/emergency-fund';

export default function EmergencyFundCalculator() {
  const [monthlyExpenses, setMonthlyExpenses] = useState(3500);
  const [currentSavings, setCurrentSavings] = useState(5000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const result = useMemo(() => calculateEmergencyFund(monthlyExpenses, currentSavings, monthlyContribution), [monthlyExpenses, currentSavings, monthlyContribution]);

  return (
    <CalculatorLayout title="Emergency Fund Calculator" description="Calculate how much you need for a fully-funded emergency fund and see how long it will take to reach your goal at your current savings rate."
      path="/emergency-fund-calculator" faqs={generateEmergencyFundFAQs()} article={<EmergencyFundArticle />}
      relatedCalculators={[{ title: 'Savings Goal Calculator', path: '/savings-goal-calculator' }, { title: 'CD Ladder', path: '/cd-ladder-calculator' }, { title: 'Inflation', path: '/inflation-calculator' }]}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Monthly Essential Expenses ($)</label><input type="text" inputMode="decimal" autoComplete="off" value={monthlyExpenses} onChange={e => setMonthlyExpenses(parseFloat(e.target.value) || 0)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
          <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Current Emergency Savings ($)</label><input type="text" inputMode="decimal" autoComplete="off" value={currentSavings} onChange={e => setCurrentSavings(parseFloat(e.target.value) || 0)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
          <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Monthly Savings Contribution ($)</label><input type="text" inputMode="decimal" autoComplete="off" value={monthlyContribution} onChange={e => setMonthlyContribution(parseFloat(e.target.value) || 0)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
        </div>
        <div className="space-y-4">
          <div className="bg-emerald-50 rounded-xl p-4"><p className="text-sm text-emerald-600 mb-1">6-Month Fund Target</p><p className="text-2xl font-bold text-emerald-700">${result.sixMonths.toLocaleString()}</p><p className="text-xs text-emerald-500 mt-1">This is the standard recommendation</p></div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-50 rounded-xl p-3 text-center"><p className="text-xs text-gray-400 mb-0.5">3 Months</p><FormattedAmount value={result.threeMonths} size="sm" className="text-gray-700" /><p className="text-[10px] text-gray-400 mt-1">{result.timeToReach.months3} mo</p></div>
            <div className="bg-emerald-50 rounded-xl p-3 text-center"><p className="text-xs text-emerald-500 mb-0.5">6 Months</p><FormattedAmount value={result.sixMonths} size="sm" className="text-emerald-700" /><p className="text-[10px] text-emerald-500 mt-1">{result.timeToReach.months6} mo</p></div>
            <div className="bg-gray-50 rounded-xl p-3 text-center"><p className="text-xs text-gray-400 mb-0.5">12 Months</p><FormattedAmount value={result.twelveMonths} size="sm" className="text-gray-700" /><p className="text-[10px] text-gray-400 mt-1">{result.timeToReach.months12} mo</p></div>
          </div>
          <div className="bg-amber-50 rounded-xl p-3"><p className="text-xs text-amber-500">Progress to 6-month goal</p><p className="text-sm font-semibold text-amber-700">{result.sixMonths > 0 ? Math.min(100, Math.round(currentSavings / result.sixMonths * 100)) : 100}% funded</p></div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
