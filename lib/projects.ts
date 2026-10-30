import type { LucideIcon } from 'lucide-react';
import { TrendingUp, Bot, BarChart3, Stethoscope, Flame, Home, Code2 } from 'lucide-react';

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
  icon: LucideIcon;
  liveUrl?: string;
  liveUrlLabel?: string;
}

export const projects: Project[] = [
  {
    id: 'dead-lead-reactivation',
    title: 'AI Dead Lead Reactivation System',
    category: 'ghl',
    categoryLabel: 'GoHighLevel + n8n + Gemini (Demo Build)',
    subtitle: 'Two-way AI reactivation system that reads every reply from old real estate leads and books, answers, escalates, or opts out automatically.',
    metrics: [
      { label: 'Reply Intents', value: '7 Routes' },
      { label: 'Touch Limit', value: '5 Max' },
      { label: 'QA Scenarios', value: '6 / 6 Pass' }
    ],
    problem: 'A real estate agency had about 1,400 old leads it already paid for, but follow-up was manual and inconsistent, so buyers and sellers who inquired months or years ago went quiet.',
    solution: 'Scored and tiered old leads, ran tiered GoHighLevel outreach, and built an n8n reply engine where Gemini classifies every reply and routes it to the right action, with Slack handoff for anything that needs a person.',
    architecture: [
      'Built an n8n reply engine where Gemini classifies every lead reply into 7 intents and routes it to a booking link, a clarifying question, a knowledge-base answer, a Slack escalation, or an opt-out.',
      'Scored and tiered old leads by recency, deal value, and inquiry type, then ran tiered GHL outreach capped at 5 touches with a daily silent-lead check.',
      'Enforced opt-outs with DND directly in GoHighLevel, so no workflow can message an opted-out contact again.',
      'Added a fail-safe JSON parser with a regex fallback, so a bad AI response never breaks the flow or sends a wrong message.',
      'Booked leads move to "Reactivated - Appointment Set" and the sales team gets a Slack alert with name, time, and deal value. Passed all 6 end-to-end QA scenarios.'
    ],
    stack: ['GoHighLevel', 'n8n', 'Gemini API', 'Webhooks', 'Slack', 'Google Sheets'],
    imageGradient: 'bg-gradient-to-br from-neutral-800 via-zinc-900 to-black',
    icon: Bot,
    liveUrl: 'https://app.notion.com/p/4077113faf3d818390feeea8dc583c81',
    liveUrlLabel: 'View Case Study'
  },
  {
    id: 'brightsmile-dental',
    title: 'BrightSmile Lead-to-Booking System',
    category: 'ghl',
    categoryLabel: 'GoHighLevel Dental Clinic System (Demo Build)',
    subtitle: 'End-to-end GoHighLevel system that turns dental leads into booked, reminded, and reviewed patients.',
    metrics: [
      { label: 'Workflows', value: '10' },
      { label: 'Lead Sources', value: '3 Channels' },
      { label: 'QA Checklist', value: '19 Checks' }
    ],
    problem: 'Dental clinics answer leads hours late, miss calls while the front desk is busy, lose appointments to no-shows, and have no clear view of which marketing brings in patients.',
    solution: 'Built a complete GoHighLevel system that captures leads from a landing page, website chat, and missed calls, responds within seconds, books appointments automatically, recovers no-shows, and requests Google reviews.',
    architecture: [
      'Built 10 workflows covering speed to lead with a 5-day nurture, confirmations and reminders, no-show recovery, cancellations, review requests, and missed-call text-back.',
      'Added a Conversation AI assistant that answers FAQs from a knowledge base and books directly into the calendar.',
      'Scored leads on urgency, treatment, and insurance; hot leads create a "call within 15 minutes" task and every lead is logged to Google Sheets via a webhook and Make.com.',
      'Ran a 19-item QA checklist with fresh test contacts and fixed edge cases such as duplicate status tags after a rebook and stale reminders after a cancellation.',
      'Delivered an owner dashboard, smart lists for the front desk, a system guide, and a reusable snapshot.'
    ],
    stack: ['GoHighLevel', 'Conversation AI', 'Make.com', 'Webhooks', 'Google Sheets', 'Dashboards'],
    imageGradient: 'bg-gradient-to-br from-zinc-900 via-neutral-950 to-black',
    icon: Stethoscope,
    liveUrl: 'https://app.notion.com/p/4077113faf3d817db2d6c65715f27da4',
    liveUrlLabel: 'View Case Study'
  },
  {
    id: 'ar-payment-chasing',
    title: 'AR Payment Chasing Automation',
    category: 'ghl',
    categoryLabel: 'GoHighLevel + Apps Script + Gemini (Demo Build)',
    subtitle: 'Automated collections system that escalates invoice reminders and stops the moment a client pays or replies.',
    metrics: [
      { label: 'Test Scenarios', value: '23 / 23' },
      { label: 'Failure Drills', value: '7 / 7 Safe' },
      { label: 'Total AI Cost', value: '~$0.13' }
    ],
    problem: 'Small service businesses lose cash flow to invoices that slip 30 to 90 days past due, because chasing payments is awkward, late, and inconsistent.',
    solution: 'Built a rules engine in Google Apps Script that checks every invoice hourly, drives a GoHighLevel reminder ladder from friendly to firm, and hands unresponsive accounts to a person with a full summary.',
    architecture: [
      'Built an Apps Script rules engine that ages invoices hourly and drives a 4-stage GHL reminder ladder that stops on payment or reply.',
      'Limited Gemini to wording only, with validation and a pre-approved template fallback if a draft fails.',
      'Routed replies by intent (payment plan, dispute, already paid), with owner approval for payment plans and missed-payment monitoring.',
      'Added watchdogs, email alerts, a weekly digest, and a Sheet-vs-GHL reconciliation check, so every error is logged and alerted.',
      'Passed 23/23 test scenarios and 7/7 failure drills for about $0.13 in total AI cost.'
    ],
    stack: ['GoHighLevel', 'Google Apps Script', 'Gemini API', 'Google Sheets', 'JavaScript'],
    imageGradient: 'bg-gradient-to-br from-neutral-900 via-zinc-950 to-black',
    icon: TrendingUp,
    liveUrl: 'https://app.notion.com/p/3fd7113faf3d8076b24cd17ec2adb0b5',
    liveUrlLabel: 'View Case Study'
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

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}
