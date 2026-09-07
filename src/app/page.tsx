"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [timeLeft, setTimeLeft] = useState({ days: 50, hours: 12, mins: 45, secs: 30 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-10-28T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting...");
    
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus(data.error || "error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center font-sans overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

      <main className="relative z-10 flex flex-col items-center max-w-2xl px-6 text-center space-y-10">
        
        <div className="flex flex-col items-center space-y-2">
          <div className="text-cyan-400 font-bold tracking-widest uppercase text-sm border border-cyan-400/30 px-3 py-1 rounded-full backdrop-blur-sm">
            ViBuild 3D
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">
            Precision Manufacturing.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
            High-fidelity 3D printed tech, decor, and industrial models. The future of personalized manufacturing is almost here.
          </p>
        </div>

        {mounted && (
          <div className="flex gap-2 sm:gap-4 items-center justify-center pt-4">
            <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 w-16 sm:w-20 backdrop-blur-md">
              <span className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.days}</span>
              <span className="text-[10px] sm:text-xs text-gray-500 uppercase font-semibold tracking-wider mt-1">Days</span>
            </div>
            <div className="text-2xl text-gray-600">:</div>
            <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 w-16 sm:w-20 backdrop-blur-md">
              <span className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.hours}</span>
              <span className="text-[10px] sm:text-xs text-gray-500 uppercase font-semibold tracking-wider mt-1">Hours</span>
            </div>
            <div className="text-2xl text-gray-600">:</div>
            <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 w-16 sm:w-20 backdrop-blur-md">
              <span className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.mins}</span>
              <span className="text-[10px] sm:text-xs text-gray-500 uppercase font-semibold tracking-wider mt-1">Mins</span>
            </div>
            <div className="text-2xl text-gray-600">:</div>
            <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 w-16 sm:w-20 backdrop-blur-md">
              <span className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.secs}</span>
              <span className="text-[10px] sm:text-xs text-gray-500 uppercase font-semibold tracking-wider mt-1">Secs</span>
            </div>
          </div>
        )}

        <div className="w-full max-w-md mx-auto p-1 bg-white/5 rounded-xl border border-white/10 backdrop-blur-lg mt-8">
          <form onSubmit={handleSubmit} className="flex items-center gap-2 p-1">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              required
              className="flex-1 bg-transparent border-none outline-none px-4 text-white placeholder:text-gray-500"
            />
            <button 
              type="submit" 
              disabled={status === "submitting..."}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] disabled:opacity-50"
            >
              {status === "submitting..." ? "..." : "Notify Me"}
            </button>
          </form>
        </div>
        
        {status === "success" && <p className="text-cyan-400 text-sm">Successfully added to the waitlist!</p>}
        {status && status !== "success" && status !== "submitting..." && <p className="text-red-400 text-sm">{status}</p>}

        <p className="text-sm text-gray-600">
          Launching October 28, 2026. Join the waitlist for early access.
        </p>
      </main>
    </div>
  );
}
