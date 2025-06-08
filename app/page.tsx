"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Timeline from "@/components/Timeline"
import Rewards from "@/components/Rewards"
import Registration from "@/components/Registration"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Background from "@/components/Background"

export default function TECWebsite() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Background />
      <Navbar scrollY={scrollY} />
      <Hero />
      <About />
      <Timeline />
      <Rewards />
      <Registration />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
