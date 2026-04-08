function AnimatedLogo() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-10 h-10">
        <span className="absolute w-1.5 h-1.5 bg-black rounded-full top-0 left-0"></span>
        <span className="absolute w-1.5 h-1.5 bg-black rounded-full top-0 right-0"></span>
        <span className="absolute w-1.5 h-1.5 bg-black rounded-full bottom-0 left-0"></span>
        <span className="absolute w-1.5 h-1.5 bg-black rounded-full bottom-0 right-0"></span>
      </div>
    </div>
  );
}

export default AnimatedLogo;
