import { useState } from 'react';
import {
  ArrowDownRight,
  Cpu,
  Download,
  Github,
  Layers,
  Mail,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Button } from '../components/ui/Button';

interface HeroSectionProps {
  onUnconfiguredSocial: (platform: string) => void;
  onCvDownload?: () => void;
}

export function HeroSection({ onUnconfiguredSocial, onCvDownload }: HeroSectionProps) {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 pb-20 sm:pt-18 sm:pb-28 lg:pt-24 lg:pb-32"
    >
      {/* Subtle architectural background radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-220 -translate-x-1/2 rounded-full bg-sky-500/8 blur-3xl dark:bg-sky-400/10"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 1, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 font-mono text-xs font-medium text-sky-700 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-300">
                <Cpu className="h-3.5 w-3.5" />
                {profileData.title}
              </span>

              {profileData.availabilityStatus && (
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  {profileData.availabilityStatus}
                </span>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 1, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.03, ease: 'easeOut' }}
              className="mt-6 text-sm font-semibold tracking-wide text-slate-600 sm:text-base dark:text-slate-300"
            >
              {profileData.fullName}
              <span className="mx-2.5 text-slate-300 dark:text-slate-700">|</span>
              <span className="font-normal text-slate-500 dark:text-slate-400">
                {profileData.subtitle}
              </span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 1, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.05, ease: 'easeOut' }}
              className="mt-3 text-3xl leading-[1.15] font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.85rem] dark:text-white"
            >
              {profileData.heroHeadline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 1, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.07, ease: 'easeOut' }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
            >
              {profileData.heroIntro}
            </motion.p>

            <motion.div
              initial={{ opacity: 1, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.09, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href="#projects" variant="primary" size="lg">
                View My Projects
                <ArrowDownRight className="h-4 w-4" />
              </Button>

              <Button
                href={profileData.contact.cvUrl}
                download={profileData.contact.cvDownloadName}
                onClick={onCvDownload}
                variant="outline"
                size="lg"
              >
                <Download className="h-4 w-4" />
                Download My CV
              </Button>

              <Button href="#contact" variant="ghost" size="lg">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="mt-7 flex items-center gap-3"
            >
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                Profiles:
              </span>
              {profileData.contact.githubUrl ? (
                <a
                  href={profileData.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-sky-400/50 dark:hover:text-sky-300"
                >
                  <Github className="h-4 w-4" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onUnconfiguredSocial('GitHub')}
                  aria-label="GitHub profile configuration"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-sky-400/50 dark:hover:text-sky-300 cursor-pointer"
                >
                  <Github className="h-4 w-4" />
                </button>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.06, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-sm dark:border-slate-800/90 dark:bg-[#0B1222]/95">
              {/* Subtle corner indicator */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-500/80 dark:bg-sky-400" />
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    profile.identity
                  </span>
                </div>
                <span className="font-mono text-[11px] text-sky-600 dark:text-sky-400">
                  CS / AI &amp; Web
                </span>
              </div>

              <div className="mt-6 flex flex-col items-center text-center">
                {profileData.photoUrl && !photoError ? (
                  <div className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-slate-100 shadow-sm dark:border-sky-400/25 dark:bg-[#081021]">
                    <img
                      src={profileData.photoUrl}
                      alt={profileData.photoAlt}
                      onError={() => setPhotoError(true)}
                      className="aspect-4/5 w-44 object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-2xl border border-sky-500/30 bg-linear-to-br from-slate-100 to-sky-50 dark:from-[#0F1B33] dark:to-[#081021]">
                    <span className="font-mono text-3xl font-bold tracking-wider text-sky-600 dark:text-sky-300">
                      {profileData.initials}
                    </span>
                    <motion.span
                      aria-hidden="true"
                      animate={{ opacity: [0.35, 0.85, 0.35] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-2 rounded-xl border border-dashed border-sky-500/30 dark:border-sky-400/25"
                    />
                  </div>
                )}

                <h2 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  {profileData.fullName}
                </h2>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {profileData.title}
                </p>
              </div>

              <div className="mt-6 space-y-2.5 border-t border-slate-200/80 pt-5 dark:border-slate-800">
                <div className="flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/80 px-3.5 py-2.5 text-xs dark:border-slate-800/80 dark:bg-[#080E1D]">
                  <span className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
                    <Sparkles className="h-3.5 w-3.5 text-sky-500 dark:text-sky-400" />
                    Core Focus
                  </span>
                  <span className="font-mono text-slate-500 dark:text-slate-400">
                    ML &amp; Deep Learning
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/80 px-3.5 py-2.5 text-xs dark:border-slate-800/80 dark:bg-[#080E1D]">
                  <span className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
                    <Layers className="h-3.5 w-3.5 text-sky-500 dark:text-sky-400" />
                    Engineering
                  </span>
                  <span className="font-mono text-slate-500 dark:text-slate-400">
                    React &amp; TypeScript
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

