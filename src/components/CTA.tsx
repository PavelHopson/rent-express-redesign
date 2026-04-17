import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield } from 'lucide-react';
import { contact } from '../data';

export default function CTA() {
  const phoneHref = `tel:${contact.phone.replace(/[^+\d]/g, '')}`;

  return (
    <section className="relative overflow-hidden">
      {/* Background: orange → black gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-accent via-accent-dim to-bg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(10,10,11,0.9),_transparent_60%)]"
      />

      {/* Racing stripes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0 40px, #000 40px 42px, transparent 42px 82px, #000 82px 84px)',
        }}
      />

      {/* Corner stripe block — decorative */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-72 h-72 rotate-12 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #0A0A0B 0 12px, transparent 12px 24px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-10 -left-10 w-80 h-80 -rotate-6 opacity-15"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #FAFAFA 0 10px, transparent 10px 20px)',
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-10 py-24 md:py-36">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-10 h-[2px] bg-bg" />
          <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-bg">
            / Пора ехать
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-20 items-end">
          {/* Left — headline + subtitle + CTAs */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-mega text-mega uppercase text-bg text-balance"
            >
              Готовы <br />
              поехать<span className="text-text">?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 font-body text-lg md:text-xl leading-relaxed text-bg/80 max-w-xl"
            >
              Выберите авто. Мы доставим ключи. Десять минут — и вы на дороге.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              {/* White inverted btn-brutal */}
              <a
                href="#fleet"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded border-2 border-bg bg-bg text-text font-display font-bold text-[15px] tracking-[0.02em] uppercase transition-all hover:bg-text hover:text-bg hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#FAFAFA]"
              >
                Выбрать авто
                <ArrowRight size={18} className="arrow-shift" />
              </a>

              {/* Outline inverted — dark border on orange bg */}
              <a
                href={phoneHref}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded border-2 border-bg/80 text-bg font-display font-bold text-[15px] tracking-[0.02em] uppercase transition-all hover:bg-bg hover:text-text hover:-translate-y-0.5"
              >
                <Phone size={18} />
                {contact.phone}
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-3"
            >
              <Shield size={16} className="text-bg" />
              <span className="font-mono text-xs tracking-wider uppercase text-bg/70">
                Без залога · Безлимит пробега · Страховка включена
              </span>
            </motion.div>
          </div>

          {/* Right — big index badge */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-end gap-6 pb-2"
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-bg/80">
              / 10 минут
            </span>
            <div className="font-mega text-[clamp(8rem,16vw,15rem)] leading-none text-bg/15 select-none">
              42+
            </div>
            <span className="font-display text-sm font-bold tracking-widest uppercase text-bg text-right max-w-[200px]">
              Авто в парке —<br />
              готовы к выдаче
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
