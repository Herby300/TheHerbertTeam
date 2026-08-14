/**
 * One-shot asset prep for the performance-foundation pass:
 * - Responsive WebP variants for homepage LCP headshot, page heroes, playbook cover
 * - Copy LCP source into src/assets for Astro Image
 * - Download OFL-licensed Inter + Sora WOFF2 files for self-hosting
 *
 * Run: node scripts/optimize-perf-assets.mjs
 */
import { mkdir, copyFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicImages = path.join(root, 'public', 'images');
const fontsDir = path.join(root, 'public', 'fonts');
const assetsDir = path.join(root, 'src', 'assets', 'images');

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function writeWebp(input, output, width) {
  await mkdir(path.dirname(output), { recursive: true });
  const pipeline = sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 82 });
  await pipeline.toFile(output);
  const meta = await sharp(output).metadata();
  console.log(`  ${path.relative(root, output)}  ${meta.width}x${meta.height}`);
}

async function resizeVariants(inputRel, widths, nameFn) {
  const input = path.join(root, inputRel);
  console.log(`\nVariants from ${inputRel}`);
  for (const width of widths) {
    const outRel = nameFn(width);
    await writeWebp(input, path.join(root, outRel), width);
  }
}

/** Google Fonts CSS API → extract woff2 URLs for latin subset. */
async function downloadFont(family, weights) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weights.join(';')}&display=swap`;
  const css = await fetch(cssUrl, {
    headers: {
      // Request woff2 files (modern browsers).
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
  }).then((r) => {
    if (!r.ok) throw new Error(`Font CSS ${family}: ${r.status}`);
    return r.text();
  });

  const blocks = css.split('@font-face').slice(1);
  const saved = [];
  for (const block of blocks) {
    const weight = block.match(/font-weight:\s*(\d+)/)?.[1];
    const style = block.match(/font-style:\s*(\w+)/)?.[1] ?? 'normal';
    if (style !== 'normal' || !weight || !weights.map(String).includes(weight)) continue;
    // Prefer latin (not latin-ext / cyrillic) for smaller files.
    const isLatin = /\/\* latin \*\//.test(block) || (!block.includes('/* ') && block.includes('url('));
    const latinBlock = blocks.find(
      (b) =>
        b.includes(`font-weight: ${weight}`) &&
        /font-style:\s*normal/.test(b) &&
        b.includes('/* latin */')
    );
    const use = latinBlock ?? (isLatin ? block : null);
    if (!use) continue;
    const url = use.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/)?.[1];
    if (!url) continue;
    const slug = family.toLowerCase().replace(/\s+/g, '-');
    const filename = `${slug}-${weight}.woff2`;
    const out = path.join(fontsDir, filename);
    if (!(await exists(out))) {
      const buf = Buffer.from(await fetch(url).then((r) => r.arrayBuffer()));
      await writeFile(out, buf);
    }
    saved.push({ family, weight, filename });
    console.log(`  fonts/${filename}`);
  }
  return saved;
}

await mkdir(fontsDir, { recursive: true });
await mkdir(assetsDir, { recursive: true });

// --- LCP headshot: Astro asset + public responsive fallbacks ---
const heroSrc = path.join(publicImages, 'jason-headshot-hero.webp');
const heroAsset = path.join(assetsDir, 'jason-headshot-hero.webp');
await copyFile(heroSrc, heroAsset);
console.log(`Copied LCP source → src/assets/images/jason-headshot-hero.webp`);

await resizeVariants('public/images/jason-headshot-hero.webp', [360, 540, 720], (w) =>
  `public/images/jason-headshot-hero-${w}w.webp`
);

// --- Page heroes ---
const heroes = [
  'about-hero',
  'blog-hero',
  'contact-hero',
  'programs-hero',
  'resources-hero',
  'solutions-hero',
];
for (const name of heroes) {
  const rel = `public/images/hero/${name}.webp`;
  if (!(await exists(path.join(root, rel)))) {
    console.warn(`Missing ${rel}, skip`);
    continue;
  }
  await resizeVariants(rel, [768, 1280], (w) => `public/images/hero/${name}-${w}w.webp`);
}

// --- Playbook cover PNG → WebP + responsive ---
const playbookPng = 'public/images/lead-magnets/first-time-home-buyer-playbook-cover.png';
const playbookWebp = path.join(publicImages, 'lead-magnets', 'first-time-home-buyer-playbook-cover.webp');
console.log('\nPlaybook cover');
await sharp(path.join(root, playbookPng))
  .webp({ quality: 82 })
  .toFile(playbookWebp);
console.log(`  ${path.relative(root, playbookWebp)}`);
await resizeVariants(path.relative(root, playbookWebp).replace(/\\/g, '/'), [360, 540, 720], (w) =>
  `public/images/lead-magnets/first-time-home-buyer-playbook-cover-${w}w.webp`
);

// --- Fonts (SIL Open Font License — self-hosting allowed) ---
console.log('\nDownloading Inter + Sora (latin woff2, OFL)');
await downloadFont('Inter', [400, 500, 600]);
await downloadFont('Sora', [600, 700, 800]);

console.log('\nDone.');
