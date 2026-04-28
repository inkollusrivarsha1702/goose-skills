# Industrial Folio

Cream paper canvas hosting an oversized vermilion accent slab — a horizontal partition that reads like a printed engineering manual or oil-and-gas spec sheet. Heavy uppercase grotesque headlines anchor the cream half, while the orange slab carries cream-on-orange isometric blueprint linework, numbered spec rows, and an italic serif pull-quote. Tracked-uppercase metadata, breadcrumb navigation, and hairline rules give it the calm authority of a B2B technical folio. Reads like CoreAxis / Bechtel / a Palantir industrial deck — premium, precise, structural.

## Palette

| Hex | Role |
|-----|------|
| `#F5EDDC` | Cream — primary canvas, type on orange slab |
| `#E94E1B` | Vermilion — accent slab, bullet markers, key emphasis |
| `#1A1A1A` | Ink — headlines, body type on cream |
| `rgba(26,26,26,0.72)` | Ink 72 — secondary body on cream |
| `rgba(26,26,26,0.48)` | Ink 48 — tertiary metadata, breadcrumbs |
| `rgba(245,237,220,0.85)` | Cream 85 — secondary type on orange slab |
| `rgba(245,237,220,0.32)` | Cream 32 — hairline dividers inside the orange slab |
| `rgba(26,26,26,0.18)` | Ink 18 — hairline dividers on cream |

## Typography

**Google Fonts**

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Fraunces:ital,opsz,wght@1,9..144,400;1,9..144,500&display=swap" rel="stylesheet">
```

- **Display:** `'Archivo', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`
- **Body:** `'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`
- **Mono / spec rows:** `'IBM Plex Mono', ui-monospace, Menlo, monospace`
- **Italic pull-quote (rare emphasis):** `'Fraunces', Georgia, 'Times New Roman', serif`

| Role | Font | Size | Weight | Line-height | Tracking |
|------|------|------|--------|-------------|----------|
| Hero Display | Archivo | 88px | 800 | 1.00 | -2px UPPER |
| Display | Archivo | 56px | 800 | 1.05 | -1px UPPER |
| Sub Display | Archivo | 32px | 700 | 1.15 | -0.3px UPPER |
| Section Heading | Inter | 13px | 700 | 1.20 | 1.6px UPPER |
| Body | Inter | 14px | 400 | 1.55 | 0.1px |
| Spec Row Label | IBM Plex Mono | 13px | 500 | 1.40 | 0.2px |
| Index Numeral | IBM Plex Mono | 13px | 500 | 1.40 | 0.4px |
| Pull-quote | Fraunces (italic) | 16px | 400 | 1.40 | 0 |
| Caption / Eyebrow | Inter | 10px | 700 | 1.20 | 1.8px UPPER |
| Brand | Inter | 11px | 700 | 1.00 | 2px UPPER |

**Principles**

- The vermilion slab and cream canvas split the composition horizontally — never a thin band, always a confident block (25–55% of the frame).
- Headlines run UPPERCASE in heavy Archivo (700–800) — short, declarative, never sentence case.
- Numbered spec rows (`01 / 02 / 03`) live inside the orange slab as IBM Plex Mono indices with cream hairline rules between rows.
- One italic Fraunces pull-quote per composition — a single quiet beat against the technical register.
- Tracked-uppercase metadata (10–11px, 1.6–2px tracking) handles all eyebrows, breadcrumbs, and brand marks.

## Layout

- Format padding: carousel 64px · infographic 64/80 · slides 80px · poster 64/80 · story 64px · chart 64px · tweet 56px.
- Canvas is always cream `#F5EDDC`. The vermilion slab `#E94E1B` is the structural counterweight — a hard rectangle, never gradient, never rounded.
- Top of the cream half: small brand mark left + breadcrumb-style nav right (`HOME › SERVICES › PROJECT`) in Ink 48, separated from the headline by a 24–32px gutter.
- Hero headline UPPERCASE, anchored to the cream side; body intro and bullet sections sit beneath in 1–4 columns.
- Bullet markers are 6–8px solid vermilion squares preceding tracked-uppercase section labels.
- Inside the orange slab: a numbered spec table (3–5 rows) on the right + an isometric line-art figure on the left, drawn in 1.5–2px cream strokes (no fill).
- Bottom of the slab carries a small italic pull-quote, then a oversized cream uppercase manifesto line, with brand + year footer below a cream hairline rule.

## Do / Don't

**Do**

- Split the canvas hard — cream above, vermilion slab below (or right). The partition is the signature.
- Draw blueprint-style isometric line illustrations in cream strokes on the orange slab — pipes, valves, machinery, structural diagrams.
- Set every heading and manifesto line in UPPERCASE Archivo 700–800.
- Use IBM Plex Mono for any numbered spec rows, indices, and code-like labels.
- Add tracked-uppercase metadata (brand top-left, breadcrumb top-right, year + brand bottom-right) — they're load-bearing typography.

**Don't**

- Don't soften the vermilion slab with rounded corners, gradients, or shadows — flat hard rectangles only.
- Don't switch the canvas to white or a different background — cream is the warmth that keeps the orange from feeling alarming.
- Don't set headlines in title case or sentence case — uppercase is mandatory for display weight.
- Don't introduce a third hue. The system is cream + vermilion + ink only.
- Don't put more than one Fraunces italic line per composition — overuse softens the technical register.

## CSS snippets

### `:root` variables

```css
:root {
  --color-cream: #F5EDDC;
  --color-vermilion: #E94E1B;
  --color-ink: #1A1A1A;
  --color-ink-72: rgba(26,26,26,0.72);
  --color-ink-48: rgba(26,26,26,0.48);
  --color-ink-18: rgba(26,26,26,0.18);
  --color-cream-85: rgba(245,237,220,0.85);
  --color-cream-32: rgba(245,237,220,0.32);

  --font-display: 'Archivo', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, Menlo, monospace;
  --font-italic: 'Fraunces', Georgia, 'Times New Roman', serif;
}
```

### Section label with vermilion bullet

```html
<div style="display:flex; align-items:center; gap:10px; margin:0 0 12px;">
  <span style="width:8px; height:8px; background:#E94E1B; display:inline-block;"></span>
  <span style="font-family:'Inter',sans-serif; font-size:11px; font-weight:700; letter-spacing:1.8px; text-transform:uppercase; color:#1A1A1A;">Equipment Design &amp; Integration</span>
</div>
<p style="font-family:'Inter',sans-serif; font-size:13px; line-height:1.55; color:rgba(26,26,26,0.72); margin:0; max-width:240px;">We develop custom solutions — from pressure vessels and heat exchangers to rotating equipment tailored to performance and efficiency.</p>
```

### Numbered spec row inside vermilion slab

```html
<div style="background:#E94E1B; padding:32px;">
  <div style="display:grid; grid-template-columns:48px 1fr; column-gap:24px; padding:14px 0; border-bottom:1px solid rgba(245,237,220,0.32);">
    <span style="font-family:'IBM Plex Mono',monospace; font-size:13px; font-weight:500; letter-spacing:0.4px; color:rgba(245,237,220,0.85);">01</span>
    <span style="font-family:'IBM Plex Mono',monospace; font-size:13px; font-weight:500; letter-spacing:0.2px; color:#F5EDDC;">Multidisciplinary Collaboration</span>
  </div>
  <div style="display:grid; grid-template-columns:48px 1fr; column-gap:24px; padding:14px 0; border-bottom:1px solid rgba(245,237,220,0.32);">
    <span style="font-family:'IBM Plex Mono',monospace; font-size:13px; font-weight:500; letter-spacing:0.4px; color:rgba(245,237,220,0.85);">02</span>
    <span style="font-family:'IBM Plex Mono',monospace; font-size:13px; font-weight:500; letter-spacing:0.2px; color:#F5EDDC;">Compliance-Driven Design</span>
  </div>
</div>
```
