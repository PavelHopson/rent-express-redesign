import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Fuel, Settings2 } from 'lucide-react';
import { cars, categories, type Car, type CarCategory } from '../data';

/**
 * Car image with graceful SVG fallback when Unsplash is unreachable.
 * Keeps the BRUTAL aesthetic even when CDN fails.
 */
function CarImage({ car, variant }: { car: Car; variant: 'suv' | 'coupe' | 'sedan' }) {
  const [failed, setFailed] = useState(false);

  if (failed || !car.image) {
    return (
      <div className="absolute inset-0 flex items-end justify-center p-3 transition-transform duration-500 group-hover:scale-[1.06]">
        <CarSilhouette variant={variant} />
      </div>
    );
  }

  return (
    <>
      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
      />
      {/* Dark gradient from bottom for text readability when overlayed */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/50 via-transparent to-transparent" />
    </>
  );
}

type FilterId = 'all' | CarCategory;

const filters: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'Все' },
  ...categories.map((c) => ({ id: c.id, label: c.label })),
];

const categoryLabel: Record<CarCategory, string> = {
  economy: 'ЭКОНОМ',
  comfort: 'КОМФОРТ',
  business: 'БИЗНЕС',
  premium: 'ПРЕМИУМ',
  suv: 'SUV',
};

// Silhouette picker: SUVs get a taller body, coupes/flagships a sleeker line,
// sedans the default profile.
function pickSilhouette(car: Car): 'suv' | 'coupe' | 'sedan' {
  if (car.category === 'suv') return 'suv';
  if (car.category === 'premium' || car.model === 'E-Class' || car.model === 'S-Class') {
    return 'coupe';
  }
  return 'sedan';
}

function CarSilhouette({ variant }: { variant: 'suv' | 'coupe' | 'sedan' }) {
  // Wide monochrome SVG silhouettes. Accent stroke hints brand-specific shape.
  if (variant === 'suv') {
    return (
      <svg viewBox="0 0 320 120" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="suv-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#27272A" />
            <stop offset="100%" stopColor="#0A0A0B" />
          </linearGradient>
        </defs>
        <path
          d="M18 92 L34 62 Q44 46 66 44 L128 40 Q150 38 170 46 L220 60 Q250 64 278 70 L298 78 Q308 82 308 92 L308 100 L18 100 Z"
          fill="url(#suv-g)"
          stroke="#3F3F46"
          strokeWidth="1.5"
        />
        <rect x="64" y="52" width="56" height="14" rx="2" fill="#18181B" stroke="#52525B" strokeWidth="1" />
        <rect x="126" y="50" width="58" height="16" rx="2" fill="#18181B" stroke="#52525B" strokeWidth="1" />
        <circle cx="78" cy="100" r="16" fill="#0A0A0B" stroke="#FF4D00" strokeWidth="2" />
        <circle cx="78" cy="100" r="7" fill="#18181B" stroke="#52525B" strokeWidth="1" />
        <circle cx="244" cy="100" r="16" fill="#0A0A0B" stroke="#FF4D00" strokeWidth="2" />
        <circle cx="244" cy="100" r="7" fill="#18181B" stroke="#52525B" strokeWidth="1" />
      </svg>
    );
  }
  if (variant === 'coupe') {
    return (
      <svg viewBox="0 0 320 120" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="coupe-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#27272A" />
            <stop offset="100%" stopColor="#0A0A0B" />
          </linearGradient>
        </defs>
        <path
          d="M14 96 L48 70 Q80 52 120 48 Q170 40 214 52 L270 68 Q298 74 306 90 L306 102 L14 102 Z"
          fill="url(#coupe-g)"
          stroke="#3F3F46"
          strokeWidth="1.5"
        />
        <path d="M86 70 Q130 48 190 54 L214 66 L90 66 Z" fill="#18181B" stroke="#52525B" strokeWidth="1" />
        <circle cx="76" cy="102" r="15" fill="#0A0A0B" stroke="#FF4D00" strokeWidth="2" />
        <circle cx="76" cy="102" r="6" fill="#18181B" stroke="#52525B" strokeWidth="1" />
        <circle cx="240" cy="102" r="15" fill="#0A0A0B" stroke="#FF4D00" strokeWidth="2" />
        <circle cx="240" cy="102" r="6" fill="#18181B" stroke="#52525B" strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 120" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="sedan-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#27272A" />
          <stop offset="100%" stopColor="#0A0A0B" />
        </linearGradient>
      </defs>
      <path
        d="M16 96 L44 74 Q72 58 116 54 Q164 50 208 58 L258 72 Q292 78 304 90 L304 102 L16 102 Z"
        fill="url(#sedan-g)"
        stroke="#3F3F46"
        strokeWidth="1.5"
      />
      <path d="M84 72 Q124 56 186 58 L218 70 L88 70 Z" fill="#18181B" stroke="#52525B" strokeWidth="1" />
      <circle cx="80" cy="102" r="15" fill="#0A0A0B" stroke="#FF4D00" strokeWidth="2" />
      <circle cx="80" cy="102" r="6" fill="#18181B" stroke="#52525B" strokeWidth="1" />
      <circle cx="238" cy="102" r="15" fill="#0A0A0B" stroke="#FF4D00" strokeWidth="2" />
      <circle cx="238" cy="102" r="6" fill="#18181B" stroke="#52525B" strokeWidth="1" />
    </svg>
  );
}

function formatPrice(value: number): string {
  return value.toLocaleString('ru-RU');
}

export default function Fleet() {
  const [active, setActive] = useState<FilterId>('all');

  const visible = useMemo(() => {
    if (active === 'all') return cars;
    return cars.filter((c) => c.category === active);
  }, [active]);

  return (
    <section id="fleet" className="relative bg-[#0A0A0B] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="label-brutal text-[#FF4D00]">АВТОПАРК / 42+ АВТО</span>
            <h2 className="font-mega mt-3 text-[48px] md:text-[72px] lg:text-[88px] text-white text-balance">
              Выбери свою
              <br />
              <span className="text-[#FF4D00]">машину</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.6] text-[#A1A1AA]">
            От бюджетных седанов до флагманских внедорожников.
            Все авто на постоянном ТО, чистые, с полным баком.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-2 md:mt-14"
        >
          {filters.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={[
                  'px-5 py-3 font-display text-[12px] uppercase tracking-[0.15em] transition-all duration-200 border-2',
                  'rounded-[4px]',
                  isActive
                    ? 'bg-[#FF4D00] text-white border-[#FF4D00]'
                    : 'bg-transparent text-[#A1A1AA] border-[#27272A] hover:border-[#FF4D00] hover:text-white',
                ].join(' ')}
              >
                {f.label}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((car, idx) => {
            const silhouette = pickSilhouette(car);
            return (
              <motion.article
                key={car.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(idx * 0.05, 0.35),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="card-brutal group flex flex-col p-6 md:p-7"
              >
                {/* Badge */}
                <div className="flex items-start justify-between">
                  <span className="label-brutal text-[#A1A1AA]">
                    {String(idx + 1).padStart(2, '0')} / КАТЕГОРИЯ
                  </span>
                  <span className="number-badge">{categoryLabel[car.category]}</span>
                </div>

                {/* Car photo (with SVG fallback) */}
                <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-[4px] bg-gradient-to-b from-[#121214] to-[#0A0A0B] border border-[#27272A]">
                  <CarImage car={car} variant={silhouette} />
                  {car.priceOld && (
                    <span className="absolute left-3 top-3 z-10 rounded-[2px] bg-[#FF4D00] px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-lg">
                      -{Math.round(((car.priceOld - car.pricePerDay) / car.priceOld) * 100)}%
                    </span>
                  )}
                </div>

                {/* Brand + model */}
                <div className="mt-6">
                  <div className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF4D00]">
                    {car.brand}
                  </div>
                  <h3 className="font-display mt-1 text-[28px] leading-[1.05] text-white md:text-[32px]">
                    {car.model}
                  </h3>
                </div>

                {/* Specs row */}
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#A1A1AA]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#52525B]" strokeWidth={2} />
                    {car.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Settings2 className="h-3.5 w-3.5 text-[#52525B]" strokeWidth={2} />
                    {car.transmission}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Fuel className="h-3.5 w-3.5 text-[#52525B]" strokeWidth={2} />
                    {car.fuel}
                  </span>
                </div>

                {/* Features */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {car.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-[2px] border border-[#27272A] bg-[#121214] px-2.5 py-1 text-[11px] font-medium text-[#A1A1AA]"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Divider */}
                <div className="mt-6 h-px w-full bg-[#27272A]" />

                {/* Price + CTA */}
                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    {car.priceOld && (
                      <div className="text-[13px] font-medium text-[#52525B] line-through">
                        от {formatPrice(car.priceOld)} ₽
                      </div>
                    )}
                    <div className="font-display text-[24px] leading-none text-white md:text-[26px]">
                      от {formatPrice(car.pricePerDay)} ₽
                    </div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#71717A]">
                      / сутки
                    </div>
                  </div>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-[4px] border-2 border-[#27272A] bg-transparent px-4 py-3 font-display text-[12px] uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:border-[#FF4D00] hover:text-[#FF4D00]"
                  >
                    Забронировать
                    <ArrowRight className="arrow-shift h-4 w-4" strokeWidth={2.5} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Empty state (defensive) */}
        {visible.length === 0 && (
          <div className="mt-12 rounded-[8px] border border-dashed border-[#27272A] p-10 text-center text-[#A1A1AA]">
            В этой категории сейчас нет свободных авто. Попробуйте другую.
          </div>
        )}
      </div>
    </section>
  );
}
