"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Rocket,
  Users,
  Trophy,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Star,
  Zap,
  Target,
  Award,
  BookOpen,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TECWebsite() {
  const [activeSection, setActiveSection] = useState("home")
  const [showPhasesDropdown, setShowPhasesDropdown] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const phases = [
    {
      id: 1,
      title: "Registration & Ideation",
      description: "Form your E-Cell and submit your innovative ideas",
      icon: <Users className="w-6 h-6" />,
      deadline: "Jan 15, 2024",
      status: "active",
    },
    {
      id: 2,
      title: "Pitch Deck Submission",
      description: "Create and submit your detailed business proposal",
      icon: <Target className="w-6 h-6" />,
      deadline: "Feb 1, 2024",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Mentorship Round",
      description: "Get guidance from industry experts and refine your idea",
      icon: <Headphones className="w-6 h-6" />,
      deadline: "Feb 15, 2024",
      status: "upcoming",
    },
    {
      id: 4,
      title: "Final Presentation",
      description: "Present your solution to judges and compete for prizes",
      icon: <Trophy className="w-6 h-6" />,
      deadline: "Mar 1, 2024",
      status: "upcoming",
    },
  ]

  const incentives = [
    {
      title: "Cash Prizes",
      description: "Win up to ₹1,00,000 in total prize money",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Certification",
      description: "Get certified by MET Institute of Technology",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-400 to-purple-500",
    },
    {
      title: "Resume Points",
      description: "Boost your profile with national-level participation",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Mentorship",
      description: "Get guidance from industry leaders and entrepreneurs",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-400 to-pink-500",
    },
  ]

  const faqs = [
    {
      question: "What is TEC - Tech & Entrepreneurship Challenge?",
      answer:
        "TEC is a national-level competition organized by MET's E-Cell to foster innovation and entrepreneurship among students. It's a platform where young minds can showcase their tech solutions and business ideas.",
    },
    {
      question: "Who can participate in TEC?",
      answer:
        "Any college student or recent graduate can participate. You can form teams of 2-4 members from the same or different institutions.",
    },
    {
      question: "What are the registration requirements?",
      answer:
        "You need to register your E-Cell with a unique name, provide team leader details, and submit your initial idea during the registration phase.",
    },
    {
      question: "What kind of ideas are we looking for?",
      answer:
        "We welcome innovative tech solutions, sustainable business models, social impact projects, and disruptive startup ideas across all domains.",
    },
    {
      question: "Is there any registration fee?",
      answer: "No, participation in TEC is completely free. We believe in making entrepreneurship accessible to all.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/space-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20" />
        <div className="stars absolute inset-0" />
        <div className="floating-particles absolute inset-0" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-black/80 backdrop-blur-md border-b border-cyan-500/30" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              TEC
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Timeline", "Registration", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white/80 hover:text-cyan-400 transition-colors duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}

              <div className="relative">
                <motion.button
                  onClick={() => setShowPhasesDropdown(!showPhasesDropdown)}
                  className="flex items-center space-x-1 text-white/80 hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>Phases</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${showPhasesDropdown ? "rotate-180" : ""}`}
                  />
                </motion.button>

                <AnimatePresence>
                  {showPhasesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 w-80 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg p-4"
                    >
                      {phases.map((phase, index) => (
                        <motion.div
                          key={phase.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
                        >
                          <div className="text-cyan-400">{phase.icon}</div>
                          <div>
                            <div className="font-semibold text-sm">{phase.title}</div>
                            <div className="text-xs text-white/60">{phase.deadline}</div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/space-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              TEC
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 mb-2">Tech & Entrepreneurship Challenge</p>
            <p className="text-lg md:text-xl text-white/80 font-light">Fuel the Future. Build Your Cell.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 animate-pulse">
              <Rocket className="w-5 h-5 mr-2" />
              Register Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About TEC
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              TEC is MET's flagship entrepreneurship challenge designed to ignite innovation and foster the next
              generation of tech entrepreneurs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation Hub",
                description: "A platform where cutting-edge ideas meet entrepreneurial spirit",
                icon: <Zap className="w-8 h-8" />,
              },
              {
                title: "National Reach",
                description: "Connecting brilliant minds from colleges across the country",
                icon: <MapPin className="w-8 h-8" />,
              },
              {
                title: "Future Ready",
                description: "Preparing tomorrow's leaders with today's challenges",
                icon: <Star className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group"
              >
                <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <CardHeader>
                    <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="relative py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mission Timeline
            </h2>
            <p className="text-xl text-white/80">Your journey through the TEC challenge</p>
          </motion.div>

          <div className="flex overflow-x-auto space-x-6 pb-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="flex-shrink-0 w-80"
              >
                <Card
                  className={`bg-black/40 backdrop-blur-md border transition-all duration-300 hover:shadow-lg ${
                    phase.status === "active"
                      ? "border-cyan-500 shadow-cyan-500/20"
                      : "border-purple-500/30 hover:border-purple-500/50"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 rounded-full ${
                          phase.status === "active"
                            ? "bg-cyan-500/20 text-cyan-400"
                            : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {phase.icon}
                      </div>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          phase.status === "active"
                            ? "bg-cyan-500/20 text-cyan-400"
                            : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        Phase {phase.id}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-white">{phase.title}</CardTitle>
                    <CardDescription className="text-white/70">{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-white/80">Deadline: {phase.deadline}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incentives Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mission Rewards
            </h2>
            <p className="text-xl text-white/80">What awaits successful space explorers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {incentives.map((incentive, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105">
                  <CardHeader className="text-center">
                    <div
                      className={`mx-auto p-4 rounded-full bg-gradient-to-r ${incentive.color} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{incentive.icon}</div>
                    </div>
                    <CardTitle className="text-lg text-white">{incentive.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 text-center">{incentive.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="relative py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mission Control Registration
            </h2>
            <p className="text-xl text-white/80">Initialize your space mission</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white">Launch Sequence Initiated</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-cyan-400">E-Cell Name</label>
                  <Input
                    placeholder="Enter your E-Cell name"
                    className="bg-black/50 border-cyan-500/50 focus:border-cyan-400 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-cyan-400">E-Cell Leader Name</label>
                  <Input
                    placeholder="Enter leader name"
                    className="bg-black/50 border-cyan-500/50 focus:border-cyan-400 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-cyan-400">Phone</label>
                    <Input
                      placeholder="Enter phone number"
                      className="bg-black/50 border-cyan-500/50 focus:border-cyan-400 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-cyan-400">Email</label>
                    <Input
                      type="email"
                      placeholder="Enter email address"
                      className="bg-black/50 border-cyan-500/50 focus:border-cyan-400 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-cyan-400">Institute Name</label>
                  <Input
                    placeholder="Enter your institute name"
                    className="bg-black/50 border-cyan-500/50 focus:border-cyan-400 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-cyan-400">Referral ID (Optional)</label>
                  <Input
                    placeholder="Enter referral ID if any"
                    className="bg-black/50 border-cyan-500/50 focus:border-cyan-400 text-white placeholder:text-white/50"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 text-lg rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                  <Rocket className="w-5 h-5 mr-2" />
                  Launch Mission
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mission Briefing
            </h2>
            <p className="text-xl text-white/80">Frequently asked questions</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:text-cyan-400 transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mission Control Center
            </h2>
            <p className="text-xl text-white/80">Get in touch with our space command</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/30">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Send Transmission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Your name"
                    className="bg-black/50 border-cyan-500/50 focus:border-cyan-400 text-white placeholder:text-white/50"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-black/50 border-cyan-500/50 focus:border-cyan-400 text-white placeholder:text-white/50"
                  />
                  <Textarea
                    placeholder="Your message"
                    rows={4}
                    className="bg-black/50 border-cyan-500/50 focus:border-cyan-400 text-white placeholder:text-white/50"
                  />
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-cyan-500/20 rounded-full">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Location</h3>
                      <p className="text-white/70">MET BKC Campus, Mumbai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-500/20 rounded-full">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-white/70">tec@met.edu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500/20 rounded-full">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <p className="text-white/70">+91 98765 43210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-cyan-500/30">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
              TEC 2024
            </h3>
            <p className="text-white/60">Organized by MET Institute of Technology E-Cell</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {["Privacy Policy", "Terms & Conditions", "Contact Us"].map((item) => (
              <a key={item} href="#" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>

          <p className="text-white/40">© 2024 MET Institute of Technology. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
  .stars {
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg%3E%3Cpolygon fill='%23001122' fillOpacity='0.4' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3Cpolygon fill='%23220044' fillOpacity='0.3' points='25 10 30 25 45 30 30 35 25 50 20 35 5 30 20 25'/%3E%3Cpolygon fill='%23002244' fillOpacity='0.5' points='75 20 80 35 95 40 80 45 75 60 70 45 55 40 70 35'/%3E%3Cpolygon fill='%23440022' fillOpacity='0.2' points='15 70 20 85 35 90 20 95 15 110 10 95 -5 90 10 85'/%3E%3Cpolygon fill='%23004422' fillOpacity='0.3' points='85 75 90 90 105 95 90 100 85 115 80 100 65 95 80 90'/%3E%3C/g%3E%3C/svg%3E") repeat;
  animation: sparkle 30s linear infinite;
}
  
  .floating-particles::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: 
      linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.03) 50%, transparent 70%),
      linear-gradient(-45deg, transparent 30%, rgba(139, 92, 246, 0.03) 50%, transparent 70%),
      linear-gradient(90deg, transparent 30%, rgba(16, 185, 129, 0.02) 50%, transparent 70%);
    background-size: 400px 400px, 350px 350px, 300px 300px;
    animation: gradientMove 20s ease-in-out infinite, gradientShift 15s ease-in-out infinite reverse;
    opacity: 0.8;
  }
  
  @keyframes sparkle {
    from { transform: translateY(0px); }
    to { transform: translateY(-100px); }
  }
  
  @keyframes gradientMove {
    0%, 100% { 
      transform: translateX(-50%) translateY(-50%) rotate(0deg);
    }
    25% { 
      transform: translateX(-45%) translateY(-55%) rotate(90deg);
    }
    50% { 
      transform: translateX(-55%) translateY(-45%) rotate(180deg);
    }
    75% { 
      transform: translateX(-50%) translateY(-50%) rotate(270deg);
    }
  }
  
  @keyframes gradientShift {
    0%, 100% { 
      background-position: 0% 0%, 100% 100%, 50% 50%;
    }
    33% { 
      background-position: 100% 0%, 0% 100%, 0% 50%;
    }
    66% { 
      background-position: 50% 100%, 50% 0%, 100% 0%;
    }
  }
`}</style>
    </div>
  )
}
