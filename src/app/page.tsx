import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center font-sans overflow-hidden relative">
      {/* Abstract Tech Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

      <main className="relative z-10 flex flex-col items-center max-w-2xl px-6 text-center space-y-10">
        
        {/* Logo / Brand */}
        <div className="flex flex-col items-center space-y-2">
          <div className="text-cyan-400 font-bold tracking-widest uppercase text-sm border border-cyan-400/30 px-3 py-1 rounded-full backdrop-blur-sm">
            Shriji 3D Tech
          </div>
        </div>

        {/* Hero Copy */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">
            Precision Manufacturing.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
            High-fidelity 3D printed tech, decor, and industrial models. The future of personalized manufacturing is almost here.
          </p>
        </div>

        {/* Countdown */}
        <div className="flex gap-4 items-center justify-center pt-4">
          <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-lg p-4 w-20 backdrop-blur-md">
            <span className="text-3xl font-bold text-white">50</span>
            <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider mt-1">Days</span>
          </div>
          <div className="text-2xl text-gray-600">:</div>
          <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-lg p-4 w-20 backdrop-blur-md">
            <span className="text-3xl font-bold text-white">12</span>
            <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider mt-1">Hours</span>
          </div>
          <div className="text-2xl text-gray-600">:</div>
          <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-lg p-4 w-20 backdrop-blur-md">
            <span className="text-3xl font-bold text-white">45</span>
            <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider mt-1">Mins</span>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="w-full max-w-md mx-auto p-1 bg-white/5 rounded-xl border border-white/10 backdrop-blur-lg mt-8">
          <form className="flex items-center gap-2 p-1">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              className="flex-1 bg-transparent border-none outline-none px-4 text-white placeholder:text-gray-500"
            />
            <button 
              type="submit" 
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              Notify Me
            </button>
          </form>
        </div>
        
        <p className="text-sm text-gray-600">
          Launching October 28, 2026. Join the waitlist for early access.
        </p>

      </main>
    </div>
  );
}
