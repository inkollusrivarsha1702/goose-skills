# Vermilion Folio

A confident vermilion outer canvas wraps an onyx inset panel that holds the entire composition like a folio jacket holds a hardcover book. Cream high-contrast serif headlines sit on the onyx inner stage; hand-drawn botanical line illustrations cluster in one corner, rendered in vermilion against the black. Reads like a design studio's premium PDF guide or a fashion-house essay collection.

## Palette

| Hex | Role |
|-----|------|
| `#E83A19` | Vermilion — primary outer canvas / accent |
| `#0E0E0E` | Onyx — inner stage panel |
| `#F2EBE0` | Cream — primary serif type on onyx |
| `rgba(242,235,224,0.45)` | Cream 45 — secondary captions on onyx |
| `#7A7771` | Mute gray — sub-stat / version labels on onyx |
| `#0E0E0E` | Ink — type on vermilion frame |
| `#1F1F1F` | Carbon — botanical line strokes |

## Typography

**Google Fonts**

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

- **Display:** `'Cormorant Garamond', 'Times New Roman', Georgia, serif`
- **Body:** `'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`

| Role | Font | Size | Weight | Line-height | Tracking |
|------|------|------|--------|-------------|----------|
| Hero Display | Cormorant Garamond | 124px | 500 | 1.00 | -1.5px |
| Display | Cormorant Garamond | 76px | 500 | 1.05 | -1px |
| Sub Display | Cormorant Garamond | 40px | 500 | 1.10 | -0.5px |
| Version / Sub-stat | Inter | 18px | 500 | 1.30 | 0 |
| Body | Inter | 13px | 400 | 1.55 | 0 |
| Eyebrow / Caption | Inter | 10px | 600 | 1.30 | 1.4px UPPER |
| Brand Wordmark | Cormorant Garamond | 30px | 600 | 1.00 | -0.4px |
| Footnote | Inter | 10px | 600 | 1.30 | 1.4px UPPER |

**Principles**

- The display serif is the protagonist — set in cream on the onyx stage, never on vermilion. High-contrast strokes carry the elegance.
- Reserve vermilion for the outer frame and for the brand wordmark inside the panel — that's the only saturated element on black.
- Body and captions are tiny and quiet (10-13px Inter) — let the serif breathe.
- Mute gray version labels sit directly below the headline as quiet metadata, never bigger than 18-20px.

## Layout

- Format padding: carousel 80px · infographic 80/100 · slides 100px · poster 80/100 · story 80px · chart 80px · tweet 56px.
- Outer canvas is always vermilion `#E83A19`. The onyx panel is an inset rectangle (sharp 90° corners — no rounding) with 60-100px of vermilion frame visible on every side.
- Inside the onyx panel: the headline anchors top-left; the brand wordmark sits top-right; botanical illustrations cluster bottom-right; a tiny footer caption sits bottom-left.
- Botanical illustrations are simple line + flat-fill SVG/CSS shapes — flowers, fruits, seeds, leaves rendered in vermilion fill with a thin carbon stroke. They appear as a still-life cluster, never tiled or repeating.
- 1-3 botanical motifs per composition. The cluster is asymmetric, weighted to the bottom-right.

## Do / Don't

**Do**

- Frame every composition with vermilion outer + onyx inner — that dual-frame is the identity.
- Render botanical motifs with vermilion fill + thin carbon line strokes. Keep them simple and stylized — round seed pods, three-petal blooms, single leaves.
- Use cream high-contrast serif for headlines; let the type breathe with generous leading.
- Use the brand wordmark as the only saturated element on black — top-right of the panel, in vermilion.
- Anchor a tiny tracked-uppercase footer caption ("A PDF Guide · Studio") bottom-left of the panel as report metadata.

**Don't**

- Don't round the onyx panel's corners. Sharp rectangular framing only.
- Don't introduce a third hue. Vermilion + onyx + cream is the palette. Mute gray is fine for sub-labels.
- Don't put the serif on vermilion — cream-on-onyx is the only headline pairing.
- Don't tile or repeat the botanicals into a pattern. Each composition is a deliberate still-life cluster.
- Don't shadow, gradient, or photograph the botanicals. They are flat vector illustrations only.

## CSS snippets

### `:root` variables

```css
:root {
  --color-vermilion: #E83A19;
  --color-onyx: #0E0E0E;
  --color-cream: #F2EBE0;
  --color-cream-quiet: rgba(242,235,224,0.45);
  --color-mute: #7A7771;
  --color-carbon: #1F1F1F;

  --font-display: 'Cormorant Garamond', 'Times New Roman', Georgia, serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
}
```

### Onyx folio panel

```html
<div style="background:#E83A19; padding:80px;">
  <div style="position:relative; background:#0E0E0E; padding:64px; min-height:600px;">
    <p style="position:absolute; top:36px; right:64px; font-family:'Cormorant Garamond',serif; font-size:30px; font-weight:600; letter-spacing:-0.4px; color:#E83A19;">studio</p>
    <h1 style="font-family:'Cormorant Garamond',serif; font-size:96px; font-weight:500; letter-spacing:-1.5px; line-height:1.00; color:#F2EBE0; margin:0;">A Field Guide<br>for Founders.</h1>
    <p style="font-family:'Inter',sans-serif; font-size:18px; font-weight:500; color:#7A7771; margin-top:14px;">Version 1.0</p>
  </div>
</div>
```

### Botanical motif (round seed-pod cluster)

```html
<svg width="220" height="180" viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" style="position:absolute; bottom:48px; right:64px;">
  <circle cx="60" cy="100" r="48" fill="#E83A19" stroke="#1F1F1F" stroke-width="1.5"/>
  <path d="M60 52 L60 148" stroke="#1F1F1F" stroke-width="1.2" fill="none"/>
  <path d="M28 100 L92 100" stroke="#1F1F1F" stroke-width="1.2" fill="none"/>
  <ellipse cx="150" cy="80" rx="40" ry="56" fill="#E83A19" stroke="#1F1F1F" stroke-width="1.5"/>
  <path d="M150 24 L150 136" stroke="#1F1F1F" stroke-width="1.2" fill="none"/>
</svg>
```
