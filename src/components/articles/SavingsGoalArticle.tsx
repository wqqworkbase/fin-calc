export default function SavingsGoalArticle() {
  return (
    <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 !mb-3">How to Set and Achieve Your Savings Goals</h2>
      <p>Whether you are saving for a house down payment, a car, a wedding, an emergency fund, or a dream vacation, having a clear savings goal — and a realistic monthly plan — dramatically increases your odds of success. The math is simple, but the discipline is hard. This guide covers both.</p>

      <h3 className="text-base font-semibold text-gray-800">Define Your Goal: Be SMART</h3>
      <p>Vague goals fail. Use the SMART framework:</p>
      <ul className="list-disc pl-5 space-y-1 text-xs">
        <li><strong>Specific:</strong> "$50,000 for a house down payment" not "save more money."</li>
        <li><strong>Measurable:</strong> Track progress monthly — you should know exactly how close you are.</li>
        <li><strong>Achievable:</strong> Based on your income and expenses, is the monthly target realistic?</li>
        <li><strong>Relevant:</strong> This goal should matter enough to you to justify the sacrifice.</li>
        <li><strong>Time-bound:</strong> "In 5 years" or "by December 2030" — a deadline creates urgency.</li>
      </ul>

      <h3 className="text-base font-semibold text-gray-800">The Savings Formula</h3>
      <p>Your monthly required savings amount depends on three factors: your target amount, your timeline, and your expected return rate. The shorter your timeline, the more you will need to save each month — and the less you can rely on investment returns.</p>

      <div className="overflow-x-auto"><table className="w-full text-xs border-collapse"><thead><tr className="bg-gray-50"><th className="border border-gray-200 p-2 text-left">Goal</th><th className="border border-gray-200 p-2 text-right">Timeline</th><th className="border border-gray-200 p-2 text-right">Monthly @ 5%</th><th className="border border-gray-200 p-2 text-right">Monthly @ 7%</th></tr></thead><tbody>
        <tr><td className="border border-gray-200 p-2">$10,000 Emergency Fund</td><td className="border border-gray-200 p-2 text-right">2 years</td><td className="border border-gray-200 p-2 text-right">$396</td><td className="border border-gray-200 p-2 text-right">$388</td></tr>
        <tr><td className="border border-gray-200 p-2">$50,000 House Down Payment</td><td className="border border-gray-200 p-2 text-right">5 years</td><td className="border border-gray-200 p-2 text-right">$719</td><td className="border border-gray-200 p-2 text-right">$690</td></tr>
        <tr><td className="border border-gray-200 p-2">$100,000 College Fund</td><td className="border border-gray-200 p-2 text-right">10 years</td><td className="border border-gray-200 p-2 text-right">$614</td><td className="border border-gray-200 p-2 text-right">$571</td></tr>
        <tr><td className="border border-gray-200 p-2">$500,000 Retirement</td><td className="border border-gray-200 p-2 text-right">25 years</td><td className="border border-gray-200 p-2 text-right">$853</td><td className="border border-gray-200 p-2 text-right">$745</td></tr>
      </tbody></table></div>

      <h3 className="text-base font-semibold text-gray-800">Where to Keep Your Savings</h3>
      <ul className="list-disc pl-5 space-y-1 text-xs">
        <li><strong>High-Yield Savings Account (HYSA):</strong> Best for short-term goals (0–3 years). FDIC insured, liquid, currently yielding 4–5% APY. No market risk.</li>
        <li><strong>CDs / CD Ladders:</strong> Good for medium-term goals (1–5 years). Lock in a fixed rate. Penalty for early withdrawal.</li>
        <li><strong>Brokerage Account (Index Funds):</strong> Best for long-term goals (5+ years). Higher expected returns (7–10% historically for S&P 500), but subject to market risk.</li>
        <li><strong>529 Plan:</strong> Specifically for education savings. Tax-free growth if used for qualified education expenses.</li>
      </ul>

      <h3 className="text-base font-semibold text-gray-800">Automate to Succeed</h3>
      <p>The single most effective savings strategy: <strong>automate it.</strong> Set up an automatic transfer from your checking account to your savings or investment account on payday — before you have a chance to spend the money. Behavioral economists call this "paying yourself first," and it consistently outperforms willpower-based approaches.</p>
      <h3 className="text-base font-semibold text-gray-800">Real-World Example: Meet Sarah</h3>
      <p>Sarah wants to buy a $350,000 home with a 20% down payment ($70,000) in 5 years. She has $15,000 already saved and earns 4.5% in a high-yield savings account. She needs to save approximately <strong>$900/month</strong> to hit her target. Sarah sets up an automatic transfer on payday and tracks her progress monthly.</p>
      <p><strong>Alternative scenario:</strong> If Sarah extends her timeline to 7 years, her required monthly drops to <strong>$620/month</strong> — freeing up $280/month for other goals, while still reaching her target. Sometimes, patience is the most powerful tool in the savings toolkit. If she invests instead in a conservative 6% portfolio, the monthly drops further to $597.</p>

      <h3 className="text-base font-semibold text-gray-800">Common Mistakes to Avoid</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>Setting unrealistic timelines.</strong> Wanting to save $100,000 in 2 years on a $60,000 salary is mathematically impossible without extreme lifestyle changes. Use the calculator first, then set the timeline.</li>
        <li><strong>Not accounting for inflation.</strong> A $50,000 goal 10 years from now needs to be more like $67,000 in future dollars (at 3% inflation). Build in a buffer.</li>
        <li><strong>Putting short-term savings in the stock market.</strong> Money needed within 3 years should be in HYSA, CDs, or money market funds — not stocks. A 20% market drop right before you need the money can destroy your plans.</li>
        <li><strong>Treating all savings goals equally.</strong> Prioritize: emergency fund first (3-6 months of expenses), then high-interest debt payoff, then long-term goals. Retirement beats vacation every time.</li>
      </ol>
    </article>
  );
}
