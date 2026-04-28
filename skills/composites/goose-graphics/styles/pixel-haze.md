# Pixel Haze

Soft warm-gray canvas hosting a rounded white surface, with a chunky pixelated-mosaic gradient panel that fades from orange through magenta into lilac haze at coarse pixel resolution. The signature move is a **blocky pixel-mosaic gradient** built from discrete 32-48px squares — a warm-to-cool dithered haze that reads like an 8-bit sunset baked into a modern editorial card. Reads like a thoughtful Bay Area venture-fund letter or a calm portfolio review with a retro digital wink.

## Palette

| Hex | Role |
|-----|------|
| `#E8E5E1` | Warm gray — outer canvas |
| `#FFFFFF` | White — primary surface (card) |
| `#FFFFFF` | White — pill tag fill (with translucency) |
| `#FF6A1A` | Hot orange — pixel-mosaic anchor (warmest) |
| `#FF4D4D` | Vermillion — pixel-mosaic mid-warm |
| `#E15CB6` | Magenta pink — pixel-mosaic transition |
| `#C28BE6` | Lavender — pixel-mosaic mid-cool |
| `#E2C9F0` | Pale lilac — pixel-mosaic highlight (coolest) |
| `#F4D8C4` | Pale peach — pixel-mosaic warm highlight |
| `#1A1A1A` | Ink — primary headlines, black type |
| `rgba(26,26,26,0.55)` | Ink 55 — secondary muted body text |
| `rgba(26,26,26,0.40)` | Ink 40 — tertiary captions, brand metadata |
| `rgba(255,255,255,0.85)` | White 85 — pill tag fill on mosaic |
| `rgba(0,0,0,0.06)` | Soft drop-shadow base |

## Typography

**Google Fonts**

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

- **Display / Headlines:** `'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`
- **Eyebrow / Label:** `'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`
- **Brand / Numerals (optional accent):** `'Space Grotesk', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`

| Role | Font | Size | Weight | Line-height | Tracking |
|------|------|------|--------|-------------|----------|
| Hero Headline | Inter | 64px | 700 | 1.10 | -1.5px |
| Display | Inter | 44px | 700 | 1.15 | -1px |
| Sub Display | Inter | 28px | 600 | 1.25 | -0.4px |
| Body Lead | Inter | 18px | 400 | 1.55 | 0.1px |
| Body | Inter | 15px | 400 | 1.55 | 0.15px |
| Pill Label | Inter | 12px | 600 | 1.20 | 1.2px UPPER |
| Caption | Inter | 11px | 500 | 1.30 | 0.6px |
| Brand | Space Grotesk | 18px | 600 | 1.00 | -0.2px |

**Principles**

- Headlines are tight, modern sans — never serifed. The retro feel comes from the mosaic, not the type.
- Secondary body sits in `rgba(26,26,26,0.55)` muted ink — a soft gray-black that lets the headline punch.
- Pill labels are tiny tracked-uppercase Inter, set in white-translucent capsules with subtle shadow.
- One typeface family does almost everything. Space Grotesk is a quiet brand-mark accent only.
- All numerals stay aligned to the same family — no display serifs, no decorative glyphs.

## Layout

- Format padding: carousel 64px · infographic 64/80 · slides 96px · poster 64/80 · story 56px · chart 64px · tweet 56px.
- Outer canvas is always warm gray `#E8E5E1` — never pure white, never blue-gray.
- Primary surface is a white card with `border-radius: 28px` and a soft shadow (`0 12px 40px rgba(0,0,0,0.06)`). The card hosts headlines and body copy.
- The signature pixel-mosaic panel lives at the top of the card (or as a hero band): a CSS grid of 32-48px squares, each filled from the mosaic palette. The grid trends from hot orange (top-left) to pale lilac (bottom-right), with random variation so it reads as dithered haze rather than a clean gradient.
- Pill tags (white-translucent, 32-40px tall, fully rounded) float on the mosaic with tracked-uppercase labels. Use 1-3 per composition, never more.
- Body copy below the mosaic is left-aligned, generously spaced, with a clear hierarchy: black ink headline → muted ink secondary → small caption row at the very bottom of the card.

## Do / Don't

**Do**

- Build the mosaic as a real CSS grid of solid-color squares — coarse pixels (32-48px) are the signature.
- Vary the mosaic palette across the panel so the haze reads as a stochastic gradient, not a clean fade.
- Round the card corners generously (24-32px) and lift it with a soft, low-opacity shadow.
- Use white-translucent pill tags floating on the mosaic for category / section / issue labels.
- Keep body copy on the white surface, never on the mosaic — type clarity matters more than vibe.

**Don't**

- Don't use a smooth CSS linear-gradient for the mosaic. The pixels must be visible, discrete squares.
- Don't introduce serifs or scripts — the contrast comes from blocky mosaic vs. clean modern sans only.
- Don't put body copy on top of the mosaic — it's decorative, not a text canvas.
- Don't let pixels go below 28px — they stop reading as pixels and turn into a noise gradient.
- Don't use saturated cool blues or greens — the mosaic palette stays in warm-orange to lilac only.

## CSS snippets

### `:root` variables

```css
:root {
  --color-canvas: #E8E5E1;
  --color-card: #FFFFFF;
  --color-orange: #FF6A1A;
  --color-vermillion: #FF4D4D;
  --color-magenta: #E15CB6;
  --color-lavender: #C28BE6;
  --color-lilac: #E2C9F0;
  --color-peach: #F4D8C4;
  --color-ink: #1A1A1A;
  --color-ink-55: rgba(26,26,26,0.55);
  --color-ink-40: rgba(26,26,26,0.40);
  --color-pill: rgba(255,255,255,0.85);

  --card-radius: 28px;
  --card-shadow: 0 12px 40px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);

  --font-display: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
  --font-brand: 'Space Grotesk', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
}
```

### Pixel mosaic panel with floating pill tags

```html
<div style="background:#fff; border-radius:28px; padding:0; overflow:hidden; box-shadow:0 12px 40px rgba(0,0,0,0.06);">
  <!-- Mosaic -->
  <div style="position:relative; height:340px; display:grid; grid-template-columns:repeat(20, 1fr); grid-template-rows:repeat(8, 1fr); gap:0;">
    <!-- 160 squares hand-placed or generated; each background drawn from the mosaic palette -->
    <div style="background:#FF6A1A;"></div>
    <div style="background:#FF4D4D;"></div>
    <div style="background:#E15CB6;"></div>
    <!-- ... fill the grid trending warm to cool, top-left to bottom-right ... -->

    <!-- Pill tags float above the grid -->
    <div style="position:absolute; top:24px; left:24px; background:rgba(255,255,255,0.85); color:#1A1A1A; font-family:'Inter',sans-serif; font-size:12px; font-weight:600; letter-spacing:1.2px; text-transform:uppercase; padding:10px 18px; border-radius:999px;">PIXEL HAZE</div>
    <div style="position:absolute; top:24px; right:24px; background:rgba(255,255,255,0.85); color:#1A1A1A; font-family:'Inter',sans-serif; font-size:12px; font-weight:600; letter-spacing:1.2px; text-transform:uppercase; padding:10px 18px; border-radius:999px;">2026</div>
  </div>

  <!-- Body -->
  <div style="padding:36px 40px 40px;">
    <h2 style="font-family:'Inter',sans-serif; font-size:36px; font-weight:700; line-height:1.15; letter-spacing:-1px; color:#1A1A1A; margin:0 0 14px;">Ship fast, learn faster.</h2>
    <p style="font-family:'Inter',sans-serif; font-size:15px; font-weight:400; line-height:1.55; color:rgba(26,26,26,0.55); margin:0;">Iteration speed is the new competitive moat. Every week you don't ship, someone else does.</p>
  </div>
</div>
```

### Pill tag

```html
<span style="display:inline-block; background:rgba(255,255,255,0.85); color:#1A1A1A; font-family:'Inter',sans-serif; font-size:12px; font-weight:600; letter-spacing:1.2px; text-transform:uppercase; padding:10px 18px; border-radius:999px;">TIP 01</span>
```
