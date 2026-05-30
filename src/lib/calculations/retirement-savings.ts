import { RetirementResult } from '@/lib/types';

interface RetirementInput {
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  monthlyContribution: number;
  annualReturn: number;
  annualRetirementSpend: number;
  lifeExpectancy: number;
}

export function calculateRetirement({
  currentAge,
  retirementAge,
  currentSavings,
  monthlyContribution,
  annualReturn,
  annualRetirementSpend,
  lifeExpectancy,
}: RetirementInput): RetirementResult {
  const yearsAccumulating = retirementAge - currentAge;
  const monthlyRate = annualReturn / 12;
  const monthsAccumulating = yearsAccumulating * 12;

  let balance = currentSavings;
  for (let month = 0; month < monthsAccumulating; month++) {
    balance = balance * (1 + monthlyRate) + monthlyContribution;
  }

  const retirementBalance = Math.round(balance * 100) / 100;
  const totalContributions =
    Math.round((currentSavings + monthlyContribution * monthsAccumulating) * 100) / 100;
  const totalInterest = Math.round((retirementBalance - totalContributions) * 100) / 100;

  const monthlySpend = annualRetirementSpend / 12;
  let withdrawalBalance = retirementBalance;
  let months = 0;
  const maxMonths = (lifeExpectancy - retirementAge) * 12;
  while (withdrawalBalance > 0 && months < maxMonths) {
    withdrawalBalance = withdrawalBalance * (1 + monthlyRate) - monthlySpend;
    months++;
  }
  const yearsOfRetirement = Math.floor(months / 12);
  const isSufficient = months >= maxMonths;
  const shortfall = isSufficient ? 0 : Math.round(-withdrawalBalance * 100) / 100;

  const recommendedMonthlyContribution = calculateRequiredMonthly(
    currentSavings,
    annualRetirementSpend * (lifeExpectancy - retirementAge),
    annualReturn,
    monthsAccumulating
  );

  return {
    retirementBalance,
    totalContributions,
    totalInterest,
    monthlyRetirementIncome: Math.round(retirementBalance * monthlyRate * 100) / 100,
    yearsOfRetirement,
    isSufficient,
    shortfall,
    recommendedMonthlyContribution: Math.round(recommendedMonthlyContribution * 100) / 100,
  };
}

function calculateRequiredMonthly(
  currentSavings: number,
  targetBalance: number,
  annualReturn: number,
  months: number
): number {
  const monthlyRate = annualReturn / 12;
  const fvCurrent = currentSavings * Math.pow(1 + monthlyRate, months);
  const neededFromContributions = targetBalance - fvCurrent;
  if (neededFromContributions <= 0) return 0;
  const factor = (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
  return neededFromContributions / factor;
}

export function generateRetirementFAQs() {
  return [
    {
      question: 'How much do I need to retire?',
      answer:
        'A common rule of thumb is 25× your annual expenses (the 4% withdrawal rule). For example, if you need $60,000/year in retirement, you would need about $1.5 million saved. However, your specific needs depend on lifestyle, healthcare costs, Social Security benefits, and retirement age.',
    },
    {
      question: 'What return rate should I assume?',
      answer:
        'A conservative estimate is 6-7% for a diversified stock portfolio, or 4-5% for a balanced portfolio with bonds. These are nominal returns before inflation. Subtract 2-3% for inflation-adjusted (real) returns.',
    },
    {
      question: 'Does this include Social Security?',
      answer:
        'No — this calculator shows your personal savings only. Social Security benefits would supplement your retirement income. The average Social Security benefit in 2025 is about $1,900/month, which can significantly reduce your required savings.',
    },
    {
      question: 'What if I start saving later?',
      answer:
        'Starting later means you will need to save more each month to catch up. Even a 5-year delay can increase your required monthly contribution by 40-60%. The earlier you start, the more time compound interest has to work for you.',
    },
  ];
}
