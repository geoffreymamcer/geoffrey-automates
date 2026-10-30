'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code2, 
  Sparkles, 
  Layers, 
  Briefcase, 
  Cpu, 
  Send, 
  FileText,
  Workflow,
  CheckCircle2
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'services', 'experience', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: Code2, id: 'about' },
    { name: 'Skills', href: '#skills', icon: Cpu, id: 'skills' },
    { name: 'Projects', href: '#projects', icon: Layers, id: 'projects' },
    { name: 'Services', href: '#services', icon: Briefcase, id: 'services' },
    { name: 'Experience', href: '#experience', icon: Workflow, id: 'experience' },
    { name: 'Contact', href: '#contact', icon: Send, id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 backdrop-blur-xl border-b shadow-2xl ' +
            (theme === 'dark' 
              ? 'bg-black/90 border-white/10 shadow-black/80' 
              : 'bg-white/90 border-neutral-200 shadow-neutral-200/50')
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          id="nav-brand-logo"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 flex items-center justify-center shadow-sm border border-neutral-800 dark:border-neutral-200 group-hover:scale-105 transition-all duration-200">
            <Workflow className="w-4 h-4 text-white dark:text-neutral-950" />
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-zinc-300 transition-colors">
              Mark Geoffrey Batocabe
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-600 dark:text-zinc-400 font-medium">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white"></span>
              GHL Automation Specialist
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-neutral-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'text-neutral-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-zinc-900/80'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Resume Viewer Trigger */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-neutral-300 dark:border-zinc-800 bg-neutral-100 dark:bg-zinc-900/90 text-neutral-800 dark:text-zinc-200 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-200"
            title="View Resume / Credentials"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300" />
            <span>Resume</span>
          </button>

          {/* Theme Switcher Toggle */}
          <button
            id="nav-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="p-2 rounded-lg border border-neutral-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-neutral-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-zinc-700 transition-all duration-200 shadow-sm"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-zinc-200" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-800" />
            )}
          </button>

          {/* Direct CTA */}
          <a
            id="nav-cta-hire"
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-zinc-200 shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-neutral-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-neutral-600 dark:text-zinc-300"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-zinc-200" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-800" />
            )}
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-neutral-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-neutral-700 dark:text-zinc-200"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Right-Slide Drawer & Backdrop Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          {/* Dark Backdrop Overlay */}
          <div 
            id="mobile-drawer-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            aria-hidden="true"
          />

          {/* Right Slide-in Drawer Container */}
          <aside 
            id="mobile-nav-drawer"
            className="fixed inset-y-0 right-0 w-[290px] max-w-[85vw] bg-white dark:bg-zinc-950 border-l border-neutral-200 dark:border-zinc-800 shadow-2xl flex flex-col justify-between p-5 z-50 animate-in slide-in-from-right duration-300 ease-out"
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-zinc-800 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 flex items-center justify-center shadow-sm">
                    <Workflow className="w-4 h-4 text-white dark:text-neutral-950" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white">
                      Mark Geoffrey
                    </div>
                    <div className="text-[10px] text-neutral-500 dark:text-zinc-400">
                      GHL &amp; Full-Stack Builder
                    </div>
                  </div>
                </div>

                <button
                  id="mobile-drawer-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg border border-neutral-200 dark:border-zinc-800 bg-neutral-100 dark:bg-zinc-900 text-neutral-700 dark:text-zinc-300 hover:text-black dark:hover:text-white cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                          : 'text-neutral-700 dark:text-zinc-300 hover:bg-neutral-100 dark:hover:bg-zinc-900/80 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4" />
                        <span>{link.name}</span>
                      </div>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black" />
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Actions & Theme */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-neutral-200 dark:border-zinc-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold border border-neutral-300 dark:border-zinc-800 bg-neutral-50 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 hover:border-black dark:hover:border-white transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Resume</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-black text-white dark:bg-white dark:text-black shadow-md hover:bg-neutral-800 dark:hover:bg-zinc-200 transition-colors text-center cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hire Mark / Start Project</span>
              </a>

              <div className="flex items-center justify-between pt-2 px-1 text-[11px] text-neutral-500 dark:text-zinc-400">
                <span>Theme Mode</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-neutral-200 dark:border-zinc-800 bg-neutral-100 dark:bg-zinc-900 text-neutral-700 dark:text-zinc-300 text-xs font-medium cursor-pointer"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-3.5 h-3.5" />
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5" />
                      <span>Dark</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
