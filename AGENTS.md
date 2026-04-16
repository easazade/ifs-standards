# AGENTS.md

## Commands

- `npm run dev` - Start Vite dev server
- `npm run build` - Production build to `dist/`
- `npm run preview` - Serve production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier

## Source of truth
- Product feature requirements live in `specs/<feature>/<requirement-type>.md`. 
  - requirement can be types are usually `ui`, `data`, `logic` or etc
- UI rules live in `DESIGN.md`
- Design files live in `design/` as .pen files created by pencil.dev which is a design as code tool. design files can be modified via pencil mcp by agents they must follow `DESIGN.md` guidelines

## Key Files

- **Entry**: `src/main.jsx` - React app with BrowserRouter
- **Routes**: `src/routes.js` - Route definitions
- **Data**: `src/data/protocols.js` - Protocol data source
- **Layout**: `src/layouts/MainLayout.jsx` - Navbar + Sidebar wrapper

## Notes

- Tailwind v4 uses `@tailwindcss/vite` plugin (not the old postcss approach)
- GSAP animations via `@gsap/react` hook
- No tests configured