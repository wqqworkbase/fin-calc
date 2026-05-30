'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import FinancialCard from '@/components/FinancialCard';
import { calculateCDLadder, getCDTerms, generateCDFAQs } from '@/lib/calculations/cd-ladder';

export default function CDLadderCalculator() {
  const terms = getCDTerms();
  const [totalAmount, setTotalAmount] = useState(25000);
  const [apys, setApys] = useState<Record<string, number>>({
    '3-Month CD': 4.0,
    '6-Month CD': 4.25,
    '1-Year CD': 4.5,
    '2-Year CD': 4.75,
    '5-Year CD': 5.0,
  });

  const result = useMemo(() => {
    const apyInput: Record<string, number> = {};
    for (const term of terms) {
      apyInput[term.label] = (apys[term.label] ?? 0) / 100;
    }
    return calculateCDLadder({ totalAmount, apys: apyInput });
  }, [totalAmount, apys, terms]);

  const updateApy = (label: string, value: number) => {
    setApys((prev) => ({ ...prev, [label]: value }));
  };

  return (
    <CalculatorLayout
      title="CD Ladder Calculator"
      description="Build a Certificate of Deposit (CD) ladder strategy to maximize returns while maintaining regular access to your funds."
      path="/cd-ladder-calculator"
      faqs={generateCDFAQs()}
      relatedCalculators={[
        { title: 'Compound Interest Calculator', path: '/compound-interest-calculator' },
        { title: 'Savings Goal Calculator', path: '/savings-goal-calculator' },
        { title: 'APR to EAR Converter', path: '/apr-to-ear-calculator' },
        { title: 'Inflation Calculator', path: '/inflation-calculator' },
      ]}
    >
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Total Investment ($)</label>
              <input type="number" value={totalAmount} onChange={(e) => setTotalAmount(Number(e.target.value) || 0)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">APY for Each CD Term (%)</label>
              <div className="space-y-2">
                {terms.map((term) => (
                  <div key={term.label} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-28">{term.label}</span>
                    <input
                      type="number"
                      value={apys[term.label] ?? ''}
                      onChange={(e) => updateApy(term.label, Number(e.target.value) || 0)}
                      step="0.01"
                      className="flex-1 border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400"
                    />
                    <span className="text-xs text-gray-400">%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <FinancialCard label="Total Interest Earned" value={result.totalReturn} />

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Effective Blended APY</p>
              <p className="text-lg font-semibold">{result.effectiveAPY}%</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-2 text-left">CD Term</th>
                    <th className="p-2 text-right">APY</th>
                    <th className="p-2 text-right">Amount</th>
                    <th className="p-2 text-right">Return</th>
                  </tr>
                </thead>
                <tbody>
                  {result.rungResults.map((rung) => (
                    <tr key={rung.term} className="border-t border-gray-100">
                      <td className="p-2">{rung.term}</td>
                      <td className="p-2 text-right">{rung.apy}%</td>
                      <td className="p-2 text-right">${rung.amount.toLocaleString()}</td>
                      <td className="p-2 text-right text-green-600">${rung.return.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-gray-200 font-semibold bg-gray-50">
                    <td className="p-2">Total</td>
                    <td className="p-2 text-right">{result.effectiveAPY}%</td>
                    <td className="p-2 text-right">${totalAmount.toLocaleString()}</td>
                    <td className="p-2 text-right text-green-600">${result.totalReturn.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
