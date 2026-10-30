'use client';

import React, { useState } from 'react';
import { 
  Layers, 
  Workflow, 
  Code2, 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Cpu, 
  Database,
  Bot,
  Zap,
  Globe,
  BarChart3,
  Stethoscope,
  Flame,
  Home
} from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';
import { projects, type Project } from '@/lib/projects';

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ghl' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenExternal = (url?: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (!url) return;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Project data lives in lib/projects.ts (shared with the /case-studies pages)

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 border border-neutral-300 dark:border-zinc-800 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Documented Systems &amp; Builds</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Portfolio <span className="bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-zinc-400 max-w-2xl text-sm sm:text-base">
            GoHighLevel and AI automation systems, each tested, documented, and walked through on video, alongside full-stack and data projects.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full border border-neutral-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Projects (7)' },
              { id: 'ghl', label: 'Automation Systems (5)' },
              { id: 'fullstack', label: 'Software & Data Projects (2)' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'text-neutral-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Top Banner */}
                  <div className={`p-6 ${project.imageGradient} text-white relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20">
                        <Icon className="w-3.5 h-3.5" />
                        {project.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => handleOpenExternal(project.liveUrl, e)}
                            className="px-2.5 py-1 rounded-full bg-white/25 hover:bg-white text-white hover:text-black backdrop-blur-md flex items-center gap-1 text-[11px] font-bold transition-all shadow-sm cursor-pointer"
                            title={project.liveUrlLabel || 'Open Link'}
                          >
                            <span>Link</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-white tracking-tight mb-2 group-hover:underline">
                      {/* Real link so search engines and AI crawlers can reach the case study page; a normal click still opens the modal */}
                      <a
                        href={`/case-studies/${project.id}`}
                        onClick={(e) => e.preventDefault()}
                        className="text-inherit no-underline"
                      >
                        {project.title}
                      </a>
                    </h3>

                    <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>

                    {/* Quick Metric Bar */}
                    <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-white/10">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="text-left">
                          <div className="text-sm font-bold font-mono text-white truncate">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-white/70 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h4 className="text-[11px] font-bold text-neutral-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                      Key Highlights &amp; Scope
                    </h4>
                    
                    <ul className="space-y-2 mb-4">
                      {project.architecture.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-zinc-300 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-neutral-100 dark:border-zinc-800">
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-neutral-100 dark:bg-zinc-900 text-neutral-700 dark:text-zinc-300 border border-neutral-200 dark:border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-neutral-500">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold border border-neutral-300 dark:border-zinc-800 bg-neutral-50 dark:bg-zinc-900 text-neutral-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 cursor-pointer shadow-sm text-center truncate"
                    >
                      <span>Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleOpenExternal(project.liveUrl, e)}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-zinc-100 dark:text-black hover:bg-black dark:hover:bg-white transition-all duration-200 shadow-sm cursor-pointer shrink-0"
                        title={project.liveUrlLabel || 'Open Live Link'}
                      >
                        <span>Live Link</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}
