"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LineChartIcon } from "lucide-react";
import { toast, Toaster } from "sonner";
import { GrGroup } from "react-icons/gr";
import { MdAttachMoney } from "react-icons/md";
import { TbZoomMoney } from "react-icons/tb";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import adriIllustrated from "@/assets/images/adri-illustrated.png";
import adriPortrait from "@/assets/images/adri-portrait.jpg";

export default function Home() {
  // Hero section animations
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

  // Section animations
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

  // Service card animations
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 * custom,
        ease: "easeOut",
      },
    }),
  };

  // About section animations
  const aboutControls = useAnimation();
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Services section animations
  const servicesControls = useAnimation();
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Testimonial section animations
  const testimonialControls = useAnimation();
  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // CTA section animations
  const ctaControls = useAnimation();
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Start animations when sections come into view
  useEffect(() => {
    if (aboutInView) aboutControls.start("visible");
    if (servicesInView) servicesControls.start("visible");
    if (testimonialInView) testimonialControls.start("visible");
    if (ctaInView) ctaControls.start("visible");
  }, [
    aboutInView,
    servicesInView,
    testimonialInView,
    ctaInView,
    aboutControls,
    servicesControls,
    testimonialControls,
    ctaControls,
  ]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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

      {/* About Preview Section */}
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
                With over 20 years of experience in accounting and bookkeeping, I know how valuable
                it is to have someone you can trust with your numbers. Someone who handles the
                details with care and keeps the big picture in mind.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Today, I combine that expertise with{" "}
                <b className="text-blue-700">Profit For Keeps&reg;</b> coaching to help
                entrepreneurs build businesses that are not just profitable, but truly aligned with
                the lives they want to live.
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

      {/* Services Preview */}
      <motion.section
        className="py-24 bg-blue-50"
        ref={servicesRef}
        initial="hidden"
        animate={servicesControls}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-10">
          <motion.h2
            className="text-3xl md:text-4xl font-light text-center mb-16"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
          >
            How I Can <span className="font-serif italic text-teal-700">Help You</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Bookkeeping",
                description:
                  "Let me handle your books so that you can run your business! I offer bookkeeping services for businesses of all sizes to make the financial side of things painless and easy.",
                icon: MdAttachMoney,
              },
              {
                title: "Consulting",
                description:
                  "Your bookkeeping is in place - but what comes next? Together we will do an in-depth review of your business financials, helping you make sense of your numbers. I'll help you boost your financial IQ so that you feel comfortable utilizing your financial reports on your own. ",
                icon: LineChartIcon,
              },
              {
                title: "Profit For Keeps® Coaching",
                description:
                  "Financial coaching to build a life — not just a business. Going beyond understanding your business financials, we will take a deep look at the lifestyle you want and how your business will get you there using the Profit For Keeps system. ",
                icon: TbZoomMoney,
              },
              {
                title: "Coaching for Bookkeepers",
                description:
                  "You've built up a clientele, great processes, and maybe even a team. You work with your clients' finances every day, now it's time to go a little deeper with your own. Together we will build a clear picture of the lifestyle you want, and roadmap to get there using the Profit For Keeps system.",
                icon: GrGroup,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white border border-gray-200 hover:border-blue-200 transition-colors flex flex-col justify-between"
                custom={index}
                variants={cardVariants}
              >
                <div className="w-12 h-12 bg-teal-100 text-teal-700 flex items-center justify-center mb-6">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <Link
                  prefetch={false}
                  href="/services"
                  className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
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
              "Working with Adri has been transformative. Her guidance helped me navigate a
              difficult career transition and find a path that truly aligns with my values and
              goals."
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

      {/* Call to Action */}
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
      <Toaster position="bottom-right" />
    </main>
  );
}
