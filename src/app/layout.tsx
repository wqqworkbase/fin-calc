import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinCalc - Free Online Financial Calculators",
  description: "Free online financial calculators. Compound interest, retirement savings, loan amortization, tax calculator and more. No sign-up required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
