import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import adriPortrait from "@/assets/images/adri-portrait.jpg";
import MotionDiv from "@/components/animation/wrappers/motion-div";
import MotionP from "@/components/animation/wrappers/motion-p";
import { HeroAnimation } from "./HeroAnimation";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Hero Image on Mobile (Shown First) */}
          <MotionDiv
            className="order-2 md:order-2 relative h-[400px] md:h-[600px] mx-auto w-full flex justify-center"
            initial="hidden"
            animate="visible"
            variants={HeroAnimation.heroImageVariants}
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
          </MotionDiv>

          {/* Text Content */}
          <MotionDiv
            className="order-1 md:order-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={HeroAnimation.heroTextVariants}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 mb-6">
              <span className="font-serif italic text-blue-700">Profit</span> with purpose.
              <br />
              Numbers with heart.
              <br />A roadmap to the life you actually want.
            </h1>
            <MotionP
              className="text-lg text-gray-700 mb-8 lg:max-w-xl"
              variants={HeroAnimation.heroTextVariants}
            >
              No more financial roller-coaster. Just a clear path forward.
            </MotionP>
            <div className="flex flex-col md:flex-row gap-4">
              <MotionDiv
                variants={HeroAnimation.buttonVariants}
                custom={0}
                initial="hidden"
                animate="visible"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-700 text-white hover:bg-blue-800 rounded-none px-8"
                >
                  <Link prefetch={false} href="/services">
                    Explore Services
                  </Link>
                </Button>
              </MotionDiv>
              <MotionDiv
                variants={HeroAnimation.buttonVariants}
                custom={1}
                initial="hidden"
                animate="visible"
              >
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
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
