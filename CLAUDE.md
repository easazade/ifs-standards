# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs Vite dev server)
- **Build for production**: `npm run build` (creates optimized build in `dist/`)
- **Preview production build**: `npm run preview` (serves the built app locally)
- **Lint code**: `npm run lint` (runs ESLint on all files)
- **Format code**: `npm run format` (formats with Prettier)
- **Clean dependencies**: `npm run clean` (removes node_modules and package-lock.json)

## Project Structure

- **Entry point**: `src/main.jsx` - sets up React app with BrowserRouter and StrictMode
- **Main component**: `src/App.jsx` - defines application routes using react-router-dom
- **Layouts**: `src/layouts/MainLayout.jsx` - provides consistent page layout with Navbar and Sidebar
- **Pages**: Located in `src/pages/` - each page corresponds to a route
  - `HomePage.jsx` - main landing page
  - `AboutPage.jsx` - informational page
  - `ProtocolPage.jsx` - displays protocol details
  - `PageNotFound.jsx` - 404 error page
- **Components**: Located in `src/components/` - reusable UI elements
  - `Navbar.jsx` - navigation header
  - `Sidebar.jsx` - side navigation menu
  - `AnimatedLogo.jsx` - animated logo component
- **Data**: `src/data/protocols.js` - contains protocol data used throughout the app
- **Routing**: `src/routes.js` - defines application routes and their corresponding components
- **Public assets**: `public/` - static assets served directly
- **Styles**: Uses Tailwind CSS configured via `vite.config.js` and `@tailwindcss/vite`

## Architecture Overview

This is a single-page React application using:
- **React 19** with functional components and hooks
- **React Router DOM v7** for client-side routing
- **Tailwind CSS v4** for utility-first styling
- **Vite** as the build tool and development server
- **GSAP** for animations (via `@gsap/react` and `gsap` packages)

The app follows a conventional structure where:
1. Routes are defined in `src/routes.js` and imported in `App.jsx`
2. Layout components wrap page content to provide consistent UI
3. Pages fetch data from `src/data/protocols.js` as needed
4. Reusable components are composed to build page interfaces

## Cursor Rules

See `.cursor/rules/teach-me-react-and.mdc` for project-specific Cursor IDE guidelines.

## Notes

- The project uses ES modules (`"type": "module"` in package.json)
- ESLint configuration is in `.eslintrc` and `eslint.config.js`
- Prettier configuration is in `.prettierrc`
- Vite configuration is in `vite.config.js`