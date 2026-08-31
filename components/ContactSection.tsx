'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Globe, 
  ArrowUpRight,
  Workflow,
  Code2,
  Bot,
  Layers,
  MessageSquare
} from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = 'batocabemarkgeoffrey@gmail.com';
  const phoneNumber = '0994-694-4768';
  const phoneTel = '+639946944768';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-tech-grid border-t border-neutral-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 border border-neutral-300 dark:border-zinc-800 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Contact &amp; Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Get in Touch with <span className="bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">Mark Geoffrey</span>
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-zinc-400 max-w-xl text-sm sm:text-base">
            Reach out directly for GoHighLevel system builds, custom workflows, API integrations, and full-stack software development.
          </p>
        </div>

        {/* Main Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Card 1: Email Contact */}
          <div 
            id="contact-card-email"
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-black dark:hover:border-zinc-600 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 border border-neutral-200 dark:border-zinc-800">
                  Primary Email
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                Email Inquiries
              </h3>
              <p className="text-xs text-neutral-600 dark:text-zinc-400 mb-5 leading-relaxed">
                Send project scopes, GHL requirements, consultation requests, or role opportunities directly to Mark&apos;s inbox.
              </p>

              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-zinc-900/80 border border-neutral-200 dark:border-zinc-800 flex items-center justify-between gap-2 mb-6">
                <span className="text-xs sm:text-sm font-mono font-bold text-neutral-900 dark:text-white break-all select-all">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-neutral-200 dark:border-zinc-700 text-neutral-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors shrink-0 cursor-pointer shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-black dark:text-white" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${emailAddress}?subject=Project%20Inquiry%20for%20Mark%20Geoffrey`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-zinc-200 transition-colors shadow-sm cursor-pointer text-center"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Direct Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl text-xs font-semibold border border-neutral-300 dark:border-zinc-700 bg-neutral-50 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 hover:bg-neutral-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Card 2: Phone & Instant Messaging */}
          <div 
            id="contact-card-phone"
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-black dark:hover:border-zinc-600 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 border border-neutral-200 dark:border-zinc-800">
                  Phone / SMS
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                Direct Phone &amp; Mobile
              </h3>
              <p className="text-xs text-neutral-600 dark:text-zinc-400 mb-5 leading-relaxed">
                Available for urgent project discussions, phone calls, SMS coordination, and remote workflow inquiries.
              </p>

              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-zinc-900/80 border border-neutral-200 dark:border-zinc-800 flex items-center justify-between gap-2 mb-6">
                <span className="text-xs sm:text-sm font-mono font-bold text-neutral-900 dark:text-white">
                  {phoneNumber}
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-neutral-200 dark:border-zinc-700 text-neutral-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors shrink-0 cursor-pointer shadow-sm"
                  title="Copy phone number to clipboard"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-black dark:text-white" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${phoneTel}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-zinc-100 dark:text-black hover:bg-black dark:hover:bg-white transition-colors shadow-sm cursor-pointer text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call / SMS Now</span>
              </a>
              <button
                onClick={handleCopyPhone}
                className="px-4 py-3 rounded-xl text-xs font-semibold border border-neutral-300 dark:border-zinc-700 bg-neutral-50 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 hover:bg-neutral-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                {copiedPhone ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

        </div>

        {/* Location & Availability Information Bar */}
        <div className="p-6 sm:p-7 rounded-2xl bg-neutral-100 dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 flex items-center justify-center text-neutral-800 dark:text-zinc-200 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <span>Location: Pagbilao, Quezon, Philippines</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-xs text-neutral-600 dark:text-zinc-400 mt-0.5">
                Open to Remote Opportunities &bull; Worldwide Collaboration &bull; Fast Turnaround
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 px-3.5 py-2 rounded-xl border border-neutral-200 dark:border-zinc-800 shrink-0">
            <Clock className="w-4 h-4 text-neutral-600 dark:text-zinc-400" />
            <span>Response Time: Under 2 Hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
