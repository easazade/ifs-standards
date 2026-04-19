import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useId, useState } from 'react';

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

function SidebarSectionItems({ items, nested = false }) {
  return (
    <ul
      className={[
        'm-0 list-none space-y-1 p-0',
        nested ? 'ml-2 border-l border-border pl-4' : '',
      ].join(' ')}
    >
      {items.map((item) => {
        const hasChildren = item.children?.length > 0;

        return (
          <li key={`${item.href}-${item.label}`} className="bg-transparent">
            <SidebarSectionItem item={item} hasChildren={hasChildren} nested={nested} />
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

function SidebarSectionItem({ item, hasChildren, nested }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="group flex flex-col bg-transparent">
      <div className="flex items-center justify-between py-1">
        <NavLink
          to={item.href}
          className={({ isActive }) =>
            [
              'text-sm transition-colors',
              isActive ? 'font-medium text-primary' : 'text-text hover:text-primary',
              nested ? '' : 'text-[15px]',
            ].join(' ')
          }
        >
          {item.label}
        </NavLink>
        {hasChildren && (
          <button
            type="button"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-surface-primary hover:text-text"
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label}`}
            onClick={() => setIsExpanded((expanded) => !expanded)}
          >
            <svg
              className={[
                'h-4 w-4 transition-transform duration-200',
                isExpanded ? 'rotate-180' : 'rotate-0',
              ].join(' ')}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}
      </div>
      {hasChildren && isExpanded && (
        <div className="mt-1">
          <SidebarSectionItems items={item.children} nested />
        </div>
      )}
    </div>
  );
}

SidebarSectionItem.propTypes = {
  item: sidebarSectionItemPropType.isRequired,
  hasChildren: PropTypes.bool.isRequired,
  nested: PropTypes.bool.isRequired,
};

export function SidebarSection({ title, items, className = '' }) {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className={['flex w-full flex-col gap-3 bg-transparent', className].filter(Boolean).join(' ')}
    >
      <h2
        id={headingId}
        className="text-xs font-medium tracking-tight text-text-secondary uppercase px-1"
      >
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
