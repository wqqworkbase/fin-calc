'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import FinancialCard from '@/components/FinancialCard';
import FormattedAmount from '@/components/FormattedAmount';
import CreditCardPayoffArticle from '@/components/articles/CreditCardPayoffArticle';
import { calculateCreditCardPayoff, calculateCreditCardPayoffTime, generateCreditCardFAQs } from '@/lib/calculations/credit-card-payoff';

export default function CreditCardPayoffCalculator() {
  const [balance, setBalance] = useState(6000);
  const [apr, setApr] = useState(25);
  const [monthlyPayment, setMonthlyPayment] = useState(200);
  const [mode, setMode] = useState<'payment' | 'time'>('payment');
  const [targetMonths, setTargetMonths] = useState(24);

  const result = useMemo(() => calculateCreditCardPayoff(balance, apr / 100, monthlyPayment), [balance, apr, monthlyPayment]);
  const timeResult = useMemo(() => mode === 'time' ? calculateCreditCardPayoffTime(balance, apr / 100, targetMonths) : null, [balance, apr, targetMonths, mode]);

  return (
    <CalculatorLayout title="Credit Card Payoff Calculator" description="See exactly how long it will take to pay off your credit card and how much interest you will pay. Compare different payment strategies."
      path="/credit-card-payoff-calculator" faqs={generateCreditCardFAQs()} article={<CreditCardPayoffArticle />}
      relatedCalculators={[{ title: 'Loan Calculator', path: '/loan-amortization-calculator' }, { title: 'APR → EAR Converter', path: '/apr-to-ear-calculator' }, { title: 'Savings Goal', path: '/savings-goal-calculator' }]}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Credit Card Balance ($)</label><input type="text" inputMode="decimal" autoComplete="off" value={balance} onChange={e => setBalance(parseFloat(e.target.value) || 0)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
          <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">APR (%)</label><input type="text" inputMode="decimal" autoComplete="off" value={apr} onChange={e => setApr(parseFloat(e.target.value) || 0)} step="0.01" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button onClick={() => setMode('payment')} className={`flex-1 py-1.5 rounded-md text-xs font-medium transition ${mode === 'payment' ? 'bg-white shadow text-emerald-600' : 'text-gray-500'}`}>Fixed Payment</button>
            <button onClick={() => setMode('time')} className={`flex-1 py-1.5 rounded-md text-xs font-medium transition ${mode === 'time' ? 'bg-white shadow text-emerald-600' : 'text-gray-500'}`}>Target Payoff</button>
          </div>
          {mode === 'payment' ? (
            <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Monthly Payment ($)</label><input type="text" inputMode="decimal" autoComplete="off" value={monthlyPayment} onChange={e => setMonthlyPayment(parseFloat(e.target.value) || 0)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
          ) : (
            <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Target Months to Payoff</label><input type="text" inputMode="decimal" autoComplete="off" value={targetMonths} onChange={e => setTargetMonths(parseFloat(e.target.value) || 1)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
          )}
        </div>
        <div className="space-y-4">
          {mode === 'payment' ? (
            <>
              <FinancialCard label="Total Interest" value={result.totalInterest} />
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-400">Months to Payoff</p><p className="text-lg font-semibold">{result.monthsToPayoff}</p></div>
                <div className="bg-red-50 rounded-xl p-3"><p className="text-xs text-red-500">Total Paid</p><FormattedAmount value={result.totalPaid} size="md" className="text-red-700" /></div>
              </div>
            </>
          ) : timeResult ? (
            <>
              <FinancialCard label="Required Monthly Payment" value={timeResult.monthlyPayment} />
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-400">Monthly Payment</p><FormattedAmount value={timeResult.monthlyPayment} size="md" className="text-gray-800" /></div>
                <div className="bg-red-50 rounded-xl p-3"><p className="text-xs text-red-500">Total Interest</p><FormattedAmount value={timeResult.totalInterest} size="md" className="text-red-700" /></div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </CalculatorLayout>
  );
}
