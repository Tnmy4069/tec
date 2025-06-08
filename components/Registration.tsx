"use client"

import { motion } from "framer-motion"
import { Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Registration() {
  return (
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
  )
}
