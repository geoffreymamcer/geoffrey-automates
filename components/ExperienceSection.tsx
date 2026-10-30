'use client';

import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Workflow, 
  Code2, 
  Building2,
  Award
} from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      period: 'FEB 2026 – JUN 2026',
      role: 'Web Developer and Clerical Intern',
      organization: 'Quezon National Highschool — Lucena City',
      type: 'Professional Internship',
      icon: Briefcase,
      description: 'Engineered and deployed a centralized HR database web application to digitize faculty management and automate license compliance tracking.',
      bullets: [
        'Developed and deployed a locally hosted web application for the HR department to centralize and manage teacher records securely.',
        'Digitized HR record management for 300+ faculty records, reducing manual paperwork and improving retrieval efficiency.',
        'Integrated data analytics features, including an automated tracking system to monitor expiring teaching licenses and ensure staff compliance.'
      ]
    },
    {
      period: '2025 – PRESENT',
      role: 'GoHighLevel Automation Specialist',
      organization: 'Independent Portfolio & Systems Development',
      type: 'Automation & AI Systems',
      icon: Workflow,
      description: 'Designing, building, testing, and documenting GoHighLevel and AI automation systems as portfolio demo builds.',
      bullets: [
        'Built 5 documented automation systems: BrightSmile Dental, AI Dead Lead Reactivation, AR Payment Chasing, Nolan & Co. Realty, and Ferrow Air & Heat.',
        'Engineered conditional workflows for speed to lead, nurture, reminders, no-show recovery, lead scoring, and review requests.',
        'Connected GHL to n8n, Make.com, Google Apps Script, Google Sheets, and Slack through webhooks and APIs, with Gemini for AI reply handling.',
        'Tested every build against a QA checklist and delivered a system guide, Notion case study, and video walkthrough for each.'
      ]
    },
    {
      period: '2022 – 2026',
      role: 'Bachelor of Science in Information Technology (BSIT)',
      organization: 'Dalubhasaan ng Lungsod ng Lucena (City College of Lucena)',
      type: 'Education & Degree',
      icon: GraduationCap,
      description: 'Specialization in Web and Mobile Application Development. Comprehensive coursework in software engineering, database systems, and data analytics.',
      bullets: [
        'Specialization in Web and Mobile Application Development with rigorous software engineering curriculum.',
        'Completed senior thesis: Full-Stack Electronic Medical Record (EMR) system with AI-powered Ishihara vision diagnostic testing.',
        'Built full-stack applications with React, Node.js, Express, MongoDB, C#/.NET, PostgreSQL, and MS SQL Server.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-neutral-50/50 dark:bg-black/60 border-t border-b border-neutral-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 border border-neutral-300 dark:border-zinc-800 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Timeline &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Experience &amp; <span className="bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-zinc-400 max-w-2xl text-sm sm:text-base">
            Professional internship experience, documented GoHighLevel systems development, and BS in Information Technology (2022–2026).
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-neutral-400 via-neutral-600 to-neutral-400 dark:from-zinc-700 dark:via-zinc-500 dark:to-zinc-800 opacity-40 pointer-events-none" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Center */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-black border-2 border-black dark:border-white flex items-center justify-center text-black dark:text-white shadow-md z-10">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Empty Spacer on large screens */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-6">
                    <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-black dark:hover:border-zinc-600 transition-all">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 border border-neutral-200 dark:border-zinc-800">
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-medium text-neutral-500 dark:text-zinc-400">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-semibold text-neutral-700 dark:text-zinc-400 mb-3">
                        {exp.organization}
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-zinc-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-neutral-100 dark:border-zinc-800/80">
                        {exp.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
