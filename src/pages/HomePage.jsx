import { NavLink } from 'react-router-dom';

/**
 * Route-level view for “/”. Typography via Tailwind utility classes on the markup.
 */
export function HomePage() {
  return (
    <div className="flex min-h-full items-center justify-center">
      <NavLink to="/protocols">Home</NavLink>
    </div>
  );
}
