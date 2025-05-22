"use client";

import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Testimonial() {
  const testimonialControls = useAnimation();
  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  if (testimonialInView) {
    testimonialControls.start("visible");
  }

  return (
    <motion.section
      className="py-24 bg-blue-700 text-white"
      ref={testimonialRef}
      initial="hidden"
      animate={testimonialControls}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          What <span className="font-serif italic text-teal-200">Clients Say</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.blockquote
            className="text-xl md:text-2xl font-light italic mb-8"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
          >
            "Working with Adri has been transformative. Her guidance helped me navigate a difficult
            career transition and find a path that truly aligns with my values and goals."
          </motion.blockquote>
          <motion.div
            className="font-medium"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.4 },
              },
            }}
          >
            — Sarah Johnson, Marketing Executive
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
