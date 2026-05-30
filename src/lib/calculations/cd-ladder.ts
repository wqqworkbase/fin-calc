import { CDLadderResult } from '@/lib/types';

const CD_TERMS = [
  { months: 3, label: '3-Month CD' },
  { months: 6, label: '6-Month CD' },
  { months: 12, label: '1-Year CD' },
  { months: 24, label: '2-Year CD' },
  { months: 60, label: '5-Year CD' },
] as const;

export function getCDTerms() {
  return CD_TERMS;
}

interface CDLadderInput {
  totalAmount: number;
  apys: Record<string, number>;
}

export function calculateCDLadder({ totalAmount, apys }: CDLadderInput): CDLadderResult {
  const amountPerRung = totalAmount / CD_TERMS.length;

  let totalReturn = 0;
  const rungResults: CDLadderResult['rungResults'] = [];

  for (const term of CD_TERMS) {
    const apy = apys[term.label] ?? 0;
    const years = term.months / 12;
    const futureValue = amountPerRung * Math.pow(1 + apy, years);
    const returnAmount = futureValue - amountPerRung;

    totalReturn += returnAmount;
    rungResults.push({
      term: term.label,
      apy: Math.round(apy * 10000) / 100,
      amount: Math.round(amountPerRung * 100) / 100,
      return: Math.round(returnAmount * 100) / 100,
    });
  }

  // Weighted effective APY
  let weightedSum = 0;
  let weightTotal = 0;
  for (const rung of rungResults) {
    const term = CD_TERMS.find((t) => t.label === rung.term);
    const weight = term ? term.months * rung.amount : 12 * rung.amount;
    weightedSum += rung.apy * weight;
    weightTotal += weight;
  }
  const effectiveAPY = weightTotal > 0 ? weightedSum / weightTotal : 0;

  return {
    totalReturn: Math.round(totalReturn * 100) / 100,
    effectiveAPY: Math.round(effectiveAPY * 100) / 100,
    rungResults,
  };
}

export function generateCDFAQs() {
  return [
    {
      question: 'What is a CD ladder?',
      answer:
        'A CD ladder splits your investment across CDs with staggered maturity dates (e.g., 3-month, 6-month, 1-year, 2-year, and 5-year). As each CD matures, you reinvest in a new 5-year CD. This gives you regular access to funds while earning higher long-term rates.',
    },
    {
      question: 'What are the benefits of CD laddering?',
      answer:
        'CD ladders provide a balance of higher yields (from longer-term CDs) and regular liquidity (from staggered maturities). You avoid locking all your money into one rate and can take advantage of rising rates when shorter CDs mature.',
    },
    {
      question: 'Are CD returns guaranteed?',
      answer:
        'Yes — CD rates are fixed at purchase and are FDIC-insured up to $250,000 per depositor, per bank. Your principal and interest are guaranteed if held to maturity. Early withdrawal penalties apply if you cash out before maturity.',
    },
    {
      question: 'What is the difference between APY and interest rate?',
      answer:
        'APY (Annual Percentage Yield) includes the effect of compounding and represents your true annual return. The stated interest rate is the nominal rate before compounding. For CDs that compound more than annually, APY is slightly higher than the stated rate.',
    },
    {
      question: 'How do I choose CD terms for my ladder?',
      answer:
        'A typical ladder uses 5 rungs (3-month, 6-month, 1-year, 2-year, and 5-year). If you need more frequent liquidity, add more short-term rungs. If maximizing long-term yield is your priority, skew toward longer terms. This calculator lets you experiment with different configurations.',
    },
  ];
}
