"use client";

import { type Variants } from "framer-motion";

export const ServicesAnimation: {
  motionDivVariants: Variants;
} = {
  motionDivVariants: {
    hidden: { opacity: 0, y: 30 },
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 * custom,
        ease: "easeOut",
      },
    }),
  },
};
