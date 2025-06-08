"use client"

export default function Background() {
  return (
    <>
      {/* Epic Animated Space Background */}
      <div className="fixed inset-0 z-0">
        {/* Deep Space Image Layer */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/space-bg.jpg')" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-900/40 to-blue-900/40" />

        {/* Twinkling Stars */}
        <div className="stars absolute inset-0" />

        {/* Nebula Mist */}
        <div className="nebula absolute inset-0" />

        {/* Shooting Stars */}
        <div className="shooting-stars absolute inset-0 pointer-events-none" />

        {/* Floating Cosmic Particles */}
        <div className="floating-particles absolute inset-0" />
      </div>

      <style jsx>{`
        .stars {
          background: transparent url("https://www.transparenttextures.com/patterns/stardust.png") repeat;
          animation: twinkle 60s linear infinite;
        }

        .nebula::before {
          content: '';
          position: absolute;
          top: -30%;
          left: -30%;
          width: 160%;
          height: 160%;
          background: radial-gradient(circle at center, rgba(255, 0, 255, 0.08), transparent 60%),
                      radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.05), transparent 70%),
                      radial-gradient(circle at 80% 80%, rgba(255, 255, 0, 0.05), transparent 70%);
          animation: nebulaMove 50s ease-in-out infinite;
        }

        .shooting-stars::before {
          content: '';
          position: absolute;
          width: 2px;
          height: 100px;
          top: -10%;
          left: 50%;
          background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0));
          transform: rotate(45deg);
          animation: shooting 6s ease-in-out infinite;
        }

        .floating-particles::before {
          content: '';
          position: absolute;
          width: 300%;
          height: 300%;
          background:
            linear-gradient(60deg, transparent 30%, rgba(139, 92, 246, 0.05) 50%, transparent 70%),
            linear-gradient(120deg, transparent 30%, rgba(16, 185, 129, 0.03) 50%, transparent 70%);
          background-size: 500px 500px, 400px 400px;
          animation: floatShift 40s ease-in-out infinite, rotateBG 60s linear infinite;
          opacity: 0.6;
        }

        @keyframes twinkle {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }

        @keyframes nebulaMove {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        @keyframes shooting {
          0% {
            top: -10%;
            left: 60%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            top: 120%;
            left: 40%;
            opacity: 0;
          }
        }

        @keyframes floatShift {
          0%, 100% {
            background-position: 0% 0%, 100% 100%;
          }
          50% {
            background-position: 100% 0%, 0% 100%;
          }
        }

        @keyframes rotateBG {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}
