import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-bg">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-accent" />
              <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-accent">
                Отзывы / 107 клиентов
              </span>
            </div>
            <h2 className="font-mega text-hero uppercase text-text">
              Пишут <span className="text-accent">о нас</span>
            </h2>
          </div>

          {/* Big rating display */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-baseline gap-4">
              <span className="font-mega text-[clamp(4rem,9vw,7rem)] leading-none text-text">
                4.9
              </span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
            </div>
            <span className="font-mono text-xs tracking-widest uppercase text-text-dim">
              Средняя оценка · Yandex · 2GIS
            </span>
          </div>
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card-brutal group relative p-8 flex flex-col min-h-[360px]"
            >
              {/* Decorative quote */}
              <span
                aria-hidden="true"
                className="absolute top-4 left-6 font-mega text-[7rem] leading-none text-accent/20 select-none pointer-events-none group-hover:text-accent/40 transition-colors"
              >
                “
              </span>

              {/* Corner accent on hover */}
              <span className="absolute top-0 right-0 w-0 h-[3px] bg-accent transition-all duration-500 group-hover:w-24" />

              {/* Review text */}
              <p className="relative font-body text-[15px] leading-relaxed text-text-muted group-hover:text-text transition-colors pt-8 flex-1">
                {t.text}
              </p>

              {/* Divider */}
              <div className="mt-6 pt-6 border-t border-border group-hover:border-accent/40 transition-colors flex items-center justify-between">
                <div>
                  <div className="font-display text-base font-bold tracking-tight text-text">
                    {t.name}
                  </div>
                  <div className="font-mono text-xs tracking-wider uppercase text-text-dim mt-1">
                    {t.role}
                  </div>
                </div>
                <div className="flex gap-0.5" aria-label={`Rating ${t.rating} of 5`}>
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
