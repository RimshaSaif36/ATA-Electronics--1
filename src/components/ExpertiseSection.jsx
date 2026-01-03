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
    <section className="relative text-white py-12 overflow-hidden">
      {/* Top Right Decorative Lines */}
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-50">
        <div className="absolute top-4 right-0 w-full h-[1px] bg-gradient-to-l from-[#d4af37] to-transparent rotate-[-45deg] translate-y-8" />
        <div className="absolute top-8 right-0 w-full h-[1px] bg-gradient-to-l from-[#d4af37] to-transparent rotate-[-45deg] translate-y-8" />
        <div className="absolute top-12 right-0 w-full h-[1px] bg-gradient-to-l from-[#d4af37] to-transparent rotate-[-45deg] translate-y-8" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <Motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-light tracking-widest text-[#d4af37] uppercase"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#d4af37]/30">
          {expertiseData.map((item, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 border-[#d4af37]/30 flex flex-col items-center text-center
                ${index !== expertiseData.length - 1 ? 'lg:border-r border-b lg:border-b-0' : ''}
                ${index === 1 ? 'md:border-r-0 lg:border-r' : ''}`}
            >
              {/* Image Container */}
              <div className="w-full h-48 md:h-64 overflow-hidden mb-6 relative rounded-xl">
                {/* Optional subtle hover overlay */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-[#d4af37]/10 transition-colors duration-500 z-10 rounded-xl" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-[#d4af37] font-semibold tracking-wider text-lg mb-3 uppercase">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
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
