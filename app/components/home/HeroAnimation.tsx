"use client";

import { type Variants } from "framer-motion";

export const HeroAnimation: {
  heroTextVariants: Variants;
  heroImageVariants: Variants;
  buttonVariants: Variants;
} = {
  heroTextVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },

  heroImageVariants: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  },

  buttonVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5 + custom * 0.1,
        ease: "easeOut",
      },
    }),
  },
} as const;
