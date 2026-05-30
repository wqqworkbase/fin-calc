import { TaxBracket, FilingStatus } from '@/lib/types';

const NO_TAX_STATES = new Set([
  'AK', 'FL', 'NV', 'NH', 'SD', 'TN', 'TX', 'WA', 'WY',
]);

const FLAT_TAX_STATES: Record<string, number> = {
  AZ: 0.025, CO: 0.044, GA: 0.0519, ID: 0.053,
  IL: 0.0495, IN: 0.03, IA: 0.038, KY: 0.04,
  LA: 0.03, MI: 0.0425, MS: 0.044, NC: 0.0425,
  PA: 0.0307, UT: 0.0455,
};

const GRADUATED_STATES: Record<string, TaxBracket[]> = {
  CA: [
    { min: 0, max: 10412, rate: 0.01 }, { min: 10413, max: 24684, rate: 0.02 },
    { min: 24685, max: 38959, rate: 0.04 }, { min: 38960, max: 54081, rate: 0.06 },
    { min: 54082, max: 68350, rate: 0.08 }, { min: 68351, max: 349137, rate: 0.093 },
    { min: 349138, max: 418961, rate: 0.103 }, { min: 418962, max: 698271, rate: 0.113 },
    { min: 698272, max: 1000000, rate: 0.123 }, { min: 1000001, max: null, rate: 0.133 },
  ],
  NY: [
    { min: 0, max: 8500, rate: 0.04 }, { min: 8501, max: 11700, rate: 0.045 },
    { min: 11701, max: 13900, rate: 0.0525 }, { min: 13901, max: 80650, rate: 0.0585 },
    { min: 80651, max: 215400, rate: 0.0625 }, { min: 215401, max: 1077550, rate: 0.0685 },
    { min: 1077551, max: 5000000, rate: 0.0882 }, { min: 5000001, max: 25000000, rate: 0.0965 },
    { min: 25000001, max: null, rate: 0.109 },
  ],
  NJ: [
    { min: 0, max: 20000, rate: 0.014 }, { min: 20001, max: 35000, rate: 0.0175 },
    { min: 35001, max: 40000, rate: 0.035 }, { min: 40001, max: 75000, rate: 0.05525 },
    { min: 75001, max: 500000, rate: 0.0637 }, { min: 500001, max: 1000000, rate: 0.0897 },
    { min: 1000001, max: null, rate: 0.1075 },
  ],
  MA: [
    { min: 0, max: 1000000, rate: 0.05 }, { min: 1000001, max: null, rate: 0.09 },
  ],
  MD: [
    { min: 0, max: 1000, rate: 0.02 }, { min: 1001, max: 2000, rate: 0.03 },
    { min: 2001, max: 3000, rate: 0.04 }, { min: 3001, max: 100000, rate: 0.0475 },
    { min: 100001, max: 125000, rate: 0.05 }, { min: 125001, max: 150000, rate: 0.0525 },
    { min: 150001, max: 250000, rate: 0.055 }, { min: 250001, max: null, rate: 0.0575 },
  ],
  MN: [
    { min: 0, max: 30000, rate: 0.0535 }, { min: 30001, max: 98760, rate: 0.068 },
    { min: 98761, max: 183340, rate: 0.0785 }, { min: 183341, max: null, rate: 0.0985 },
  ],
  WI: [
    { min: 0, max: 14320, rate: 0.0354 }, { min: 14321, max: 28640, rate: 0.0465 },
    { min: 28641, max: 315310, rate: 0.0527 }, { min: 315311, max: null, rate: 0.0765 },
  ],
  OR: [
    { min: 0, max: 4100, rate: 0.0475 }, { min: 4101, max: 10200, rate: 0.0675 },
    { min: 10201, max: 125000, rate: 0.0875 }, { min: 125001, max: null, rate: 0.099 },
  ],
  HI: [
    { min: 0, max: 2400, rate: 0.014 }, { min: 2401, max: 4800, rate: 0.032 },
    { min: 4801, max: 9600, rate: 0.055 }, { min: 9601, max: 14400, rate: 0.064 },
    { min: 14401, max: 19200, rate: 0.068 }, { min: 19201, max: 24000, rate: 0.072 },
    { min: 24001, max: 36000, rate: 0.076 }, { min: 36001, max: 48000, rate: 0.079 },
    { min: 48001, max: 150000, rate: 0.0825 }, { min: 150001, max: 175000, rate: 0.09 },
    { min: 175001, max: 200000, rate: 0.10 }, { min: 200001, max: null, rate: 0.11 },
  ],
  CT: [
    { min: 0, max: 10000, rate: 0.02 }, { min: 10001, max: 50000, rate: 0.045 },
    { min: 50001, max: 100000, rate: 0.055 }, { min: 100001, max: 200000, rate: 0.06 },
    { min: 200001, max: 250000, rate: 0.065 }, { min: 250001, max: 500000, rate: 0.069 },
    { min: 500001, max: null, rate: 0.0699 },
  ],
  DC: [
    { min: 0, max: 10000, rate: 0.04 }, { min: 10001, max: 40000, rate: 0.06 },
    { min: 40001, max: 60000, rate: 0.065 }, { min: 60001, max: 250000, rate: 0.085 },
    { min: 250001, max: 500000, rate: 0.0925 }, { min: 500001, max: null, rate: 0.1075 },
  ],
  ME: [
    { min: 0, max: 26050, rate: 0.058 }, { min: 26051, max: 61600, rate: 0.0675 },
    { min: 61601, max: null, rate: 0.0715 },
  ],
  VT: [
    { min: 0, max: 45400, rate: 0.0335 }, { min: 45401, max: 110550, rate: 0.066 },
    { min: 110551, max: 229000, rate: 0.076 }, { min: 229001, max: null, rate: 0.0875 },
  ],
  RI: [
    { min: 0, max: 77450, rate: 0.0375 }, { min: 77451, max: 176050, rate: 0.0475 },
    { min: 176051, max: null, rate: 0.0599 },
  ],
  DE: [
    { min: 0, max: 2000, rate: 0.022 }, { min: 2001, max: 5000, rate: 0.039 },
    { min: 5001, max: 10000, rate: 0.048 }, { min: 10001, max: 20000, rate: 0.052 },
    { min: 20001, max: 25000, rate: 0.0555 }, { min: 25001, max: 60000, rate: 0.0633 },
    { min: 60001, max: null, rate: 0.066 },
  ],
  NE: [
    { min: 0, max: 3500, rate: 0.0246 }, { min: 3501, max: 20900, rate: 0.0351 },
    { min: 20901, max: 35850, rate: 0.0501 }, { min: 35851, max: null, rate: 0.0584 },
  ],
  KS: [
    { min: 0, max: 15000, rate: 0.031 }, { min: 15001, max: 30000, rate: 0.0525 },
    { min: 30001, max: null, rate: 0.057 },
  ],
  MO: [
    { min: 0, max: 1311, rate: 0.0 }, { min: 1312, max: 2623, rate: 0.02 },
    { min: 2624, max: 3934, rate: 0.025 }, { min: 3935, max: 5246, rate: 0.03 },
    { min: 5247, max: 6557, rate: 0.035 }, { min: 6558, max: 7869, rate: 0.04 },
    { min: 7870, max: 8449, rate: 0.045 }, { min: 8450, max: null, rate: 0.047 },
  ],
  MT: [
    { min: 0, max: 3800, rate: 0.047 }, { min: 3801, max: 6200, rate: 0.049 },
    { min: 6201, max: 9900, rate: 0.051 }, { min: 9901, max: 14500, rate: 0.053 },
    { min: 14501, max: 19300, rate: 0.054 }, { min: 19301, max: 23900, rate: 0.056 },
    { min: 23901, max: null, rate: 0.058 },
  ],
  SC: [
    { min: 0, max: 3450, rate: 0.0 }, { min: 3451, max: 17250, rate: 0.03 },
    { min: 17251, max: null, rate: 0.062 },
  ],
  VA: [
    { min: 0, max: 3000, rate: 0.02 }, { min: 3001, max: 5000, rate: 0.03 },
    { min: 5001, max: 17000, rate: 0.05 }, { min: 17001, max: null, rate: 0.0575 },
  ],
  WV: [
    { min: 0, max: 10000, rate: 0.0236 }, { min: 10001, max: 25000, rate: 0.0315 },
    { min: 25001, max: 40000, rate: 0.0354 }, { min: 40001, max: 60000, rate: 0.0472 },
    { min: 60001, max: null, rate: 0.0512 },
  ],
  NM: [
    { min: 0, max: 5500, rate: 0.017 }, { min: 5501, max: 11000, rate: 0.032 },
    { min: 11001, max: 16000, rate: 0.047 }, { min: 16001, max: 210000, rate: 0.049 },
    { min: 210001, max: null, rate: 0.059 },
  ],
  ND: [
    { min: 0, max: 44725, rate: 0.011 }, { min: 44726, max: 108350, rate: 0.0204 },
    { min: 108351, max: 225975, rate: 0.0227 }, { min: 225976, max: 275100, rate: 0.0264 },
    { min: 275101, max: null, rate: 0.025 },
  ],
  AL: [
    { min: 0, max: 500, rate: 0.02 }, { min: 501, max: 3000, rate: 0.04 },
    { min: 3001, max: null, rate: 0.05 },
  ],
  AR: [
    { min: 0, max: 5000, rate: 0.0 }, { min: 5001, max: 14499, rate: 0.02 },
    { min: 14500, max: 24499, rate: 0.04 }, { min: 24500, max: null, rate: 0.044 },
  ],
  OH: [
    { min: 0, max: 26050, rate: 0.0 }, { min: 26051, max: 92150, rate: 0.0275 },
    { min: 92151, max: 115300, rate: 0.03226 }, { min: 115301, max: null, rate: 0.03688 },
  ],
};

const STATE_NAMES: Record<string, string> = {
  AK: 'Alaska', AL: 'Alabama', AR: 'Arkansas', AZ: 'Arizona', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DC: 'District of Columbia', DE: 'Delaware', FL: 'Florida',
  GA: 'Georgia', HI: 'Hawaii', IA: 'Iowa', ID: 'Idaho', IL: 'Illinois',
  IN: 'Indiana', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', MA: 'Massachusetts',
  MD: 'Maryland', ME: 'Maine', MI: 'Michigan', MN: 'Minnesota', MO: 'Missouri',
  MS: 'Mississippi', MT: 'Montana', NC: 'North Carolina', ND: 'North Dakota', NE: 'Nebraska',
  NH: 'New Hampshire', NJ: 'New Jersey', NM: 'New Mexico', NV: 'Nevada', NY: 'New York',
  OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island',
  SC: 'South Carolina', SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah',
  VA: 'Virginia', VT: 'Vermont', WA: 'Washington', WI: 'Wisconsin', WV: 'West Virginia',
  WY: 'Wyoming',
};

export function calculateStateTax(
  taxableIncome: number,
  stateCode: string,
  _filingStatus: FilingStatus
): { tax: number; stateName: string; rateType: 'none' | 'flat' | 'graduated' } {
  if (NO_TAX_STATES.has(stateCode)) {
    return { tax: 0, stateName: STATE_NAMES[stateCode] ?? stateCode, rateType: 'none' };
  }

  const flatRate = FLAT_TAX_STATES[stateCode];
  if (flatRate !== undefined) {
    return {
      tax: Math.round(taxableIncome * flatRate * 100) / 100,
      stateName: STATE_NAMES[stateCode] ?? stateCode,
      rateType: 'flat',
    };
  }

  const brackets = GRADUATED_STATES[stateCode];
  if (brackets) {
    let tax = 0;
    for (const bracket of brackets) {
      const bracketMax = bracket.max ?? Infinity;
      if (taxableIncome > bracket.min) {
        tax += (Math.min(taxableIncome, bracketMax) - bracket.min) * bracket.rate;
      }
    }
    return {
      tax: Math.round(tax * 100) / 100,
      stateName: STATE_NAMES[stateCode] ?? stateCode,
      rateType: 'graduated',
    };
  }

  // Fallback: assume 5% flat for unlisted states
  return {
    tax: Math.round(taxableIncome * 0.05 * 100) / 100,
    stateName: STATE_NAMES[stateCode] ?? stateCode,
    rateType: 'flat',
  };
}

export function getStateName(code: string): string {
  return STATE_NAMES[code] ?? code;
}

export const ALL_STATES = Object.keys(STATE_NAMES);
