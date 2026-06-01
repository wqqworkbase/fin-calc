export default function CDLadderArticle() {
  return (
    <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 !mb-3">CD Laddering Strategy: Earn Higher Rates Without Locking Up All Your Money</h2>
      <p>A Certificate of Deposit (CD) ladder is a simple but powerful strategy that balances the higher yields of long-term CDs with the flexibility of short-term access. Instead of putting all your savings into a single CD and hoping rates do not rise, you spread your money across CDs with staggered maturity dates.</p>

      <h3 className="text-base font-semibold text-gray-800">How a CD Ladder Works</h3>
      <p>Imagine you have $25,000 to invest. Instead of buying one 5-year CD, you split it into five $5,000 CDs with terms of 3 months, 6 months, 1 year, 2 years, and 5 years. When the 3-month CD matures, you reinvest it into a new 5-year CD. When the 6-month CD matures, you do the same. After one cycle, you have a 5-year CD maturing every 3 months — giving you both liquidity and long-term yields.</p>

      <div className="overflow-x-auto"><table className="w-full text-xs border-collapse"><thead><tr className="bg-gray-50"><th className="border border-gray-200 p-2 text-left">Rung</th><th className="border border-gray-200 p-2 text-right">Term</th><th className="border border-gray-200 p-2 text-right">APY</th><th className="border border-gray-200 p-2 text-right">Investment</th><th className="border border-gray-200 p-2 text-right">Return</th></tr></thead><tbody>
        <tr><td className="border border-gray-200 p-2">1</td><td className="border border-gray-200 p-2 text-right">3 months</td><td className="border border-gray-200 p-2 text-right">4.00%</td><td className="border border-gray-200 p-2 text-right">$5,000</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$50</td></tr>
        <tr><td className="border border-gray-200 p-2">2</td><td className="border border-gray-200 p-2 text-right">6 months</td><td className="border border-gray-200 p-2 text-right">4.25%</td><td className="border border-gray-200 p-2 text-right">$5,000</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$106</td></tr>
        <tr><td className="border border-gray-200 p-2">3</td><td className="border border-gray-200 p-2 text-right">1 year</td><td className="border border-gray-200 p-2 text-right">4.50%</td><td className="border border-gray-200 p-2 text-right">$5,000</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$225</td></tr>
        <tr><td className="border border-gray-200 p-2">4</td><td className="border border-gray-200 p-2 text-right">2 years</td><td className="border border-gray-200 p-2 text-right">4.75%</td><td className="border border-gray-200 p-2 text-right">$5,000</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$486</td></tr>
        <tr><td className="border border-gray-200 p-2">5</td><td className="border border-gray-200 p-2 text-right">5 years</td><td className="border border-gray-200 p-2 text-right">5.00%</td><td className="border border-gray-200 p-2 text-right">$5,000</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$1,381</td></tr>
      </tbody></table></div>

      <h3 className="text-base font-semibold text-gray-800">Why Ladder Instead of Going All-In?</h3>
      <ul className="list-disc pl-5 space-y-1 text-xs">
        <li><strong>Interest Rate Flexibility:</strong> If rates rise, you can reinvest maturing CDs at the new, higher rate. If you had locked everything into one 5-year CD at a low rate, you would be stuck.</li>
        <li><strong>Regular Liquidity:</strong> Every few months, a CD matures, giving you access to cash without early withdrawal penalties.</li>
        <li><strong>Higher Blended Yield:</strong> Long-term CDs pay more. By laddering, your average rate is higher than keeping everything in short-term CDs.</li>
        <li><strong>FDIC Protection:</strong> Each CD is insured up to $250,000 per depositor, per bank. For larger amounts, split across multiple banks.</li>
      </ul>

      <h3 className="text-base font-semibold text-gray-800">CDs vs. High-Yield Savings vs. Bonds</h3>
      <div className="overflow-x-auto"><table className="w-full text-xs border-collapse"><thead><tr className="bg-gray-50"><th className="border border-gray-200 p-2 text-left">Feature</th><th className="border border-gray-200 p-2">CD</th><th className="border border-gray-200 p-2">HYSA</th><th className="border border-gray-200 p-2">Treasury Bond</th></tr></thead><tbody>
        <tr><td className="border border-gray-200 p-2">Rate Type</td><td className="border border-gray-200 p-2">Fixed</td><td className="border border-gray-200 p-2">Variable</td><td className="border border-gray-200 p-2">Fixed</td></tr>
        <tr><td className="border border-gray-200 p-2">Liquidity</td><td className="border border-gray-200 p-2">Low (penalty)</td><td className="border border-gray-200 p-2">High (instant)</td><td className="border border-gray-200 p-2">Medium (sell on market)</td></tr>
        <tr><td className="border border-gray-200 p-2">Insurance</td><td className="border border-gray-200 p-2">FDIC</td><td className="border border-gray-200 p-2">FDIC</td><td className="border border-gray-200 p-2">US Govt-backed</td></tr>
        <tr><td className="border border-gray-200 p-2">State Tax</td><td className="border border-gray-200 p-2">Taxable</td><td className="border border-gray-200 p-2">Taxable</td><td className="border border-gray-200 p-2">Exempt</td></tr>
        <tr><td className="border border-gray-200 p-2">Best For</td><td className="border border-gray-200 p-2">Known timeline</td><td className="border border-gray-200 p-2">Emergency fund</td><td className="border border-gray-200 p-2">Long-term, tax advantage</td></tr>
      </tbody></table></div>

      <h3 className="text-base font-semibold text-gray-800">When CD Laddering Shines Most</h3>
      <p>CD ladders are ideal when you have a lump sum you want to preserve (inheritance, bonus, house sale proceeds), you want higher returns than a savings account, and you can tolerate limited access for the first year while the ladder establishes. They are also excellent for retirees seeking predictable income with principal protection.</p>
    </article>
  );
}
