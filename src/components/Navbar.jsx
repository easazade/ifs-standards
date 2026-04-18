/**
 * Top app bar. NavLink `className` receives { isActive } — idiomatic with Tailwind variants.
 */
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes.js';
import AnimatedLogo from './AnimatedLogo.jsx';

const navLinkClass = ({ isActive }) =>
  [
    'rounded-md px-2 py-1 text-text transition-colors',
    isActive ? 'font-semibold underline decoration-text underline-offset-4' : 'hover:bg-surface-muted',
  ].join(' ');

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 flex h-[64px] shrink-0 items-center justify-between border-b border-divider-medium bg-surface px-5">
      <div className="flex items-center gap-2">
        <AnimatedLogo />
        <h1 className="font-bold text-primary">IFS Standards</h1>
      </div>
      <nav className="flex gap-4" aria-label="Primary">
        <NavLink to={ROUTES.HOME} end className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to={ROUTES.PROTOCOL} className={navLinkClass}>
          Protocols
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={navLinkClass}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
