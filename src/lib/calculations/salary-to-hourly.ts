export function salaryToHourly(
  salary: number,
  hoursPerWeek: number,
  weeksPerYear: number
): { hourly: number; daily: number; weekly: number; monthly: number; annually: number } {
  const totalHours = hoursPerWeek * weeksPerYear;
  const hourly = totalHours > 0 ? salary / totalHours : 0;
  return {
    hourly: Math.round(hourly * 100) / 100,
    daily: Math.round(hourly * hoursPerWeek / 5 * 100) / 100,
    weekly: Math.round(hourly * hoursPerWeek * 100) / 100,
    monthly: Math.round(salary / 12 * 100) / 100,
    annually: Math.round(salary * 100) / 100,
  };
}

export function hourlyToSalary(
  hourly: number,
  hoursPerWeek: number,
  weeksPerYear: number
): { annually: number; monthly: number; weekly: number } {
  const annually = hourly * hoursPerWeek * weeksPerYear;
  return {
    annually: Math.round(annually * 100) / 100,
    monthly: Math.round(annually / 12 * 100) / 100,
    weekly: Math.round(hourly * hoursPerWeek * 100) / 100,
  };
}

export function calculateOvertimePay(
  baseHourly: number,
  regularHours: number,
  overtimeHours: number,
  overtimeMultiplier: number
): { regularPay: number; overtimePay: number; totalPay: number } {
  const regularPay = baseHourly * regularHours;
  const overtimePay = baseHourly * overtimeHours * overtimeMultiplier;
  return {
    regularPay: Math.round(regularPay * 100) / 100,
    overtimePay: Math.round(overtimePay * 100) / 100,
    totalPay: Math.round((regularPay + overtimePay) * 100) / 100,
  };
}

export function generateSalaryFAQs() {
  return [
    {
      question: 'How do I convert annual salary to hourly rate?',
      answer: 'Divide your annual salary by the number of hours worked per year. For a standard full-time job (40 hours/week × 52 weeks = 2,080 hours), a $50,000 salary works out to approximately $24.04/hour. This calculator lets you adjust both hours and weeks.',
    },
    {
      question: 'How many weeks per year should I use?',
      answer: 'If you get 2 weeks of paid vacation, use 50 weeks. If unpaid time off, use 52 weeks for gross comparison. Typically 2,080 hours (40 hrs × 52 wks) is the standard benchmark for full-time salary-to-hourly conversion.',
    },
    {
      question: 'Does this include benefits and taxes?',
      answer: 'No — this calculator shows gross (pre-tax) conversion. Benefits like health insurance, 401(k) match, and paid time off can add 20-40% to total compensation. Factor those in separately when comparing job offers.',
    },
  ];
}
