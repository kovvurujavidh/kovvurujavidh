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
      initial={false}
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
