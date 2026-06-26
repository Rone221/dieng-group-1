# The Dieng Group — Website Mockup 1 · "The Meridian Dispatch"

Editorial / field-journal art direction for **The Dieng Group** (consulting · import · export, Indianapolis → West Africa).

**Stack:** Next.js 16 (App Router, SSG) · React 19 · Tailwind v4.

## Features
- **Multi-page**: `/`, `/about`, `/services`, `/impact`, `/team`, `/dispatch`, `/contact`
- **Bilingual EN / FR** — toggle in the header, choice remembered (default **EN**)
- **Light / dark mode** — toggle in the header
- **Brand colours from the logo** — orange→gold, charcoal, warm neutrals (no invented colours)
- **No statistics** anywhere (qualitative "Our Impact"); credibility carried by place (Indianapolis → Dakar → Banjul)
- Newsletter double opt-in, gated-PDF capture (Full Name · Sector · Email · Phone), SPELIT framework, podcast space
- West-Africa imagery — **license-clear placeholders, to replace with the client's own photos** (see `public/images/CREDITS.md`)

## Run
```bash
npm install
npm run dev      # http://localhost:3000
```

## Status / to do
Forms are front-end only (wire to Resend / webhook in Phase 2). Ibrahim's headshot and the team roles need confirming. Social links are placeholders.
