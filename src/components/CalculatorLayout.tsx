import SEOHead from './SEOHead';
import AdUnit from './AdUnit';
import SiteLogo from './SiteLogo';
import MoneyBackground from './MoneyBackground';
import { AD_SLOTS } from '@/lib/ad-config';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
}

interface CalculatorLayoutProps {
  title: string;
  description: string;
  path: string;
  faqs?: FAQ[];
  children: React.ReactNode;
  relatedCalculators?: { title: string; path: string }[];
}

const allCalculators = [
  { title: 'Compound Interest', path: '/compound-interest-calculator' },
  { title: 'Retirement', path: '/retirement-savings-calculator' },
  { title: 'Loan', path: '/loan-amortization-calculator' },
  { title: 'APR → EAR', path: '/apr-to-ear-calculator' },
  { title: 'Savings Goal', path: '/savings-goal-calculator' },
  { title: 'Inflation', path: '/inflation-calculator' },
  { title: 'CD Ladder', path: '/cd-ladder-calculator' },
  { title: 'Tax', path: '/us-tax-calculator' },
];

const navLinkClass =
  'text-gray-600 hover:text-emerald-600 hover:underline underline-offset-4 decoration-emerald-300/50 transition-all text-sm font-medium whitespace-nowrap';

export default function CalculatorLayout({
  title,
  description,
  path,
  faqs = [],
  children,
  relatedCalculators = [],
}: CalculatorLayoutProps) {
  return (
    <>
      <SEOHead title={title} description={description} path={path} faqs={faqs} />
      <div className="min-h-screen bg-white">
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <SiteLogo />
            <nav className="hidden lg:flex items-center gap-0.5 text-sm font-medium">
              {allCalculators.map((c, i) => (
                <span key={c.path} className="flex items-center">
                  {i > 0 && <span className="text-gray-200 mx-1 select-none">|</span>}
                  <Link href={c.path} className={navLinkClass}>
                    {c.title}
                  </Link>
                </span>
              ))}
            </nav>
            <Link href="/us-tax-calculator" className="lg:hidden text-sm text-emerald-600 font-medium hover:underline">
              All Tools
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-6 relative">
          {/* $100 bill background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ minHeight: '600px' }}>
            <MoneyBackground />
          </div>

          <div className="relative z-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">{title}</h1>
            <p className="text-gray-400 text-center text-sm md:text-base mb-6">{description}</p>

            <AdUnit slot={AD_SLOTS.topBanner.slot} format="horizontal" className="mb-6" />

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 mb-6">
              {children}
            </div>

            <AdUnit slot={AD_SLOTS.midContent.slot} format="rectangle" className="mb-6" />

            {faqs.length > 0 && (
              <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-5">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <details key={i} className="group border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                      <summary className="cursor-pointer font-medium text-gray-700 group-open:text-emerald-600 hover:text-emerald-500 transition-colors text-sm">
                        {faq.question}
                      </summary>
                      <p className="mt-2 text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <AdUnit slot={AD_SLOTS.lowerContent.slot} format="rectangle" className="mb-6" />

            {relatedCalculators.length > 0 && (
              <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Calculators</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {relatedCalculators.map((rc, i) => (
                    <Link
                      key={i}
                      href={rc.path}
                      className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50 text-sm py-2 px-3 rounded-xl transition-all font-medium"
                    >
                      {rc.title}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <AdUnit slot={AD_SLOTS.footer.slot} format="horizontal" />
          </div>
        </main>

        <footer className="bg-white border-t border-gray-100 py-6 text-center text-xs text-gray-400">
          <p className="mb-1 px-4">
            Disclaimer: This calculator is for informational and educational purposes only. It does not constitute
            financial, tax, or investment advice. Results are estimates. Consult a qualified financial professional
            before making any financial decisions.
          </p>
          <p> {new Date().getFullYear()} Calculator Financial &amp; Tax. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
