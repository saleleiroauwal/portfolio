import { useState } from 'react';
import { BookOpen, Compass, GraduationCap, Target, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Badge } from '../components/ui/Badge';
import { SectionHeading } from '../components/ui/SectionHeading';

export function AboutSection() {
  const [photoError, setPhotoError] = useState(false);

  const highlights = [
    {
      icon: GraduationCap,
      data: profileData.about.academicBackground,
    },
    {
      icon: Compass,
      data: profileData.about.careerInterests,
    },
    {
      icon: Target,
      data: profileData.about.professionalObjectives,
    },
  ];

  return (
    <section
      id="about"
      className="border-t border-slate-200/70 bg-slate-100/50 py-20 sm:py-24 dark:border-slate-800/70 dark:bg-[#0A101F]/60"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 / About Me"
          title="Bridging Analytical Intelligence & Modern Software Craft"
          description="Grounded in Computer Science fundamentals, driven by machine learning research curiosity, and committed to building clean, human-centered web experiences."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-4"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs dark:border-slate-800/90 dark:bg-[#0D1425]">
              {profileData.photoUrl && !photoError ? (
                <img
                  src={profileData.photoUrl}
                  alt={profileData.photoAlt}
                  loading="lazy"
                  onError={() => setPhotoError(true)}
                  className="aspect-4/5 w-full rounded-xl object-cover object-top"
                />
              ) : (
                <div className="flex aspect-4/5 w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center dark:border-slate-700/80 dark:bg-[#080E1D]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400">
                    <User className="h-8 w-8" />
                  </div>
                  <p className="mt-4 font-mono text-xs font-medium text-slate-700 dark:text-slate-300">
                    {profileData.fullName}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {profileData.title}
                  </p>
                </div>
              )}

              <div className="mt-4 flex items-center justify-between gap-2 px-1 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <BookOpen className="h-3.5 w-3.5 shrink-0 text-sky-500 dark:text-sky-400" />
                  {profileData.fullName}
                </span>
                <span className="font-mono whitespace-nowrap">Computer Science</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="space-y-6 lg:col-span-8"
          >
            <div className="space-y-4 rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-xs sm:p-7 dark:border-slate-800/90 dark:bg-[#0D1425]">
              {profileData.about.biography.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, data }) => (
                <div
                  key={data.label}
                  className="flex flex-col rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-xs dark:border-slate-800/90 dark:bg-[#0D1425]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/25 bg-sky-500/10 text-sky-600 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    {data.isPlaceholder && (
                      <Badge tone="subtle" className="text-[10px]">
                        Editable
                      </Badge>
                    )}
                  </div>
                  <h3 className="mt-3.5 text-sm font-bold text-slate-900 dark:text-white">
                    {data.label}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {data.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

