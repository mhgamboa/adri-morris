"use client";
import Image from "next/image";
import MotionDiv from "@/components/animation/wrappers/motion-div";
import adriPortrait from "@/assets/images/adri-portrait.jpg";
import MotionSection from "@/components/animation/wrappers/motion-section";

export default function BioSection() {
  return (
    <MotionSection
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
      useIntersectionObserver={true}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <MotionDiv
            className="relative h-[600px]"
            variants={{
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
            }}
          >
            <Image src={adriPortrait} alt="Adri Morris" fill className="object-cover object-top" />
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
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
                owner myself — I understand how powerful it is to be able to hand off your financial
                to-dos to someone you trust.{" "}
                <i>Someone who gets the details right, every time, and sees the big picture too.</i>
              </p>
              <p>
                But here's the thing: even with all my experience helping hundreds of clients, I
                used to feel anxious about my own finances. My go-to strategy? Avoidance. (Spoiler:
                it doesn't work.)
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
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
