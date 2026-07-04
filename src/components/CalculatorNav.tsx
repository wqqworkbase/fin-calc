'use client';
import { useState } from 'react';
import Link from 'next/link';

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
] as const;

export { allCalculators };

const linkClass = 'text-gray-600 hover:text-emerald-600 hover:underline underline-offset-4 decoration-emerald-300/50 transition-all text-xs font-semibold whitespace-nowrap';

export default function CalculatorNav() {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? allCalculators : allCalculators.slice(0, 8);

  return (
    <>
      {/* Desktop — 3 rows of 4 columns, evenly distributed */}
      <nav className="hidden lg:grid grid-cols-4 gap-x-4 gap-y-1.5 flex-1" style={{ maxWidth: '520px', marginLeft: 'auto' }}>
        {allCalculators.map((c, i) => (
          <span key={c.path} className="flex items-center justify-center">
            <Link href={c.path} className={linkClass}>{c.title}</Link>
          </span>
        ))}
      </nav>

      {/* Mobile — 2 rows of 4, expandable to 3 rows */}
      <div className="lg:hidden border-t border-gray-50">
        <nav className="max-w-6xl mx-auto px-4 py-2">
          <div className="space-y-1.5">
            {[visibleItems.slice(0, 4), visibleItems.slice(4, 8), visibleItems.slice(8, 12)].filter(row => row.length > 0).map((row, ri) => (
              <div key={ri} className="flex justify-center gap-x-2 gap-y-0.5 flex-wrap text-xs font-medium">
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
          </div>
          {allCalculators.length > 8 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full flex items-center justify-center gap-1 py-1 text-xs text-gray-400 hover:text-emerald-600 transition-colors"
            >
              {expanded ? 'Show Less' : `+ ${allCalculators.length - 8} More Tools`}
              <svg className={`w-3 h-3 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </nav>
      </div>
    </>
  );
}
