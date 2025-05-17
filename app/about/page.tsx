import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import adriPortrait from "@/assets/images/adri-portrait.jpg";

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              About <span className="font-serif italic text-rose-700">Adri Morris</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Passionate about empowering others to discover their potential and achieve meaningful
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px]">
              <Image
                src={adriPortrait}
                alt="Adri Morris"
                fill
                className="object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light mb-6">My Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  With over a decade of experience in personal and professional development, I've
                  dedicated my career to helping individuals and organizations unlock their full
                  potential.
                </p>
                <p>
                  My journey began in the corporate world, where I quickly recognized that success
                  isn't just about strategies and systems—it's about the people behind them. This
                  realization led me to pursue advanced training in coaching and development,
                  allowing me to create a unique approach that combines practical business acumen
                  with deep personal growth work.
                </p>
                <p>
                  I believe that true transformation happens when we align our personal values with
                  our professional goals. My mission is to guide clients through this process,
                  helping them create lives and careers that are not only successful but deeply
                  fulfilling.
                </p>
                <p>
                  When I'm not working with clients, you can find me exploring hiking trails,
                  practicing yoga, or curled up with a good book. I'm based in San Francisco but
                  work with clients globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light mb-6">My Philosophy</h2>
            <p className="text-lg text-gray-700">
              I believe in a holistic approach to personal and professional development that honors
              your unique journey while providing practical tools for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Authenticity",
                description:
                  "True growth begins with embracing who you really are. I create a safe space for you to explore your authentic self and build from there.",
              },
              {
                title: "Balance",
                description:
                  "Success isn't sustainable without balance. I help you create strategies that honor all aspects of your life and well-being.",
              },
              {
                title: "Continuous Growth",
                description:
                  "Development is a journey, not a destination. I provide tools and support for ongoing evolution, both personal and professional.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4 text-rose-700">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-8 text-center">Credentials & Experience</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-rose-200 pl-6">
                <h3 className="text-xl font-medium mb-2">Certified Professional Coach</h3>
                <p className="text-gray-600 mb-1">International Coach Federation (ICF)</p>
                <p className="text-gray-700">
                  Completed 500+ hours of coaching training and 1,000+ client hours
                </p>
              </div>

              <div className="border-l-4 border-rose-200 pl-6">
                <h3 className="text-xl font-medium mb-2">Master's in Organizational Psychology</h3>
                <p className="text-gray-600 mb-1">Stanford University</p>
                <p className="text-gray-700">
                  Specialized in leadership development and organizational change
                </p>
              </div>

              <div className="border-l-4 border-rose-200 pl-6">
                <h3 className="text-xl font-medium mb-2">Former Director of People Development</h3>
                <p className="text-gray-600 mb-1">Fortune 500 Technology Company</p>
                <p className="text-gray-700">
                  Led talent development initiatives for 5,000+ employees globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-rose-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to <span className="font-serif italic text-rose-200">Work Together</span>?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's connect and discuss how I can help you achieve your personal and professional
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-rose-700 hover:bg-rose-100 rounded-none px-8"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/20 text-white border-white hover:bg-white/30 rounded-none px-8"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
