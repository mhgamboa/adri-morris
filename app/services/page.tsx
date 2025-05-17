import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import personalCoaching from "@/assets/images/personal-coaching.jpg";
import careerDevelopment from "@/assets/images/career-development.jpg";
// import workshops from "@/assets/images/workshops.jpg";

export default function Services() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              My <span className="font-serif italic text-rose-700">Services</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Tailored solutions to help you achieve personal and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Coaching",
                description:
                  "One-on-one guidance to help you create and execute a personalized financial plan.",
                image: personalCoaching,
                link: "#personal-coaching",
              },
              {
                title: "Accounting Services",
                description: "Booking and CFO services for businesses of all sizes.",
                image: careerDevelopment,
                link: "#career-development",
              },
              {
                title: "Group Coaching",
                description: "Attend an upcoming Masterclass",
                image: "/images/workshops.jpg",
                link: "#workshops",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-64 mb-6 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link
                  href={service.link}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Coaching */}
      <section id="personal-coaching" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">Personal Coaching</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  My personal coaching services are designed to help you navigate life's challenges,
                  discover your purpose, and create a fulfilling life aligned with your values.
                </p>
                <p>
                  Through a structured yet flexible approach, we'll work together to identify your
                  goals, overcome limiting beliefs, and develop actionable strategies for growth.
                </p>
                <h3 className="text-xl font-medium mt-8 mb-4">What to Expect:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Initial assessment to understand your current situation and aspirations</li>
                  <li>Personalized coaching plan tailored to your specific needs</li>
                  <li>Regular one-on-one sessions (in-person or virtual)</li>
                  <li>Practical exercises and resources to support your growth between sessions</li>
                  <li>Accountability and support throughout your journey</li>
                </ul>
                <div className="mt-8">
                  <Button asChild className="bg-rose-700 hover:bg-rose-800 rounded-none px-8">
                    <Link href="/schedule">Book a Discovery Call</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/personal-coaching-detail.jpg"
                alt="Personal Coaching"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Development */}
      <section id="career-development" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[500px]">
              <Image
                src="/images/career-development-detail.jpg"
                alt="Career Development"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-light mb-6">Career Development</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  My career development services help professionals at all stages navigate their
                  career paths with intention and confidence.
                </p>
                <p>
                  Whether you're seeking advancement in your current field, contemplating a career
                  change, or building leadership skills, I provide tailored guidance to help you
                  achieve your professional goals.
                </p>
                <h3 className="text-xl font-medium mt-8 mb-4">Services Include:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Career assessment and goal setting</li>
                  <li>Resume and personal branding optimization</li>
                  <li>Interview preparation and negotiation strategies</li>
                  <li>Leadership development and executive coaching</li>
                  <li>Work-life balance and stress management</li>
                </ul>
                <div className="mt-8">
                  <Button asChild className="bg-rose-700 hover:bg-rose-800 rounded-none px-8">
                    <Link href="/schedule">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Speaking */}
      <section id="workshops" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">Workshops & Speaking</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  I offer engaging workshops and speaking engagements designed to inspire and equip
                  groups with practical tools for personal and professional growth.
                </p>
                <p>
                  Each session is customized to meet the specific needs of your organization or
                  event, delivering valuable insights in an interactive and accessible format.
                </p>
                <h3 className="text-xl font-medium mt-8 mb-4">Popular Topics:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Building Resilience in Challenging Times</li>
                  <li>Effective Communication and Conflict Resolution</li>
                  <li>Leadership Development and Team Building</li>
                  <li>Work-Life Integration and Wellbeing</li>
                  <li>Goal Setting and Strategic Planning</li>
                </ul>
                <div className="mt-8">
                  <Button asChild className="bg-rose-700 hover:bg-rose-800 rounded-none px-8">
                    <Link href="/contact">Inquire About Booking</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/workshops-detail.jpg"
                alt="Workshops and Speaking"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/*
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light mb-6">Investment</h2>
            <p className="text-lg text-gray-700">
              I offer flexible packages designed to meet your specific needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Single Session",
                price: "$250",
                description: "Perfect for addressing a specific challenge or goal.",
                features: [
                  "90-minute coaching session",
                  "Personalized action plan",
                  "Email support for 1 week",
                  "Follow-up resources",
                ],
              },
              {
                title: "Growth Package",
                price: "$1,200",
                description: "Our most popular option for sustainable change.",
                features: [
                  "6 bi-weekly coaching sessions",
                  "Comprehensive assessment",
                  "Customized development plan",
                  "Email support between sessions",
                  "Access to exclusive resources",
                ],
                featured: true,
              },
              {
                title: "Transformation",
                price: "$2,200",
                description: "Deep, lasting change for significant life transitions.",
                features: [
                  "12 weekly coaching sessions",
                  "In-depth assessment and planning",
                  "Unlimited email support",
                  "Monthly progress reviews",
                  "Lifetime access to resources",
                  "3-month follow-up session",
                ],
              },
            ].map((plan, index) => (
              <div key={index} className={`p-8 ${plan.featured ? "bg-rose-700 text-white shadow-lg" : "bg-white"}`}>
                <h3 className="text-2xl font-light mb-2">{plan.title}</h3>
                <div className="text-3xl font-medium mb-4">{plan.price}</div>
                <p className={`mb-6 ${plan.featured ? "text-rose-100" : "text-gray-600"}`}>{plan.description}</p>
                <ul className={`space-y-2 mb-8 ${plan.featured ? "text-white" : "text-gray-700"}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
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
                        className={`mr-2 ${plan.featured ? "text-rose-200" : "text-rose-700"}`}
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full rounded-none ${
                    plan.featured
                      ? "bg-white text-rose-700 hover:bg-rose-100"
                      : "bg-rose-700 hover:bg-rose-800 text-white"
                  }`}
                >
                  <Link href="/schedule">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-gray-700">
              Custom packages and corporate rates are also available. Contact me for more information.
            </p>
          </div>
        </div>
      </section>
*/}
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Client Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote:
                  "Working with Adri has been transformative. Her guidance helped me navigate a difficult career transition and find a path that truly aligns with my values and goals.",
                author: "Sarah Johnson, Marketing Executive",
              },
              {
                quote:
                  "Adri's coaching style is the perfect balance of supportive and challenging. She helped me break through limiting beliefs that had been holding me back for years.",
                author: "Michael Chen, Entrepreneur",
              },
              {
                quote:
                  "The workshop Adri conducted for our team was exactly what we needed. Her insights on effective communication have significantly improved our collaboration.",
                author: "Lisa Rodriguez, HR Director",
              },
              {
                quote:
                  "I was skeptical about coaching at first, but Adri's practical approach and genuine care made all the difference. I've achieved goals I once thought impossible.",
                author: "David Thompson, Software Engineer",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 border-l-4 border-rose-200">
                <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                <div className="font-medium">— {testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-rose-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to <span className="font-serif italic text-rose-200">Begin Your Journey</span>?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward personal and professional growth. Schedule a consultation to
            discuss how we can work together.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-rose-700 hover:bg-rose-100 rounded-none px-10"
          >
            <Link href="/schedule">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
