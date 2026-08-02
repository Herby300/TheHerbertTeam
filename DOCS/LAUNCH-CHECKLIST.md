# Launch Checklist — The Herbert Team Website

Living operational checklist. Update this document before every production release.

| | |
| --- | --- |
| **Domain** | https://www.theherbertteam.com |
| **Repo** | https://github.com/Herby300/TheHerbertTeam |
| **Branch for release** | merge to `main`, then deploy |
| **Build** | `npm run build` → publish `dist/` |
| **Last updated** | August 1, 2026 |

**How to use**

1. Walk the list top to bottom before each production push.
2. Check an item only when it has been verified for *this* release.
3. Leave anything unproven unchecked — “wired in code” is not the same as “verified live.”
4. After launch, leave completed launch items checked and keep post-launch items open until done.
5. For the next release, re-verify anything that could have regressed (forms, calendar, apply URL, reviews widget, analytics).

Related docs: `DOCS/01-LAUNCH-PUNCHLIST.md` (mission), `SITE-OVERVIEW.md` (shareable status), `README.md` (technical).

---

## Website functionality

### Verified (do not regress)

- [x] **Calendar / booking** — schedule page uses Pivot Point booking widget (`site.calendlyUrl`)
- [x] **Mortgage application** — apply CTAs use Primis HomeHub (`site.applyUrl`)
- [x] **Google Reviews** — Common Ninja restored; widget ID `fb5ecfcb-806d-4364-988d-97e1cbb83543`; SDK in `Layout.astro`
- [x] **Apply page top CTA** — Launch Issue #3: “Start Your Mortgage Application” above the fold on `/apply`, tracked as `begin_application` / `apply_page_top`
- [x] **Website Issues resolved** — EmbedSocial reverted; Common Ninja provider restored; Apply conversion strip shipped; Primis compliance sign-off recorded; imagery and branding complete

### Still verify before each release

- [ ] Homepage loads; hero, CTAs, and major sections render
- [ ] Primary nav and mobile menu open, close, and route correctly
- [ ] Loan Programs hub + all 8 program pages load
- [ ] Solutions hub + all 4 solution pages load
- [ ] Resources, calculator, FAQ, blog index, and blog posts load
- [ ] About, Contact, Reviews, Partners, Apply, Schedule load
- [ ] Legal pages load: Licensing, Privacy Policy, Terms
- [ ] 404 page renders for a bad URL
- [ ] Phone links dial `tel:+17607153434`
- [ ] Email links open `mailto:jason@theherbertteam.com`
- [ ] Footer compliance block present (dual NMLS, Equal Housing, FDIC, not-a-commitment)
- [ ] Header logo and favicon render
- [ ] Common Ninja reviews visible on homepage testimonials + `/reviews` (re-check after domain/host changes)

---

## Forms

### Still verify before each release

- [ ] Contact form submits and lands in Pivot Point
- [ ] Partner forms submit (realtor, financial advisor, divorce attorney, builder)
- [ ] Guide download form submits
- [ ] Newsletter form submits
- [ ] Thank-you / redirect behavior matches Pivot Point config
- [ ] **Lead-magnet PDFs uploaded in Pivot Point** and attached to the guide automation:
  - [ ] `herbert-team-homebuyer-guide.pdf`
  - [ ] `first-time-homebuyer-checklist.pdf`
  - [ ] `mortgage-process-guide.pdf`
  - [ ] `moving-checklist.pdf`
  - [ ] `closing-cost-guide.pdf`
  - [ ] `home-buying-timeline.pdf`
- [ ] Booking calendar opens and can complete a test appointment
- [ ] Apply / HomeHub opens in a new tab from `/apply` top CTA and bottom CTA

---

## Mobile testing

### Still verify before each release

- [ ] Homepage on phone-width viewport
- [ ] Mobile nav open / close / focus trap / overlay
- [ ] Forms usable on phone (fields, submit, keyboard)
- [ ] Apply page top CTA visible without excessive scroll
- [ ] Schedule / booking usable on phone
- [ ] Reviews widget usable on phone
- [ ] Tap targets ≥ 44px on primary actions
- [ ] No horizontal overflow on key pages (`/`, `/apply`, `/contact`, `/loan-programs`, `/reviews`)

---

## SEO

### Verified in build (re-run before release)

- [x] `npm run build` completes with zero errors
- [x] `npm run audit:seo` — 0 blockers, 0 warnings (titles, descriptions, canonicals, H1s, alt text, image existence)
- [x] `npm run check` — 0 errors
- [x] Sitemap generated (`sitemap-index.xml`)
- [x] `robots.txt` present; thank-you excluded from sitemap
- [x] Real `og-default.jpg` share card in place
- [x] Real favicon + Apple touch icon in place

### Still verify on the live domain

- [ ] Canonical host is `www.theherbertteam.com`
- [ ] Apex (`theherbertteam.com`) redirects to `www`
- [ ] HTTPS / SSL valid
- [ ] Sitemap submitted in Google Search Console
- [ ] Sample pages indexed (or submitted) after first deploy
- [ ] Social share preview looks correct (Facebook / LinkedIn debugger)

---

## Analytics

### Wired in code (still confirm live)

- [ ] Meta Pixel fires PageView on a live page (`497875464066153`)
- [ ] GA4 realtime shows traffic (`G-BG0E3R8MG8`)
- [ ] Form submit fires lead conversion (console + Meta Pixel Helper + GA4)
- [ ] Apply CTA fires `begin_application` (top + bottom on `/apply`)
- [ ] Schedule CTA fires `schedule`
- [ ] Phone click tracking fires where expected
- [ ] Privacy Policy still names Common Ninja (not EmbedSocial) and lists Meta / GA4

---

## Production deployment

### Still complete for go-live / each release

- [ ] Working tree clean; intended commits on the release branch
- [ ] Merged to `main`
- [ ] Host connected to GitHub (Vercel / Netlify / Cloudflare Pages)
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Deploy succeeds
- [ ] DNS: `www` points at host; apex redirects to `www`
- [ ] Smoke test production homepage
- [ ] Smoke test `/apply`, `/schedule`, `/contact`, `/reviews`
- [ ] Confirm Common Ninja widget on **production domain** (domain locks are common)
- [ ] Confirm booking widget on production
- [ ] Confirm apply URL still opens Primis HomeHub

---

## Post-launch

### After first production deploy

- [ ] Submit sitemap in Google Search Console
- [ ] Re-verify state license table on `/licensing` against Primis disclosures
- [ ] Lighthouse on live `/`, `/loan-programs/self-employed`, `/resources/calculator` (targets 95+)
- [ ] Monitor Meta / GA4 for 24–48 hours of real traffic
- [ ] Confirm at least one real (or controlled) form lead arrives end-to-end with the PDF

### Backlog when material exists (not launch blockers)

- [ ] Named testimonials with written permission
- [ ] Jason intro video on `/about`
- [ ] Client video testimonials on `/reviews` (`videoTestimonials` in `src/data/testimonials.ts`)
- [ ] Per-post blog images (override `/images/blog/placeholder.webp`)

### Known intentional decisions (do not “fix” without asking)

- [x] Land & Ranch label on programs hero kept — product is offered; no dedicated page by choice
- [x] Written reviews may remain anonymized by role/city until permissioned names exist
- [x] `/reviews` video section stays hidden until YouTube IDs are added

---

## Pre-release command gate

Run from the project root before deploying:

```bash
npm run check
npm run build
npm run audit:seo
npm run check:contrast
```

All four should pass. Then walk the unchecked items that apply to this release.

---

## Release log

| Date | Release | Notes | Owner |
| --- | --- | --- | --- |
| 2026-08-01 | Pre-launch | Calendar, apply URL, Common Ninja reviews, Apply top CTA, prior website issues verified in codebase / local build | — |
| | | | |
