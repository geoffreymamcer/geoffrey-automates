import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { projects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...projects.map((p) => ({
      url: `${SITE_URL}/case-studies/${p.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p.category === 'ghl' ? 0.8 : 0.6,
    })),
    { url: `${SITE_URL}/resume.pdf`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
