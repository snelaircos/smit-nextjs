"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Waarom SMIT", href: "#waarom-smit" },
  { label: "Projecten", href: "#portfolio" },
  { label: "Klanten", href: "#klanten" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0f1f3d] text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-[1120px] mx-auto flex justify-between items-center">
          <a href="tel:0629528454" className="hover:text-blue-300 transition-colors">
            Bel ons: 06-29528454
          </a>
          <div className="flex gap-6 text-xs text-gray-300">
            <span>Snel ter plaatse in Kortenhoef e.o.</span>
            <span>Gecertificeerd Vakmanschap</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/logo.svg" alt="SMIT Installatie Techniek" width={120} height={44} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#1d6fe8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#0f1f3d] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#1a2f5a] transition-colors"
            >
              Contact opnemen
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <span className="block w-6 h-0.5 bg-current transition-all" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
            <nav className="flex flex-col gap-3 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 py-2 border-b border-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 bg-[#0f1f3d] text-white text-sm font-semibold px-5 py-3 rounded-lg text-center"
                onClick={() => setMenuOpen(false)}
              >
                Contact opnemen
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
