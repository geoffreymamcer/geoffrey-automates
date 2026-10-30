import { SITE_URL, PERSON, SITE_DESCRIPTION } from '@/lib/site';
import { projects } from '@/lib/projects';

export const dynamic = 'force-static';

// Plain-text summary for AI assistants (llms.txt convention). Generated from the same data as the site.
export function GET() {
  const automation = projects.filter((p) => p.category === 'ghl');
  const other = projects.filter((p) => p.category !== 'ghl');
  const line = (p: (typeof projects)[number]) =>
    `- [${p.title}](${SITE_URL}/case-studies/${p.id}): ${p.subtitle} Stack: ${p.stack.join(', ')}.`;

  const body = `# ${PERSON.name} — ${PERSON.jobTitle}

> ${SITE_DESCRIPTION}

${PERSON.shortName} is a GoHighLevel (GHL) automation specialist based in ${PERSON.locality}, ${PERSON.region}, Philippines, available for freelance and full-time remote work. He builds lead-to-booking systems (speed-to-lead, nurture, appointment reminders, no-show recovery, review requests), AI reply handling with Conversation AI and Gemini, dead lead reactivation, and payment reminder automations, and connects GHL to n8n, Make.com, Google Apps Script, Google Sheets, and Slack through webhooks and APIs. Every build is tested against a QA checklist and documented with a system guide, case study, and video walkthrough. He also has a full-stack background (MERN, C#/.NET) and a BS in Information Technology from ${PERSON.school}.

## Automation case studies

${automation.map(line).join('\n')}

## Software and data projects

${other.map(line).join('\n')}

## Contact and profiles

- Website: ${SITE_URL}
- Email: ${PERSON.email}
${PERSON.sameAs.map((u) => `- ${u}`).join('\n')}
- Resume (PDF): ${SITE_URL}/resume.pdf
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
