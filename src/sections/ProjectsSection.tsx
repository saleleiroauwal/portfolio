import { useState } from 'react';
import { projectsData } from '../data/projects';
import type { ProjectFilterGroup, ProjectItem } from '../types/portfolio';
import { cn } from '../utils/cn';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectModal } from '../components/projects/ProjectModal';
import { SectionHeading } from '../components/ui/SectionHeading';

interface ProjectsSectionProps {
  onPendingLinkClick: (label: string, projectTitle: string) => void;
}

const FILTER_OPTIONS: ProjectFilterGroup[] = [
  'All',
  'AI & Deep Learning',
  'Software Engineering',
  'Adaptive Learning',
];

export function ProjectsSection({ onPendingLinkClick }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterGroup>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const visibleProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.filterGroup === activeFilter);

  return (
    <section
      id="projects"
      className="border-t border-slate-200/70 bg-slate-100/50 py-20 sm:py-24 dark:border-slate-800/70 dark:bg-[#0A101F]/60"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="03 / Featured Projects"
            title="Selected Engineering & AI Work"
            description="Systems spanning deep learning exploration, structured software workflows, and adaptive assessment architecture."
            className="mb-0 max-w-xl"
          />

          <div
            role="tablist"
            aria-label="Filter projects by domain"
            className="flex shrink-0 flex-wrap gap-1.5 self-start lg:self-auto"
          >
            {FILTER_OPTIONS.map((filter) => {
              const selected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    'rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
                    selected
                      ? 'border-sky-500/50 bg-sky-500/15 text-sky-700 dark:border-sky-400/50 dark:bg-sky-400/15 dark:text-sky-300'
                      : 'border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-slate-200',
                  )}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewProject={setSelectedProject}
              onPendingLinkClick={onPendingLinkClick}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

