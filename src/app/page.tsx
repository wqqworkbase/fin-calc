import Link from 'next/link';

const calculators = [
  {
    title: 'Compound Interest Calculator',
    description: 'See how your investments grow with compound interest over time.',
    path: '/compound-interest-calculator',
    category: 'Investing',
  },
  {
    title: 'Retirement Savings Calculator',
    description: 'Plan your retirement and see if you are on track to meet your goals.',
    path: '/retirement-savings-calculator',
    category: 'Retirement',
  },
  {
    title: 'Loan Amortization Calculator',
    description: 'Break down your loan payments and see how extra payments save money.',
    path: '/loan-amortization-calculator',
    category: 'Debt',
  },
  {
    title: 'APR to EAR Converter',
    description: 'Convert nominal APR to effective annual rate with compounding.',
    path: '/apr-to-ear-calculator',
    category: 'Investing',
  },
  {
    title: 'Savings Goal Calculator',
    description: 'Find out how much you need to save each month to reach your target.',
    path: '/savings-goal-calculator',
    category: 'Saving',
  },
  {
    title: 'Inflation Calculator',
    description: 'See how inflation affects purchasing power using historical CPI data.',
    path: '/inflation-calculator',
    category: 'Economics',
  },
  {
    title: 'CD Ladder Calculator',
    description: 'Build a CD ladder strategy to maximize returns with regular liquidity.',
    path: '/cd-ladder-calculator',
    category: 'Investing',
  },
  {
    title: 'US Tax Calculator',
    description: 'Estimate federal, state, FICA, and local taxes. Forward and reverse calculation.',
    path: '/us-tax-calculator',
    category: 'Tax',
    featured: true,
  },
];

const categories = [...new Set(calculators.map((c) => c.category))];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">FinCalc</h1>
          <p className="text-blue-100 text-sm md:text-lg max-w-lg mx-auto">
            Free online financial calculators. No sign-up required. All calculations run locally in your browser — your data never leaves your device.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {categories.map((category) => (
          <section key={category} className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">{category}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {calculators
                .filter((c) => c.category === category)
                .map((calc) => (
                  <Link
                    key={calc.path}
                    href={calc.path}
                    className={`bg-white rounded-xl shadow-sm border p-4 hover:border-blue-300 hover:shadow transition ${
                      calc.featured ? 'border-blue-200 ring-1 ring-blue-200' : 'border-gray-200'
                    }`}
                  >
                    <h3 className="font-semibold text-blue-600 mb-1">
                      {calc.title}
                      {calc.featured && (
                        <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">Featured</span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500">{calc.description}</p>
                  </Link>
                ))}
            </div>
          </section>
        ))}

        <section className="text-center py-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Coming Soon</h2>
          <p className="text-sm text-gray-500">Everyday calculators — tip calculator, unit converter, time zone converter, and more.</p>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 text-center text-xs text-gray-400">
        <p className="mb-1 px-4">
          Disclaimer: All calculators are for informational and educational purposes only. They do not constitute financial, tax, or investment advice.
        </p>
        <p> {new Date().getFullYear()} FinCalc. All rights reserved.</p>
      </footer>
    </div>
  );
}
