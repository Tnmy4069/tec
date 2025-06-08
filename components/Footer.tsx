"use client"

export default function Footer() {
  return (
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
  )
}
