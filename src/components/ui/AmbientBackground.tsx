"use client";

import { useEffect } from "react";

export function AmbientBackground() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return undefined;
    }

    let frameId: number | null = null;

    const updateScrollShift = () => {
      frameId = null;
      document.documentElement.style.setProperty(
        "--ambient-scroll-shift",
        `${window.scrollY * 0.08}px`,
      );
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = requestAnimationFrame(updateScrollShift);
      }
    };

    updateScrollShift();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
      document.documentElement.style.removeProperty("--ambient-scroll-shift");
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background"
    >
      <div className="map-grid ambient-grid absolute inset-0 opacity-80" />
      <div className="ambient-line-field absolute inset-[-22%] opacity-100" />
      <div className="ambient-scan absolute -left-1/4 top-[34%] h-px w-[150%]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgb(200_111_82_/_0.08),transparent_22rem),radial-gradient(circle_at_80%_30%,rgb(217_155_130_/_0.08),transparent_24rem)]" />
      <div className="absolute -left-40 -top-40 size-[30rem] rounded-full bg-accent/10 blur-[140px]" />
      <div className="absolute -right-40 top-[20%] size-[32rem] rounded-full bg-accent-warm/10 blur-[140px]" />
    </div>
  );
}
