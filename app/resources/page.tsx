import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Resources() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Helpful <span className="font-serif italic text-rose-700">Resources</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Tools, guides, and insights to support your personal and professional growth journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Featured Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Goal Setting Workbook",
                description:
                  "A comprehensive guide to setting meaningful goals and creating actionable plans to achieve them.",
                image: "/images/resource-1.jpg",
                type: "PDF Workbook",
                link: "#",
              },
              {
                title: "Mindfulness Meditation Series",
                description:
                  "A collection of guided meditations designed to reduce stress and increase focus and clarity.",
                image: "/images/resource-2.jpg",
                type: "Audio Series",
                link: "#",
              },
              {
                title: "Career Transition Toolkit",
                description:
                  "Essential resources for navigating career changes with confidence and strategic planning.",
                image: "/images/resource-3.jpg",
                type: "Online Course",
                link: "#",
              },
            ].map((resource, index) => (
              <div key={index} className="group">
                <div className="relative h-64 mb-6 overflow-hidden">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-rose-700 text-white text-sm py-1 px-3">{resource.type}</div>
                </div>
                <h3 className="text-2xl font-light mb-3">{resource.title}</h3>
                <p className="text-gray-700 mb-4">{resource.description}</p>
                <Link
                  href={resource.link}
                  className="text-rose-700 hover:text-rose-800 font-medium inline-flex items-center"
                >
                  Access Resource
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

      {/* Blog Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "5 Strategies for Overcoming Imposter Syndrome",
                excerpt:
                  "Practical techniques to recognize and address feelings of inadequacy and self-doubt in your professional life.",
                date: "June 15, 2023",
                readTime: "8 min read",
                link: "#",
              },
              {
                title: "Building Resilience in Uncertain Times",
                excerpt:
                  "How to develop mental toughness and adaptability when facing life's inevitable challenges and changes.",
                date: "May 22, 2023",
                readTime: "6 min read",
                link: "#",
              },
              {
                title: "The Power of Intentional Goal Setting",
                excerpt:
                  "Why traditional goal setting often fails and how to create meaningful objectives that lead to lasting change.",
                date: "April 10, 2023",
                readTime: "10 min read",
                link: "#",
              },
              {
                title: "Navigating Difficult Conversations with Confidence",
                excerpt:
                  "Techniques for approaching challenging discussions with clarity, empathy, and positive outcomes.",
                date: "March 5, 2023",
                readTime: "7 min read",
                link: "#",
              },
            ].map((article, index) => (
              <div key={index} className="bg-white p-8 shadow-sm">
                <div className="text-sm text-gray-500 mb-3">
                  {article.date} · {article.readTime}
                </div>
                <h3 className="text-xl font-medium mb-3">{article.title}</h3>
                <p className="text-gray-700 mb-4">{article.excerpt}</p>
                <Link
                  href={article.link}
                  className="text-rose-700 hover:text-rose-800 font-medium inline-flex items-center"
                >
                  Read Article
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

          <div className="text-center mt-12">
            <Button asChild className="bg-rose-700 hover:bg-rose-800 rounded-none px-8">
              <Link href="#">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Free Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Values Clarification Exercise",
                description:
                  "A guided worksheet to help you identify and prioritize your core values for more aligned decision-making.",
                icon: "Heart",
                link: "#",
              },
              {
                title: "Weekly Planning Template",
                description:
                  "A structured template to organize your week for maximum productivity and work-life balance.",
                icon: "Calendar",
                link: "#",
              },
              {
                title: "Stress Management Techniques",
                description:
                  "A collection of evidence-based practices to reduce stress and increase resilience in daily life.",
                icon: "Leaf",
                link: "#",
              },
            ].map((resource, index) => (
              <div key={index} className="p-8 border border-gray-200 hover:border-rose-200 transition-colors">
                <div className="w-12 h-12 bg-rose-100 text-rose-700 flex items-center justify-center mb-6">
                  {resource.icon === "Heart" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  )}
                  {resource.icon === "Calendar" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  )}
                  {resource.icon === "Leaf" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-medium mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Link
                  href={resource.link}
                  className="text-rose-700 hover:text-rose-800 font-medium inline-flex items-center"
                >
                  Download Free
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-rose-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Subscribe to My <span className="font-serif italic text-rose-200">Newsletter</span>
            </h2>
            <p className="text-lg mb-8">
              Join my community and receive monthly insights, resources, and exclusive content to support your personal
              and professional growth journey.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-rose-400"
                required
              />
              <Button className="bg-white text-rose-700 hover:bg-rose-100 rounded-none whitespace-nowrap">
                Subscribe
              </Button>
            </form>

            <p className="text-sm mt-4 text-rose-200">I respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Recommended Books */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Recommended Books</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Mindset: The New Psychology of Success",
                author: "Carol S. Dweck",
                image: "/images/book-1.jpg",
                link: "#",
              },
              {
                title: "Atomic Habits",
                author: "James Clear",
                image: "/images/book-2.jpg",
                link: "#",
              },
              {
                title: "Dare to Lead",
                author: "Brené Brown",
                image: "/images/book-3.jpg",
                link: "#",
              },
              {
                title: "The Power of Now",
                author: "Eckhart Tolle",
                image: "/images/book-4.jpg",
                link: "#",
              },
            ].map((book, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image src={book.image || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium mb-1">{book.title}</h3>
                <p className="text-gray-600 mb-3">by {book.author}</p>
                <Link href={book.link} className="text-rose-700 hover:text-rose-800 text-sm font-medium">
                  View on Amazon
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
