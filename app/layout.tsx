import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mark Geoffrey A. Batocabe | GoHighLevel Specialist & Full-Stack Developer',
  description: 'Portfolio of Mark Geoffrey A. Batocabe — GoHighLevel Automation Specialist & Full-Stack Developer (MERN / .NET). BSIT Graduate (2022–2026). Specializing in complete client-acquisition systems, conditional automations, and full-stack software development.',
  openGraph: {
    title: 'Mark Geoffrey A. Batocabe | GoHighLevel Specialist & Full-Stack Developer',
    description: 'Portfolio of Mark Geoffrey A. Batocabe — GoHighLevel Automation Specialist & Full-Stack Developer (MERN / .NET). End-to-end CRM workflows, funnels, AI agents, and web applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mark Geoffrey A. Batocabe | GoHighLevel Specialist & Full-Stack Developer',
    description: 'Portfolio of Mark Geoffrey A. Batocabe — GoHighLevel Automation Specialist & Full-Stack Developer (MERN / .NET).',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-black dark:text-zinc-100 antialiased selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black font-sans transition-colors duration-300" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

