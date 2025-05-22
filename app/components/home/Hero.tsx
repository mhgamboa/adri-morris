"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import adriPortrait from "@/assets/images/adri-portrait.jpg";

const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const heroImageVariants: Variants = {
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
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + custom * 0.1,
      ease: "easeOut",
    },
  }),
};

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Hero Image on Mobile (Shown First) */}
          <motion.div
            className="order-2 md:order-2 relative h-[400px] md:h-[600px] mx-auto w-full flex justify-center"
            initial="hidden"
            animate="visible"
            variants={heroImageVariants}
          >
            <div className="relative h-[400px] w-full max-w-sm md:max-w-none md:h-[600px]">
              <Image
                src={adriPortrait}
                alt="Adri Morris"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="order-1 md:order-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 mb-6">
              <span className="font-serif italic text-blue-700">Profit</span> with purpose.
              <br />
              Numbers with heart.
              <br />A roadmap to the life you actually want.
            </h1>
            <motion.p
              className="text-lg text-gray-700 mb-8 lg:max-w-xl"
              variants={heroTextVariants}
            >
              No more financial roller-coaster. Just a clear path forward.
            </motion.p>
            <div className="flex flex-col md:flex-row gap-4">
              <motion.div variants={buttonVariants} custom={0} initial="hidden" animate="visible">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-700 text-white hover:bg-blue-800 rounded-none px-8"
                >
                  <Link prefetch={false} href="/services">
                    Explore Services
                  </Link>
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants} custom={1} initial="hidden" animate="visible">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-blue-700 border-blue-700 hover:bg-blue-50 rounded-none px-8"
                >
                  <Link prefetch={false} href="/about">
                    About Me
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
