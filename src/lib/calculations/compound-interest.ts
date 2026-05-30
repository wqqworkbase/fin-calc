import { CompoundInterestResult } from '@/lib/types';

interface CompoundInterestInput {
  initialPrincipal: number;
  monthlyContribution: number;
  annualRate: number;
  years: number;
  compoundFrequency: number;
}

export function calculateCompoundInterest({
  initialPrincipal,
  monthlyContribution,
  annualRate,
  years,
  compoundFrequency,
}: CompoundInterestInput): CompoundInterestResult {
  const ratePerPeriod = annualRate / compoundFrequency;
  const monthsPerPeriod = 12 / compoundFrequency;

  let balance = initialPrincipal;
  let totalContributions = initialPrincipal;
  let totalInterest = 0;
  const yearlyData: CompoundInterestResult['yearlyData'] = [];

  yearlyData.push({ year: 0, balance: initialPrincipal, contributions: 0, interest: 0 });

  for (let year = 1; year <= years; year++) {
    const yearStartBalance = balance;
    let yearTotalContributions = 0;

    for (let month = 1; month <= 12; month++) {
      balance += monthlyContribution;
      yearTotalContributions += monthlyContribution;
      totalContributions += monthlyContribution;

      if (month % monthsPerPeriod === 0 || month === 12) {
        balance += balance * ratePerPeriod;
      }
    }

    const yearInterest = balance - yearStartBalance - yearTotalContributions;
    totalInterest += yearInterest;

    yearlyData.push({
      year,
      balance: Math.round(balance * 100) / 100,
      contributions: Math.round(yearTotalContributions * 100) / 100,
      interest: Math.round(yearInterest * 100) / 100,
    });
  }

  return {
    finalBalance: Math.round(balance * 100) / 100,
    totalContributions: Math.round(totalContributions * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    yearlyData,
  };
}

export function generateCompoundInterestFAQs() {
  return [
    {
      question: 'How does compound interest work?',
      answer:
        'Compound interest is interest earned on both your initial principal and the accumulated interest from previous periods. This creates a snowball effect where your money grows faster over time. For example, $10,000 at 7% compounded monthly grows to $40,000+ after 20 years with $500 monthly contributions.',
    },
    {
      question: 'What compounding frequency should I choose?',
      answer:
        'More frequent compounding (daily or monthly vs. annually) yields slightly higher returns. Most savings accounts compound daily or monthly. The difference between daily and monthly compounding is small — typically less than 0.1% in effective annual yield.',
    },
    {
      question: 'How much should I invest monthly to reach my goal?',
      answer:
        'Use this calculator to experiment with different monthly contribution amounts. For a more precise answer, try our Savings Goal Calculator which calculates the exact monthly amount needed to reach a specific target.',
    },
    {
      question: 'Is this calculator accurate for retirement planning?',
      answer:
        'This calculator provides estimates assuming a constant rate of return. Real investments fluctuate year to year. For long-term retirement planning, also try our Retirement Savings Calculator which accounts for your current age, retirement age, and lifestyle spending.',
    },
    {
      question: 'Does this account for taxes or inflation?',
      answer:
        'No — this calculator shows nominal (pre-tax, pre-inflation) returns. To factor in inflation, use our Inflation Calculator. To estimate after-tax returns, multiply your expected return by (1 — your tax rate), or use our US Tax Calculator.',
    },
  ];
}
