## 1. Sidebar Navigation

- [ ] 1.1 Define grouped sidebar section data from `PROTOCOLS` and `ROUTES` so `Sidebar.jsx` can render named sections through `SidebarSection` instead of a flat list.
- [ ] 1.2 Replace `src/components/Sidebar.jsx` with a design-matched sidebar shell that uses the correct desktop width, border, surface, padding, and section spacing from `design/design-system.lib.pen`.
- [ ] 1.3 Update `src/components/SidebarSection.jsx` only where needed so section headings, item spacing, hierarchy, and expand/collapse affordances match the `Sidebar-Section` design component.

## 2. App Shell Layout

- [ ] 2.1 Update `src/layouts/MainLayout.jsx` so the shared shell renders distinct sidebar and content panel chrome that matches the `MainLayout` design component.
- [ ] 2.2 Preserve the existing `showSideBar` route behavior while making sidebar-enabled layouts stack cleanly on narrow screens instead of forcing a cramped desktop two-column layout.
- [ ] 2.3 Review shell-adjacent route content for overflow or spacing regressions caused by the new content panel treatment and make only the minimal supporting adjustments required.

## 3. Verification

- [ ] 3.1 Manually verify sidebar-enabled protocol routes on desktop for section grouping, sizing, border/surface treatment, expand/collapse behavior, and independent content scrolling.
- [ ] 3.2 Manually verify narrow-screen behavior to confirm the sidebar stacks above content and remains readable and interactive.
- [ ] 3.3 Manually verify routes with `showSideBar={false}` still render without an empty sidebar column.
- [ ] 3.4 Run `npm run lint`.
- [ ] 3.5 Run `npm run build`.
- [ ] 3.6 Update OpenSpec artifacts if implementation reveals spec or design drift, and run `npm run tokens:code` only if design tokens or Pencil assets change.
