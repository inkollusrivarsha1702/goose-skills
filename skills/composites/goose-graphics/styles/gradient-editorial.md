# Gradient Editorial

Cream paper canvas hosting a hero serif numeral that's been overprinted with a soft warm peach-to-rose-to-apricot gradient, dusted with a subtle film-grain texture. Body copy is small humanist sans on the left, the colossal gradient numeral commands the right. Reads like a print-magazine data spread — Bloomberg Businessweek, Wired, MIT Tech Review — calm, considered, intellectually warm.

## Palette

| Hex | Role |
|-----|------|
| `#F2EFE8` | Warm cream — primary canvas (paper) |
| `#1A1A1A` | Ink — primary type, headings, structural rules |
| `#E8836B` | Coral peach — gradient anchor (warmest) |
| `#E8A8A8` | Rose pink — gradient mid |
| `#F0D8B8` | Pale apricot — gradient highlight (lightest) |
| `#D4623B` | Burnt sienna — secondary accent, tertiary chart bar |
| `#8B9A6B` | Muted sage olive — secondary accent, secondary chart bar |
| `#9B9B96` | Quiet gray — secondary text, dividers, page-number metadata |
| `rgba(26,26,26,0.65)` | Ink 65 — body copy on cream |
| `rgba(26,26,26,0.45)` | Ink 45 — captions, footer marks |

## Typography

**Google Fonts**

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

- **Display / Hero numerals:** `'Fraunces', Georgia, 'Times New Roman', serif`
- **Body / Captions:** `'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`

| Role | Font | Size | Weight | Line-height | Tracking |
|------|------|------|--------|-------------|----------|
| Hero Gradient Numeral | Fraunces | 480px | 900 | 0.85 | -16px |
| Display Headline | Fraunces | 56px | 600 | 1.05 | -1px |
| Section Heading | Fraunces | 36px | 600 | 1.15 | -0.5px |
| Body Lead | Inter | 16px | 400 | 1.65 | 0.1px |
| Body | Inter | 13px | 400 | 1.65 | 0.2px |
| Eyebrow / Footer | Inter | 10px | 700 | 1.20 | 1.6px UPPER |
| Page Number | Inter | 10px | 700 | 1.20 | 1.6px UPPER |
| Brand | Fraunces | 22px | 700 | 1.00 | -0.3px |

**Principles**

- The gradient-filled serif numeral is the protagonist — at 320-480px it occupies most of its column and is the only place color appears at full saturation.
- Body copy stays small (12-16px), set in Inter, left-aligned, like a magazine column.
- Section headlines are Fraunces 500-600 — never bold display weights — to keep the editorial calm.
- Eyebrow labels and page-footer marks in tiny tracked-uppercase Inter; gray, never black.
- Cream paper is never pure white. Always `#F2EFE8` for canvas; rules and dividers are 1px hairlines in 10-15% ink.

## Layout

- Format padding: carousel 80px · infographic 80/96 · slides 100px · poster 80/96 · story 72px · chart 72px · tweet 56px.
- Two-column editorial spread is the default rhythm: text column (40-50%) + hero gradient numeral column (50-60%). Text left, numeral right.
- Page-footer apparatus is mandatory on every format: small tracked-uppercase metadata left (section · date) + page number center/right + brand mark right. Hairline rule above the footer.
- All corners are sharp 90° rectangles. No rounding, no shadows, no glass.
- The gradient is always warm peach-to-rose-to-apricot, applied via `background-clip: text`. Add a subtle grain via `radial-gradient` overlay or noise SVG to keep it from feeling digital.
- Bar charts are flat-color (sage and burnt sienna) with the stat number printed atop each bar in Fraunces — no axis lines, just labels.

## Do / Don't

**Do**

- Print one giant gradient serif numeral per composition — that numeral IS the visual.
- Use a warm peach → rose → apricot gradient direction (top-left lighter, bottom-right warmer or vice versa). Vary slightly per composition.
- Add a subtle grain overlay (1-3% opacity noise) on top of the gradient numeral so it reads like print, not screen.
- Treat every layout like a magazine spread: section eyebrow → headline → column of body copy → page-footer apparatus.
- Use sage and burnt sienna only for chart bars or narrow accent rules — never for type.

**Don't**

- Don't use pure white. Cream `#F2EFE8` is the canvas — pure white feels wrong against the warm gradient.
- Don't apply the gradient to body type or headlines — only the hero numeral. One gradient moment per composition.
- Don't round corners. Sharp rectangles only.
- Don't omit the page-footer apparatus — it's the "magazine spread" tell.
- Don't use a third typeface. Fraunces + Inter is the entire system.

## CSS snippets

### `:root` variables

```css
:root {
  --color-cream: #F2EFE8;
  --color-ink: #1A1A1A;
  --color-coral: #E8836B;
  --color-rose: #E8A8A8;
  --color-apricot: #F0D8B8;
  --color-sienna: #D4623B;
  --color-sage: #8B9A6B;
  --color-gray: #9B9B96;
  --color-ink-65: rgba(26,26,26,0.65);
  --color-ink-45: rgba(26,26,26,0.45);
  --color-ink-15: rgba(26,26,26,0.15);

  --font-display: 'Fraunces', Georgia, 'Times New Roman', serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
}
```

### Gradient hero numeral

```html
<div style="background:#F2EFE8; padding:60px;">
  <h1 style="
    font-family:'Fraunces',serif; font-size:420px; font-weight:900; line-height:0.85; letter-spacing:-14px; margin:0;
    background: linear-gradient(135deg, #F0D8B8 0%, #E8A8A8 35%, #E8836B 70%, #D4623B 100%);
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent; color: transparent;
    position: relative;
  ">5</h1>
  <p style="font-family:'Inter',sans-serif; font-size:13px; font-weight:400; line-height:1.65; color:rgba(26,26,26,0.65); max-width:280px; margin-top:8px;">A 5-tip rise in startup builder thinking over the next year predicted.</p>
</div>
```

### Page-footer apparatus

```html
<div style="display:flex; justify-content:space-between; align-items:center; padding-top:14px; border-top:1px solid rgba(26,26,26,0.15);">
  <span style="font-family:'Inter',sans-serif; font-size:10px; font-weight:700; letter-spacing:1.6px; text-transform:uppercase; color:#9B9B96;">STARTUP BRIEF · 04.28.26</span>
  <span style="font-family:'Inter',sans-serif; font-size:10px; font-weight:700; letter-spacing:1.6px; text-transform:uppercase; color:#9B9B96;">P.19</span>
  <span style="font-family:'Fraunces',serif; font-size:18px; font-weight:700; letter-spacing:-0.3px; color:#1A1A1A;">goose Group</span>
</div>
```
