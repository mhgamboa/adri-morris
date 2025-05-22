"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bookkeepingImage from "@/assets/images/bookkeeping.png";
import consultingImage from "@/assets/images/consulting.jpg";
import coachingImage from "@/assets/images/coaching.jpg";
import bookkeepingCoaching from "@/assets/images/bookkeeping-coaching.png";

const data = [
  {
    title: "Bookkeeping",
    description:
      "Let me handle your books so that you can run your business! I offer bookkeeping services for businesses of all sizes to make the financial side of things painless and easy.",
    image: bookkeepingImage,
  },
  {
    title: "Consulting",
    description:
      "Your bookkeeping is in place - but what comes next? Together we will do an in-depth review of your business financials, helping you make sense of your numbers. I'll help you boost your financial IQ so that you feel comfortable utilizing your financial reports on your own. ",
    image: consultingImage,
  },
  {
    title: "Profit For Keeps® Coaching",
    description:
      "Financial coaching to build a life — not just a business. Going beyond understanding your business financials, we will take a deep look at the lifestyle you want and how your business will get you there using the Profit For Keeps system. ",
    image: coachingImage,
  },
  {
    title: "Coaching for Bookkeepers",
    description:
      "You've built up a clientele, great processes, and maybe even a team. You work with your clients' finances every day, now it's time to go a little deeper with your own. Together we will build a clear picture of the lifestyle you want, and roadmap to get there using the Profit For Keeps system.",
    image: bookkeepingCoaching,
  },
];

export default function Services() {
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
  const servicesControls = useAnimation();
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ctaControls = useAnimation();
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Start animations when sections come into view
  useEffect(() => {
    if (servicesInView) servicesControls.start("visible");
    if (ctaInView) ctaControls.start("visible");
  }, [servicesInView, ctaInView, servicesControls, ctaControls]);

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
              My <span className="font-serif italic text-blue-700">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Tailored solutions to help you achieve personal and professional growth.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        className="py-16"
        ref={servicesRef}
        initial="hidden"
        animate={servicesControls}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {data.map((service, index) => (
              <motion.div
                key={index}
                className="group flex flex-col justify-between"
                custom={index}
                variants={cardVariants}
              >
                <div className="relative h-64 mb-6 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Button
                  asChild
                  className="bg-blue-700 hover:bg-blue-800 text-white rounded-none px-6 py-2 mt-2"
                >
                  <a
                    href="https://calendly.com/adri-incite/30min-meet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Discovery Call
                  </a>
                </Button>
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
            Ready to <span className="font-serif italic text-teal-200">Begin Your Journey</span>?
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
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-100 rounded-none px-10"
            >
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
    </main>
  );
}
