import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Fuel, Settings2 } from 'lucide-react';
import { cars, categories, type Car, type CarCategory } from '../data';
import CarIllustration from './CarIllustration';

/**
 * Detailed SVG car illustration — custom-crafted per category.
 * Local (no CDN), brand-themed palette, premium look.
 */
function CarImage({ car }: { car: Car; variant?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 transition-transform duration-500 group-hover:scale-[1.08]">
      <CarIllustration car={car} />
    </div>
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
                  <CarImage car={car} />
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
