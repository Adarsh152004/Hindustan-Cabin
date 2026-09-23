'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

// Slides - pure imagery, zero text
const slides = [
  { id: 1, image: '/images/hero-bg-1.jpg', kenClass: 'hero-ken-1', accent: '#dc2626' },
  { id: 2, image: '/images/hero-bg-2.jpg', kenClass: 'hero-ken-2', accent: '#b91c1c' },
  { id: 3, image: '/images/hero-bg-3.jpg', kenClass: 'hero-ken-3', accent: '#dc2626' },
  { id: 4, image: '/images/hero2.png',     kenClass: 'hero-ken-4', accent: '#ef4444' },
];

const SLIDE_DURATION = 5000;

const PARTICLES = [
  { cls: 'particle-a', bottom: '20%', left: '8%',  size: 4, color: 'rgba(220,38,38,0.8)' },
  { cls: 'particle-b', bottom: '35%', left: '20%', size: 2, color: 'rgba(255,255,255,0.55)' },
  { cls: 'particle-c', bottom: '12%', left: '35%', size: 5, color: 'rgba(220,38,38,0.5)' },
  { cls: 'particle-d', bottom: '25%', left: '50%', size: 2, color: 'rgba(255,255,255,0.4)' },
  { cls: 'particle-e', bottom: '18%', left: '63%', size: 3, color: 'rgba(239,68,68,0.65)' },
  { cls: 'particle-f', bottom: '32%', left: '76%', size: 2, color: 'rgba(255,255,255,0.5)' },
  { cls: 'particle-a', bottom: '8%',  left: '88%', size: 3, color: 'rgba(220,38,38,0.55)' },
  { cls: 'particle-b', bottom: '45%', left: '93%', size: 2, color: 'rgba(255,255,255,0.35)' },
];

// SVG ring progress dot for mobile
function RingDot({ active, onClick, label, dur }) {
  const r = 9;
  const circ = 2 * Math.PI * r;
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="relative flex items-center justify-center focus:outline-none"
      style={{ width: 28, height: 28 }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" className="absolute inset-0">
        <circle cx="14" cy="14" r={r} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        {active && (
          <circle
            cx="14" cy="14" r={r}
            fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={circ}
            transform="rotate(-90 14 14)"
            style={{ animation: `dot-fill ${dur}ms linear forwards` }}
          />
        )}
      </svg>
      <span
        className="relative rounded-full transition-all duration-300"
        style={{
          width:      active ? 6 : 5,
          height:     active ? 6 : 5,
          background: active ? '#ef4444' : 'rgba(255,255,255,0.4)',
        }}
      />
    </button>
  );
}

export default function HeroSection() {
  const [current, setCurrent]         = useState(0);
  const [showShimmer, setShowShimmer] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [dir, setDir]                 = useState(1);
  const timerRef   = useRef(null);
  const touchX     = useRef(null);

  const advance = useCallback((d = 1) => {
    setDir(d);
    setCurrent(prev => (prev + d + slides.length) % slides.length);
    setShowShimmer(true);
    setProgressKey(k => k + 1);
    setTimeout(() => setShowShimmer(false), 2800);
  }, []);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => advance(1), SLIDE_DURATION);
  }, [advance]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const goTo = useCallback((idx) => {
    setDir(idx > current ? 1 : -1);
    setCurrent(idx);
    setShowShimmer(true);
    setProgressKey(k => k + 1);
    setTimeout(() => setShowShimmer(false), 2800);
    resetTimer();
  }, [current, resetTimer]);

  // Touch swipe
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) { advance(dx < 0 ? 1 : -1); resetTimer(); }
    touchX.current = null;
  };

  const slide   = slides[current];
  const nextIdx = (current + 1) % slides.length;

  const imgVariants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ?  50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -50 :  50 }),
  };

  return (
    <section
      className="relative w-full overflow-hidden select-none bg-black"
      style={{ height: '100svh', minHeight: 500, maxHeight: 920 }}
      aria-label="Hero Banner"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* BG IMAGE with Ken Burns + directional slide */}
      <AnimatePresence mode="sync" custom={dir}>
        <motion.div
          key={`bg-${slide.id}`}
          custom={dir}
          variants={imgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.85, ease: [0.77, 0, 0.18, 1] }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <img
            src={slide.image}
            alt="" aria-hidden="true"
            className={`w-full h-full object-cover object-center will-change-transform ${slide.kenClass}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* AURORA GLOW blobs */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <div
          className="hero-aurora-1 absolute rounded-full"
          style={{
            width: 500, height: 500,
            bottom: '-18%', left: '-10%',
            background: `radial-gradient(circle, ${slide.accent}55 0%, transparent 70%)`,
            filter: 'blur(64px)',
          }}
        />
        <div
          className="hero-aurora-2 absolute rounded-full"
          style={{
            width: 380, height: 380,
            top: '-12%', right: '4%',
            background: 'radial-gradient(circle, rgba(180,30,30,0.4) 0%, transparent 70%)',
            filter: 'blur(52px)',
          }}
        />
      </div>

      {/* CINEMATIC VIGNETTE */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none hero-vignette"
        style={{
          background:
            'radial-gradient(ellipse at 50% 110%, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0) 60%),' +
            'linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.84) 100%)',
        }}
      />

      {/* SCAN LINES */}
      <div className="absolute inset-0 z-[4] pointer-events-none hero-scanlines" />

      {/* SHIMMER SWEEP */}
      {showShimmer && (
        <div
          key={`shimmer-${progressKey}`}
          className="absolute inset-0 z-[5] pointer-events-none hero-shimmer"
          style={{
            background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.09) 50%, transparent 80%)',
            width: '65%', height: '100%',
          }}
        />
      )}

      {/* FLOATING EMBERS */}
      <div className="absolute inset-0 z-[4] pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.span
            key={`p-${i}`}
            className={p.cls}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              position: 'absolute',
              bottom: p.bottom, left: p.left,
              width: p.size, height: p.size,
              borderRadius: '50%',
              background: p.color,
              display: 'block',
              filter: 'blur(0.6px)',
            }}
          />
        ))}
      </div>

      {/* TOP-RIGHT DOUBLE SPINNING RINGS */}
      <div className="absolute top-20 right-0 z-[6] pointer-events-none w-36 h-36 sm:w-52 sm:h-52 overflow-hidden">
        <div className="hero-corner-spin absolute -top-14 -right-14 w-52 h-52 border border-white/10 rounded-full" />
        <div
          className="absolute -top-9 -right-9 w-36 h-36 border border-red-600/20 rounded-full"
          style={{ animation: 'corner-spin 30s linear infinite reverse' }}
        />
        <div className="absolute top-7 right-7 w-2.5 h-2.5 rounded-full bg-red-600/80" />
        <div className="absolute top-4 right-14 w-1.5 h-1.5 rounded-full bg-white/40" />
        <div className="absolute top-12 right-5 w-1 h-1 rounded-full bg-white/25" />
      </div>

      {/* LEFT SIDE ACCENT LINE (sm+) */}
      <div className="absolute top-1/4 left-5 lg:left-8 z-[6] pointer-events-none hidden sm:flex flex-col items-center gap-1.5">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-red-600/60 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-red-600/80" />
        <div className="w-px h-12 bg-gradient-to-b from-red-600/40 to-transparent" />
      </div>

      {/* MAGAZINE COUNTER — bottom left */}
      <div className="absolute bottom-[76px] sm:bottom-[84px] left-5 sm:left-10 z-30 flex items-end gap-2.5 pointer-events-none">
        <div className="overflow-hidden leading-none">
          <AnimatePresence mode="wait">
            <motion.span
              key={`digit-${current}`}
              initial={{ y: 44, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              exit={{    y: -28, opacity: 0 }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="block font-black text-white tabular-nums"
              style={{
                fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
                lineHeight: 1,
                textShadow: `0 0 32px ${slide.accent}99`,
              }}
            >
              {String(current + 1).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="flex flex-col gap-1 mb-1.5">
          <div
            className="w-px self-center"
            style={{ height: 26, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)' }}
          />
          <span className="text-white/40 text-[11px] font-bold tabular-nums">
            {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* DESKTOP THUMBNAIL STRIP */}
      <div className="absolute right-5 lg:right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3.5">
        {slides.map((s, idx) => {
          const isActive = idx === current;
          return (
            <button
              key={s.id}
              onClick={() => goTo(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`relative overflow-hidden rounded-xl focus:outline-none ${isActive ? 'hero-thumb-active' : ''}`}
              style={{
                width:   isActive ? 70 : 52,
                height:  isActive ? 54 : 38,
                opacity: isActive ? 1 : 0.45,
                transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: isActive ? '' : '0 4px 14px rgba(0,0,0,0.5)',
              }}
            >
              <img src={s.image} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-red-500"
                style={{ height: 2 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            </button>
          );
        })}
      </div>

      {/* MOBILE RING DOTS */}
      <div className="absolute bottom-[76px] left-1/2 -translate-x-1/2 z-30 flex items-center gap-0.5 lg:hidden">
        {slides.map((s, idx) => (
          <RingDot
            key={s.id}
            active={idx === current}
            onClick={() => goTo(idx)}
            label={`Slide ${idx + 1}`}
            dur={SLIDE_DURATION}
          />
        ))}
      </div>

      {/* MOBILE SWIPE HINT */}
      <div className="absolute bottom-[108px] right-5 z-30 flex items-center gap-1.5 pointer-events-none lg:hidden">
        <span className="hero-swipe-hint text-[9px] font-semibold tracking-widest uppercase text-white/35">Swipe</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="hero-swipe-hint text-white/35">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* BOTTOM SEPARATOR LINE */}
      <div className="absolute bottom-[60px] left-0 right-0 z-20 pointer-events-none flex items-center">
        <div className="w-14 sm:w-20 h-px bg-gradient-to-r from-transparent to-white/15" />
        <div className="flex-1 h-px bg-white/08" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <div className="w-14 sm:w-20 h-px bg-gradient-to-l from-transparent to-white/15" />
      </div>

      {/* RED PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-[3px]" style={{ background: 'rgba(0,0,0,0.18)' }}>
        <motion.div
          key={progressKey}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
          style={{ height: '100%', background: `linear-gradient(90deg, ${slide.accent}, #f87171)` }}
        />
      </div>

      {/* DESKTOP ARROWS */}
      {[-1, 1].map((d) => {
        const isNext = d === 1;
        return (
          <motion.button
            key={d}
            whileHover={{ scale: 1.12, backgroundColor: 'rgba(220,38,38,0.22)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => { advance(d); resetTimer(); }}
            aria-label={isNext ? 'Next slide' : 'Previous slide'}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full items-center justify-center focus:outline-none"
            style={{
              [isNext ? 'right' : 'left']: isNext ? '6.5rem' : '5rem',
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="text-white">
              <path
                d={isNext ? 'M9 18l6-6-6-6' : 'M15 18l-6-6 6-6'}
                stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        );
      })}

      {/* MOBILE CALL BUTTON */}
      <a
        href="tel:+918692943939"
        className="hero-call-btn fixed bottom-6 right-4 z-50 lg:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-white text-xs font-semibold shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #8B1A1A 0%, #c0392b 100%)',
          border: '1px solid rgba(255,255,255,0.28)',
        }}
        aria-label="Call Hindustan Cabin"
      >
        <Phone className="w-3.5 h-3.5" />
        <span>Call Now</span>
      </a>

      {/* PRELOAD next image */}
      <img src={slides[nextIdx].image} alt="" aria-hidden="true" className="hidden" />
    </section>
  );
}
