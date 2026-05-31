'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import FinancialCard from '@/components/FinancialCard';
import FormattedAmount from '@/components/FormattedAmount';
import { calculateRetirement, generateRetirementFAQs } from '@/lib/calculations/retirement-savings';

export default function RetirementSavingsCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [annualRetirementSpend, setAnnualRetirementSpend] = useState(60000);
  const [lifeExpectancy, setLifeExpectancy] = useState(90);

  const result = useMemo(
    () =>
      calculateRetirement({
        currentAge,
        retirementAge,
        currentSavings,
        monthlyContribution,
        annualReturn: annualReturn / 100,
        annualRetirementSpend,
        lifeExpectancy,
      }),
    [currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn, annualRetirementSpend, lifeExpectancy]
  );

  return (
    <CalculatorLayout
      title="Retirement Savings Calculator"
      description="Plan your retirement with confidence. See how much you need to save, whether you are on track, and get personalized savings recommendations."
      path="/retirement-savings-calculator"
      faqs={generateRetirementFAQs()}
      relatedCalculators={[
        { title: 'Compound Interest Calculator', path: '/compound-interest-calculator' },
        { title: 'Savings Goal Calculator', path: '/savings-goal-calculator' },
        { title: 'Inflation Calculator', path: '/inflation-calculator' },
        { title: 'US Tax Calculator', path: '/us-tax-calculator' },
      ]}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Age</label>
              <input type="text" inputMode="decimal" autoComplete="off" value={currentAge} onChange={(e) => setCurrentAge(parseFloat(e.target.value) || 0)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Retirement Age</label>
              <input type="text" inputMode="decimal" autoComplete="off" value={retirementAge} onChange={(e) => setRetirementAge(parseFloat(e.target.value) || 0)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Savings ($)</label>
            <input type="text" inputMode="decimal" autoComplete="off" value={currentSavings} onChange={(e) => setCurrentSavings(parseFloat(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution ($)</label>
            <input type="text" inputMode="decimal" autoComplete="off" value={monthlyContribution} onChange={(e) => setMonthlyContribution(parseFloat(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expected Annual Return (%)</label>
            <input type="text" inputMode="decimal" autoComplete="off" value={annualReturn} onChange={(e) => setAnnualReturn(parseFloat(e.target.value) || 0)} step="0.1"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Retirement Spending ($)</label>
            <input type="text" inputMode="decimal" autoComplete="off" value={annualRetirementSpend} onChange={(e) => setAnnualRetirementSpend(parseFloat(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Life Expectancy (age)</label>
            <input type="text" inputMode="decimal" autoComplete="off" value={lifeExpectancy} onChange={(e) => setLifeExpectancy(parseFloat(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
          </div>
        </div>

        <div className="space-y-4">
          <FinancialCard label={`Balance at Age ${retirementAge}`} value={result.retirementBalance} />

          <div className={`rounded-xl p-4 ${result.isSufficient ? 'bg-emerald-50' : 'bg-red-50'}`}>
            <p className={`text-sm mb-1 ${result.isSufficient ? 'text-emerald-600' : 'text-red-600'}`}>Status</p>
            <p className={`text-lg font-semibold ${result.isSufficient ? 'text-emerald-700' : 'text-red-700'}`}>
              {result.isSufficient
                ? `On Track — savings last ${result.yearsOfRetirement} years in retirement`
                : `Shortfall: $${result.shortfall.toLocaleString()}`}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-400">Total Contributions</p>
              <FormattedAmount value={result.totalContributions} size="md" className="text-gray-800" />
            </div>
            <div className="bg-emerald-50 rounded-xl p-3">
              <p className="text-xs text-emerald-500">Total Interest</p>
              <FormattedAmount value={result.totalInterest} size="md" className="text-emerald-700" />
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-400">Monthly Income (est.)</p>
              <FormattedAmount value={result.monthlyRetirementIncome} size="md" className="text-gray-800" />
            </div>
            <div className="bg-amber-50 rounded-xl p-3">
              <p className="text-xs text-amber-500">Recommended Monthly</p>
              <FormattedAmount value={result.recommendedMonthlyContribution} size="md" className="text-amber-700" />
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
