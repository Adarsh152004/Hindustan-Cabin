'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, ArrowRight, CheckCircle } from 'lucide-react';

// ─── Slide Data ───────────────────────────────────────────────────────────────
const slides = [
  {
    id: 1,
    image: 'https://cpimg.tistatic.com//148134/6/template_photo_3.jpg',
    badge: 'Trusted Since 2017',
    title: 'Premium Portable',
    titleAccent: 'Cabins & Containers',
    subtitle:
      'Office cabins, security cabins, pantry units & luxury container homes — engineered for durability, delivered pan-India.',
    cta: { label: 'Explore Products', href: '/products' },
    ctaSecondary: { label: 'Get Free Quote', href: '/contact' },
    tag: 'Manufacturer · Dombivli, Maharashtra',
  },
  {
    id: 2,
    image: 'https://cpimg.tistatic.com//148134/6/template_photo_4.jpg',
    badge: 'Built for Every Purpose',
    title: 'From Construction Sites',
    titleAccent: 'to Luxury Showrooms',
    subtitle:
      'Whether you need a rugged site office, a secure guard cabin, or a premium container home — we build it with precision.',
    cta: { label: 'View All Products', href: '/products' },
    ctaSecondary: { label: 'Call Us Now', href: 'tel:+917942969777' },
    tag: 'GI · MS · FRP · Prefabricated Structures',
  },
  {
    id: 3,
    image: 'https://cpimg.tistatic.com//148134/6/template_photo_1.jpg',
    badge: '500+ Products in Stock',
    title: 'Quality You Can',
    titleAccent: 'Count On',
    subtitle:
      'ISO-quality prefab structures with GST certification, fixed-price transparency, and on-time delivery guaranteed.',
    cta: { label: 'Company Profile', href: '/company-profile' },
    ctaSecondary: { label: 'WhatsApp Us', href: 'https://wa.link/6t0inl' },
    tag: 'GST: 27AAKFH1020R1Z6 · Payment Protected',
  },
];

// ─── Stats Bar Data ───────────────────────────────────────────────────────────
const stats = [
  { value: '7+', label: 'Years of Excellence' },
  { value: '500+', label: 'Products Available' },
  { value: '1000+', label: 'Happy Clients' },
  { value: 'GST', label: 'Verified & Certified' },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

const imgVariant = {
  hidden: { scale: 1.07, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.1, ease: 'easeOut' } },
  exit:   { scale: 0.97, opacity: 0, transition: { duration: 0.45 } },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const DURATION = 6000;

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goTo = (i) => { setCurrent(i); setProgress(0); };

  // ─ Auto-play with smooth progress
  useEffect(() => {
    if (isPaused) return;
    const tick = 50;
    const step = 100 / (DURATION / tick);
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { next(); return 0; }
        return p + step;
      });
    }, tick);
    return () => clearInterval(id);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-950"
      style={{ minHeight: '100svh' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Progress bar at top ── */}
      <div
        className="absolute top-0 left-0 h-[3px] z-40 transition-none"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #8B1A1A, #D4A017)',
        }}
      />

      {/* ── Background Image ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${current}`}
          variants={imgVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* gradient overlays */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.18) 100%)' }}
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%, rgba(0,0,0,0.18) 100%)' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Main Content ── */}
      <div
        className="relative z-20 flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 max-w-[1400px] mx-auto"
        style={{ minHeight: '100svh', paddingTop: '96px', paddingBottom: '120px' }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                background: 'rgba(139,26,26,0.28)',
                border: '1px solid rgba(212,160,23,0.45)',
                color: '#D4A017',
                backdropFilter: 'blur(8px)',
              }}
            >
              <CheckCircle className="w-3 h-3 flex-shrink-0" />
              {slide.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-extrabold text-white leading-[1.05] tracking-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4.25rem)' }}
            >
              {slide.title}
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #D4A017 0%, #f5cc6a 50%, #D4A017 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {slide.titleAccent}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-gray-300 leading-relaxed mb-7 font-light"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', maxWidth: '500px' }}
            >
              {slide.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <a
                href={slide.cta.href}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #8B1A1A 0%, #c0392b 100%)',
                  boxShadow: '0 4px 20px rgba(139,26,26,0.45)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(139,26,26,0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(139,26,26,0.45)';
                }}
              >
                {slide.cta.label}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={slide.ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1.5px solid rgba(255,255,255,0.22)',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Phone className="w-4 h-4" />
                {slide.ctaSecondary.label}
              </a>
            </motion.div>

            {/* Tag */}
            <motion.p
              variants={fadeUp}
              custom={0.4}
              className="text-gray-400 text-xs sm:text-sm font-medium"
            >
              📍 {slide.tag}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Desktop-only Navigation Arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-30 hidden md:flex w-11 h-11 items-center justify-center rounded-full transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1.5px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(8px)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(139,26,26,0.7)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-30 hidden md:flex w-11 h-11 items-center justify-center rounded-full transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1.5px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(8px)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(139,26,26,0.7)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* ── Dot Pagination ── */}
      <div className="absolute bottom-[88px] sm:bottom-[92px] left-1/2 -translate-x-1/2 z-30 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative rounded-full overflow-hidden transition-all duration-500"
            style={{
              width: i === current ? '28px' : '8px',
              height: '8px',
              background:
                i === current ? 'transparent' : 'rgba(255,255,255,0.35)',
              border:
                i === current ? '1.5px solid rgba(212,160,23,0.65)' : 'none',
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

      {/* ── Stats Bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30"
        style={{
          background: 'rgba(8,8,8,0.82)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(212,160,23,0.18)',
        }}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-3.5 sm:py-4 px-2 gap-0.5">
              <span
                className="text-xl sm:text-2xl font-extrabold leading-none"
                style={{ color: '#D4A017' }}
              >
                {s.value}
              </span>
              <span className="text-gray-400 text-[9px] sm:text-[11px] font-medium uppercase tracking-wider text-center">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile floating Call button ── */}
      <a
        href="tel:+917942969777"
        className="hero-call-btn fixed bottom-24 right-4 z-50 md:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-white text-sm font-semibold"
        style={{
          background: 'linear-gradient(135deg, #8B1A1A, #c0392b)',
        }}
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
    </section>
  );
}