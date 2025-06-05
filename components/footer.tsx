"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const [footerRef, footerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      ref={footerRef}
      initial="hidden"
      animate={footerInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <Link prefetch={false} href="/" className="font-serif text-2xl">
              Adri Morris
            </Link>
            <p className="mt-4 text-gray-400">
              Helping individuals and businesses reach their full potential through personalized
              coaching and strategic guidance.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Contact"].map(item => (
                <motion.li key={item} variants={itemVariants}>
                  <Link
                    prefetch={false}
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <motion.li variants={itemVariants}>hello@adrimorris.com</motion.li>
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <motion.div className="flex space-x-4 mb-6" variants={itemVariants}>
              <a
                href="https://www.instagram.com/adri.morris.coaching/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/in/adrienna-morris/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:hello@adrimorris.com" className="text-gray-400 hover:text-white">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
            <motion.p className="text-gray-400 text-sm" variants={itemVariants}>
              Subscribe to my newsletter for tips, insights, and updates.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Adri Morris. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              prefetch={false}
              href="/privacy-policy"
              className="text-gray-500 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              prefetch={false}
              href="/terms-of-service"
              className="text-gray-500 hover:text-white text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
