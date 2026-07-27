/**
 * Generates every placeholder asset still awaiting real photography, so the build
 * runs and layouts render at the correct aspect ratios. Each file is labelled with
 * its own path, making a swap to final imagery a straight file replacement.
 *
 * Real photography is deliberately absent from the `images` array below — this
 * script must never clobber a delivered asset. When a placeholder is replaced for
 * good, delete its entry here.
 *
 * Run with: npm run placeholders
 */

import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');

const NAVY = '#010E71';
const NAVY_DARK = '#000842';
const BRANDBLUE = '#0698F8';
const WHITE = '#FFFFFF';

/**
 * Empty — every photographic slot has been delivered and is asserted in the
 * `delivered` array below. Real imagery is produced by scripts/process-incoming.mjs
 * from the masters in design-assets/.
 *
 * Add an entry here only if a new slot is introduced and needs a stand-in while
 * the artwork is commissioned. Remove it again the moment the real file lands,
 * or the next run overwrites the real file.
 */
const images = [];

/**
 * Delivered photography, listed here only so the script can assert it exists
 * rather than silently leaving a broken reference behind.
 */
const delivered = [
  'images/jason-headshot.webp',
  'images/jason-headshot-large.webp',
  'images/jason-headshot-hero.webp',
  'images/logo-on-dark.webp',

  'images/hero/about-hero.webp',
  'images/hero/programs-hero.webp',
  'images/hero/solutions-hero.webp',
  'images/hero/resources-hero.webp',
  'images/hero/contact-hero.webp',
  'images/hero/blog-hero.webp',

  'images/programs/conventional.webp',
  'images/programs/fha.webp',
  'images/programs/va.webp',
  'images/programs/jumbo.webp',
  'images/programs/construction.webp',
  'images/programs/investor-dscr.webp',
  'images/programs/self-employed.webp',
  'images/programs/refinance.webp',

  'images/solutions/atm-mortgage.webp',
  'images/solutions/buy-before-you-sell.webp',
  'images/solutions/down-payment-assistance.webp',
  'images/solutions/first-time-homebuyers.webp',

  'images/resources/homebuyer-guide.webp',
  'images/resources/first-time-checklist.webp',
  'images/resources/mortgage-process-guide.webp',
  'images/resources/moving-checklist.webp',
  'images/resources/closing-cost-guide.webp',
  'images/resources/buying-timeline.webp',

  'images/two-futures/stuck.webp',
  'images/two-futures/moving-forward.webp',

  'images/blog/placeholder.webp',
  'images/og-default.jpg',

  'images/logo.svg',
  'favicon.svg',
  'apple-touch-icon.png',
];

/** Escapes text for safe interpolation into the SVG label. */
function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function placeholderSvg({ width, height, label, path }) {
  const titleSize = Math.max(16, Math.round(Math.min(width, height) * 0.075));
  const pathSize = Math.max(11, Math.round(titleSize * 0.42));
  const stripe = Math.max(4, Math.round(height * 0.012));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${NAVY}"/>
      <stop offset="100%" stop-color="${NAVY_DARK}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect x="0" y="${height - stripe}" width="${width}" height="${stripe}" fill="${BRANDBLUE}"/>
  <text x="50%" y="47%" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="${titleSize}" font-weight="700" fill="${WHITE}">${escapeXml(label)}</text>
  <text x="50%" y="47%" dy="${Math.round(titleSize * 1.25)}" text-anchor="middle"
        font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="${pathSize}" fill="${BRANDBLUE}"
        >/${escapeXml(path)} · ${width}×${height}</text>
</svg>`;
}

/**
 * Vector assets are shipped as-is rather than rasterised.
 *
 * favicon.svg, apple-touch-icon.png, and images/logo.svg are deliberately
 * absent: they are cut from the real brand mark by
 * scripts/build-header-logo.mjs. Do not add them back here, or the next run
 * overwrites them with placeholders.
 */
const svgFiles = {
  'images/badges/equal-housing.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="56" height="56" role="img" aria-label="Equal Housing Lender">
  <rect width="56" height="56" rx="6" fill="none" stroke="currentColor" stroke-width="2" opacity="0.55"/>
  <path d="M28 13 45 26h-5v15H16V26h-5z" fill="currentColor"/>
  <rect x="19" y="43" width="18" height="2.6" fill="currentColor"/>
  <rect x="19" y="47.5" width="18" height="2.6" fill="currentColor"/>
</svg>`,

  'images/badges/fdic.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 56" width="112" height="56" role="img" aria-label="Member FDIC">
  <rect width="112" height="56" rx="6" fill="none" stroke="currentColor" stroke-width="2" opacity="0.55"/>
  <text x="56" y="26" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="13" font-weight="700" fill="currentColor">MEMBER</text>
  <text x="56" y="44" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="17" font-weight="800" letter-spacing="1.5" fill="currentColor">FDIC</text>
</svg>`,

  'images/badges/google-reviews.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" width="120" height="40" role="img" aria-label="Google Reviews">
  <path d="M20 20.4c0-.7-.06-1.36-.18-2H12v3.8h4.5a3.85 3.85 0 0 1-1.67 2.53v2.1h2.7A8.16 8.16 0 0 0 20 20.4z" fill="#4285F4"/>
  <path d="M12 28.8c2.26 0 4.15-.75 5.53-2.03l-2.7-2.09c-.75.5-1.7.8-2.83.8-2.18 0-4.02-1.47-4.68-3.44H4.53v2.16A8.36 8.36 0 0 0 12 28.8z" fill="#34A853"/>
  <path d="M7.32 22.04a5.02 5.02 0 0 1 0-3.22v-2.16H4.53a8.37 8.37 0 0 0 0 7.54z" fill="#FBBC05"/>
  <path d="M12 15.38c1.23 0 2.33.42 3.2 1.25l2.39-2.39A8.03 8.03 0 0 0 12 12a8.36 8.36 0 0 0-7.47 4.62l2.79 2.16c.66-1.97 2.5-3.4 4.68-3.4z" fill="#EA4335"/>
  <text x="34" y="18" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="11" font-weight="700" fill="#1C1C1E">Google</text>
  <text x="34" y="31" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10" fill="#5A5A5F">Reviews ★★★★★</text>
</svg>`,
};

const robotsTxt = `User-agent: *
Allow: /

Disallow: /thank-you

Sitemap: https://www.theherbertteam.com/sitemap-index.xml
`;

async function write(relativePath, contents) {
  const target = join(publicDir, relativePath);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, contents);
}

async function main() {
  for (const [relativePath, contents] of Object.entries(svgFiles)) {
    await write(relativePath, contents);
  }

  await write('robots.txt', robotsTxt);
  await write('downloads/.gitkeep', '');

  for (const image of images) {
    const pipeline = sharp(Buffer.from(placeholderSvg(image)));
    const encoded = image.path.endsWith('.jpg')
      ? await pipeline.jpeg({ quality: 72, progressive: true }).toBuffer()
      : await pipeline.webp({ quality: 74, effort: 4 }).toBuffer();
    await write(image.path, encoded);
  }

  const missing = [];
  for (const asset of delivered) {
    if (!existsSync(join(publicDir, asset))) missing.push(asset);
  }

  console.log(`Generated ${images.length} placeholder images and ${Object.keys(svgFiles).length} vector assets.`);

  if (missing.length) {
    console.warn(`\nWARNING — delivered assets are missing from public/:\n  ${missing.join('\n  ')}`);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
