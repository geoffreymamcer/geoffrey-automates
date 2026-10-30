import { ImageResponse } from 'next/og';

export const alt = 'Mark Geoffrey A. Batocabe — GHL Automation Specialist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Social preview card shown when the site link is shared (LinkedIn, Messenger, Upwork chat, etc.)
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #18181b 0%, #09090b 60%, #000000 100%)',
          color: '#fafafa',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', gap: 16 }}>
          {['GHL Automation Specialist', 'Workflows, Integrations & AI'].map((t) => (
            <div
              key={t}
              style={{
                display: 'flex',
                padding: '10px 22px',
                borderRadius: 999,
                border: '1px solid #3f3f46',
                background: '#18181b',
                fontSize: 26,
                color: '#e4e4e7',
              }}
            >
              {t}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>
            Mark Geoffrey A. Batocabe
          </div>
          <div style={{ fontSize: 34, color: '#a1a1aa', marginTop: 24, lineHeight: 1.35 }}>
            GoHighLevel systems that turn leads into booked appointments: speed-to-lead, reminders,
            no-show recovery, AI reply handling, and lead reactivation.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, color: '#d4d4d8' }}>
          <span>geoffreyautomates.com</span>
          <span>GHL • n8n • Make • Gemini</span>
        </div>
      </div>
    ),
    size
  );
}
