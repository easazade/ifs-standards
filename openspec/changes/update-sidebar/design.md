## Context

The `Sidebar` component in `design-system.lib.pen` defines a multi-section sidebar (node `dplRy`) with:
- **Width**: 215px, **padding**: 24px, **gap**: 24px between sections
- **Background**: `$color-surface-secondary`, **border-right**: 1px `$color-border`
- **Structure**: vertical layout containing multiple section groups (e.g., "Get Started", "Agent") followed by `Sidebar-Section` instances
- **Section groups**: title in `$color-text-secondary` at `$font-size-small` weight 500, items at `$font-size-body` in `$color-text` weight normal, gap 8px
- **Expandable items**: rows with children show a `chevron-right` icon (14x14, `$color-text-secondary`), layout `space_between`

The `MainLayout` component (node `naIht`) has:
- A horizontal `Body` group containing Sidebar ref (width ~222px) + Content slot (fills remaining width, clipped)
- Navbar ref at top

Current code (`Sidebar.jsx`) is a flat protocol list at 240px width using `bg-surface`. It doesn't use `SidebarSection` or match the design's multi-section structure. `MainLayout.jsx` is close but doesn't account for the design's precise Body group layout.

## Goals / Non-Goals

**Goals:**
- Rewrite `Sidebar.jsx` to exactly match the `Sidebar` design component: width 215px, surface-secondary bg, 24px padding/gap, border-right, multi-section composition
- Compose the new Sidebar using `SidebarSection` React components for each navigation group
- Update `MainLayout.jsx` to match the `MainLayout` design component structure (Body: horizontal flex with Sidebar + scrollable Content)
- Define sidebar section data structure for navigation items

**Non-Goals:**
- Changing `SidebarSection.jsx` — it already matches the design pattern
- Adding new routes or pages beyond what the sidebar links to
- Mobile responsive sidebar (not in design)
- Adding search functionality to sidebar

## Decisions

### 1. Sidebar data structure in `src/data/sidebar.js`

Create a new data file defining sidebar sections as an array of `{ title, items }` objects. Each item has `{ label, href, children? }`. This separates navigation structure from presentation and makes it easy to add/reorder sections.

**Alternative considered**: Embed data inline in Sidebar.jsx. Rejected because a separate data file follows existing pattern (`src/data/protocols.js`) and keeps the component focused on rendering.

### 2. Sidebar width: `w-[215px]` (exact design match)

Use Tailwind arbitrary value to match the 215px design width precisely, replacing current `w-60` (240px).

### 3. Section composition via `SidebarSection`

Each sidebar section (e.g., "Protocols", "Standards") renders as a `<SidebarSection>` component. The sidebar itself is a vertical flex container with 24px gap between sections.

### 4. MainLayout Body structure

The layout uses a horizontal flex for Body with the sidebar as a fixed-width child and `<main>` as `flex-1 overflow-y-auto` — which matches current code's intent but with corrected sidebar width and background.

## Risks / Trade-offs

- **[Sidebar content]** The design uses placeholder content (Get Started, Agent, Customizing sections). The actual IFS Standards sidebar content will differ. → Map to IFS-relevant sections (e.g., Protocols, Standards, Resources) while preserving the structural pattern.
- **[Token availability]** Design uses `$color-surface-secondary` which maps to the Tailwind token `surface-secondary`. → Verify this token exists in `src/index.css`; if not, `npm run tokens:code` regenerates it.
- **[Route coverage]** New sidebar links may point to routes that don't exist yet. → Only link to existing routes; placeholder items can use `#` temporarily.
