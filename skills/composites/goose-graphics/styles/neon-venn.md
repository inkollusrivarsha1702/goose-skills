# Neon Venn

Charcoal canvas hosting neon-lime pill labels as floating data tags, organized by hairline white strokes and tracked-uppercase column captions. The signature move is **rounded neon-lime pills (`border-radius:999px`) anchoring sentence-case data labels against a flat charcoal field, with thin hairline rules and uppercase axis captions providing quiet structure**. Reads like a dark-mode workshop document or a neon strategy doc — clinical structure meets electric energy.

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
| `rgba(255,255,255,0.28)` | White 28 — hairline rule / divider stroke |
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
- Tracked-uppercase column captions sit above sections in white-at-45% — they label, never decorate.
- Type stays white-on-charcoal everywhere except inside the lime pills, where it flips to charcoal `#0E0F11`.
- One typeface family for body (Inter); Space Grotesk handles display + brand only.

## Layout

- Format padding: carousel 72px · infographic 72/96 · slides 96px · poster 80/96 · story 72px · chart 80px · tweet 56px.
- Canvas is always charcoal `#0E0F11` — flat, no gradient, no texture.
- Hairline white strokes (1.5px, 28% opacity) build the only structure: dividers between sections, thin rules under captions, simple frames for content groups, axis lines. No filled shapes — strokes only.
- Neon-lime pills (32-44px tall, fully rounded `border-radius:999px`, padding `10px 20px`) carry the data: sentence-case Inter 600, charcoal type. Pills cluster in zones, ride along axes, or stack as legend — placement signals meaning.
- Tracked-uppercase column captions in white-at-45% sit above sections or columns as figure axes — they label the zones below.
- Hero headline anchors top-left; pills + structural content fill the lower 55-70% of the canvas.
- All non-pill elements are sharp 90° rectangles. Only roundness is the lime pills (full radius).

## Do / Don't

**Do**

- Build structure from hairline white strokes (1.5px, 28% opacity) — dividers, thin frames, axis lines, simple grids.
- Float lime pills with absolute positioning so their placement reads as data — pills cluster in zones, ride along axes, or stack as legend.
- Set every pill label in Inter 600, charcoal type, sentence-case — pills are buttons, not banners.
- Caption sections with a tracked-uppercase column label above the content in white 45.
- Keep all non-pill type in white or white-at-opacity — neon lime is reserved for pills (and the rare CTA).

**Don't**

- Don't add gradients, glows, or shadows — the neon energy comes from hue contrast alone.
- Don't use the lime for body text — pills only, plus rare CTA accent.
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
  --color-rule: rgba(255,255,255,0.28);

  --font-display: 'Space Grotesk', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
}
```

### Two-column zone with hairline divider + pill clusters

```html
<div style="display:grid; grid-template-columns:1fr 1fr; gap:48px; padding:32px 0; border-top:1.5px solid rgba(255,255,255,0.28); border-bottom:1.5px solid rgba(255,255,255,0.28);">
  <div>
    <p style="font-family:'Inter',sans-serif; font-size:11px; font-weight:600; letter-spacing:1.6px; text-transform:uppercase; color:rgba(255,255,255,0.45); margin:0 0 18px;">Velocity</p>
    <span style="display:inline-block; background:#D6FF3D; color:#0E0F11; font-family:'Inter',sans-serif; font-size:14px; font-weight:600; padding:10px 20px; border-radius:999px; margin:4px 6px 4px 0;">Ship fast</span>
    <span style="display:inline-block; background:#D6FF3D; color:#0E0F11; font-family:'Inter',sans-serif; font-size:14px; font-weight:600; padding:10px 20px; border-radius:999px; margin:4px 6px 4px 0;">Learn faster</span>
  </div>
  <div style="border-left:1.5px solid rgba(255,255,255,0.28); padding-left:48px;">
    <p style="font-family:'Inter',sans-serif; font-size:11px; font-weight:600; letter-spacing:1.6px; text-transform:uppercase; color:rgba(255,255,255,0.45); margin:0 0 18px;">Leverage</p>
    <span style="display:inline-block; background:#D6FF3D; color:#0E0F11; font-family:'Inter',sans-serif; font-size:14px; font-weight:600; padding:10px 20px; border-radius:999px; margin:4px 6px 4px 0;">AI core</span>
    <span style="display:inline-block; background:#D6FF3D; color:#0E0F11; font-family:'Inter',sans-serif; font-size:14px; font-weight:600; padding:10px 20px; border-radius:999px; margin:4px 6px 4px 0;">10x hires</span>
  </div>
</div>
```

### Lime pill label

```html
<span style="display:inline-block; background:#D6FF3D; color:#0E0F11; font-family:'Inter',sans-serif; font-size:14px; font-weight:600; padding:10px 20px; border-radius:999px;">Ship fast</span>
```
