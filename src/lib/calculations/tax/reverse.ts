import { FilingStatus, TaxResult } from '@/lib/types';
import { calculateFederalTax } from './federal';
import { calculateFICA } from './fica';
import { calculateStateTax } from './states';
import { calculateLocalTax, getLocalJurisdictions } from './local';

export interface ReverseInput {
  targetAfterTax: number;
  filingStatus: FilingStatus;
  stateCode: string;
  taxYear: number;
  isSelfEmployed: boolean;
  localJurisdiction?: string;
  isResident?: boolean;
}

function calculateAfterTax(income: number, input: ReverseInput): number {
  const federal = calculateFederalTax(income, input.filingStatus, input.taxYear);
  const fica = calculateFICA(income, input.filingStatus, input.isSelfEmployed, input.taxYear);
  const state = calculateStateTax(federal.taxableIncome, input.stateCode, input.filingStatus);

  let localTax = 0;
  if (input.localJurisdiction) {
    const jurisdictions = getLocalJurisdictions(input.stateCode);
    const selected = jurisdictions.filter((j) => j.city === input.localJurisdiction);
    const local = calculateLocalTax(income, selected, input.isResident ?? true);
    localTax = local.total;
  }

  return income - federal.tax - fica.total - state.tax - localTax;
}

export function reverseFromAfterTax(input: ReverseInput): number {
  let low = 0;
  let high = 10_000_000;
  const tolerance = 0.01;
  let iterations = 0;
  const maxIterations = 100;

  while (high - low > tolerance && iterations < maxIterations) {
    const mid = (low + high) / 2;
    const afterTax = calculateAfterTax(mid, input);

    if (afterTax < input.targetAfterTax) {
      low = mid;
    } else {
      high = mid;
    }
    iterations++;
  }

  return Math.round(((low + high) / 2) * 100) / 100;
}

export interface ReverseFromTaxResult {
  grossIncome: number;
  breakdown: {
    federalTax: number;
    ficaTax: number;
    stateTax: number;
    localTax: number;
    afterTaxIncome: number;
  };
}

export function reverseFromTaxPaid(
  targetTaxPaid: number,
  filingStatus: FilingStatus,
  stateCode: string,
  taxYear: number,
  isSelfEmployed: boolean
): ReverseFromTaxResult {
  let low = 0;
  let high = 10_000_000;
  const tolerance = 0.01;
  let iterations = 0;
  const maxIterations = 100;

  function totalTax(income: number): number {
    const federal = calculateFederalTax(income, filingStatus, taxYear);
    const fica = calculateFICA(income, filingStatus, isSelfEmployed, taxYear);
    const state = calculateStateTax(federal.taxableIncome, stateCode, filingStatus);
    return federal.tax + fica.total + state.tax;
  }

  while (high - low > tolerance && iterations < maxIterations) {
    const mid = (low + high) / 2;
    const tax = totalTax(mid);

    if (tax < targetTaxPaid) {
      low = mid;
    } else {
      high = mid;
    }
    iterations++;
  }

  const grossIncome = Math.round(((low + high) / 2) * 100) / 100;
  const federal = calculateFederalTax(grossIncome, filingStatus, taxYear);
  const fica = calculateFICA(grossIncome, filingStatus, isSelfEmployed, taxYear);
  const state = calculateStateTax(federal.taxableIncome, stateCode, filingStatus);

  return {
    grossIncome,
    breakdown: {
      federalTax: federal.tax,
      ficaTax: fica.total,
      stateTax: state.tax,
      localTax: 0,
      afterTaxIncome: Math.round((grossIncome - federal.tax - fica.total - state.tax) * 100) / 100,
    },
  };
}
