'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  Workflow, 
  Code2, 
  Layers, 
  Server, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Clock, 
  DollarSign, 
  ShieldCheck,
  Send,
  Zap
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  deliverables: string[];
  timeline: string;
  highlight: boolean;
}

interface ScopeOption {
  id: string;
  label: string;
  cost: number;
  days: number;
}

export default function ServicesSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'ghl-setup',
    'workflows',
  ]);

  const services: ServiceItem[] = [
    {
      id: 'ghl-setup',
      title: 'Complete GoHighLevel Setup & CRM Architecture',
      category: 'GHL Core',
      badge: 'Most Requested',
      description: 'Turnkey setup for agencies and business owners. Complete sub-account provisioning, custom fields, pipeline stages, calendar routing, and domain authentication.',
      deliverables: [
        'Custom Fields, Values & Folder Structure',
        'Round-Robin & Multi-Staff Calendar Scheduling',
        'DNS, Domain, SPF/DKIM & DMARC Setup',
        'A2P 10DLC Compliance & Phone Provisioning',
        'Sales Pipeline Stages & Stage Actions'
      ],
      timeline: '3 - 7 Days',
      highlight: true
    },
    {
      id: 'workflows',
      title: 'Advanced Multi-Branch Workflow Automations',
      category: 'Automations',
      badge: 'High ROI',
      description: 'Sophisticated automated sequences replacing manual staff hours. 2-way SMS conversations, conditional if/else routing, lead scoring, and automated task assignments.',
      deliverables: [
        'Multi-Tier SMS & Email Nurturing Chains',
        'Missed-Call-Text-Back & Instant Lead Follow-Up',
        'Conditional If/Else Split Routing Trees',
        'Automated Review & Reputation Requests',
        'Internal Team Alerts (Slack / Email / App)'
      ],
      timeline: '4 - 10 Days',
      highlight: false
    },
    {
      id: 'funnels',
      title: 'High-Converting Funnels & Custom In-Funnel Code',
      category: 'Funnel Design',
      badge: 'Conversion Focused',
      description: 'Visually stunning, mobile-responsive funnels engineered in GHL with bespoke JavaScript/CSS to overcome native builder limits and maximize conversion rates.',
      deliverables: [
        'Figma / XD to GHL Pixel-Perfect Build',
        'Custom In-Funnel JS (Dynamic Pricing, Sticky Nav)',
        'Interactive Quiz & Multi-Step Questionnaire Logic',
        'High-Converting 1-Step & 2-Step Order Forms',
        'Mobile Optimization & Lightning-Fast Speed'
      ],
      timeline: '5 - 12 Days',
      highlight: false
    },
    {
      id: 'fullstack',
      title: 'Custom Full-Stack Web Apps & Client Portals',
      category: 'Development',
      badge: 'Full Stack',
      description: 'Custom React / Next.js web applications, client dashboards, and specialized software that seamlessly communicate with GoHighLevel via API v2.',
      deliverables: [
        'Next.js 15 + TypeScript Frontend & UI',
        'Secure Authentication & Role-Based Access',
        'Real-time GHL API v2 Contact & Deal Sync',
        'Custom PostgreSQL / MongoDB Database',
        'Automated Webhook Listeners & Endpoints'
      ],
      timeline: '10 - 20 Days',
      highlight: true
    },
    {
      id: 'api-integrations',
      title: 'API, Webhook & Custom Middleware Engineering',
      category: 'Integrations',
      badge: 'Automation',
      description: 'Bridging GoHighLevel with the rest of your stack through webhooks, APIs, n8n, Make, and Zapier, including AI steps with fallbacks and error alerts.',
      deliverables: [
        'n8n Workflows with AI Reply Routing',
        'AI Chatbot (Gemini / OpenAI) Integration in GHL',
        'Custom Node.js Webhook Forwarders & Parsers',
        'E-commerce & External CRM Synchronization',
        'Error Alerting & Automatic Retry Queues'
      ],
      timeline: '3 - 8 Days',
      highlight: false
    },
    {
      id: 'snapshots',
      title: 'SaaS Snapshot Creation & Agency Whitelabeling',
      category: 'Agency Scalability',
      badge: 'Agency Ready',
      description: 'Turnkey, niche-specific snapshots designed for digital marketing agencies looking to onboard 10s or 100s of sub-accounts effortlessly in SaaS mode.',
      deliverables: [
        'Industry-Specific GHL Snapshots (Dental, Real Estate, Gym, etc.)',
        'Pre-Configured Funnels, Automations, & Email Templates',
        'Custom Menu Links & Custom CSS Agency Theme',
        'Step-by-Step Onboarding SOPs & Video Documentation',
        'SaaS Mode Pricing Tiers & Feature Lock Configuration'
      ],
      timeline: '7 - 14 Days',
      highlight: false
    }
  ];

  const scopeOptions: ScopeOption[] = [
    { id: 'ghl-setup', label: 'Full GHL Sub-Account Setup & DNS', cost: 450, days: 4 },
    { id: 'workflows', label: 'Advanced Workflow Automations (3+)', cost: 550, days: 5 },
    { id: 'funnels', label: 'High-Converting Funnel with Custom JS', cost: 650, days: 6 },
    { id: 'fullstack', label: 'Custom Next.js Web App / Client Portal', cost: 1200, days: 12 },
    { id: 'api-integrations', label: 'Custom API / Webhook / AI Integration', cost: 480, days: 4 },
    { id: 'snapshots', label: 'Niche Turnkey SaaS Snapshot', cost: 750, days: 7 },
  ];

  const toggleScope = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const calculatedTotal = scopeOptions
    .filter((opt) => selectedServices.includes(opt.id))
    .reduce((acc, curr) => ({ cost: acc.cost + curr.cost, days: acc.days + curr.days }), { cost: 0, days: 0 });

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 border border-neutral-300 dark:border-zinc-800 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Tailored Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Service <span className="bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">Offerings & Solutions</span>
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-zinc-400 max-w-2xl text-sm sm:text-base">
            From comprehensive GoHighLevel architecture and bespoke funnel coding to custom full-stack software development, explore the high-impact solutions Mark delivers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                svc.highlight
                  ? 'bg-neutral-50 dark:bg-zinc-950 border-black dark:border-zinc-500 shadow-md'
                  : 'bg-white dark:bg-zinc-950/70 border-neutral-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-zinc-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-zinc-900 text-neutral-900 dark:text-zinc-200 border border-neutral-200 dark:border-zinc-800">
                    {svc.category}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-500 dark:text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {svc.timeline}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 leading-snug">
                  {svc.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-zinc-400 leading-relaxed mb-5">
                  {svc.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-bold text-neutral-900 dark:text-zinc-200 uppercase tracking-wider">
                    Key Deliverables:
                  </div>
                  {svc.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-zinc-800/80 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-black dark:text-white hover:underline transition-colors"
                >
                  <span>Inquire for this Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] font-mono font-medium text-neutral-400 dark:text-zinc-500">
                  {svc.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Scope & Estimate Calculator */}
        <div className="rounded-2xl bg-gradient-to-br from-zinc-950 via-neutral-900 to-black text-white p-6 sm:p-8 border border-zinc-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Left: Scope Selector */}
            <div className="flex-1 w-full">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>Interactive Project Scope Estimator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Select your deliverables to estimate timeline & scope
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mb-6">
                Get an instant breakdown of project duration and budget expectation for your GoHighLevel or Full-Stack project:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {scopeOptions.map((opt) => {
                  const isChecked = selectedServices.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleScope(opt.id)}
                      className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between gap-2 ${
                        isChecked
                          ? 'border-white bg-white/15 text-white shadow-sm'
                          : 'border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-white border-white text-black' : 'border-zinc-600'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3] text-black" />}
                        </div>
                        <span className="text-xs font-medium">{opt.label}</span>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-300 shrink-0">
                        ~{opt.days}d
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Summary Box */}
            <div className="w-full lg:w-80 p-6 rounded-2xl bg-black border border-zinc-800 flex flex-col justify-between shrink-0">
              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  Scope Summary
                </div>

                <div className="space-y-3 pb-4 mb-4 border-b border-zinc-800 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Deliverables Selected:</span>
                    <span className="font-bold text-white font-mono">{selectedServices.length} Items</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Turnaround:</span>
                    <span className="font-bold text-white font-mono">
                      {calculatedTotal.days === 0 ? '0' : Math.max(3, Math.round(calculatedTotal.days * 0.75))} - {calculatedTotal.days} Days
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Budget Range:</span>
                    <span className="font-bold text-zinc-200 font-mono">
                      ${calculatedTotal.cost === 0 ? '0' : (calculatedTotal.cost * 0.85).toFixed(0)} - ${calculatedTotal.cost}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-white hover:bg-zinc-200 text-black text-center transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Lock in this Scope with Mark</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
