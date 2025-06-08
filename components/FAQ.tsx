"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
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
  )
}
