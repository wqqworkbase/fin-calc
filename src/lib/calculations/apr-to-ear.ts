export function aprToEAR(apr: number, compoundFrequency: number): number {
  return Math.pow(1 + apr / compoundFrequency, compoundFrequency) - 1;
}

export function earToDaily(ear: number): number {
  return Math.pow(1 + ear, 1 / 365) - 1;
}

export function earToMonthly(ear: number): number {
  return Math.pow(1 + ear, 1 / 12) - 1;
}

export function generateAPRFAQs() {
  return [
    {
      question: 'What is the difference between APR and EAR?',
      answer:
        'APR (Annual Percentage Rate) is the nominal or "stated" rate without compounding. EAR (Effective Annual Rate) accounts for compounding and represents the true annual cost or return. EAR is always higher than APR when compounding occurs more than once per year. For example, a 5% APR compounded daily has an EAR of about 5.13%.',
    },
    {
      question: 'Why does EAR matter for loans and credit cards?',
      answer:
        'EAR reveals the true rate you are paying. Credit card APRs typically compound daily, meaning your effective rate is higher than the stated APR. Two loans with the same APR but different compounding frequencies have different true costs — the one with more frequent compounding costs more.',
    },
    {
      question: 'How is EAR used for investments?',
      answer:
        'For investments, EAR (also called APY — Annual Percentage Yield) tells you your true annual return after compounding. A savings account advertising "5% APR compounded daily" actually pays about 5.13% APY. This calculator helps you compare products with different compounding schedules.',
    },
    {
      question: 'What is continuous compounding?',
      answer:
        'Continuous compounding is the mathematical limit of compounding infinitely often. The formula is EAR = e^APR — 1. For a 5% APR, continuous compounding yields about 5.127% EAR. While not used in consumer products, it is an important concept in financial mathematics and derivatives pricing.',
    },
  ];
}
