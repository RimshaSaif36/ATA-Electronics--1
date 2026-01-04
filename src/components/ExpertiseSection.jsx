import React from "react";
import { motion as Motion } from "framer-motion";

const expertiseData = [
  {
    title: "CONVENTIONAL LIGHTING",
    description: "Indoor, outdoor, façade, and sports field illumination.",
    image: "/light.jpg",
  },
  {
    title: "LED TECHNOLOGY",
    description: "Smart, energy-efficient, and cost-effective lighting systems.",
    image: "/led.jpg",
  },
  {
    title: "LANDSCAPE LIGHTING",
    description: "Architectural & Enhancing aesthetics with creative designs.",
    image: "/land.jpg",
  },
  {
    title: "STREET LIGHTING",
    description: "Safe, efficient, and long-lasting urban solutions.",
    image: "/street.jpg",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="relative text-white py-8 sm:py-12 md:py-16 overflow-hidden px-4 sm:px-6">
      {/* Top Right Decorative Lines */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none opacity-50">
        <div className="absolute top-4 right-0 w-full h-[1px] bg-gradient-to-l from-[#d4af37] to-transparent rotate-[-45deg] translate-y-8" />
        <div className="absolute top-8 right-0 w-full h-[1px] bg-gradient-to-l from-[#d4af37] to-transparent rotate-[-45deg] translate-y-8" />
        <div className="absolute top-12 right-0 w-full h-[1px] bg-gradient-to-l from-[#d4af37] to-transparent rotate-[-45deg] translate-y-8" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <Motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-widest text-[#d4af37] uppercase"
          >
            Our Expertise
          </Motion.h2>
          <Motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: 200 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="h-[2px] bg-[#d4af37] mt-4"
          />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#d4af37]/30">
          {expertiseData.map((item, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-4 sm:p-6 border-[#d4af37]/30 flex flex-col items-center text-center
                ${index % 2 === 1 ? 'sm:border-r-0 lg:border-r' : 'sm:border-r'}
                ${index !== expertiseData.length - 1 && index < 2 ? 'border-b sm:border-b-0 lg:border-b-0' : ''}
                ${index !== expertiseData.length - 1 && index >= 2 && index < 3 ? 'border-b lg:border-b-0' : ''}`}
            >
              {/* Image Container */}
              <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden mb-4 sm:mb-6 relative rounded-xl">
                {/* Optional subtle hover overlay */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-[#d4af37]/10 transition-colors duration-500 z-10 rounded-xl" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-[#d4af37] font-semibold tracking-wider text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 uppercase">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[200px]">
                {item.description}
              </p>

              {/* Hover Line Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
