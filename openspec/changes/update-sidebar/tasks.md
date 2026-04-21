## 1. Data Layer

- [ ] 1.1 Create `src/data/sidebar.js` with sidebar section data: array of `{ title, items }` objects where each item has `{ label, href, children? }`. Map existing protocols into a "Protocols" section and add placeholder sections matching the design pattern
- [ ] 1.2 Update `src/routes.js` if any new route segments are needed for sidebar navigation items

## 2. Sidebar Component Rewrite

- [ ] 2.1 Rewrite `src/components/Sidebar.jsx` to match the design-system Sidebar component: `w-[215px]`, `bg-surface-secondary`, `p-6` (24px), `gap-6` (24px), `border-r border-border`, vertical flex layout
- [ ] 2.2 Compose the Sidebar using `SidebarSection` components — import and render one per section from the sidebar data
- [ ] 2.3 Remove old flat protocol list and the `PROTOCOLS`/`ROUTES` imports that are no longer needed

## 3. MainLayout Update

- [ ] 3.1 Update `src/layouts/MainLayout.jsx` to match the MainLayout design: verify the horizontal flex Body structure with corrected sidebar width reference, ensure `<main>` fills remaining width with `overflow-y-auto`

## 4. Verification

- [ ] 4.1 Run `npm run lint` and fix any errors
- [ ] 4.2 Run `npm run build` and confirm no build errors
- [ ] 4.3 Manual check: Sidebar renders at 215px width with surface-secondary background, correct padding, border-right, and sections with titles
- [ ] 4.4 Manual check: Expandable sidebar items show chevron icons and toggle child list visibility
- [ ] 4.5 Manual check: MainLayout renders Navbar + Sidebar + Content area matching the design layout
