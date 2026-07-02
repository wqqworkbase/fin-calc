export default function CompoundInterestArticle() {
  return (
    <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 !mb-3">What Is Compound Interest? Understanding the Eighth Wonder of the World</h2>

      <p>
        Albert Einstein reportedly called compound interest "the eighth wonder of the world" and added: "He who understands it, earns it. He who doesn't, pays it." Compound interest is the process where your investment earns returns, and then those returns earn additional returns — creating a snowball effect that accelerates wealth growth over time.
      </p>

      <h3 className="text-base font-semibold text-gray-800">Simple Interest vs. Compound Interest</h3>
      <p>
        With <strong>simple interest</strong>, you only earn returns on your original principal. With <strong>compound interest</strong>, you earn returns on both your principal AND all previously accumulated interest.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 p-2 text-left">Year</th>
              <th className="border border-gray-200 p-2 text-right">Simple Interest (7%)</th>
              <th className="border border-gray-200 p-2 text-right">Compound Interest (7%)</th>
              <th className="border border-gray-200 p-2 text-right">Difference</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-200 p-2">1</td><td className="border border-gray-200 p-2 text-right">$10,700</td><td className="border border-gray-200 p-2 text-right">$10,700</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$0</td></tr>
            <tr><td className="border border-gray-200 p-2">5</td><td className="border border-gray-200 p-2 text-right">$13,500</td><td className="border border-gray-200 p-2 text-right">$14,026</td><td className="border border-gray-200 p-2 text-right text-emerald-600">+$526</td></tr>
            <tr><td className="border border-gray-200 p-2">10</td><td className="border border-gray-200 p-2 text-right">$17,000</td><td className="border border-gray-200 p-2 text-right">$19,672</td><td className="border border-gray-200 p-2 text-right text-emerald-600">+$2,672</td></tr>
            <tr><td className="border border-gray-200 p-2">20</td><td className="border border-gray-200 p-2 text-right">$24,000</td><td className="border border-gray-200 p-2 text-right">$38,697</td><td className="border border-gray-200 p-2 text-right text-emerald-600">+$14,697</td></tr>
            <tr><td className="border border-gray-200 p-2">30</td><td className="border border-gray-200 p-2 text-right">$31,000</td><td className="border border-gray-200 p-2 text-right">$76,123</td><td className="border border-gray-200 p-2 text-right text-emerald-600">+$45,123</td></tr>
          </tbody>
        </table>
        <p className="text-[10px] text-gray-400 mt-1">Starting with $10,000 at 7% annual rate. Compound interest grows exponentially.</p>
      </div>

      <h3 className="text-base font-semibold text-gray-800">The Power of Time (and Starting Early)</h3>
      <p>
        Time is the most important variable in compound interest. Consider two investors:
      </p>
      <ul className="list-disc pl-5 space-y-1 text-xs">
        <li><strong>Alice</strong> invests $5,000/year from age 25 to 35 (10 years, $50,000 total), then stops.</li>
        <li><strong>Bob</strong> invests $5,000/year from age 35 to 65 (30 years, $150,000 total).</li>
      </ul>
      <p>
        At 7% annual return, Alice ends up with approximately <strong>$602,000</strong> at age 65, while Bob has about <strong>$505,000</strong>. Alice invested one-third the principal but started 10 years earlier — the power of compound interest rewarded her patience.
      </p>

      <h3 className="text-base font-semibold text-gray-800">Key Factors That Drive Compound Growth</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>Principal:</strong> The more you start with, the larger the base for compounding.</li>
        <li><strong>Rate of Return:</strong> A 2% difference in annual returns compounds into a massive gap over decades.</li>
        <li><strong>Time:</strong> The longer your money stays invested, the more compounding cycles it experiences.</li>
        <li><strong>Compounding Frequency:</strong> Daily compounding yields slightly more than annual — every bit counts.</li>
        <li><strong>Ongoing Contributions:</strong> Regular monthly investments dramatically accelerate growth (dollar-cost averaging).</li>
      </ol>

      <h3 className="text-base font-semibold text-gray-800">The Rule of 72</h3>
      <p>
        A quick mental shortcut: divide 72 by your annual rate of return to estimate how many years it takes to double your money. At 7%, money doubles every <strong>10.3 years</strong> (72 / 7 ≈ 10.3). At 10%, it takes just <strong>7.2 years</strong>.
      </p>
      <h3 className="text-base font-semibold text-gray-800">Real-World Example: Meet Alex</h3>
      <p>Alex is 25, earning $60,000/year as a software developer. She starts investing $400/month in a low-cost S&P 500 index fund averaging 8% annually. By age 65, she will have approximately <strong>$1,271,000</strong> — having contributed only $192,000. That is over $1 million in compound growth.</p>
      <p>What if she waits until 35? Starting the same $400/month at 35 yields only <strong>$547,000</strong> by 65. That 10-year delay cost her <strong>$724,000</strong> in lost compound growth — more than three times her total contributions.</p>

      <h3 className="text-base font-semibold text-gray-800">Common Mistakes to Avoid</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>Cashing out early.</strong> Withdrawing investments before they compound robs you of exponential growth in the later years — where the vast majority of gains occur.</li>
        <li><strong>Chasing the highest rate.</strong> A "guaranteed" 10% return sounds better than 7% from index funds, but high-return products often carry hidden risks or fraud. Consistency beats speculation.</li>
        <li><strong>Ignoring fees.</strong> A 1% management fee on a $500,000 portfolio costs $5,000/year — and the lost compounding on those fees over decades can exceed $200,000.</li>
        <li><strong>Stopping contributions during market dips.</strong> When the market falls, your fixed monthly contribution buys more shares at lower prices — accelerating eventual recovery gains.</li>
      </ol>
    </article>
  );
}
