"use client"

import { motion } from "framer-motion"
import { Users, Target, Headphones, Trophy, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Timeline() {
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

  return (
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
                        phase.status === "active" ? "bg-cyan-500/20 text-cyan-400" : "bg-purple-500/20 text-purple-400"
                      }`}
                    >
                      {phase.icon}
                    </div>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        phase.status === "active" ? "bg-cyan-500/20 text-cyan-400" : "bg-purple-500/20 text-purple-400"
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
  )
}
