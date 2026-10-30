import type { Project } from './projects';

// "GoHighLevel + n8n + Gemini (Demo Build)" -> "GoHighLevel + n8n + Gemini"
export const cleanLabel = (label: string) => label.replace(/\s*\(.*?\)\s*/g, '').trim();

export function caseStudyTitle(p: Project) {
  const kind = p.category === 'ghl' ? 'Case Study' : 'Project';
  return `${p.title} | ${cleanLabel(p.categoryLabel)} ${kind}`;
}
