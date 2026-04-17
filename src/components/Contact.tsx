import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
} from 'lucide-react';
import { contact, locations } from '../data';

const methods = [
  {
    label: 'Позвонить',
    value: contact.phone,
    href: `tel:${contact.phone.replace(/[^+\d]/g, '')}`,
    Icon: Phone,
  },
  {
    label: 'WhatsApp',
    value: 'Быстрый ответ',
    href: contact.whatsapp,
    Icon: MessageCircle,
    external: true,
  },
  {
    label: 'Telegram',
    value: '@rentkld',
    href: contact.telegram,
    Icon: MessageCircle,
    external: true,
  },
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    Icon: Mail,
  },
];

export default function Contact() {
  return (
    <section id="contacts" className="relative py-24 md:py-32 stripes-bg bg-bg">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-accent" />
            <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-accent">
              Связь
            </span>
          </div>
          <h2 className="font-mega text-hero uppercase text-text">
            Три способа <br />
            <span className="text-accent">нас найти</span>
          </h2>
        </motion.div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {locations.map((loc, i) => {
            const Icon = loc.name.toLowerCase().includes('аэропорт') ? Plane : MapPin;
            const phoneHref = `tel:${loc.phone.replace(/[^+\d]/g, '')}`;
            return (
              <motion.article
                key={loc.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="card-brutal group relative p-8 flex flex-col"
              >
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-accent/10 text-accent group-hover:bg-accent group-hover:text-bg transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="font-mono text-[11px] tracking-widest uppercase text-text-dim">
                    0{i + 1} / 03
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-text mb-3">
                  {loc.name}
                </h3>

                {/* Address */}
                <p className="font-body text-[15px] text-text-muted leading-relaxed mb-5">
                  {loc.address}
                </p>

                {/* Hours */}
                <div className="flex items-center gap-2 mb-6 pb-6 border-b border-border group-hover:border-accent/40 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                  <span className="font-mono text-xs tracking-wider uppercase text-text-muted">
                    {loc.hours}
                  </span>
                </div>

                {/* Phone */}
                <a
                  href={phoneHref}
                  className="mt-auto flex items-center justify-between group/phone"
                >
                  <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-text group-hover/phone:text-accent transition-colors">
                    {loc.phone}
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-text-dim arrow-shift group-hover/phone:text-accent"
                  />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 border-t border-border"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <div>
              <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-text-dim">
                / Или напишите
              </span>
              <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight text-text">
                Выберите удобный канал
              </h3>
            </div>
            <p className="font-body text-[15px] text-text-muted max-w-md">
              Отвечаем в течение 2 минут в рабочее время. В нерабочее — максимум 30 минут.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {methods.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="btn-outline group !justify-between !px-5 !py-6 flex-col items-start gap-5 min-h-[140px]"
              >
                <div className="flex items-center justify-between w-full">
                  <Icon
                    size={22}
                    className="text-accent transition-transform group-hover:scale-110"
                  />
                  <ArrowRight
                    size={18}
                    className="arrow-shift opacity-40 group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-col items-start gap-1 normal-case tracking-normal">
                  <span className="font-display text-base font-bold uppercase tracking-wider">
                    {label}
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-text-dim group-hover:text-text transition-colors">
                    {value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
