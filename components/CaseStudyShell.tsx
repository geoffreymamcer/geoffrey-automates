import Link from 'next/link';
import { ArrowLeft, Workflow } from 'lucide-react';
import { PERSON } from '@/lib/site';

// Lightweight header/footer for standalone case study pages (same look as the main site).
export default function CaseStudyShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-neutral-100 font-sans bg-tech-grid">
      <header className="sticky top-0 z-40 border-b border-neutral-200 dark:border-zinc-800/80 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 flex items-center justify-center shadow-sm border border-neutral-800 dark:border-neutral-200 shrink-0">
              <Workflow className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-sm text-neutral-900 dark:text-white truncate">{PERSON.shortName}</div>
              <div className="text-[11px] text-neutral-500 dark:text-zinc-400 truncate">GHL Automation Specialist</div>
            </div>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-neutral-200 dark:border-zinc-800 bg-neutral-50 dark:bg-zinc-900 text-neutral-700 dark:text-zinc-300 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Portfolio</span>
          </Link>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="border-t border-neutral-200 dark:border-zinc-800/80 bg-white dark:bg-black py-8 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 dark:text-zinc-400">
          <span>&copy; {new Date().getFullYear()} {PERSON.name}. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/case-studies" className="hover:text-black dark:hover:text-white">All Case Studies</Link>
            <a href={`mailto:${PERSON.email}`} className="hover:text-black dark:hover:text-white">Email</a>
            <a href={PERSON.sameAs[0]} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">Upwork</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
