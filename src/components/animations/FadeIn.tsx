"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: shouldReduceMotion ? 0 : delay,
        type: "spring",
        bounce: shouldReduceMotion ? 0 : 0.5,
        duration: shouldReduceMotion ? 0 : 0.8,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
