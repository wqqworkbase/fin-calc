export interface EmergencyFundResult {
  threeMonths: number;
  sixMonths: number;
  twelveMonths: number;
  monthlySavingsToReach: { months3: number; months6: number; months12: number };
  timeToReach: { months3: number; months6: number; months12: number };
}

export function calculateEmergencyFund(
  monthlyExpenses: number,
  currentSavings: number,
  monthlyContribution: number
): EmergencyFundResult {
  const threeMonths = monthlyExpenses * 3;
  const sixMonths = monthlyExpenses * 6;
  const twelveMonths = monthlyExpenses * 12;

  const months3 = Math.max(0, (threeMonths - currentSavings) / Math.max(1, monthlyContribution));
  const months6 = Math.max(0, (sixMonths - currentSavings) / Math.max(1, monthlyContribution));
  const months12 = Math.max(0, (twelveMonths - currentSavings) / Math.max(1, monthlyContribution));

  return {
    threeMonths: Math.round(threeMonths * 100) / 100,
    sixMonths: Math.round(sixMonths * 100) / 100,
    twelveMonths: Math.round(twelveMonths * 100) / 100,
    monthlySavingsToReach: {
      months3: Math.round((threeMonths - Math.max(0, currentSavings)) / 12 * 100) / 100,
      months6: Math.round((sixMonths - Math.max(0, currentSavings)) / 12 * 100) / 100,
      months12: Math.round((twelveMonths - Math.max(0, currentSavings)) / 12 * 100) / 100,
    },
    timeToReach: {
      months3: Math.round(months3 * 10) / 10,
      months6: Math.round(months6 * 10) / 10,
      months12: Math.round(months12 * 10) / 10,
    },
  };
}

export function generateEmergencyFundFAQs() {
  return [
    {
      question: 'How much emergency fund do I really need?',
      answer: 'The standard recommendation is 3-6 months of essential living expenses. Single-income households or those with variable income (freelancers, commission-based) should aim for 6-12 months. Start with $1,000 as a mini-emergency fund, then build to 3 months, then 6.',
    },
    {
      question: 'Where should I keep my emergency fund?',
      answer: 'A high-yield savings account (HYSA) is ideal — FDIC insured up to $250,000, currently yielding 4-5%, and accessible within 1-2 business days. Avoid stocks, bonds, or CDs for your true emergency fund — you need guaranteed principal and instant liquidity.',
    },
    {
      question: 'Should I invest my emergency fund?',
      answer: 'No. An emergency fund is insurance, not an investment. The money needs to be there when you need it, not when the market says it is available. A 30% market drop at the same moment you lose your job is a catastrophe — keep emergency funds in cash equivalents.',
    },
  ];
}
