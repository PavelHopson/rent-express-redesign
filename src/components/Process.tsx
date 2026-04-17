import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { process } from '../data';

export default function Process() {
  return (
    <section id="process" className="relative bg-[#0A0A0B] py-24 md:py-32">
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
            <span className="label-brutal text-[#FF4D00]">КАК ЭТО РАБОТАЕТ</span>
            <h2 className="font-mega mt-3 text-[48px] md:text-[72px] lg:text-[88px] text-white text-balance">
              Четыре шага
              <br />
              <span className="text-[#FF4D00]">до ключей</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.6] text-[#A1A1AA]">
            Никакой бюрократии. Никаких очередей.
            Приехал — подписал — забрал ключи. Процесс выстроен под скорость.
          </p>
        </motion.div>

        {/* Steps row */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {process.map((step, idx) => {
            const isLast = idx === process.length - 1;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                <div className="card-brutal group flex h-full flex-col p-6 md:p-7">
                  {/* Step number */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-display text-[64px] leading-[0.85] text-[#FF4D00] md:text-[80px]"
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>
                    <span className="label-brutal text-[#52525B]">
                      ШАГ / {step.step}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="mt-6 h-px w-12 bg-[#FF4D00]" />

                  {/* Title + description */}
                  <h3 className="font-display mt-5 text-[22px] leading-[1.15] text-white md:text-[24px]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-[#A1A1AA] md:text-[15px]">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow (desktop only, not after last) */}
                {!isLast && (
                  <div
                    className="pointer-events-none absolute right-[-14px] top-1/2 z-10 hidden -translate-y-1/2 lg:block"
                    aria-hidden="true"
                  >
                    <div className="flex items-center">
                      <div className="h-px w-6 bg-[#27272A]" />
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#FF4D00] bg-[#0A0A0B]">
                        <ArrowRight className="h-3.5 w-3.5 text-[#FF4D00]" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Average time callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-start gap-4 rounded-[8px] border border-[#27272A] bg-[#121214] p-6 md:mt-16 md:flex-row md:items-center md:justify-between md:p-7"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] bg-[#FF4D00]">
              <Clock className="h-5 w-5 text-[#0A0A0B]" strokeWidth={2.5} />
            </div>
            <div>
              <div className="label-brutal text-[#FF4D00]">СРЕДНЕЕ ВРЕМЯ</div>
              <p className="font-display mt-1 text-[18px] leading-[1.3] text-white md:text-[20px]">
                От заявки до выдачи авто —{' '}
                <span className="text-[#FF4D00]">10 минут</span>
              </p>
            </div>
          </div>
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 rounded-[4px] border-2 border-[#27272A] px-5 py-3 font-display text-[12px] uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:border-[#FF4D00] hover:text-[#FF4D00]"
          >
            Оставить заявку
            <ArrowRight className="arrow-shift h-4 w-4" strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
