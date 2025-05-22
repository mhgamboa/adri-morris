"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import adriIllustrated from "@/assets/images/adri-illustrated.png";

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

export function About() {
  const aboutControls = useAnimation();
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  if (aboutInView) {
    aboutControls.start("visible");
  }

  return (
    <motion.section
      className="py-24 bg-white"
      ref={aboutRef}
      initial="hidden"
      animate={aboutControls}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-8 sm:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={aboutControls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Hello, I'm <span className="font-serif italic text-blue-700">Adri</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 20 years of experience in accounting and bookkeeping, I know how valuable it
              is to have someone you can trust with your numbers. Someone who handles the details
              with care and keeps the big picture in mind.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Today, I combine that expertise with{" "}
              <b className="text-blue-700">Profit For Keeps&reg;</b> coaching to help entrepreneurs
              build businesses that are not just profitable, but truly aligned with the lives they
              want to live.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={aboutControls}
              variants={{
                visible: {
                  opacity: 1,
                  transition: { delay: 0.6 },
                },
              }}
            >
              <Button asChild className="bg-blue-700 hover:bg-blue-800 rounded-none px-8">
                <Link prefetch={false} href="/about">
                  Learn More About Me
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={aboutControls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.7, delay: 0.3 },
              },
            }}
          >
            <Image src={adriIllustrated} alt="Adri Morris" fill className="object-contain" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
