import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smit-installatie-techniek.nl"),
  title: "Loodgieter & dakdekker 't Gooi | SMIT Installatie Techniek",
  description:
    "SMIT Installatie Techniek uit Kortenhoef: loodgieter, dakdekker en cv-monteur in Hilversum, Wijdemeren en heel 't Gooi. Snel ter plaatse. Bel 06-29528454.",
  keywords: "loodgieter, dakdekker, cv-monteur, installateur, zinkwerk, sanitair, gasinstallatie, Kortenhoef, Hilversum, Wijdemeren, 't Gooi",
  verification: {
    google: "z-dNvaC4bgMJbIrFHdioMbhvjkWl7xEjumcJ0KLBLhg",
  },
  alternates: {
    canonical: "https://www.smit-installatie-techniek.nl",
  },
  openGraph: {
    title: "Loodgieter & dakdekker in 't Gooi | SMIT Installatie Techniek",
    description: "Kevin Smit uit Kortenhoef: dakwerk, zinkwerk, sanitair, CV en gas in Hilversum, Wijdemeren en heel 't Gooi. Snel ter plaatse.",
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
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
