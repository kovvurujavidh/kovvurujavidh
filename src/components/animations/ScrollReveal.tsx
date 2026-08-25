"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        scale: shouldReduceMotion ? 1 : 0.94,
        y: shouldReduceMotion ? 0 : 28,
        rotate: shouldReduceMotion ? 0 : -1,
      }}
      whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        type: "spring",
        bounce: shouldReduceMotion ? 0 : 0.5,
        duration: shouldReduceMotion ? 0 : 0.9,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
