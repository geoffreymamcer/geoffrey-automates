'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  Workflow, 
  Code, 
  Layers, 
  Cpu, 
  GraduationCap, 
  CheckCircle2, 
  FileText, 
  MapPin,
  Sparkles,
  Bot
} from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-tech-grid"
    >
      {/* Ambient gradient glow spots - Monochrome */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-black/[0.04] via-zinc-500/[0.03] to-transparent dark:from-white/[0.05] dark:via-zinc-500/[0.03] dark:to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div 
                id="hero-badge-specialist"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-zinc-900 border border-neutral-300 dark:border-zinc-700 text-neutral-900 dark:text-white shadow-sm"
              >
                <Workflow className="w-3.5 h-3.5 text-neutral-800 dark:text-zinc-200" />
                <span>GoHighLevel Specialist</span>
              </div>

              <div 
                id="hero-badge-fullstack"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-zinc-900/80 border border-neutral-300 dark:border-zinc-800 text-neutral-800 dark:text-zinc-300"
              >
                <Code className="w-3.5 h-3.5 text-neutral-600 dark:text-zinc-400" />
                <span>Full-Stack Developer (MERN / .NET)</span>
              </div>

              <div 
                id="hero-badge-location"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-zinc-900/80 border border-neutral-300 dark:border-zinc-800 text-neutral-800 dark:text-zinc-300"
              >
                <MapPin className="w-3.5 h-3.5 text-neutral-600 dark:text-zinc-400" />
                <span>Pagbilao, Quezon, PH</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 
              id="hero-main-title"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12] mb-5"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
                Mark Geoffrey A. Batocabe
              </span>
            </h1>

            {/* Tagline / Subtitle */}
            <p 
              id="hero-subtitle"
              className="text-base sm:text-lg text-neutral-600 dark:text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              <strong className="text-neutral-900 dark:text-white font-semibold">GoHighLevel (GHL) Specialist and Full-Stack Developer</strong> who builds complete client-acquisition systems, not just chat automations. Independently designed, built, and documented end-to-end GHL systems (CRM pipelines, conditional automations, Conversation AI agents, and funnels) while leveraging a software engineering background (<strong className="text-neutral-900 dark:text-white font-semibold">MERN stack, C#/.NET, RESTful APIs, JWT/RBAC</strong>) to troubleshoot and customize integrations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-zinc-200 shadow-xl shadow-black/10 dark:shadow-white/5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Layers className="w-4 h-4" />
                <span>Explore Portfolio Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-cta-skills"
                href="#skills"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border border-neutral-300 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/90 hover:bg-neutral-50 dark:hover:bg-zinc-800 text-neutral-800 dark:text-zinc-200 hover:border-black dark:hover:border-white transition-all duration-200 shadow-sm"
              >
                <Cpu className="w-4 h-4 text-neutral-700 dark:text-zinc-300" />
                <span>View Core Skills</span>
              </a>

              <button
                id="hero-cta-resume"
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border border-transparent hover:border-neutral-300 dark:hover:border-zinc-800 text-neutral-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Key Stat Cards Grid */}
            <div 
              id="hero-stats-grid"
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full pt-6 border-t border-neutral-200 dark:border-zinc-800"
            >
              <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-zinc-950/80 border border-neutral-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col justify-between">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 dark:text-white font-mono flex items-baseline gap-1">
                  3 <span className="text-xs font-sans font-medium text-neutral-500 dark:text-zinc-400">Systems</span>
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-zinc-400 font-medium leading-tight mt-1">
                  End-to-End GHL Builds
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-zinc-950/80 border border-neutral-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col justify-between">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
                  MERN &amp; .NET
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-zinc-400 font-medium leading-tight mt-1">
                  React, Node, C#, ASP.NET
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-zinc-950/80 border border-neutral-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col justify-between">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
                  Integrations
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-zinc-400 font-medium leading-tight mt-1">
                  Make, Stripe, Twilio, Mailgun
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-zinc-950/80 border border-neutral-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col justify-between">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 dark:text-white font-mono tracking-tight leading-tight">
                  2022–2026
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-zinc-400 font-medium leading-tight mt-1">
                  BS Information Technology
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Photo Placeholder Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Pulsing Radar Ring Effects */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-neutral-300/40 dark:border-zinc-800/80 animate-ping opacity-20 duration-1000" />
              <div className="w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full border border-neutral-300/30 dark:border-zinc-800/50 -z-10" />
            </div>

            {/* Main Photo Card Container */}
            <div 
              id="hero-photo-placeholder-card"
              className="relative w-full max-w-md rounded-3xl border border-neutral-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl p-6 sm:p-7 shadow-2xl overflow-hidden group hover:border-black dark:hover:border-zinc-600 transition-all duration-300"
            >
              
              {/* Top Tech Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-200 dark:border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-400" />
                  <span className="text-xs font-mono font-medium text-neutral-500 dark:text-zinc-400 ml-2">
                    profile_portrait.jpg
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-700 dark:text-zinc-300 bg-neutral-100 dark:bg-zinc-900 px-2 py-0.5 rounded-full border border-neutral-200 dark:border-zinc-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Hire
                </span>
              </div>

              {/* Photo Area Stage */}
              <div className="relative aspect-[4/4.8] rounded-2xl bg-neutral-900 border border-neutral-200 dark:border-zinc-800 overflow-hidden shadow-inner group/photo">
                
                {/* Photo Element */}
                <Image
                  src="/profile.jpg"
                  alt="Mark Geoffrey A. Batocabe"
                  fill
                  className="object-cover object-top group-hover/photo:scale-105 transition-transform duration-500"
                  priority
                  referrerPolicy="no-referrer"
                />

                {/* Subtle vignette & scan line overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Corner viewfinder brackets */}
                <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-white/70 pointer-events-none" />
                <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-white/70 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-white/70 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-white/70 pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-left pointer-events-none">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight drop-shadow-md">
                        Mark Geoffrey A. Batocabe
                      </h3>
                      <p className="text-[11px] text-zinc-300 font-mono drop-shadow-sm mt-0.5">
                        GHL Specialist &bull; Full-Stack Developer
                      </p>
                    </div>
                    <div className="p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Skill Chips Underneath */}
              <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                <span className="font-mono text-neutral-500 dark:text-zinc-400">
                  BSIT Graduate (2022–2026)
                </span>
                <span className="font-semibold text-neutral-900 dark:text-white flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                  GHL &bull; MERN &bull; .NET &bull; Make
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
