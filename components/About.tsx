"use client"

import { motion } from "framer-motion"
import { Zap, MapPin, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  const features = [
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
  ]

  return (
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
          {features.map((item, index) => (
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
  )
}
