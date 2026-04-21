## Why

The current `Sidebar.jsx` is a flat list of protocol links that doesn't match the `Sidebar` component defined in `design-system.lib.pen`. The design system defines a multi-section sidebar with grouped navigation items, expandable rows, and specific sizing (215px width, 24px padding, `surface-secondary` background). The current implementation also doesn't use the existing `SidebarSection` React component. `MainLayout.jsx` needs updating to match its design counterpart as well (proper body structure with sidebar + content slot).

## What Changes

- **BREAKING**: Rewrite `Sidebar.jsx` to match the `Sidebar` design component in `design-system.lib.pen` (width 215px, `surface-secondary` bg, 24px padding/gap, border-right)
- Replace the flat protocol list with multiple `SidebarSection` components, each with a title and navigable items
- Add expandable items (with chevron-right icon) for sidebar entries that have children
- Update `MainLayout.jsx` to match the `MainLayout` design component structure (Body group with horizontal layout containing Sidebar + Content slot)

## Capabilities

### Modified Capabilities

- `ui-layout`: Update sidebar and main layout to match design-system.lib.pen — structural sizing, multi-section composition, expandable rows with chevron icons, and layout hierarchy

## Impact

- `src/components/Sidebar.jsx` — full rewrite
- `src/layouts/MainLayout.jsx` — layout structure update
- `src/components/SidebarSection.jsx` — already matches design, used as building block
- `src/data/protocols.js` — may need sidebar section data structure
- `src/routes.js` — potentially new routes for sidebar items
- No API or external dependency changes
