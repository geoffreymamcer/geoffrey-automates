'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import MotionBackground from '@/components/MotionBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechnicalSkillsSection from '@/components/TechnicalSkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectShowcase from '@/components/ProjectShowcase';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import ResumeModal from '@/components/ResumeModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Ensure on page load or reload that the viewport starts at the top (Hero Section)
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-neutral-100 transition-colors duration-300 overflow-x-hidden font-sans selection:bg-white selection:text-black">
        
        {/* Interactive Motion Graphics Particle Canvas */}
        <MotionBackground />

        {/* Floating Top Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
          <AboutSection />
          <TechnicalSkillsSection />
          <ProjectShowcase />
          <ServicesSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Resume / Credentials Modal */}
        <ResumeModal 
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />

      </div>
    </ThemeProvider>
  );
}
