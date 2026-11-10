import React from 'react';
import { cn } from '../../utils/cn';

type BadgeTone = 'neutral' | 'accent' | 'amber' | 'emerald' | 'subtle';

interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}

const toneStyles: Record<BadgeTone, string> = {
  neutral:
    'border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-300',
  accent:
    'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-300',
  amber:
    'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-300',
  emerald:
    'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300',
  subtle:
    'border-slate-200/80 bg-transparent text-slate-500 dark:border-slate-800 dark:text-slate-400',
};

export function Badge({ children, tone = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium leading-5',
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

