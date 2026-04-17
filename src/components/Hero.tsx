import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, Zap } from 'lucide-react';
import { contact, heroImage } from '../data';

const marqueeItems = [
  'ПРОКАТ АВТО',
  'БЕЗ ЗАЛОГА',
  'БЕЗЛИМИТ ПРОБЕГА',
  'ДОСТАВКА 24/7',
  'КАЛИНИНГРАД 2026',
  'ОФОРМЛЕНИЕ 10 МИН',
];

function CarSilhouette({ className = '' }: { className?: string }) {
  // Side view of a generic sedan rendered inline.
  return (
    <svg
      viewBox="0 0 600 220"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF4D00" />
          <stop offset="100%" stopColor="#CC3D00" />
        </linearGradient>
        <linearGradient id="carGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#18181B" />
          <stop offset="100%" stopColor="#0A0A0B" />
        </linearGradient>
      </defs>

      {/* Shadow under the car */}
      <ellipse cx="300" cy="200" rx="240" ry="10" fill="#FF4D00" opacity="0.18" />

      {/* Body */}
      <path
        d="M40 160
           L80 120
           C 110 92, 160 78, 210 75
           L 280 55
           C 320 48, 370 50, 410 62
           L 470 92
           C 500 102, 540 112, 560 128
           L 565 160
           Z"
        fill="url(#carBody)"
        stroke="#FF4D00"
        strokeWidth="2"
      />

      {/* Greenhouse / windows */}
      <path
        d="M115 118
           C 150 90, 195 80, 235 77
           L 285 60
           C 320 55, 360 57, 395 66
           L 445 95
           Z"
        fill="url(#carGlass)"
        stroke="#27272A"
        strokeWidth="1.5"
      />

      {/* Window split (B-pillar) */}
      <line x1="275" y1="60" x2="275" y2="118" stroke="#27272A" strokeWidth="2" />

      {/* Body crease line */}
      <line
        x1="60"
        y1="150"
        x2="555"
        y2="150"
        stroke="#0A0A0B"
        strokeOpacity="0.4"
        strokeWidth="1"
      />

      {/* Door handles */}
      <rect x="200" y="132" width="24" height="3" rx="1.5" fill="#0A0A0B" opacity="0.55" />
      <rect x="340" y="132" width="24" height="3" rx="1.5" fill="#0A0A0B" opacity="0.55" />

      {/* Headlight */}
      <path
        d="M552 130 L565 138 L560 148 L545 145 Z"
        fill="#FFE600"
        opacity="0.9"
      />
      {/* Headlight glow */}
      <circle cx="560" cy="140" r="18" fill="#FFE600" opacity="0.15" />

      {/* Tail light */}
      <rect x="45" y="138" width="14" height="6" rx="1.5" fill="#FF1744" />

      {/* Wheel wells */}
      <circle cx="150" cy="165" r="38" fill="#0A0A0B" />
      <circle cx="450" cy="165" r="38" fill="#0A0A0B" />

      {/* Tires */}
      <circle cx="150" cy="165" r="30" fill="#18181B" stroke="#27272A" strokeWidth="2" />
      <circle cx="450" cy="165" r="30" fill="#18181B" stroke="#27272A" strokeWidth="2" />

      {/* Rims */}
      <circle cx="150" cy="165" r="14" fill="#3F3F46" />
      <circle cx="450" cy="165" r="14" fill="#3F3F46" />
      {/* Rim spokes */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={`l-${deg}`}
          x1="150"
          y1="165"
          x2={150 + 13 * Math.cos((deg * Math.PI) / 180)}
          y2={165 + 13 * Math.sin((deg * Math.PI) / 180)}
          stroke="#0A0A0B"
          strokeWidth="2"
        />
      ))}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={`r-${deg}`}
          x1="450"
          y1="165"
          x2={450 + 13 * Math.cos((deg * Math.PI) / 180)}
          y2={165 + 13 * Math.sin((deg * Math.PI) / 180)}
          stroke="#0A0A0B"
          strokeWidth="2"
        />
      ))}
      <circle cx="150" cy="165" r="4" fill="#FF4D00" />
      <circle cx="450" cy="165" r="4" fill="#FF4D00" />
    </svg>
  );
}

/**
 * Hero hero car photo with SVG fallback.
 * Real Unsplash cinematic shot — falls back to brand-orange SVG on CDN failure.
 */
function HeroCarImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <CarSilhouette className="w-full max-w-[560px] drop-shadow-[0_30px_50px_rgba(255,77,0,0.25)]" />;
  }

  return (
    <div className="relative w-full max-w-[640px]">
      {/* Orange glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 blur-[60px] opacity-40"
        style={{ background: 'radial-gradient(ellipse at center, #FF4D00 0%, transparent 60%)' }} />

      {/* Photo — cinematic aspect */}
      <div className="relative overflow-hidden rounded-[8px] border-2 border-[#27272A] bg-[#0A0A0B] shadow-[0_30px_80px_rgba(255,77,0,0.15)]">
        <img
          src={heroImage}
          alt="Премиум автомобиль в аренду"
          onError={() => setFailed(true)}
          className="aspect-[16/11] w-full object-cover"
        />
        {/* Subtle brand overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0A0A0B]/40" />
        {/* Corner accent */}
        <div className="absolute bottom-4 right-4 z-10 rounded-[2px] bg-[#FF4D00] px-3 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-lg">
          Premium Fleet
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const phoneHref = `tel:${contact.phone.replace(/[^+\d]/g, '')}`;

  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-0 overflow-hidden stripes-bg"
    >
      {/* Ambient orange glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-[-10%] w-[680px] h-[680px] rounded-full blur-[140px] opacity-50 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,77,0,0.45) 0%, rgba(255,77,0,0) 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-32 w-[420px] h-[420px] rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,230,0,0.3) 0%, rgba(255,230,0,0) 70%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 relative">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-6 items-center pb-16 md:pb-24">
          {/* LEFT — 60% */}
          <div className="lg:col-span-3 flex flex-col">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 self-start mb-8"
            >
              <span className="number-badge">
                <Zap size={12} className="mr-1.5" strokeWidth={3} />
                Прокат авто · Калининград 2026
              </span>
            </motion.div>

            {/* Mega headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-mega text-mega text-text text-balance"
            >
              Машина в руки за{' '}
              <span className="relative inline-block text-accent">
                10&nbsp;минут
                <svg
                  className="absolute left-0 right-0 -bottom-3 md:-bottom-4 w-full"
                  viewBox="0 0 300 18"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 14 L298 4"
                    stroke="#FF4D00"
                    strokeWidth="4"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 md:mt-10 max-w-xl text-lg md:text-xl text-text-muted leading-relaxed text-balance"
            >
              Без залога. Без лимита пробега. Круглосуточная доставка к аэропорту,
              отелю, вокзалу.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#fleet" className="btn-brutal group">
                Выбрать авто
                <ArrowRight size={18} className="arrow-shift" strokeWidth={2.5} />
              </a>
              <a href={phoneHref} className="btn-outline">
                <Phone size={16} strokeWidth={2.5} />
                Позвонить
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-border"
            >
              <div className="flex items-center gap-2">
                <Star size={16} className="text-secondary fill-secondary" />
                <span className="font-display font-bold text-text">4.9/5</span>
                <span className="text-text-dim text-sm font-mono">/ рейтинг</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-text">107</span>
                <span className="text-text-muted text-sm">отзывов</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-text">3 года</span>
                <span className="text-text-muted text-sm">на рынке</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — 40% */}
          <div className="lg:col-span-2 relative min-h-[380px] md:min-h-[460px]">
            {/* Rotating halo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[110%] aspect-square rounded-full border-2 border-dashed border-accent/20 animate-rotate-slow" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex items-center justify-center h-full w-full"
            >
              <HeroCarImage />
            </motion.div>

            {/* Floating stat: 42+ авто */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute top-4 -left-2 md:left-0 z-20"
            >
              <div className="card-brutal !bg-card px-4 py-3 border-2 border-accent">
                <div className="font-display font-bold text-2xl md:text-3xl text-text leading-none">
                  42+
                </div>
                <div className="label-brutal !mb-0 mt-1 !text-[10px] text-accent">
                  авто в парке
                </div>
              </div>
            </motion.div>

            {/* Floating stat: 24/7 */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="absolute bottom-16 md:bottom-20 -right-2 md:right-4 z-20"
            >
              <div className="card-brutal !bg-card px-4 py-3 border-2 border-border-bright">
                <div className="font-display font-bold text-2xl md:text-3xl text-text leading-none">
                  24/7
                </div>
                <div className="label-brutal !mb-0 mt-1 !text-[10px]">
                  поддержка
                </div>
              </div>
            </motion.div>

            {/* Floating stat: от 1 700₽/сутки */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="absolute -bottom-2 left-4 md:left-10 z-20"
            >
              <div className="card-brutal !bg-accent !border-accent px-4 py-3">
                <div className="font-display font-bold text-xl md:text-2xl text-bg leading-none">
                  от 1 700₽
                </div>
                <div className="font-display font-bold text-[10px] tracking-[0.15em] uppercase text-bg/80 mt-1">
                  / сутки
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative border-y-2 border-border bg-bg/60 backdrop-blur-sm py-5 overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, block) => (
            <div key={block} className="flex items-center gap-12 pr-12">
              {marqueeItems.map((text, i) => (
                <div key={`${block}-${i}`} className="flex items-center gap-12">
                  <span className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-text">
                    {text}
                  </span>
                  <span className="w-3 h-3 rounded-full bg-accent shrink-0 shadow-[0_0_16px_rgba(255,77,0,0.6)]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
