'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import SEOHead from '@/components/SEOHead';
import AdUnit from '@/components/AdUnit';
import SiteLogo from '@/components/SiteLogo';
import MoneyBackground from '@/components/MoneyBackground';
import FinancialCard from '@/components/FinancialCard';
import FormattedAmount from '@/components/FormattedAmount';
import { AD_SLOTS } from '@/lib/ad-config';
import { calculateCompoundInterest, generateCompoundInterestFAQs } from '@/lib/calculations/compound-interest';
import { COMPOUND_FREQUENCIES } from '@/lib/constants';
import CompoundInterestArticle from '@/components/articles/CompoundInterestArticle';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const allCalculators = [
  { title: 'Compound Interest', path: '/compound-interest-calculator' },
  { title: 'Loan', path: '/loan-amortization-calculator' },
  { title: 'Tax', path: '/us-tax-calculator' },
  { title: 'Credit Card', path: '/credit-card-payoff-calculator' },
  { title: 'Retirement', path: '/retirement-savings-calculator' },
  { title: 'APR → EAR', path: '/apr-to-ear-calculator' },
  { title: 'Savings Goal', path: '/savings-goal-calculator' },
  { title: 'Emergency Fund', path: '/emergency-fund-calculator' },
  { title: 'ROI / CAGR', path: '/roi-calculator' },
  { title: 'Salary to Hourly', path: '/salary-to-hourly-calculator' },
  { title: 'Inflation', path: '/inflation-calculator' },
  { title: 'CD Ladder', path: '/cd-ladder-calculator' },
];

const faqs = generateCompoundInterestFAQs();
const navLinkClass = 'text-gray-600 hover:text-emerald-600 hover:underline underline-offset-4 decoration-emerald-300/50 transition-all text-sm font-medium whitespace-nowrap';

export default function Home() {
  const [initialPrincipal, setInitialPrincipal] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualRate, setAnnualRate] = useState(7);
  const [years, setYears] = useState(20);
  const [compoundFrequency, setCompoundFrequency] = useState(12);

  const result = useMemo(
    () => calculateCompoundInterest({ initialPrincipal, monthlyContribution, annualRate: annualRate / 100, years, compoundFrequency }),
    [initialPrincipal, monthlyContribution, annualRate, years, compoundFrequency]
  );

  const chartData = result.yearlyData.filter((d) => d.year > 0);

  return (
    <>
      <SEOHead title="Compound Interest Calculator" description="Free compound interest calculator." path="/compound-interest-calculator" faqs={faqs} />
      <div className="min-h-screen bg-white">
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <SiteLogo />
            <nav className="hidden lg:flex items-center gap-0.5">
              {allCalculators.map((c, i) => (
                <span key={c.path} className="flex items-center">
                  {i > 0 && <span className="text-gray-200 mx-1 select-none">|</span>}
                  <Link href={c.path} className={navLinkClass}>{c.title}</Link>
                </span>
              ))}
            </nav>
          </div>
          {/* Mobile nav — 2 rows of 4 below logo, above title */}
          <div className="lg:hidden border-t border-gray-50">
            <nav className="max-w-6xl mx-auto px-4 py-2 space-y-1.5">
              {[allCalculators.slice(0, 4), allCalculators.slice(4, 8), allCalculators.slice(8, 12)].map((row, ri) => (
                <div key={ri} className="flex justify-center gap-x-3 gap-y-0.5 flex-wrap text-xs font-medium">
                  {row.map((c, i) => (
                    <span key={c.path} className="flex items-center">
                      {i > 0 && <span className="text-gray-200 mx-1.5 select-none">|</span>}
                      <Link href={c.path} className="text-gray-500 hover:text-emerald-600 hover:underline underline-offset-4 decoration-emerald-300/50 transition-all whitespace-nowrap underline decoration-gray-300">
                        {c.title}
                      </Link>
                    </span>
                  ))}
                </div>
              ))}
            </nav>
          </div>
          <div className="max-w-6xl mx-auto px-4 pb-3 text-center">
            <h1 className="text-lg md:text-2xl font-bold text-gray-900">Compound Interest Calculator</h1>
            <p className="text-gray-400 text-xs mt-1">See how your money grows over time — free, no sign-up.</p>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-6 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ minHeight: '600px' }}>
            <MoneyBackground />
          </div>

          <div className="relative z-10">
            <AdUnit slot={AD_SLOTS.topBanner.slot} format="horizontal" className="mb-6" />

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Initial Principal ($)</label><input type="text" inputMode="decimal" autoComplete="off" value={initialPrincipal} onChange={(e) => setInitialPrincipal(parseFloat(e.target.value) || 0)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 outline-none transition" /></div>
                  <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Monthly Contribution ($)</label><input type="text" inputMode="decimal" autoComplete="off" value={monthlyContribution} onChange={(e) => setMonthlyContribution(parseFloat(e.target.value) || 0)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 outline-none transition" /></div>
                  <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Annual Interest Rate (%)</label><input type="text" inputMode="decimal" autoComplete="off" value={annualRate} onChange={(e) => setAnnualRate(parseFloat(e.target.value) || 0)} step="0.1" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 outline-none transition" /></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Years</label><input type="text" inputMode="decimal" autoComplete="off" value={years} onChange={(e) => setYears(parseFloat(e.target.value) || 1)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 outline-none transition" /></div>
                    <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Compounding</label><select value={compoundFrequency} onChange={(e) => setCompoundFrequency(Number(e.target.value))} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 outline-none transition bg-white">{COMPOUND_FREQUENCIES.map((f) => (<option key={f.value} value={f.value}>{f.label}</option>))}</select></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <FinancialCard label="Final Balance" value={result.finalBalance} />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-xl p-3.5"><p className="text-xs text-gray-400 mb-0.5">Total Contributions</p><FormattedAmount value={result.totalContributions} size="md" className="text-gray-800" /></div>
                    <div className="bg-emerald-50 rounded-xl p-3.5"><p className="text-xs text-emerald-500 mb-0.5">Total Interest</p><FormattedAmount value={result.totalInterest} size="md" className="text-emerald-700" /></div>
                  </div>
                  <div className="h-64"><ResponsiveContainer width="100%" height="100%"><LineChart data={chartData}><CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" /><XAxis dataKey="year" tick={{ fontSize: 12, fill: '#999' }} /><YAxis tickFormatter={(v) => `$${(Number(v) / 1000).toFixed(0)}k`} tick={{ fontSize: 12, fill: '#999' }} /><Tooltip formatter={(v) => `$${Number(v).toLocaleString()}`} /><Legend /><Line type="monotone" dataKey="balance" stroke="#059669" name="Balance" strokeWidth={2} dot={false} /><Line type="monotone" dataKey="contributions" stroke="#d1d5db" name="Contributions" strokeWidth={1} dot={false} /></LineChart></ResponsiveContainer></div>
                  <details className="mt-2"><summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">View Formula</summary><p className="mt-2 text-xs text-gray-400 bg-gray-50 p-3 rounded-xl leading-relaxed">A = P(1 + r/n)<sup>nt</sup> + PMT ((1 + r/n)<sup>nt</sup> - 1) / (r/n)</p></details>
                </div>
              </div>
            </div>

            <AdUnit slot={AD_SLOTS.midContent.slot} format="rectangle" className="mb-6" />

            <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 mb-6">
              <CompoundInterestArticle />
            </section>

            <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-5">Frequently Asked Questions</h2>
              <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border-b border-gray-50 pb-3 last:border-0 last:pb-0"><summary className="cursor-pointer font-medium text-gray-700 group-open:text-emerald-600 hover:text-emerald-500 transition-colors text-sm">{faq.question}</summary><p className="mt-2 text-gray-500 text-sm leading-relaxed">{faq.answer}</p></details>))}</div>
            </section>

            <AdUnit slot={AD_SLOTS.lowerContent.slot} format="rectangle" className="mb-6" />

            <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">More Free Financial Calculators</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">{allCalculators.filter(c => c.path !== '/compound-interest-calculator').map((c) => (<Link key={c.path} href={c.path} className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50 text-sm py-2 px-3 rounded-xl transition-all font-medium">{c.title}</Link>))}</div>
            </section>

            <AdUnit slot={AD_SLOTS.footer.slot} format="horizontal" />
          </div>
        </main>

        <footer className="bg-white border-t border-gray-100 py-6 text-center text-xs text-gray-400">
          <p className="mb-1 px-4">Disclaimer: This calculator is for informational and educational purposes only. It does not constitute financial, tax, or investment advice.</p>
          <nav className="flex justify-center gap-3 mb-1">
            <Link href="/about" className="hover:text-gray-600 hover:underline underline-offset-4 transition-colors">About Us</Link>
            <span className="text-gray-200">|</span>
            <Link href="/terms" className="hover:text-gray-600 hover:underline underline-offset-4 transition-colors">Terms of Use</Link>
            <span className="text-gray-200">|</span>
            <Link href="/privacy" className="hover:text-gray-600 hover:underline underline-offset-4 transition-colors">Privacy Policy</Link>
          </nav>
          <p> {new Date().getFullYear()} Calculator Financial &amp; Tax. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
