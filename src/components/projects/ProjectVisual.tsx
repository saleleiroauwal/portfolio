import { useState } from 'react';
import type { ProjectItem } from '../../types/portfolio';

interface ProjectVisualProps {
  project: ProjectItem;
}

export function ProjectVisual({ project }: ProjectVisualProps) {
  const [imgError, setImgError] = useState(false);

  if (project.thumbnailUrl && !imgError) {
    return (
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-slate-200/80 bg-[#081021] dark:border-slate-800">
        <img
          src={project.thumbnailUrl}
          alt={project.thumbnailAlt}
          loading="lazy"
          onError={() => setImgError(true)}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-slate-200/80 bg-[#081021] dark:border-slate-800/90">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 24% 20%, rgba(56, 189, 248, 0.25), transparent 55%), linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.08) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 24px 24px, 24px 24px',
        }}
      />

      {project.visualVariant === 'food-health-ai' && (
        <svg
          viewBox="0 0 400 240"
          className="relative h-full w-full"
          role="img"
          aria-label={project.thumbnailAlt}
        >
          <rect x="26" y="34" width="106" height="148" rx="12" fill="#0F1B33" stroke="#38BDF8" strokeOpacity="0.35" />
          <circle cx="79" cy="88" r="24" fill="#0EA5E9" fillOpacity="0.16" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M79 72V104M63 88H95" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <rect x="44" y="130" width="70" height="8" rx="4" fill="#334155" />
          <rect x="52" y="146" width="54" height="6" rx="3" fill="#1E293B" />

          <path d="M132 108H166" stroke="#38BDF8" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="196" cy="70" r="8" fill="#0F1B33" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="196" cy="108" r="8" fill="#0F1B33" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="196" cy="146" r="8" fill="#0F1B33" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="242" cy="89" r="8" fill="#0F1B33" stroke="#22D3EE" strokeWidth="1.5" />
          <circle cx="242" cy="127" r="8" fill="#0F1B33" stroke="#22D3EE" strokeWidth="1.5" />
          <line x1="204" y1="70" x2="234" y2="89" stroke="#38BDF8" strokeOpacity="0.45" />
          <line x1="204" y1="108" x2="234" y2="89" stroke="#38BDF8" strokeOpacity="0.45" />
          <line x1="204" y1="108" x2="234" y2="127" stroke="#38BDF8" strokeOpacity="0.45" />
          <line x1="204" y1="146" x2="234" y2="127" stroke="#38BDF8" strokeOpacity="0.45" />

          <path d="M250 108H276" stroke="#38BDF8" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="4 4" />
          <rect x="276" y="46" width="98" height="124" rx="12" fill="#0F1B33" stroke="#38BDF8" strokeOpacity="0.35" />
          <rect x="292" y="68" width="66" height="10" rx="5" fill="#38BDF8" fillOpacity="0.35" />
          <rect x="292" y="92" width="54" height="8" rx="4" fill="#1E293B" />
          <rect x="292" y="110" width="62" height="8" rx="4" fill="#1E293B" />
          <rect x="292" y="128" width="44" height="8" rx="4" fill="#1E293B" />
        </svg>
      )}

      {project.visualVariant === 'election-system' && (
        <svg
          viewBox="0 0 400 240"
          className="relative h-full w-full"
          role="img"
          aria-label={project.thumbnailAlt}
        >
          <rect x="30" y="28" width="340" height="164" rx="12" fill="#0F1B33" stroke="#38BDF8" strokeOpacity="0.35" />
          <rect x="46" y="44" width="120" height="10" rx="5" fill="#38BDF8" fillOpacity="0.45" />
          <rect x="290" y="44" width="64" height="10" rx="5" fill="#1E293B" />
          <line x1="30" y1="68" x2="370" y2="68" stroke="#1E293B" />

          <rect x="46" y="84" width="94" height="44" rx="8" fill="#091326" stroke="#1E293B" />
          <rect x="153" y="84" width="94" height="44" rx="8" fill="#091326" stroke="#1E293B" />
          <rect x="260" y="84" width="94" height="44" rx="8" fill="#091326" stroke="#1E293B" />

          <rect x="58" y="96" width="48" height="7" rx="3.5" fill="#38BDF8" fillOpacity="0.55" />
          <rect x="58" y="110" width="68" height="6" rx="3" fill="#334155" />
          <rect x="165" y="96" width="54" height="7" rx="3.5" fill="#22D3EE" fillOpacity="0.5" />
          <rect x="165" y="110" width="62" height="6" rx="3" fill="#334155" />
          <rect x="272" y="96" width="44" height="7" rx="3.5" fill="#38BDF8" fillOpacity="0.55" />
          <rect x="272" y="110" width="68" height="6" rx="3" fill="#334155" />

          <rect x="46" y="142" width="308" height="34" rx="8" fill="#091326" stroke="#1E293B" />
          <rect x="60" y="155" width="92" height="8" rx="4" fill="#334155" />
          <rect x="168" y="155" width="70" height="8" rx="4" fill="#1E293B" />
          <rect x="292" y="152" width="48" height="14" rx="7" fill="#0EA5E9" fillOpacity="0.22" stroke="#38BDF8" strokeOpacity="0.4" />
        </svg>
      )}

      {project.visualVariant === 'adaptive-exam' && (
        <svg
          viewBox="0 0 400 240"
          className="relative h-full w-full"
          role="img"
          aria-label={project.thumbnailAlt}
        >
          <rect x="42" y="82" width="84" height="58" rx="10" fill="#0F1B33" stroke="#38BDF8" strokeOpacity="0.4" />
          <rect x="56" y="98" width="56" height="7" rx="3.5" fill="#38BDF8" fillOpacity="0.55" />
          <rect x="56" y="114" width="42" height="6" rx="3" fill="#334155" />

          <path d="M126 111H158L182 76H212" fill="none" stroke="#38BDF8" strokeOpacity="0.6" strokeWidth="1.75" />
          <path d="M158 111L182 146H212" fill="none" stroke="#94A3B8" strokeOpacity="0.4" strokeWidth="1.75" strokeDasharray="4 4" />

          <rect x="212" y="46" width="144" height="54" rx="10" fill="#0F1B33" stroke="#22D3EE" strokeOpacity="0.55" />
          <rect x="228" y="63" width="88" height="7" rx="3.5" fill="#22D3EE" fillOpacity="0.65" />
          <rect x="228" y="78" width="104" height="6" rx="3" fill="#334155" />

          <rect x="212" y="120" width="144" height="54" rx="10" fill="#0F1B33" stroke="#334155" />
          <rect x="228" y="137" width="76" height="7" rx="3.5" fill="#475569" />
          <rect x="228" y="152" width="96" height="6" rx="3" fill="#1E293B" />
        </svg>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 border-t border-slate-800/80 bg-[#060B16]/85 px-3 py-1.5 backdrop-blur-xs">
        <span className="truncate font-mono text-[10px] text-slate-400">
          Schematic Preview
        </span>
        <span className="shrink-0 font-mono text-[10px] tracking-wider whitespace-nowrap text-sky-400 uppercase">
          Add Screenshot
        </span>
      </div>
    </div>
  );
}

