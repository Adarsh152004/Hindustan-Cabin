'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// ─── Slide Data (Modeled after hindustancabins.co.in + All User Images) ───────
const slides = [
  {
    id: 1,
    image: '/images/hero2.png',
    miniTitle: 'Hindustan Cabin · Direct Manufacturer',
    title: 'Portable Cabins, Built to Last',
    subtitle:
      'Durable, functional, and stylish portable solutions for offices, homes, security, and more. Engineered with heavy-duty GI steel and premium insulation.',
    cta: { label: 'Explore Products', href: '/products' },
    ctaSecondary: { label: 'Call Now', href: 'tel:+917942969777' },
  },
  {
    id: 2,
    image: '/images/hero3.png',
    miniTitle: 'Hindustan Cabin · Custom Fabrication',
    title: 'Your Space, Anywhere You Need It',
    subtitle:
      'Custom-designed portable cabins that combine mobility with comfort and practicality. Built for infrastructure, construction, and tough industrial sites.',
    cta: { label: 'View All Products', href: '/products' },
    ctaSecondary: { label: 'Get Free Quote', href: '/contact' },
  },
  {
    id: 3,
    image: '/images/hero.webp',
    miniTitle: 'Hindustan Cabin · Turnkey Engineering',
    title: 'Innovation in Every Cabin',
    subtitle:
      'Modern, high-quality cabins tailored for work, living, and commercial use. Complete with turnkey interiors, false ceilings, and plumbing.',
    cta: { label: 'Explore Living Cabins', href: '/products' },
    ctaSecondary: { label: 'Get Free Quote', href: '/contact' },
  },
  {
    id: 4,
    image: '/images/hero4.jpg',
    miniTitle: 'Hindustan Cabin · Heavy Duty Build',
    title: 'Industrial Weatherproof Cabins',
    subtitle:
      'High-gauge corrugated steel with marine epoxy coating. Built to withstand 150 km/h wind loads, extreme monsoon rains, and heavy site duty.',
    cta: { label: 'View Industrial Units', href: '/products' },
    ctaSecondary: { label: 'Call Now', href: 'tel:+917942969777' },
  },
  {
    id: 5,
    image: '/images/color-coated-cabin.jpg',
    miniTitle: 'Hindustan Cabin · Security Solutions',
    title: 'Color-Coated Security Cabins',
    subtitle:
      'Compact, aesthetic guard checkposts with 360-degree glass visibility, pre-fitted switchboards, and weather-shield canopy for 24/7 duty.',
    cta: { label: 'Explore Cabins', href: '/products' },
    ctaSecondary: { label: 'Get Free Quote', href: '/contact' },
  },
  {
    id: 6,
    image: '/GI-Portable-Cabin.jpg',
    miniTitle: 'Hindustan Cabin · Proven Reliability',
    title: 'Engineered GI Portable Cabins',
    subtitle:
      'Galvanized iron shell with high-density thermal insulation. Keeps interiors cool during peak summers and 100% dry in monsoons. 10+ years rated lifespan.',
    cta: { label: 'Explore GI Cabins', href: '/products' },
    ctaSecondary: { label: 'Call Now', href: 'tel:+917942969777' },
  },
  {
    id: 7,
    image: '/MS-Old-Cargo-Container.jpg',
    miniTitle: 'Hindustan Cabin · Heavy Storage',
    title: 'Watertight Corten Cargo Containers',
    subtitle:
      'Marine-grade watertight cargo containers for heavy site storage, secure tool lockers, and relocatable warehousing. Stackable and tamper-proof.',
    cta: { label: 'View Storage Units', href: '/products' },
    ctaSecondary: { label: 'Get Free Quote', href: '/contact' },
  },
];

// ─── Stats Data ───────────────────────────────────────────────────────────────
const stats = [
  { value: '7+', label: 'Years of Excellence' },
  { value: '500+', label: 'Products in Stock' },
  { value: '1,000+', label: 'Happy Clients' },
  { value: 'GST & ISO', label: 'Verified & Certified' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const DURATION = 5000;

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const goTo = (i) => {
    setCurrent(i);
  };

  // ─ Auto-play slider ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      next();
    }, DURATION);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full min-h-[100svh] bg-gray-950 text-white overflow-hidden flex flex-col justify-between selection:bg-[#8B1A1A] selection:text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background Image Slider with Smooth Cross-Fade & Ken Burns Effect ── */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={`hero-bg-${slide.id}`}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }}
          />

          {/* Deep Cinematic Overlay Matching hindustancabins.co.in style */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.4) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%, rgba(0,0,0,0.3) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ═════════════════════════════════════════════════════════════════════
          SIGNATURE VERTICAL PAGINATION (Exact style of hindustancabins.co.in)
          - Left-side vertical rail with compact extending lines & dots
          - Scaled down so it never reaches or overlaps the navbar
         ═════════════════════════════════════════════════════════════════════ */}
      <div className="absolute left-4 sm:left-6 lg:left-10 top-[53%] -translate-y-1/2 z-30 hidden lg:flex flex-col items-center pointer-events-auto">
        {/* Top Extending Gradient Line (Compact 28px) */}
        <div
          className="w-[2px] h-[28px] rounded-full"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 100%)',
          }}
        />

        {/* Vertical Dots with Compact Spacing */}
        <div className="flex flex-col gap-2.5 py-2">
          {slides.map((s, idx) => {
            const isActive = idx === current;
            return (
              <button
                key={s.id}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}: ${s.title}`}
                className="group relative w-6 h-6 flex items-center justify-center focus:outline-none"
              >
                {/* Active Outer Target Ring (Compact 24px circle with accent border) */}
                {isActive && (
                  <motion.span
                    layoutId="activeTargetRing"
                    className="absolute w-6 h-6 rounded-full border-2 border-[#D4A017] shadow-[0_0_10px_rgba(212,160,23,0.7)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}

                {/* Inner Dot (Compact 8px circle) */}
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#D4A017] shadow-[0_0_6px_#D4A017]'
                      : 'bg-white/60 group-hover:bg-[#D4A017] group-hover:scale-125'
                  }`}
                />

                {/* Slide-out Tooltip on Hover */}
                <span className="pointer-events-none absolute left-8 px-2.5 py-1 rounded-lg text-xs font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 shadow-2xl border border-white/20 backdrop-blur-md bg-black/90 z-50">
                  <span className="text-[#D4A017] mr-1.5 font-bold">0{idx + 1}</span>
                  <span>{s.title}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Extending Gradient Line (Compact 28px) */}
        <div
          className="w-[2px] h-[28px] rounded-full"
          style={{
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 100%)',
          }}
        />
      </div>

      {/* ── Main Hero Text Content ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-12 lg:pl-32 lg:pr-16 max-w-[1400px] mx-auto w-full pt-28 sm:pt-32 pb-8 lg:pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={`hero-text-${slide.id}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {/* Mini Title (matches .cs_hero_mini_title cs_accent_color) */}
            <h3 className="text-[#D4A017] text-sm sm:text-base md:text-lg font-semibold tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A017]" />
              <span>{slide.miniTitle}</span>
            </h3>

            {/* Main Headline (matches .cs_hero_title cs_fs_74) */}
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-5 drop-shadow-md">
              {slide.title}
            </h1>

            {/* Subtitle (matches .cs_hero_subtitle) */}
            <p className="text-gray-200 text-sm sm:text-base md:text-xl font-light leading-relaxed mb-8 max-w-2xl">
              {slide.subtitle}
            </p>

            {/* Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={slide.cta.href}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-lg font-bold text-white text-sm sm:text-base transition-all duration-300 shadow-xl"
                style={{
                  background: '#8B1A1A',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#a32020';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#8B1A1A';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>{slide.cta.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href={slide.ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-lg font-semibold text-sm sm:text-base text-white transition-all duration-300 border-2 border-white/70 hover:border-white hover:bg-white/10 backdrop-blur-sm"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {slide.ctaSecondary.href.startsWith('tel:') ? (
                  <Phone className="w-4 h-4 text-[#D4A017]" />
                ) : null}
                <span>{slide.ctaSecondary.label}</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Mobile Horizontal Dots (when screen is < lg) ── */}
      <div className="relative my-3 flex lg:hidden justify-center items-center gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative w-7 h-7 flex items-center justify-center focus:outline-none"
          >
            {i === current && (
              <span className="absolute w-7 h-7 rounded-full border-2 border-[#D4A017]" />
            )}
            <span
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? 'bg-[#D4A017]' : 'bg-white/60'
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── Bottom Docked Stats Bar (Responsive & Non-Overlapping) ── */}
      <div
        className="relative lg:absolute lg:bottom-0 left-0 right-0 z-30 w-full"
        style={{
          background: 'rgba(8, 8, 12, 0.88)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(212, 160, 23, 0.22)',
        }}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-3 sm:py-4 px-2 gap-0.5">
              <span
                className="text-lg sm:text-2xl font-extrabold leading-none text-[#D4A017]"
              >
                {s.value}
              </span>
              <span className="text-gray-300 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-center">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile Floating Instant Call Button ── */}
      <a
        href="tel:+917942969777"
        className="hero-call-btn fixed bottom-6 right-4 z-50 lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-white text-xs font-semibold shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #8B1A1A 0%, #c0392b 100%)',
          border: '1px solid rgba(255,255,255,0.3)',
        }}
      >
        <Phone className="w-3.5 h-3.5 text-amber-300" />
        <span>Call Now</span>
      </a>
    </section>
  );
}
