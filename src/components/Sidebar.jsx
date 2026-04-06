/**
 * Section nav: NavLink + Tailwind for active vs idle states (no inline style objects).
 */
import { NavLink } from 'react-router-dom'
import { PROTOCOLS } from '../data/protocols'
import { ROUTES } from '../routes.js'

const protocolLinkClass = ({ isActive }) =>
  [
    'block rounded-md px-2 py-1.5 text-sm text-slate-800 transition-colors',
    isActive ? 'bg-blue-50 font-semibold text-blue-950' : 'hover:bg-slate-100',
  ].join(' ')

export function Sidebar() {
  return (
    <aside
      className="w-60 shrink-0 border-r border-slate-200 bg-white p-4"
      aria-label="Section navigation"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-500">
        Protocols
      </p>
      <ul className="m-0 list-none space-y-1 p-0">
        {PROTOCOLS.map((p) => (
          <li key={p.id}>
            <NavLink
              to={`${ROUTES.PROTOCOL_DETAIL(p.id)}`}
              className={protocolLinkClass}
            >
              {p.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}
