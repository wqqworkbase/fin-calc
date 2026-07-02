'use client';
import { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import FormattedAmount from '@/components/FormattedAmount';
import SalaryToHourlyArticle from '@/components/articles/SalaryToHourlyArticle';
import { salaryToHourly, hourlyToSalary, calculateOvertimePay, generateSalaryFAQs } from '@/lib/calculations/salary-to-hourly';

export default function SalaryToHourlyCalculator() {
  const [mode, setMode] = useState<'salary' | 'hourly'>('salary');
  const [salary, setSalary] = useState(75000);
  const [hourly, setHourly] = useState(35);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(52);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [overtimeMultiplier, setOvertimeMultiplier] = useState(1.5);

  const salaryResult = useMemo(() => salaryToHourly(salary, hoursPerWeek, weeksPerYear), [salary, hoursPerWeek, weeksPerYear]);
  const hourlyResult = useMemo(() => hourlyToSalary(hourly, hoursPerWeek, weeksPerYear), [hourly, hoursPerWeek, weeksPerYear]);
  const overtimeResult = useMemo(() => calculateOvertimePay(mode === 'salary' ? salaryResult.hourly : hourly, hoursPerWeek, overtimeHours, overtimeMultiplier), [salaryResult.hourly, hourly, hoursPerWeek, overtimeHours, overtimeMultiplier]);

  return (
    <CalculatorLayout title="Salary to Hourly Converter" description="Convert annual salary to hourly rate or hourly wage to annual salary. Compare job offers and understand your true hourly pay."
      path="/salary-to-hourly-calculator" faqs={generateSalaryFAQs()} article={<SalaryToHourlyArticle />}
      relatedCalculators={[{ title: 'US Tax Calculator', path: '/us-tax-calculator' }, { title: 'Savings Goal', path: '/savings-goal-calculator' }]}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button onClick={() => setMode('salary')} className={`flex-1 py-1.5 rounded-md text-xs font-medium transition ${mode === 'salary' ? 'bg-white shadow text-emerald-600' : 'text-gray-500'}`}>Salary → Hourly</button>
            <button onClick={() => setMode('hourly')} className={`flex-1 py-1.5 rounded-md text-xs font-medium transition ${mode === 'hourly' ? 'bg-white shadow text-emerald-600' : 'text-gray-500'}`}>Hourly → Salary</button>
          </div>
          {mode === 'salary' ? (
            <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Annual Salary ($)</label><input type="text" inputMode="decimal" autoComplete="off" value={salary} onChange={e => setSalary(parseFloat(e.target.value) || 0)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
          ) : (
            <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Hourly Rate ($)</label><input type="text" inputMode="decimal" autoComplete="off" value={hourly} onChange={e => setHourly(parseFloat(e.target.value) || 0)} step="0.01" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
          )}
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Hours/Week</label><input type="text" inputMode="decimal" autoComplete="off" value={hoursPerWeek} onChange={e => setHoursPerWeek(parseFloat(e.target.value) || 1)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
            <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">Weeks/Year</label><input type="text" inputMode="decimal" autoComplete="off" value={weeksPerYear} onChange={e => setWeeksPerYear(parseFloat(e.target.value) || 1)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">OT Hours/Week</label><input type="text" inputMode="decimal" autoComplete="off" value={overtimeHours} onChange={e => setOvertimeHours(parseFloat(e.target.value) || 0)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400" /></div>
            <div><label className="block text-sm font-semibold text-gray-900 mb-1.5">OT Multiplier</label><select value={overtimeMultiplier} onChange={e => setOvertimeMultiplier(parseFloat(e.target.value))} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400"><option value={1.5}>1.5x</option><option value={2}>2x</option><option value={2.5}>2.5x</option></select></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-emerald-50 rounded-xl p-4">
            <p className="text-sm text-emerald-600 mb-1">{mode === 'salary' ? 'Hourly Rate' : 'Annual Salary'}</p>
            <p className="text-2xl font-bold text-emerald-700">{mode === 'salary' ? `$${salaryResult.hourly}/hr` : `$${hourlyResult.annually.toLocaleString()}/yr`}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-400">Monthly</p><FormattedAmount value={mode === 'salary' ? salaryResult.monthly : hourlyResult.monthly} size="md" className="text-gray-800" /></div>
            <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-400">Weekly</p><FormattedAmount value={mode === 'salary' ? salaryResult.weekly : hourlyResult.weekly} size="md" className="text-gray-800" /></div>
          </div>
          {overtimeHours > 0 && (
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="text-sm text-amber-600 mb-1">With {overtimeHours}hr OT/week</p>
              <p className="text-lg font-semibold text-amber-700">+${overtimeResult.overtimePay.toLocaleString()}/week</p>
              <p className="text-xs text-amber-500 mt-1">Total: ${overtimeResult.totalPay.toLocaleString()}/week</p>
            </div>
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
}
