'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { 
  X, 
  FileText, 
  Download, 
  Printer, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  Mail, 
  Phone,
  MapPin,
  Workflow,
  Code2,
  Bot,
  Database,
  Layers,
  ExternalLink
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleOpenLink = (url: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
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
    >
      
      {/* Modal Container */}
      <div 
        id="resume-modal"
        className="relative w-full max-w-4xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header Bar */}
        <div className="p-3 sm:p-4 md:p-5 bg-neutral-100 dark:bg-zinc-900 border-b border-neutral-200 dark:border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <FileText className="w-5 h-5 text-neutral-800 dark:text-zinc-200 shrink-0" />
            <div className="min-w-0">
              <h3 className="text-xs sm:text-base font-bold text-neutral-900 dark:text-white truncate">
                Resume &bull; Mark Geoffrey A. Batocabe
              </h3>
              <p className="text-[10px] sm:text-xs text-neutral-500 dark:text-zinc-400 truncate">
                GoHighLevel Automation Specialist | Full-Stack Developer (MERN / .NET)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/Mark_Geoffrey_Batocabe_Resume.pdf"
              download="Mark_Geoffrey_Batocabe_Resume.pdf"
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-zinc-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all shadow-sm"
              title="Download Mark Geoffrey Batocabe Resume (PDF)"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white dark:bg-zinc-800 border border-neutral-200 dark:border-zinc-700 text-neutral-700 dark:text-zinc-300 hover:text-black dark:hover:text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
              title="Print / Save via browser dialog"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden md:inline">Print</span>
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-xl bg-neutral-200 dark:bg-zinc-800 text-neutral-800 dark:text-zinc-200 hover:bg-neutral-300 dark:hover:bg-zinc-700 font-bold text-xs cursor-pointer active:scale-95 transition-all"
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <span className="hidden sm:inline">Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Scrollable Resume Body */}
        <div className="p-4 sm:p-6 md:p-8 flex-1 overflow-y-auto space-y-6 text-neutral-800 dark:text-zinc-200 text-xs sm:text-sm leading-relaxed overscroll-contain">
          
          {/* Header Contact Block */}
          <div className="border-b border-neutral-200 dark:border-zinc-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight uppercase">
                MARK GEOFFREY A. BATOCABE
              </h1>
              <p className="text-neutral-800 dark:text-zinc-200 font-bold text-sm sm:text-base mt-1">
                GoHighLevel Automation Specialist &nbsp;|&nbsp; Full-Stack Developer (MERN / .NET)
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600 dark:text-zinc-400 mt-2 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Pagbilao, Quezon, Philippines
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  batocabemarkgeoffrey@gmail.com
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  0994-694-4768
                </span>
              </div>
            </div>

            {/* Profile Avatar Thumbnail */}
            <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border border-neutral-300 dark:border-zinc-700 shadow-sm shrink-0">
              <Image
                src="/profile.jpg"
                alt="Mark Geoffrey A. Batocabe"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-2 font-mono">
              SUMMARY
            </h2>
            <p className="text-neutral-700 dark:text-zinc-300 leading-relaxed">
              GoHighLevel (GHL) Specialist and Full-Stack Developer who builds complete client-acquisition systems, not just chat automations. Has independently designed, built, and documented three end-to-end GHL portfolio systems — covering CRM/pipeline architecture, multi-step conditional automations, AI-powered conversational agents, funnels, booking/calendar logic, and reporting dashboards — while integrating tools like Make.com, Stripe, Twilio, Mailgun, and Looker Studio. Pairs this with a software engineering background (MERN stack, C#/.NET, RESTful APIs, JWT/RBAC security) to troubleshoot integrations, customize workflows beyond no-code limits, and collaborate effectively with development teams.
            </p>
          </div>

          {/* Core Skills Matrix */}
          <div>
            <h2 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-3 font-mono">
              CORE SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
                <div className="font-bold text-neutral-900 dark:text-white mb-1">GoHighLevel (GHL):</div>
                <div className="text-neutral-600 dark:text-zinc-400">
                  Sub-account setup &amp; branding, custom fields/tags, pipeline/opportunity architecture, forms, calendars (buffers, multi-staff scheduling, Zoom integration), funnels &amp; landing pages, Conversation AI / AI receptionist bots, reputation management, snapshot export, agency/SaaS white-label concepts.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
                <div className="font-bold text-neutral-900 dark:text-white mb-1">Integrations &amp; Automation:</div>
                <div className="text-neutral-600 dark:text-zinc-400">
                  Make.com (multi-step cross-platform scenarios, webhook triggers, data mapping), Stripe (payment links, test deposits), Twilio (SMS/voice configuration), Mailgun (email delivery, DNS verification), Looker Studio (reporting dashboards), Zoom, Zapier.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
                <div className="font-bold text-neutral-900 dark:text-white mb-1">Software Development:</div>
                <div className="text-neutral-600 dark:text-zinc-400">
                  JavaScript (ES6+), TypeScript, C# (.NET / ASP.NET Core), React.js, Next.js, Node.js, Express.js, React Native, RESTful APIs, JWT Authentication, Role-Based Access Control (RBAC).
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
                <div className="font-bold text-neutral-900 dark:text-white mb-1">Data, Databases &amp; AI Tooling:</div>
                <div className="text-neutral-600 dark:text-zinc-400">
                  MongoDB, MS SQL Server (T-SQL), PostgreSQL, Python (Pandas, NumPy, Matplotlib), Power BI, ChatGPT &amp; Claude (prompt design, script refinement, edge-case testing).
                </div>
              </div>
            </div>
          </div>

          {/* GoHighLevel Portfolio Projects */}
          <div>
            <h2 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-3 font-mono">
              GOHIGHLEVEL PORTFOLIO PROJECTS
            </h2>

            <div className="space-y-4">
              
              {/* Project 1 */}
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-neutral-900 dark:text-white">
                    BrightSmile Dental Clinic — AI-Powered Patient Acquisition &amp; Retention System
                  </span>
                  <span className="font-mono text-xs font-semibold text-neutral-600 dark:text-zinc-400">
                    20-Day Build &bull; Solo
                  </span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-zinc-400 mb-2 italic">
                  End-to-end dental clinic CRM and automation system, built and documented solo.
                </p>
                <ul className="space-y-1 text-xs text-neutral-700 dark:text-zinc-300">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Architected a 7-stage sales pipeline, custom fields, and a 5-page responsive website/funnel with landing pages driving form submissions directly into the CRM.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Built native GHL automations for lead nurture, appointment reminders, no-show recovery, birthday/recall campaigns, and a review-request → reputation management sequence.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Trained an AI receptionist in GHL Conversation AI, using ChatGPT to draft FAQ/booking scripts and Claude to refine them and stress-test edge-case patient questions.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Connected cross-platform automation via Make.com (GHL → Notion), Stripe test-mode deposits, Twilio SMS, Mailgun email sequences, and Zoom virtual consultation booking.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Delivered a Looker Studio reporting dashboard, an exported reusable snapshot, and a full documentation trail across Notion and Google Drive.</span>
                  </li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-neutral-900 dark:text-white">
                      Nolan &amp; Co. Realty — Real Estate Lead-Generation MVP
                    </span>
                    <a
                      href="https://app.notion.com/p/Nolan-Co-Realty-3ca7113faf3d80258c6ec526f68c2621?source=copy_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleOpenLink("https://app.notion.com/p/Nolan-Co-Realty-3ca7113faf3d80258c6ec526f68c2621?source=copy_link", e)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-600 dark:text-zinc-300 hover:text-black dark:hover:text-white underline underline-offset-2 cursor-pointer"
                    >
                      <span>[Notion Doc]</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <span className="font-mono text-xs font-semibold text-neutral-600 dark:text-zinc-400">
                    9-Day Build &bull; Solo
                  </span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-zinc-400 mb-2 italic">
                  Free-tools-only GHL system for capturing and converting real estate buyer &amp; seller leads.
                </p>
                <ul className="space-y-1 text-xs text-neutral-700 dark:text-zinc-300">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Branded a dedicated sub-account and built a 6-stage pipeline, mobile-responsive landing page, and a lead capture form mapped directly into custom CRM fields.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Designed an instant-response workflow (email + SMS/fallback) and a 5-day nurture sequence with conditional exit logic tied to booking activity.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Built and linked a booking calendar that automatically advances pipeline stage and triggers agent notifications on appointment booked.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Ran a full testing plan across 3 lead personas plus a mobile/visual QA pass, closing with zero unresolved bugs on final validation.</span>
                  </li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-neutral-900 dark:text-white">
                      Ferrow Air &amp; Heat — Home Services (HVAC) MVP
                    </span>
                    <a
                      href="https://app.notion.com/p/Ferrow-Air-Heat-3ca7113faf3d80e995f6e43407b3732f?source=copy_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleOpenLink("https://app.notion.com/p/Ferrow-Air-Heat-3ca7113faf3d80e995f6e43407b3732f?source=copy_link", e)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-600 dark:text-zinc-300 hover:text-black dark:hover:text-white underline underline-offset-2 cursor-pointer"
                    >
                      <span>[Notion Doc]</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <span className="font-mono text-xs font-semibold text-neutral-600 dark:text-zinc-400">
                    9-Day Build &bull; Solo
                  </span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-zinc-400 mb-2 italic">
                  Moderate-complexity conditional automation system for an HVAC business.
                </p>
                <ul className="space-y-1 text-xs text-neutral-700 dark:text-zinc-300">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Built a 10-stage pipeline and a service-request form with a qualification workflow that branches leads into Emergency / Standard / Out-of-Area paths.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Engineered a 6-workflow automation system (intake, qualification, booking, reminder/state management, no-show recovery, review &amp; reactivation), handling booked/no-show/completed states correctly.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Documented full system architecture, CRM design with reasoning, and automation logic for every workflow as part of a formal Documentation Plan.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>Executed a 9-day testing plan across 9 distinct validation stages to a zero-bug final state.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Software & Data Projects */}
          <div>
            <h2 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-3 font-mono">
              SOFTWARE &amp; DATA PROJECTS
            </h2>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-neutral-900 dark:text-white">
                    Full-Stack EMR System with AI Integration <span className="font-normal text-neutral-500 dark:text-zinc-400 font-mono text-xs">(Thesis Project &bull; MERN + AI)</span>
                  </span>
                  <a
                    href="https://cecc-test.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleOpenLink("https://cecc-test.vercel.app/", e)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-600 dark:text-zinc-300 hover:text-black dark:hover:text-white underline underline-offset-2 cursor-pointer"
                  >
                    <span>[Live App]</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-neutral-700 dark:text-zinc-300 mt-1.5 leading-relaxed">
                  Architected a MERN-stack Electronic Medical Record system streamlining patient management and appointment scheduling. Engineered an AI-powered Ishihara color vision test for preliminary diagnostic screening. Implemented RBAC and JWT-based authentication; optimized MongoDB queries for sub-second response on large patient and invoice datasets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-neutral-900 dark:text-white">
                    Data Analytics &amp; Predictive Modeling Project <span className="font-normal text-neutral-500 dark:text-zinc-400 font-mono text-xs">(Python &bull; Power BI)</span>
                  </span>
                  <a
                    href="https://github.com/geoffreymamcer/ITELEC_Activities.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleOpenLink("https://github.com/geoffreymamcer/ITELEC_Activities.git", e)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-600 dark:text-zinc-300 hover:text-black dark:hover:text-white underline underline-offset-2 cursor-pointer"
                  >
                    <span>[GitHub Repo]</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-neutral-700 dark:text-zinc-300 mt-1.5 leading-relaxed">
                  Executed end-to-end Python data pipelines cleaning and analyzing 3+ real-world datasets (Chicago Crime, UK Road Accidents). Synthesized insights using Matplotlib and Power BI to identify trends relevant to public safety. Applied regression/classification modeling to forecast trends with measurable accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-3 font-mono flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-neutral-700 dark:text-zinc-300" />
              <span>PROFESSIONAL EXPERIENCE</span>
            </h2>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
              <div className="flex flex-wrap items-center justify-between gap-2 font-bold text-neutral-900 dark:text-white">
                <span>Web Developer and Clerical Intern</span>
                <span className="font-mono text-xs text-neutral-500">Feb 2026 – Jun 2026</span>
              </div>
              <div className="text-xs font-semibold text-neutral-700 dark:text-zinc-400 mb-2">
                Quezon National Highschool &bull; Lucena City
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-zinc-300">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>Developed and deployed a locally hosted web application for the HR department to centralize and manage teacher records securely.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>Digitized HR record management for 300+ faculty records, reducing manual paperwork and improving retrieval efficiency.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>Integrated data analytics features, including an automated tracking system to monitor expiring teaching licenses and ensure staff compliance.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-3 font-mono flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-neutral-700 dark:text-zinc-300" />
              <span>EDUCATION</span>
            </h2>
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800">
              <div className="flex flex-wrap items-center justify-between gap-2 font-bold text-neutral-900 dark:text-white">
                <span>Bachelor of Science in Information Technology (BSIT)</span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-neutral-200 dark:bg-zinc-800 text-neutral-900 dark:text-zinc-100">
                  2022 – 2026
                </span>
              </div>
              <div className="text-xs text-neutral-600 dark:text-zinc-400 mt-1">
                Dalubhasaan ng Lungsod ng Lucena (City College of Lucena) &bull; Lucena City
              </div>
              <p className="text-xs text-neutral-500 dark:text-zinc-400 mt-1 font-medium">
                Specialization: Web and Mobile Application Development
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-neutral-100 dark:bg-zinc-900 border-t border-neutral-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-neutral-500 dark:text-zinc-400 font-mono">
            Pagbilao, Quezon &bull; Open to Remote Opportunities
          </span>
          <div className="flex items-center gap-2">
            <a
              href="/Mark_Geoffrey_Batocabe_Resume.pdf"
              download="Mark_Geoffrey_Batocabe_Resume.pdf"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-zinc-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-neutral-300 dark:border-zinc-700 text-neutral-700 dark:text-zinc-300 hover:bg-neutral-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Close Viewer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
