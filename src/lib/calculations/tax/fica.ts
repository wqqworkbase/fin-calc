import { FilingStatus } from '@/lib/types';

const FICA_CONFIG: Record<number, { ssWageBase: number; ssRate: number; medicareRate: number }> = {
  2025: { ssWageBase: 176100, ssRate: 0.062, medicareRate: 0.0145 },
  2026: { ssWageBase: 184500, ssRate: 0.062, medicareRate: 0.0145 },
};

const ADDITIONAL_MEDICARE_THRESHOLD: Record<FilingStatus, number> = {
  single: 200000,
  married_joint: 250000,
  married_separate: 125000,
  head_of_household: 200000,
};

export interface FICAResult {
  socialSecurity: number;
  medicare: number;
  additionalMedicare: number;
  total: number;
}

export function calculateFICA(
  earnedIncome: number,
  filingStatus: FilingStatus,
  isSelfEmployed: boolean,
  taxYear: number = 2025
): FICAResult {
  const config = FICA_CONFIG[taxYear] ?? FICA_CONFIG[2025];
  const threshold = ADDITIONAL_MEDICARE_THRESHOLD[filingStatus];

  const ssRate = isSelfEmployed ? config.ssRate * 2 : config.ssRate;
  const medicareRate = isSelfEmployed ? config.medicareRate * 2 : config.medicareRate;
  const additionalRate = 0.009;

  const socialSecurity = Math.min(earnedIncome, config.ssWageBase) * ssRate;
  const baseMedicare = earnedIncome * medicareRate;
  const additionalMedicare =
    earnedIncome > threshold ? (earnedIncome - threshold) * additionalRate : 0;

  return {
    socialSecurity: Math.round(socialSecurity * 100) / 100,
    medicare: Math.round(baseMedicare * 100) / 100,
    additionalMedicare: Math.round(additionalMedicare * 100) / 100,
    total: Math.round((socialSecurity + baseMedicare + additionalMedicare) * 100) / 100,
  };
}

export function getFICADetails(taxYear: number) {
  const config = FICA_CONFIG[taxYear] ?? FICA_CONFIG[2025];
  return {
    socialSecurityRate: config.ssRate * 100,
    medicareRate: config.medicareRate * 100,
    ssWageBase: config.ssWageBase,
    additionalMedicareRate: 0.9,
    additionalMedicareThresholds: ADDITIONAL_MEDICARE_THRESHOLD,
  };
}
