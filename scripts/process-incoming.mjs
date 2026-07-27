/**
 * Converts originals in design-assets/incoming/ into the exact dimensions and
 * format each template expects, writing the result to public/images/.
 *
 * Originals stay in design-assets/ so they are versioned but never deployed.
 *
 *   node scripts/process-incoming.mjs --dry   report only, write nothing
 *   node scripts/process-incoming.mjs         process and write
 *
 * Targets are WebP except og-default, which stays JPEG because Facebook,
 * LinkedIn, and X do not reliably render WebP share images.
 *
 * Add a row to MAP when new photography arrives. A row whose source is absent
 * is skipped, so this is safe to re-run as assets trickle in.
 */

import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const incoming = join(root, 'design-assets', 'incoming');
const retouched = join(root, 'design-assets', 'retouched');
const publicDir = join(root, 'public');

// Whatever the camera, phone, or design tool happened to export.
const EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.tif', '.tiff', '.heic', '.avif'];

/**
 * Finds the original for a slot.
 *
 * A retouched version wins over the delivered one, so an edit survives a
 * reprocess while the original stays untouched for reference — see
 * scripts/retouch-va-sign.mjs.
 *
 * The extension in MAP is only a hint. Any of EXTENSIONS is accepted, so a slot
 * is not silently skipped because a file arrived as .jpg instead of .png.
 */
function resolveSource(relativePath) {
  const withoutExt = relativePath.replace(/\.[^./\\]+$/, '');
  const candidates = [relativePath, ...EXTENSIONS.map((ext) => `${withoutExt}${ext}`)];

  for (const [dir, edited] of [
    [retouched, true],
    [incoming, false],
  ]) {
    for (const candidate of candidates) {
      const full = join(dir, candidate);
      if (existsSync(full)) return { path: full, edited };
    }
  }

  return null;
}

/**
 * `crop` is the gravity used when the source aspect ratio does not match the
 * target and pixels have to be discarded.
 *
 * Page heroes are overlaid with a left-to-right navy gradient that obscures the
 * left two-thirds, so they crop from the right where the subject stays visible.
 * Everything else centres.
 */
const MAP = [
  // Page heroes. Delivered at 1672x941, which is already 16:9, so they are kept
  // at native size rather than upscaled to 1920x1080 — interpolating up would
  // cost bytes without adding detail. The hero <img> is absolutely positioned
  // with object-cover, so its intrinsic size never drives layout.
  { from: 'hero/about-hero.png', to: 'images/hero/about-hero.webp', width: 1672, height: 941, crop: 'right' },
  { from: 'hero/blog-hero.png', to: 'images/hero/blog-hero.webp', width: 1672, height: 941, crop: 'right' },
  { from: 'hero/Contact-hero.png', to: 'images/hero/contact-hero.webp', width: 1672, height: 941, crop: 'right' },
  { from: 'hero/programs-hero.png', to: 'images/hero/programs-hero.webp', width: 1672, height: 941, crop: 'right' },
  { from: 'hero/resources-hero.png', to: 'images/hero/resources-hero.webp', width: 1672, height: 941, crop: 'right' },
  { from: 'hero/solutions- hero.png', to: 'images/hero/solutions-hero.webp', width: 1672, height: 941, crop: 'right' },

  // 1200x800 loan program cards
  { from: 'programs/conventional.png', to: 'images/programs/conventional.webp', width: 1200, height: 800 },
  { from: 'programs/FHA.png', to: 'images/programs/fha.webp', width: 1200, height: 800 },
  { from: 'programs/VA.png', to: 'images/programs/va.webp', width: 1200, height: 800 },
  { from: 'programs/Jumbo.png', to: 'images/programs/jumbo.webp', width: 1200, height: 800 },
  { from: 'programs/Construction.png', to: 'images/programs/construction.webp', width: 1200, height: 800 },
  { from: 'programs/Investor Dscr.png', to: 'images/programs/investor-dscr.webp', width: 1200, height: 800 },
  { from: 'programs/Self Employed.png', to: 'images/programs/self-employed.webp', width: 1200, height: 800 },
  { from: 'programs/refinance.png', to: 'images/programs/refinance.webp', width: 1200, height: 800 },

  // 1200x800 signature solution cards
  { from: 'solutions/ATM solution.png', to: 'images/solutions/atm-mortgage.webp', width: 1200, height: 800 },
  { from: 'solutions/Buy before  you sell.png', to: 'images/solutions/buy-before-you-sell.webp', width: 1200, height: 800 },
  { from: 'solutions/Down Payment Assistance.png', to: 'images/solutions/down-payment-assistance.webp', width: 1200, height: 800 },
  { from: 'solutions/First Time Home Buyer.png', to: 'images/solutions/first-time-homebuyers.webp', width: 1200, height: 800 },

  // 800x500 resource covers
  { from: 'resources/Homebuyers Guide.png', to: 'images/resources/homebuyer-guide.webp', width: 800, height: 500 },
  { from: 'resources/First time checklist.png', to: 'images/resources/first-time-checklist.webp', width: 800, height: 500 },
  { from: 'resources/Mortgage Process.png', to: 'images/resources/mortgage-process-guide.webp', width: 800, height: 500 },
  { from: 'resources/Moving Checklist.png', to: 'images/resources/moving-checklist.webp', width: 800, height: 500 },
  { from: 'resources/Closing cost guide.png', to: 'images/resources/closing-cost-guide.webp', width: 800, height: 500 },
  { from: 'resources/Buying Timeline.png', to: 'images/resources/buying-timeline.webp', width: 800, height: 500 },

  // 1000x750 homepage contrast pair
  { from: 'two-futures/Solution  Stuck.png', to: 'images/two-futures/stuck.webp', width: 1000, height: 750 },
  { from: 'two-futures/Solution Moving Forward.png', to: 'images/two-futures/moving-forward.webp', width: 1000, height: 750 },

  // 1200x675 blog fallback, used by any post without its own image
  { from: 'blog/Blog.png', to: 'images/blog/placeholder.webp', width: 1200, height: 675 },

  // 1200x630 social share card, JPEG on purpose
  { from: 'Social Share Card.png', to: 'images/og-default.jpg', width: 1200, height: 630 },
];

const dry = process.argv.includes('--dry');
const ratio = (w, h) => (w / h).toFixed(3);

async function main() {
  const rows = [];
  const warnings = [];
  let written = 0;

  for (const item of MAP) {
    const resolved = resolveSource(item.from);
    if (!resolved) continue;

    const { path: source, edited } = resolved;
    const image = sharp(source);
    const meta = await image.metadata();

    const sourceRatio = Number(ratio(meta.width, meta.height));
    const targetRatio = Number(ratio(item.width, item.height));
    // A crop discards pixels along one axis; flag it when it is deep enough to
    // change the composition rather than just shave an edge.
    const drift = Math.abs(sourceRatio - targetRatio) / targetRatio;
    if (drift > 0.02) {
      const axis = sourceRatio > targetRatio ? 'sides' : 'top/bottom';
      warnings.push(
        `${item.from} — source ${meta.width}x${meta.height} (${sourceRatio}) vs target ` +
          `${item.width}x${item.height} (${targetRatio}); ${(drift * 100).toFixed(0)}% cropped off the ${axis}`
      );
    }

    if (meta.width < item.width || meta.height < item.height) {
      warnings.push(
        `${item.from} — source ${meta.width}x${meta.height} is smaller than the ${item.width}x${item.height} target, so it will be upscaled and look soft`
      );
    }

    let outBytes = 0;
    if (!dry) {
      const pipeline = image
        .resize(item.width, item.height, { fit: 'cover', position: item.crop ?? 'centre' })
        .flatten({ background: '#FFFFFF' });

      const buffer = item.to.endsWith('.jpg')
        ? await pipeline.jpeg({ quality: 82, progressive: true, mozjpeg: true }).toBuffer()
        : await pipeline.webp({ quality: 80, effort: 5 }).toBuffer();

      const target = join(publicDir, item.to);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, buffer);
      outBytes = buffer.length;
      written += 1;
    }

    rows.push({
      to: item.to,
      source: `${meta.width}x${meta.height} ${meta.format}`,
      target: `${item.width}x${item.height}`,
      kb: outBytes ? Math.round(outBytes / 1024) : '-',
      edited,
    });
  }

  for (const r of rows) {
    const note = r.edited ? '  [retouched]' : '';
    console.log(`${r.to.padEnd(46)} ${r.source.padEnd(18)} -> ${r.target.padEnd(10)} ${r.kb} KB${note}`);
  }

  if (warnings.length) {
    console.log(`\nReview these ${warnings.length}:`);
    for (const w of warnings) console.log(`  ${w}`);
  }

  console.log(
    dry
      ? `\nDry run — matched ${rows.length} of ${MAP.length} mapped slots, wrote nothing.`
      : `\nWrote ${written} images. ${MAP.length - written} mapped slots still have no source.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
