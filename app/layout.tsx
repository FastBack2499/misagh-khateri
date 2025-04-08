import type { Metadata } from "next";
import "./globals.css";
import usePathname from "@/app/lib/usePathname";

const pathname = usePathname

export const metadata: Metadata = {
  title: "Misagh Khateri",
  description: "Misagh Khateri Financial Advisor",
  alternates: {
    canonical: `https://www.misagh-khateri.info${pathname}`
  }
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
