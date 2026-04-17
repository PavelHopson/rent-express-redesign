import { motion } from 'framer-motion';
import {
  Shield,
  Gauge,
  MapPin,
  Zap,
  Gift,
  Clock,
  type LucideIcon,
} from 'lucide-react';
import { usps, stats } from '../data';

const icons: LucideIcon[] = [Shield, Gauge, MapPin, Zap, Gift, Clock];

export default function Advantages() {
  return (
    <section id="advantages" className="stripes-bg relative bg-[#0A0A0B] py-24 md:py-32">
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
            <span className="label-brutal text-[#FF4D00]">ПОЧЕМУ МЫ</span>
            <h2 className="font-mega mt-3 text-[48px] md:text-[72px] lg:text-[88px] text-white text-balance">
              Шесть причин
              <br />
              <span className="text-[#FF4D00]">выбрать нас</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.6] text-[#A1A1AA]">
            Без компромиссов, без залогов, без скрытых платежей.
            Работаем в Калининграде третий год — репутация дороже разовой выгоды.
          </p>
        </motion.div>

        {/* USP grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-[#27272A] bg-[#27272A] md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {usps.map((usp, idx) => {
            const Icon = icons[idx] ?? Shield;
            return (
              <motion.div
                key={usp.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(idx * 0.06, 0.36),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col bg-[#0A0A0B] p-8 transition-colors duration-300 hover:bg-[#121214] md:p-10"
              >
                {/* Big number */}
                <div className="flex items-start justify-between">
                  <span
                    className="font-display select-none text-[88px] leading-[0.85] text-[#27272A] transition-colors duration-300 group-hover:text-[#FF4D00] md:text-[112px]"
                    aria-hidden="true"
                  >
                    {usp.number}
                  </span>
                  <Icon
                    className="h-6 w-6 text-[#52525B] transition-colors duration-300 group-hover:text-[#FF4D00]"
                    strokeWidth={2}
                  />
                </div>

                {/* Title + description */}
                <div className="mt-6">
                  <h3 className="font-display text-[24px] leading-[1.1] text-white md:text-[26px]">
                    {usp.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-[#A1A1AA] md:text-[15px]">
                    {usp.description}
                  </p>
                </div>

                {/* Bottom orange rail on hover */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-[#FF4D00] transition-[width] duration-500 ease-out group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 overflow-hidden rounded-[8px] border border-[#27272A] bg-[#121214] md:mt-14"
        >
          <div className="grid grid-cols-2 divide-x divide-y divide-[#27272A] md:grid-cols-3 md:divide-y-0 lg:grid-cols-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-start gap-1 px-5 py-6 md:px-6 md:py-7"
              >
                <span className="font-mono text-[22px] font-bold leading-none text-white md:text-[26px]">
                  {stat.value}
                </span>
                <span className="label-brutal mt-2 text-[#71717A]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
