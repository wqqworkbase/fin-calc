interface LocalTaxJurisdiction {
  state: string;
  city: string;
  county?: string;
  residentRate: number;
  nonResidentRate: number;
  appliesTo: 'residents' | 'work_location' | 'both';
}

const LOCAL_TAX_DATA: LocalTaxJurisdiction[] = [
  // New York
  { state: 'NY', city: 'New York City', residentRate: 0.03876, nonResidentRate: 0, appliesTo: 'residents' },
  { state: 'NY', city: 'Yonkers', residentRate: 0.008375, nonResidentRate: 0.0041875, appliesTo: 'both' },

  // Pennsylvania
  { state: 'PA', city: 'Philadelphia', residentRate: 0.0374, nonResidentRate: 0.0343, appliesTo: 'both' },
  { state: 'PA', city: 'Pittsburgh', residentRate: 0.03, nonResidentRate: 0.01, appliesTo: 'work_location' },
  { state: 'PA', city: 'Reading', residentRate: 0.036, nonResidentRate: 0.013, appliesTo: 'work_location' },
  { state: 'PA', city: 'Scranton', residentRate: 0.034, nonResidentRate: 0.01, appliesTo: 'work_location' },

  // Ohio
  { state: 'OH', city: 'Cleveland', residentRate: 0.025, nonResidentRate: 0.025, appliesTo: 'work_location' },
  { state: 'OH', city: 'Columbus', residentRate: 0.025, nonResidentRate: 0.025, appliesTo: 'work_location' },
  { state: 'OH', city: 'Cincinnati', residentRate: 0.021, nonResidentRate: 0.021, appliesTo: 'work_location' },
  { state: 'OH', city: 'Toledo', residentRate: 0.025, nonResidentRate: 0.025, appliesTo: 'work_location' },
  { state: 'OH', city: 'Akron', residentRate: 0.025, nonResidentRate: 0.025, appliesTo: 'work_location' },
  { state: 'OH', city: 'Dayton', residentRate: 0.025, nonResidentRate: 0.025, appliesTo: 'work_location' },

  // Michigan
  { state: 'MI', city: 'Detroit', residentRate: 0.024, nonResidentRate: 0.012, appliesTo: 'both' },
  { state: 'MI', city: 'Grand Rapids', residentRate: 0.015, nonResidentRate: 0.0075, appliesTo: 'both' },
  { state: 'MI', city: 'Highland Park', residentRate: 0.02, nonResidentRate: 0.01, appliesTo: 'both' },
  { state: 'MI', city: 'Saginaw', residentRate: 0.015, nonResidentRate: 0.0075, appliesTo: 'both' },

  // Kentucky
  { state: 'KY', city: 'Louisville', residentRate: 0.0145, nonResidentRate: 0.0145, appliesTo: 'work_location' },
  { state: 'KY', city: 'Lexington', residentRate: 0.0225, nonResidentRate: 0.0225, appliesTo: 'work_location' },
  { state: 'KY', city: 'Covington', residentRate: 0.025, nonResidentRate: 0.025, appliesTo: 'work_location' },
  { state: 'KY', city: 'Newport', residentRate: 0.025, nonResidentRate: 0.025, appliesTo: 'work_location' },

  // Maryland
  { state: 'MD', city: 'Baltimore City', county: 'Baltimore City', residentRate: 0.032, nonResidentRate: 0.032, appliesTo: 'both' },

  // Indiana
  { state: 'IN', city: 'Indianapolis (Marion Co.)', county: 'Marion', residentRate: 0.0202, nonResidentRate: 0, appliesTo: 'residents' },
  { state: 'IN', city: 'Allen County', county: 'Allen', residentRate: 0.0159, nonResidentRate: 0, appliesTo: 'residents' },
  { state: 'IN', city: 'Lake County', county: 'Lake', residentRate: 0.015, nonResidentRate: 0, appliesTo: 'residents' },

  // Missouri
  { state: 'MO', city: 'Kansas City', residentRate: 0.01, nonResidentRate: 0.01, appliesTo: 'work_location' },
  { state: 'MO', city: 'St. Louis', residentRate: 0.01, nonResidentRate: 0.01, appliesTo: 'work_location' },

  // Oregon
  { state: 'OR', city: 'Portland Metro', residentRate: 0.01, nonResidentRate: 0.01, appliesTo: 'residents' },

  // Colorado
  { state: 'CO', city: 'Denver', residentRate: 0.005, nonResidentRate: 0.005, appliesTo: 'work_location' },
];

export function getLocalJurisdictions(stateCode: string): LocalTaxJurisdiction[] {
  return LOCAL_TAX_DATA.filter((j) => j.state === stateCode);
}

export function calculateLocalTax(
  income: number,
  jurisdictions: LocalTaxJurisdiction[],
  isResident: boolean
): { total: number; details: { city: string; rate: number; tax: number }[] } {
  const details: { city: string; rate: number; tax: number }[] = [];

  for (const jur of jurisdictions) {
    const rate = isResident ? jur.residentRate : jur.nonResidentRate;
    if (rate > 0) {
      const tax = income * rate;
      details.push({
        city: jur.city,
        rate: Math.round(rate * 10000) / 100,
        tax: Math.round(tax * 100) / 100,
      });
    }
  }

  return {
    total: Math.round(details.reduce((s, d) => s + d.tax, 0) * 100) / 100,
    details,
  };
}

export const STATES_WITH_LOCAL_TAX = [
  'NY', 'PA', 'OH', 'MI', 'KY', 'MD', 'IN', 'MO', 'OR', 'CO', 'DE', 'NJ', 'AL', 'IA', 'KS', 'WV',
];
