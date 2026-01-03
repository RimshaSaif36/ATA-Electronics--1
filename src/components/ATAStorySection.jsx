import React from "react";
import { motion as Motion } from "framer-motion";

export default function ATAStorySection() {
  return (
    <section className="text-white py-12 px-6 overflow-hidden relative">

      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image Area - Improved Layout */}
        <div className="relative w-full h-125 flex items-center justify-center">
          
          {/* Decorative Circle */}
          <div className="absolute w-87.5 h-87.5 border border-[#d4af37]/20 rounded-full opacity-50 animate-pulse" />

          {/* Main Center Image */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/10"
          >
            <img 
              src="/ata2.jpg" 
              alt="Main Feature" 
              className="w-full h-full object-cover"
            />
          </Motion.div>

          {/* Top Left Floating Image */}
          <Motion.div
            initial={{ x: -50, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-10 left-4 md:left-10 w-40 h-40 md:w-56 md:h-56 rounded-xl overflow-hidden border border-[#d4af37]/20 shadow-lg z-0"
          >
            <img 
              src="/light.jpg" 
              alt="Light Feature" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-500"
            />
          </Motion.div>

          {/* Bottom Right Floating Image */}
          <Motion.div
            initial={{ x: 50, y: 50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-10 right-4 md:right-10 w-44 h-36 md:w-60 md:h-48 rounded-xl overflow-hidden border border-[#d4af37]/20 shadow-lg z-20"
          >
            <img 
              src="/solar.jpg" 
              alt="Solar Feature" 
              className="w-full h-full object-cover"
            />
          </Motion.div>
        </div>

        {/* Text Area */}
        <Motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#d4af37]"></span>
            <span className="text-[#d4af37] tracking-widest text-sm font-medium uppercase">
              Our Philosophy
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            It’s <span className="text-[#d4af37]">Simple.</span>
          </h2>

          <h3 className="text-2xl font-light mb-6 text-gray-200 border-l-4 border-[#d4af37] pl-4">
            Smart Energy & Electronics Solutions
          </h3>

          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
            At <span className="font-semibold text-white">ATA Electronics</span>
            , we believe modern technology powers a smarter future. From
            advanced batteries and efficient lighting to complete solar
            solutions, we help homes and businesses move towards reliable and
            sustainable energy.
          </p>

          <button className="group flex items-center gap-3 bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e6c65c] transition-all transform hover:scale-105">
            Read Our Story
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </Motion.div>
      </div>
    </section>
  );
}
