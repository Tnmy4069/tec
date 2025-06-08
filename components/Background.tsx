"use client"

export default function Background() {
  return (
    <>
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
    </>
  )
}
