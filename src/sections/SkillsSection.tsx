import { skillCategories } from '../data/skills';
import { SkillCategoryCard } from '../components/skills/SkillCategoryCard';
import { SectionHeading } from '../components/ui/SectionHeading';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="02 / Technical Skills"
          title="Core Competencies & Engineering Stack"
          description="Organized across machine learning, deep learning, programming languages, frontend systems, and tooling — presented clearly without inflated proficiency scores."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
          All skill entries are managed centrally in{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-sky-600 dark:bg-slate-800/80 dark:text-sky-400">
            src/data/skills.ts
          </code>{' '}
          so you can tailor frameworks and concepts strictly to what you have practiced and can demonstrate.
        </p>
      </div>
    </section>
  );
}

