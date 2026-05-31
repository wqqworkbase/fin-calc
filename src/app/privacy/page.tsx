import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Calculator Financial & Tax',
  description: 'Privacy Policy for Calculator Financial & Tax — we do not collect, store, or share your personal data.',
};

export default function PrivacyPage() {
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
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: May 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-semibold text-gray-900">Our Privacy Commitment</h2>
              <p>
                At Calculator Financial &amp; Tax, we take your privacy seriously. The short version:
                <strong> we do not collect, store, or share any personal data.</strong> All calculations
                happen entirely in your browser, and your financial information never leaves your device.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">1. Information We Do NOT Collect</h2>
              <p>We do not collect or have access to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Any financial data you enter into calculators (income, savings, loan amounts, etc.)</li>
                <li>Names, email addresses, or other personal identifiers</li>
                <li>IP addresses or location data</li>
                <li>Browser fingerprints or device identifiers</li>
              </ul>
              <p className="mt-3">
                All calculations are performed client-side using JavaScript running in your web browser.
                We have no servers that process or store your calculation data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">2. Cookies and Tracking</h2>
              <p>
                This Website itself does NOT use any first-party cookies for tracking or analytics.
                However, third-party services integrated into this Website may set cookies:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <strong>Google AdSense</strong> — Google uses cookies to serve ads based on prior visits
                  to this and other websites. Google's use of advertising cookies enables it and its
                  partners to serve ads based on your visit to this site and other sites on the Internet.
                  You may opt out of personalized advertising by visiting
                  <a href="https://www.google.com/settings/ads" className="text-emerald-600 hover:underline ml-1" target="_blank" rel="noopener">Google Ads Settings</a>.
                </li>
                <li>
                  <strong>Google Funding Choices (CMP)</strong> — A consent management cookie may be set
                  to remember your GDPR consent preferences (EEA, UK, and Switzerland users).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">3. Third-Party Services</h2>
              <p>This Website uses the following third-party services that may process data independently:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <strong>Google AdSense</strong> — Displays advertisements.
                  <a href="https://policies.google.com/privacy" className="text-emerald-600 hover:underline ml-1" target="_blank" rel="noopener">Google Privacy Policy</a>
                </li>
                <li>
                  <strong>Vercel</strong> — Hosting and content delivery.
                  <a href="https://vercel.com/legal/privacy-policy" className="text-emerald-600 hover:underline ml-1" target="_blank" rel="noopener">Vercel Privacy Policy</a>
                </li>
                <li>
                  <strong>Google Fonts</strong> — Font delivery.
                  <a href="https://policies.google.com/privacy" className="text-emerald-600 hover:underline ml-1" target="_blank" rel="noopener">Google Privacy Policy</a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">4. GDPR Compliance (EEA / UK / Switzerland)</h2>
              <p>
                For users in the European Economic Area, the United Kingdom, and Switzerland, we use
                Google's certified Consent Management Platform (CMP) to obtain consent for non-essential
                cookies (primarily for ad personalization). You may choose to accept or reject these
                cookies via the consent banner displayed on your first visit.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">5. Children's Privacy</h2>
              <p>
                This Website is not directed at children under the age of 13, and we do not knowingly
                collect any information from children.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">6. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page
                with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">7. Contact</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us through the Website.
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
