import { ArrowUp, Github, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../../config/site';
import { profileData } from '../../data/profile';

interface FooterProps {
  onUnconfiguredSocial: (platform: string) => void;
}

export function Footer({ onUnconfiguredSocial }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white/70 dark:border-slate-800/80 dark:bg-[#050811]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 font-mono text-xs font-bold text-sky-600 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-300">
                {profileData.initials}
              </span>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {profileData.fullName}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {profileData.footerSummary}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              Navigation
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 md:flex md:flex-col md:items-end">
            <p className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              Connect
            </p>
            <div className="mt-3 flex items-center gap-2.5">
              {profileData.contact.githubUrl ? (
                <a
                  href={profileData.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-sky-400/50 dark:hover:text-sky-300"
                >
                  <Github className="h-4 w-4" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onUnconfiguredSocial('GitHub')}
                  aria-label="GitHub profile configuration info"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-sky-400/50 dark:hover:text-sky-300 cursor-pointer"
                >
                  <Github className="h-4 w-4" />
                </button>
              )}

              <a
                href={
                  profileData.contact.isEmailPlaceholder
                    ? '#contact'
                    : `mailto:${profileData.contact.email}`
                }
                aria-label="Email contact"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-sky-400/50 dark:hover:text-sky-300"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 sm:flex-row dark:border-slate-800/80">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            &copy; {currentYear} {profileData.fullName}.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-sky-500/50 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-slate-800 dark:text-slate-300 dark:hover:border-sky-400/50 dark:hover:text-sky-300 cursor-pointer"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

