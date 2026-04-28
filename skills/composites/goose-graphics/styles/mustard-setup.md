# Mustard Setup

Light gray canvas hosting a soft mustard-yellow accent panel as the structural counterweight, with thin-stroke procedural line-art icons and an isometric home-setup illustration drawn underneath. The signature move is the **mustard panel split into a left tagline / right numbered icon-list with hairline circle-stroke icons** — and an optional bottom band of charcoal isometric linework (sofa, lamp, plant) that turns the page into a friendly product walkthrough. Reads like a Sonos / Nest / IKEA quickstart guide — calm consumer-product warmth, not corporate.

## Palette

| Hex | Role |
|-----|------|
| `#EEEEEC` | Light gray — primary canvas |
| `#E0A347` | Mustard — accent panel, hero block |
| `#D49232` | Mustard deep — pressed mustard, hover/secondary panel |
| `#1F1F1D` | Charcoal — primary type, line-illustration ink |
| `#FFFFFF` | White — card surface, secondary fill |
| `rgba(31,31,29,0.62)` | Charcoal 62 — muted body copy |
| `rgba(31,31,29,0.40)` | Charcoal 40 — tertiary captions, metadata |
| `rgba(31,31,29,0.14)` | Charcoal 14 — hairline dividers on canvas |
| `rgba(255,255,255,0.65)` | White 65 — soft type on mustard panel |

## Typography

**Google Fonts**

```html
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

- **Display:** `'Sora', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`
- **Body / Labels:** `'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`

| Role | Font | Size | Weight | Line-height | Tracking |
|------|------|------|--------|-------------|----------|
| Hero Display | Sora | 96px | 600 | 1.00 | -2.5px |
| Display | Sora | 64px | 600 | 1.05 | -1.5px |
| Sub Display | Sora | 36px | 600 | 1.15 | -0.6px |
| Tile Heading | Sora | 22px | 600 | 1.25 | -0.3px |
| Body Lead | Inter | 17px | 400 | 1.55 | 0 |
| Body | Inter | 14px | 400 | 1.55 | 0.1px |
| Eyebrow / Nav | Inter | 12px | 500 | 1.20 | 0.2px |
| Caption | Inter | 11px | 600 | 1.30 | 0.4px |
| Brand | Sora | 18px | 600 | 1.00 | -0.3px |

**Principles**

- Headlines run BIG and tight — Sora 600 at -1.5 to -2.5 tracking does most of the heavy lifting.
- Body copy stays small and friendly — Inter 14px in muted charcoal, generous line-height (1.55).
- Eyebrow / nav labels use sentence-case Inter at 12px with light tracking, never tracked-uppercase shouting.
- Type stays charcoal on canvas, charcoal on mustard, white sparingly — no pure-black, no decorative serifs.
- Numerals share the body family — no Space Grotesk or display-numeral exception.

## Layout

- Format padding: carousel 72px · infographic 72/96 · slides 96px · poster 80/96 · story 72px · chart 72px · tweet 56px.
- Outer canvas is always light gray `#EEEEEC` — never pure white, never tinted toward blue.
- The mustard accent panel `#E0A347` is the signature surface: a 16-20px-radius soft-cornered block, generous padding (40-56px), occupying 40-65% of the composition. It splits internally into a left tagline column and a right numbered list.
- Numbered list pattern: 28-32px outlined-circle icon (1.5px charcoal stroke) on the left, bold Sora label, muted Inter description. Hairline divider between rows in `rgba(31,31,29,0.14)`.
- Procedural icons are drawn with simple geometric strokes inside outlined circles — power button, wifi arc, app dot — never filled, never glyph fonts.
- Optional bottom band: 1.5px charcoal isometric line illustration of a home setup (sofa, lamp, plant, low table) on the canvas — no fill, no shadow, calm interior sketch.
- Top bar: small brand mark left + sentence-case nav links right (`Learn · Support · Radio`), centered logo, divided by a hairline rule below.

## Do / Don't

**Do**

- Anchor every composition with one mustard `#E0A347` rounded panel — this is the signature surface.
- Pair the panel with a charcoal isometric line illustration somewhere on the page — they belong together.
- Use outlined-circle icons (1.5px stroke) with simple inner glyphs for any list of features, never filled flat icons.
- Keep type charcoal-on-mustard or charcoal-on-canvas — the warmth handles the friendliness, the type stays calm.
- Layer composition top-to-bottom: nav bar → big headline + body → mustard panel → isometric illustration band.

**Don't**

- Don't set the mustard panel as a hard rectangle — soft 16-20px radius is mandatory for the consumer-product warmth.
- Don't fill the icons or use emoji — outlined-circle line-art icons are the visual language.
- Don't introduce a third hue. The system is mustard + light gray + charcoal + white, full stop.
- Don't use tracked-uppercase eyebrows everywhere — keep nav and labels sentence-case for the consumer register.
- Don't apply shadows or gradients to the mustard panel — flat mustard is the warmth source.

## CSS snippets

### `:root` variables

```css
:root {
  --color-canvas: #EEEEEC;
  --color-mustard: #E0A347;
  --color-mustard-deep: #D49232;
  --color-ink: #1F1F1D;
  --color-white: #FFFFFF;
  --color-ink-62: rgba(31,31,29,0.62);
  --color-ink-40: rgba(31,31,29,0.40);
  --color-ink-14: rgba(31,31,29,0.14);
  --color-white-65: rgba(255,255,255,0.65);

  --panel-radius: 18px;
  --font-display: 'Sora', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
}
```

### Mustard panel with numbered icon list

```html
<div style="background:#E0A347; border-radius:18px; padding:48px; display:grid; grid-template-columns:1fr 1.1fr; gap:48px;">
  <!-- Left tagline -->
  <div>
    <h2 style="font-family:'Sora',sans-serif; font-size:48px; font-weight:600; line-height:1.05; letter-spacing:-1.2px; color:#1F1F1D; margin:0 0 16px;">Here's what<br>you'll need</h2>
    <p style="font-family:'Inter',sans-serif; font-size:14px; line-height:1.55; color:rgba(31,31,29,0.62); margin:0 0 20px; max-width:280px;">Set up your speaker on your home network to start streaming music, shows, and more.</p>
    <a style="font-family:'Inter',sans-serif; font-size:13px; font-weight:600; color:#1F1F1D; text-decoration:underline;">Learn more</a>
  </div>
  <!-- Right numbered list -->
  <div style="display:flex; flex-direction:column; gap:18px;">
    <div style="display:grid; grid-template-columns:36px 1fr; gap:16px; align-items:flex-start; padding-bottom:14px; border-bottom:1px solid rgba(31,31,29,0.14);">
      <div style="width:32px; height:32px; border:1.5px solid #1F1F1D; border-radius:50%; display:flex; align-items:center; justify-content:center;">
        <div style="width:12px; height:12px; border:1.5px solid #1F1F1D; border-radius:50%;"></div>
      </div>
      <div>
        <p style="font-family:'Sora',sans-serif; font-size:16px; font-weight:600; color:#1F1F1D; margin:0 0 4px;">A power source</p>
        <p style="font-family:'Inter',sans-serif; font-size:13px; line-height:1.45; color:rgba(31,31,29,0.62); margin:0;">Plug in your speaker.</p>
      </div>
    </div>
  </div>
</div>
```

### Top nav bar with hairline divider

```html
<div style="display:flex; align-items:center; justify-content:space-between; padding-bottom:18px; border-bottom:1px solid rgba(31,31,29,0.14);">
  <div style="display:flex; gap:24px; font-family:'Inter',sans-serif; font-size:12px; color:rgba(31,31,29,0.62);">
    <span>Learn</span><span>Support</span><span>Radio</span>
  </div>
  <span style="font-family:'Sora',sans-serif; font-size:18px; font-weight:600; letter-spacing:-0.3px; color:#1F1F1D;">SETUP</span>
  <div style="display:flex; gap:18px; font-family:'Inter',sans-serif; font-size:12px; color:rgba(31,31,29,0.62);">
    <span>Sign In</span><span>&#9906;</span><span>&#9776;</span>
  </div>
</div>
```
