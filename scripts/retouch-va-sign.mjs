/**
 * Removes the "COMPETITIVE INTEREST RATES" bullet from the VA program artwork.
 *
 * A rate claim baked into an image cannot be reviewed, updated, or read by a
 * screen reader, so it comes out. The other bullets stay.
 *
 * Rather than leaving a gap, the bullet below it ("BUILT FOR THOSE WHO SERVE")
 * is promoted into the vacated slot:
 *
 *   1. The band covering both bullets is repainted by interpolating between the
 *      clean row above it and the clean row below it. The sign carries a smooth
 *      vertical gradient, so a straight lerp reproduces it and — because the
 *      fill is anchored to real pixels at both boundaries — leaves no seam.
 *      Sampling a patch from elsewhere on the sign does leave one, since the
 *      gradient shifts in hue as well as brightness.
 *   2. Only the *text* pixels of the surviving bullet are transferred up, using
 *      a luminance mask. The lettering is far brighter than the navy behind it,
 *      so this moves the glyphs and their antialiasing without dragging along a
 *      rectangle of mismatched background.
 *
 * The sign is photographed at an angle, so every boundary follows the baseline
 * slope. Horizontal boundaries clip the descenders of the line above at one end
 * and bite into the line below at the other. The glyph move itself is a pure
 * vertical translation, which is correct because all lines share the slope.
 *
 * Output goes to design-assets/retouched/, which process-incoming.mjs prefers
 * over the untouched original in design-assets/incoming/.
 *
 *   node scripts/retouch-va-sign.mjs
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'design-assets', 'incoming', 'programs', 'VA.png');
const target = join(root, 'design-assets', 'retouched', 'programs', 'VA.png');

// All coordinates measured against the 1536x1024 original.
const X0 = 968;
const X1 = 1194;

// Baseline drop per pixel of horizontal travel, and the column the vertical
// measurements below were taken at.
const SLOPE = 0.09;
const ANCHOR_X = 998;

// Midpoints of the clean gaps bracketing the two bullets being reworked.
const ABOVE_AT_ANCHOR = 580;
const BELOW_AT_ANCHOR = 650;

// Band containing the bullet to promote, clear of the bullet above it.
const SRC_TOP_AT_ANCHOR = 617;
const SRC_BOTTOM_AT_ANCHOR = 660;

// Vertical pitch between bullets, so the promoted line lands on the grid.
const LINE_PITCH = 33;

// Blends the repaint back into untouched pixels at the left and right edges,
// so the patch has no vertical boundary.
const EDGE_FEATHER = 16;

// Luminance window separating lettering from the navy behind it. Below LUMA_LO
// is pure background, above LUMA_HI is pure text, and the ramp between keeps
// antialiased glyph edges intact.
const LUMA_LO = 46;
const LUMA_HI = 92;

const luma = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const slopeAt = (x, atAnchor) => Math.round(atAnchor + SLOPE * (x - ANCHOR_X));

const { data, info } = await sharp(source).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const at = (x, y) => (y * width + x) * channels;

const out = Buffer.from(data);

let repainted = 0;
let moved = 0;

for (let x = X0; x < X1; x += 1) {
  const edge = clamp01(Math.min(x - X0, X1 - 1 - x) / EDGE_FEATHER);
  if (edge <= 0) continue;

  // 1. Repaint the band between the bracketing clean rows.
  const rowAbove = slopeAt(x, ABOVE_AT_ANCHOR);
  const rowBelow = slopeAt(x, BELOW_AT_ANCHOR);
  const top = at(x, rowAbove);
  const bottom = at(x, rowBelow);

  for (let y = rowAbove + 1; y < rowBelow; y += 1) {
    const t = (y - rowAbove) / (rowBelow - rowAbove);
    const dest = at(x, y);
    for (let c = 0; c < 3; c += 1) {
      const fill = data[top + c] * (1 - t) + data[bottom + c] * t;
      out[dest + c] = Math.round(fill * edge + data[dest + c] * (1 - edge));
    }
    repainted += 1;
  }

  // 2. Transfer the surviving bullet's glyphs into the vacated slot.
  const srcTop = slopeAt(x, SRC_TOP_AT_ANCHOR);
  const srcBottom = slopeAt(x, SRC_BOTTOM_AT_ANCHOR);

  for (let y = srcTop; y < srcBottom; y += 1) {
    const src = at(x, y);
    const mask = clamp01((luma(data[src], data[src + 1], data[src + 2]) - LUMA_LO) / (LUMA_HI - LUMA_LO));
    const alpha = mask * edge;
    if (alpha <= 0) continue;

    const dest = at(x, y - LINE_PITCH);
    for (let c = 0; c < 3; c += 1) {
      out[dest + c] = Math.round(data[src + c] * alpha + out[dest + c] * (1 - alpha));
    }
    moved += 1;
  }
}

const buffer = await sharp(out, { raw: { width, height, channels } }).png().toBuffer();

await mkdir(dirname(target), { recursive: true });
await writeFile(target, buffer);

console.log(`Repainted ${repainted} px, moved ${moved} glyph px up ${LINE_PITCH}px along a ${SLOPE} slope.`);
console.log(`Wrote ${target}`);
