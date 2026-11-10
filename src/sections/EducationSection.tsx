import { BookMarked, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { educationData } from '../data/education';
import { Badge } from '../components/ui/Badge';
import { SectionHeading } from '../components/ui/SectionHeading';

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 / Education"
          title="Academic Foundation"
          description="Computer science degree background, academic focus areas, and core competencies."
        />

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-xs sm:p-8 dark:border-slate-800/90 dark:bg-[#0D1425]"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-500/25 bg-sky-500/10 text-sky-600 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-sky-600 sm:text-base dark:text-sky-400">
                      {edu.institution}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                      {edu.department}
                    </p>
                  </div>
                </div>

                {(edu.graduationYear || edu.isPlaceholder) && (
                  <div className="flex flex-col items-end gap-1.5">
                    {edu.graduationYear && (
                      <Badge tone="neutral">{edu.graduationYear}</Badge>
                    )}
                    {edu.isPlaceholder && (
                      <Badge tone="subtle" className="text-[10px]">
                        Editable Placeholder
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-6 grid gap-8 border-t border-slate-200/80 pt-6 md:grid-cols-12 dark:border-slate-800/80">
                <div className="md:col-span-5">
                  <p className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                    Relevant Academic Interests
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.academicInterests.map((interest) => (
                      <Badge key={interest} tone="accent">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                    <BookMarked className="h-3.5 w-3.5 text-sky-500 dark:text-sky-400" />
                    Core Competencies
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {edu.relevantCoursework.map((course) => (
                      <div
                        key={course.name}
                        className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50/70 px-3 py-2 text-xs text-slate-700 dark:border-slate-800 dark:bg-[#080E1D] dark:text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500/80 dark:bg-sky-400/80" />
                        <span>{course.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
