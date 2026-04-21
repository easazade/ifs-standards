## ADDED Requirements

### Requirement: Sidebar SHALL render as a multi-section vertical navigation matching the design-system Sidebar component
The Sidebar React component MUST use width 215px, `surface-secondary` background, 24px padding, 24px gap between sections, and a 1px right border using `border` color token. It MUST be composed of multiple `SidebarSection` components, each representing a distinct navigation group.

#### Scenario: Sidebar renders with correct structural styling
- **WHEN** the Sidebar component mounts
- **THEN** it MUST have width 215px, `surface-secondary` background, 24px padding on all sides, 24px vertical gap between child sections, and a 1px solid right border using the `border` token color

#### Scenario: Sidebar composes SidebarSection components
- **WHEN** the Sidebar renders
- **THEN** each navigation group MUST be rendered as a `SidebarSection` component with a title and an array of navigable items

### Requirement: Sidebar section data SHALL be defined in a dedicated data file
A new file `src/data/sidebar.js` MUST export the sidebar navigation structure as an array of section objects. Each section MUST have a `title` (string) and `items` (array of `{ label, href, children? }` objects).

#### Scenario: Sidebar data file exports section structure
- **WHEN** the sidebar data module is imported
- **THEN** it MUST export an array where each entry has a `title` string and an `items` array containing objects with `label` (string), `href` (string), and optional `children` (array of same shape)

### Requirement: Sidebar items with children SHALL render expandable rows with chevron icons
Items that have a `children` array MUST display a chevron-right icon (14x14px, `text-secondary` color) aligned to the right of the row, using `justify-between` layout. Clicking the icon or row MUST toggle the child list visibility.

#### Scenario: Expandable item shows chevron icon
- **WHEN** a sidebar item has a non-empty `children` array
- **THEN** the item row MUST display a chevron-right icon and the item text MUST be in a horizontal flex with `justify-between`

#### Scenario: Non-expandable item has no chevron
- **WHEN** a sidebar item has no `children` or an empty `children` array
- **THEN** the item row MUST NOT display a chevron icon

## MODIFIED Requirements

### Requirement: Sidebar sections SHALL present a clear navigation hierarchy
Shared sidebar sections MUST visually distinguish section headings, top-level items, and nested child items so users can scan the structure quickly. Child items MUST use a lower-emphasis text treatment than their parent items while remaining readable and interactive. Section headings MUST use the `text-secondary` token color at `font-size-small` with medium font weight.

#### Scenario: Section heading uses secondary text styling
- **WHEN** a sidebar section renders its title
- **THEN** the title MUST use `text-secondary` token color, `font-size-small`, and medium font weight (500)

#### Scenario: Nested items render with secondary emphasis
- **WHEN** a sidebar section renders an item with child links
- **THEN** the parent row MUST keep the primary navigation emphasis and each child row MUST render with a visibly secondary text style

### Requirement: Expandable sidebar rows SHALL expose explicit collapsed and expanded affordances
Any sidebar item with children MUST expose a toggle control that reflects its current state. The control MUST show a right arrow when the child list is collapsed and a down arrow when the child list is expanded. The icon MUST be 14x14px in `text-secondary` color.

#### Scenario: Collapsed group shows right arrow
- **WHEN** a sidebar item with children is collapsed
- **THEN** its toggle control MUST display a right-pointing chevron icon (14x14px, `text-secondary` color) and the child list MUST not be shown

#### Scenario: Expanded group shows down arrow
- **WHEN** a sidebar item with children is expanded
- **THEN** its toggle control MUST display a downward-pointing chevron icon (14x14px, `text-secondary` color) and the child list MUST be shown

### Requirement: Sidebar sections SHALL follow the shared design-system pattern
The React sidebar section implementation MUST align with the reusable `Sidebar-Section` pattern defined in `design/design-system.lib.pen` for section title treatment, item spacing (8px gap), hierarchy, and expand/collapse cues.

#### Scenario: Code implementation follows design-system structure
- **WHEN** the sidebar section is rendered in the application
- **THEN** its heading, item hierarchy, and expandable row affordances MUST match the established design-system pattern without introducing unrelated visual conventions
