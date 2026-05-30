import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FinCalc - Free Online Financial Calculators",
    template: "%s | FinCalc",
  },
  description:
    "Free online financial calculators for compound interest, retirement savings, loan amortization, tax estimation, and more. All calculations run locally in your browser — no sign-up required.",
  keywords: [
    "financial calculator",
    "compound interest calculator",
    "retirement calculator",
    "loan calculator",
    "tax calculator",
    "free online calculator",
    "mortgage calculator",
    "investment calculator",
  ],
  metadataBase: new URL("https://fincalc.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "FinCalc - Free Online Financial Calculators",
    description: "Free online financial calculators. No sign-up required. All calculations run locally in your browser.",
    url: "https://fincalc.com",
    siteName: "FinCalc",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinCalc - Free Online Financial Calculators",
    description: "Free online financial calculators. No sign-up required.",
  },
  verification: {
    google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Google AdSense — replace with real publisher ID after approval */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
        {/* Google Analytics — replace with real GA4 measurement ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "FinCalc",
              url: "https://fincalc.com",
              description: "Free online financial calculators.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://fincalc.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
