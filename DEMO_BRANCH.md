# demo/tina: DO NOT MERGE INTO MAIN

This branch adds a live demo of **Tina**, an AI receptionist (n8n + Gemini) for the fictional
Torque & Tire Auto Service. It is meant to run **only** on this branch's Vercel preview URL
(`*.vercel.app`), never on geoffreyautomates.com.

## Rules
- Never merge, rebase, or cherry-pick this branch into `main`.
- To pick up new site changes, merge `main` INTO this branch (one direction only):
  `git checkout demo/tina && git merge main && git push`

## Safety layers
1. **Branch isolation:** production deploys from `main`; this code never reaches it.
2. **Build gate:** the widget renders only when `NEXT_PUBLIC_VERCEL_ENV === 'preview'`.
3. **Env gate:** it needs `NEXT_PUBLIC_TINA_WEBHOOK_URL`, set in Vercel for the Preview
   environment and scoped to the `demo/tina` branch only.
4. **Host gate:** it refuses to load on geoffreyautomates.com or www.geoffreyautomates.com.
5. **n8n CORS:** the Chat Trigger's Allowed Origins lists only this branch's preview URL.

## Files changed vs main
- `components/TinaChatWidget.tsx` (new)
- `app/layout.tsx` (renders `<TinaChatWidget />`)
- `DEMO_BRANCH.md` (this file)
