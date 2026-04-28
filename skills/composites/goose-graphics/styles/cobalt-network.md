# Cobalt Network

Solid cobalt-blue canvas hosting white network-node diagrams — small dots connected by hairline lines, captioned like figures in a research paper. The signature move is **labeled node clusters with thin connecting strokes**, paired with numbered section captions, hairline dividers, and a top status bar. Reads like a Palantir / Stripe / Substack research report cover — technical, structural, calmly authoritative.

## Palette

| Hex | Role |
|-----|------|
| `#2463E2` | Cobalt — primary canvas |
| `#1E54C7` | Cobalt deep — node-tile insets, secondary surface |
| `#FFFFFF` | White — primary type, network nodes, dividers |
| `rgba(255,255,255,0.72)` | White 72 — secondary captions |
| `rgba(255,255,255,0.45)` | White 45 — tertiary metadata |
| `rgba(255,255,255,0.20)` | White 20 — hairline strokes, node connectors |
| `rgba(255,255,255,0.10)` | White 10 — barely-there dividers and panel insets |
| `#0A0A0A` | Ink — reserved for the rare inverted accent (tag pill, underline) |

## Typography

**Google Fonts**

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@1,9..144,400&display=swap" rel="stylesheet">
```

- **Display:** `'Space Grotesk', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`
- **Body / Labels:** `'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`
- **Emphasis (italic underline accent only):** `'Fraunces', Georgia, 'Times New Roman', serif`

| Role | Font | Size | Weight | Line-height | Tracking |
|------|------|------|--------|-------------|----------|
| Hero Display | Space Grotesk | 96px | 500 | 1.00 | -2.5px |
| Display | Space Grotesk | 60px | 500 | 1.05 | -1.5px |
| Sub Display | Space Grotesk | 32px | 500 | 1.20 | -0.5px |
| Body | Inter | 14px | 400 | 1.55 | 0.1px |
| Tile Heading | Space Grotesk | 18px | 500 | 1.20 | -0.3px |
| Caption / Eyebrow | Inter | 11px | 600 | 1.20 | 1.6px UPPER |
| Index Number | Space Grotesk | 13px | 600 | 1.10 | 0.6px |
| Brand | Space Grotesk | 18px | 600 | 1.00 | -0.3px |

**Principles**

- Geometric sans does almost everything — Space Grotesk for display, Inter for labels and body.
- The single italic-underlined Fraunces word in a headline is the only typographic flourish; use it for one word per composition, max.
- Tracked-uppercase eyebrow labels at 11px act as figure captions and report metadata.
- Headlines run tight (-1.5 to -2.5 letter-spacing) at large sizes; nothing is loose.
- Hairlines (1px, white at 10-20% opacity) separate sections — never solid borders, never shadows.

## Layout

- Format padding: carousel 72px · infographic 72/96 · slides 96px · poster 80/96 · story 72px · chart 72px · tweet 56px.
- Canvas is always cobalt `#2463E2` — flat, no gradient, no texture.
- Top status bar: brand left, optional small uppercase tag, "NO. X" issue number right — separated by hairline divider below.
- Network-node diagrams are the signature visual: 8-24 small white dots (4-8px) connected by 1px white-at-20% lines, arranged in clusters that read as schematic graphs. Each diagram sits in a thin-bordered tile and is captioned with `01 / Title` below.
- Bottom hairline divider footer with brand mark + small uppercase metadata.
- All corners are sharp 90° rectangles. No rounding except on circular nodes themselves.

## Do / Don't

**Do**

- Build network-node diagrams by hand as positioned dots + connecting lines (use absolute-positioned divs or inline SVG). Vary each cluster's topology so they read as distinct figures.
- Number every node-tile caption (`01`, `02`, `03`) in tracked-mono small caps.
- Use the italic-underlined Fraunces word as a single emphasis beat in the hero headline.
- Keep all type in white or white-at-opacity — color stays cobalt-only.
- Use 1px white-at-10-20% hairlines to divide sections and outline tiles.

**Don't**

- Don't introduce a second hue. The system is cobalt + white only; ink is reserved for tiny inverted accents.
- Don't round tile corners. Sharp 90° rectangles only.
- Don't add shadows, gradients, or glows — flatness is the brand.
- Don't crowd node diagrams. Whitespace inside each tile is part of the figure.
- Don't use the italic Fraunces word more than once per composition — it loses weight.

## CSS snippets

### `:root` variables

```css
:root {
  --color-cobalt: #2463E2;
  --color-cobalt-deep: #1E54C7;
  --color-white: #FFFFFF;
  --color-white-72: rgba(255,255,255,0.72);
  --color-white-45: rgba(255,255,255,0.45);
  --color-hairline-strong: rgba(255,255,255,0.20);
  --color-hairline-soft: rgba(255,255,255,0.10);
  --color-ink: #0A0A0A;

  --font-display: 'Space Grotesk', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
  --font-italic: 'Fraunces', Georgia, 'Times New Roman', serif;
}
```

### Top status bar

```html
<div style="display:flex; align-items:center; justify-content:space-between; padding-bottom:18px; border-bottom:1px solid rgba(255,255,255,0.20);">
  <div style="display:flex; align-items:center; gap:12px;">
    <span style="font-family:'Space Grotesk',sans-serif; font-size:18px; font-weight:600; letter-spacing:-0.3px; color:#fff;">GOOSE</span>
    <span style="font-family:'Inter',sans-serif; font-size:10px; font-weight:700; letter-spacing:1.6px; text-transform:uppercase; color:rgba(255,255,255,0.45);">EXPLAINED</span>
  </div>
  <span style="font-family:'Inter',sans-serif; font-size:10px; font-weight:700; letter-spacing:1.6px; text-transform:uppercase; color:rgba(255,255,255,0.45);">ISSUE NO. 014</span>
</div>
```

### Network-node tile with caption

```html
<div style="border:1px solid rgba(255,255,255,0.20); padding:24px; position:relative; height:220px;">
  <p style="position:absolute; top:14px; left:14px; font-family:'Inter',sans-serif; font-size:9px; font-weight:600; letter-spacing:1.4px; text-transform:uppercase; color:rgba(255,255,255,0.45); margin:0;">FIG. 01</p>
  <!-- nodes -->
  <div style="position:absolute; left:50%; top:50%; width:6px; height:6px; border-radius:50%; background:#fff; transform:translate(-50%,-50%);"></div>
  <div style="position:absolute; left:30%; top:35%; width:6px; height:6px; border-radius:50%; background:#fff;"></div>
  <div style="position:absolute; left:70%; top:38%; width:6px; height:6px; border-radius:50%; background:#fff;"></div>
  <!-- connecting line via SVG would go here at 1px white-at-20% -->
  <p style="position:absolute; bottom:14px; left:14px; right:14px; font-family:'Space Grotesk',sans-serif; font-size:13px; font-weight:500; letter-spacing:-0.2px; color:#fff; margin:0;"><span style="color:rgba(255,255,255,0.45); margin-right:8px;">01</span>Fragmentation</p>
</div>
```
