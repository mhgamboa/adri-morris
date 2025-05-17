"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use "smooth" if you prefer a smooth scroll effect
    })
  }, [pathname])

  return null
}
