import type { Metadata } from "next";
import "./globals.css";
import usePathname from "@/app/lib/usePathname";
import Script from "next/script";

const pathname = usePathname

export const metadata: Metadata = {
  openGraph: {
    title: 'Misagh Khateri – Experienced Financial Adviser Specializing in Banking and Market Analysis',
    description: 'Explore the professional portfolio of Misagh Khateri, a San Francisco-based financial adviser with over a decade of experience in banking, trading, and financial market analysis. Discover services ranging from SWIFT transactions to client portfolio management.',
    images: [
      {
        url: "https://www.misagh-khateri.info/preview.png",
        width: 1200,
        height: 630,
      }
    ]
  },
  title: "Misagh Khateri – Experienced Financial Adviser Specializing in Banking and Market Analysis",
  description: "Explore the professional portfolio of Misagh Khateri, a San Francisco-based financial adviser with over a decade of experience in banking, trading, and financial market analysis. Discover services ranging from SWIFT transactions to client portfolio management.",
  alternates: {
    canonical: `https://www.misagh-khateri.info/`
  },
  keywords: [
    "Financial Adviser", "Banking Services", "Market Analysis", "SWIFT Transactions", "Client Portfolio Management", "Financial Consulting", "San Francisco Finance Professional", "Investment Strategies", "Budgeting and Forecasting", "Wealth Management"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="canonical"
          hrefLang="en-US"
          href="https://www.misagh-khateri.info/"
          key="canonical"
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Misagh Khateri",
              "url": "https://www.misagh-khateri.info",
              "image": "https://www.misagh-khateri.info/preview.png",
              "jobTitle": "Financial Adviser",
              "author": {
                "@type": "Person",
                "name": "Roham Esmaeili"
              }
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
