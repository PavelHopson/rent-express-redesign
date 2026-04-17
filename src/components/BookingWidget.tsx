import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

type LocationOption = { value: string; label: string };

const locationOptions: LocationOption[] = [
  { value: 'office-kievskaya', label: 'Офис Киевская' },
  { value: 'office-nevskogo', label: 'Офис А. Невского' },
  { value: 'airport-khrabrovo', label: 'Аэропорт Храброво' },
];

function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export default function BookingWidget() {
  const [pickupLocation, setPickupLocation] = useState(locationOptions[0].value);
  const [returnLocation, setReturnLocation] = useState(locationOptions[0].value);
  const [pickupDate, setPickupDate] = useState(todayISO(1));
  const [pickupTime, setPickupTime] = useState('10:00');
  const [returnDate, setReturnDate] = useState(todayISO(4));
  const [returnTime, setReturnTime] = useState('10:00');

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { rootMargin: '-80px 0px 0px 0px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fleet = document.getElementById('fleet');
    if (fleet) fleet.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Sentinel used to detect when the widget passes the header */}
      <div ref={sentinelRef} aria-hidden="true" />

      <motion.section
        id="booking"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={[
          'relative z-40 transition-all duration-300',
          // Overlap hero bottom on large screens; stay in flow on small
          '-mt-10 md:-mt-14 lg:-mt-20',
          isSticky
            ? 'lg:sticky lg:top-16'
            : 'lg:static',
        ].join(' ')}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <form
            onSubmit={handleSubmit}
            className="relative bg-surface border-2 border-accent rounded-[4px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),8px_8px_0_0_#0A0A0B] overflow-hidden"
          >
            {/* Top ribbon label */}
            <div className="flex items-center justify-between px-5 md:px-6 py-3 bg-bg border-b-2 border-accent">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,77,0,0.8)] animate-pulse-slow" />
                <span className="font-display font-bold text-[11px] tracking-[0.2em] uppercase text-text">
                  Бронирование · в режиме реального времени
                </span>
              </div>
              <span className="hidden md:inline font-mono text-[11px] tracking-wider text-text-dim">
                RENT/2026
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_1.2fr_1.1fr_1.2fr_auto] gap-0">
              {/* Pickup location */}
              <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r-2 border-border">
                <label className="label-brutal flex items-center gap-2" htmlFor="pickup-location">
                  <MapPin size={12} strokeWidth={2.5} className="text-accent" />
                  Место получения
                </label>
                <div className="relative">
                  <select
                    id="pickup-location"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="input-brutal appearance-none pr-10 cursor-pointer"
                  >
                    {locationOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-dim"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
              </div>

              {/* Pickup date + time */}
              <div className="p-5 md:p-6 border-b md:border-b-0 lg:border-r-2 border-border">
                <label className="label-brutal flex items-center gap-2" htmlFor="pickup-date">
                  <Calendar size={12} strokeWidth={2.5} className="text-accent" />
                  Дата получения
                </label>
                <div className="grid grid-cols-[1fr_auto] gap-2">
                  <input
                    id="pickup-date"
                    type="date"
                    value={pickupDate}
                    min={todayISO(0)}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="input-brutal"
                  />
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="input-brutal !w-24 font-mono"
                    aria-label="Время получения"
                  />
                </div>
              </div>

              {/* Return location */}
              <div className="p-5 md:p-6 border-b md:border-b-0 md:border-t-2 lg:border-t-0 md:border-r-2 border-border">
                <label className="label-brutal flex items-center gap-2" htmlFor="return-location">
                  <MapPin size={12} strokeWidth={2.5} className="text-accent" />
                  Место возврата
                </label>
                <div className="relative">
                  <select
                    id="return-location"
                    value={returnLocation}
                    onChange={(e) => setReturnLocation(e.target.value)}
                    className="input-brutal appearance-none pr-10 cursor-pointer"
                  >
                    {locationOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-dim"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
              </div>

              {/* Return date + time */}
              <div className="p-5 md:p-6 md:border-t-2 lg:border-t-0 lg:border-r-2 border-border">
                <label className="label-brutal flex items-center gap-2" htmlFor="return-date">
                  <Calendar size={12} strokeWidth={2.5} className="text-accent" />
                  Дата возврата
                </label>
                <div className="grid grid-cols-[1fr_auto] gap-2">
                  <input
                    id="return-date"
                    type="date"
                    value={returnDate}
                    min={pickupDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="input-brutal"
                  />
                  <input
                    type="time"
                    value={returnTime}
                    onChange={(e) => setReturnTime(e.target.value)}
                    className="input-brutal !w-24 font-mono"
                    aria-label="Время возврата"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="p-5 md:p-6 md:col-span-2 lg:col-span-1 bg-bg/40 border-t-2 lg:border-t-0 lg:border-l-0 border-border flex items-end">
                <button
                  type="submit"
                  className="btn-brutal group !w-full !py-5 !text-base whitespace-nowrap"
                >
                  Найти авто
                  <ArrowRight
                    size={20}
                    strokeWidth={2.5}
                    className="arrow-shift"
                  />
                </button>
              </div>
            </div>
          </form>

          {/* Foot note */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 px-1">
            <span className="font-mono text-xs text-text-dim">
              → Мгновенное подтверждение · Без предоплаты · Отмена бесплатно
            </span>
            <span className="font-display text-[11px] tracking-[0.2em] uppercase text-accent">
              · Доступно 42+ авто прямо сейчас
            </span>
          </div>
        </div>
      </motion.section>
    </>
  );
}
