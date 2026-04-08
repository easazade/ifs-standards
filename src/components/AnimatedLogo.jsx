/**
 * GSAP + @gsap/react: `useGSAP(fn, { scope: containerRef })` only scopes selectors like `.dot`
 * if you pass `ref={containerRef}` on a wrapper — otherwise `scope.current` is null and tweens no-op.
 * `repeat: -1` on a timeline = infinite loop (Flutter: repeat with no limit).
 */
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

function AnimatedLogo() {
  const container = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({ repeat: -1 });

      timeline
        .to('.dot', {
          scale: 1.75,
          opacity: 0.9,
          duration: 0.5,
          x: 100,
          stagger: { each: 0.12, from: 'start' },
          ease: 'sine.out',
        })
        .to('.dot', {
          scale: 1,
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: { each: 0.12, from: 'start' },
          ease: 'sine.in',
        });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative h-10 w-10">
      <span className="dot absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-text" />
      <span className="dot absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-text" />
      <span className="dot absolute bottom-0 left-0 h-1.5 w-1.5 rounded-full bg-text" />
      <span className="dot absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-text" />
    </div>
  );
}

export default AnimatedLogo;
