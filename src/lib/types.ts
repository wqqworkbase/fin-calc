export type FilingStatus = 'single' | 'married_joint' | 'married_separate' | 'head_of_household';

export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

export interface TaxResult {
  federalTax: number;
  ficaTax: number;
  additionalMedicareTax: number;
  stateTax: number;
  localTax: number;
  totalTax: number;
  afterTaxIncome: number;
  effectiveRate: number;
  marginalRate: number;
}

export interface AmortizationRow {
  period: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface CompoundInterestResult {
  finalBalance: number;
  totalContributions: number;
  totalInterest: number;
  yearlyData: { year: number; balance: number; contributions: number; interest: number }[];
}

export interface RetirementResult {
  retirementBalance: number;
  totalContributions: number;
  totalInterest: number;
  monthlyRetirementIncome: number;
  yearsOfRetirement: number;
  isSufficient: boolean;
  shortfall: number;
  recommendedMonthlyContribution: number;
}

export interface SavingsGoalResult {
  monthlyRequired: number;
  totalContributions: number;
  totalInterest: number;
  scenarios: { rate: number; monthlyRequired: number }[];
}

export interface InflationResult {
  adjustedValue: number;
  multiplier: number;
  annualizedRate: number;
}

export interface CDLadderResult {
  totalReturn: number;
  effectiveAPY: number;
  rungResults: { term: string; apy: number; amount: number; return: number }[];
}
