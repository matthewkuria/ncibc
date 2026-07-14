# New Creation International Bible College — Website

A Next.js 14 (App Router) + Tailwind CSS site built from the college's
own bio: non-denominational, founded 1996, licensed TVET institution
(April 2025), 16-month Diploma in Christian Ministry, English & Kiswahili.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `app/page.tsx` — homepage (hero, stats, about excerpt, program timeline, nations, CTA)
- `app/about/page.tsx` — full history and mission
- `app/programs/page.tsx` — the diploma structure in detail
- `app/admissions/page.tsx` — application steps + form
- `app/contact/page.tsx` — contact details + form
- `app/components/` — Navbar, Footer, SemesterTimeline, NationsList

## Design

- **Colors:** Ink Navy `#14213D`, Illuminated Gold `#C9A227`, Parchment `#F6F1E4`, Wine `#6E2438`, Slate `#4B5563`
- **Type:** Fraunces (display, italic for headlines) + Inter (body) — loaded via `next/font/google`, so the first `npm run dev`/`build` needs internet access once to fetch them.
- **Signature element:** the five-stage semester timeline (`SemesterTimeline.tsx`) mirrors the college's real 4-semester + attachment structure — it's the one place a numbered sequence is used, because it's a genuine sequence.

## Next steps you'll likely want

- Wire the Admissions and Contact forms to a backend or form service (Formspree, Resend, a server action, etc.) — they currently render but don't submit anywhere.
- Add real photography (campus, chapel, graduation) — the design currently leans on typography and color rather than imagery.
- Swap the placeholder email/address in `Footer.tsx` and `app/contact/page.tsx` for the college's real contact details.
