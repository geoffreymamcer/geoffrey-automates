'use client';

import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Workflow, 
  Code2, 
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles
} from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: 'ghl' | 'fullstack' | 'funnels' | 'all';
  categoryLabel: string;
  subtitle: string;
  metrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  imageGradient: string;
  icon: any;
  liveUrl?: string;
  liveUrlLabel?: string;
}

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // Handle ESC key and prevent body background scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const Icon = project.icon;

  const handleOpenLink = (url?: string) => {
    if (!url) return;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      
      {/* Modal Card - Flex column with maximum viewport height bound */}
      <div 
        id="project-detail-modal"
        className="relative w-full max-w-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header Banner Area */}
        <div className={`p-4 sm:p-6 ${project.imageGradient} text-white shrink-0 relative border-b border-white/10`}>
          
          {/* Top Row: Category + Actions (Live Link + Close Button) */}
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                <Icon className="w-3.5 h-3.5" />
                <span>{project.categoryLabel}</span>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenLink(project.liveUrl);
                  }}
                  className="hidden xs:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-black hover:bg-neutral-100 transition-colors shadow-sm cursor-pointer"
                >
                  <span>{project.liveUrlLabel || 'Open Live Project'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Always-visible prominent Close button */}
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 hover:bg-black/70 active:scale-95 text-white border border-white/20 transition-all cursor-pointer text-xs font-semibold shrink-0"
              aria-label="Close modal"
              title="Close modal (Esc)"
            >
              <span className="hidden sm:inline">Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Project Title & Subtitle */}
          <h2 
            id="modal-project-title"
            className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight mb-1.5 pr-2"
          >
            {project.title}
          </h2>
          
          <p className="text-xs sm:text-sm text-white/85 line-clamp-2 sm:line-clamp-none max-w-2xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Compact Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
                <div className="text-sm sm:text-base font-bold font-mono text-white truncate">
                  {m.value}
                </div>
                <div className="text-[10px] sm:text-[11px] text-white/80 font-medium truncate">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 flex-1 overflow-y-auto overscroll-contain">
          
          {/* Mobile Quick Live Link Banner (if on small screen) */}
          {project.liveUrl && (
            <div className="block xs:hidden p-3 rounded-xl bg-neutral-100 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenLink(project.liveUrl);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold bg-black text-white dark:bg-white dark:text-black shadow-sm"
              >
                <span>{project.liveUrlLabel || 'Open Live Project'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
              <h3 className="text-xs font-bold text-neutral-900 dark:text-zinc-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>The Challenge</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
              <h3 className="text-xs font-bold text-neutral-900 dark:text-zinc-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>The Solution & Engineering</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Architecture Points */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Workflow className="w-4 h-4 text-neutral-700 dark:text-zinc-300" />
              <span>Key Architecture & Automation Deliverables</span>
            </h4>
            <div className="space-y-2.5">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-neutral-700 dark:text-zinc-300" />
              <span>Technologies & Tools Applied</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((st, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-100 dark:bg-zinc-800 text-neutral-800 dark:text-zinc-200 border border-neutral-200 dark:border-zinc-700"
                >
                  {st}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Sticky Modal Footer */}
        <div className="p-3 sm:p-5 bg-neutral-50 dark:bg-zinc-900 border-t border-neutral-200 dark:border-zinc-800 flex items-center justify-between gap-2 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-bold border border-neutral-300 dark:border-zinc-700 text-neutral-800 dark:text-zinc-200 hover:bg-neutral-200 dark:hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer min-h-[40px]"
          >
            Close Details
          </button>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenLink(project.liveUrl);
                }}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold border border-neutral-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-neutral-900 dark:text-white hover:border-black dark:hover:border-white shadow-sm transition-all cursor-pointer min-h-[40px]"
              >
                <span>{project.liveUrlLabel || 'Open Live Project'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href="#contact"
              onClick={onClose}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-zinc-200 shadow-md transition-all cursor-pointer min-h-[40px]"
            >
              <span>Request Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

