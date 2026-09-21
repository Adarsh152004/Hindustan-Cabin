'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';

// ─── High-Quality Curated Slides ──────────────────────────────────────────────
const slides = [
  {
    id: 1,
    image: '/images/hero-bg-1.jpg',
    tag: 'Direct Manufacturer · Mumbai & Thane',
    title: 'Engineered Portable Cabins & Site Offices',
    desc: 'Heavy-duty GI & MS steel construction, thermally insulated and ready to deploy in hours.',
  },
  {
    id: 2,
    image: '/images/hero-bg-2.jpg',
    tag: 'Custom Industrial Fabrication',
    title: 'Prefabricated Storage & Cargo Containers',
    desc: 'Marine-grade Cor-Ten steel units built for extreme weather durability and site security.',
  },
  {
    id: 3,
    image: '/images/hero-bg-3.jpg',
    tag: 'Turnkey Commercial Workspaces',
    title: 'Modern Modular Container Offices',
    desc: 'Fully equipped executive office spaces with electrical wiring, AC provisions, and premium interiors.',
  },
  {
    id: 4,
    image: '/images/hero2.png',
    tag: 'Reliable Site Infrastructure',
    title: 'Security Cabins & Mobile Accommodations',
    desc: 'Compact, 360° visibility checkposts and living house cabins built for 15+ years lifespan.',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Fast auto-change (3.8 seconds for brisk, responsive feel)
  const SLIDE_DURATION = 3800;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goTo = (index) => {
    setCurrent(index);
  };

  // ── Auto-play Fast Slider ───────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      next();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[82svh] min-h-[520px] max-h-[820px] bg-gray-950 text-white overflow-hidden flex flex-col justify-between select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Website Hero Banner"
    >
      {/* ── Background Image Slider with Smooth Scale & Dynamic Transition ──── */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={`hero-bg-${slide.id}`}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{
            opacity: { duration: 0.8, ease: 'easeOut' },
            scale: { duration: 4.5, ease: 'easeOut' },
          }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />

          {/* Deep Cinematic Gradients */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, rgba(8,8,12,0.85) 0%, rgba(8,8,12,0.6) 50%, rgba(8,8,12,0.2) 100%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 35%, rgba(8,8,12,0.8) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Desktop-Only Left Arrow (Hidden on Mobile) ───────────────────────── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/75 border border-white/20 text-white items-center justify-center transition-all duration-300 backdrop-blur-md hover:scale-110 shadow-2xl focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* ── Desktop-Only Right Arrow (Hidden on Mobile) ──────────────────────── */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/75 border border-white/20 text-white items-center justify-center transition-all duration-300 backdrop-blur-md hover:scale-110 shadow-2xl focus:outline-none"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ── Main Banner Content (Clean, Small Text & Contact Button) ─────────── */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto w-full pt-28 sm:pt-32 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`hero-text-${slide.id}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            {/* Small Subtle Category Tag */}
            <p className="text-white/80 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              <span>{slide.tag}</span>
            </p>

            {/* Concise Title (Clean & Modern) */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] mb-3.5 drop-shadow-md">
              {slide.title}
            </h1>

            {/* Small Concise 1-Line Description */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-xl font-normal">
              {slide.desc}
            </p>

            {/* Clean Contact Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              {/* Primary Contact Button */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-300 shadow-xl hover:shadow-red-950/50"
                style={{
                  background: '#8B1A1A',
                  border: '1px solid rgba(255,255,255,0.25)',
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
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Quick Call Action */}
              <a
                href="tel:+918692943939"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium text-xs sm:text-sm text-gray-200 transition-all duration-300 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Phone className="w-3.5 h-3.5 text-white/90" />
                <span>+91-8692943939</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Minimal Clean Dots at Bottom Center (No Yellow Boxes) ────────────── */}
      <div className="relative z-20 pb-8 flex justify-center items-center gap-2">
        {slides.map((s, idx) => {
          const isActive = idx === current;
          return (
            <button
              key={s.id}
              onClick={() => goTo(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                isActive
                  ? 'w-8 bg-white shadow-md'
                  : 'w-2 bg-white/35 hover:bg-white/70'
              }`}
            />
          );
        })}
      </div>

      {/* ── Mobile Floating Instant Call Button ──────────────────────────────── */}
      <a
        href="tel:+918692943939"
        className="hero-call-btn fixed bottom-6 right-4 z-50 lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-white text-xs font-semibold shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #8B1A1A 0%, #c0392b 100%)',
          border: '1px solid rgba(255,255,255,0.3)',
        }}
        aria-label="Call Hindustan Cabin"
      >
        <Phone className="w-3.5 h-3.5 text-white" />
        <span>Call Now</span>
      </a>
    </section>
  );
}
