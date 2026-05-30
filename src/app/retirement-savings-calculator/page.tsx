'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
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
              <input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value) || 0)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Retirement Age</label>
              <input type="number" value={retirementAge} onChange={(e) => setRetirementAge(Number(e.target.value) || 0)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Savings ($)</label>
            <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(Number(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution ($)</label>
            <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expected Annual Return (%)</label>
            <input type="number" value={annualReturn} onChange={(e) => setAnnualReturn(Number(e.target.value) || 0)} step="0.1"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Retirement Spending ($)</label>
            <input type="number" value={annualRetirementSpend} onChange={(e) => setAnnualRetirementSpend(Number(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Life Expectancy (age)</label>
            <input type="number" value={lifeExpectancy} onChange={(e) => setLifeExpectancy(Number(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-600 mb-1">Retirement Balance at Age {retirementAge}</p>
            <p className="text-2xl font-bold text-blue-900">${result.retirementBalance.toLocaleString()}</p>
          </div>
          <div className={`rounded-lg p-4 ${result.isSufficient ? 'bg-green-50' : 'bg-red-50'}`}>
            <p className={`text-sm mb-1 ${result.isSufficient ? 'text-green-600' : 'text-red-600'}`}>Status</p>
            <p className={`text-lg font-semibold ${result.isSufficient ? 'text-green-700' : 'text-red-700'}`}>
              {result.isSufficient
                ? `On Track — savings last ${result.yearsOfRetirement} years in retirement`
                : `Shortfall: $${result.shortfall.toLocaleString()}`}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Total Contributions</p>
              <p className="text-lg font-semibold">${result.totalContributions.toLocaleString()}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs text-green-600">Total Interest</p>
              <p className="text-lg font-semibold text-green-700">${result.totalInterest.toLocaleString()}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Monthly Income (est.)</p>
              <p className="text-lg font-semibold">${result.monthlyRetirementIncome.toLocaleString()}</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3">
              <p className="text-xs text-yellow-600">Recommended Monthly</p>
              <p className="text-lg font-semibold text-yellow-700">${result.recommendedMonthlyContribution.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
