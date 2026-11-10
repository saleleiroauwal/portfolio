import { useEffect, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_ITEMS } from '../../config/site';
import { profileData } from '../../data/profile';
import type { ThemeMode } from '../../types/portfolio';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';

interface NavbarProps {
  activeSection: string;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onNavigateHome?: () => void;
  onCvDownload?: () => void;
}

export function Navbar({
  activeSection,
  theme,
  onToggleTheme,
  onNavigateHome,
  onCvDownload,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    if (onNavigateHome) {
      onNavigateHome();
      requestAnimationFrame(() => {
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200',
        scrolled
          ? 'border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#070B14]/85'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={() => handleLinkClick('#home')}
          className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 font-mono text-xs font-bold tracking-tight text-sky-600 transition-colors group-hover:border-sky-500/60 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-300">
            {profileData.initials}
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-bold tracking-tight whitespace-nowrap text-slate-900 dark:text-white">
              {profileData.fullName}
            </span>
            <span className="hidden text-[11px] font-medium text-slate-500 sm:block dark:text-slate-400">
              AI/ML &amp; Frontend
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
                  isActive
                    ? 'text-sky-600 dark:text-sky-400'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-sky-500 dark:bg-sky-400"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
            }
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white/80 text-slate-700 transition-colors hover:border-sky-500/50 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-sky-400/50 dark:hover:text-sky-300 cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <div className="hidden sm:block">
            <Button
              href={profileData.contact.cvUrl}
              download={profileData.contact.cvDownloadName}
              onClick={onCvDownload}
              variant="primary"
              size="sm"
            >
              <Download className="h-3.5 w-3.5" />
              Download CV
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white/80 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 lg:hidden dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800 cursor-pointer"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-md lg:hidden dark:border-slate-800 dark:bg-[#070B14]/95"
          >
            <nav
              className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
              aria-label="Mobile navigation"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={cn(
                      'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-sky-500/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70',
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="mt-2 border-t border-slate-200 pt-3 dark:border-slate-800">
                <Button
                  href={profileData.contact.cvUrl}
                  download={profileData.contact.cvDownloadName}
                  onClick={() => {
                    setMobileOpen(false);
                    onCvDownload?.();
                  }}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

