import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Calculator Financial & Tax',
  description: 'Learn about Calculator Financial & Tax — free online financial calculators for everyone.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
            <span className="text-emerald-600">$</span> Calculator
          </Link>
          <span className="text-[10px] font-medium text-gray-400 tracking-wide ml-1">Financial &amp; Tax</span>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">About Us</h1>

          <div className="prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed">
            <p>
              Hi, I&apos;m the developer of this site. I built Calculator Financial &amp; Tax
              because I believe everyone deserves quick, accurate, and free access to financial and tax
              calculations — no sign-ups, no paywalls, no data collection.
            </p>

            <p>
              As someone who has spent years navigating personal finance decisions — from mortgage
              amortization schedules to retirement planning, from tax bracket estimation to compound interest
              projections — I know how frustrating it can be to find reliable calculators that just work.
              Most tools online are either buried behind ads that make them unusable, locked behind email
              gates, or simply inaccurate.
            </p>

            <p>
              This site was born out of that frustration. Every calculator here runs entirely in your
              browser. Your financial data never leaves your device, and I never see it. The formulas
              powering each tool are transparent and based on standard financial mathematics and official
              IRS tax tables.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">What We Offer</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Compound Interest Calculator</strong> — Visualize how your investments grow over time</li>
              <li><strong>Loan Amortization Calculator</strong> — Understand your debt and find savings with extra payments</li>
              <li><strong>US Tax Calculator</strong> — Estimate federal, state, FICA, and local taxes for 2025 and 2026</li>
              <li><strong>Retirement Savings Calculator</strong> — See if you're on track and what to adjust</li>
              <li><strong>Inflation Calculator</strong> — Historical CPI data from 1913 to present</li>
              <li><strong>APR → EAR Converter</strong> — Understand the true cost of compounding</li>
              <li><strong>Savings Goal Calculator</strong> — Find your monthly target to reach any goal</li>
              <li><strong>CD Ladder Calculator</strong> — Build a ladder strategy to maximize returns</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">Our Commitment</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Free forever</strong> — No premium tiers, no paywalls, no subscriptions</li>
              <li><strong>Privacy first</strong> — No data collection, no tracking, no cookies beyond essential functionality</li>
              <li><strong>Accurate</strong> — Calculations based on official IRS tax tables and standard financial formulas</li>
              <li><strong>Fast</strong> — Everything runs in your browser, no server round-trips</li>
              <li><strong>Accessible</strong> — Works on desktop, tablet, and mobile</li>
            </ul>

            <p className="mt-8">
              Thank you for using Calculator Financial &amp; Tax. If you have feedback, suggestions, or find a bug,
              please reach out. I built this for you.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link href="/" className="text-emerald-600 hover:text-emerald-700 hover:underline text-sm font-medium">
              Back to Calculators
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        <p> {new Date().getFullYear()} Calculator Financial &amp; Tax. All rights reserved.</p>
      </footer>
    </div>
  );
}
