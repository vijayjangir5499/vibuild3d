"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Cuboid as Cube, 
  Leaf, 
  Smartphone, 
  Building2, 
  Layers,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Leaf className="w-8 h-8 text-cyan-400" />,
      title: "Custom Planters",
      desc: "Unique, 3D printed planters designed to elevate your indoor greenery. Personalize shapes, sizes, and colors.",
      type: "B2C"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      title: "Mobile Cases",
      desc: "Durable and stylish phone cases manufactured on-demand. Unmatched protection with your personal touch.",
      type: "B2C"
    },
    {
      icon: <Building2 className="w-8 h-8 text-indigo-400" />,
      title: "Architectural Models",
      desc: "High-fidelity architectural scale models for presentations, real estate, and structural analysis.",
      type: "B2B"
    },
    {
      icon: <Layers className="w-8 h-8 text-indigo-400" />,
      title: "Bulk Production",
      desc: "Rapid prototyping and batch manufacturing. Reliable, scalable 3D printing solutions for your business needs.",
      type: "B2B"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-cyan-500 to-indigo-500 p-2 rounded-lg">
              <Cube className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-wide">ViBuild 3D</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a>
            <button className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full text-white transition-all">
              Contact Sales
            </button>
          </div>

          <button 
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-4 bg-[#0a0a0a] border-b border-white/10 flex flex-col gap-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">About Us</a>
            <button className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-medium">Contact Sales</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              The Future of Manufacturing
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
          >
            Precision 3D Printing <br className="hidden md:block"/> for Everyone.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            From custom personalized planters and mobile cases to high-fidelity architectural models and bulk B2B manufacturing. We bring your ideas to life.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              Explore Products <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-all backdrop-blur-sm">
              Partner with Us
            </button>
          </motion.div>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Serving both individual creators and enterprise businesses with unmatched quality and precision.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                    service.type === 'B2C' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-indigo-500/10 text-indigo-400'
                  }`}>
                    {service.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-950/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10 p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to print your vision?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Join hundreds of customers and businesses scaling their manufacturing with ViBuild 3D.
          </p>
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            Get a Custom Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Cube className="w-5 h-5 text-cyan-500" />
            <span className="font-bold text-lg">ViBuild 3D</span>
          </div>
          <div className="text-gray-500 text-sm flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-gray-600 text-sm">
            &copy; 2026 ViBuild 3D. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

