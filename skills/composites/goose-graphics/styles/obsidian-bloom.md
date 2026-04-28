# Obsidian Bloom

Editorial annual-report aesthetic where a pitch-black canvas hosts a lime-chartreuse hero stage marbled with overlapping fluid green organic blobs. A large humanist serif sits in pure black on the lime, while tracked-uppercase bone captions float on the black margins. Reads like a sustainability report from a premium eyewear or fashion brand — confident, generous, a little cheeky.

## Palette

| Hex | Role |
|-----|------|
| `#0A0A0A` | Onyx — primary canvas |
| `#C5DD3D` | Lime chartreuse — hero panel surface |
| `#7BBE3F` | Mid green — first blob layer |
| `#2F7C2A` | Forest green — deeper blob layer |
| `#0A0A0A` | Ink — black type on lime |
| `#EDEAE0` | Bone — type and captions on black |
| `rgba(237,234,224,0.55)` | Bone 55 — secondary captions on black |
| `rgba(10,10,10,0.65)` | Ink 65 — body copy on lime |

## Typography

**Google Fonts**

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

- **Display:** `'Fraunces', Georgia, 'Times New Roman', serif`
- **Body:** `'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`

| Role | Font | Size | Weight | Line-height | Tracking |
|------|------|------|--------|-------------|----------|
| Hero Display | Fraunces | 132px | 500 | 0.95 | -3px |
| Display | Fraunces | 80px | 500 | 1.00 | -2px |
| Sub Display | Fraunces | 44px | 500 | 1.05 | -1px |
| Body | Inter | 13px | 400 | 1.55 | 0 |
| Eyebrow / Caption | Inter | 10px | 600 | 1.30 | 1.4px UPPER |
| Tile Heading | Inter | 12px | 700 | 1.20 | 1.2px UPPER |
| Brand | Fraunces | 22px | 500 | 1.00 | -0.5px |

**Principles**

- Humanist serif carries 90% of the visual weight — set black on lime, never on green-blob layers.
- Body copy is small and quiet (12-13px Inter). Type is the punctuation, not the headline.
- Tracked-uppercase bone captions are the only sans element on black — use them sparingly as report metadata (index numbers, chapter labels, dates).
- Never set the serif in lime or green. Black on lime, bone on black — that is the entire contrast system.

## Layout

- Format padding: carousel 80px · infographic 80/100 · slides 100px · poster 80/100 · story 80px · chart 80px · tweet 56px.
- Canvas is always onyx `#0A0A0A`. The lime panel is an inset rectangle (sharp 90° corners — no rounding) that hosts the hero composition.
- Lime-panel inset margins are roughly 60-100px from each canvas edge; let the black canvas frame the panel like a passe-partout.
- Organic blobs overlap the lime panel and may bleed beyond its edges into the onyx canvas. Use `border-radius: 50%` on irregular ovals + scaled SVG/CSS shapes for fluid silhouettes.
- 2-3 blobs per composition is the rule. More than 4 reads as a pattern, not a still life.
- Footer / running-text metadata sits in the bottom 40px of the black canvas, centered or split with caption-left and caption-right.

## Do / Don't

**Do**

- Pair the lime hero panel with 2-3 overlapping green-on-green organic blobs. Treat blobs as a still-life arrangement, not a pattern.
- Set the serif headline in pure black on lime — that's the identity.
- Keep blobs in the green family only — mid-green and forest. No second hue.
- Use bone captions in tracked uppercase on the black canvas as report metadata.
- Frame the lime panel with generous black margins so the canvas reads as a window.

**Don't**

- Don't round the lime panel's corners. Sharp rectangular hero frames only.
- Don't put the serif on green-blob surfaces — black-on-lime only, or bone-on-black for captions.
- Don't introduce a third hue. The system is onyx + lime + two greens. Anything else dilutes it.
- Don't tile or repeat blobs into a pattern. Each composition is an arranged still life of 2-3 fluid shapes.
- Don't shadow, gradient, or stroke the blobs. Flat color only — the depth comes from overlap.

## CSS snippets

### `:root` variables

```css
:root {
  --color-onyx: #0A0A0A;
  --color-lime: #C5DD3D;
  --color-green-mid: #7BBE3F;
  --color-green-deep: #2F7C2A;
  --color-bone: #EDEAE0;
  --color-bone-quiet: rgba(237,234,224,0.55);
  --color-ink-quiet: rgba(10,10,10,0.65);

  --font-display: 'Fraunces', Georgia, 'Times New Roman', serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
}
```

### Hero lime panel with blobs

```html
<div style="position:relative; background:#C5DD3D; padding:64px; overflow:hidden;">
  <!-- Blobs -->
  <div style="position:absolute; bottom:-40px; right:-40px; width:340px; height:240px; background:#7BBE3F; border-radius:60% 40% 70% 30% / 50% 60% 40% 50%;"></div>
  <div style="position:absolute; bottom:-20px; right:80px; width:220px; height:180px; background:#2F7C2A; border-radius:55% 45% 65% 35% / 60% 50% 50% 40%;"></div>
  <!-- Headline -->
  <h1 style="position:relative; font-family:'Fraunces',serif; font-size:96px; font-weight:500; letter-spacing:-2px; line-height:0.98; color:#0A0A0A; margin:0;">Looking Forward.</h1>
</div>
```

### Bone caption on black margin

```html
<p style="font-family:'Inter',sans-serif; font-size:10px; font-weight:600; letter-spacing:1.4px; text-transform:uppercase; color:#EDEAE0; text-align:center;">(Research) Index No. 085 &middot; 2026 Edition</p>
```
