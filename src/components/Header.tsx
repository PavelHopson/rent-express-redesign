import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { contact } from '../data';

type NavLink = { href: string; label: string };

const navLinks: NavLink[] = [
  { href: '#fleet', label: 'Автопарк' },
  { href: '#services', label: 'Услуги' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#guarantees', label: 'Гарантии' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const phoneHref = `tel:${contact.phone.replace(/[^+\d]/g, '')}`;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={[
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg/90 backdrop-blur-xl border-b border-border'
            : 'bg-transparent border-b border-transparent',
        ].join(' ')}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <div
            className={[
              'flex items-center justify-between transition-all duration-300',
              scrolled ? 'h-16' : 'h-20',
            ].join(' ')}
          >
            {/* Logo */}
            <a
              href="#top"
              className="flex items-center gap-2 group"
              aria-label="RENT-express home"
            >
              <span className="font-display text-xl md:text-2xl tracking-tight text-text">
                RENT
                <span className="text-accent">-</span>
                <span className="lowercase">express</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,77,0,0.8)] group-hover:scale-125 transition-transform" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 font-display text-[13px] font-bold tracking-[0.18em] uppercase text-text-muted hover:text-text transition-colors group"
                >
                  {link.label}
                  <span className="absolute left-4 right-4 bottom-1 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3 md:gap-5">
              <a
                href={phoneHref}
                className="hidden md:flex items-center gap-2 font-mono text-sm font-medium text-text hover:text-accent transition-colors"
              >
                <Phone size={16} className="text-accent" />
                <span className="tracking-tight">{contact.phone}</span>
              </a>

              <a href="#booking" className="hidden sm:inline-flex btn-brutal !py-3 !px-5 !text-[13px]">
                Забронировать
              </a>

              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-11 h-11 inline-flex items-center justify-center border-2 border-border-bright rounded text-text hover:border-accent hover:text-accent transition-colors"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-bg lg:hidden"
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col h-full"
            >
              <div className="flex items-center justify-between h-20 px-5 md:px-10 border-b border-border">
                <a href="#top" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <span className="font-display text-xl tracking-tight">
                    RENT<span className="text-accent">-</span>
                    <span className="lowercase">express</span>
                  </span>
                  <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,77,0,0.8)]" />
                </a>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="w-11 h-11 inline-flex items-center justify-center border-2 border-border-bright rounded text-text hover:border-accent hover:text-accent transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-6 md:px-10">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                    className="group flex items-center justify-between py-5 border-b border-border"
                  >
                    <span className="font-mega text-4xl md:text-6xl uppercase text-text group-hover:text-accent transition-colors">
                      {link.label}
                    </span>
                    <span className="font-mono text-xs text-text-dim tracking-widest">
                      0{i + 1}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="px-6 md:px-10 py-8 border-t border-border flex flex-col gap-4">
                <a
                  href={phoneHref}
                  className="flex items-center gap-3 font-mono text-lg text-text hover:text-accent transition-colors"
                >
                  <Phone size={20} className="text-accent" />
                  {contact.phone}
                </a>
                <a
                  href="#booking"
                  onClick={() => setMobileOpen(false)}
                  className="btn-brutal justify-center w-full"
                >
                  Забронировать
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
