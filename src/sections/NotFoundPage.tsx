import { ArrowLeft, Compass } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface NotFoundPageProps {
  path: string;
  onGoHome: () => void;
}

export function NotFoundPage({ path, onGoHome }: NotFoundPageProps) {
  return (
    <main className="flex min-h-[75vh] items-center justify-center px-4 py-20 sm:px-6">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200/90 bg-white/95 p-8 text-center shadow-sm dark:border-slate-800/90 dark:bg-[#0D1425]">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400">
          <Compass className="h-6 w-6" />
        </div>
        <p className="mt-5 font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-400">
          404 / Route Not Found
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Page Not Available
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          The requested path <code className="font-mono text-sky-600 dark:text-sky-400">{path}</code> does
          not exist on this single-page portfolio.
        </p>
        <div className="mt-6 flex justify-center">
          <Button variant="primary" size="md" onClick={onGoHome}>
            <ArrowLeft className="h-4 w-4" />
            Return to Portfolio
          </Button>
        </div>
      </div>
    </main>
  );
}

