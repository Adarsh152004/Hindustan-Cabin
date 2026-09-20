'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// ─── All User Images & Catalog Slides ─────────────────────────────────────────
const slides = [
  {
    id: 1,
    image: '/images/hero2.png',
    badge: 'Trusted Since 2017 · Direct Manufacturer',
    title: 'Premium Modular',
    titleAccent: 'Cabins & Containers',
    subtitle:
      'Executive office cabins, security guard posts, pantry units & luxury container spaces — engineered for lifelong durability, delivered pan-India.',
    cta: { label: 'Explore Products', href: '/products' },
    ctaSecondary: { label: 'Get Free Quote', href: '/contact' },
    tag: 'Manufacturer · Dombivli Yard, Maharashtra',
  },
  {
    id: 2,
    image: '/images/hero3.png',
    badge: 'Built for Every Tough Site',
    title: 'From Construction Sites',
    titleAccent: 'to Industrial Plants',
    subtitle:
      'Heavy-gauge MS chassis, double sliding aluminum windows, and reinforced structural frames engineered to withstand 150 km/h wind loads and heavy monsoons.',
    cta: { label: 'View All Products', href: '/products' },
    ctaSecondary: { label: 'Call Us Now', href: 'tel:+917942969777' },
    tag: 'GI · MS · Prefabricated Heavy Structures',
  },
  {
    id: 3,
    image: '/images/hero.webp',
    badge: 'Luxury Series · Architectural Design',
    title: 'Contemporary Luxury',
    titleAccent: 'Container Homes',
    subtitle:
      'Turnkey modular living with designer interior paneling, false ceiling, fitted washroom, and thermal insulation. Fast delivery and relocatable anywhere.',
    cta: { label: 'Explore Products', href: '/products' },
    ctaSecondary: { label: 'Get Free Quote', href: '/contact' },
    tag: 'Modern Prefab Housing · Turnkey Living',
  },
  {
    id: 4,
    image: '/images/hero4.jpg',
    badge: 'Heavy Industrial Build',
    title: 'Weatherproof MS',
    titleAccent: 'Industrial Cabins',
    subtitle:
      'High-gauge corrugated steel shells coated with marine-grade epoxy primer. Zero water seepage, high security deadbolts, and fire-retardant thermal insulation.',
    cta: { label: 'View Industrial Cabins', href: '/products' },
    ctaSecondary: { label: 'Call Us Now', href: 'tel:+917942969777' },
    tag: 'GST: 27AAKFH1020R1Z6 · 100% Tax Compliant',
  },
  {
    id: 5,
    image: '/images/color-coated-cabin.jpg',
    badge: 'Immediate Dispatch · Ready Stock',
    title: 'Color-Coated',
    titleAccent: 'Security Guard Cabins',
    subtitle:
      'Aesthetic 360° visibility security booths with pre-fitted electrical switchboards, built-in writing console, and weatherproof canopy for 24/7 guard comfort.',
    cta: { label: 'Explore Cabins', href: '/products' },
    ctaSecondary: { label: 'Get Free Quote', href: '/contact' },
    tag: 'Factory Direct · 50+ Units Ready Stock',
  },
  {
    id: 6,
    image: '/GI-Portable-Cabin.jpg',
    badge: 'India’s Proven Standard',
    title: 'Engineered GI',
    titleAccent: 'Portable Cabins',
    subtitle:
      'Galvanized iron outer shell with high-density thermal insulation. Keeps interiors cool during peak summers and 100% dry during heavy monsoons.',
    cta: { label: 'View GI Cabins', href: '/products' },
    ctaSecondary: { label: 'Call Us Now', href: 'tel:+917942969777' },
    tag: 'Crane Lifting Eyes · 10+ Years Lifespan',
  },
  {
    id: 7,
    image: '/MS-Old-Cargo-Container.jpg',
    badge: 'Marine Grade Corten Steel',
    title: 'Watertight Corten',
    titleAccent: 'Cargo Containers',
    subtitle:
      'Industrial-grade shipping and storage containers for construction sites, inventory security, and safe equipment lockups. Stackable and relocatable.',
    cta: { label: 'View Storage Units', href: '/products' },
    ctaSecondary: { label: 'Get Free Quote', href: '/contact' },
    tag: 'Tamper-Proof Lockbox · High Security',
  },
];

// ─── Stats Bar Data ───────────────────────────────────────────────────────────
const stats = [
  { value: '7+', label: 'Years of Excellence' },
  { value: '500+', label: 'Products in Stock' },
  { value: '1,000+', label: 'Completed Sites' },
  { value: 'GST & ISO', label: 'Verified & Certified' },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 1.05,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 220, damping: 28 },
      opacity: { duration: 0.65 },
      scale: { duration: 1.2, ease: 'easeOut' },
    },
  },
  exit: (dir) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: 'spring', stiffness: 220, damping: 28 },
      opacity: { duration: 0.45 },
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const DURATION = 6000;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goTo = (i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
    setProgress(0);
  };

  // ─ Auto-play with smooth progress timer ────────────────────────────────────
  useEffect(() => {
    if (isPaused) return;
    const tick = 50;
    const step = 100 / (DURATION / tick);
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + step;
      });
    }, tick);
    return () => clearInterval(id);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-950 text-white select-none"
      style={{ minHeight: '100svh' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Top Dynamic Gradient Progress Bar ── */}
      <div
        className="absolute top-0 left-0 h-[3px] z-50 transition-none"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #8B1A1A 0%, #D4A017 50%, #f5cc6a 100%)',
          boxShadow: '0 0 10px rgba(212,160,23,0.7)',
        }}
      />

      {/* ── Sliding Full-Bleed Background Images ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`slide-${slide.id}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }}
          />

          {/* Cinematic Gradients for Crisp Text Legibility & Contrast */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.68) 48%, rgba(0,0,0,0.25) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.15) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Main Content ── */}
      <div
        className="relative z-20 flex-1 flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] mx-auto w-full pt-24 sm:pt-28 md:pt-32 pb-6 md:pb-32"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slide.id}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-5"
              style={{
                background: 'rgba(139,26,26,0.32)',
                border: '1px solid rgba(212,160,23,0.5)',
                color: '#f5cc6a',
                backdropFilter: 'blur(10px)',
              }}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>{slide.badge}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-extrabold text-white leading-[1.08] tracking-tight mb-3 sm:mb-5 text-2xl sm:text-4xl md:text-5xl xl:text-6xl"
            >
              {slide.title}
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #D4A017 40%, #ff8a65 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 14px rgba(212,160,23,0.35))',
                }}
              >
                {slide.titleAccent}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-gray-200 leading-relaxed mb-5 sm:mb-7 font-light text-xs sm:text-base md:text-lg max-w-xl"
            >
              {slide.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex flex-row flex-wrap gap-2.5 sm:gap-3.5 mb-5 sm:mb-7"
            >
              <Link
                href={slide.cta.href}
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl font-bold text-white text-xs sm:text-sm transition-all duration-300 shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #8B1A1A 0%, #b71c1c 50%, #8B1A1A 100%)',
                  boxShadow: '0 4px 20px rgba(139,26,26,0.6)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(139,26,26,0.85)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(139,26,26,0.6)';
                }}
              >
                <span>{slide.cta.label}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href={slide.ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {slide.ctaSecondary.href.startsWith('tel:') ? (
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
                ) : null}
                <span>{slide.ctaSecondary.label}</span>
              </Link>
            </motion.div>

            {/* Tag / Location */}
            <motion.p
              variants={fadeUp}
              custom={0.4}
              className="text-gray-300 text-[11px] sm:text-sm font-medium flex items-center gap-1.5"
            >
              <span>📍</span>
              <span>{slide.tag}</span>
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Desktop & Tablet Navigation Arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex w-12 h-12 items-center justify-center rounded-full transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1.5px solid rgba(255,255,255,0.22)',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(139,26,26,0.85)';
          e.currentTarget.style.borderColor = 'rgba(212,160,23,0.7)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
        }}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex w-12 h-12 items-center justify-center rounded-full transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1.5px solid rgba(255,255,255,0.22)',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(139,26,26,0.85)';
          e.currentTarget.style.borderColor = 'rgba(212,160,23,0.7)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
        }}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* ── Dot Pagination Bar ── */}
      <div className="relative md:absolute my-3 md:my-0 md:bottom-[88px] left-0 md:left-1/2 md:-translate-x-1/2 z-30 flex justify-center gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative rounded-full overflow-hidden transition-all duration-500"
            style={{
              width: i === current ? '28px' : '8px',
              height: '8px',
              background: i === current ? 'transparent' : 'rgba(255,255,255,0.35)',
              border: i === current ? '1.5px solid rgba(212,160,23,0.85)' : 'none',
            }}
          >
            {i === current && (
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #8B1A1A, #D4A017)',
                  width: `${progress}%`,
                  transition: 'width 0.05s linear',
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Bottom Docked Stats Bar (Natural Flow on Mobile, Docked on Desktop) ── */}
      <div
        className="relative md:absolute md:bottom-0 left-0 right-0 z-30 w-full"
        style={{
          background: 'rgba(8,8,12,0.88)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(212,160,23,0.22)',
        }}
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-2.5 sm:py-4 px-2 gap-0.5">
              <span
                className="text-base sm:text-2xl font-extrabold leading-none"
                style={{ color: '#D4A017' }}
              >
                {s.value}
              </span>
              <span className="text-gray-300 text-[9px] sm:text-[11px] font-medium uppercase tracking-wider text-center">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile Floating Instant Call Button ── */}
      <a
        href="tel:+917942969777"
        className="hero-call-btn fixed bottom-6 right-4 z-50 md:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-white text-xs font-semibold shadow-2xl"
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
