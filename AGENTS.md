# AGENTS.md

## About IFS (Individual Freedom System)

**System Philosophy:** The IFS is a "Servant-Architecture" for governance. It operates on the principle that sovereignty is non-transferable. Power resides permanently with the individual and is only temporarily delegated to roles or entities.

**Dynamic Role Delegation:** Unlike static elected terms, IFS enables Real-time Authority Revocation. Users do not "elect" leaders; they assign specific responsibilities to "Stewards" whose permissions can be modified or terminated instantly by the affected collective.

**Proportional Governance (The Scope Rule):** Decision-making power is strictly limited to the affected radius. If a decision impacts a town, only that town's participants possess the voting keys. If it impacts a nation, the keys scale accordingly.

**Radical Transparency & Fiscal Agency:** Every resource flow is indexed and public. "Taxation" is replaced by Direct Resource Allocation—users do not pay into a black box; they programmatically direct their contributions to specific services and can audit every transaction in real-time.

## About This Project:

**IFS Standards:** This repository defines schemas, protocols, rules for Dynamic Consent, Asset Traceability, and Modular Rule-Setting, providing the protocols to instantiate a friction-less, transparent society. These Standards can be used and followed to implement a software system.

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