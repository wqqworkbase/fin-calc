export default function EmergencyFundArticle() {
  return (
    <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 !mb-3">Building an Emergency Fund: Your Financial Safety Net</h2>
      <p>An emergency fund is the foundation of financial security. It is cash set aside for unexpected expenses — job loss, medical bills, car repairs, or a broken furnace. Without one, a $500 surprise expense forces you into credit card debt, payday loans, or raiding retirement accounts. With one, emergencies become inconveniences, not catastrophes.</p>
      <h3 className="text-base font-semibold text-gray-800">How Much Do You Need?</h3>
      <div className="overflow-x-auto"><table className="w-full text-xs border-collapse"><thead><tr className="bg-gray-50"><th className="border border-gray-200 p-2 text-left">Life Situation</th><th className="border border-gray-200 p-2 text-right">Recommended Cushion</th><th className="border border-gray-200 p-2 text-left">Why</th></tr></thead><tbody>
        <tr><td className="border border-gray-200 p-2">Single, stable job</td><td className="border border-gray-200 p-2 text-right">3-4 months</td><td className="border border-gray-200 p-2">Lower risk of dual-income disruption</td></tr>
        <tr><td className="border border-gray-200 p-2">Single parent</td><td className="border border-gray-200 p-2 text-right">6-9 months</td><td className="border border-gray-200 p-2">No backup earner, dependents rely on you</td></tr>
        <tr><td className="border border-gray-200 p-2">Dual-income, no kids</td><td className="border border-gray-200 p-2 text-right">3 months</td><td className="border border-gray-200 p-2">Either partner can cover essentials temporarily</td></tr>
        <tr><td className="border border-gray-200 p-2">Freelancer / variable income</td><td className="border border-gray-200 p-2 text-right">9-12 months</td><td className="border border-gray-200 p-2">Income fluctuates; need runway for dry spells</td></tr>
        <tr><td className="border border-gray-200 p-2">Homeowner</td><td className="border border-gray-200 p-2 text-right">+$5,000 extra</td><td className="border border-gray-200 p-2">Roof, HVAC, plumbing emergencies average $3-8K</td></tr>
      </tbody></table></div>
      <h3 className="text-base font-semibold text-gray-800">Where to Keep Your Emergency Fund</h3>
      <p>The money must be liquid, principal-protected, and accessible within 1-2 business days. A high-yield savings account (HYSA) is the best option for most people. Currently yielding 4-5% APY, your emergency fund actually earns interest while sitting ready. Avoid: stocks (can crash when you need them most), CDs (early withdrawal penalties), and physical cash (inflation, theft risk).</p>
      <h3 className="text-base font-semibold text-gray-800">Real-World Example: Meet Jasmine</h3>
      <p>Jasmine is a freelance graphic designer with variable monthly income averaging $4,500. Her essential expenses (rent, food, utilities, insurance) are $3,200/month. Her target emergency fund is 9 months = $28,800. She has saved $6,000 so far and commits $800/month. At this rate, she will reach her target in approximately 29 months (2.4 years). Her stretch goal: reach 3 months ($9,600) within 5 months as an initial safety net, then build to 9 months gradually.</p>
      <h3 className="text-base font-semibold text-gray-800">Common Mistakes to Avoid</h3>
      <ol className="list-decimal pl-5 space-y-1 text-xs">
        <li><strong>Treating credit card limits as an emergency fund.</strong> A $10,000 credit limit is not savings — it is high-interest debt waiting to happen. Credit lines can be reduced or canceled by the issuer at any time, especially during economic downturns when you are most likely to need them.</li>
        <li><strong>Investing the emergency fund for "better returns."</strong> The purpose of an emergency fund is not growth — it is insurance. A 30% stock market drop at the same moment you lose your job multiplies the damage.</li>
        <li><strong>Not adjusting after life changes.</strong> Got married? Had a baby? Bought a house? Your emergency fund target just increased. Recalculate annually.</li>
      </ol>
    </article>
  );
}
