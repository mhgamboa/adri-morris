"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Schedule() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [serviceType, setServiceType] = useState<string>("")
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    }, 1500)
  }

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Schedule a <span className="font-serif italic text-rose-700">Consultation</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Take the first step toward personal and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Scheduling Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 p-12 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mx-auto mb-6"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <h2 className="text-3xl font-light text-green-800 mb-4">Appointment Scheduled!</h2>
                <p className="text-xl text-green-700 mb-2">Thank you for scheduling a consultation.</p>
                <p className="text-green-700 mb-8">
                  I'll send a confirmation email shortly with all the details and any preparation information you might
                  need.
                </p>
                <Button
                  onClick={() => {
                    setIsSubmitted(false)
                    setStep(1)
                    setDate(undefined)
                    setTimeSlot("")
                    setServiceType("")
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      message: "",
                    })
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Schedule Another Appointment
                </Button>
              </div>
            ) : (
              <>
                {/* Progress Steps */}
                <div className="mb-12">
                  <div className="flex justify-between">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step >= i ? "bg-rose-700 text-white" : "bg-gray-200 text-gray-500"
                          }`}
                        >
                          {i}
                        </div>
                        <div className={`text-sm mt-2 ${step >= i ? "text-rose-700 font-medium" : "text-gray-500"}`}>
                          {i === 1 ? "Select Service" : i === 2 ? "Choose Date & Time" : "Your Details"}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-4">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
                    <div
                      className="absolute top-0 left-0 h-1 bg-rose-700 transition-all duration-300"
                      style={{ width: `${(step - 1) * 50}%` }}
                    ></div>
                  </div>
                </div>

                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-light mb-8 text-center">Select a Service</h2>

                    <RadioGroup value={serviceType} onValueChange={setServiceType} className="space-y-6">
                      {[
                        {
                          id: "discovery",
                          title: "Discovery Call",
                          description: "A complimentary 30-minute call to discuss your goals and how I can help.",
                          price: "Free",
                        },
                        {
                          id: "personal-coaching",
                          title: "Personal Coaching Session",
                          description:
                            "One-on-one guidance to help you overcome obstacles and achieve your personal goals.",
                          price: "$250",
                        },
                        {
                          id: "career-development",
                          title: "Career Development Session",
                          description:
                            "Strategic advice to advance your career and find fulfillment in your professional life.",
                          price: "$250",
                        },
                        {
                          id: "workshop-inquiry",
                          title: "Workshop or Speaking Inquiry",
                          description:
                            "Discuss your organization's needs for workshops, training, or speaking engagements.",
                          price: "Varies",
                        },
                      ].map((service) => (
                        <div
                          key={service.id}
                          className={`border p-6 relative ${
                            serviceType === service.id
                              ? "border-rose-700 bg-rose-50"
                              : "border-gray-200 hover:border-rose-200"
                          }`}
                        >
                          <RadioGroupItem value={service.id} id={service.id} className="absolute right-4 top-4" />
                          <Label htmlFor={service.id} className="flex flex-col cursor-pointer">
                            <span className="text-xl font-medium mb-2">{service.title}</span>
                            <span className="text-gray-700 mb-4">{service.description}</span>
                            <span className="font-medium text-rose-700">{service.price}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    <div className="mt-8 text-right">
                      <Button
                        onClick={() => setStep(2)}
                        disabled={!serviceType}
                        className="bg-rose-700 hover:bg-rose-800 rounded-none px-8"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-light mb-8 text-center">Select Date & Time</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Choose a Date</h3>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="border rounded-md p-3"
                          disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        />
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">Choose a Time</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant={timeSlot === slot ? "default" : "outline"}
                              className={`rounded-none ${timeSlot === slot ? "bg-rose-700 hover:bg-rose-800" : ""}`}
                              onClick={() => setTimeSlot(slot)}
                              disabled={!date}
                            >
                              {slot}
                            </Button>
                          ))}
                        </div>

                        <div className="mt-8">
                          <h3 className="text-lg font-medium mb-4">Selected Appointment</h3>
                          {date && timeSlot ? (
                            <div className="bg-rose-50 p-4 border border-rose-200">
                              <p className="font-medium">
                                {date.toLocaleDateString("en-US", {
                                  weekday: "long",
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                              <p>{timeSlot}</p>
                            </div>
                          ) : (
                            <p className="text-gray-500 italic">Please select both a date and time</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <Button onClick={() => setStep(1)} variant="outline" className="rounded-none px-8">
                        Back
                      </Button>
                      <Button
                        onClick={() => setStep(3)}
                        disabled={!date || !timeSlot}
                        className="bg-rose-700 hover:bg-rose-800 rounded-none px-8"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-light mb-8 text-center">Your Details</h2>

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

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">What would you like to discuss in our session?</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please share any specific topics or questions you'd like to address"
                        />
                      </div>

                      <div className="bg-rose-50 p-6 border border-rose-200 mb-6">
                        <h3 className="text-lg font-medium mb-4">Appointment Summary</h3>
                        <p>
                          <strong>Service:</strong>{" "}
                          {serviceType === "discovery"
                            ? "Discovery Call"
                            : serviceType === "personal-coaching"
                              ? "Personal Coaching Session"
                              : serviceType === "career-development"
                                ? "Career Development Session"
                                : "Workshop or Speaking Inquiry"}
                        </p>
                        <p>
                          <strong>Date:</strong>{" "}
                          {date?.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                        <p>
                          <strong>Time:</strong> {timeSlot}
                        </p>
                      </div>

                      <div className="flex justify-between">
                        <Button
                          type="button"
                          onClick={() => setStep(2)}
                          variant="outline"
                          className="rounded-none px-8"
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="bg-rose-700 hover:bg-rose-800 rounded-none px-8"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">What to Expect</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Before Our Session",
                description:
                  "Once you schedule, you'll receive a confirmation email with any preparation materials. Take some time to reflect on your goals and what you hope to achieve.",
              },
              {
                title: "During Our Session",
                description:
                  "We'll start by discussing your current situation and aspirations. I'll ask questions to understand your needs and together we'll identify key areas to focus on.",
              },
              {
                title: "After Our Session",
                description:
                  "You'll receive a summary of our discussion and actionable next steps. For ongoing clients, we'll establish regular check-ins to monitor progress and adjust as needed.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 shadow-sm">
                <div className="w-12 h-12 bg-rose-100 text-rose-700 flex items-center justify-center mb-6 text-xl font-medium">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
