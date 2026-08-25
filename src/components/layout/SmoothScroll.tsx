"use client";

import Lenis from "lenis";
import type { ReactNode } from "react";
import { useEffect } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return undefined;
    }

    const lenis = new Lenis({
      anchors: true,
      autoRaf: false,
      lerp: 0.09,
      smoothWheel: true,
    });

    let frameId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return children;
}
