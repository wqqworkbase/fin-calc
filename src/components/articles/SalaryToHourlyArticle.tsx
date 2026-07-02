export default function SalaryToHourlyArticle() {
  return (
    <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 !mb-3">How to Convert Between Salary and Hourly Pay</h2>
      <p>Whether you are negotiating a job offer with a different pay structure, considering a career change, or comparing freelance rates to a salaried position — understanding the math between annual salary and hourly rate is a critical financial literacy skill.</p>
      <h3 className="text-base font-semibold text-gray-800">The Standard Formula</h3>
      <p className="bg-gray-50 p-3 rounded-xl text-xs font-mono">Hourly Rate = Annual Salary ÷ (Hours per Week × Weeks per Year)</p>
      <p>For a standard full-time job (40 hrs/wk × 52 wks):</p>
      <div className="overflow-x-auto"><table className="w-full text-xs border-collapse"><thead><tr className="bg-gray-50"><th className="border border-gray-200 p-2 text-left">Annual Salary</th><th className="border border-gray-200 p-2 text-right">Hourly (40hrs/52wks)</th><th className="border border-gray-200 p-2 text-right">Monthly Gross</th></tr></thead><tbody>
        <tr><td className="border border-gray-200 p-2">$35,000</td><td className="border border-gray-200 p-2 text-right">$16.83</td><td className="border border-gray-200 p-2 text-right">$2,917</td></tr>
        <tr><td className="border border-gray-200 p-2">$50,000</td><td className="border border-gray-200 p-2 text-right">$24.04</td><td className="border border-gray-200 p-2 text-right">$4,167</td></tr>
        <tr><td className="border border-gray-200 p-2">$75,000</td><td className="border border-gray-200 p-2 text-right">$36.06</td><td className="border border-gray-200 p-2 text-right">$6,250</td></tr>
        <tr><td className="border border-gray-200 p-2">$100,000</td><td className="border border-gray-200 p-2 text-right">$48.08</td><td className="border border-gray-200 p-2 text-right">$8,333</td></tr>
        <tr><td className="border border-gray-200 p-2">$150,000</td><td className="border border-gray-200 p-2 text-right">$72.12</td><td className="border border-gray-200 p-2 text-right">$12,500</td></tr>
      </tbody></table></div>
      <h3 className="text-base font-semibold text-gray-800">Beyond the Base Salary: Total Compensation</h3>
      <p>When comparing jobs, consider the full picture:</p>
      <ul className="list-disc pl-5 space-y-1 text-xs">
        <li><strong>Benefits:</strong> Health insurance can be worth $5,000-$20,000/year. A 401(k) match of 4% on $80,000 is $3,200/year in free money.</li>
        <li><strong>Paid Time Off:</strong> 3 weeks of PTO vs. no PTO is effectively a 6% difference in compensation per hour worked.</li>
        <li><strong>Commute Costs:</strong> A 45-minute commute each way costs ~$5,000/year in gas, maintenance, and 375 hours of your life — effectively reducing your real hourly rate.</li>
      </ul>
      <h3 className="text-base font-semibold text-gray-800">Real-World Example: Meet Priya</h3>
      <p>Priya earns $85,000 salary as a marketing manager working roughly 45 hours/week, 50 weeks/year. Her effective hourly rate is $37.78/hour. She is considering a freelance offer at $50/hour with no benefits. The freelance rate is higher per hour but she needs to cover her own health insurance (~$6,000/year), self-employment tax (extra 7.65%), and has no paid vacation. After accounting for these, her effective freelance hourly drops to approximately $35-38 — roughly equivalent to her salary.</p>
      <h3 className="text-base font-semibold text-gray-800">Common Mistakes to Avoid</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>Not accounting for unpaid overtime in salary roles.</strong> A $100,000 salary at 60 hours/week = $32.05/hour effective. A $75,000 salary at 40 hours = $36.06/hour. The "lower" salary job pays more per hour.</li>
        <li><strong>Comparing gross hourly without considering taxes.</strong> A $30/hour W-2 job includes employer-paid FICA (7.65%). A $30/hour freelance rate does not — that extra 7.65% self-employment tax makes the freelance rate effectively $27.70.</li>
      </ol>
    </article>
  );
}
