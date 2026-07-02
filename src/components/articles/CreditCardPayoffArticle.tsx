export default function CreditCardPayoffArticle() {
  return (
    <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 !mb-3">How to Get Out of Credit Card Debt: A Practical Guide</h2>
      <p>Credit card debt is the most expensive common form of borrowing. With average APRs exceeding 24% in 2025, carrying a balance can cost thousands in interest and trap you in a cycle of minimum payments. This guide explains the math and the proven strategies to break free.</p>
      <h3 className="text-base font-semibold text-gray-800">Why Minimum Payments Are a Trap</h3>
      <p>Minimum payments are typically 1-3% of your balance. On a $6,000 balance at 25% APR paying 2% minimum ($120/month), it will take over <strong>8 years</strong> to pay off and cost more than <strong>$5,400 in interest</strong> — nearly doubling your original debt. Every dollar above the minimum dramatically shortens your payoff timeline.</p>
      <div className="overflow-x-auto"><table className="w-full text-xs border-collapse"><thead><tr className="bg-gray-50"><th className="border border-gray-200 p-2 text-left">Monthly Payment</th><th className="border border-gray-200 p-2 text-right">Time to Payoff</th><th className="border border-gray-200 p-2 text-right">Total Interest</th></tr></thead><tbody>
        <tr><td className="border border-gray-200 p-2">$120 (2% min)</td><td className="border border-gray-200 p-2 text-right">8.3 years</td><td className="border border-gray-200 p-2 text-right text-red-600">$5,412</td></tr>
        <tr><td className="border border-gray-200 p-2">$200</td><td className="border border-gray-200 p-2 text-right">3.5 years</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$2,089</td></tr>
        <tr><td className="border border-gray-200 p-2">$400</td><td className="border border-gray-200 p-2 text-right">1.4 years</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$868</td></tr>
        <tr><td className="border border-gray-200 p-2">$600</td><td className="border border-gray-200 p-2 text-right">10 months</td><td className="border border-gray-200 p-2 text-right text-emerald-600">$573</td></tr>
      </tbody></table><p className="text-[10px] text-gray-400 mt-1">Example: $6,000 balance at 25% APR. Higher monthly payments slash both time and total interest.</p></div>
      <h3 className="text-base font-semibold text-gray-800">Avalanche vs. Snowball: Which Debt Payoff Method Wins?</h3>
      <ul className="list-disc pl-5 space-y-1 text-xs">
        <li><strong>Avalanche (mathematically optimal):</strong> Pay minimums on all cards, put every extra dollar toward the highest APR card. Saves the most interest.</li>
        <li><strong>Snowball (psychologically motivating):</strong> Pay minimums on all cards, put every extra dollar toward the smallest balance. Quick wins build momentum.</li>
      </ul>
      <p>A 2020 study in the Journal of Consumer Research found the snowball method had higher completion rates because the psychological reward of closing accounts kept people motivated. Choose the method you will actually stick with.</p>
      <h3 className="text-base font-semibold text-gray-800">Real-World Example: Meet Carlos</h3>
      <p>Carlos has $8,000 in credit card debt at 26.99% APR. He has been paying $200/month and barely making progress after interest. He decides to pick up a side gig delivering food on weekends, adding $400/month to his debt payments. At $600/month, his payoff drops from 5.8 years to <strong>16 months</strong>, saving <strong>$7,100</strong> in interest. The side income was temporary but the interest savings are permanent.</p>
      <h3 className="text-base font-semibold text-gray-800">Common Mistakes to Avoid</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>Continuing to use cards you are paying off.</strong> Adding new charges to a card you are trying to eliminate is like bailing water into a leaky boat. Switch to debit or cash during payoff mode.</li>
        <li><strong>Closing cards immediately after payoff.</strong> Closing old accounts reduces your average credit age and total available credit — both can hurt your credit score. Pay off, cut up the physical card, but keep the account open (with zero balance).</li>
        <li><strong>Ignoring the root cause.</strong> If you got into debt due to insufficient income or emergency expenses, address the underlying issue — build an emergency fund and explore income-boosting options — or the cycle will repeat.</li>
      </ol>
    </article>
  );
}
