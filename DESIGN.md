# Design System Inspired by Cursor

## 1. Visual Theme & Atmosphere

Cursor site = warm minimalism + code-editor polish. Canvas: warm off-white (`#f2f1ed`), text: warm brown-black (`#26251e`) — not pure black/gray; yellow undertone → paper/ink/craft. Warmth everywhere: cream BGs (`#e6e5e0`, `#ebeae5`), borders = transparent warm overlays in `oklab`, error (`#cf2d56`) still warm not clinical red. Feels premium print not generic tech.

**CursorGothic** = typographic signature: gothic sans, aggressive negative tracking at display (-2.16px @ 72px) → compressed engineered look. **jjannon** serif + OpenType `"cswh"` swash alternates = literary counterpoint for body/editorial. **berkeleyMono** = mono voice, ties marketing to editor DNA. Three voices (gothic display, serif body, mono code) = unusually rich palette for dev tooling.

Borders: `oklab()` for edge colors, warm brown @ alpha 0.1 / 0.2 / 0.55 → organic not mechanical. Signature `oklab(0.263084 -0.00230259 0.0124794 / 0.1)` = perceptually uniform, consistent across BGs.

**Key Characteristics:**
- CursorGothic: tight tracking (-2.16px @ 72px, -0.72px @ 36px) for display
- jjannon body + `"cswh"`
- berkeleyMono code/labels
- Warm off-white BG `#f2f1ed` (system warm-shifted)
- Text `#26251e`
- Accent orange `#f54e00` links/highlights
- oklab borders @ multiple alphas
- Pills: extreme radius (33.5M px ≈ full pill)
- 8px base grid + sub-8px steps (1.5, 2, 2.5, 3, 4, 5, 6px)

## 2. Color Palette & Roles

### Primary
- **Cursor Dark** (`#26251e`): Text, headings, dark UI. Warm near-black w/ yellow-brown undertone — system anchor.
- **Cursor Cream** (`#f2f1ed`): Page BG, primary surface.
- **Cursor Light** (`#e6e5e0`): Secondary surface, buttons, cards.
- **Pure White** (`#ffffff`): Sparingly, max contrast / highlights.
- **True Black** (`#000000`): Rare; code/console only.

### Accent
- **Cursor Orange** (`#f54e00`): Brand `--color-accent`, CTAs, active links.
- **Gold** (`#c08532`): Secondary accent, premium highlights.

### Semantic
- **Error** (`#cf2d56`): `--color-error`, warm crimson-rose.
- **Success** (`#1f8a65`): `--color-success`, muted teal-green warm-shifted.

### Timeline / Feature Colors
- **Thinking** (`#dfa88f`): Peach, AI timeline "thinking".
- **Grep** (`#9fc9a2`): Sage, search/grep.
- **Read** (`#9fbbe0`): Soft blue, file read.
- **Edit** (`#c0a8dd`): Lavender, edits.

### Surface Scale
- **Surface 100** (`#f7f7f4`): Lightest button/card.
- **Surface 200** (`#f2f1ed`): Page BG.
- **Surface 300** (`#ebeae5`): Default button, subtle emphasis.
- **Surface 400** (`#e6e5e0`): Cards, secondary surfaces.
- **Surface 500** (`#e1e0db`): Tertiary button, deeper emphasis.

### Border Colors
- **Border Primary** (`oklab(0.263084 -0.00230259 0.0124794 / 0.1)`): Default, 10% warm brown oklab.
- **Border Medium** (`oklab(0.263084 -0.00230259 0.0124794 / 0.2)`): Stronger, 20%.
- **Border Strong** (`rgba(38, 37, 30, 0.55)`): Tables, strong edges.
- **Border Solid** (`#26251e`): Full dark.
- **Border Light** (`#f2f1ed`): Match page BG.

### Shadows & Depth
- **Card Shadow** (`rgba(0,0,0,0.14) 0px 28px 70px, rgba(0,0,0,0.1) 0px 14px 32px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 1px`): Elevated card + warm ring.
- **Ambient Shadow** (`rgba(0,0,0,0.02) 0px 0px 16px, rgba(0,0,0,0.008) 0px 0px 8px`): Subtle float glow.

## 3. Typography Rules

### Font Family
- **Display/Headlines**: `CursorGothic` → `CursorGothic Fallback, system-ui, Helvetica Neue, Helvetica, Arial`
- **Body/Editorial**: `jjannon` → `Iowan Old Style, Palatino Linotype, URW Palladio L, P052, ui-serif, Georgia, Cambria, Times New Roman, Times`
- **Code/Technical**: `berkeleyMono` → `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New`
- **UI/System**: `system-ui` → `-apple-system, Segoe UI, Helvetica Neue, Arial`
- **Icons**: `CursorIcons16` @ 14px / 12px
- **OpenType**: `"cswh"` on jjannon body; `"ss09"` on CursorGothic buttons/captions

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | CursorGothic | 72px (4.50rem) | 400 | 1.10 (tight) | -2.16px | Max compression, hero |
| Section Heading | CursorGothic | 36px (2.25rem) | 400 | 1.20 (tight) | -0.72px | Sections, CTA headlines |
| Sub-heading | CursorGothic | 26px (1.63rem) | 400 | 1.25 (tight) | -0.325px | Cards, sub-sections |
| Title Small | CursorGothic | 22px (1.38rem) | 400 | 1.30 (tight) | -0.11px | Small titles, list heads |
| Body Serif | jjannon | 19.2px (1.20rem) | 500 | 1.50 | normal | Editorial + `"cswh"` |
| Body Serif SM | jjannon | 17.28px (1.08rem) | 400 | 1.35 | normal | Standard body |
| Body Sans | CursorGothic | 16px (1.00rem) | 400 | 1.50 | normal/0.08px | UI body |
| Button Label | CursorGothic | 14px (0.88rem) | 400 | 1.00 (tight) | normal | Primary buttons |
| Button Caption | CursorGothic | 14px (0.88rem) | 400 | 1.50 | 0.14px | Secondary + `"ss09"` |
| Caption | CursorGothic | 11px (0.69rem) | 400-500 | 1.50 | normal | Meta, small caps |
| System Heading | system-ui | 20px (1.25rem) | 700 | 1.55 | normal | System UI heads |
| System Caption | system-ui | 13px (0.81rem) | 500-600 | 1.33 | normal | System labels |
| System Micro | system-ui | 11px (0.69rem) | 500 | 1.27 (tight) | 0.048px | Uppercase micro |
| Mono Body | berkeleyMono | 12px (0.75rem) | 400 | 1.67 (relaxed) | normal | Code blocks |
| Mono Small | berkeleyMono | 11px (0.69rem) | 400 | 1.33 | -0.275px | Inline code, terminal |
| Lato Heading | Lato | 16px (1.00rem) | 600 | 1.33 | normal | Lato sections |
| Lato Caption | Lato | 14px (0.88rem) | 400-600 | 1.33 | normal | Lato captions |
| Lato Micro | Lato | 12px (0.75rem) | 400-600 | 1.27 (tight) | 0.053px | Lato small labels |

### Principles
- **Gothic compression**: 72px → -2.16px tracking; steps down: 36px -0.72px, 26px -0.325px, 22px -0.11px; ≤16px normal. Precision-engineered feel.
- **Serif soul**: jjannon + `"cswh"` → calligraphic body.
- **Three voices**: Gothic UI/display, serif editorial, mono code — distinct jobs.
- **Weight discipline**: CursorGothic mostly 400; hierarchy from size + tracking. system-ui 500–700 for UI emphasis.

## 4. Component Stylings

### Buttons

**Primary (Warm Surface)**
- BG: `#ebeae5` (Surface 300)
- Text: `#26251e`
- Padding: 10px 12px 10px 14px
- Radius: 8px
- Outline: none
- Hover: text → `var(--color-error)` (`#cf2d56`)
- Focus shadow: `rgba(0,0,0,0.1) 0px 4px 12px`
- Use: main CTAs

**Secondary Pill**
- BG: `#e6e5e0` (Surface 400)
- Text: `oklab(0.263 / 0.6)`
- Padding: 3px 8px
- Radius: full pill (33.5M px)
- Hover: text → `var(--color-error)`
- Use: tags, filters, secondary

**Tertiary Pill**
- BG: `#e1e0db` (Surface 500)
- Text: `oklab(0.263 / 0.6)`
- Radius: full pill
- Use: active filter, selected tags

**Ghost (Transparent)**
- BG: `rgba(38, 37, 30, 0.06)`
- Text: `rgba(38, 37, 30, 0.55)`
- Padding: 6px 12px
- Use: tertiary, dismiss

**Light Surface**
- BG: `#f7f7f4` (100) or `#f2f1ed` (200)
- Text: `#26251e` or `oklab(0.263 / 0.9)`
- Padding: 0px 8px 1px 12px
- Use: dropdown triggers, subtle controls

### Cards & Containers
- BG: `#e6e5e0` or `#f2f1ed`
- Border: `1px solid oklab(0.263 / 0.1)`
- Radius: 8px default, 4px compact, 10px featured
- Shadow: `rgba(0,0,0,0.14) 0px 28px 70px, rgba(0,0,0,0.1) 0px 14px 32px` when elevated
- Hover: stronger shadow

### Inputs & Forms
- BG: transparent or surface
- Text: `#26251e`
- Padding: 8px 8px 6px (textarea)
- Border: `1px solid oklab(0.263 / 0.1)`
- Focus: border → `oklab(0.263 / 0.2)` or accent orange

### Navigation
- Horizontal nav on warm cream
- Cursor logotype left (~96×24px)
- Links: 14px CursorGothic or system-ui, 500
- CTA: warm surface + Cursor Dark text
- Tabs: bottom `1px solid oklab(0.263 / 0.1)`, active state distinct

### Image Treatment
- Editor shots: `1px solid oklab(0.263 / 0.1)`
- Radius: 8px default
- Feature sections: AI chat/timeline shots prominent
- Hero: warm gradient or cream behind

### Distinctive Components

**AI Timeline**
- Vertical steps: thinking (peach), grep (sage), read (blue), edit (lavender)
- Step text matches semantic color
- Vertical connectors
- Core metaphor: AI-first coding

**Code Editor Previews**
- Dark editor + warm cream frame
- berkeleyMono
- Syntax colors align w/ timeline palette

**Pricing Cards**
- Warm surfaces + borders
- jjannon for feature lists
- CTA: orange accent or dark primary

## 5. Layout Principles

### Spacing System
- Base: 8px
- Micro: 1.5, 2, 2.5, 3, 4, 5, 6px
- Standard: 8, 10, 12, 14px (from extraction)
- Extended (inferred): 16, 24, 32, 48, 64, 96px
- Sub-8px critical for icon/text alignment

### Grid & Container
- Max width ~1200px
- Hero: centered 1-col, top pad 80–120px
- Features: 2–3 col cards
- Full-bleed sections: cream / slightly darker
- Sidebars: docs, settings

### Whitespace Philosophy
- **Warm negative space**: cream BG → empty areas feel cozy not sterile.
- **Dense type, open frame**: tight CursorGothic headlines + generous margins.
- **Section rhythm**: alternate cream tones — differentiation w/o hard lines.

### Border Radius Scale
- Micro 1.5px: fine detail
- Small 2px: inline, code spans
- Medium 3px: small containers, badges
- Standard 4px: cards, images, compact buttons
- Comfortable 8px: primary buttons, cards, menus
- Featured 10px: large/featured cards
- Full pill (33.5M px / 9999px): pills, tags, badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page BG, text |
| Border Ring (Level 1) | `oklab(0.263 / 0.1) 0px 0px 0px 1px` | Default card/container |
| Border Medium (Level 1b) | `oklab(0.263 / 0.2) 0px 0px 0px 1px` | Emphasis, active |
| Ambient (Level 2) | `rgba(0,0,0,0.02) 0px 0px 16px, rgba(0,0,0,0.008) 0px 0px 8px` | Float, soft glow |
| Elevated Card (Level 3) | `rgba(0,0,0,0.14) 0px 28px 70px, rgba(0,0,0,0.1) 0px 14px 32px, oklab ring` | Modals, popovers, cards |
| Focus | `rgba(0,0,0,0.1) 0px 4px 12px` on button focus | Focus feedback |

**Shadow Philosophy**: (1) Borders in oklab → warm brown consistent across BGs. (2) Elevation = large blur (28px, 70px) + moderate opacity (0.14, 0.1) → soft atmospheric lift not hard drops. Cards feel like page gently made room — not hovering slabs.

### Decorative Depth
- Cream surface steps = tonal depth w/o heavy shadow
- oklab @ 10% / 20% = edge spectrum
- No harsh rules — tone + spacing separate sections

## 7. Interaction & Motion

### Hover States
- Buttons: text → `--color-error` (`#cf2d56`) — signature warm crimson affordance
- Links: → `#f54e00` or underline `rgba(38, 37, 30, 0.4)`
- Cards: ambient → elevated shadow

### Focus States
- Focus shadow: `rgba(0,0,0,0.1) 0px 4px 12px`
- Input focus border: `oklab(0.263 / 0.2)`
- All focus warm — no cold blue rings

### Transitions
- Color: 150ms ease
- Shadow: 200ms ease elevation
- Transform: subtle scale/translate

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | 1-col, tighter pad, stacked nav |
| Tablet Small | 600-768px | 2-col starts |
| Tablet | 768-900px | wider grids, sidebar |
| Desktop Small | 900-1279px | layout fills in |
| Desktop | >1279px | full layout, max content width |

### Touch Targets
- Buttons: vert 6–14px, horiz 8–14px pad
- Pills: 3–10px pad, tap-safe
- Nav links 14px + enough gap

### Collapsing Strategy
- Hero type: 72px → 36px → 26px; tracking scales
- Nav: horizontal → hamburger mobile
- Feature cards: 3 → 2 → 1 col
- Editor shots: keep ratio + border
- Timeline: horizontal → vertical stack
- Section vertical rhythm: 80px+ → 48px → 32px mobile

### Image Behavior
- Borders at all breakpoints
- Timeline reflows horizontal ↔ vertical
- Responsive imgs, same radius
- Hero imgs scale proportional

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA BG: `#ebeae5`
- Page BG: `#f2f1ed`
- Text: `#26251e`
- Secondary text: `rgba(38, 37, 30, 0.55)`
- Accent: `#f54e00`
- Error/hover: `#cf2d56`
- Success: `#1f8a65`
- Border: `oklab(0.263084 -0.00230259 0.0124794 / 0.1)` or `rgba(38, 37, 30, 0.1)` fallback

### Example Component Prompts
- "Create a hero section on `#f2f1ed` warm cream background. Headline at 72px CursorGothic weight 400, line-height 1.10, letter-spacing -2.16px, color `#26251e`. Subtitle at 17.28px jjannon weight 400, line-height 1.35, color `rgba(38,37,30,0.55)`. Primary CTA button (`#ebeae5` bg, 8px radius, 10px 14px padding) with hover text shift to `#cf2d56`."
- "Design a card: `#e6e5e0` background, border `1px solid rgba(38,37,30,0.1)`. Radius 8px. Title at 22px CursorGothic weight 400, letter-spacing -0.11px. Body at 17.28px jjannon weight 400, color `rgba(38,37,30,0.55)`. Use `#f54e00` for link accents."
- "Build a pill tag: `#e6e5e0` background, `rgba(38,37,30,0.6)` text, full-pill radius (9999px), 3px 8px padding, 14px CursorGothic weight 400."
- "Create navigation: sticky `#f2f1ed` background with backdrop-filter blur. 14px system-ui weight 500 for links, `#26251e` text. CTA button right-aligned with `#ebeae5` bg and 8px radius. Bottom border `1px solid rgba(38,37,30,0.1)`."
- "Design an AI timeline showing four steps: Thinking (`#dfa88f`), Grep (`#9fc9a2`), Read (`#9fbbe0`), Edit (`#c0a8dd`). Each step: 14px system-ui label + 16px CursorGothic description + vertical connecting line in `rgba(38,37,30,0.1)`."

### Iteration Guide
1. Warm palette: `#f2f1ed` BG, `#26251e` text — no pure white/black as default surfaces
2. CursorGothic tracking vs size: -2.16px @ 72px, -0.72px @ 36px, -0.325px @ 26px, normal @ 16px
3. `rgba(38, 37, 30, alpha)` = CSS fallback for oklab borders
4. Three fonts: CursorGothic (display/UI), jjannon (editorial), berkeleyMono (code)
5. Pills 9999px; 8px buttons + cards
6. Hover text `#cf2d56` = signature
7. Shadows: big blur (28px, 70px) for soft depth
8. Sub-8px scale (1.5–6px) matters for micro alignment


### Pencil.dev AI Agent Guide 
- Pencil is a design as code solution **use pencil mcp**
- Keep in mind design will be converted to code later 
- Define reused ui elements as pencil components so they can be exported to individual components in code so they can be reused in code as well
- Define reusable values as pencil variables (design tokens) so they can be exported to code
- Use pencil slots, variables, components where needed