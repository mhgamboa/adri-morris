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
  custom?: number; // Technically can be any type, but I only use numbers
}

export default function MotionDiv({
  children,
  className,
  initial,
  animate,
  transition,
  variants,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
