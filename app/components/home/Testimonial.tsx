import MotionBlockquote from "@/components/animation/wrappers/motion-blockquote";
import MotionDiv from "@/components/animation/wrappers/motion-div";
import MotionH2 from "@/components/animation/wrappers/motion-h2";
import MotionSection from "@/components/animation/wrappers/motion-section";

export function Testimonial() {
  return (
    <MotionSection
      className="py-24 bg-blue-700 text-white"
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
        </MotionH2>

        <div className="max-w-3xl mx-auto">
          <MotionBlockquote
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
            "Working with Adri has been transformative. Her guidance helped me navigate a difficult
            career transition and find a path that truly aligns with my values and goals."
          </MotionBlockquote>
          <MotionDiv
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
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
