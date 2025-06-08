"use client"

import { motion } from "framer-motion"
import { Trophy, Award, BookOpen, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Rewards() {
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

  return (
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
  )
}
