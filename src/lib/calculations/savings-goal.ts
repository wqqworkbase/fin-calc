import { SavingsGoalResult } from '@/lib/types';

interface SavingsGoalInput {
  targetAmount: number;
  years: number;
  currentSavings: number;
  annualReturn: number;
}

export function calculateSavingsGoal({
  targetAmount,
  years,
  currentSavings,
  annualReturn,
}: SavingsGoalInput): SavingsGoalResult {
  const monthlyRate = annualReturn / 12;
  const months = years * 12;

  const fvCurrent = currentSavings * Math.pow(1 + monthlyRate, months);
  const remaining = targetAmount - fvCurrent;

  let monthlyRequired = 0;
  if (remaining > 0) {
    const factor = (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    monthlyRequired = remaining / factor;
  }

  const totalContributions = currentSavings + monthlyRequired * months;
  const totalInterest = targetAmount - totalContributions;

  const scenarios = [
    annualReturn - 0.04,
    annualReturn - 0.02,
    annualReturn,
    annualReturn + 0.02,
    annualReturn + 0.04,
  ]
    .filter((r) => r > 0)
    .map((rate) => {
      const r = rate / 12;
      const fv = currentSavings * Math.pow(1 + r, months);
      const rem = Math.max(0, targetAmount - fv);
      const m = rem > 0 ? rem / ((Math.pow(1 + r, months) - 1) / r) : 0;
      return { rate: Math.round(rate * 100 * 100) / 100, monthlyRequired: Math.round(m * 100) / 100 };
    });

  return {
    monthlyRequired: Math.round(monthlyRequired * 100) / 100,
    totalContributions: Math.round(totalContributions * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    scenarios,
  };
}

export function generateSavingsGoalFAQs() {
  return [
    {
      question: 'How do I set a realistic savings goal?',
      answer:
        'Start by defining your target amount and timeline. Use this calculator to find your required monthly contribution. If the number seems too high, consider extending your timeline or adjusting your target. Be specific about what you are saving for — a house down payment, a car, an emergency fund, or a vacation.',
    },
    {
      question: 'What if I cannot save enough each month?',
      answer:
        'Review the scenario table below. A slightly higher return rate (through better investment choices) can reduce your required monthly contribution. Alternatively, extending your timeline by just 1-2 years can make a significant difference.',
    },
    {
      question: 'What is a good emergency fund target?',
      answer:
        'Financial experts recommend 3-6 months of living expenses in an emergency fund. For the average American household spending $5,000/month, that is $15,000-$30,000. Keep emergency funds in a high-yield savings account, not invested in stocks.',
    },
    {
      question: 'Should I save or invest for short-term goals?',
      answer:
        'For goals under 3 years, keep money in a high-yield savings account, CD, or money market fund. For 3-10 year goals, consider a balanced portfolio (60% stocks, 40% bonds). For 10+ year goals, a stock-heavy portfolio has historically provided the best returns.',
    },
  ];
}
