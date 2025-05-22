"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import adriPortrait from "@/assets/images/adri-portrait.jpg";

export default function About() {
  // Animation variants
  const heroVariants: Variants = {
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * custom,
        ease: "easeOut",
      },
    }),
  };

  // Section animations
  const bioControls = useAnimation();
  const [bioRef, bioInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const philosophyControls = useAnimation();
  const [philosophyRef, philosophyInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const ctaControls = useAnimation();
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Start animations when sections come into view
  useEffect(() => {
    if (bioInView) bioControls.start("visible");
    if (philosophyInView) philosophyControls.start("visible");
    if (ctaInView) ctaControls.start("visible");
  }, [bioInView, philosophyInView, ctaInView, bioControls, philosophyControls, ctaControls]);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <motion.section
        className="py-16 bg-blue-50"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="font-serif italic text-blue-700">About</span>
            </motion.h1>
          </div>
        </div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        className="py-16"
        ref={bioRef}
        initial="hidden"
        animate={bioControls}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div className="relative h-[600px]" variants={imageVariants}>
              <Image
                src={adriPortrait}
                alt="Adri Morris"
                fill
                className="object-cover object-top"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={bioControls}
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.3 },
                },
              }}
            >
              <h2 className="text-3xl font-light mb-6 text-blue-700">Hi, I'm Adri.</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  With over 20 years of experience in accounting and bookkeeping — and as a business
                  owner myself — I understand how powerful it is to be able to hand off your
                  financial to-dos to someone you trust.{" "}
                  <i>
                    Someone who gets the details right, every time, and sees the big picture too.
                  </i>
                </p>
                <p>
                  But here's the thing: even with all my experience helping hundreds of clients, I
                  used to feel anxious about my own finances. My go-to strategy? Avoidance.
                  (Spoiler: it doesn't work.)
                </p>
                <p>
                  Everything started to change when I found the Profit First system. It gave me
                  structure — but it wasn&apos;t until I discovered Profit For Keeps that things
                  really clicked. It helped me not just get clear on my numbers, but connect them to
                  the life I actually wanted to live.
                </p>
                <p>
                  That transformation is what fuels my work today. I'm here to help business owners
                  build sustainable, profitable businesses — and more importantly, lives that feel{" "}
                  <b className="text-blue-700">aligned, empowered, and free</b>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        className="py-16 bg-gray-50"
        ref={philosophyRef}
        initial="hidden"
        animate={philosophyControls}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 shadow-sm"
                custom={index}
                variants={cardVariants}
              >
                <h3 className="text-xl font-medium mb-4 text-teal-700">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-blue-700 text-white"
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
            Ready to <span className="font-serif italic text-teal-200">Work Together</span>?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 },
              },
            }}
          >
            Let's connect and discuss how I can help you achieve your personal and professional
            goals.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              },
            }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-100 rounded-none px-8"
            >
              <Link prefetch={false} href="/contact">
                Get in Touch
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-teal-600 text-white border-teal-500 hover:bg-teal-700 rounded-none px-8"
            >
              <a
                href="https://calendly.com/adri-incite/30min-meet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Call
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
