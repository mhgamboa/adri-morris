"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import MotionDiv from "@/components/animation/wrappers/motion-div";

const sectionVariants = {
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 * custom,
      ease: "easeOut",
    },
  }),
};

const philosophyCards = [
  {
    title: "Authenticity",
    description:
      "I create a safe space for you to explore your authentic self and build from there.",
  },
  {
    title: "Balance",
    description:
      "Success isn't sustainable without balance. With the Profit for Keeps® system, we will look at both your business and personal finances to create your ideal lifestyle.",
  },
  {
    title: "Continuous Growth",
    description:
      "Development is a journey, not a destination. I provide tools and support for ongoing evolution, both personal and professional.",
  },
];

export default function PhilosophySection() {
  const philosophyControls = useAnimation();
  const [philosophyRef, philosophyInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (philosophyInView) philosophyControls.start("visible");
  }, [philosophyInView, philosophyControls]);

  return (
    <motion.section
      className="py-16 bg-gray-50"
      ref={philosophyRef}
      initial="hidden"
      animate={philosophyControls}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <MotionDiv
          className="max-w-3xl mx-auto text-center mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          <h2 className="text-3xl font-light mb-6">My Philosophy</h2>
          <p className="text-lg text-gray-700">
            I believe in a holistic approach to personal and professional development that honors
            your unique journey while providing practical tools for growth.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {philosophyCards.map((item, index) => (
            <MotionDiv
              key={index}
              className="bg-white p-8 shadow-sm"
              custom={index}
              variants={cardVariants}
            >
              <h3 className="text-xl font-medium mb-4 text-teal-700">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
