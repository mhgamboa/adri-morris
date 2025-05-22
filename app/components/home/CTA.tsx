"use client";

import { Button } from "@/components/ui/button";
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

export function CTA() {
  const ctaControls = useAnimation();
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  if (ctaInView) {
    ctaControls.start("visible");
  }

  return (
    <motion.section
      className="py-16 px-10 bg-white"
      ref={ctaRef}
      initial="hidden"
      animate={ctaControls}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          Ready to <span className="font-serif italic text-blue-700">Begin Your Journey</span>?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.5, delay: 0.2 },
            },
          }}
        >
          Take the first step toward personal and professional growth. Schedule a consultation to
          discuss how we can work together.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            },
          }}
        >
          <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 rounded-none px-10">
            <a
              href="https://calendly.com/adri-incite/30min-meet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Consultation
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
