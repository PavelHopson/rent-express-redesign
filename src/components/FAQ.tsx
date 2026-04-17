import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Phone, Plus } from 'lucide-react';
import { contact, faq } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const phoneHref = `tel:${contact.phone.replace(/[^+\d]/g, '')}`;

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-bg">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28 self-start"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-accent" />
              <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-accent">
                Ответы
              </span>
            </div>
            <h2 className="font-mega text-hero uppercase text-text mb-8">
              Часто <br />
              <span className="text-accent">спрашивают</span>
            </h2>

            {/* Help card */}
            <div className="card-brutal p-8 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-accent/10 text-accent mb-5 group-hover:bg-accent group-hover:text-bg transition-colors">
                <Phone size={22} />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-text mb-2">
                Не нашли ответ?
              </h3>
              <p className="font-body text-[15px] text-text-muted mb-5 leading-relaxed">
                Позвоните нам. Менеджер ответит в течение 30 секунд и расскажет всё по вашей ситуации.
              </p>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 font-display text-lg font-bold text-text hover:text-accent transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {contact.phone}
              </a>
            </div>
          </motion.div>

          {/* Right column — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border"
          >
            {faq.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.q}
                  className={[
                    'relative border-b border-border transition-colors',
                    isOpen ? 'bg-surface/40' : 'hover:bg-surface/20',
                  ].join(' ')}
                >
                  {/* Active left accent */}
                  <span
                    aria-hidden="true"
                    className={[
                      'absolute left-0 top-0 bottom-0 w-1 bg-accent transition-transform origin-top',
                      isOpen ? 'scale-y-100' : 'scale-y-0',
                    ].join(' ')}
                  />

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 pl-6 pr-4 text-left group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs tracking-widest text-text-dim pt-1">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={[
                          'font-display text-lg md:text-xl font-bold tracking-tight transition-colors',
                          isOpen ? 'text-text' : 'text-text group-hover:text-accent',
                        ].join(' ')}
                      >
                        {item.q}
                      </span>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className={[
                        'shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-sm border-2 transition-colors',
                        isOpen
                          ? 'bg-accent border-accent text-bg'
                          : 'border-border-bright text-text group-hover:border-accent group-hover:text-accent',
                      ].join(' ')}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-16 pr-6 pb-8 -mt-1">
                          <p className="font-body text-[15px] md:text-base leading-relaxed text-text-muted max-w-2xl">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
