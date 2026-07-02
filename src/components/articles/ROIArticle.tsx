export default function ROIArticle() {
  return (
    <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 !mb-3">ROI and CAGR: Measuring Investment Performance</h2>
      <p>ROI (Return on Investment) and CAGR (Compound Annual Growth Rate) are the two most important metrics for evaluating investment performance. ROI tells you "how much did I make, total?" CAGR tells you "what was my average yearly return?" Both are essential — and understanding the difference prevents costly mistakes.</p>
      <div className="overflow-x-auto"><table className="w-full text-xs border-collapse"><thead><tr className="bg-gray-50"><th className="border border-gray-200 p-2 text-left">Investment</th><th className="border border-gray-200 p-2 text-right">Initial</th><th className="border border-gray-200 p-2 text-right">Final</th><th className="border border-gray-200 p-2 text-right">Years</th><th className="border border-gray-200 p-2 text-right">ROI</th><th className="border border-gray-200 p-2 text-right">CAGR</th></tr></thead><tbody>
        <tr><td className="border border-gray-200 p-2">S&P 500 Index Fund</td><td className="border border-gray-200 p-2 text-right">$10,000</td><td className="border border-gray-200 p-2 text-right">$19,670</td><td className="border border-gray-200 p-2 text-right">10</td><td className="border border-gray-200 p-2 text-right text-emerald-600">96.7%</td><td className="border border-gray-200 p-2 text-right">7.0%</td></tr>
        <tr><td className="border border-gray-200 p-2">Apple Stock (2015→2025)</td><td className="border border-gray-200 p-2 text-right">$10,000</td><td className="border border-gray-200 p-2 text-right">$62,500</td><td className="border border-gray-200 p-2 text-right">10</td><td className="border border-gray-200 p-2 text-right text-emerald-600">525%</td><td className="border border-gray-200 p-2 text-right">20.1%</td></tr>
        <tr><td className="border border-gray-200 p-2">Savings Account (0.5%)</td><td className="border border-gray-200 p-2 text-right">$10,000</td><td className="border border-gray-200 p-2 text-right">$10,511</td><td className="border border-gray-200 p-2 text-right">10</td><td className="border border-gray-200 p-2 text-right text-red-600">5.1%</td><td className="border border-gray-200 p-2 text-right">0.5%</td></tr>
      </tbody></table></div>
      <h3 className="text-base font-semibold text-gray-800">Real-World Example: Meet Raj</h3>
      <p>Raj invested $25,000 in a diversified ETF portfolio in 2018. By 2025 (7 years), the portfolio is worth $48,000. His ROI is 92% — he nearly doubled his money. But his CAGR is approximately 9.8% per year — a much more useful number for comparing against other investment options or the broader market.</p>
      <h3 className="text-base font-semibold text-gray-800">Common Mistakes to Avoid</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>Comparing ROI across different timeframes.</strong> A 100% ROI over 5 years (CAGR ~15%) is much better than 100% over 20 years (CAGR ~3.6%). Always compare CAGR, not raw ROI.</li>
        <li><strong>Ignoring dividends in total return.</strong> The S&P 500 price return over 10 years might be 80%, but total return including reinvested dividends could be 120%+. Always use total return for ROI.</li>
        <li><strong>Focusing only on past returns.</strong> Past performance does not guarantee future results. Use historical data as context, not prediction.</li>
      </ol>
    </article>
  );
}
