export default function InflationArticle() {
  return (
    <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 !mb-3">How Inflation Erodes Your Purchasing Power (and What to Do About It)</h2>
      <p>Inflation is the silent killer of wealth. A dollar today buys less than a dollar bought last year, and far less than a dollar bought 20 years ago. Understanding how inflation works — and how to protect yourself — is essential for every financial plan.</p>

      <h3 className="text-base font-semibold text-gray-800">What Is the CPI?</h3>
      <p>The <strong>Consumer Price Index (CPI)</strong>, published monthly by the U.S. Bureau of Labor Statistics (BLS), tracks the average change in prices for a fixed basket of goods and services — housing, food, transportation, healthcare, and more. The CPI-U (Urban Consumers) is the most widely cited measure and covers approximately 93% of the U.S. population.</p>

      <h3 className="text-base font-semibold text-gray-800">Inflation Through the Decades</h3>
      <div className="overflow-x-auto"><table className="w-full text-xs border-collapse"><thead><tr className="bg-gray-50"><th className="border border-gray-200 p-2 text-left">Period</th><th className="border border-gray-200 p-2 text-right">Avg. Annual Inflation</th><th className="border border-gray-200 p-2 text-left">Notable Event</th></tr></thead><tbody>
        <tr><td className="border border-gray-200 p-2">1970s</td><td className="border border-gray-200 p-2 text-right">7.1%</td><td className="border border-gray-200 p-2">Oil crisis, stagflation</td></tr>
        <tr><td className="border border-gray-200 p-2">1980s</td><td className="border border-gray-200 p-2 text-right">5.6%</td><td className="border border-gray-200 p-2">Volcker rate hikes tame inflation</td></tr>
        <tr><td className="border border-gray-200 p-2">1990s</td><td className="border border-gray-200 p-2 text-right">3.0%</td><td className="border border-gray-200 p-2">Tech boom, stable prices</td></tr>
        <tr><td className="border border-gray-200 p-2">2000s</td><td className="border border-gray-200 p-2 text-right">2.6%</td><td className="border border-gray-200 p-2">Housing bubble, Great Recession</td></tr>
        <tr><td className="border border-gray-200 p-2">2010s</td><td className="border border-gray-200 p-2 text-right">1.8%</td><td className="border border-gray-200 p-2">Historically low inflation</td></tr>
        <tr><td className="border border-gray-200 p-2">2021–2023</td><td className="border border-gray-200 p-2 text-right">5.5%</td><td className="border border-gray-200 p-2">Post-pandemic supply chain crisis</td></tr>
      </tbody></table></div>

      <h3 className="text-base font-semibold text-gray-800">Real-Life Impact: What $1,000 Buys Over Time</h3>
      <p>At an average inflation rate of 3%, purchasing power erodes steadily:</p>
      <ul className="list-disc pl-5 space-y-1 text-xs">
        <li>After <strong>5 years</strong>: $1,000 buys what $863 buys today.</li>
        <li>After <strong>10 years</strong>: $1,000 buys what $744 buys today.</li>
        <li>After <strong>20 years</strong>: $1,000 buys what $554 buys today.</li>
        <li>After <strong>30 years</strong>: $1,000 buys what $412 buys today.</li>
      </ul>
      <p>This is why keeping large sums in a zero-interest checking account for decades is a guaranteed loss — your money is <strong>safe but shrinking</strong>.</p>

      <h3 className="text-base font-semibold text-gray-800">How to Protect Against Inflation</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>Invest in Stocks:</strong> Over the long term (20+ years), broad stock market indices like the S&P 500 have returned approximately 7–10% annually after inflation — well above inflation rates.</li>
        <li><strong>TIPS (Treasury Inflation-Protected Securities):</strong> Government bonds whose principal adjusts with CPI. Safe, but lower returns than stocks.</li>
        <li><strong>Real Estate:</strong> Property values and rents generally rise with inflation, providing a natural hedge.</li>
        <li><strong>I-Bonds:</strong> U.S. savings bonds with an inflation-adjusted rate component. Currently yielding above 4%.</li>
        <li><strong>Commodities & Gold:</strong> Historically used as inflation hedges, though their track record is mixed and more volatile than stocks.</li>
      </ol>
    </article>
  );
}
