"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LineChartIcon } from "lucide-react";
import { toast, Toaster } from "sonner";
import { GrGroup } from "react-icons/gr";
import { MdAttachMoney } from "react-icons/md";
import adriIllustrated from "@/assets/images/adri-illustrated.png";
import heroBackground from "@/assets/images/hero-background.jpg";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Adri Morris background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-10 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              <span className="font-serif italic text-rose-200">Empowering</span> you on your
              journey to personal and professional success
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Helping individuals and businesses reach their full potential through personalized
              coaching and strategic guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-rose-700 text-white hover:bg-rose-800 rounded-none px-8"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/20 text-white border-white hover:bg-white/30 rounded-none px-8"
              >
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-rose-50">
        <div className="container mx-auto px-8 sm:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Hello, I'm <span className="font-serif italic text-rose-700">Adri</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                I'm passionate about helping people discover their potential and achieve their
                financial goals. With over a decade of experience in personal and professional
                development, I provide tailored guidance to help you and your business thrive.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                My approach combines practical strategies with compassionate support, creating a
                foundation for lasting success and fulfillment.
              </p>
              <Button asChild className="bg-rose-700 hover:bg-rose-800 rounded-none px-8">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
            <div className="relative h-[500px]">
              <Image src={adriIllustrated} alt="Adri Morris" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-10">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            How I Can <span className="font-serif italic text-rose-700">Help You</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Coaching",
                description:
                  "One-on-one guidance to help you create and execute a personalized financial plan.",
                icon: MdAttachMoney,
              },
              {
                title: "Accounting Services",
                description: "Booking and CFO services for businesses of all sizes.",
                icon: LineChartIcon,
              },
              {
                title: "Group Coaching",
                description: "Attend an upcoming Masterclass",
                icon: GrGroup,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 border border-gray-200 hover:border-rose-200 transition-colors"
              >
                <div className="w-12 h-12 bg-rose-100 text-rose-700 flex items-center justify-center mb-6">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {index < 2 ? (
                  <Link
                    href="/services"
                    className="text-rose-700 hover:text-rose-800 font-medium inline-flex items-center"
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
                ) : (
                  <button
                    onClick={() =>
                      toast.info("Coming Soon", {
                        description:
                          "Group Coaching sessions will be announced soon. Check back later!",
                      })
                    }
                    className="text-rose-700 hover:text-rose-800 font-medium inline-flex items-center cursor-pointer"
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
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-rose-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-16">
            What <span className="font-serif italic text-rose-200">Clients Say</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-light italic mb-8">
              "Working with Adri has been transformative. Her guidance helped me navigate a
              difficult career transition and find a path that truly aligns with my values and
              goals."
            </blockquote>
            <div className="font-medium">— Sarah Johnson, Marketing Executive</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-10 bg-rose-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to <span className="font-serif italic text-rose-700">Begin Your Journey</span>?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Take the first step toward personal and professional growth. Schedule a consultation to
            discuss how we can work together.
          </p>
          <Button asChild size="lg" className="bg-rose-700 hover:bg-rose-800 rounded-none px-10">
            <a
              href="https://calendly.com/adri-incite/30min-meet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Consultation
            </a>
          </Button>
        </div>
      </section>
      <Toaster position="bottom-right" />
    </main>
  );
}
