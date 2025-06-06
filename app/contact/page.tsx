"use client";

import { useEffect } from "react";
import { Mail, MapPin } from "lucide-react";

import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { ContactForm } from "@/components/contact-form";

export default function Contact() {
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
  const contactInfoControls = useAnimation();
  const [contactInfoRef, contactInfoInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const formControls = useAnimation();
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const faqControls = useAnimation();
  const [faqRef, faqInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Start animations when sections come into view
  useEffect(() => {
    if (contactInfoInView) contactInfoControls.start("visible");
    if (formInView) formControls.start("visible");
    if (faqInView) faqControls.start("visible");
  }, [contactInfoInView, formInView, faqInView, contactInfoControls, formControls, faqControls]);

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
              Get in <span className="font-serif italic text-blue-700">Touch</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have questions or ready to start your journey? I'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              ref={contactInfoRef}
              initial="hidden"
              animate={contactInfoControls}
              variants={sectionVariants}
            >
              <h2 className="text-3xl font-light mb-8">Contact Information</h2>

              <div className="space-y-8">
                <motion.div
                  className="flex items-start"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: 0.2 },
                    },
                  }}
                >
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Mail className="text-teal-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <p className="text-gray-700">hello@adrimorris.com</p>
                    <p className="text-gray-600 text-sm mt-1">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: 0.3 },
                    },
                  }}
                >
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <MapPin className="text-teal-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Location</h3>
                    <p className="text-gray-700">Orem, Utah</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Available for virtual meetings worldwide
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-12"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.5 },
                  },
                }}
              >
                <h3 className="text-xl font-medium mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/adri.morris.coaching/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-100 p-3 rounded-full text-teal-700 hover:bg-teal-200 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                  {/* <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-100 p-3 rounded-full text-teal-700 hover:bg-teal-200 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a> */}
                  <a
                    href="https://www.linkedin.com/in/adrienna-morris/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-100 p-3 rounded-full text-teal-700 hover:bg-teal-200 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial="hidden"
              animate={formControls}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <h2 className="text-3xl font-light mb-8">Send a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section
        className="py-16 bg-gray-50"
        ref={faqRef}
        initial="hidden"
        animate={faqControls}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-light mb-12 text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "How do your coaching sessions work?",
                answer:
                  "My coaching sessions are typically 60-90 minutes long and can be conducted in-person or virtually. We'll start with an initial assessment to understand your goals, then develop a personalized plan. Each session builds on the previous one, with practical exercises and accountability check-ins between meetings.",
              },
              {
                question: "How many sessions will I need?",
                answer:
                  "The number of sessions varies depending on your goals and circumstances. Some clients achieve their desired results in just a few sessions, while others benefit from ongoing support over several months. We'll discuss this during your initial consultation and adjust as needed.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "I'm committed to your satisfaction. If after our first session you feel we're not a good fit, I offer a full refund for any prepaid package. For ongoing clients, unused sessions in a package can be refunded on a prorated basis.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 shadow-sm"
                custom={index}
                variants={cardVariants}
              >
                <h3 className="text-xl font-medium mb-4 text-teal-700">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
