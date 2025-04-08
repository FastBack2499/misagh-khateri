import type { Metadata } from "next";
import "./globals.css";
import usePathname from "@/app/lib/usePathname";

const pathname = usePathname

export const metadata: Metadata = {
  title: "Misagh Khateri – Experienced Financial Adviser Specializing in Banking and Market Analysis",
  description: "Explore the professional portfolio of Misagh Khateri, a San Francisco-based financial adviser with over a decade of experience in banking, trading, and financial market analysis. Discover services ranging from SWIFT transactions to client portfolio management.",
  alternates: {
    canonical: `https://www.misagh-khateri.info${pathname}`
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
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
