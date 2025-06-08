"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Users, Target, Headphones, Trophy } from "lucide-react"

interface NavbarProps {
  scrollY: number
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [showPhasesDropdown, setShowPhasesDropdown] = useState(false)

  const phases = [
    {
      id: 1,
      title: "Registration & Ideation",
      icon: <Users className="w-6 h-6" />,
      deadline: "Jan 15, 2024",
    },
    {
      id: 2,
      title: "Pitch Deck Submission",
      icon: <Target className="w-6 h-6" />,
      deadline: "Feb 1, 2024",
    },
    {
      id: 3,
      title: "Mentorship Round",
      icon: <Headphones className="w-6 h-6" />,
      deadline: "Feb 15, 2024",
    },
    {
      id: 4,
      title: "Final Presentation",
      icon: <Trophy className="w-6 h-6" />,
      deadline: "Mar 1, 2024",
    },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-black/80 backdrop-blur-md border-b border-cyan-500/30" : "bg-transparent"
      }`}
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
  )
}
