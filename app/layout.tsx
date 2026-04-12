import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smit-installatie-techniek.nl"),
  title: "SMIT Installatie Techniek | Dakwerk, Zinkwerk, Sanitair & Installatie",
  description:
    "Uw gecertificeerde installateur in Kortenhoef. Betrouwbaar, snel en professioneel — altijd netjes achtergelaten. Dakwerk, zinkwerk, sanitair, water, CV-installatie en gas.",
  keywords: "installateur, dakwerk, zinkwerk, sanitair, CV-installatie, gas, Kortenhoef, Hilversum, Loosdrecht",
  verification: {
    google: "F2X3tjIgBh0RCvpVG7gQu5XlbLGc-6asJhDVLkpk-5Q",
  },
  alternates: {
    canonical: "https://www.smit-installatie-techniek.nl",
  },
  openGraph: {
    title: "SMIT Installatie Techniek",
    description: "Vakwerk in dak, zink, sanitair en installatie.",
    url: "https://www.smit-installatie-techniek.nl",
    siteName: "SMIT Installatie Techniek",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
