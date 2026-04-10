"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

export default function FAQ({ items, title = "Veelgestelde vragen" }: { items: FaqItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1f3d] mb-8">{title}</h2>
        <div className="space-y-3 max-w-3xl">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-[#0f1f3d] text-sm sm:text-base">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-[#1d6fe8] shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
