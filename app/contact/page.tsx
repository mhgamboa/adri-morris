"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Get in <span className="font-serif italic text-rose-700">Touch</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Have questions or ready to start your journey? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <Mail className="text-rose-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <p className="text-gray-700">hello@adrimorris.com</p>
                    <p className="text-gray-600 text-sm mt-1">I typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <Phone className="text-rose-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Phone</h3>
                    <p className="text-gray-700">(555) 123-4567</p>
                    <p className="text-gray-600 text-sm mt-1">Available Monday-Friday, 9am-5pm PST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <MapPin className="text-rose-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Location</h3>
                    <p className="text-gray-700">San Francisco, California</p>
                    <p className="text-gray-600 text-sm mt-1">Available for virtual meetings worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-medium mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-100 p-3 rounded-full text-rose-700 hover:bg-rose-200 transition-colors"
                  >
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
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-100 p-3 rounded-full text-rose-700 hover:bg-rose-200 transition-colors"
                  >
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-100 p-3 rounded-full text-rose-700 hover:bg-rose-200 transition-colors"
                  >
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
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light mb-8">Send a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-8 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500 mx-auto mb-4"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="mt-6 bg-green-600 hover:bg-green-700">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-rose-700 hover:bg-rose-800 rounded-none px-8 py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "How do your coaching sessions work?",
                answer:
                  "My coaching sessions are typically 60-90 minutes long and can be conducted in-person or virtually. We'll start with an initial assessment to understand your goals, then develop a personalized plan. Each session builds on the previous one, with practical exercises and accountability check-ins between meetings.",
              },
              {
                question: "How many sessions will I need?",
                answer:
                  "The number of sessions varies depending on your goals and circumstances. Some clients achieve their desired results in just a few sessions, while others benefit from ongoing support over several months. We'll discuss this during your initial consultation and adjust as needed.",
              },
              {
                question: "What's your cancellation policy?",
                answer:
                  "I understand that life happens. I request at least 24 hours' notice for cancellations or rescheduling. Late cancellations or missed appointments may be subject to a fee, but I'm always willing to work with you in case of emergencies.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "I'm committed to your satisfaction. If after our first session you feel we're not a good fit, I offer a full refund for any prepaid package. For ongoing clients, unused sessions in a package can be refunded on a prorated basis.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4 text-rose-700">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
