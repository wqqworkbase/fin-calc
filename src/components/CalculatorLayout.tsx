import SEOHead from './SEOHead';
import AdUnit from './AdUnit';
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
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
              <span className="text-emerald-600">$</span> FinCalc
            </Link>
            <nav className="hidden sm:flex gap-5 text-sm font-medium">
              <Link href="/" className="text-gray-600 hover:text-emerald-600 hover:underline underline-offset-4 decoration-emerald-300/50 transition-all">
                Home
              </Link>
              <Link href="/compound-interest-calculator" className="text-gray-600 hover:text-emerald-600 hover:underline underline-offset-4 decoration-emerald-300/50 transition-all">
                Compound
              </Link>
              <Link href="/retirement-savings-calculator" className="text-gray-600 hover:text-emerald-600 hover:underline underline-offset-4 decoration-emerald-300/50 transition-all">
                Retirement
              </Link>
              <Link href="/loan-amortization-calculator" className="text-gray-600 hover:text-emerald-600 hover:underline underline-offset-4 decoration-emerald-300/50 transition-all">
                Loan
              </Link>
              <Link href="/us-tax-calculator" className="text-gray-600 hover:text-emerald-600 hover:underline underline-offset-4 decoration-emerald-300/50 transition-all">
                Tax
              </Link>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
            {title}
          </h1>
          <p className="text-gray-400 text-center text-sm md:text-base mb-6">
            {description}
          </p>

          <AdUnit slot={AD_SLOTS.topBanner.slot} format="horizontal" className="mb-6" />

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 mb-6">
            {children}
          </div>

          <AdUnit slot={AD_SLOTS.midContent.slot} format="rectangle" className="mb-6" />

          {faqs.length > 0 && (
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 mb-6">
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
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 mb-6">
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
        </main>

        <footer className="bg-white border-t border-gray-100 py-6 text-center text-xs text-gray-400">
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
