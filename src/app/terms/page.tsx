import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use - Calculator Financial & Tax',
  description: 'Terms of Use for Calculator Financial & Tax — free online financial calculators.',
};

export default function TermsPage() {
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
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: May 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-semibold text-gray-900">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Calculator Financial &amp; Tax (the "Website"), you agree to be bound by
                these Terms of Use. If you do not agree, please do not use the Website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">2. Informational Purposes Only</h2>
              <p>
                All calculators, tools, and content on this Website are provided for <strong>informational
                and educational purposes only</strong>. Nothing on this Website constitutes financial, tax,
                investment, legal, or professional advice. You should consult with a qualified financial
                advisor, tax professional, or attorney before making any financial decisions based on the
                results provided by these tools.
              </p>
              <p>
                The calculations are estimates based on the inputs you provide and may not reflect actual
                financial outcomes. Tax calculations use publicly available IRS tax brackets and standard
                deductions, but do not account for all possible tax situations, credits, deductions, or
                state-specific rules.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">3. No Warranty</h2>
              <p>
                This Website is provided "as is" without any representations or warranties, express or
                implied. We make no representations or warranties regarding the accuracy, completeness,
                reliability, or availability of the Website or the information, calculations, and content
                provided.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">4. Limitation of Liability</h2>
              <p>
                In no event shall Calculator Financial &amp; Tax or its owner be liable for any damages
                (including, without limitation, financial loss, lost profits, or any special, indirect, or
                consequential damages) arising out of or in connection with the use of or inability to use
                this Website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">5. Intellectual Property</h2>
              <p>
                All content, tools, code, and design elements on this Website are the property of Calculator
                Financial &amp; Tax unless otherwise stated. You may use the calculators freely for personal
                and commercial purposes, but you may not reproduce, distribute, or create derivative works
                from the Website's content without permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">6. Third-Party Links and Advertisements</h2>
              <p>
                This Website may display advertisements served by Google AdSense and may contain links to
                third-party websites. We are not responsible for the content, accuracy, or practices of any
                third-party sites or services. Google, as a third-party vendor, uses cookies to serve ads
                based on prior visits to this Website. You may opt out of personalized advertising by visiting
                <a href="https://www.google.com/settings/ads" className="text-emerald-600 hover:underline ml-1" target="_blank" rel="noopener">Google Ads Settings</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will be effective
                immediately upon posting to this page. Your continued use of the Website constitutes
                acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">8. Contact</h2>
              <p>
                For questions about these Terms, please contact us through the Website.
              </p>
            </section>
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
