import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mark Geoffrey A. Batocabe | GHL Automation Specialist | Workflows, Integrations & AI',
  description: 'Portfolio of Mark Geoffrey A. Batocabe — GoHighLevel automation specialist who builds lead-to-booking, lead reactivation, and payment collection systems with workflows, integrations, and AI.',
  openGraph: {
    title: 'Mark Geoffrey A. Batocabe | GHL Automation Specialist | Workflows, Integrations & AI',
    description: 'Portfolio of Mark Geoffrey A. Batocabe — GoHighLevel automation specialist. Lead-to-booking systems, AI reply handling, n8n integrations, and documented builds.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mark Geoffrey A. Batocabe | GHL Automation Specialist | Workflows, Integrations & AI',
    description: 'Portfolio of Mark Geoffrey A. Batocabe — GoHighLevel automation specialist.',
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

