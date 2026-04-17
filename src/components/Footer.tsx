import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { contact } from '../data';

const fleetLinks = [
  { label: 'Эконом', href: '#fleet' },
  { label: 'Комфорт', href: '#fleet' },
  { label: 'Бизнес', href: '#fleet' },
  { label: 'Премиум', href: '#fleet' },
  { label: 'Внедорожники', href: '#fleet' },
];

const serviceLinks = [
  { label: 'Доставка в аэропорт', href: '#services' },
  { label: 'Долгосрочная аренда', href: '#services' },
  { label: 'С водителем', href: '#services' },
  { label: 'Для юрлиц', href: '#services' },
  { label: 'Корпоративам', href: '#services' },
];

const legalLinks = [
  { label: 'Договор аренды', href: '#' },
  { label: 'Условия и тарифы', href: '#pricing' },
  { label: 'Политика конфиденциальности', href: '#' },
  { label: 'Оферта', href: '#' },
  { label: 'Реквизиты', href: '#' },
];

const brandPartners = [
  'TOYOTA',
  'MERCEDES-BENZ',
  'BMW',
  'VOLKSWAGEN',
  'SKODA',
  'HYUNDAI',
  'KIA',
  'NISSAN',
  'RENAULT',
];

export default function Footer() {
  const phoneHref = `tel:${contact.phone.replace(/[^+\d]/g, '')}`;
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-bg border-t border-border">
      {/* Top section */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 lg:gap-16">
          {/* Logo + tagline + contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#top" className="inline-flex items-center gap-2 mb-6">
              <span className="font-display text-2xl tracking-tight text-text">
                RENT<span className="text-accent">-</span>
                <span className="lowercase">express</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,77,0,0.8)]" />
            </a>

            <p className="font-body text-[15px] text-text-muted leading-relaxed max-w-sm mb-8">
              {contact.tagline}. Без залога, с безлимитом пробега, круглосуточно.
            </p>

            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={phoneHref}
                  className="group inline-flex items-center gap-3 text-text hover:text-accent transition-colors"
                >
                  <Phone size={16} className="text-accent" />
                  <span className="font-mono text-sm">{contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group inline-flex items-center gap-3 text-text-muted hover:text-accent transition-colors"
                >
                  <Mail size={16} className="text-accent" />
                  <span className="font-mono text-sm">{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-text-muted hover:text-accent transition-colors"
                >
                  <MessageCircle size={16} className="text-accent" />
                  <span className="font-mono text-sm">WhatsApp · Telegram</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Columns */}
          {[
            { title: 'Автопарк', links: fleetLinks },
            { title: 'Сервис', links: serviceLinks },
            { title: 'Юридическое', links: legalLinks },
          ].map((col, colIdx) => (
            <motion.nav
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * (colIdx + 1) }}
              aria-label={col.title}
            >
              <h3 className="font-display text-xs font-bold tracking-[0.25em] uppercase text-accent mb-6">
                / {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-body text-[15px] text-text-muted hover:text-text transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </div>
      </div>

      {/* Mini-marquee with brand partners */}
      <div className="border-y border-border overflow-hidden py-5 bg-surface/40">
        <div className="marquee-track whitespace-nowrap">
          {[...brandPartners, ...brandPartners].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="inline-flex items-center gap-12 font-display text-sm font-bold tracking-[0.25em] uppercase text-text-dim hover:text-accent transition-colors"
            >
              {brand}
              <span className="w-1 h-1 rounded-full bg-accent/60" />
            </span>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="font-mono text-[11px] tracking-wider uppercase text-text-dim">
            © {year} RENT-express · Все права защищены
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-wider uppercase text-text-dim">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Сделано в Калининграде
          </div>
        </div>
      </div>
    </footer>
  );
}
