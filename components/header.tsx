"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm py-3" : "bg-white/70 backdrop-blur-sm py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`font-serif text-2xl md:text-3xl ${isScrolled ? "text-rose-800" : "text-rose-800"}`}
          >
            Adri Morris
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Resources", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`${
                  isScrolled ? "text-gray-800 hover:text-rose-700" : "text-gray-800 hover:text-rose-700"
                } transition-colors`}
              >
                {item}
              </Link>
            ))}
            <Button
              asChild
              className={`rounded-none ${
                isScrolled ? "bg-rose-700 hover:bg-rose-800" : "bg-white text-rose-800 hover:bg-rose-100"
              }`}
            >
              <a href="https://calendly.com/adri-incite/30min-meet" target="_blank" rel="noopener noreferrer">
                Schedule
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="text-gray-800" size={24} /> : <Menu className="text-gray-800" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {["Home", "About", "Services", "Resources", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-rose-700 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button asChild className="bg-rose-700 hover:bg-rose-800 rounded-none w-full">
                <a
                  href="https://calendly.com/adri-incite/30min-meet"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
