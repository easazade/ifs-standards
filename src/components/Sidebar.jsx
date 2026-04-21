/**
 * Grouped sidebar data mirrors the design-system hierarchy while reusing route helpers.
 */
import { PROTOCOLS } from '../data/protocols';
import { ROUTES } from '../routes.js';
import { SidebarSection } from './SidebarSection.jsx';

const protocolItems = PROTOCOLS.map((protocol) => ({
  label: protocol.title,
  href: ROUTES.PROTOCOL_DETAIL(protocol.id),
}));

const sidebarSections = [
  {
    title: 'Navigate',
    items: [
      { label: 'Welcome', href: ROUTES.HOME },
      { label: 'About', href: ROUTES.ABOUT },
    ],
  },
  {
    title: 'Protocols',
    items: protocolItems.length
      ? [
          {
            label: 'Protocol Library',
            href: protocolItems[0].href,
            children: protocolItems,
          },
        ]
      : [],
  },
].filter((section) => section.items.length > 0);

export function Sidebar() {
  return (
    <aside
      className="min-h-0 w-full shrink-0 overflow-y-auto border-e border-border bg-surface-secondary p-6 lg:w-56"
      aria-label="Sidebar navigation"
    >
      <div className="flex min-h-full flex-col gap-6">
        {sidebarSections.map((section) => (
          <SidebarSection key={section.title} title={section.title} items={section.items} />
        ))}
      </div>
    </aside>
  );
}
