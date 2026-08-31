'use client';

import React from 'react';
import { 
  Quote, 
  Star, 
  CheckCircle2, 
  TrendingUp, 
  Workflow, 
  Sparkles,
  Building2,
  Users,
  ShieldCheck
} from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'David Vance',
      role: 'Founder & CEO',
      company: 'Vance Scale Agency',
      content: 'Mark is by far the most technically proficient GoHighLevel specialist we have ever worked with. Having someone who is an actual full-stack developer build our snapshots means everything works flawlessly without ugly builder hacks.',
      rating: 5,
      impact: 'Scaled from 12 to 85 agency sub-accounts in 4 months'
    },
    {
      name: 'Elena Rostova',
      role: 'Operations Director',
      company: 'Apex Health Group',
      content: 'Our patient no-show rate dropped by nearly half the moment Mark deployed the 2-way SMS triage and calendar automation. His attention to detail on API webhooks and custom CSS is world-class.',
      rating: 5,
      impact: '+48% show-up rate lift & $145k in booked visits'
    },
    {
      name: 'Marcus Sterling',
      role: 'Chief Marketing Officer',
      company: 'FitPro Global',
      content: 'We needed a dynamic interactive calorie quiz coded directly into our GHL funnel. Every other agency said it was impossible in GoHighLevel — Mark coded it in 48 hours and we generated $85k on launch month.',
      rating: 5,
      impact: '$85.4K revenue generated in 30 days'
    }
  ];

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 border border-neutral-300 dark:border-zinc-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Feedback & Measurable Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Client <span className="bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">Results & Testimonials</span>
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-zinc-400 max-w-2xl text-sm sm:text-base">
            How agencies, healthcare practices, and SaaS companies scale their operations with Mark&apos;s custom GHL automations and full-stack solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:border-black dark:hover:border-zinc-600 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-neutral-900 dark:fill-white text-neutral-900 dark:text-white" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-400 dark:text-zinc-600" />
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 dark:text-zinc-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div>
                {/* Impact Badge */}
                <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 text-neutral-900 dark:text-zinc-200 text-[11px] font-semibold flex items-center gap-2 mb-4">
                  <TrendingUp className="w-3.5 h-3.5 text-neutral-800 dark:text-zinc-200 shrink-0" />
                  <span>{t.impact}</span>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-t border-neutral-100 dark:border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                      {t.name}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-zinc-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
