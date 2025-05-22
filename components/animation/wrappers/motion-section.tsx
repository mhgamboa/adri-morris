"use client";
// This wrapper is used to preserve SEO for the page
import {
  motion,
  AnimationProps,
  Transition,
  VariantLabels,
  Variants,
  useAnimation,
} from "framer-motion";
import { RefCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  className?: string;
  initial?: AnimationProps["initial"] | VariantLabels;
  animate?: AnimationProps["animate"] | VariantLabels;
  transition?: Transition;
  variants?: Variants;
  ref?: RefCallback<HTMLElement> | React.RefObject<HTMLElement>;
  useIntersectionObserver?: boolean;
  threshold?: number;
}

export default function MotionSection({
  children,
  useIntersectionObserver = false,
  threshold = 0.2,
  ...props
}: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  useEffect(() => {
    if (inView && useIntersectionObserver) {
      controls.start("visible");
    }
  }, [inView, controls, useIntersectionObserver]);

  return (
    <motion.section
      ref={useIntersectionObserver ? ref : props.ref}
      animate={useIntersectionObserver ? controls : props.animate}
      {...props}
    >
      {children}
    </motion.section>
  );
}
