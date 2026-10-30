'use client';

import React, { useState } from 'react';
import { 
  Workflow, 
  Code2, 
  Server, 
  Layers, 
  Terminal, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Cpu, 
  Database,
  Globe,
  Bot,
  FileCheck
} from 'lucide-react';

interface Skill {
  name: string;
  category: 'ghl' | 'fullstack' | 'integrations' | 'database' | 'ai';
  description: string;
  tags: string[];
}

export default function TechnicalSkillsSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ghl' | 'fullstack' | 'integrations' | 'database' | 'ai'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);

  const skills: Skill[] = [
    // GoHighLevel
    {
      name: 'GoHighLevel Architecture & Sub-Accounts',
      category: 'ghl',
      description: 'Sub-account provisioning & branding, custom fields/values, pipeline & opportunity architecture, forms, and survey logic.',
      tags: ['Sub-Accounts', 'Pipelines', 'Custom Fields', 'Forms']
    },
    {
      name: 'GHL Workflows & Conditional Logic',
      category: 'ghl',
      description: 'Multi-branch if/else routing, lead nurture sequences, appointment reminders, no-show recovery, and review requests.',
      tags: ['Conditional Branching', 'Nurture Sequences', 'State Management', 'SMS/Email']
    },
    {
      name: 'Calendars, Scheduling & Zoom',
      category: 'ghl',
      description: 'Buffer times, round-robin & multi-staff scheduling, calendar link triggers, and Zoom integration.',
      tags: ['Round-Robin', 'Buffer Logic', 'Multi-Staff', 'Zoom Integration']
    },
    {
      name: 'Funnels, Landing Pages & Snapshots',
      category: 'ghl',
      description: 'Mobile-responsive landing pages, multi-page funnels, snapshot exports, and agency/SaaS white-label concepts.',
      tags: ['Funnel Builder', 'Snapshots', 'White-Label', 'SaaS Mode']
    },
    {
      name: 'Conversation AI & AI Receptionist',
      category: 'ghl',
      description: 'Configuring GHL Conversation AI bots for automated FAQ answering, qualifying leads, and booking appointments.',
      tags: ['Conversation AI', 'AI Receptionist', 'Chat Automation', 'FAQ Bot']
    },

    // Full-Stack Development
    {
      name: 'JavaScript (ES6+) & TypeScript',
      category: 'fullstack',
      description: 'Modern JavaScript features, TypeScript strict typing, asynchronous programming, and clean modular code architecture.',
      tags: ['JavaScript', 'TypeScript', 'Async/Await', 'Type Safety']
    },
    {
      name: 'React.js & Next.js (App Router)',
      category: 'fullstack',
      description: 'Component architecture, state management, Next.js App Router, SSR/SSG rendering, and responsive UI with Tailwind CSS.',
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Frontend UI']
    },
    {
      name: 'Node.js & Express.js (RESTful APIs)',
      category: 'fullstack',
      description: 'Building secure backend RESTful APIs, request handling, middleware pipelines, and webhook receiver endpoints.',
      tags: ['Node.js', 'Express.js', 'RESTful APIs', 'Backend Services']
    },
    {
      name: 'C# (.NET / ASP.NET Core)',
      category: 'fullstack',
      description: 'Object-oriented software development with C#, ASP.NET Core backend endpoints, and data access layers.',
      tags: ['C#', '.NET', 'ASP.NET Core', 'Backend Engineering']
    },
    {
      name: 'JWT Authentication & RBAC Security',
      category: 'fullstack',
      description: 'Securing web applications with JSON Web Tokens (JWT), hashed password auth, and role-based access control (RBAC).',
      tags: ['JWT Auth', 'RBAC Security', 'Token Verification', 'Access Control']
    },

    // Integrations & Automations
    {
      name: 'n8n Workflows & AI Routing',
      category: 'integrations',
      description: 'Building n8n workflows that receive GHL webhooks, call AI models, parse structured output, and route each case with Switch logic.',
      tags: ['n8n', 'Webhooks', 'Switch Routing', 'GHL API']
    },
    {
      name: 'Make.com & Google Sheets Sync',
      category: 'integrations',
      description: 'Sending GHL data out through webhooks into Make.com scenarios that log every new lead to Google Sheets in seconds.',
      tags: ['Make.com', 'Webhooks', 'Google Sheets', 'JSON Payloads']
    },
    {
      name: 'Google Apps Script Rules Engines',
      category: 'integrations',
      description: 'Writing Apps Script that checks data on a schedule, applies business rules, and drives GHL workflows, with logging and alerts.',
      tags: ['Apps Script', 'JavaScript', 'Scheduled Triggers', 'Alerts']
    },
    {
      name: 'Messaging Compliance & Slack Handoff',
      category: 'integrations',
      description: 'Handling opt-outs with DND, capping touches, respecting A2P/TCPA rules, and alerting the team in Slack when a person should take over.',
      tags: ['DND', 'A2P / TCPA', 'Touch Limits', 'Slack']
    },

    // Databases & Data Analytics
    {
      name: 'MongoDB (NoSQL Document DB)',
      category: 'database',
      description: 'Schema modeling, indexing, aggregation queries, and sub-second data retrieval for web applications.',
      tags: ['MongoDB', 'NoSQL', 'Mongoose', 'Aggregation']
    },
    {
      name: 'PostgreSQL & MS SQL Server (T-SQL)',
      category: 'database',
      description: 'Relational data modeling, foreign keys, complex queries, views, and structured enterprise schemas.',
      tags: ['PostgreSQL', 'MS SQL Server', 'T-SQL', 'Relational DB']
    },
    {
      name: 'Python (Pandas, NumPy, Matplotlib)',
      category: 'database',
      description: 'End-to-end data cleaning pipelines, exploratory data analysis (EDA), and data visualizations.',
      tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      name: 'Power BI & Predictive Modeling',
      category: 'database',
      description: 'Interactive analytics dashboards, statistical trend analysis, and regression/classification predictive models.',
      tags: ['Power BI', 'Predictive Modeling', 'Trend Analysis', 'EDA']
    },

    // AI Tooling & Prompt Design
    {
      name: 'AI in Automations (Gemini, Conversation AI)',
      category: 'ai',
      description: 'Grounding AI in a knowledge base, classifying replies into intents, returning structured JSON, and adding fail-safe fallbacks.',
      tags: ['Gemini API', 'Conversation AI', 'Prompt Design', 'Fallbacks']
    },
    {
      name: 'Git, GitHub & Version Control',
      category: 'fullstack',
      description: 'Version control, repository management, pull requests, branching workflows, and documentation.',
      tags: ['Git', 'GitHub', 'CI/CD', 'Documentation']
    }
  ];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const needOptions = [
    { label: 'GHL Sub-Account Setup & Pipelines', category: 'ghl' },
    { label: 'Multi-Branch Workflow Automations', category: 'ghl' },
    { label: 'GHL Funnels & Landing Pages', category: 'ghl' },
    { label: 'Conversation AI Receptionist', category: 'ai' },
    { label: 'n8n, Make.com & Webhooks', category: 'integrations' },
    { label: 'AI Reply Handling & Reactivation', category: 'ai' },
    { label: 'Full-Stack MERN (React/Node/Express)', category: 'fullstack' },
    { label: 'C# / ASP.NET Core Backend', category: 'fullstack' },
    { label: 'MongoDB / PostgreSQL / SQL Server', category: 'database' },
    { label: 'Dashboards & Reporting', category: 'integrations' }
  ];

  const toggleNeed = (label: string) => {
    if (selectedNeeds.includes(label)) {
      setSelectedNeeds(selectedNeeds.filter((n) => n !== label));
    } else {
      setSelectedNeeds([...selectedNeeds, label]);
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 border border-neutral-300 dark:border-zinc-800 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Technical Skills &amp; <span className="bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-zinc-400 max-w-2xl text-sm sm:text-base">
            Core skills spanning GoHighLevel architecture, multi-tool integrations, MERN &amp; .NET full-stack development, database engineering, and AI tooling.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-neutral-100 dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Core Skills' },
              { id: 'ghl', label: 'GoHighLevel (GHL)' },
              { id: 'integrations', label: 'Integrations & Make' },
              { id: 'fullstack', label: 'Full-Stack (MERN / .NET)' },
              { id: 'database', label: 'Data & Databases' },
              { id: 'ai', label: 'AI Tooling' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === tab.id
                    ? 'bg-black dark:bg-white text-white dark:text-black font-semibold shadow-sm'
                    : 'text-neutral-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-neutral-400 dark:text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill, tool or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-zinc-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {filteredSkills.map((skill, index) => {
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800/80 shadow-sm hover:shadow-md hover:border-black dark:hover:border-zinc-600 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white leading-snug mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100 dark:border-zinc-800/60">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-zinc-900 text-neutral-700 dark:text-zinc-300 border border-neutral-200 dark:border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Capability Matcher */}
        <div className="rounded-2xl bg-gradient-to-r from-zinc-950 via-neutral-900 to-black text-white p-6 sm:p-8 border border-zinc-800 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Skill Alignment Matcher</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                What does your project or role require?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Select your required stack to see how Mark&apos;s capabilities align with your goals:
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {needOptions.map((opt) => {
                  const isSelected = selectedNeeds.includes(opt.label);
                  return (
                    <button
                      key={opt.label}
                      onClick={() => toggleNeed(opt.label)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-white text-black shadow-md scale-105'
                          : 'bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-600'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3 h-3 text-black" />}
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/80 border border-zinc-800 flex flex-col items-center justify-center text-center min-w-[200px]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {selectedNeeds.length === 0 ? '100%' : '100% Match'}
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                {selectedNeeds.length === 0
                  ? 'Select tags to verify stack coverage'
                  : `${selectedNeeds.length} requirement(s) covered by Mark`}
              </div>
              <a
                href="#contact"
                className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-white hover:bg-zinc-200 text-black transition-colors"
              >
                <span>Connect with Mark</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
