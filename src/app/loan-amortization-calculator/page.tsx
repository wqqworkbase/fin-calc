'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import FinancialCard from '@/components/FinancialCard';
import FormattedAmount from '@/components/FormattedAmount';
import { calculateAmortization, calculateEarlyPayoff, generateLoanFAQs } from '@/lib/calculations/loan-amortization';

export default function LoanAmortizationCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [annualRate, setAnnualRate] = useState(6.5);
  const [termYears, setTermYears] = useState(30);
  const [paymentsPerYear, setPaymentsPerYear] = useState(12);
  const [extraPayment, setExtraPayment] = useState(0);

  const result = useMemo(
    () => calculateAmortization({ loanAmount, annualRate: annualRate / 100, termYears, paymentsPerYear }),
    [loanAmount, annualRate, termYears, paymentsPerYear]
  );

  const earlyPayoff = useMemo(() => {
    if (extraPayment <= 0) return null;
    return calculateEarlyPayoff(
      { loanAmount, annualRate: annualRate / 100, termYears, paymentsPerYear },
      extraPayment
    );
  }, [loanAmount, annualRate, termYears, paymentsPerYear, extraPayment]);

  const displaySchedule = result.schedule.filter(
    (_, i) => i < 12 || i >= result.schedule.length - 12
  );

  return (
    <CalculatorLayout
      title="Loan Amortization Calculator"
      description="Break down your loan payments by principal and interest. See your full amortization schedule and discover how extra payments can save thousands."
      path="/loan-amortization-calculator"
      faqs={generateLoanFAQs()}
      relatedCalculators={[
        { title: 'Compound Interest Calculator', path: '/compound-interest-calculator' },
        { title: 'APR to EAR Converter', path: '/apr-to-ear-calculator' },
        { title: 'Savings Goal Calculator', path: '/savings-goal-calculator' },
      ]}
    >
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount ($)</label>
              <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value) || 0)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Annual Interest Rate (%)</label>
              <input type="number" value={annualRate} onChange={(e) => setAnnualRate(Number(e.target.value) || 0)} step="0.01"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Term (years)</label>
                <input type="number" value={termYears} onChange={(e) => setTermYears(Number(e.target.value) || 1)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Frequency</label>
                <select value={paymentsPerYear} onChange={(e) => setPaymentsPerYear(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400">
                  <option value={12}>Monthly (12/year)</option>
                  <option value={26}>Biweekly (26/year)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Extra Payment per Period ($)</label>
              <input type="number" value={extraPayment} onChange={(e) => setExtraPayment(Number(e.target.value) || 0)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" />
            </div>
          </div>

          <div className="space-y-4">
            <FinancialCard label="Monthly Payment" value={result.payment} />

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400">Total Paid</p>
                <FormattedAmount value={result.totalPayments} size="md" className="text-gray-800" />
              </div>
              <div className="bg-red-50 rounded-xl p-3">
                <p className="text-xs text-red-500">Total Interest</p>
                <FormattedAmount value={result.totalInterest} size="md" className="text-red-700" />
              </div>
            </div>

            {earlyPayoff && (
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-600 mb-1">With Extra ${extraPayment}/payment</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-green-700 font-semibold">{earlyPayoff.timeSaved} yrs saved</p>
                    <p className="text-xs text-green-500">Time saved</p>
                  </div>
                  <div>
                    <p className="text-green-700 font-semibold">${earlyPayoff.interestSaved.toLocaleString()}</p>
                    <p className="text-xs text-green-500">Interest saved</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <details>
          <summary className="text-sm font-medium text-gray-700 cursor-pointer hover:text-emerald-600">
            View Amortization Schedule (first & last 12 payments)
          </summary>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-2 text-left">#</th>
                  <th className="p-2 text-right">Payment</th>
                  <th className="p-2 text-right">Principal</th>
                  <th className="p-2 text-right">Interest</th>
                  <th className="p-2 text-right">Balance</th>
                </tr>
              </thead>
              <tbody>
                {displaySchedule.map((row, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="p-2">{row.period}</td>
                    <td className="p-2 text-right">${row.payment.toLocaleString()}</td>
                    <td className="p-2 text-right">${row.principal.toLocaleString()}</td>
                    <td className="p-2 text-right">${row.interest.toLocaleString()}</td>
                    <td className="p-2 text-right">${row.balance.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </CalculatorLayout>
  );
}
