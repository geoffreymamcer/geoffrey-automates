'use client';

/**
 * Tina: AI receptionist demo (n8n + Gemini) for a fictional auto repair shop.
 *
 * DEMO-ONLY COMPONENT. This file lives on the `demo/tina` branch and must NEVER be merged into `main`.
 * Even if it is merged by mistake, it renders nothing unless ALL of these are true:
 *   1. The build is a Vercel *preview* deployment (NEXT_PUBLIC_VERCEL_ENV === 'preview').
 *   2. NEXT_PUBLIC_TINA_WEBHOOK_URL is set (configure it in Vercel for the Preview environment,
 *      scoped to the `demo/tina` branch only).
 *   3. The page is not being served from the production domain.
 * The n8n Chat Trigger's "Allowed Origins (CORS)" should also list only the preview URL.
 */

import { useEffect } from 'react';

const CHAT_JS_URL = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
const CHAT_CSS_URL = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
const PRODUCTION_HOSTS = ['geoffreyautomates.com', 'www.geoffreyautomates.com'];

const VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV;
const WEBHOOK_URL = process.env.NEXT_PUBLIC_TINA_WEBHOOK_URL;

const THEME_CSS = `
  :root {
    --chat--color-primary: #f97316;
    --chat--color-primary-shade-50: #ea580c;
    --chat--color-primary-shade-100: #c2410c;
    --chat--color-secondary: #262626;
    --chat--color-secondary-shade-50: #171717;
    --chat--toggle--background: #f97316;
    --chat--toggle--hover--background: #ea580c;
    --chat--toggle--active--background: #c2410c;
    --chat--header--background: #171717;
    --chat--header--color: #fafafa;
  }
`;

declare global {
  interface Window {
    __tinaChatLoaded?: boolean;
  }
}

function isAllowedToRender(): boolean {
  if (VERCEL_ENV !== 'preview') return false;
  if (!WEBHOOK_URL) return false;
  if (typeof window === 'undefined') return false;
  if (PRODUCTION_HOSTS.includes(window.location.hostname.toLowerCase())) return false;
  return true;
}

export default function TinaChatWidget() {
  useEffect(() => {
    if (!isAllowedToRender() || window.__tinaChatLoaded) return;
    window.__tinaChatLoaded = true;

    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = CHAT_CSS_URL;
    document.head.appendChild(css);

    const theme = document.createElement('style');
    theme.textContent = THEME_CSS;
    document.head.appendChild(theme);

    import(/* webpackIgnore: true */ CHAT_JS_URL)
      .then(({ createChat }) => {
        createChat({
          webhookUrl: WEBHOOK_URL,
          mode: 'window',
          loadPreviousSession: true,
          showWelcomeScreen: false,
          defaultLanguage: 'en',
          initialMessages: [
            "Hi! I'm Tina, the virtual assistant for Torque & Tire Auto Service in Austin, TX.",
            'I can answer questions about our services, prices, and hours, and help you book an appointment. How can I help?',
          ],
          i18n: {
            en: {
              title: 'Tina · Torque & Tire (Live demo)',
              subtitle:
                'An AI receptionist I built with n8n + Gemini. Torque & Tire is a fictional business.',
              footer: '',
              getStarted: 'New conversation',
              inputPlaceholder: 'Ask about services, prices, or booking…',
            },
          },
        });
      })
      .catch((err: unknown) => {
        window.__tinaChatLoaded = false;
        console.error('[Tina demo] Failed to load chat widget', err);
      });
  }, []);

  return null;
}
