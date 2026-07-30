# The Herbert Team Website — Shareable Overview

**Status:** Build complete. Primis marketing compliance has signed off. All photography and branding are live. Remaining work is operational (hosting, CRM automations, and post-launch checks).

| | |
| --- | --- |
| **Practice** | The Herbert Team — Jason Herbert, Mortgage Solution Expert |
| **NMLS** | Jason Herbert #633039 · Primis Mortgage Company #1894879 |
| **Location** | Georgetown, Texas |
| **Production domain** | https://www.theherbertteam.com |
| **Repository** | https://github.com/Herby300/TheHerbertTeam |
| **Last updated** | July 27, 2026 |

---

## What this site is

A multi-page marketing site for Jason Herbert’s mortgage practice. Primary goals:

1. Get qualified visitors to **apply online** through Primis HomeHub
2. Get visitors to **book a free 20-minute strategy call**
3. Capture leads through contact forms and free guide downloads
4. Educate buyers with plain-English content (guides, FAQ, blog, calculator)

**Positioning:** The Mortgage Solution Expert  
**Tagline:** More Than a Mortgage. A Mortgage Solution.

---

## Contact & brand identifiers

| Item | Value |
| --- | --- |
| Phone | (760) 715-3434 |
| Email | jason@theherbertteam.com |
| Apply portal | Primis HomeHub |
| Booking | Pivot Point CRM calendar |
| Hours | Mon–Fri 8:00 AM – 6:00 PM CT · Sat by appointment · Sun closed |
| Social | YouTube, Facebook, Instagram, TikTok, LinkedIn (@mortgagesolutionexpert) |

---

## Site map (pages)

### Core

| Page | URL |
| --- | --- |
| Homepage | `/` |
| About | `/about` |
| Contact | `/contact` |
| Reviews | `/reviews` |
| Apply | `/apply` |
| Schedule | `/schedule` |
| Thank you | `/thank-you` *(noindex)* |
| 404 | custom error page |

### Loan programs

| Page | URL |
| --- | --- |
| Programs hub | `/loan-programs` |
| Conventional | `/loan-programs/conventional` |
| FHA | `/loan-programs/fha` |
| VA | `/loan-programs/va-loans` |
| Jumbo | `/loan-programs/jumbo` |
| Construction | `/loan-programs/construction` |
| Investor / DSCR | `/loan-programs/investor-dscr` |
| Self-employed | `/loan-programs/self-employed` |
| Refinance | `/loan-programs/refinance` |

### Signature solutions

| Page | URL |
| --- | --- |
| Solutions hub | `/solutions` |
| ATM Mortgage | `/solutions/atm-mortgage` |
| Buy Before You Sell | `/solutions/buy-before-you-sell` |
| Down Payment Assistance | `/solutions/down-payment-assistance` |
| First-Time Homebuyers | `/solutions/first-time-homebuyers` |

### Resources & education

| Page | URL |
| --- | --- |
| Free guides | `/resources` |
| Mortgage calculator | `/resources/calculator` |
| FAQ | `/faq` |
| Blog index | `/blog` |
| 6 seed posts | `/blog/[slug]` |

### Partners & legal

| Page | URL |
| --- | --- |
| Referral partners | `/partners` |
| Licensing & disclosures | `/licensing` |
| Privacy policy | `/privacy-policy` |
| Terms of use | `/terms` |

---

## What’s finished

- Full site built and building cleanly (`npm run build` succeeds)
- SEO audit clean across all pages (titles, descriptions, canonicals, H1s, alt text, image existence)
- Real photography integrated for heroes, programs, solutions, resources, two-futures, blog fallback, and social share card
- Real brand mark in the header; silver-on-navy lockup in the footer; HT monogram as favicon / Apple touch icon
- Primis marketing compliance signed off on copy and licensing verbiage
- Analytics wired: Meta Pixel + Google Analytics 4
- Forms and booking via Pivot Point (GoHighLevel)
- Google Reviews widget (Common Ninja) embedded on reviews surfaces
- WCAG AA contrast verified on the homepage “Two Futures” panels
- No placeholder photography remaining on the site

---

## What’s left before go-live

These are operational steps, not design or code gaps.

### 1. Lead-magnet PDFs in Pivot Point

Upload the six guide PDFs and attach each to the matching form automation. Filenames the site expects:

- `herbert-team-homebuyer-guide.pdf`
- `first-time-homebuyer-checklist.pdf`
- `mortgage-process-guide.pdf`
- `moving-checklist.pdf`
- `closing-cost-guide.pdf`
- `home-buying-timeline.pdf`

If this is skipped, form submissions still “succeed” on the site but visitors never receive the guide.

### 2. Confirm conversion tracking on a live form submit

Submit one real test form with the browser console open. Confirm Meta Pixel and GA4 lead events fire. Forms work either way; this only affects attribution.

### 3. Host + DNS

Connect the GitHub repo to a static host (Netlify, Vercel, or Cloudflare Pages), then:

- Serve `www.theherbertteam.com`
- Redirect the apex (`theherbertteam.com`) → `www`
- Build command: `npm run build`
- Output folder: `dist`

### 4. Verify Google Reviews on the live domain

Confirm the Common Ninja widget shows real reviews in production. These widgets are often domain-locked and can look fine locally while empty on the live site.

---

## Soon after launch

- Submit `https://www.theherbertteam.com/sitemap-index.xml` in Google Search Console
- Re-check the state license table on `/licensing` against Primis disclosures
- Run Lighthouse on the live URL (targets: 95+ performance, accessibility, best practices, SEO)
- Optional polish when material exists: named testimonials with permission, Jason intro video, client video reviews, per-post blog images

---

## Integrations summary

| System | Purpose |
| --- | --- |
| Primis HomeHub | Online mortgage application |
| Pivot Point CRM | Contact forms, guide downloads, newsletter, booking calendar |
| Meta Pixel | Ad conversion tracking (`497875464066153`) |
| Google Analytics 4 | Site analytics (`G-BG0E3R8MG8`) |
| Common Ninja | Live Google Reviews embed |

---

## How to preview locally

```bash
npm install
npm run build
npm run preview
```

Opens at http://localhost:4321

---

## Notes worth knowing

- **Land & Ranch** appears in the programs hero artwork. Jason does originate those loans but chose not to create a dedicated page. That is intentional, not a missing page.
- Program card images include marketing copy baked into the pixels. Compliance has reviewed them; future guideline changes may require artwork edits, not just text edits.
- Written testimonials on `/reviews` are currently anonymized by role and city. Named reviews with written permission will be stronger when available.
- Video review slots on `/reviews` stay hidden until YouTube IDs are added; `/about` currently promotes the YouTube channel instead of an embedded intro video.

---

## Repo & ownership

Source of truth: [github.com/Herby300/TheHerbertTeam](https://github.com/Herby300/TheHerbertTeam)

For technical detail (folder structure, image pipeline, how to add blog posts), see `README.md` in the same repository.
