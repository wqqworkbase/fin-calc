'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { aprToEAR, earToDaily, earToMonthly, generateAPRFAQs } from '@/lib/calculations/apr-to-ear';

export default function AprToEarCalculator() {
  const [apr, setApr] = useState(5);
  const [compoundFrequency, setCompoundFrequency] = useState(365);

  const ear = useMemo(() => aprToEAR(apr / 100, compoundFrequency), [apr, compoundFrequency]);
  const dailyRate = useMemo(() => earToDaily(ear), [ear]);
  const monthlyRate = useMemo(() => earToMonthly(ear), [ear]);

  return (
    <CalculatorLayout
      title="APR to EAR Converter"
      description="Convert Annual Percentage Rate (APR) to Effective Annual Rate (EAR). Understand the true cost of loans and true yield of investments with compounding."
      path="/apr-to-ear-calculator"
      faqs={generateAPRFAQs()}
      relatedCalculators={[
        { title: 'Loan Amortization Calculator', path: '/loan-amortization-calculator' },
        { title: 'Compound Interest Calculator', path: '/compound-interest-calculator' },
        { title: 'CD Ladder Calculator', path: '/cd-ladder-calculator' },
        { title: 'Savings Goal Calculator', path: '/savings-goal-calculator' },
      ]}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1.5">APR (Nominal Rate) %</label>
            <input type="text" inputMode="decimal" autoComplete="off" value={apr} onChange={(e) => setApr(parseFloat(e.target.value) || 0)} step="0.01"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1.5">Compounding Frequency</label>
            <select value={compoundFrequency} onChange={(e) => setCompoundFrequency(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400">
              <option value={365}>Daily (365/year)</option>
              <option value={12}>Monthly (12/year)</option>
              <option value={4}>Quarterly (4/year)</option>
              <option value={2}>Semi-annually (2/year)</option>
              <option value={1}>Annually (1/year)</option>
              <option value={52}>Weekly (52/year)</option>
              <option value={26}>Biweekly (26/year)</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-emerald-600 mb-1">Effective Annual Rate (EAR)</p>
            <p className="text-2xl font-bold text-gray-900">{(ear * 100).toFixed(4)}%</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Equivalent Daily Rate</p>
              <p className="text-lg font-semibold">{(dailyRate * 100).toFixed(4)}%</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Equivalent Monthly Rate</p>
              <p className="text-lg font-semibold">{(monthlyRate * 100).toFixed(4)}%</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">On a $10,000 balance for 1 year</p>
            <p className="text-sm">
              Interest at APR: <span className="font-semibold">${(10000 * apr / 100).toFixed(2)}</span><br />
              Interest at EAR: <span className="font-semibold text-emerald-600">${(10000 * ear).toFixed(2)}</span><br />
              Difference: <span className="font-semibold">${(10000 * ear - 10000 * apr / 100).toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
