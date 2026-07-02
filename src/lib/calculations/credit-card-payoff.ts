export interface CreditCardResult {
  monthsToPayoff: number;
  totalInterest: number;
  totalPaid: number;
  schedule: { month: number; payment: number; interest: number; principal: number; balance: number }[];
}

export function calculateCreditCardPayoff(balance: number, apr: number, monthlyPayment: number): CreditCardResult {
  const monthlyRate = apr / 12;
  let remaining = balance;
  let totalInterest = 0;
  let month = 0;
  const schedule: CreditCardResult['schedule'] = [];
  const maxMonths = 600; // 50 years safety cap

  while (remaining > 0 && month < maxMonths) {
    month++;
    const interest = remaining * monthlyRate;
    const actualPayment = Math.min(monthlyPayment, remaining + interest);
    const principal = actualPayment - interest;
    remaining -= principal;
    totalInterest += interest;
    schedule.push({
      month,
      payment: Math.round(actualPayment * 100) / 100,
      interest: Math.round(interest * 100) / 100,
      principal: Math.round(principal * 100) / 100,
      balance: Math.round(Math.max(0, remaining) * 100) / 100,
    });
    if (interest >= monthlyPayment && remaining > 0) {
      // Payment doesn't cover interest — would never pay off
      month = maxMonths;
      break;
    }
  }

  return {
    monthsToPayoff: Math.min(month, maxMonths),
    totalInterest: Math.round(totalInterest * 100) / 100,
    totalPaid: Math.round((balance + totalInterest) * 100) / 100,
    schedule: schedule.slice(0, 60), // first 60 months for display
  };
}

export function calculateCreditCardPayoffTime(balance: number, apr: number, targetMonths: number): { monthlyPayment: number; totalInterest: number } {
  const monthlyRate = apr / 12;
  if (monthlyRate === 0 || targetMonths === 0) {
    return { monthlyPayment: balance / targetMonths, totalInterest: 0 };
  }
  const payment = balance * monthlyRate * Math.pow(1 + monthlyRate, targetMonths) / (Math.pow(1 + monthlyRate, targetMonths) - 1);
  const totalPaid = payment * targetMonths;
  return {
    monthlyPayment: Math.round(payment * 100) / 100,
    totalInterest: Math.round((totalPaid - balance) * 100) / 100,
  };
}

export function generateCreditCardFAQs() {
  return [
    {
      question: 'How is credit card interest calculated?',
      answer: 'Credit cards use a daily periodic rate (APR divided by 365) and compound daily. Interest accrues on your average daily balance. Most cards offer a grace period — if you pay the full statement balance by the due date, you pay zero interest on new purchases.',
    },
    {
      question: 'What is a good strategy to pay off credit card debt?',
      answer: 'Two popular approaches: the avalanche method (pay highest APR card first, mathematically optimal) and the snowball method (pay smallest balance first, psychologically motivating). Both require stopping new charges on the cards.',
    },
    {
      question: 'Should I use a balance transfer card?',
      answer: 'A 0% APR balance transfer can save significant interest if you can pay off the balance during the promotional period (typically 12-21 months). Watch for the transfer fee (usually 3-5%) and avoid new purchases on the transfer card because payments apply to the lower-rate balance first.',
    },
  ];
}
