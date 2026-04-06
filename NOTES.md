# Learning notes — React & this project

## Table of contents

- [Naming & folder conventions](#naming--folder-conventions)
- [Tailwind CSS in this Vite project](#tailwind-css-in-this-vite-project)
- [Shared chrome: layout routes and `<Outlet />`](#shared-chrome-layout-routes-and-outlet-)
- [React Router building blocks](#react-router-building-blocks)
- [Dynamic routes and `useParams`](#dynamic-routes-and-useparams)
- [Navigation components: `Link` vs `NavLink`](#navigation-components-link-vs-navlink)
- [Flutter → React mental model](#flutter--react-mental-model)

---

## Naming & folder conventions

- **Route-level components** in web React are usually called **`*Page`** (e.g. `HomePage`, `AboutPage`). **`*Screen`** is common in **React Native**, not wrong on web, but **`*Page`** is the more typical web convention.
- **File names** usually **match the component** and use **PascalCase**: `HomePage.jsx` exporting `HomePage`. Some teams use `home-page.jsx` with a default export; both exist, but **PascalCase file = PascalCase component** is widely recognized.
- **Folders**: common patterns are `src/pages/`, `src/components/`, `src/layouts/`. You can group a page with its hooks as `pages/HomePage/index.jsx`; for small apps, **flat** `pages/HomePage.jsx` is fine.
- **Data / config**: `src/data/protocols.js` holds static lists or API helpers—keeps routes thin.

---

## Tailwind CSS in this Vite project

- **Stack**: **Tailwind v4** with the official **`@tailwindcss/vite`** plugin (see `vite.config.js`). This is a common setup for **Vite** projects: one plugin, no separate PostCSS config file unless you need it.
- **Entry CSS**: `src/index.css` uses **`@import "tailwindcss"`** — that pulls in **Preflight** (opinionated reset), the design tokens, and **utility classes**.
- **Usage in React**: Put **utility classes** on **`className`**. Prefer **composition** on the element over global CSS for layout components. For **`NavLink`**, the prop **`className`** can be a **function** `({ isActive }) => string` — that pairs well with Tailwind for active styles.
- **Optional extras** (not installed here): **`clsx`** / **`tailwind-merge`** help merge conditional class strings; many teams add them when class logic gets noisy.

---

## Shared chrome: layout routes and `<Outlet />`

- In Flutter you might use a **base page** / shell widget. In React Router v6, the usual pattern is a **layout route**: a component that renders **shared UI** (navbar, sidebar) and a **child slot** via **`<Outlet />`**.
- **Do not** import the sidebar into every page. Define **one** layout component (`MainLayout`) and nest routes under it so each page only supplies the **main** content.
- **Benefit**: one place to change shell behavior; pages stay focused on their content.

---

## React Router building blocks

- **`BrowserRouter`** (in `main.jsx`): wraps the app so routing uses the **browser history** (URLs like `/about`, not only hash URLs).
- **`Routes` / `Route`**: declarative map from **URL paths** to **elements** (components).
- **Index route**: `<Route index element={<HomePage />} />` means “**default child**” of the parent path—here, **`/`** when the parent layout has no extra path segment.
- **Layout route**: a `<Route>` with **`element={<MainLayout />}`** and **nested** `<Route>` children. The parent renders; the matching child renders **inside** `<Outlet />`.
- **Catch-all / 404**: `<Route path="*" element={...} />` matches anything unmatched; here it **redirects** home with `<Navigate replace />`.

---

## Dynamic routes and `useParams`

- A path like **`/protocol/:protocolId`** declares a **dynamic segment**. The name after `:` is the **param key**.
- In the page component, **`useParams()`** returns an object, e.g. `{ protocolId: 'ifs-food' }`, so you can load or look up data for that id.

---

## Navigation components: `Link` vs `NavLink`

- **`Link`**: navigates without full page reload; use for inline links (e.g. “Back home”).
- **`NavLink`**: same as `Link`, but can style the **active** route (e.g. via `className` or `style` callback with `isActive`). Good for **menus** and **sidebars**.

---

## Flutter → React mental model

| Flutter idea       | React Router idea                                                       |
| ------------------ | ----------------------------------------------------------------------- |
| Base page / shell  | Layout route + `<Outlet />`                                             |
| Named route + args | Path params (`:id`) + `useParams`, or query (`?q=`) + `useSearchParams` |
| Navigator.push     | `<Link>` / `useNavigate()`                                              |
