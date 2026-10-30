import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2, ExternalLink, Mail, Workflow } from 'lucide-react';
import CaseStudyShell from '@/components/CaseStudyShell';
import { projects, getProject } from '@/lib/projects';
import { SITE_URL, PERSON } from '@/lib/site';
import { caseStudyTitle, cleanLabel } from '@/lib/seo';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = caseStudyTitle(p);
  const url = `/case-studies/${p.id}`;
  return {
    title,
    description: p.subtitle,
    keywords: [...p.stack, cleanLabel(p.categoryLabel), 'GoHighLevel automation', PERSON.shortName],
    alternates: { canonical: url },
    openGraph: { title, description: p.subtitle, url, type: 'article', siteName: 'Geoffrey Automates' },
    twitter: { card: 'summary_large_image', title, description: p.subtitle },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const Icon = p.icon;
  const pageUrl = `${SITE_URL}/case-studies/${p.id}`;
  const others = projects.filter((o) => o.id !== p.id);
  const isAutomation = p.category === 'ghl';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${pageUrl}#work`,
        name: p.title,
        headline: caseStudyTitle(p),
        description: p.subtitle,
        url: pageUrl,
        genre: isAutomation ? 'Automation case study' : 'Software project',
        keywords: p.stack.join(', '),
        about: p.stack.map((s) => ({ '@type': 'Thing', name: s })),
        abstract: `${p.problem} ${p.solution}`,
        author: { '@id': `${SITE_URL}/#person` },
        creator: { '@id': `${SITE_URL}/#person` },
        isPartOf: { '@id': `${SITE_URL}/#website` },
        ...(p.liveUrl ? { sameAs: p.liveUrl } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Portfolio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${SITE_URL}/case-studies` },
          { '@type': 'ListItem', position: 3, name: p.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <CaseStudyShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-neutral-500 dark:text-zinc-400 mb-5 flex flex-wrap items-center gap-1.5">
          <Link href="/" className="hover:text-black dark:hover:text-white">Portfolio</Link>
          <span>/</span>
          <Link href="/case-studies" className="hover:text-black dark:hover:text-white">Case Studies</Link>
          <span>/</span>
          <span className="text-neutral-800 dark:text-zinc-200">{p.title}</span>
        </nav>

        {/* Banner */}
        <header className={`rounded-2xl p-6 sm:p-8 ${p.imageGradient} text-white border border-white/10 shadow-xl`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20 mb-4">
            <Icon className="w-3.5 h-3.5" />
            <span>{p.categoryLabel}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-3">{p.title}</h1>
          <p className="text-sm sm:text-base text-white/85 max-w-3xl leading-relaxed">{p.subtitle}</p>
          <p className="text-xs text-white/60 mt-3">
            Designed, built, and documented by{' '}
            <Link href="/" className="underline hover:text-white">{PERSON.name}</Link>, {PERSON.jobTitle}.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6 pt-5 border-t border-white/10">
            {p.metrics.map((m) => (
              <div key={m.label} className="p-2.5 sm:p-3 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 min-w-0">
                <div className="text-sm sm:text-lg font-bold font-mono text-white break-words">{m.value}</div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
          <section className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800">
            <h2 className="text-xs font-bold text-neutral-900 dark:text-zinc-200 uppercase tracking-wider mb-2">The Challenge</h2>
            <p className="text-sm text-neutral-600 dark:text-zinc-300 leading-relaxed">{p.problem}</p>
          </section>
          <section className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800">
            <h2 className="text-xs font-bold text-neutral-900 dark:text-zinc-200 uppercase tracking-wider mb-2">The Solution &amp; Engineering</h2>
            <p className="text-sm text-neutral-600 dark:text-zinc-300 leading-relaxed">{p.solution}</p>
          </section>
        </div>

        {/* Architecture */}
        <section className="mt-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800">
          <h2 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Workflow className="w-4 h-4 text-neutral-700 dark:text-zinc-300" />
            <span>Key Architecture &amp; Automation Deliverables</span>
          </h2>
          <ul className="space-y-3">
            {p.architecture.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-zinc-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Stack */}
        <section className="mt-8">
          <h2 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-neutral-700 dark:text-zinc-300" />
            <span>Technologies &amp; Tools Applied</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-100 dark:bg-zinc-800 text-neutral-800 dark:text-zinc-200 border border-neutral-200 dark:border-zinc-700">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
              {isAutomation ? 'Need a system like this for your business?' : 'Interested in working together?'}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-zinc-400 mt-1">
              {isAutomation
                ? 'Full documentation, screenshots, and the video walkthrough are in the detailed case study.'
                : 'See the live project, or reach out to talk about your build.'}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold border border-neutral-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-neutral-900 dark:text-white hover:border-black dark:hover:border-white transition-all"
              >
                <span>{p.liveUrlLabel || 'Open Live Project'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={`mailto:${PERSON.email}?subject=${encodeURIComponent(`Project inquiry: ${p.title}`)}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-zinc-200 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Request Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Other case studies (internal links) */}
        <section className="mt-12">
          <h2 className="text-xs font-bold text-neutral-500 dark:text-zinc-400 uppercase tracking-wider mb-4">More Case Studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {others.map((o) => (
              <Link
                key={o.id}
                href={`/case-studies/${o.id}`}
                className="group p-4 rounded-xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all"
              >
                <div className="text-[11px] text-neutral-500 dark:text-zinc-400 mb-1 truncate">{cleanLabel(o.categoryLabel)}</div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-bold text-neutral-900 dark:text-white group-hover:underline">{o.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-neutral-500 group-hover:text-black dark:group-hover:text-white" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </CaseStudyShell>
  );
}
