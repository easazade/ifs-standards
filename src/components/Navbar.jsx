/**
 * Top app bar. NavLink `className` receives { isActive } — idiomatic with Tailwind variants.
 */
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes.js';

const navLinkClass = ({ isActive }) =>
  [
    'rounded-md px-2 py-1 text-text transition-colors',
    isActive ? 'font-semibold underline decoration-text underline-offset-4' : 'hover:bg-surface-muted',
  ].join(' ');

export function Navbar() {
  return (
    <header className="flex h-[52px] shrink-0 items-center justify-between border-b border-divider-medium bg-surface px-5">
      <span className="font-bold text-primary">IFS Standards</span>
      <nav className="flex gap-4" aria-label="Primary">
        <NavLink to={ROUTES.HOME} end className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={navLinkClass}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
