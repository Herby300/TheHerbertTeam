# Incoming photography

Drop new photography here, then tell the agent. Files in this folder are
**originals** — they are not deployed. The agent resizes, crops, converts to
WebP, and writes the result to `public/images/`, then removes the matching
entry from `scripts/generate-placeholders.mjs` so the placeholder generator can
never overwrite real work.

## How to drop files

1. Copy the file into the matching subfolder below.
2. Name it to match the target, keeping your original extension.
   `public/images/programs/va.webp` ← `incoming/programs/va.jpg`
3. Any format works: JPG, PNG, TIFF, HEIC, WebP.
4. Bigger is better. Supply at least the target dimensions — ideally 2x. The
   agent downsizes; upscaling a small file just looks soft.
5. Aspect ratio matters more than exact pixels. Width and height are hardcoded
   in the templates to prevent layout shift, so a file at the wrong ratio gets
   cropped rather than fitted. Match the ratio and the crop will be clean.

You do not need to rename precisely — if it is obvious which slot a photo is
for, the agent will sort it out. The names below just remove the guesswork.

## Target slots

### `incoming/hero/` — 1920×1080, 16:9

A navy gradient is laid over these (`from-navy/95 via-navy/85 to-navy/60`,
left to right) with white headline text on top, so the left two-thirds is
85–95% obscured. Choose atmosphere and texture over detail, keep any subject
in the right third, and avoid busy or high-contrast left sides.

- `about-hero`
- `programs-hero`
- `solutions-hero`
- `resources-hero`
- `contact-hero`
- `blog-hero`

### `incoming/programs/` — 1200×800, 3:2

Uncovered on white and off-white cards. Real color, real faces.

- `conventional`
- `fha`
- `va`
- `jumbo`
- `construction`
- `investor-dscr`
- `self-employed`
- `refinance`

### `incoming/solutions/` — 1200×800, 3:2

- `atm-mortgage`
- `buy-before-you-sell`
- `down-payment-assistance`
- `first-time-homebuyers`

### `incoming/resources/` — 800×500, 8:5

Cover art for the downloadable guides.

- `homebuyer-guide`
- `first-time-checklist`
- `mortgage-process-guide`
- `moving-checklist`
- `closing-cost-guide`
- `buying-timeline`

### `incoming/two-futures/` — 1000×750, 4:3

A deliberate emotional pair on the homepage. Match their style and lighting to
each other — they read as a before-and-after.

- `stuck` — staying put, nothing changes
- `moving-forward` — the move happens

### `incoming/blog/` — 1200×675, 16:9

- `placeholder` — the fallback for any post without its own image
- One per post, named after the post slug: `austin-market-update`,
  `bank-statement-loans-explained`, `dscr-loans-101`,
  `first-time-buyer-mistakes`, `should-you-buy-points`,
  `va-entitlement-explained`

### `incoming/` root

- `og-default` — 1200×630. The social share card. Stays JPEG in `public/`,
  because Facebook, LinkedIn, and X do not reliably render WebP share images.
  A branded navy card works here; this one is not a photograph.

### Logo

Not photography, but the outstanding blocker. A transparent-background export
with dark navy (`#010E71`) or black ink, wordmark plus the "Mortgage Solution
Expert" tagline, filling a 260×56 slot — so 520×112 or larger, vector
preferred. Drop it at `incoming/logo.(svg|png)`.

The delivered silver-on-navy lockup is already live in the footer and needs no
replacement.
