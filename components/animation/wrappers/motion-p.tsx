"use client";
// This wrapper is used to preserve SEO for the page
import React from "react";
import { motion, AnimationProps, Transition, VariantLabels } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  initial?: AnimationProps["initial"] | VariantLabels;
  animate?: AnimationProps["animate"] | VariantLabels;
  transition?: Transition;
  variants?: AnimationProps["variants"];
  custom?: number;
}

export default function MotionP({
  children,
  className,
  initial,
  animate,
  transition,
  variants,
  custom,
}: Props) {
  return (
    <motion.p
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      variants={variants}
      custom={custom}
    >
      {children}
    </motion.p>
  );
}
