import { TaxBracket, FilingStatus } from '@/lib/types';
import { STANDARD_DEDUCTION } from '@/lib/constants';

const BRACKETS_2025: Record<FilingStatus, TaxBracket[]> = {
  single: [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11926, max: 48475, rate: 0.12 },
    { min: 48476, max: 103350, rate: 0.22 },
    { min: 103351, max: 197300, rate: 0.24 },
    { min: 197301, max: 250525, rate: 0.32 },
    { min: 250526, max: 626350, rate: 0.35 },
    { min: 626351, max: null, rate: 0.37 },
  ],
  married_joint: [
    { min: 0, max: 23850, rate: 0.10 },
    { min: 23851, max: 96950, rate: 0.12 },
    { min: 96951, max: 206700, rate: 0.22 },
    { min: 206701, max: 394600, rate: 0.24 },
    { min: 394601, max: 501050, rate: 0.32 },
    { min: 501051, max: 751600, rate: 0.35 },
    { min: 751601, max: null, rate: 0.37 },
  ],
  married_separate: [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11926, max: 48475, rate: 0.12 },
    { min: 48476, max: 103350, rate: 0.22 },
    { min: 103351, max: 197300, rate: 0.24 },
    { min: 197301, max: 250525, rate: 0.32 },
    { min: 250526, max: 375800, rate: 0.35 },
    { min: 375801, max: null, rate: 0.37 },
  ],
  head_of_household: [
    { min: 0, max: 17000, rate: 0.10 },
    { min: 17001, max: 64850, rate: 0.12 },
    { min: 64851, max: 103350, rate: 0.22 },
    { min: 103351, max: 197300, rate: 0.24 },
    { min: 197301, max: 250500, rate: 0.32 },
    { min: 250501, max: 626350, rate: 0.35 },
    { min: 626351, max: null, rate: 0.37 },
  ],
};

const BRACKETS_2026: Record<FilingStatus, TaxBracket[]> = {
  single: [
    { min: 0, max: 12400, rate: 0.10 },
    { min: 12401, max: 50400, rate: 0.12 },
    { min: 50401, max: 105700, rate: 0.22 },
    { min: 105701, max: 201775, rate: 0.24 },
    { min: 201776, max: 256225, rate: 0.32 },
    { min: 256226, max: 640600, rate: 0.35 },
    { min: 640601, max: null, rate: 0.37 },
  ],
  married_joint: [
    { min: 0, max: 24800, rate: 0.10 },
    { min: 24801, max: 100800, rate: 0.12 },
    { min: 100801, max: 211400, rate: 0.22 },
    { min: 211401, max: 403550, rate: 0.24 },
    { min: 403551, max: 512450, rate: 0.32 },
    { min: 512451, max: 768700, rate: 0.35 },
    { min: 768701, max: null, rate: 0.37 },
  ],
  married_separate: [
    { min: 0, max: 12400, rate: 0.10 },
    { min: 12401, max: 50400, rate: 0.12 },
    { min: 50401, max: 105700, rate: 0.22 },
    { min: 105701, max: 201775, rate: 0.24 },
    { min: 201776, max: 256225, rate: 0.32 },
    { min: 256226, max: 384350, rate: 0.35 },
    { min: 384351, max: null, rate: 0.37 },
  ],
  head_of_household: [
    { min: 0, max: 17700, rate: 0.10 },
    { min: 17701, max: 67450, rate: 0.12 },
    { min: 67451, max: 105700, rate: 0.22 },
    { min: 105701, max: 201750, rate: 0.24 },
    { min: 201751, max: 256200, rate: 0.32 },
    { min: 256201, max: 640600, rate: 0.35 },
    { min: 640601, max: null, rate: 0.37 },
  ],
};

const BRACKETS: Record<number, Record<FilingStatus, TaxBracket[]>> = {
  2025: BRACKETS_2025,
  2026: BRACKETS_2026,
};

export function calculateFederalTax(
  income: number,
  filingStatus: FilingStatus,
  taxYear: number = 2025
): { tax: number; marginalRate: number; effectiveRate: number; taxableIncome: number } {
  const brackets = BRACKETS[taxYear]?.[filingStatus] ?? BRACKETS_2025[filingStatus];
  const standardDeduction =
    STANDARD_DEDUCTION[taxYear]?.[filingStatus] ?? STANDARD_DEDUCTION[2025][filingStatus];

  const taxableIncome = Math.max(0, income - standardDeduction);

  let tax = 0;
  let marginalRate = 0;

  for (const bracket of brackets) {
    const bracketMax = bracket.max ?? Infinity;
    if (taxableIncome > bracket.min) {
      const taxableInBracket = Math.min(taxableIncome, bracketMax) - bracket.min;
      tax += taxableInBracket * bracket.rate;
      marginalRate = bracket.rate;
    } else {
      break;
    }
  }

  return {
    tax: Math.round(tax * 100) / 100,
    marginalRate,
    effectiveRate: income > 0 ? Math.round((tax / income) * 10000) / 100 : 0,
    taxableIncome: Math.round(taxableIncome * 100) / 100,
  };
}

export function getMarginalBracket(
  taxableIncome: number,
  filingStatus: FilingStatus,
  taxYear: number = 2025
): TaxBracket | null {
  const brackets = BRACKETS[taxYear]?.[filingStatus] ?? BRACKETS_2025[filingStatus];
  return brackets.find(
    (b) => taxableIncome >= b.min && (b.max === null || taxableIncome <= b.max)
  ) ?? null;
}
