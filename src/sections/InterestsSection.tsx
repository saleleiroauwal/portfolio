import {
  Code2,
  Compass,
  Cpu,
  Eye,
  FlaskConical,
  Network,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { interestsData } from '../data/interests';
import { SectionHeading } from '../components/ui/SectionHeading';

const iconMap = {
  cpu: Cpu,
  flask: FlaskConical,
  network: Network,
  eye: Eye,
  sparkles: Sparkles,
  code: Code2,
  compass: Compass,
} as const;

export function InterestsSection() {
  return (
    <section
      id="interests"
      className="border-t border-slate-200/70 bg-slate-100/50 py-20 sm:py-24 dark:border-slate-800/70 dark:bg-[#0A101F]/60"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 / Professional Interests"
          title="Domains & Research Focus Areas"
          description="Technical disciplines where I actively explore, build prototypes, and expand my engineering depth."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {interestsData.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
                className="flex flex-col rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-xs transition-colors duration-200 hover:border-sky-500/40 dark:border-slate-800/90 dark:bg-[#0D1425] dark:hover:border-sky-400/35"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/25 bg-sky-500/10 text-sky-600 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

