import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Explicitly welcome search and AI crawlers so the portfolio can be indexed and cited.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-SearchBot',
          'Claude-User',
          'PerplexityBot',
          'Google-Extended',
          'Applebot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
