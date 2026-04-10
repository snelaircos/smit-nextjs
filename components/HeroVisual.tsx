"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/project-dakwerk.png", label: "Dakwerk & Lichtkoepels", cat: "Dakwerk" },
  { src: "/project-cv-ketel.png", label: "CV-Ketel Installatie", cat: "CV-installatie" },
  { src: "/project-vloerverwarming.png", label: "Vloerverwarming Aanleg", cat: "CV-installatie" },
  { src: "/project-zink-deklijsten.png", label: "Zink & Daklijsten", cat: "Zinkwerk" },
  { src: "/project-dakkapel-zink.png", label: "Dakkapel & Zinkwerk", cat: "Zinkwerk" },
];

export default function HeroVisual() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative hidden lg:block" style={{ height: "570px" }}>

      {/* ── Slideshow square — achtergrond linksboven ─────────── */}
      <div
        className="absolute top-0 left-0 rounded-2xl overflow-hidden shadow-2xl z-0 bg-[#0a1628]"
        style={{ width: "83%", aspectRatio: "1 / 1" }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.label}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-[#0f1f3d]/25" />
          </div>
        ))}

        {/* Label bovenaan */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#0a1628]/85 to-transparent p-4 z-10">
          <div className="flex items-center gap-2">
            <span className="bg-[#1d6fe8] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
              {slides[current].cat}
            </span>
            <span className="text-white text-sm font-semibold drop-shadow">
              {slides[current].label}
            </span>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-3.5 right-4 flex gap-1.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-5 bg-white" : "w-1.5 bg-white/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Bus — transparante PNG, zweeft rechtsonder ────────── */}
      <div
        className="absolute z-20"
        style={{
          bottom: "-65px",
          right: "-24px",
          width: "78%",
          filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.55))",
        }}
      >
        <Image
          src="/bus-smit.png"
          alt="SMIT Installatie Techniek bedrijfsbus"
          width={2000}
          height={2000}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* ── Ronde badge — net over rechterrand slideshow ─────── */}
      {/* Slideshow is 70% breed → rechterrand op left:70%      */}
      {/* Badge gecentreerd op left: calc(70% - 44px) zodat     */}
      {/* ~44px overlapt en de rest buiten de slideshow valt     */}
      <div
        className="absolute z-30"
        style={{ top: "-18px", left: "calc(83% - 44px)" }}
      >
        {/* Outer ring */}
        <div
          className="flex items-center justify-center"
          style={{
            width: "132px",
            height: "132px",
            borderRadius: "50%",
            background: "conic-gradient(from 200deg, #1d6fe8 0%, #0b4fa8 40%, #1d6fe8 70%, #0b4fa8 100%)",
            boxShadow: "0 0 0 4px rgba(255,255,255,0.15), 0 10px 48px rgba(13,42,100,0.75)",
          }}
        >
          {/* Inner circle */}
          <div
            className="flex flex-col items-center justify-center text-center text-white"
            style={{
              width: "114px",
              height: "114px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 40% 35%, #2878f0, #0f4fc0)",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "#a8ceff",
                lineHeight: 1.15,
              }}
            >
              Snelle
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "#a8ceff",
                lineHeight: 1.15,
                marginBottom: "3px",
              }}
            >
              Service
            </span>
            <span
              style={{
                fontSize: "34px",
                fontWeight: 900,
                lineHeight: 1,
                color: "#ffffff",
              }}
            >
              24u
            </span>
            <span
              style={{
                fontSize: "9px",
                color: "#c2d9ff",
                lineHeight: 1.3,
                marginTop: "3px",
                fontWeight: 500,
              }}
            >
              Binnen 24u
            </span>
            <span
              style={{
                fontSize: "9px",
                color: "#c2d9ff",
                lineHeight: 1.3,
                fontWeight: 500,
              }}
            >
              aanwezig
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
