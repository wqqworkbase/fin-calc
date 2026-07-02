export default function RetirementArticle() {
  return (
    <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 !mb-3">Retirement Planning: How Much Do You Really Need to Save?</h2>
      <p>Retirement planning is one of the most important financial exercises you will ever undertake. The central question is deceptively simple: "How much do I need to save so I don't run out of money?" The answer depends on your lifestyle goals, projected expenses, life expectancy, and how early you start.</p>

      <h3 className="text-base font-semibold text-gray-800">The 4% Rule — A Starting Point</h3>
      <p>The widely-cited <strong>4% Rule</strong> (from the Trinity Study) suggests you can withdraw 4% of your retirement portfolio in the first year and adjust for inflation each year thereafter, with a high probability of not running out of money over 30 years. This translates to saving roughly <strong>25 times your annual expenses</strong>.</p>

      <div className="overflow-x-auto"><table className="w-full text-xs border-collapse"><thead><tr className="bg-gray-50"><th className="border border-gray-200 p-2 text-left">Desired Annual Income</th><th className="border border-gray-200 p-2 text-right">Target Nest Egg (25x)</th></tr></thead><tbody>
        <tr><td className="border border-gray-200 p-2">$40,000</td><td className="border border-gray-200 p-2 text-right">$1,000,000</td></tr>
        <tr><td className="border border-gray-200 p-2">$60,000</td><td className="border border-gray-200 p-2 text-right">$1,500,000</td></tr>
        <tr><td className="border border-gray-200 p-2">$80,000</td><td className="border border-gray-200 p-2 text-right">$2,000,000</td></tr>
        <tr><td className="border border-gray-200 p-2">$100,000</td><td className="border border-gray-200 p-2 text-right">$2,500,000</td></tr>
      </tbody></table></div>

      <h3 className="text-base font-semibold text-gray-800">The Early Bird Advantage</h3>
      <p>Starting early is the single most powerful lever in retirement planning due to compound interest:</p>
      <ul className="list-disc pl-5 space-y-1 text-xs">
        <li>Saving $500/month starting at <strong>age 25</strong> at 7% return → approximately <strong>$1,200,000</strong> by age 65.</li>
        <li>Saving $500/month starting at <strong>age 35</strong> at 7% return → approximately <strong>$567,000</strong> by age 65.</li>
        <li>That 10-year delay costs you over <strong>$600,000</strong> in retirement savings.</li>
      </ul>

      <h3 className="text-base font-semibold text-gray-800">Account Types to Maximize</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>401(k) / 403(b):</strong> Employer-sponsored plans. Max contribution: $23,500 (2025). Always contribute enough to get the full employer match — it is free money.</li>
        <li><strong>Traditional IRA:</strong> Tax-deferred growth. Contributions may be tax-deductible. Max: $7,000/year ($8,000 if 50+).</li>
        <li><strong>Roth IRA:</strong> After-tax contributions, tax-free withdrawals in retirement. Same contribution limits as Traditional IRA.</li>
        <li><strong>HSA (Health Savings Account):</strong> Triple tax-advantaged if used for healthcare expenses. Max: $4,300 (individual) / $8,550 (family) in 2025.</li>
      </ol>

      <h3 className="text-base font-semibold text-gray-800">Don't Forget Social Security</h3>
      <p>Social Security replaces approximately 40% of pre-retirement income for average earners. You can claim as early as age 62 (reduced benefits) or delay until age 70 (increased benefits). Full retirement age is 67 for those born after 1960. Use Social Security as a supplement, not your primary retirement plan.</p>
      <h3 className="text-base font-semibold text-gray-800">Real-World Example: Meet David</h3>
      <p>David is 40, earning $85,000/year with $80,000 already saved in his 401(k). He contributes 10% of his salary ($708/month) with a 3% employer match ($212/month). At 7% average return, he will have approximately <strong>$980,000</strong> by 65 — providing about $39,000/year at a 4% withdrawal rate. Combined with Social Security (~$27,000/year), that is $66,000/year — workable, but not luxurious.</p>
      <p><strong>What if he boosts contributions to 15%?</strong> Adding an extra $354/month grows his nest egg to <strong>$1,230,000</strong> — an additional $250,000 from just $106,200 in extra contributions. That translates to $10,000 more per year in retirement.</p>

      <h3 className="text-base font-semibold text-gray-800">Common Mistakes to Avoid</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>Leaving free money on the table.</strong> Failing to contribute enough for the full employer match is turning down an immediate 50-100% return. Always max the match first.</li>
        <li><strong>Underestimating healthcare costs.</strong> A 65-year-old couple retiring today should budget approximately $315,000 for out-of-pocket medical expenses in retirement (Fidelity estimate). Medicare does not cover everything.</li>
        <li><strong>Claiming Social Security too early.</strong> Taking benefits at 62 instead of 70 reduces your monthly check by up to 45% — permanently. If you are healthy and can afford to wait, delay as long as possible (up to age 70).</li>
        <li><strong>Using retirement accounts as emergency funds.</strong> Early withdrawals from 401(k)s and IRAs trigger taxes plus a 10% penalty. Maintain a separate 3-6 month emergency fund in a high-yield savings account.</li>
      </ol>
    </article>
  );
}
