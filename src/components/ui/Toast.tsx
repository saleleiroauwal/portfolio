import { AnimatePresence, motion } from 'framer-motion';
import { Info, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onDismiss: () => void;
}

export function Toast({ message, onDismiss }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          role="status"
          aria-live="polite"
          className="fixed right-4 bottom-4 z-50 flex max-w-md items-start gap-3 rounded-xl border border-sky-500/30 bg-white px-4 py-3 text-sm text-slate-800 shadow-lg dark:border-sky-400/30 dark:bg-[#0F172A] dark:text-slate-100"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-500 dark:text-sky-400" />
          <p className="leading-snug">{message}</p>
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss notification"
            className="ml-1 shrink-0 rounded-md p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

