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
    "Gecertificeerd installateur in Kortenhoef voor dakwerk, zinkwerk, sanitair, CV en gas. Betrouwbaar, snel en vakkundig. Bel 06-29528454.",
  keywords: "installateur, dakwerk, zinkwerk, sanitair, CV-installatie, gas, Kortenhoef, Hilversum, Loosdrecht",
  verification: {
    google: "z-dNvaC4bgMJbIrFHdioMbhvjkWl7xEjumcJ0KLBLhg",
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
