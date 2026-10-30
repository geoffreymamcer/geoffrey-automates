import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CaseStudyShell from '@/components/CaseStudyShell';
import { projects } from '@/lib/projects';
import { PERSON } from '@/lib/site';
import { cleanLabel } from '@/lib/seo';

const TITLE = 'GoHighLevel Automation Case Studies | Mark Geoffrey A. Batocabe';
const DESCRIPTION =
  'Documented GoHighLevel and AI automation systems: lead-to-booking, dead lead reactivation, payment chasing, and more — each tested, documented, and walked through on video.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/case-studies' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/case-studies', type: 'website', siteName: 'Geoffrey Automates' },
};

export default function CaseStudiesIndex() {
  const groups = [
    { heading: 'Automation Systems', items: projects.filter((p) => p.category === 'ghl') },
    { heading: 'Software & Data Projects', items: projects.filter((p) => p.category !== 'ghl') },
  ];

  return (
    <CaseStudyShell>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Case Studies
        </h1>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-zinc-400 max-w-2xl">
          {DESCRIPTION} Built by {PERSON.name}, {PERSON.jobTitle}.
        </p>

        {groups.map((g) => (
          <section key={g.heading} className="mt-10">
            <h2 className="text-xs font-bold text-neutral-500 dark:text-zinc-400 uppercase tracking-wider mb-4">{g.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {g.items.map((p) => {
                const Icon = p.icon;
                return (
                  <Link
                    key={p.id}
                    href={`/case-studies/${p.id}`}
                    className={`group rounded-2xl p-6 ${p.imageGradient} text-white border border-white/10 hover:shadow-xl transition-all`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/20">
                        <Icon className="w-3.5 h-3.5" />
                        {cleanLabel(p.categoryLabel)}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white/80" />
                    </div>
                    <h3 className="text-xl font-extrabold tracking-tight mb-2 group-hover:underline">{p.title}</h3>
                    <p className="text-xs text-white/80 leading-relaxed">{p.subtitle}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </CaseStudyShell>
  );
}
