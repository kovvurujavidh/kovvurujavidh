"use client";

import { motion, useReducedMotion } from "framer-motion";

const graphPath =
  "M 0 292 C 82 282, 96 236, 170 250 S 264 302, 326 232 S 430 172, 494 208 S 578 278, 646 190 S 752 108, 812 154 S 900 224, 964 132 S 1080 80, 1200 28";

export function DataGraph() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-20 right-[-18%] z-0 h-[68%] w-[125%] text-accent opacity-10 sm:right-[-10%] sm:w-[115%] sm:opacity-15 lg:inset-y-12 lg:right-[-4%] lg:h-[78%] lg:w-[105%] lg:opacity-20"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1200 420"
    >
      <defs>
        <linearGradient id="data-graph-line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.2" stopColor="currentColor" />
          <stop offset="1" stopColor="#d99b82" />
        </linearGradient>
        <filter id="data-graph-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur result="blur" stdDeviation="5" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        className="data-graph-flow"
        d={graphPath}
        pathLength="1"
        stroke="currentColor"
        strokeDasharray="0.02 0.04"
        strokeDashoffset="0"
        strokeLinecap="round"
        strokeOpacity="0.6"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <motion.path
        animate={{ opacity: 1, pathLength: 1 }}
        d={graphPath}
        filter="url(#data-graph-glow)"
        initial={false}
        stroke="url(#data-graph-line)"
        strokeLinecap="round"
        strokeWidth="3"
        transition={{
          duration: shouldReduceMotion ? 0 : 2.4,
          ease: "easeOut",
          opacity: { duration: shouldReduceMotion ? 0 : 0.4 },
        }}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
