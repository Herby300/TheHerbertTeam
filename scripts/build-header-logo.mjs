/**
 * Produces the light-background header logo from design-assets/new-hbt-logo.svg.
 *
 * That file is an inverted trace of the silver-on-navy lockup: its 52 paths are
 * the navy backing plate and the wordmark is the negative space between them.
 * Recolouring the paths therefore yields a solid block, not a logo.
 *
 * So the plate is used as a mask instead — ink is painted wherever the plate is
 * absent, which is exactly the wordmark. The result stays vector, and the
 * viewBox is tightened to the ink so the header slot has no dead margin.
 *
 * Emits a QA sheet at the real rendered size, because an autotrace that looks
 * clean at full width can break up at a 44px header height.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const INK = '#010E71'; // navy
const SOURCE = 'design-assets/new-hbt-logo.svg';
const OUT = 'public/images/logo.svg';

const raw = await readFile(SOURCE, 'utf8');

const viewBox = /viewBox="([\d.\s]+)"/.exec(raw);
if (!viewBox) throw new Error('no viewBox on the source SVG');
const [, , vbW, vbH] = viewBox[1].trim().split(/\s+/).map(Number);

// Everything between the opening <g> and </g> — the 52 plate paths.
const body = /<g[^>]*>([\s\S]*)<\/g>/.exec(raw);
if (!body) throw new Error('no <g> wrapper found on the source SVG');
const paths = body[1];

// The <g> carries the transform that flips the traced coordinates; it has to be
// preserved or the paths land off-canvas. Its own fill is dropped, since the
// mask needs the plate painted black and a second fill would collide.
const gAttrs = /<g([^>]*)>/.exec(raw)[1].replace(/\s*fill="[^"]*"/g, '');

const masked = (w, h, x = 0, y = 0, width = vbW, height = vbH) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x} ${y} ${width} ${height}" width="${w}" height="${h}">
  <mask id="plate" maskUnits="userSpaceOnUse" x="${x}" y="${y}" width="${width}" height="${height}">
    <rect x="${x}" y="${y}" width="${width}" height="${height}" fill="#fff"/>
    <g${gAttrs} fill="#000">${paths}</g>
  </mask>
  <rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${INK}" mask="url(#plate)"/>
</svg>`;

// Rasterise at 2x user units to locate the ink, then map the box back down.
const SCALE = 2;
const probe = Buffer.from(masked(vbW * SCALE, vbH * SCALE));
const { data, info } = await sharp(probe).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

let minX = info.width;
let minY = info.height;
let maxX = -1;
let maxY = -1;
let opaque = 0;

for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    if (data[(y * info.width + x) * info.channels + 3] > 16) {
      opaque++;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const coverage = (opaque / (info.width * info.height)) * 100;
if (maxX < 0) throw new Error('mask produced no ink at all');
if (coverage > 40) throw new Error(`mask produced ${coverage.toFixed(1)}% ink — the plate is not covering the canvas`);

const box = {
  x: Math.floor(minX / SCALE),
  y: Math.floor(minY / SCALE),
  w: Math.ceil((maxX - minX + 1) / SCALE),
  h: Math.ceil((maxY - minY + 1) / SCALE),
};

console.log(`ink coverage        ${coverage.toFixed(1)}% of source canvas`);
console.log(`trimmed viewBox     ${box.x} ${box.y} ${box.w} ${box.h}  (${(box.w / box.h).toFixed(2)}:1)`);

/**
 * The lockup's third line, "THE MORTGAGE SOLUTION EXPERT.", renders about 3px
 * tall at the header's 44px height — illegible, and rough enough in the trace
 * to read as dirt. It is dropped here; the footer lockup still carries it.
 *
 * The band is found rather than hardcoded so a re-exported logo does not
 * silently get cropped in the wrong place. Only the wordmark side is scanned,
 * because the monogram spans nearly the full height on the left.
 */
const DROP_TAGLINE = true;

if (DROP_TAGLINE) {
  const wordmarkSplit = Math.round(info.width * 0.2);
  const rowHasInk = (from, to) => (y) => {
    for (let x = from; x < to; x++) if (data[(y * info.width + x) * info.channels + 3] > 16) return true;
    return false;
  };
  const inWordmark = rowHasInk(wordmarkSplit, info.width);
  const inMonogram = rowHasInk(0, wordmarkSplit);

  let monogramBottom = 0;
  for (let y = minY; y <= maxY; y++) if (inMonogram(y)) monogramBottom = y;

  // Walk up from the bottom: the tagline band, then the gap above it.
  let y = maxY;
  while (y > minY && !inWordmark(y)) y--;
  while (y > minY && inWordmark(y)) y--;
  const gapBottom = y;

  if (gapBottom > monogramBottom) {
    const cropped = Math.ceil((gapBottom - minY + 1) / SCALE);
    console.log(`tagline dropped     band below y=${Math.floor(gapBottom / SCALE)}, height ${box.h} -> ${cropped}`);
    box.h = cropped;
  } else {
    console.log('tagline kept        no clean gap above it; cropping would clip the monogram');
  }
}

const ratio = box.w / box.h;
console.log(`final viewBox       ${box.x} ${box.y} ${box.w} ${box.h}  (${ratio.toFixed(2)}:1)`);

const final = masked(box.w, box.h, box.x, box.y, box.w, box.h);
await writeFile(OUT, `${final}\n`);
console.log(`wrote               ${OUT}  ${(final.length / 1024).toFixed(1)} KB`);

/**
 * The favicon reuses the HT monogram alone — the full lockup is unreadable at
 * 16px. The monogram is separated from the wordmark by a thin vertical rule, so
 * the cut is made at the widest empty column gap in the left third.
 */
const columnHasInk = (x) => {
  for (let y = minY; y <= maxY; y++) if (data[(y * info.width + x) * info.channels + 3] > 16) return true;
  return false;
};

let gapStart = null;
let widest = null;
for (let x = minX; x <= Math.round(minX + (maxX - minX) * 0.35); x++) {
  if (!columnHasInk(x)) {
    if (gapStart === null) gapStart = x;
  } else if (gapStart !== null) {
    const gap = { from: gapStart, to: x - 1, size: x - gapStart };
    if (!widest || gap.size > widest.size) widest = gap;
    gapStart = null;
  }
}

if (!widest) {
  console.log('favicon skipped     no column gap found between monogram and wordmark');
} else {
  // Absolute source user units, the same space the viewBox is expressed in.
  const mono = {
    x: Math.floor(minX / SCALE),
    y: Math.floor(minY / SCALE),
    w: Math.ceil((widest.from - minX) / SCALE),
    h: Math.ceil((maxY - minY + 1) / SCALE),
  };

  // Two hard limits. The mask paints ink wherever the plate is absent, so any
  // viewBox straying past the traced canvas comes back as a solid navy block;
  // and reaching right of the divider gap would drag in wordmark strokes.
  const gapLeft = Math.floor(widest.from / SCALE);

  // Square, with breathing room for the circular crop some platforms apply.
  let side = Math.round(Math.max(mono.w, mono.h) * 1.18);
  side = Math.min(side, gapLeft, vbH);

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(v, hi));
  const originX = clamp(Math.round(mono.x + mono.w / 2 - side / 2), 0, gapLeft - side);
  const originY = clamp(Math.round(mono.y + mono.h / 2 - side / 2), 0, vbH - side);

  const favicon = masked(side, side, originX, originY, side, side);

  // A correct favicon is a glyph on transparency. If the box slipped off the
  // plate it comes back nearly solid, which is worth failing on rather than
  // shipping a navy square.
  const check = await sharp(Buffer.from(favicon)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let inked = 0;
  for (let i = 3; i < check.data.length; i += check.info.channels) if (check.data[i] > 16) inked++;
  const faviconCoverage = (inked / (check.info.width * check.info.height)) * 100;
  if (faviconCoverage > 60) throw new Error(`favicon is ${faviconCoverage.toFixed(1)}% ink — the crop left the plate`);

  await writeFile('public/favicon.svg', `${favicon}\n`);
  console.log(
    `favicon             public/favicon.svg  ${side}x${side} at ${originX},${originY}  ` +
      `from ${mono.w}x${mono.h} monogram, ${faviconCoverage.toFixed(1)}% ink`,
  );

  // iOS ignores SVG for apple-touch-icon and composites transparency onto
  // black, so this one is a flattened PNG at the canonical 180px.
  await sharp(Buffer.from(favicon), { density: 300 })
    .resize({ width: 180, height: 180, fit: 'contain', background: '#FFFFFF' })
    .flatten({ background: '#FFFFFF' })
    .png()
    .toFile('public/apple-touch-icon.png');
  console.log('apple touch icon    public/apple-touch-icon.png  180x180');
}

// QA sheet: the logo at the two heights the header actually uses, plus a 4x
// blow-up to inspect the traced tagline for break-up.
await mkdir('design-assets/previews', { recursive: true });

const tile = async (height, label) => {
  const w = Math.round(height * ratio);
  const png = await sharp(Buffer.from(masked(w * 4, height * 4, box.x, box.y, box.w, box.h)))
    .resize({ width: w, height, fit: 'fill' })
    .flatten({ background: '#FFFFFF' })
    .png()
    .toBuffer();
  return { png, w, height, label };
};

// The favicon is almost always seen at 16px, so it is checked at true size and
// then magnified with nearest-neighbour — smoothing would hide the mush.
const faviconTile = async (px) => {
  const small = await sharp(await readFile('public/favicon.svg'), { density: 600 })
    .resize({ width: px, height: px })
    .flatten({ background: '#FFFFFF' })
    .png()
    .toBuffer();
  const png = await sharp(small).resize({ width: px * 8, kernel: 'nearest' }).png().toBuffer();
  return { png, w: px * 8, height: px * 8, label: `favicon @ ${px}px` };
};

const tiles = [
  await tile(40, 'h-10 / 40px'),
  await tile(44, 'sm:h-11 / 44px'),
  await tile(176, '4x blow-up'),
  await faviconTile(16),
  await faviconTile(32),
];

const pad = 20;
const sheetW = Math.max(...tiles.map((t) => t.w)) + pad * 2;
const sheetH = tiles.reduce((sum, t) => sum + t.height + pad, pad);

const composites = [];
let top = pad;
for (const t of tiles) {
  composites.push({ input: t.png, top, left: pad });
  top += t.height + pad;
}

await sharp({ create: { width: sheetW, height: sheetH, channels: 3, background: '#FFFFFF' } })
  .composite(composites)
  .png()
  .toFile('design-assets/previews/header-logo.png');

console.log(`QA sheet            design-assets/previews/header-logo.png`);
console.log(`                    ${tiles.map((t) => `${t.label} = ${t.w}x${t.height}`).join(', ')}`);
