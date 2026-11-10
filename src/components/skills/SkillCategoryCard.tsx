import { BrainCircuit, Code2, Layers, Layout, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import type { SkillCategory } from '../../types/portfolio';
import { cn } from '../../utils/cn';

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

const iconMap = {
  brain: BrainCircuit,
  layers: Layers,
  code: Code2,
  layout: Layout,
  terminal: Terminal,
} as const;

export function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  const Icon = iconMap[category.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
      className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-xs transition-colors duration-200 hover:border-sky-500/40 dark:border-slate-800/90 dark:bg-[#0D1425]/95 dark:hover:border-sky-400/35"
    >
      <div className="flex items-start gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-500/25 bg-sky-500/10 text-sky-600 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-400">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
            {category.title}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            {category.description}
          </p>
        </div>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill.name}
            title={skill.note}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors',
              skill.isEditableNote
                ? 'border-dashed border-sky-500/40 bg-sky-500/5 text-sky-700 dark:border-sky-400/40 dark:bg-sky-400/5 dark:text-sky-300'
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-500/40 dark:border-slate-800 dark:bg-[#080E1D] dark:text-slate-200 dark:hover:border-sky-400/35',
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500/80 dark:bg-sky-400/80" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>

      {category.editableHint && (
        <p className="mt-4 border-t border-slate-200/70 pt-3 text-[11px] text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
          {category.editableHint}
        </p>
      )}
    </motion.div>
  );
}

