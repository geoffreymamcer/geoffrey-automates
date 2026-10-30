import type {Metadata} from 'next';
import './globals.css';
import { SITE_URL, SITE_DESCRIPTION, PERSON } from '@/lib/site';
import { projects } from '@/lib/projects';

const TITLE = 'Mark Geoffrey A. Batocabe | GHL Automation Specialist | Workflows, Integrations & AI';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: SITE_DESCRIPTION,
  applicationName: 'Geoffrey Automates',
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  keywords: [
    'GoHighLevel specialist',
    'GHL automation specialist',
    'GoHighLevel workflows',
    'GHL expert Philippines',
    'lead reactivation automation',
    'speed to lead',
    'appointment reminder automation',
    'n8n automation',
    'Conversation AI',
    'Mark Geoffrey Batocabe',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: 'Portfolio of Mark Geoffrey A. Batocabe — GoHighLevel automation specialist. Lead-to-booking systems, AI reply handling, n8n integrations, and documented builds.',
    type: 'website',
    url: '/',
    siteName: 'Geoffrey Automates',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Portfolio of Mark Geoffrey A. Batocabe — GoHighLevel automation specialist.',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: PERSON.name,
      alternateName: PERSON.shortName,
      jobTitle: PERSON.jobTitle,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}${PERSON.image}`,
      email: `mailto:${PERSON.email}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: PERSON.locality,
        addressRegion: PERSON.region,
        addressCountry: PERSON.country,
      },
      alumniOf: { '@type': 'CollegeOrUniversity', name: PERSON.school },
      knowsAbout: PERSON.knowsAbout,
      sameAs: PERSON.sameAs,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Geoffrey Automates',
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en',
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#case-studies`,
      name: 'Automation case studies',
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/case-studies/${p.id}`,
        name: p.title,
      })),
    },
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-black dark:text-zinc-100 antialiased selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black font-sans transition-colors duration-300" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

