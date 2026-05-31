'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import FinancialCard from '@/components/FinancialCard';
import FormattedAmount from '@/components/FormattedAmount';
import { calculateSavingsGoal, generateSavingsGoalFAQs } from '@/lib/calculations/savings-goal';

export default function SavingsGoalCalculator() {
  const [targetAmount, setTargetAmount] = useState(100000);
  const [years, setYears] = useState(10);
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [annualReturn, setAnnualReturn] = useState(7);

  const result = useMemo(
    () => calculateSavingsGoal({ targetAmount, years, currentSavings, annualReturn: annualReturn / 100 }),
    [targetAmount, years, currentSavings, annualReturn]
  );

  return (
    <CalculatorLayout
      title="Savings Goal Calculator"
      description="Find out exactly how much you need to save each month to reach your financial goals. Compare scenarios across different investment return rates."
      path="/savings-goal-calculator"
      faqs={generateSavingsGoalFAQs()}
      relatedCalculators={[
        { title: 'Compound Interest Calculator', path: '/compound-interest-calculator' },
        { title: 'Retirement Savings Calculator', path: '/retirement-savings-calculator' },
        { title: 'CD Ladder Calculator', path: '/cd-ladder-calculator' },
        { title: 'Inflation Calculator', path: '/inflation-calculator' },
      ]}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Target Amount ($)</label>
            <input type="text" inputMode="decimal" autoComplete="off" value={targetAmount} onChange={(e) => setTargetAmount(parseFloat(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Years to Reach Goal</label>
            <input type="text" inputMode="decimal" autoComplete="off" value={years} onChange={(e) => setYears(parseFloat(e.target.value) || 1)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Savings ($)</label>
            <input type="text" inputMode="decimal" autoComplete="off" value={currentSavings} onChange={(e) => setCurrentSavings(parseFloat(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expected Annual Return (%)</label>
            <input type="text" inputMode="decimal" autoComplete="off" value={annualReturn} onChange={(e) => setAnnualReturn(parseFloat(e.target.value) || 0)} step="0.1"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
          </div>
        </div>

        <div className="space-y-4">
          <FinancialCard label="Required Monthly Contribution" value={result.monthlyRequired} />

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-400">Total You Will Contribute</p>
              <FormattedAmount value={result.totalContributions} size="md" className="text-gray-800" />
            </div>
            <div className="bg-emerald-50 rounded-xl p-3">
              <p className="text-xs text-emerald-500">Interest Earned</p>
              <FormattedAmount value={result.totalInterest} size="md" className="text-emerald-700" />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Comparison at Different Return Rates</p>
            <div className="space-y-1">
              {result.scenarios.map((s, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span>{s.rate}% return</span>
                  <span className="font-semibold">${s.monthlyRequired.toLocaleString()}/mo</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
