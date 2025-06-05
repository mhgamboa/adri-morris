import Image from "next/image";
import { Button } from "@/components/ui/button";
import bookkeepingImage from "@/assets/images/bookkeeping.png";
import consultingImage from "@/assets/images/consulting.jpg";
import coachingImage from "@/assets/images/coaching.jpg";
import bookkeepingCoaching from "@/assets/images/bookkeeping-coaching.png";
import MotionSection from "@/components/animation/wrappers/motion-section";
import MotionDiv from "@/components/animation/wrappers/motion-div";
import { ServicesAnimation } from "./services-animations";

const servicesData = [
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
      "Financial coaching to build a life — not just a business. Going beyond understanding your business financials, we will take a deep look at the lifestyle you want and how your business will get you there using the Profit For Keeps® system. ",
    image: coachingImage,
  },
  {
    title: "Coaching for Bookkeepers",
    description:
      "You've built up a clientele, great processes, and maybe even a team. You work with your clients' finances every day, now it's time to go a little deeper with your own. Together we will build a clear picture of the lifestyle you want, and roadmap to get there using the Profit For Keeps® system.",
    image: bookkeepingCoaching,
  },
];

export default function ServicesOverview() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <MotionDiv
              key={index}
              className="group flex flex-col justify-between"
              custom={index}
              variants={ServicesAnimation.motionDivVariants}
            >
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
