/**
 * Small logo mark only — no h-screen: parent (e.g. HomePage) owns vertical centering inside <main>.
 */
function AnimatedLogo() {
  return (
    <div className="relative h-10 w-10">
      <span className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-black" />
      <span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-black" />
      <span className="absolute bottom-0 left-0 h-1.5 w-1.5 rounded-full bg-black" />
      <span className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-black" />
    </div>
  );
}

export default AnimatedLogo;
