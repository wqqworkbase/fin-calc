export function calculateROI(
  initialInvestment: number,
  finalValue: number,
  years: number
): { roiPercent: number; cagrPercent: number; totalGain: number; annualizedGain: number; doubledTimes: number } {
  const totalGain = finalValue - initialInvestment;
  const roiPercent = initialInvestment > 0 ? (totalGain / initialInvestment) * 100 : 0;
  const cagrPercent = years > 0 && initialInvestment > 0 ? (Math.pow(finalValue / initialInvestment, 1 / years) - 1) * 100 : 0;
  const annualizedGain = years > 0 ? totalGain / years : 0;
  const doubledTimes = initialInvestment > 0 ? Math.log2(finalValue / initialInvestment) : 0;

  return {
    roiPercent: Math.round(roiPercent * 100) / 100,
    cagrPercent: Math.round(cagrPercent * 100) / 100,
    totalGain: Math.round(totalGain * 100) / 100,
    annualizedGain: Math.round(annualizedGain * 100) / 100,
    doubledTimes: Math.round(doubledTimes * 10) / 10,
  };
}

export function generateROIFAQs() {
  return [
    {
      question: 'What is the difference between ROI and CAGR?',
      answer: 'ROI (Return on Investment) shows the total percentage return over the entire period — e.g. 100% ROI means you doubled your money regardless of timeframe. CAGR (Compound Annual Growth Rate) annualizes the return, showing the steady yearly rate that would produce the same result. CAGR is better for comparing investments with different timeframes.',
    },
    {
      question: 'What is a good annual return?',
      answer: 'Historically, the S&P 500 has returned approximately 7-10% annually (CAGR) over multi-decade periods, adjusted for inflation. A good return is one that beats inflation (3%+) while matching your risk tolerance. Consistent 7% over 30 years beats volatile 15% followed by crashes.',
    },
    {
      question: 'How do I use this calculator for stocks?',
      answer: 'Enter your initial investment amount (what you paid), the current value including reinvested dividends, and the number of years held. This gives you the total ROI and annualized CAGR return.',
    },
  ];
}
