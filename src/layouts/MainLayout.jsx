/**
 * Layout route: shared chrome with <Outlet /> for nested routes. Spacing/layout via Tailwind utilities.
 */
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export function MainLayout({ showSideBar = true }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Navbar />
      <div className="flex min-h-0 flex-1">
        {showSideBar ? <Sidebar /> : null}
        <main className="min-h-0 flex-1 overflow-auto p-5 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
