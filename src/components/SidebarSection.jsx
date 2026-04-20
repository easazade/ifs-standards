import PropTypes from 'prop-types';
import { useId, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function validateSidebarSectionItems(items, componentName, propFullName) {
  if (!Array.isArray(items)) {
    return new Error(`${componentName}: ${propFullName} must be an array of sidebar section items.`);
  }

  for (const [index, item] of items.entries()) {
    const itemPath = `${propFullName}[${index}]`;

    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      return new Error(`${componentName}: ${itemPath} must be an object.`);
    }

    if (typeof item.label !== 'string' || item.label.trim() === '') {
      return new Error(`${componentName}: ${itemPath}.label must be a non-empty string.`);
    }

    if (typeof item.href !== 'string' || item.href.trim() === '') {
      return new Error(`${componentName}: ${itemPath}.href must be a non-empty string.`);
    }

    if ('children' in item) {
      const childError = validateSidebarSectionItems(item.children, componentName, `${itemPath}.children`);

      if (childError) {
        return childError;
      }
    }
  }

  return null;
}

const sidebarSectionItemPropType = PropTypes.exact({
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children(props, propName, componentName, location, propFullName) {
    if (!(propName in props) || props[propName] == null) {
      return null;
    }
    return validateSidebarSectionItems(props[propName], componentName, propFullName || propName);
  },
});

function SidebarChevron({ expanded }) {
  return (
    <svg
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points={expanded ? '6 9 12 15 18 9' : '9 6 15 12 9 18'} />
    </svg>
  );
}

SidebarChevron.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

function SidebarSectionItems({ items, nested = false }) {
  const { pathname } = useLocation();

  return (
    <ul
      className={[
        'm-0 flex list-none flex-col p-0',
        nested ? 'ml-4 gap-1 pl-2' : 'gap-2',
      ].join(' ')}
    >
      {items.map((item) => {
        return (
          <li key={`${pathname}-${item.href}-${item.label}`} className="bg-transparent">
            <SidebarSectionItem item={item} nested={nested} />
          </li>
        );
      })}
    </ul>
  );
}

SidebarSectionItems.propTypes = {
  items: (props, propName, componentName, location, propFullName) => {
    return validateSidebarSectionItems(props[propName], componentName, propFullName || propName);
  },
  nested: PropTypes.bool,
};

function SidebarSectionItem({ item, nested }) {
  const { pathname } = useLocation();
  const hasChildren = item.children?.length > 0;
  const isCurrentRoute = pathname === item.href;
  const [isExpanded, setIsExpanded] = useState(isCurrentRoute);

  const linkClassName = ({ isActive }) =>
    [
      'block rounded-md px-2 py-1 text-base leading-6 transition-colors',
      nested ? 'text-text-secondary hover:bg-surface-primary hover:text-text' : 'text-text hover:text-primary',
      isActive ? 'font-medium text-primary' : '',
    ].join(' ');

  return (
    <div className="flex flex-col gap-1 bg-transparent">
      <div className="flex items-center justify-between gap-3">
        <NavLink
          to={item.href}
          className={linkClassName}
        >
          {item.label}
        </NavLink>
        {hasChildren && (
          <button
            type="button"
            className="flex h-5 w-5 shrink-0 items-center justify-center text-text-secondary"
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label}`}
            onClick={() => setIsExpanded((expanded) => !expanded)}
          >
            <SidebarChevron expanded={isExpanded} />
          </button>
        )}
      </div>
      {hasChildren && isExpanded && <SidebarSectionItems items={item.children} nested />}
    </div>
  );
}

SidebarSectionItem.propTypes = {
  item: sidebarSectionItemPropType.isRequired,
  nested: PropTypes.bool.isRequired,
};

export function SidebarSection({ title, items, className = '' }) {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className={['flex w-full flex-col gap-6 bg-transparent', className].filter(Boolean).join(' ')}
    >
      <h2 id={headingId} className="px-2 text-sm font-medium text-text-secondary">
        {title}
      </h2>
      <SidebarSectionItems items={items} />
    </section>
  );
}

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(sidebarSectionItemPropType).isRequired,
  className: PropTypes.string,
};
