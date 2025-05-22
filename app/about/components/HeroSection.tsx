import MotionH1 from "@/components/animation/wrappers/motion-h1";
import MotionSection from "@/components/animation/wrappers/motion-section";

export default function HeroSection() {
  return (
    <MotionSection
      className="py-16 bg-blue-50"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <MotionH1
            className="text-4xl md:text-5xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="font-serif italic text-blue-700">About</span>
          </MotionH1>
        </div>
      </div>
    </MotionSection>
  );
}
