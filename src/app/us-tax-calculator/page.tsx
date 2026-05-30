'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { calculateFederalTax } from '@/lib/calculations/tax/federal';
import { calculateFICA, FICAResult } from '@/lib/calculations/tax/fica';
import { calculateStateTax, ALL_STATES } from '@/lib/calculations/tax/states';
import { getLocalJurisdictions, calculateLocalTax } from '@/lib/calculations/tax/local';
import { reverseFromAfterTax } from '@/lib/calculations/tax/reverse';
import { FilingStatus, TaxResult } from '@/lib/types';
import { FILING_STATUS_LABELS } from '@/lib/constants';

export default function USTaxCalculator() {
  const [mode, setMode] = useState<'forward' | 'reverse'>('forward');
  const [income, setIncome] = useState(100000);
  const [targetAfterTax, setTargetAfterTax] = useState(75000);
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [stateCode, setStateCode] = useState('CA');
  const [taxYear, setTaxYear] = useState(2025);
  const [isSelfEmployed, setIsSelfEmployed] = useState(false);
  const [isResident, setIsResident] = useState(true);
  const [selectedCity, setSelectedCity] = useState('');

  const localJurisdictions = useMemo(() => getLocalJurisdictions(stateCode), [stateCode]);

  const forwardResult = useMemo((): TaxResult | null => {
    if (mode !== 'forward') return null;
    const federal = calculateFederalTax(income, filingStatus, taxYear);
    const fica = calculateFICA(income, filingStatus, isSelfEmployed, taxYear);
    const state = calculateStateTax(federal.taxableIncome, stateCode, filingStatus);
    const local = selectedCity
      ? calculateLocalTax(income, localJurisdictions.filter((j) => j.city === selectedCity), isResident)
      : { total: 0, details: [] };

    const totalTax = federal.tax + fica.total + state.tax + local.total;
    const afterTaxIncome = income - totalTax;

    return {
      federalTax: federal.tax,
      ficaTax: fica.total,
      additionalMedicareTax: fica.additionalMedicare,
      stateTax: state.tax,
      localTax: local.total,
      totalTax: Math.round(totalTax * 100) / 100,
      afterTaxIncome: Math.round(afterTaxIncome * 100) / 100,
      effectiveRate: income > 0 ? Math.round((totalTax / income) * 10000) / 100 : 0,
      marginalRate: Math.round(federal.marginalRate * 10000) / 100,
    };
  }, [mode, income, filingStatus, stateCode, taxYear, isSelfEmployed, selectedCity, isResident, localJurisdictions]);

  const reverseResult = useMemo(() => {
    if (mode !== 'reverse') return null;
    const grossIncome = reverseFromAfterTax({
      targetAfterTax,
      filingStatus,
      stateCode,
      taxYear,
      isSelfEmployed,
      localJurisdiction: selectedCity || undefined,
      isResident,
    });

    const federal = calculateFederalTax(grossIncome, filingStatus, taxYear);
    const fica = calculateFICA(grossIncome, filingStatus, isSelfEmployed, taxYear);
    const state = calculateStateTax(federal.taxableIncome, stateCode, filingStatus);
    const local = selectedCity
      ? calculateLocalTax(grossIncome, localJurisdictions.filter((j) => j.city === selectedCity), isResident)
      : { total: 0, details: [] };

    return {
      grossIncome,
      federalTax: federal.tax,
      ficaTax: fica.total,
      additionalMedicareTax: fica.additionalMedicare,
      stateTax: state.tax,
      localTax: local.total,
      totalTax: Math.round((federal.tax + fica.total + state.tax + local.total) * 100) / 100,
      afterTaxIncome: Math.round((grossIncome - federal.tax - fica.total - state.tax - local.total) * 100) / 100,
      effectiveRate:
        grossIncome > 0
          ? Math.round(((federal.tax + fica.total + state.tax + local.total) / grossIncome) * 10000) / 100
          : 0,
      marginalRate: Math.round(federal.marginalRate * 10000) / 100,
    };
  }, [mode, targetAfterTax, filingStatus, stateCode, taxYear, isSelfEmployed, selectedCity, isResident, localJurisdictions]);

  const renderTaxResult = (result: {
    grossIncome?: number;
    federalTax: number;
    ficaTax: number;
    additionalMedicareTax: number;
    stateTax: number;
    localTax: number;
    totalTax: number;
    afterTaxIncome: number;
    effectiveRate: number;
    marginalRate: number;
  }, label?: string) => (
    <div className="space-y-3">
      {result.grossIncome !== undefined && (
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-blue-600 mb-1">Required Gross Income</p>
          <p className="text-2xl font-bold text-blue-900">${result.grossIncome.toLocaleString()}</p>
        </div>
      )}
      <div className="bg-green-50 rounded-lg p-3">
        <p className="text-xs text-green-600">After-Tax Income (Take-Home Pay)</p>
        <p className="text-lg font-semibold text-green-700">${result.afterTaxIncome.toLocaleString()}</p>
      </div>
      <div className="bg-red-50 rounded-lg p-3">
        <p className="text-xs text-red-600">Total Tax</p>
        <p className="text-lg font-semibold text-red-700">${result.totalTax.toLocaleString()}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-gray-50 rounded p-2">
          <p className="text-xs text-gray-500">Federal Income Tax</p>
          <p className="font-semibold">${result.federalTax.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 rounded p-2">
          <p className="text-xs text-gray-500">FICA (SS + Medicare)</p>
          <p className="font-semibold">${result.ficaTax.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 rounded p-2">
          <p className="text-xs text-gray-500">State Tax</p>
          <p className="font-semibold">${result.stateTax.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 rounded p-2">
          <p className="text-xs text-gray-500">Local Tax</p>
          <p className="font-semibold">${result.localTax.toLocaleString()}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-gray-50 rounded p-2">
          <p className="text-xs text-gray-500">Effective Tax Rate</p>
          <p className="font-semibold">{result.effectiveRate}%</p>
        </div>
        <div className="bg-gray-50 rounded p-2">
          <p className="text-xs text-gray-500">Marginal Tax Rate</p>
          <p className="font-semibold">{result.marginalRate}%</p>
        </div>
      </div>
      {result.additionalMedicareTax > 0 && (
        <div className="bg-yellow-50 rounded p-2 text-sm">
          <p className="text-xs text-yellow-600">Includes Additional Medicare Tax</p>
          <p className="font-semibold text-yellow-700">${result.additionalMedicareTax.toLocaleString()}</p>
        </div>
      )}
    </div>
  );

  return (
    <CalculatorLayout
      title="US Tax Calculator"
      description="Estimate your federal, state, FICA, and local taxes. Forward calculator: see your take-home pay. Reverse calculator: find the gross income needed for your target after-tax income."
      path="/us-tax-calculator"
      relatedCalculators={[
        { title: 'Retirement Savings Calculator', path: '/retirement-savings-calculator' },
        { title: 'Compound Interest Calculator', path: '/compound-interest-calculator' },
        { title: 'Savings Goal Calculator', path: '/savings-goal-calculator' },
        { title: 'Inflation Calculator', path: '/inflation-calculator' },
      ]}
      faqs={[
        {
          question: 'How accurate is this tax calculator?',
          answer:
            'This calculator provides estimates using official IRS tax brackets, standard deductions, FICA rates, and state tax data for 2025 and 2026. It covers all 50 states and major local tax jurisdictions. However, it does not account for itemized deductions, tax credits, capital gains, or self-employment deductions. Consult a CPA or tax professional for precise calculations.',
        },
        {
          question: 'What is the difference between marginal and effective tax rate?',
          answer:
            'Your marginal tax rate is the rate on your last dollar of income — the highest bracket you fall into. Your effective tax rate is your total tax divided by total income. For example, a single filer earning $100,000 in 2025 has a 22% marginal rate but only about 15% effective rate.',
        },
        {
          question: 'Does this include Social Security and Medicare taxes?',
          answer:
            'Yes. FICA taxes include Social Security (6.2% up to the annual wage base — $176,100 in 2025) and Medicare (1.45% on all earnings, plus an additional 0.9% above $200,000 for single filers). Self-employed individuals pay both the employee and employer portions (15.3% total).',
        },
        {
          question: 'Which states have no income tax?',
          answer:
            'Nine states have no state income tax: Alaska, Florida, Nevada, New Hampshire (taxes interest/dividends only), South Dakota, Tennessee, Texas, Washington (taxes capital gains over $250K), and Wyoming.',
        },
        {
          question: 'What local taxes are included?',
          answer:
            'This calculator includes local income taxes for major cities and counties in 16 states, including NYC, Yonkers, Philadelphia, Pittsburgh, Cleveland, Columbus, Cincinnati, Detroit, Louisville, Baltimore, Kansas City, St. Louis, Portland (OR), and Denver, plus all 92 Indiana counties.',
        },
      ]}
    >
      <div className="space-y-6">
        {/* Mode toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setMode('forward')}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition ${
              mode === 'forward' ? 'bg-white shadow text-blue-600' : 'text-gray-500'
            }`}
          >
            Forward: Income Tax
          </button>
          <button
            onClick={() => setMode('reverse')}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition ${
              mode === 'reverse' ? 'bg-white shadow text-blue-600' : 'text-gray-500'
            }`}
          >
            Reverse: Target Take-Home
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {mode === 'forward' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gross Annual Income ($)</label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value) || 0)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Target After-Tax Income ($)</label>
                <input
                  type="number"
                  value={targetAfterTax}
                  onChange={(e) => setTargetAfterTax(Number(e.target.value) || 0)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filing Status</label>
              <select
                value={filingStatus}
                onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {Object.entries(FILING_STATUS_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <select
                  value={stateCode}
                  onChange={(e) => {
                    setStateCode(e.target.value);
                    setSelectedCity('');
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {ALL_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tax Year</label>
                <select
                  value={taxYear}
                  onChange={(e) => setTaxYear(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={2025}>2025</option>
                  <option value={2026}>2026</option>
                </select>
              </div>
            </div>

            {localJurisdictions.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City / County (optional)</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">— None —</option>
                  {localJurisdictions.map((j) => (
                    <option key={j.city} value={j.city}>{j.city}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isSelfEmployed}
                  onChange={(e) => setIsSelfEmployed(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">Self-Employed</span>
              </label>
              {selectedCity && (
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isResident}
                    onChange={(e) => setIsResident(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-700">Resident</span>
                </label>
              )}
            </div>
          </div>

          <div>
            {mode === 'forward' && forwardResult && renderTaxResult(forwardResult)}
            {mode === 'reverse' && reverseResult && renderTaxResult(reverseResult)}
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
