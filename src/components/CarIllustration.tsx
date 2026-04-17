/**
 * Detailed SVG car illustrations — brutal modern style with orange accents.
 * 5 distinct body types: economy-sedan, comfort-sedan, business-sedan, premium, suv.
 * All are local (no CDN dependency) — guaranteed to render.
 */

import type { Car } from '../data';

type CarType = 'economy' | 'comfort' | 'business' | 'premium' | 'suv';

function pickType(car: Car): CarType {
  if (car.category === 'suv') return 'suv';
  if (car.category === 'premium') return 'premium';
  if (car.category === 'business') return 'business';
  if (car.category === 'comfort') return 'comfort';
  return 'economy';
}

// Color palettes per category — subtle but distinctive
const palettes: Record<CarType, { body: string; bodyDark: string; glass: string; trim: string }> = {
  economy:  { body: '#E5E5E8', bodyDark: '#8A8A92', glass: '#1A1A1F', trim: '#52525B' },
  comfort:  { body: '#4A7FD4', bodyDark: '#2C4E85', glass: '#0F1724', trim: '#6BA3FF' },
  business: { body: '#1F1F23', bodyDark: '#0A0A0B', glass: '#18181B', trim: '#A1A1AA' },
  premium:  { body: '#18181B', bodyDark: '#0A0A0B', glass: '#27272A', trim: '#FF4D00' },
  suv:      { body: '#2D2D33', bodyDark: '#18181B', glass: '#0F0F13', trim: '#FF4D00' },
};

/* ─── SEDAN (economy / comfort / business) ────────────────────────────────── */
function SedanSVG({ palette, accent = '#FF4D00' }: { palette: typeof palettes.economy; accent?: string }) {
  return (
    <svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="sedan-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.body} />
          <stop offset="100%" stopColor={palette.bodyDark} />
        </linearGradient>
        <linearGradient id="sedan-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.glass} />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
        <filter id="sedan-shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
          <feOffset dx="0" dy="8" />
          <feComponentTransfer><feFuncA type="linear" slope="0.4" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="250" cy="235" rx="180" ry="6" fill="#000" opacity="0.4" />

      {/* Main body */}
      <g filter="url(#sedan-shadow)">
        <path
          d="M 60 200
             Q 60 185 75 180
             L 120 175
             L 155 135
             Q 170 115 200 112
             L 310 112
             Q 340 115 355 135
             L 390 180
             L 430 185
             Q 445 188 445 200
             L 445 220
             Q 445 225 440 225
             L 60 225
             Q 55 225 55 220
             Z"
          fill="url(#sedan-body)"
          stroke={palette.trim}
          strokeWidth="1"
        />

        {/* Side accent line */}
        <line x1="70" y1="205" x2="435" y2="205" stroke={palette.trim} strokeWidth="0.5" opacity="0.5" />

        {/* Door seam */}
        <line x1="250" y1="140" x2="250" y2="215" stroke={palette.bodyDark} strokeWidth="1" opacity="0.4" />

        {/* Windows */}
        <path
          d="M 158 138 Q 170 120 198 118 L 310 118 Q 335 120 350 138 L 350 172 L 158 172 Z"
          fill="url(#sedan-glass)"
          stroke={palette.trim}
          strokeWidth="0.8"
        />
        {/* B-pillar */}
        <line x1="252" y1="140" x2="252" y2="170" stroke={palette.bodyDark} strokeWidth="2.5" />

        {/* Front window frame highlight */}
        <line x1="170" y1="135" x2="240" y2="125" stroke="#fff" strokeWidth="0.8" opacity="0.15" />
      </g>

      {/* Headlight */}
      <ellipse cx="75" cy="185" rx="10" ry="6" fill="#FFE600" opacity="0.9" />
      <ellipse cx="75" cy="185" rx="14" ry="8" fill="#FFE600" opacity="0.15" />

      {/* Tail light */}
      <rect x="425" y="182" width="16" height="8" rx="2" fill="#FF1744" opacity="0.9" />
      <rect x="423" y="180" width="20" height="12" rx="3" fill="#FF1744" opacity="0.15" />

      {/* Grille */}
      <rect x="63" y="195" width="14" height="14" rx="1" fill="#000" />
      <line x1="65" y1="199" x2="75" y2="199" stroke={accent} strokeWidth="0.8" />
      <line x1="65" y1="204" x2="75" y2="204" stroke={accent} strokeWidth="0.8" />
      <line x1="65" y1="208" x2="75" y2="208" stroke={accent} strokeWidth="0.8" />

      {/* Front wheel */}
      <circle cx="135" cy="225" r="30" fill="#0A0A0B" />
      <circle cx="135" cy="225" r="26" fill={palette.bodyDark} stroke={palette.trim} strokeWidth="1" />
      <circle cx="135" cy="225" r="12" fill="#1A1A1F" />
      {[0, 72, 144, 216, 288].map((deg) => (
        <rect
          key={`lfs-${deg}`}
          x="133" y="215"
          width="4" height="10"
          fill="#3F3F46"
          transform={`rotate(${deg} 135 225)`}
        />
      ))}
      <circle cx="135" cy="225" r="3" fill={accent} />

      {/* Rear wheel */}
      <circle cx="365" cy="225" r="30" fill="#0A0A0B" />
      <circle cx="365" cy="225" r="26" fill={palette.bodyDark} stroke={palette.trim} strokeWidth="1" />
      <circle cx="365" cy="225" r="12" fill="#1A1A1F" />
      {[0, 72, 144, 216, 288].map((deg) => (
        <rect
          key={`rfs-${deg}`}
          x="363" y="215"
          width="4" height="10"
          fill="#3F3F46"
          transform={`rotate(${deg} 365 225)`}
        />
      ))}
      <circle cx="365" cy="225" r="3" fill={accent} />

      {/* Door handles */}
      <rect x="195" y="172" width="16" height="3" rx="1" fill={palette.trim} opacity="0.6" />
      <rect x="290" y="172" width="16" height="3" rx="1" fill={palette.trim} opacity="0.6" />
    </svg>
  );
}

/* ─── PREMIUM SEDAN (long, limo-like for S-Class, X5) ───────────────────── */
function PremiumSVG({ palette, accent = '#FF4D00' }: { palette: typeof palettes.premium; accent?: string }) {
  return (
    <svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="premium-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.body} />
          <stop offset="50%" stopColor={palette.bodyDark} />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
      </defs>

      <ellipse cx="250" cy="240" rx="200" ry="7" fill="#000" opacity="0.5" />

      {/* Long premium body */}
      <path
        d="M 40 205
           Q 40 188 56 182
           L 105 176
           L 145 128
           Q 160 108 195 106
           L 310 106
           Q 350 110 365 128
           L 405 180
           L 450 186
           Q 464 190 464 205
           L 464 222
           L 40 222 Z"
        fill="url(#premium-body)"
        stroke={accent}
        strokeWidth="1.5"
      />

      {/* Chrome strip */}
      <line x1="50" y1="208" x2="455" y2="208" stroke={accent} strokeWidth="1" />
      <line x1="50" y1="214" x2="455" y2="214" stroke={accent} strokeWidth="0.4" opacity="0.6" />

      {/* Long windows */}
      <path
        d="M 148 132 Q 162 110 195 108 L 305 108 Q 338 110 360 132 L 360 170 L 148 170 Z"
        fill="#000"
        stroke={accent}
        strokeWidth="0.8"
      />
      <line x1="250" y1="130" x2="250" y2="168" stroke={palette.body} strokeWidth="2" opacity="0.3" />

      {/* Premium headlights (thin LED bar) */}
      <rect x="46" y="186" width="30" height="4" rx="1" fill="#FFE600" />
      <rect x="46" y="186" width="30" height="7" rx="1" fill="#FFE600" opacity="0.2" />
      <rect x="46" y="194" width="30" height="2" rx="1" fill={accent} opacity="0.8" />

      {/* Tail light (wraparound LED) */}
      <rect x="424" y="186" width="34" height="5" rx="1" fill="#FF1744" />
      <rect x="424" y="186" width="34" height="9" rx="1" fill="#FF1744" opacity="0.2" />

      {/* Grille — wide premium */}
      <rect x="55" y="198" width="45" height="14" rx="2" fill="#000" />
      {[0, 3.5, 7, 10.5].map((offset) => (
        <line
          key={`grille-${offset}`}
          x1="57"
          y1={201 + offset}
          x2="98"
          y2={201 + offset}
          stroke={accent}
          strokeWidth="0.6"
          opacity="0.7"
        />
      ))}

      {/* Brand emblem */}
      <circle cx="77" cy="205" r="4" fill={accent} />
      <circle cx="77" cy="205" r="2" fill="#000" />

      {/* Wheels — larger, premium multi-spoke */}
      {[120, 380].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="222" r="34" fill="#0A0A0B" />
          <circle cx={cx} cy="222" r="30" fill={palette.bodyDark} stroke={accent} strokeWidth="1.5" />
          <circle cx={cx} cy="222" r="14" fill="#1A1A1F" />
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg) => (
            <rect
              key={`pw-${cx}-${deg}`}
              x={cx - 1.5} y="208"
              width="3" height="14"
              fill="#3F3F46"
              transform={`rotate(${deg} ${cx} 222)`}
            />
          ))}
          <circle cx={cx} cy="222" r="3" fill={accent} />
        </g>
      ))}

      {/* Door handles — flush */}
      <rect x="185" y="173" width="18" height="2.5" rx="1" fill={accent} opacity="0.8" />
      <rect x="300" y="173" width="18" height="2.5" rx="1" fill={accent} opacity="0.8" />
    </svg>
  );
}

/* ─── SUV (X5, Qashqai, RAV4) ─────────────────────────────────────────────── */
function SUVSVG({ palette, accent = '#FF4D00' }: { palette: typeof palettes.suv; accent?: string }) {
  return (
    <svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="suv-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.body} />
          <stop offset="100%" stopColor={palette.bodyDark} />
        </linearGradient>
      </defs>

      <ellipse cx="250" cy="240" rx="190" ry="7" fill="#000" opacity="0.5" />

      {/* Tall SUV body */}
      <path
        d="M 55 210
           L 55 180
           Q 55 170 68 168
           L 105 162
           L 132 110
           Q 140 98 160 95
           L 340 95
           Q 360 98 368 110
           L 395 162
           L 432 168
           Q 445 170 445 180
           L 445 215
           L 55 215 Z"
        fill="url(#suv-body)"
        stroke={palette.trim}
        strokeWidth="1.2"
      />

      {/* Roof rails */}
      <rect x="148" y="92" width="204" height="4" rx="2" fill={palette.trim} opacity="0.7" />

      {/* Windows (boxy, split) */}
      <rect x="135" y="112" width="65" height="48" rx="3" fill="#000" stroke={accent} strokeWidth="0.8" />
      <rect x="205" y="112" width="90" height="48" rx="3" fill="#000" stroke={accent} strokeWidth="0.8" />
      <rect x="300" y="112" width="65" height="48" rx="3" fill="#000" stroke={accent} strokeWidth="0.8" />

      {/* Wheel arches */}
      <path d="M 95 215 Q 95 185 135 185 Q 175 185 175 215" fill="none" stroke={palette.bodyDark} strokeWidth="2" />
      <path d="M 325 215 Q 325 185 365 185 Q 405 185 405 215" fill="none" stroke={palette.bodyDark} strokeWidth="2" />

      {/* Headlights — angular */}
      <polygon points="60,175 85,172 85,182 60,185" fill="#FFE600" />
      <polygon points="58,172 87,170 87,184 58,187" fill="#FFE600" opacity="0.15" />

      {/* Tail light */}
      <polygon points="415,175 440,172 440,182 415,185" fill="#FF1744" />

      {/* Grille — bold SUV */}
      <rect x="62" y="190" width="40" height="18" rx="2" fill="#000" />
      {[0, 5, 10, 15].map((offset) => (
        <line
          key={`sg-${offset}`}
          x1="64" y1={194 + offset}
          x2="100" y2={194 + offset}
          stroke={accent}
          strokeWidth="0.8"
        />
      ))}

      {/* Off-road skid plate hint */}
      <path d="M 62 208 L 102 208 L 100 214 L 64 214 Z" fill={accent} opacity="0.3" />

      {/* Big off-road wheels */}
      {[135, 365].map((cx) => (
        <g key={`suv-wheel-${cx}`}>
          <circle cx={cx} cy="220" r="36" fill="#0A0A0B" />
          <circle cx={cx} cy="220" r="32" fill={palette.bodyDark} stroke={accent} strokeWidth="1.5" />
          <circle cx={cx} cy="220" r="14" fill="#1A1A1F" />
          {/* 6-spoke off-road */}
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <rect
              key={`suvsp-${cx}-${deg}`}
              x={cx - 2} y="206"
              width="4" height="16"
              fill="#3F3F46"
              rx="1"
              transform={`rotate(${deg} ${cx} 220)`}
            />
          ))}
          <circle cx={cx} cy="220" r="4" fill={accent} />
          {/* Tread pattern */}
          <circle cx={cx} cy="220" r="36" fill="none" stroke="#0A0A0B" strokeWidth="3" strokeDasharray="4 3" />
        </g>
      ))}

      {/* Door lines */}
      <line x1="200" y1="168" x2="200" y2="210" stroke={palette.bodyDark} strokeWidth="1" opacity="0.5" />
      <line x1="300" y1="168" x2="300" y2="210" stroke={palette.bodyDark} strokeWidth="1" opacity="0.5" />

      {/* Door handles */}
      <rect x="155" y="163" width="14" height="3" rx="1" fill={accent} opacity="0.7" />
      <rect x="240" y="163" width="14" height="3" rx="1" fill={accent} opacity="0.7" />
      <rect x="325" y="163" width="14" height="3" rx="1" fill={accent} opacity="0.7" />
    </svg>
  );
}

/* ─── MAIN EXPORT ────────────────────────────────────────────────────────── */
export default function CarIllustration({ car }: { car: Car }) {
  const type = pickType(car);
  const palette = palettes[type];

  if (type === 'suv') return <SUVSVG palette={palette} />;
  if (type === 'premium') return <PremiumSVG palette={palette} />;
  return <SedanSVG palette={palette} />;
}

/** Hero-sized premium car — bigger version for hero section */
export function HeroCarIllustration() {
  return (
    <svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="hero-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#27272A" />
          <stop offset="60%" stopColor="#18181B" />
          <stop offset="100%" stopColor="#0A0A0B" />
        </linearGradient>
        <linearGradient id="hero-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF4D00" />
          <stop offset="100%" stopColor="#CC3D00" />
        </linearGradient>
        <filter id="hero-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      {/* Glow under car */}
      <ellipse cx="350" cy="310" rx="280" ry="14" fill="#FF4D00" opacity="0.3" filter="url(#hero-glow)" />
      <ellipse cx="350" cy="315" rx="260" ry="8" fill="#000" opacity="0.6" />

      {/* Body */}
      <path
        d="M 70 265
           Q 70 245 88 238
           L 150 230
           L 195 160
           Q 210 135 252 132
           L 448 132
           Q 490 136 505 160
           L 550 230
           L 612 238
           Q 630 243 630 265
           L 630 290
           L 70 290 Z"
        fill="url(#hero-body)"
        stroke="#FF4D00"
        strokeWidth="2"
      />

      {/* Windows */}
      <path
        d="M 200 167 Q 215 138 252 135 L 445 135 Q 485 138 500 167 L 500 215 L 200 215 Z"
        fill="#000"
        stroke="#FF4D00"
        strokeWidth="1"
      />
      <line x1="350" y1="160" x2="350" y2="212" stroke="#3F3F46" strokeWidth="3" />

      {/* Reflective highlight on hood */}
      <path
        d="M 165 225 Q 200 175 260 158 L 340 158 L 280 195 Z"
        fill="#fff"
        opacity="0.05"
      />

      {/* Side accent stripe */}
      <path d="M 80 272 L 620 272" stroke="url(#hero-accent)" strokeWidth="2" />

      {/* Front LED headlight */}
      <rect x="76" y="243" width="42" height="6" rx="2" fill="#FFE600" />
      <rect x="76" y="243" width="42" height="12" rx="2" fill="#FFE600" opacity="0.25" filter="url(#hero-glow)" />
      <rect x="76" y="252" width="42" height="3" rx="1" fill="#FF4D00" />

      {/* Tail wraparound */}
      <rect x="582" y="243" width="44" height="8" rx="2" fill="#FF1744" />
      <rect x="582" y="243" width="44" height="14" rx="2" fill="#FF1744" opacity="0.25" filter="url(#hero-glow)" />

      {/* Grille */}
      <rect x="85" y="260" width="55" height="22" rx="3" fill="#000" />
      {[0, 4.5, 9, 13.5, 18].map((o) => (
        <line key={`hg-${o}`} x1="88" y1={264 + o} x2="137" y2={264 + o} stroke="#FF4D00" strokeWidth="1" opacity="0.9" />
      ))}
      <circle cx="112" cy="271" r="6" fill="#FF4D00" />
      <circle cx="112" cy="271" r="3" fill="#0A0A0B" />

      {/* Wheels */}
      {[175, 525].map((cx) => (
        <g key={`hw-${cx}`}>
          <circle cx={cx} cy="290" r="48" fill="#0A0A0B" />
          <circle cx={cx} cy="290" r="44" fill="#18181B" stroke="#FF4D00" strokeWidth="2" />
          <circle cx={cx} cy="290" r="20" fill="#0A0A0B" />
          {/* 5-spoke performance */}
          {[0, 72, 144, 216, 288].map((deg) => (
            <g key={`hspoke-${cx}-${deg}`} transform={`rotate(${deg} ${cx} 290)`}>
              <path
                d={`M ${cx} 272 L ${cx - 4} 252 L ${cx + 4} 252 Z`}
                fill="#3F3F46"
              />
              <rect x={cx - 3} y="252" width="6" height="20" fill="#52525B" />
            </g>
          ))}
          <circle cx={cx} cy="290" r="6" fill="#FF4D00" />
          <circle cx={cx} cy="290" r="3" fill="#0A0A0B" />
        </g>
      ))}

      {/* Door handles */}
      <rect x="240" y="218" width="22" height="3.5" rx="1.5" fill="#FF4D00" opacity="0.9" />
      <rect x="420" y="218" width="22" height="3.5" rx="1.5" fill="#FF4D00" opacity="0.9" />
    </svg>
  );
}
