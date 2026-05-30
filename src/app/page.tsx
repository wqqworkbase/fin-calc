'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import SEOHead from '@/components/SEOHead';
import AdUnit from '@/components/AdUnit';
import { AD_SLOTS } from '@/lib/ad-config';
import { calculateCompoundInterest, generateCompoundInterestFAQs } from '@/lib/calculations/compound-interest';
import { COMPOUND_FREQUENCIES } from '@/lib/constants';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const otherCalculators = [
  { title: 'Retirement Savings', path: '/retirement-savings-calculator' },
  { title: 'Loan Amortization', path: '/loan-amortization-calculator' },
  { title: 'APR to EAR', path: '/apr-to-ear-calculator' },
  { title: 'Savings Goal', path: '/savings-goal-calculator' },
  { title: 'Inflation', path: '/inflation-calculator' },
  { title: 'CD Ladder', path: '/cd-ladder-calculator' },
  { title: 'US Tax', path: '/us-tax-calculator' },
];

const faqs = generateCompoundInterestFAQs();

export default function Home() {
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
    <>
      <SEOHead
        title="Compound Interest Calculator"
        description="Free compound interest calculator. Calculate how your investments grow over time with yearly breakdowns and visual charts. Also includes retirement, loan, tax, and other financial calculators."
        path="/"
        faqs={faqs}
      />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <Link href="/" className="text-xl font-bold text-white">FinCalc</Link>
              <nav className="hidden md:flex gap-3 text-sm">
                {otherCalculators.map((c) => (
                  <Link key={c.path} href={c.path} className="text-blue-100 hover:text-white transition">
                    {c.title}
                  </Link>
                ))}
              </nav>
              <Link href="/us-tax-calculator" className="md:hidden text-xs bg-white/10 px-3 py-1.5 rounded text-blue-100">
                More Tools
              </Link>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-center">Compound Interest Calculator</h1>
            <p className="text-blue-100 text-center text-sm mt-2 max-w-lg mx-auto">
              See how your money grows with compound interest. Free, no sign-up required.
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-6">
          <AdUnit slot={AD_SLOTS.topBanner.slot} format="horizontal" className="mb-6" />

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Initial Principal ($)</label>
                  <input type="number" value={initialPrincipal} onChange={(e) => setInitialPrincipal(Number(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution ($)</label>
                  <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Annual Interest Rate (%)</label>
                  <input type="number" value={annualRate} onChange={(e) => setAnnualRate(Number(e.target.value) || 0)} step="0.1"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Years</label>
                    <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value) || 1)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Compounding</label>
                    <select value={compoundFrequency} onChange={(e) => setCompoundFrequency(Number(e.target.value))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      {COMPOUND_FREQUENCIES.map((f) => (
                        <option key={f.value} value={f.value}>{f.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 mb-1">Final Balance</p>
                  <p className="text-2xl font-bold text-blue-900">${result.finalBalance.toLocaleString()}</p>
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
                      <YAxis tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`} />
                      <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                      <Legend />
                      <Line type="monotone" dataKey="balance" stroke="#2563eb" name="Balance" strokeWidth={2} />
                      <Line type="monotone" dataKey="contributions" stroke="#9ca3af" name="Contributions" strokeWidth={1} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <details className="mt-2">
                  <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">View Formula</summary>
                  <p className="mt-2 text-xs text-gray-500 bg-gray-50 p-3 rounded leading-relaxed">
                    A = P(1 + r/n)<sup>nt</sup> + PMT ((1 + r/n)<sup>nt</sup> - 1) / (r/n)
                  </p>
                </details>
              </div>
            </div>
          </div>

          <AdUnit slot={AD_SLOTS.midContent.slot} format="rectangle" className="mb-6" />

          {/* FAQ */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="cursor-pointer font-medium text-gray-700 group-open:text-blue-600">{faq.question}</summary>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <AdUnit slot={AD_SLOTS.lowerContent.slot} format="rectangle" className="mb-6" />

          {/* Other tools */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
            <h2 className="text-lg font-semibold mb-3">More Free Financial Calculators</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {otherCalculators.map((c) => (
                <Link key={c.path} href={c.path} className="text-blue-600 hover:underline text-sm py-1">
                  {c.title}
                </Link>
              ))}
            </div>
          </section>

          <AdUnit slot={AD_SLOTS.footer.slot} format="horizontal" />
        </main>

        <footer className="bg-white border-t border-gray-200 py-6 text-center text-xs text-gray-400">
          <p className="mb-1 px-4">
            Disclaimer: This calculator is for informational and educational purposes only.
            It does not constitute financial, tax, or investment advice. Results are estimates.
            Consult a qualified financial professional before making any financial decisions.
          </p>
          <p> {new Date().getFullYear()} FinCalc. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
