export default function APREARArticle() {
  return (
    <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 !mb-3">APR vs. EAR: What's the Difference and Why It Matters</h2>
      <p>When comparing loans, credit cards, or investment products, you will encounter two common rate measures: <strong>APR (Annual Percentage Rate)</strong> and <strong>EAR (Effective Annual Rate)</strong>. They sound similar but can differ significantly — and not understanding the difference can cost you money.</p>

      <h3 className="text-base font-semibold text-gray-800">APR — The Nominal Rate</h3>
      <p>APR is the stated annual interest rate <strong>before</strong> accounting for compounding within the year. It is the simpler number and is required by law to be disclosed on most consumer loans (Truth in Lending Act). However, APR can be misleading when compounding occurs more than once per year.</p>

      <h3 className="text-base font-semibold text-gray-800">EAR — The True Annual Cost</h3>
      <p>EAR (also called APY for deposit products) accounts for intra-year compounding and represents the <strong>actual annual cost or return</strong>. EAR is always equal to or higher than APR. The more frequent the compounding, the larger the gap.</p>

      <div className="overflow-x-auto"><table className="w-full text-xs border-collapse"><thead><tr className="bg-gray-50"><th className="border border-gray-200 p-2 text-left">Compounding Frequency</th><th className="border border-gray-200 p-2 text-right">APR</th><th className="border border-gray-200 p-2 text-right">EAR</th><th className="border border-gray-200 p-2 text-right">On $10,000 Balance</th></tr></thead><tbody>
        <tr><td className="border border-gray-200 p-2">Annually</td><td className="border border-gray-200 p-2 text-right">5.00%</td><td className="border border-gray-200 p-2 text-right">5.000%</td><td className="border border-gray-200 p-2 text-right">$500.00</td></tr>
        <tr><td className="border border-gray-200 p-2">Semi-annually</td><td className="border border-gray-200 p-2 text-right">5.00%</td><td className="border border-gray-200 p-2 text-right">5.063%</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$506.25</td></tr>
        <tr><td className="border border-gray-200 p-2">Quarterly</td><td className="border border-gray-200 p-2 text-right">5.00%</td><td className="border border-gray-200 p-2 text-right">5.095%</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$509.45</td></tr>
        <tr><td className="border border-gray-200 p-2">Monthly</td><td className="border border-gray-200 p-2 text-right">5.00%</td><td className="border border-gray-200 p-2 text-right">5.116%</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$511.62</td></tr>
        <tr><td className="border border-gray-200 p-2">Daily</td><td className="border border-gray-200 p-2 text-right">5.00%</td><td className="border border-gray-200 p-2 text-right">5.127%</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$512.67</td></tr>
      </tbody></table></div>

      <h3 className="text-base font-semibold text-gray-800">Where This Matters Most</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>Credit Cards:</strong> Most cards compound daily. A 29.99% APR credit card has an EAR of approximately 34.7%. That is a much more accurate picture of what you will actually pay.</li>
        <li><strong>Mortgages:</strong> In the US, mortgages typically compound monthly. The APR disclosed includes certain fees, making it slightly higher than the note rate.</li>
        <li><strong>Savings Accounts & CDs:</strong> Banks advertise APY (which IS the EAR), so you can compare directly. A 5.00% APY CD earns exactly 5% after one year, regardless of compounding frequency.</li>
        <li><strong>Payday Loans:</strong> Often quoted with biweekly rates. A $15 fee on a $100 two-week loan has an APR of 391% — but the EAR is even higher at approximately 3,685% due to the ultra-short compounding period.</li>
      </ol>

      <h3 className="text-base font-semibold text-gray-800">The Conversion Formula</h3>
      <p className="bg-gray-50 p-3 rounded-xl text-xs font-mono">EAR = (1 + APR / n)<sup>n</sup> − 1 &nbsp;&nbsp;where n = number of compounding periods per year</p>
    </article>
  );
}
