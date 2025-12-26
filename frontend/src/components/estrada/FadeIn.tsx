import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useMemo, useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type FadeInProps = {
  children: ReactNode;
  delayMs?: number;
  direction?: Direction;
  className?: string;
};

const getOffset = (direction: Direction) => {
  switch (direction) {
    case "down":
      return { x: 0, y: -24 };
    case "left":
      return { x: 24, y: 0 };
    case "right":
      return { x: -24, y: 0 };
    case "none":
      return { x: 0, y: 0 };
    case "up":
    default:
      return { x: 0, y: 24 };
  }
};

export const FadeIn = ({ children, delayMs = 0, direction = "up", className }: FadeInProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { margin: "-10% 0px", once: true });

  const offset = useMemo(() => getOffset(direction), [direction]);
  const initial = prefersReducedMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset };
  const animate = prefersReducedMotion
    ? { opacity: 1, x: 0, y: 0 }
    : isInView
      ? { opacity: 1, x: 0, y: 0 }
      : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.9, ease: "easeOut", delay: delayMs / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
