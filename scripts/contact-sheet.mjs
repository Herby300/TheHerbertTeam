/**
 * Builds contact sheets of the processed imagery so a whole group can be
 * reviewed at once instead of opening files one by one.
 *
 *   node scripts/contact-sheet.mjs
 *
 * Writes PNGs to design-assets/previews/. Those are review artefacts, not
 * deployed assets.
 */

import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const outDir = join(root, 'design-assets', 'previews');

const CELL_W = 420;
const PAD = 8;
const LABEL_H = 22;

const groups = {
  heroes: {
    cols: 3,
    files: [
      'images/hero/about-hero.webp',
      'images/hero/programs-hero.webp',
      'images/hero/solutions-hero.webp',
      'images/hero/resources-hero.webp',
      'images/hero/contact-hero.webp',
      'images/hero/blog-hero.webp',
    ],
  },
  programs: {
    cols: 4,
    files: [
      'images/programs/conventional.webp',
      'images/programs/fha.webp',
      'images/programs/va.webp',
      'images/programs/jumbo.webp',
      'images/programs/construction.webp',
      'images/programs/investor-dscr.webp',
      'images/programs/self-employed.webp',
      'images/programs/refinance.webp',
    ],
  },
  solutions: {
    cols: 4,
    files: [
      'images/solutions/atm-mortgage.webp',
      'images/solutions/buy-before-you-sell.webp',
      'images/solutions/down-payment-assistance.webp',
      'images/solutions/first-time-homebuyers.webp',
    ],
  },
  resources: {
    cols: 3,
    files: [
      'images/resources/homebuyer-guide.webp',
      'images/resources/first-time-checklist.webp',
      'images/resources/mortgage-process-guide.webp',
      'images/resources/moving-checklist.webp',
      'images/resources/closing-cost-guide.webp',
      'images/resources/buying-timeline.webp',
    ],
  },
  'two-futures': {
    cols: 2,
    files: ['images/two-futures/stuck.webp', 'images/two-futures/moving-forward.webp'],
  },
  share: {
    cols: 2,
    files: ['images/og-default.jpg', 'images/blog/placeholder.webp'],
  },
};

const labelSvg = (text, width) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${LABEL_H}">
      <rect width="${width}" height="${LABEL_H}" fill="#1C1C1E"/>
      <text x="6" y="15" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#FFFFFF">${text}</text>
    </svg>`
  );

async function buildSheet(name, { cols, files }) {
  const present = files.filter((f) => existsSync(join(publicDir, f)));
  if (!present.length) return null;

  const first = await sharp(join(publicDir, present[0])).metadata();
  const cellH = Math.round((CELL_W * first.height) / first.width);
  const rows = Math.ceil(present.length / cols);

  const sheetW = cols * CELL_W + (cols + 1) * PAD;
  const sheetH = rows * (cellH + LABEL_H) + (rows + 1) * PAD;

  const layers = [];
  for (const [i, file] of present.entries()) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const left = PAD + col * (CELL_W + PAD);
    const top = PAD + row * (cellH + LABEL_H + PAD);

    layers.push({
      input: await sharp(join(publicDir, file)).resize(CELL_W, cellH, { fit: 'fill' }).png().toBuffer(),
      left,
      top,
    });
    layers.push({
      input: await sharp(labelSvg(file.replace('images/', ''), CELL_W)).png().toBuffer(),
      left,
      top: top + cellH,
    });
  }

  const sheet = await sharp({
    create: { width: sheetW, height: sheetH, channels: 3, background: '#5A5A5F' },
  })
    .composite(layers)
    .png()
    .toBuffer();

  const target = join(outDir, `${name}.png`);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, sheet);
  console.log(`${target}  ${sheetW}x${sheetH}  ${present.length} images`);
  return target;
}

for (const [name, group] of Object.entries(groups)) {
  await buildSheet(name, group);
}
