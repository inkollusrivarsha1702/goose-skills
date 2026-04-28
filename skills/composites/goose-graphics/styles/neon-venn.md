# Neon Venn

Charcoal canvas hosting overlapping thin-stroke Venn circles with neon-lime pill labels positioned inside the circle lobes. The signature move is **translucent hairline-stroke circles arranged in 2-3 overlapping zones, with rounded neon-lime pills floating in/across the lobes as label-data**. Tracked-uppercase column titles sit above each circle as figure captions. Reads like a dark-mode workshop diagram or a neon strategy doc — clinical structure meets electric energy.

## Palette

| Hex | Role |
|-----|------|
| `#0E0F11` | Charcoal — primary canvas |
| `#16181B` | Near-black — secondary surface, inset panels |
| `#D6FF3D` | Neon lime — pill labels, accent emphasis |
| `#B8E22E` | Neon lime deep — pressed pills, secondary lime accent |
| `#FFFFFF` | White — primary headlines |
| `rgba(255,255,255,0.72)` | White 72 — secondary body |
| `rgba(255,255,255,0.45)` | White 45 — tertiary captions, metadata |
| `rgba(255,255,255,0.28)` | White 28 — Venn circle hairline strokes |
| `rgba(255,255,255,0.10)` | White 10 — Venn circle fill (barely-there overlap tint) |
| `#0E0F11` | Charcoal — type ON the lime pills (pill ink) |

## Typography

**Google Fonts**

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

- **Display / Headlines:** `'Space Grotesk', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`
- **Body / Pills / Labels:** `'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`

| Role | Font | Size | Weight | Line-height | Tracking |
|------|------|------|--------|-------------|----------|
| Hero Display | Space Grotesk | 88px | 600 | 1.00 | -2px |
| Display | Space Grotesk | 56px | 600 | 1.05 | -1.2px |
| Sub Display | Space Grotesk | 32px | 600 | 1.20 | -0.4px |
| Body Lead | Inter | 16px | 400 | 1.55 | 0.1px |
| Body | Inter | 13px | 400 | 1.55 | 0.15px |
| Pill Label | Inter | 14px | 600 | 1.20 | -0.1px |
| Column Caption | Inter | 11px | 600 | 1.20 | 1.6px UPPER |
| Caption | Inter | 11px | 500 | 1.30 | 0.4px |
| Brand | Space Grotesk | 18px | 600 | 1.00 | -0.3px |

**Principles**

- Headlines run tight Space Grotesk 600 — calm, geometric, no bold or italic flourish.
- Pill labels use sentence-case Inter 600 at 14px on neon lime — readable as buttons, not tracked-uppercase shouting.
- Column captions above each Venn lobe are tracked-uppercase Inter 11px in white 45 — they act as figure axes.
- Type stays white-on-charcoal everywhere except inside the lime pills, where it flips to charcoal `#0E0F11`.
- One typeface family for body (Inter); Space Grotesk handles display + brand only.

## Layout

- Format padding: carousel 72px · infographic 72/96 · slides 96px · poster 80/96 · story 72px · chart 80px · tweet 56px.
- Canvas is always charcoal `#0E0F11` — flat, no gradient, no texture.
- Venn diagram is the structural anchor: 2-3 large circles (320-520px diameter) drawn as 1.5px white-at-28% strokes with `rgba(255,255,255,0.10)` fill, arranged so adjacent circles overlap by 25-40% of their diameter.
- Neon-lime pills (32-44px tall, fully rounded `border-radius:999px`, padding `10px 20px`) float inside the circle lobes — placement signals which category the label belongs to. Use 4-9 pills total per composition, varying horizontal position and slight vertical staggering.
- Above each circle, a tracked-uppercase column caption (e.g. `DISCOVERY`, `ANALYSIS`, `DESIGN`) sits in white 45 — these are the diagram axes.
- Hero headline lives top-left, body intro under it, Venn diagram occupies the lower 55-70% of the canvas.
- All corners are sharp 90° rectangles for any panels or cards. The only roundness is the lime pills (full radius) and the Venn circles themselves.

## Do / Don't

**Do**

- Build the Venn as real overlapping circles (`border-radius:50%`, hairline stroke, faint fill) — not SVG paths, not images.
- Float lime pills inside the lobes with absolute positioning so the placement reads as data — pills "live" in their circle.
- Set every pill label in Inter 600, charcoal type, sentence-case — pills are buttons, not banners.
- Caption each Venn lobe with a tracked-uppercase column label above the circle in white 45.
- Keep all non-pill type in white or white-at-opacity — neon lime is reserved for pills (and the rare CTA).

**Don't**

- Don't fill the Venn circles with solid color — they must read as overlapping rings, not stacked discs.
- Don't put more than 2-3 circles in the Venn — the diagram becomes mush past three lobes.
- Don't set pill labels in tracked-uppercase — they're sentence-case buttons, not eyebrow tags.
- Don't introduce a third hue. The system is charcoal + white + neon lime only.
- Don't round non-pill elements. Cards, headers, dividers stay sharp 90° rectangles.

## CSS snippets

### `:root` variables

```css
:root {
  --color-canvas: #0E0F11;
  --color-surface: #16181B;
  --color-lime: #D6FF3D;
  --color-lime-deep: #B8E22E;
  --color-white: #FFFFFF;
  --color-white-72: rgba(255,255,255,0.72);
  --color-white-45: rgba(255,255,255,0.45);
  --color-ring-stroke: rgba(255,255,255,0.28);
  --color-ring-fill: rgba(255,255,255,0.10);

  --font-display: 'Space Grotesk', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
}
```

### Venn ring with floating lime pill

```html
<div style="position:relative; width:920px; height:520px;">
  <!-- Column captions -->
  <p style="position:absolute; top:0; left:140px; font-family:'Inter',sans-serif; font-size:11px; font-weight:600; letter-spacing:1.6px; text-transform:uppercase; color:rgba(255,255,255,0.45); margin:0;">Discovery</p>
  <p style="position:absolute; top:0; left:430px; font-family:'Inter',sans-serif; font-size:11px; font-weight:600; letter-spacing:1.6px; text-transform:uppercase; color:rgba(255,255,255,0.45); margin:0;">Analysis</p>
  <p style="position:absolute; top:0; left:720px; font-family:'Inter',sans-serif; font-size:11px; font-weight:600; letter-spacing:1.6px; text-transform:uppercase; color:rgba(255,255,255,0.45); margin:0;">Design</p>

  <!-- Venn rings -->
  <div style="position:absolute; top:48px; left:0; width:440px; height:440px; border:1.5px solid rgba(255,255,255,0.28); background:rgba(255,255,255,0.10); border-radius:50%;"></div>
  <div style="position:absolute; top:48px; left:280px; width:440px; height:440px; border:1.5px solid rgba(255,255,255,0.28); background:rgba(255,255,255,0.10); border-radius:50%;"></div>
  <div style="position:absolute; top:48px; left:560px; width:440px; height:440px; border:1.5px solid rgba(255,255,255,0.28); background:rgba(255,255,255,0.10); border-radius:50%;"></div>

  <!-- Lime pills floating in lobes -->
  <span style="position:absolute; top:200px; left:80px; background:#D6FF3D; color:#0E0F11; font-family:'Inter',sans-serif; font-size:14px; font-weight:600; padding:10px 20px; border-radius:999px;">User research</span>
  <span style="position:absolute; top:280px; left:130px; background:#D6FF3D; color:#0E0F11; font-family:'Inter',sans-serif; font-size:14px; font-weight:600; padding:10px 20px; border-radius:999px;">Problem identity</span>
</div>
```

### Lime pill label

```html
<span style="display:inline-block; background:#D6FF3D; color:#0E0F11; font-family:'Inter',sans-serif; font-size:14px; font-weight:600; padding:10px 20px; border-radius:999px;">Ship fast</span>
```
