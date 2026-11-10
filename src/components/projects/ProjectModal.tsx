import { ExternalLink, FolderGit2, Info } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { ProjectVisual } from './ProjectVisual';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal
      isOpen={Boolean(project)}
      onClose={onClose}
      title={project.title}
      subtitle={project.category}
    >
      <div className="space-y-6">
        <ProjectVisual project={project} />

        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent">{project.status}</Badge>
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

        <div>
          <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            Overview
          </h4>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {project.shortDescription}
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            Problem Addressed
          </h4>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {project.problemAddressed}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {project.details.map((detail) => (
            <div
              key={detail.label}
              className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-[#080E1D]"
            >
              <div className="flex items-center justify-between gap-2">
                <h5 className="font-mono text-xs font-semibold tracking-wider text-slate-600 uppercase dark:text-slate-300">
                  {detail.label}
                </h5>
                {detail.isPlaceholder && (
                  <Badge tone="subtle" className="text-[10px]">
                    Editable Placeholder
                  </Badge>
                )}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {detail.content}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            Key Functionality
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {project.keyFunctionality.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.note && (
          <div className="flex items-start gap-2.5 rounded-xl border border-sky-500/25 bg-sky-500/5 p-3.5 text-xs leading-relaxed text-slate-600 dark:border-sky-400/20 dark:bg-sky-400/5 dark:text-slate-300">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400" />
            <p>{project.note}</p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.githubUrl ? (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
              >
                <FolderGit2 className="h-4 w-4" />
                Open GitHub Repository
              </Button>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
                <FolderGit2 className="h-3.5 w-3.5" />
                Repository URL not yet linked in src/data/projects.ts
              </span>
            )}

            {project.liveDemoUrl ? (
              <Button
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
              >
                <ExternalLink className="h-4 w-4" />
                Open Live Demo
              </Button>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Live Demo not yet published
              </span>
            )}
          </div>

          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}

