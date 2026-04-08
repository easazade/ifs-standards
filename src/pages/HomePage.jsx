import AnimatedLogo from '../components/AnimatedLogo.jsx';

/**
 * Route-level view for “/”. Typography via Tailwind utility classes on the markup.
 */
export function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AnimatedLogo />
    </div>
    // <article className="max-w-2xl space-y-3 text-text">
    //   <h1 className="mt-0 text-2xl font-semibold tracking-tight text-text">Home</h1>
    //   <p className="leading-relaxed">Welcome. Use the top bar or sidebar to navigate.</p>
    // </article>
  );
}
