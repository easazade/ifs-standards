/**
 * GSAP + @gsap/react: `useGSAP(fn, { scope: containerRef })` only scopes selectors like `.dot`
 * if you pass `ref={containerRef}` on a wrapper — otherwise `scope.current` is null and tweens no-op.
 * `repeat: -1` on a timeline = infinite loop (Flutter: repeat with no limit).
 */
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

function useAnimation(target, container, to, back) {
  useGSAP(
    () => {
      const timeline = gsap.timeline({ repeat: -1 });

      timeline
        .to(target, {
          scale: 1.1,
          opacity: 0.9,
          duration: 0.5,
          ...to,
          stagger: { each: 0.12, from: 'start' },
          ease: 'sine.out',
        })
        .to(target, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ...back,
          stagger: { each: 0.12, from: 'start' },
          ease: 'sine.in',
        })
        .to(target, {
          duration: 1,
        });
    },
    { scope: container }
  );
}

function AnimatedLogo() {
  const container = useRef(null);
  useAnimation('.dot1', container, { left: 20 }, { left: 0 });
  useAnimation('.dot2', container, { top: 20 }, { top: 0 });
  useAnimation('.dot3', container, { right: 20 }, { right: 0 });
  useAnimation('.dot4', container, { bottom: 20 }, { bottom: 0 });

  return (
    <div ref={container} className="relative h-10 w-10">
      <span className="dot1 absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-text" />
      <span className="dot2 absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-text" />
      <span className="dot3 absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-text" />
      <span className="dot4 absolute bottom-0 left-0 h-1.5 w-1.5 rounded-full bg-text" />
    </div>
  );
}

export default AnimatedLogo;
