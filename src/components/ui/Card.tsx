import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-xs backdrop-blur-xs dark:border-slate-800/90 dark:bg-[#0D1425]/90',
        interactive &&
          'transition-colors duration-200 hover:border-sky-500/40 dark:hover:border-sky-400/35',
        className,
      )}
    >
      {children}
    </div>
  );
}

