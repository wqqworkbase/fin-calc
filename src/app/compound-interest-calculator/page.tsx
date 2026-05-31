'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { calculateCompoundInterest, generateCompoundInterestFAQs } from '@/lib/calculations/compound-interest';
import { COMPOUND_FREQUENCIES } from '@/lib/constants';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function CompoundInterestCalculator() {
  const [initialPrincipal, setInitialPrincipal] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualRate, setAnnualRate] = useState(7);
  const [years, setYears] = useState(20);
  const [compoundFrequency, setCompoundFrequency] = useState(12);

  const result = useMemo(
    () =>
      calculateCompoundInterest({
        initialPrincipal,
        monthlyContribution,
        annualRate: annualRate / 100,
        years,
        compoundFrequency,
      }),
    [initialPrincipal, monthlyContribution, annualRate, years, compoundFrequency]
  );

  const chartData = result.yearlyData.filter((d) => d.year > 0);

  return (
    <CalculatorLayout
      title="Compound Interest Calculator"
      description="Calculate how your investments grow with compound interest over time. See yearly breakdowns, visualize wealth growth, and experiment with different contribution strategies."
      path="/compound-interest-calculator"
      faqs={generateCompoundInterestFAQs()}
      relatedCalculators={[
        { title: 'Retirement Savings Calculator', path: '/retirement-savings-calculator' },
        { title: 'Savings Goal Calculator', path: '/savings-goal-calculator' },
        { title: 'CD Ladder Calculator', path: '/cd-ladder-calculator' },
        { title: 'APR to EAR Converter', path: '/apr-to-ear-calculator' },
        { title: 'Inflation Calculator', path: '/inflation-calculator' },
      ]}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1.5">Initial Principal ($)</label>
            <input
              type="text" inputMode="decimal" autoComplete="off"
              value={initialPrincipal}
              onChange={(e) => setInitialPrincipal(parseFloat(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1.5">Monthly Contribution ($)</label>
            <input
              type="text" inputMode="decimal" autoComplete="off"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(parseFloat(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1.5">Annual Interest Rate (%)</label>
            <input
              type="text" inputMode="decimal" autoComplete="off"
              value={annualRate}
              onChange={(e) => setAnnualRate(parseFloat(e.target.value) || 0)}
              step="0.1"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-1.5">Years</label>
              <input
                type="text" inputMode="decimal" autoComplete="off"
                value={years}
                onChange={(e) => setYears(parseFloat(e.target.value) || 1)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-1.5">Compounding</label>
              <select
                value={compoundFrequency}
                onChange={(e) => setCompoundFrequency(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400"
              >
                {COMPOUND_FREQUENCIES.map((f) => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-emerald-600 mb-1">Final Balance</p>
            <p className="text-2xl font-bold text-gray-900">${result.finalBalance.toLocaleString()}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Total Contributions</p>
              <p className="text-lg font-semibold">${result.totalContributions.toLocaleString()}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs text-green-600">Total Interest Earned</p>
              <p className="text-lg font-semibold text-green-700">${result.totalInterest.toLocaleString()}</p>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(v: number | string) => `$${(Number(v) / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(v: number | string) => `$${Number(v).toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="balance" stroke="#2563eb" name="Balance" strokeWidth={2} />
                <Line type="monotone" dataKey="contributions" stroke="#9ca3af" name="Contributions" strokeWidth={1} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <details className="mt-4">
            <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">View Formula</summary>
            <p className="mt-2 text-xs text-gray-500 bg-gray-50 p-3 rounded leading-relaxed">
              A = P(1 + r/n)<sup>nt</sup> + PMT ((1 + r/n)<sup>nt</sup> - 1) / (r/n)
              <br />
              where P = principal, r = annual rate, n = compounding periods/year, t = years, PMT = monthly
              contribution adjusted to compounding periods
            </p>
          </details>
        </div>
      </div>
    </CalculatorLayout>
  );
}
