import { ExternalLink, Eye, FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ProjectItem, ProjectStatus } from '../../types/portfolio';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ProjectVisual } from './ProjectVisual';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onViewProject: (project: ProjectItem) => void;
  onPendingLinkClick: (label: string, projectTitle: string) => void;
}

const statusToneMap: Record<ProjectStatus, 'emerald' | 'accent' | 'amber' | 'subtle'> = {
  Completed: 'emerald',
  'In Development': 'accent',
  'Proposed / Concept': 'amber',
  'Documenting Results': 'subtle',
};

export function ProjectCard({
  project,
  index,
  onViewProject,
  onPendingLinkClick,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-xs transition-colors duration-200 hover:border-sky-500/45 dark:border-slate-800/90 dark:bg-[#0D1425]/95 dark:hover:border-sky-400/40"
    >
      <ProjectVisual project={project} />

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex min-h-10 items-start justify-between gap-2">
          <span className="font-mono text-[11px] leading-snug font-medium tracking-wider text-sky-600 uppercase dark:text-sky-400">
            {project.category}
          </span>
          <Badge tone={statusToneMap[project.status]} className="shrink-0 whitespace-nowrap">
            {project.status}
          </Badge>
        </div>

        <h3 className="mt-2.5 text-lg leading-snug font-bold tracking-tight text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.shortDescription}
        </p>

        <div className="mt-4 rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-slate-800/80 dark:bg-[#080E1D]">
          <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            Problem Addressed
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
            {project.problemAddressed}
          </p>
        </div>

        <div className="mt-4">
          <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            Key Functionality
          </p>
          <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            {project.keyFunctionality.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge
              key={tech.name}
              tone={tech.isPlaceholder ? 'subtle' : 'neutral'}
              className={tech.isPlaceholder ? 'border-dashed' : ''}
            >
              {tech.name}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-200/80 pt-4 dark:border-slate-800/80">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onViewProject(project)}
            className="flex-1 sm:flex-initial"
          >
            <Eye className="h-3.5 w-3.5" />
            View Project
          </Button>

          {project.githubUrl ? (
            <Button
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <FolderGit2 className="h-3.5 w-3.5" />
              GitHub Repository
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPendingLinkClick('GitHub Repository', project.title)}
            >
              <FolderGit2 className="h-3.5 w-3.5" />
              Repository (Pending)
            </Button>
          )}

          {project.liveDemoUrl && (
            <Button
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

