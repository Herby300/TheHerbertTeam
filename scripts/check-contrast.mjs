/**
 * Verifies text contrast in the homepage "Two Futures" panels.
 *
 * Both panels composite a decorative photo over a flat colour at low opacity,
 * so the contrast a reader actually gets depends on the photo's pixels, not on
 * the background colour named in the Tailwind class. A dark corner of the photo
 * can pull a passing colour pair under the WCAG threshold. This script blends
 * every pixel the way the browser does and reports the worst result.
 *
 * Run with `npm run check:contrast`.
 */
import sharp from 'sharp';

const COLORS = {
  graytext: '#5A5A5F',
  charcoal: '#1C1C1E',
  white: '#FFFFFF',
  brandblue: '#0698F8',
  silverLight: '#E1E1DF',
  navy: '#010E71',
};

// WCAG 2.1: 4.5:1 for body text, 3.0:1 for text at 18.66px bold / 24px regular
// and for meaningful non-text graphics such as icons.
const THRESHOLD = { body: 4.5, large: 3, graphic: 3 };

const PANELS = [
  {
    name: 'If Nothing Changes',
    image: 'public/images/two-futures/stuck.webp',
    plate: COLORS.silverLight,
    opacity: 0.2,
    grayscale: true,
    roles: [
      { label: 'body copy', color: COLORS.charcoal, need: 'body' },
      { label: 'h3 heading', color: COLORS.graytext, need: 'large' },
      { label: 'x icons', color: COLORS.graytext, need: 'graphic' },
    ],
  },
  {
    name: 'If We Talk This Week',
    image: 'public/images/two-futures/moving-forward.webp',
    plate: COLORS.navy,
    opacity: 0.25,
    grayscale: false,
    roles: [
      { label: 'body copy', color: COLORS.white, need: 'body' },
      { label: 'h3 heading', color: COLORS.white, need: 'large' },
      // White rather than brandblue: the photo's bright areas lift the navy
      // close to brandblue's own luminance, which drops the pair to 2.6:1.
      { label: 'check icons', color: COLORS.white, need: 'graphic' },
    ],
  },
];

const parse = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

const channel = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};

const luminance = ([r, g, b]) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);

const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

let failed = false;

for (const panel of PANELS) {
  const plate = parse(panel.plate);
  const pipeline = sharp(panel.image);
  if (panel.grayscale) pipeline.grayscale();
  const { data, info } = await pipeline.raw().toBuffer({ resolveWithObject: true });

  // Every distinct composited background in the panel. Deduplicated, because a
  // 1200x800 photo repeats the same handful of blends many thousands of times.
  const backgrounds = new Set();
  for (let i = 0; i < data.length; i += info.channels) {
    const px = panel.grayscale ? [data[i], data[i], data[i]] : [data[i], data[i + 1], data[i + 2]];
    const blended = plate.map((p, c) => Math.round((1 - panel.opacity) * p + panel.opacity * px[c]));
    backgrounds.add(blended.join(','));
  }
  const blends = [...backgrounds].map((s) => s.split(',').map(Number));

  console.log(`\n${panel.name}  —  ${panel.plate} + photo @ ${panel.opacity * 100}%`);

  for (const role of panel.roles) {
    const text = parse(role.color);
    let worst = Infinity;
    for (const bg of blends) worst = Math.min(worst, contrast(text, bg));

    const need = THRESHOLD[role.need];
    const ok = worst >= need;
    if (!ok) failed = true;
    console.log(
      `  ${ok ? 'PASS' : 'FAIL'}  ${role.label.padEnd(12)} ${role.color}  worst ${worst.toFixed(2)}:1  (needs ${need}:1)`,
    );
  }
}

console.log(failed ? '\nContrast check failed.' : '\nAll roles clear WCAG AA at every pixel.');

// Flat token pairs for text/links on white (performance-foundation a11y pass).
const FLAT = [
  { name: 'brandblue-text on white', fg: '#0369A1', bg: '#FFFFFF', need: 4.5 },
  { name: 'brandblue-text-hover on white', fg: '#075985', bg: '#FFFFFF', need: 4.5 },
  { name: 'brandblue fill on white (decorative/large only)', fg: '#0698F8', bg: '#FFFFFF', need: 3 },
];

console.log('\nFlat token pairs');
for (const pair of FLAT) {
  const r = contrast(parse(pair.fg), parse(pair.bg));
  const ok = r >= pair.need;
  if (!ok) failed = true;
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${pair.name}  ${r.toFixed(2)}:1  (needs ${pair.need}:1)`);
}

process.exit(failed ? 1 : 0);
