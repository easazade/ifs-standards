# DESIGN.md

## Core Rules

* Use warm tones. No pure white/black as main surfaces.
* Style = minimal, clean, slightly editorial (not playful, not futuristic).
* Prefer simple layouts. Avoid complex compositions.

---

## Colors

* Background: `#f2f1ed`
* Surface: `#ebeae5` (primary), `#e6e5e0` (secondary)
* Text: `#26251e`
* Secondary text: `#26251e8c`
* Accent: `#f54e00`
* Hover / Error: `#cf2d56`
* Success: `#1f8a65`
* Border: `#26251e1a`

---

## Typography

* Headings: system-ui, weight 500–600
* Body: system-ui, weight 400
* Code: monospace

Sizes:

* H1: 40px
* H2: 28px
* H3: 22px
* Body: 16px
* Small: 14px

Rules:

* No extreme letter-spacing
* Keep line-height ~1.4–1.6
* Do not mix too many font styles

---

## Spacing & Radius

* Base spacing: 8px

* Common spacing: 8, 12, 16, 24, 32

* Radius:

  * Small: 4px
  * Default: 8px
  * Pill: 9999px

---

## Components

### Button (Primary)

* Background: `#ebeae5`
* Text: `#26251e`
* Padding: `10px 14px`
* Radius: `8px`
* Hover: text → `#cf2d56`

### Button (Secondary / Pill)

* Background: `#e6e5e0`
* Text: `#26251e99`
* Radius: `9999px`
* Padding: `4px 10px`

### Card

* Background: `#e6e5e0`
* Border: `1px solid #26251e1a`
* Radius: `8px`
* Padding: `16px`

### Input

* Background: transparent or surface
* Border: `1px solid #26251e1a`
* Padding: `8px`
* Focus: border → `#26251e33`

---

## Layout

* Max width: 1200px
* Center content horizontally
* Use 1–3 columns max
* Keep generous vertical spacing

---

## Interaction

* Hover:

  * Buttons → text becomes `#cf2d56`
  * Links → `#f54e00`

* Transitions:

  * 150–200ms ease
  * Subtle only (no heavy animations)

---

## Agent Rules

* Reuse components when possible
* Do not invent new styles unless necessary
* Prefer consistency over creativity
* Keep UI simple and readable
