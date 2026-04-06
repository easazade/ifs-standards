/**
 * Route-level view for “/”. Typography via Tailwind utility classes on the markup.
 */
export function HomePage() {
  return (
    <article className="max-w-2xl space-y-3 text-slate-800">
      <h1 className="mt-0 text-2xl font-semibold tracking-tight text-slate-900">
        Home
      </h1>
      <p className="leading-relaxed">
        Welcome. Use the top bar or sidebar to navigate.
      </p>
    </article>
  )
}
