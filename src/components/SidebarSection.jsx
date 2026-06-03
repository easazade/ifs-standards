import PropTypes from 'prop-types';
import { useId, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const cx = (...classes) => classes.filter(Boolean).join(' ');

function validateItems(items, componentName, propFullName) {
  if (!Array.isArray(items)) {
    return new Error(`${componentName}: ${propFullName} must be an array.`);
  }
  for (const [i, item] of items.entries()) {
    const path = `${propFullName}[${i}]`;
    if (!item || typeof item !== 'object' || Array.isArray(item))
      return new Error(`${componentName}: ${path} must be an object.`);
    if (typeof item.label !== 'string' || !item.label.trim())
      return new Error(`${componentName}: ${path}.label must be a non-empty string.`);
    if (typeof item.href !== 'string' || !item.href.trim())
      return new Error(`${componentName}: ${path}.href must be a non-empty string.`);
    if ('children' in item) {
      const err = validateItems(item.children, componentName, `${path}.children`);
      if (err) return err;
    }
  }
  return null;
}

const itemPropType = PropTypes.exact({
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children(props, propName, componentName, _location, propFullName) {
    if (!(propName in props) || props[propName] == null) return null;
    return validateItems(props[propName], componentName, propFullName ?? propName);
  },
});

function itemContainsPath(item, pathname) {
  return item.href === pathname || item.children?.some((child) => itemContainsPath(child, pathname));
}

function SidebarChevron({ expanded }) {
  return (
    <svg
      className={cx('h-3.5 w-3.5 transition-transform duration-150', expanded && 'rotate-90')}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

SidebarChevron.propTypes = { expanded: PropTypes.bool.isRequired };

function SidebarSectionItems({ items, nested = false }) {
  return (
    <ul className={cx('m-0 flex list-none flex-col p-0', nested && 'pl-4')}>
      {items.map((item) => (
        <li key={`${item.href}-${item.label}`} className="bg-transparent">
          <SidebarSectionItem item={item} nested={nested} />
        </li>
      ))}
    </ul>
  );
}

SidebarSectionItems.propTypes = {
  items: PropTypes.arrayOf(itemPropType).isRequired,
  nested: PropTypes.bool,
};

function SidebarSectionItem({ item, nested }) {
  const { pathname } = useLocation();
  const hasChildren = item.children?.length > 0;
  const hasActiveDescendant = hasChildren && item.children.some((child) => itemContainsPath(child, pathname));
  const [isExpanded, setIsExpanded] = useState(pathname === item.href || hasActiveDescendant);

  const linkClassName = ({ isActive }) =>
    cx(
      'block flex-1 rounded-md px-2 py-1 text-base leading-6 transition-colors hover:bg-surface-primary hover:text-text',
      nested ? 'text-text-secondary' : 'text-text',
      isActive && 'font-medium text-primary underline',
      hasActiveDescendant && !isActive && 'font-medium text-text underline',
    );

  return (
    <div className="flex flex-col gap-1 bg-transparent">
      <div className="flex items-center justify-between gap-3">
        <NavLink to={item.href} className={linkClassName}>
          {item.label}
        </NavLink>
        {hasChildren && (
          <button
            type="button"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-surface-primary hover:text-text"
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label}`}
            onClick={() => setIsExpanded((prev) => !prev)}
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
  item: itemPropType.isRequired,
  nested: PropTypes.bool.isRequired,
};

export function SidebarSection({ title, items, className = '' }) {
  const headingId = useId();
  return (
    <section
      aria-labelledby={headingId}
      className={cx('flex w-full flex-col gap-2 bg-transparent', className)}
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
  items: PropTypes.arrayOf(itemPropType).isRequired,
  className: PropTypes.string,
};
