export default function TaxArticle() {
  return (
    <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 !mb-3">How the US Tax System Works: A Practical Guide</h2>

      <p>The United States has a multi-layered income tax system. Depending on where you live and work, your paycheck may be subject to federal income tax, Social Security and Medicare (FICA) taxes, state income tax, and sometimes local city or county taxes. Understanding each layer helps you make smarter financial decisions.</p>

      <h3 className="text-base font-semibold text-gray-800">Layer 1: Federal Income Tax (Progressive)</h3>
      <p>The federal government uses a <strong>progressive tax system</strong> with seven brackets (10%–37% in 2025–2026). Being in a higher bracket does NOT mean all your income is taxed at that rate — only the dollars that fall within each bracket are taxed at that rate.</p>

      <div className="overflow-x-auto"><table className="w-full text-xs border-collapse"><thead><tr className="bg-gray-50"><th className="border border-gray-200 p-2 text-left">Rate</th><th className="border border-gray-200 p-2 text-right">Single (2025)</th><th className="border border-gray-200 p-2 text-right">Married Joint (2025)</th></tr></thead><tbody>
        <tr><td className="border border-gray-200 p-2">10%</td><td className="border border-gray-200 p-2 text-right">$0–$11,925</td><td className="border border-gray-200 p-2 text-right">$0–$23,850</td></tr>
        <tr><td className="border border-gray-200 p-2">12%</td><td className="border border-gray-200 p-2 text-right">$11,926–$48,475</td><td className="border border-gray-200 p-2 text-right">$23,851–$96,950</td></tr>
        <tr><td className="border border-gray-200 p-2">22%</td><td className="border border-gray-200 p-2 text-right">$48,476–$103,350</td><td className="border border-gray-200 p-2 text-right">$96,951–$206,700</td></tr>
        <tr><td className="border border-gray-200 p-2">24%</td><td className="border border-gray-200 p-2 text-right">$103,351–$197,300</td><td className="border border-gray-200 p-2 text-right">$206,701–$394,600</td></tr>
        <tr><td className="border border-gray-200 p-2">32%</td><td className="border border-gray-200 p-2 text-right">$197,301–$250,525</td><td className="border border-gray-200 p-2 text-right">$394,601–$501,050</td></tr>
        <tr><td className="border border-gray-200 p-2">35%</td><td className="border border-gray-200 p-2 text-right">$250,526–$626,350</td><td className="border border-gray-200 p-2 text-right">$501,051–$751,600</td></tr>
        <tr><td className="border border-gray-200 p-2">37%</td><td className="border border-gray-200 p-2 text-right">$626,351+</td><td className="border border-gray-200 p-2 text-right">$751,601+</td></tr>
      </tbody></table></div>

      <h3 className="text-base font-semibold text-gray-800">Layer 2: FICA — Social Security & Medicare</h3>
      <p>FICA taxes fund Social Security and Medicare. These are flat-rate taxes on earned income (wages and self-employment income):</p>
      <ul className="list-disc pl-5 space-y-1 text-xs">
        <li><strong>Social Security:</strong> 6.2% on income up to the annual cap ($176,100 in 2025; $184,500 in 2026). Self-employed: 12.4%.</li>
        <li><strong>Medicare:</strong> 1.45% on ALL income, no cap. An additional 0.9% applies above $200,000 (single) / $250,000 (married).</li>
      </ul>

      <h3 className="text-base font-semibold text-gray-800">Layer 3: State Income Tax</h3>
      <p>State tax systems vary widely. Nine states have no income tax (AK, FL, NV, NH, SD, TN, TX, WA, WY). Others use flat rates (PA: 3.07%, MI: 4.25%) or progressive brackets (CA: 1%–13.3%, NY: 4%–10.9%).</p>

      <h3 className="text-base font-semibold text-gray-800">Marginal vs. Effective Tax Rate</h3>
      <p>Your <strong>marginal tax rate</strong> is the rate on your last dollar earned — the highest bracket you reach. Your <strong>effective tax rate</strong> is your total tax divided by total income. A single filer earning $100,000 in 2025 has a 22% marginal rate but only about 13.4% effective federal rate, thanks to the standard deduction ($15,750) and lower brackets applied first.</p>
      <h3 className="text-base font-semibold text-gray-800">Real-World Example: Meet Tom & Lisa</h3>
      <p>Tom and Lisa file married-jointly with a combined income of $180,000 in California. Their federal marginal rate is 22%, but their effective federal rate is only 14.6%. However — state tax (CA, ~6.7% effective) plus FICA (7.65%) plus federal (14.6%) means their actual all-in tax rate is approximately <strong>28.9%</strong>. Of their $180,000 gross income, about <strong>$52,000</strong> goes to various taxes, leaving <strong>$128,000</strong> of take-home pay.</p>
      <p><strong>Tax-saving move:</strong> If they each max out their 401(k) ($23,500 × 2 = $47,000 in 2025), their taxable income drops to $133,000 — saving approximately $10,340 in federal income tax alone, while building retirement wealth. Their take-home pay drops but their net worth grows faster.</p>

      <h3 className="text-base font-semibold text-gray-800">Common Mistakes to Avoid</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>Confusing marginal and effective rates.</strong> Being in the 24% bracket does not mean you pay 24% on all your income. You pay 10% on the first $11,925, 12% on the next $36,550, and so on. Your effective rate is always lower.</li>
        <li><strong>Forgetting about the standard deduction.</strong> In 2025, a single filer gets a $15,750 standard deduction. That is $15,750 of income taxed at 0%. Many people overestimate their taxes by forgetting this.</li>
        <li><strong>Overlooking state and local taxes when relocating.</strong> Moving from Texas (0% state tax) to California (up to 13.3%) on a $150,000 salary adds approximately $8,500+ in annual state tax. Factor this into salary negotiations.</li>
        <li><strong>Not adjusting W-4 withholdings after life changes.</strong> Marriage, a new child, or a second job all change your tax situation. Update your W-4 within 10 days of a life event to avoid a surprise bill (or an interest-free loan to the government).</li>
      </ol>
    </article>
  );
}
