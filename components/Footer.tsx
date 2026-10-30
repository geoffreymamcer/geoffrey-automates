'use client';

import React from 'react';
import { 
  ArrowUp, 
  Workflow, 
  Code2, 
  Mail, 
  Sparkles, 
  Heart, 
  GraduationCap,
  Layers
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-zinc-800/80 bg-white dark:bg-black py-12 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-neutral-200 dark:border-zinc-800/60">
          
          {/* Brand Block */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 flex items-center justify-center shadow-sm">
                <Workflow className="w-4 h-4 text-white dark:text-neutral-950" />
              </div>
              <span className="font-bold text-base text-neutral-900 dark:text-white">
                Mark Geoffrey A. Batocabe
              </span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-zinc-400 max-w-sm">
              GHL Automation Specialist &bull; Workflows, Integrations &amp; AI &bull; BSIT (2022–2026).
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-neutral-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
            <a href="#services" className="hover:text-black dark:hover:text-white transition-colors">Services</a>
            <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border border-neutral-200 dark:border-zinc-800 bg-neutral-50 dark:bg-zinc-900 text-neutral-700 dark:text-zinc-300 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all shadow-sm cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neutral-800 dark:bg-white animate-pulse" />
            <span>Available for freelance contracts & full-time positions</span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} Mark Geoffrey A. Batocabe. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
