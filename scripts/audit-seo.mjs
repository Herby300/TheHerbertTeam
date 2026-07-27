/**
 * Audits dist/ for the SEO and accessibility guarantees the site promises:
 * unique titles and descriptions within the length Google will render, a
 * canonical URL, an absolute og:image, exactly one h1, and alt text on every
 * image. Run after `npm run build`.
 *
 * Exits non-zero when a blocker is found so it can gate a deploy.
 */
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

const TITLE_MAX = 60;
const DESC_MIN = 140;
const DESC_MAX = 160;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (extname(entry.name) === '.html') yield full;
  }
}

const capture = (html, re) => (html.match(re)?.[1] ?? '').trim();

const pages = [];
for await (const file of walk(DIST)) {
  const html = await readFile(file, 'utf8');
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);

  pages.push({
    route:
      '/' +
      file.replace(/\\/g, '/').replace(DIST.replace(/\\/g, '/'), '').replace(/index\.html$/, '').replace(/\.html$/, ''),
    title: capture(html, /<title>([^<]*)<\/title>/),
    description: capture(html, /<meta name="description" content="([^"]*)"/),
    canonical: capture(html, /<link rel="canonical" href="([^"]*)"/),
    ogImage: capture(html, /<meta property="og:image" content="([^"]*)"/),
    h1Count: [...html.matchAll(/<h1\b/g)].length,
    hasLang: /<html[^>]+lang="en"/.test(html),
    hasJsonLd: html.includes('application/ld+json'),
    noindex: /<meta name="robots" content="[^"]*noindex/.test(html),
    imgCount: imgs.length,
    imgNoAlt: imgs.filter((tag) => !/\balt=/.test(tag)).length,
    imgNoDims: imgs.filter((tag) => !/\bwidth=/.test(tag) || !/\bheight=/.test(tag)).length,
    // Root-relative sources only; remote ones cannot be checked on disk.
    localSrcs: imgs
      .map((tag) => tag.match(/\bsrc="(\/[^"]+)"/)?.[1])
      .filter((src) => typeof src === 'string'),
  });
}

const blockers = [];
const warnings = [];

for (const p of pages) {
  if (!p.title) blockers.push(`${p.route} — missing <title>`);
  else if (p.title.length > TITLE_MAX) warnings.push(`${p.route} — title ${p.title.length} chars: "${p.title}"`);

  if (!p.description) blockers.push(`${p.route} — missing meta description`);
  else if (p.description.length < DESC_MIN || p.description.length > DESC_MAX) {
    warnings.push(`${p.route} — description ${p.description.length} chars (want ${DESC_MIN}-${DESC_MAX})`);
  }

  if (!p.canonical) blockers.push(`${p.route} — missing canonical`);
  if (!p.ogImage.startsWith('http')) blockers.push(`${p.route} — og:image is not absolute`);
  if (p.h1Count !== 1) blockers.push(`${p.route} — ${p.h1Count} <h1> elements, expected 1`);
  if (!p.hasLang) blockers.push(`${p.route} — missing lang="en"`);
  if (p.imgNoAlt) blockers.push(`${p.route} — ${p.imgNoAlt} <img> without alt`);
  if (p.imgNoDims) warnings.push(`${p.route} — ${p.imgNoDims}/${p.imgCount} <img> without width and height`);
  if (!p.hasJsonLd) warnings.push(`${p.route} — no JSON-LD`);

  for (const src of new Set(p.localSrcs)) {
    if (!existsSync(join(DIST, src))) blockers.push(`${p.route} — image not found in dist: ${src}`);
  }
}

// Duplicates only matter for pages Google is allowed to index.
for (const field of ['title', 'description']) {
  const seen = new Map();
  for (const p of pages.filter((page) => !page.noindex)) {
    seen.set(p[field], [...(seen.get(p[field]) ?? []), p.route]);
  }
  for (const [value, routes] of seen) {
    if (routes.length > 1) blockers.push(`duplicate ${field} on ${routes.join(', ')}: "${value}"`);
  }
}

console.log(`Audited ${pages.length} pages in dist/\n`);
console.log(`Blockers: ${blockers.length}`);
for (const b of blockers) console.log(`  ${b}`);
console.log(`\nWarnings: ${warnings.length}`);
for (const w of warnings) console.log(`  ${w}`);

process.exit(blockers.length ? 1 : 0);
