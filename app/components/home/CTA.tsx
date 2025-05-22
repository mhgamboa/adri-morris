import MotionDiv from "@/components/animation/wrappers/motion-div";
import MotionH2 from "@/components/animation/wrappers/motion-h2";
import MotionP from "@/components/animation/wrappers/motion-p";
import MotionSection from "@/components/animation/wrappers/motion-section";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <MotionSection
      className="py-16 px-10 bg-white"
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
      <div className="container mx-auto px-4 text-center">
        <MotionH2
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
        </MotionH2>
        <MotionP
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
        </MotionP>
        <MotionDiv
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
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
