import { AmortizationRow } from '@/lib/types';

interface LoanInput {
  loanAmount: number;
  annualRate: number;
  termYears: number;
  paymentsPerYear: number;
}

export function calculateAmortization({
  loanAmount,
  annualRate,
  termYears,
  paymentsPerYear,
}: LoanInput): {
  payment: number;
  totalPayments: number;
  totalInterest: number;
  schedule: AmortizationRow[];
} {
  const ratePerPeriod = annualRate / paymentsPerYear;
  const totalPeriods = termYears * paymentsPerYear;

  const payment =
    (loanAmount * ratePerPeriod * Math.pow(1 + ratePerPeriod, totalPeriods)) /
    (Math.pow(1 + ratePerPeriod, totalPeriods) - 1);

  let balance = loanAmount;
  const schedule: AmortizationRow[] = [];
  let totalInterest = 0;

  for (let i = 1; i <= totalPeriods; i++) {
    const interest = balance * ratePerPeriod;
    const principal = payment - interest;
    balance -= principal;
    totalInterest += interest;

    schedule.push({
      period: i,
      payment: Math.round(payment * 100) / 100,
      principal: Math.round(principal * 100) / 100,
      interest: Math.round(interest * 100) / 100,
      balance: Math.round(Math.max(0, balance) * 100) / 100,
    });
  }

  return {
    payment: Math.round(payment * 100) / 100,
    totalPayments: Math.round(payment * totalPeriods * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    schedule,
  };
}

export function calculateEarlyPayoff(
  { loanAmount, annualRate, termYears, paymentsPerYear }: LoanInput,
  extraPayment: number
) {
  const ratePerPeriod = annualRate / paymentsPerYear;
  const totalPeriods = termYears * paymentsPerYear;
  const normalPayment =
    (loanAmount * ratePerPeriod * Math.pow(1 + ratePerPeriod, totalPeriods)) /
    (Math.pow(1 + ratePerPeriod, totalPeriods) - 1);

  const acceleratedPayment = normalPayment + extraPayment;

  let balance = loanAmount;
  let periods = 0;
  let totalInterest = 0;
  const maxPeriods = totalPeriods * 2;
  while (balance > 0 && periods < maxPeriods) {
    const interest = balance * ratePerPeriod;
    const principal = Math.min(acceleratedPayment - interest, balance);
    balance -= principal;
    totalInterest += interest;
    periods++;
  }

  const normalTotalInterest = normalPayment * totalPeriods - loanAmount;

  return {
    normalTotalInterest: Math.round(normalTotalInterest * 100) / 100,
    acceleratedTotalInterest: Math.round(totalInterest * 100) / 100,
    timeSaved: Math.round(((totalPeriods - periods) / paymentsPerYear) * 10) / 10,
    interestSaved:
      Math.round((normalTotalInterest - totalInterest) * 100) / 100,
  };
}

export function generateLoanFAQs() {
  return [
    {
      question: 'What is loan amortization?',
      answer:
        'Amortization is the process of paying off a loan through regular payments over time. Each payment covers both principal (the original amount borrowed) and interest. Early payments are mostly interest; later payments are mostly principal as the balance decreases.',
    },
    {
      question: 'How much can I save with extra payments?',
      answer:
        'Even small extra payments can save thousands of dollars in interest and shorten your loan by years. For example, an extra $100/month on a $300,000 30-year mortgage at 6.5% saves over $60,000 in interest and pays off the loan 7 years earlier.',
    },
    {
      question: 'Biweekly vs. monthly payments — which is better?',
      answer:
        'Biweekly payments (every 2 weeks) result in 26 half-payments per year, equivalent to 13 full monthly payments instead of 12. This one extra payment per year can cut years off your loan term. Select "Biweekly (26/year)" above to see the difference.',
    },
    {
      question: 'Should I pay off my loan early or invest?',
      answer:
        'Compare your loan interest rate to expected investment returns. If your loan rate is 6% and you expect 7% investment returns, investing may be mathematically better — but paying off debt is risk-free. Many people do both: make some extra payments while also investing.',
    },
  ];
}
