'use client';

import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Workflow, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Server, 
  Layers,
  Award,
  ArrowUpRight,
  Cpu,
  Database,
  Bot
} from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: Workflow,
      title: 'GoHighLevel Architecture & CRM',
      description: 'Designing end-to-end sub-accounts, custom fields/tags, opportunity pipelines, calendars with buffer/multi-staff logic, and high-converting funnels.',
      badge: 'GHL Specialist',
      highlights: ['Sub-Account Provisioning & Branding', '7 & 10 Stage Pipelines', 'Calendars & Multi-Staff Scheduling', 'Funnels & Landing Pages'],
    },
    {
      icon: Zap,
      title: 'Conditional Workflow Automations',
      description: 'Building multi-step conditional workflows with branching if/else paths, instant lead follow-ups, appointment reminders, and reputation management sequences.',
      badge: 'Automations',
      highlights: ['Multi-Branch If/Else Logic', 'Nurture & No-Show Recovery', 'State Management & Recalls', 'Reputation / Review Requests'],
    },
    {
      icon: Code2,
      title: 'Full-Stack Software Engineering',
      description: 'Hands-on full-stack development with MERN stack and C#/.NET, building secure RESTful APIs, JWT authentication, and role-based access control (RBAC).',
      badge: 'MERN & .NET',
      highlights: ['JavaScript (ES6+) & TypeScript', 'React.js, Next.js & Node.js', 'C# (.NET / ASP.NET Core)', 'JWT & RBAC Security'],
    },
    {
      icon: Bot,
      title: 'Integrations, Data & AI Tooling',
      description: 'Connecting Make.com, Stripe, Twilio, Mailgun, and Looker Studio dashboards, paired with prompt design & script refinement using ChatGPT & Claude.',
      badge: 'Integrations & AI',
      highlights: ['Make.com, Twilio & Mailgun', 'Stripe & Looker Studio', 'MongoDB, MS SQL & PostgreSQL', 'Conversation AI & Prompts'],
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-neutral-50/50 dark:bg-black/60 border-t border-b border-neutral-200 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 border border-neutral-300 dark:border-zinc-800 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Profile &amp; Core Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            About <span className="bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">Mark Geoffrey</span>
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-zinc-400 max-w-2xl text-sm sm:text-base">
            GoHighLevel Automation Specialist &amp; Full-Stack Developer (MERN / .NET). BSIT Graduate (2022–2026) with specialized expertise in building complete client-acquisition systems.
          </p>
        </div>

        {/* Top Profile Summary Bar */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 p-6 sm:p-7 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-zinc-800">
            
            <div className="flex items-start gap-3.5 md:pr-4">
              <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-zinc-900 text-black dark:text-white shrink-0 border border-neutral-200 dark:border-zinc-800">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold text-neutral-500 dark:text-zinc-400 uppercase tracking-wider">
                  Education &amp; Degree
                </h3>
                <p className="text-sm font-bold text-neutral-900 dark:text-white mt-0.5">
                  BS in Information Technology
                </p>
                <p className="text-xs text-neutral-600 dark:text-zinc-400">
                  City College of Lucena (2022–2026)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:px-4">
              <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-zinc-900 text-black dark:text-white shrink-0 border border-neutral-200 dark:border-zinc-800">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold text-neutral-500 dark:text-zinc-400 uppercase tracking-wider">
                  Full-Stack Engineering
                </h3>
                <p className="text-sm font-bold text-neutral-900 dark:text-white mt-0.5">
                  MERN Stack &amp; C# / .NET
                </p>
                <p className="text-xs text-neutral-600 dark:text-zinc-400">
                  React, Next.js, Node, Express, ASP.NET Core
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-4">
              <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-zinc-900 text-black dark:text-white shrink-0 border border-neutral-200 dark:border-zinc-800">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold text-neutral-500 dark:text-zinc-400 uppercase tracking-wider">
                  Automation Systems
                </h3>
                <p className="text-sm font-bold text-neutral-900 dark:text-white mt-0.5">
                  End-to-End GHL Delivery
                </p>
                <p className="text-xs text-neutral-600 dark:text-zinc-400">
                  Funnels, Pipelines, AI Bots &amp; Make.com
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-neutral-100 dark:bg-zinc-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-zinc-700 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className="inline-block text-[11px] font-mono font-semibold px-2 py-0.5 rounded mb-2 bg-neutral-100 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 border border-neutral-200 dark:border-zinc-800">
                    {pillar.badge}
                  </span>

                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 dark:border-zinc-800/80 space-y-1.5">
                  {pillar.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-neutral-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
