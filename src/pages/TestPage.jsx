import { LinkBox } from '../components/LinkBox';
import { SidebarSection } from '../components/SidebarSection.jsx';
import { ROUTES } from '../routes.js';
import Welcome from '../mdx/welcome.mdx';

const testSidebarItems = [
  {
    label: 'Introduction',
    href: ROUTES.HOME,
  },
  {
    label: 'Goals',
    href: ROUTES.PROTOCOL,
  },
  {
    label: 'Quickstart',
    href: ROUTES.ABOUT,
  },
  {
    label: 'Architecture',
    href: ROUTES.HOME,
  },
  {
    label: 'Dynamic Consent',
    href: ROUTES.PROTOCOL,
    children: [
      {
        label: 'Overview',
        href: ROUTES.PROTOCOL,
      },
      {
        label: 'Key Rotation',
        href: ROUTES.ABOUT,
      },
      {
        label: 'Dispute Flows',
        href: ROUTES.HOME,
      },
    ],
  },
  {
    label: 'Asset Traceability',
    href: ROUTES.PROTOCOL,
  },
  {
    label: 'Rule Modules',
    href: ROUTES.ABOUT,
  },
  {
    label: 'Steward Roles',
    href: ROUTES.PROTOCOL,
    children: [
      {
        label: 'Role Lifecycle',
        href: ROUTES.PROTOCOL,
      },
      {
        label: 'Delegation Chains',
        href: ROUTES.ABOUT,
        children: [
          {
            label: 'Temporary Delegation',
            href: ROUTES.HOME,
          },
          {
            label: 'Emergency Override',
            href: ROUTES.PROTOCOL,
          },
        ],
      },
      {
        label: 'Revocation Rules',
        href: ROUTES.HOME,
      },
    ],
  },
  {
    label: 'Transparency',
    href: ROUTES.ABOUT,
  },
  {
    label: 'Audit Logs',
    href: ROUTES.PROTOCOL,
  },
];

export function TestPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <LinkBox
        title={'Documentation'}
        description={'Read the guides references and integration details'}
        href={ROUTES.ABOUT}
      />

      <SidebarSection title={'Get Started'} items={testSidebarItems} />
      <Welcome />
    </div>
  );
}
