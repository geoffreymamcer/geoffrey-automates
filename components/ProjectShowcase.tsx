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
import ProjectDetailModal, { Project } from './ProjectDetailModal';

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

  const projects: Project[] = [
    {
      id: 'brightsmile-dental',
      title: 'BrightSmile Dental Clinic',
      category: 'ghl',
      categoryLabel: 'GoHighLevel + AI System (20-Day Build)',
      subtitle: 'End-to-end dental clinic CRM and automation system, independently designed, built, and documented solo.',
      metrics: [
        { label: 'Build Duration', value: '20 Days' },
        { label: 'Pipeline Architecture', value: '7 Stages' },
        { label: 'Funnel Scale', value: '5 Pages' }
      ],
      problem: 'Dental clinics require an integrated system to capture inbound patient leads, nurture them across multiple channels, automate deposit booking, and retain patients through automated recall cycles.',
      solution: 'Architected a comprehensive GHL CRM ecosystem with custom fields, 5-page responsive funnel, multi-stage pipeline, Conversation AI receptionist, and multi-tool cross-platform automations.',
      architecture: [
        'Architected a 7-stage sales pipeline, custom fields, and a 5-page responsive website/funnel driving form submissions directly into the CRM.',
        'Built native GHL automations for lead nurture, appointment reminders, no-show recovery, birthday/recall campaigns, and review-request → reputation management sequence.',
        'Trained an AI receptionist in GHL Conversation AI, using ChatGPT to draft FAQ/booking scripts and Claude to refine them and stress-test edge-case patient questions.',
        'Connected cross-platform automation via Make.com (GHL → Notion), Stripe test-mode deposits, Twilio SMS, Mailgun email sequences, and Zoom virtual consultation booking.',
        'Delivered a Looker Studio reporting dashboard, an exported reusable snapshot, and a full documentation trail (build log, testing plan, case study) across Notion and Google Drive.'
      ],
      stack: ['GoHighLevel', 'Conversation AI', 'Make.com', 'Stripe', 'Twilio SMS', 'Mailgun', 'Looker Studio', 'Zoom'],
      imageGradient: 'bg-gradient-to-br from-neutral-800 via-zinc-900 to-black',
      icon: Stethoscope
    },
    {
      id: 'nolan-realty',
      title: 'Nolan & Co. Realty',
      category: 'ghl',
      categoryLabel: 'Real Estate Lead-Gen MVP (9-Day Build)',
      subtitle: 'Free-tools-only GoHighLevel system for capturing and converting real estate buyer & seller leads.',
      metrics: [
        { label: 'Build Duration', value: '9 Days' },
        { label: 'Pipeline Stages', value: '6 Stages' },
        { label: 'QA Validation', value: '0 Bugs' }
      ],
      problem: 'Real estate businesses need a rapid, cost-effective lead capture mechanism that delivers instant responses and nurtures prospects without requiring paid add-ons or expensive tool stacks.',
      solution: 'Branded a dedicated sub-account utilizing native free GHL tools to construct a high-converting landing page, custom-mapped CRM capture forms, automated nurture sequences, and round-robin calendars.',
      architecture: [
        'Branded a dedicated sub-account and built a 6-stage pipeline, mobile-responsive landing page, and a lead capture form mapped directly into custom CRM fields.',
        'Designed an instant-response workflow (email + SMS/fallback) and a 5-day nurture sequence with conditional exit logic tied to booking activity.',
        'Built and linked a booking calendar that automatically advances pipeline stage and triggers agent notifications on appointment booked.',
        'Ran a full testing plan across 3 lead personas plus a mobile/visual QA pass, closing with zero unresolved bugs on final validation.',
        'Produced a complete documentation plan, limitations list, and "Version 2" roadmap as part of the final portfolio case study.'
      ],
      stack: ['GoHighLevel', 'GHL Workflows', 'Custom CRM Fields', 'Booking Calendars', 'Conditional Exit Logic', 'QA Validation'],
      imageGradient: 'bg-gradient-to-br from-zinc-900 via-neutral-950 to-black',
      icon: Home,
      liveUrl: 'https://app.notion.com/p/Nolan-Co-Realty-3ca7113faf3d80258c6ec526f68c2621?source=copy_link',
      liveUrlLabel: 'View Notion Documentation'
    },
    {
      id: 'ferrow-air-heat',
      title: 'Ferrow Air & Heat (HVAC)',
      category: 'ghl',
      categoryLabel: 'Home Services Conditional MVP (9-Day Build)',
      subtitle: 'Moderate-complexity conditional automation system with emergency vs. standard service routing for HVAC businesses.',
      metrics: [
        { label: 'Build Duration', value: '9 Days' },
        { label: 'Pipeline Architecture', value: '10 Stages' },
        { label: 'Workflows Engineered', value: '6 Workflows' }
      ],
      problem: 'HVAC and home services companies receive urgent emergency breakdown calls mixed with routine service requests, demanding automated triage and accurate booking state management.',
      solution: 'Constructed a 10-stage pipeline and dynamic service-request form with branching logic that routes leads into Emergency, Standard, or Out-of-Area nurture and booking workflows.',
      architecture: [
        'Built a 10-stage pipeline and a service-request form with a qualification workflow that branches leads into Emergency / Standard / Out-of-Area paths.',
        'Engineered a 6-workflow automation system (intake, qualification, booking, reminder/state management, no-show recovery, review & reactivation), with reminder logic handling booked/no-show/completed states correctly.',
        'Documented full system architecture, CRM design with reasoning, and automation logic (trigger/conditions/actions/branches) for every workflow as part of a formal Documentation Plan.',
        'Executed a 9-day testing plan (contact save, form submission, pipeline auto-creation, instant response, nurture sequencing, booking flow, persona testing, mobile QA, final live run) to a zero-bug final state.',
        'Packaged the system as a demo-ready portfolio case study with a Final MVP Checklist, skills-demonstrated map, and rehearsed live demo flow.'
      ],
      stack: ['GoHighLevel', 'Conditional Branching', '10-Stage Pipeline', 'State Management', 'Emergency Triage', 'Documentation'],
      imageGradient: 'bg-gradient-to-br from-neutral-900 via-zinc-950 to-black',
      icon: Flame,
      liveUrl: 'https://app.notion.com/p/Ferrow-Air-Heat-3ca7113faf3d80e995f6e43407b3732f?source=copy_link',
      liveUrlLabel: 'View Notion Documentation'
    },
    {
      id: 'emr-ai-system',
      title: 'Full-Stack EMR System with AI Integration',
      category: 'fullstack',
      categoryLabel: 'MERN Stack & AI (Thesis Project)',
      subtitle: 'Electronic Medical Record system streamlining clinic workflows with an integrated AI-powered Ishihara color vision diagnostic test.',
      metrics: [
        { label: 'Project Type', value: 'Academic Thesis' },
        { label: 'Security Layer', value: 'JWT & RBAC' },
        { label: 'DB Latency', value: 'Sub-Second' }
      ],
      problem: 'Specialized medical clinics need centralized record management, role-based security access, fast query latency on patient histories, and automated preliminary diagnostic vision screening.',
      solution: 'Engineered a full-stack MERN (MongoDB, Express, React, Node.js) web application with role-based access control (RBAC), JWT authentication, and an AI diagnostic module.',
      architecture: [
        'Architected a MERN-stack Electronic Medical Record system streamlining patient management and appointment scheduling for a specialized clinic.',
        'Engineered an AI-powered Ishihara color vision test, automating preliminary screening and improving diagnostic consistency.',
        'Implemented RBAC and JWT-based authentication to protect sensitive patient health records.',
        'Optimized MongoDB indexing and aggregation queries for sub-second response times on large patient and invoice datasets.'
      ],
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI Integration', 'JWT Authentication', 'RBAC Security'],
      imageGradient: 'bg-gradient-to-br from-zinc-800 via-neutral-900 to-black',
      icon: Code2,
      liveUrl: 'https://cecc-test.vercel.app/',
      liveUrlLabel: 'Open Live EMR App'
    },
    {
      id: 'data-analytics-modeling',
      title: 'Data Analytics & Predictive Modeling',
      category: 'fullstack',
      categoryLabel: 'Python & Power BI Data Engineering',
      subtitle: 'End-to-end Python data pipelines, exploratory data analysis, and predictive trend modeling on public datasets.',
      metrics: [
        { label: 'Datasets Analyzed', value: '3+ Real-World' },
        { label: 'Visual Dashboards', value: 'Power BI' },
        { label: 'ML Techniques', value: 'Regression / Class.' }
      ],
      problem: 'Extracting actionable public safety and resource allocation insights from massive raw municipal data requires rigorous cleaning, exploratory analysis, and predictive modeling.',
      solution: 'Authored complete Python data pipelines utilizing Pandas, NumPy, Matplotlib, and Power BI dashboards to forecast incident trends with measurable accuracy.',
      architecture: [
        'Executed end-to-end Python data pipelines — cleaning, structuring, and analyzing 3+ real-world datasets (Chicago Crime, UK Road Accidents).',
        'Synthesized insights using Matplotlib and Power BI to identify trends relevant to public safety and resource allocation.',
        'Applied regression and classification modeling to forecast trends, achieving measurable accuracy in preliminary tests.',
        'Created interactive visual dashboards communicating statistical distributions and predictive forecasts.'
      ],
      stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Predictive Modeling', 'EDA'],
      imageGradient: 'bg-gradient-to-br from-neutral-800 via-zinc-900 to-black',
      icon: BarChart3,
      liveUrl: 'https://github.com/geoffreymamcer/ITELEC_Activities.git',
      liveUrlLabel: 'View GitHub Repository'
    }
  ];

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
            Independently built, tested, and documented GoHighLevel portfolio systems alongside full-stack engineering and data analytics projects.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full border border-neutral-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Projects (5)' },
              { id: 'ghl', label: 'GoHighLevel Systems (3)' },
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
                      {project.title}
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
