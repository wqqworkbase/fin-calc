import { FilingStatus } from './types';

export const SITE_NAME = 'FinCalc';
export const SITE_DOMAIN = 'fincalc.com';

export const COMPOUND_FREQUENCIES = [
  { value: 365, label: 'Daily' },
  { value: 12, label: 'Monthly' },
  { value: 4, label: 'Quarterly' },
  { value: 1, label: 'Annually' },
] as const;

export const STANDARD_DEDUCTION: Record<number, Record<FilingStatus, number>> = {
  2025: {
    single: 15750,
    married_joint: 31500,
    married_separate: 15750,
    head_of_household: 23625,
  },
  2026: {
    single: 16100,
    married_joint: 32200,
    married_separate: 16100,
    head_of_household: 24150,
  },
};

export const FILING_STATUS_LABELS: Record<FilingStatus, string> = {
  single: 'Single',
  married_joint: 'Married Filing Jointly',
  married_separate: 'Married Filing Separately',
  head_of_household: 'Head of Household',
};
