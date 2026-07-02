export default function LoanArticle() {
  return (
    <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 !mb-3">Understanding Loan Amortization: How Each Payment Works</h2>
      <p>Most installment loans — mortgages, auto loans, student loans, personal loans — use <strong>amortization</strong>: a fixed monthly payment that covers both interest and principal. Early in the loan, most of your payment goes toward interest. Over time, the balance shifts, and more goes toward principal. Understanding this structure can save you thousands of dollars.</p>

      <h3 className="text-base font-semibold text-gray-800">How the Payment Split Works</h3>
      <p>Every month, your lender calculates interest on the remaining balance and applies the rest of your payment to principal. Because the balance decreases each month, the interest portion shrinks, accelerating principal repayment. This is why extra payments early in the loan have the biggest impact.</p>

      <div className="overflow-x-auto"><table className="w-full text-xs border-collapse"><thead><tr className="bg-gray-50"><th className="border border-gray-200 p-2 text-left">Payment #</th><th className="border border-gray-200 p-2 text-right">Monthly Payment</th><th className="border border-gray-200 p-2 text-right">Principal</th><th className="border border-gray-200 p-2 text-right">Interest</th><th className="border border-gray-200 p-2 text-right">Balance</th></tr></thead><tbody>
        <tr><td className="border border-gray-200 p-2">1</td><td className="border border-gray-200 p-2 text-right">$1,896</td><td className="border border-gray-200 p-2 text-right">$271</td><td className="border border-gray-200 p-2 text-right">$1,625</td><td className="border border-gray-200 p-2 text-right">$299,729</td></tr>
        <tr><td className="border border-gray-200 p-2">60 (5 yrs)</td><td className="border border-gray-200 p-2 text-right">$1,896</td><td className="border border-gray-200 p-2 text-right">$400</td><td className="border border-gray-200 p-2 text-right">$1,496</td><td className="border border-gray-200 p-2 text-right">$275,696</td></tr>
        <tr><td className="border border-gray-200 p-2">180 (15 yrs)</td><td className="border border-gray-200 p-2 text-right">$1,896</td><td className="border border-gray-200 p-2 text-right">$859</td><td className="border border-gray-200 p-2 text-right">$1,037</td><td className="border border-gray-200 p-2 text-right">$190,591</td></tr>
        <tr><td className="border border-gray-200 p-2">360 (30 yrs)</td><td className="border border-gray-200 p-2 text-right">$1,896</td><td className="border border-gray-200 p-2 text-right">$1,886</td><td className="border border-gray-200 p-2 text-right">$10</td><td className="border border-gray-200 p-2 text-right">$0</td></tr>
      </tbody></table><p className="text-[10px] text-gray-400 mt-1">Example: $300,000 mortgage at 6.5% APR, 30-year fixed. Total interest paid: $382,633.</p></div>

      <h3 className="text-base font-semibold text-gray-800">The Power of Extra Payments</h3>
      <p>Adding even a small amount to each payment can dramatically reduce your total interest and loan term:</p>
      <ul className="list-disc pl-5 space-y-1 text-xs">
        <li><strong>+$100/month</strong> on the $300K loan above → saves <strong>$45,000 in interest</strong> and pays off 4.5 years early.</li>
        <li><strong>+$300/month</strong> → saves <strong>$100,000+ in interest</strong> and pays off 10 years early.</li>
        <li><strong>One extra payment per year</strong> (13 payments instead of 12) → shaves ~4 years off a 30-year mortgage.</li>
      </ul>

      <h3 className="text-base font-semibold text-gray-800">Monthly vs. Biweekly Payments</h3>
      <p>Biweekly payments (half your monthly payment every two weeks) result in <strong>26 half-payments per year</strong>, equivalent to 13 full monthly payments. This automatic "13th payment" accelerates your amortization without feeling like extra money out of pocket. Many lenders offer biweekly plans, but always confirm there are no setup fees.</p>

      <h3 className="text-base font-semibold text-gray-800">Fixed vs. Adjustable Rate</h3>
      <ul className="list-disc pl-5 space-y-1 text-xs">
        <li><strong>Fixed-rate:</strong> Rate stays constant for the entire term. Predictable, stable. Best when rates are low or you plan to stay long-term.</li>
        <li><strong>ARM (Adjustable-Rate Mortgage):</strong> Lower initial rate that resets periodically (e.g., 5/1 ARM = fixed for 5 years, then adjusts annually). Riskier — your payment can increase significantly when rates rise.</li>
      </ul>
      <h3 className="text-base font-semibold text-gray-800">Real-World Example: Meet Jennifer</h3>
      <p>Jennifer took out a $250,000 30-year mortgage at her local bank. Here is the difference a small extra payment makes: with $200/month extra starting in year 1 (equivalent to one nice dinner out per month), she saves <strong>$72,000 in interest</strong> and pays off her home <strong>8 years early</strong> — free and clear by age 57 instead of 65.</p>
      <p>That $200/month invested instead at 7% over those 22 years would grow to about $118,000 — but paying off the mortgage early guarantees $72,000 of risk-free interest savings AND eliminates a $1,500/month payment 8 years sooner, freeing up over $144,000 in cash flow.</p>

      <h3 className="text-base font-semibold text-gray-800">Common Mistakes to Avoid</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>Focusing only on the monthly payment.</strong> Dealers and lenders love to ask "what monthly payment can you afford?" This framing hides the total loan cost. Always negotiate the price first, then compare total loan cost including interest.</li>
        <li><strong>Not shopping around for rates.</strong> Getting quotes from 3-5 lenders can save 0.5-1% on mortgage rates — worth tens of thousands over 30 years. Each credit pull within a 14-45 day window counts as a single inquiry for scoring purposes.</li>
        <li><strong>Taking the longest term "to keep payments low."</strong> A 72-month car loan at 7% on a $35,000 vehicle costs $7,900 in interest vs. $4,600 on a 48-month loan. If the payment is uncomfortably high on a shorter term, you are likely buying too much car.</li>
        <li><strong>Ignoring closing costs and fees.</strong> Origination fees, points, and closing costs can add 2-5% to a mortgage. Factor these into the total cost comparison, not just the headline rate.</li>
      </ol>
    </article>
  );
}
