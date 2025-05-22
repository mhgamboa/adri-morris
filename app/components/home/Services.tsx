import Link from "next/link";
import { LineChartIcon } from "lucide-react";
import { GrGroup } from "react-icons/gr";
import { MdAttachMoney } from "react-icons/md";
import { TbZoomMoney } from "react-icons/tb";
import MotionH2 from "@/components/animation/wrappers/motion-h2";
import MotionDiv from "@/components/animation/wrappers/motion-div";
import MotionSection from "@/components/animation/wrappers/motion-section";
import { ServicesAnimation } from "./ServicesAnimation";

const services = [
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
];

export function Services() {
  return (
    <MotionSection
      className="py-24 bg-blue-50"
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
      <div className="container mx-auto px-10">
        <MotionH2
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
        </MotionH2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              className="p-8 bg-white border border-gray-200 hover:border-blue-200 transition-colors flex flex-col justify-between"
              custom={index}
              variants={ServicesAnimation.motionDivVariants}
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
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
