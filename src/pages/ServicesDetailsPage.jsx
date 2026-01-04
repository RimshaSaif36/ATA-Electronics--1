import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ServicesDetailsPage() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Residential Lighting",
      description: "Transform your living spaces with elegant and functional lighting solutions."
    },
    {
      title: "Commercial Solutions",
      description: "Illuminate your business with professional-grade lighting systems."
    },
    {
      title: "Smart Automation",
      description: "Control your lighting with modern smart home technology."
    },
    {
      title: "Custom Design",
      description: "Bespoke lighting installations tailored to your unique needs."
    }
  ];

  return (
    <section className="relative min-h-screen bg-black text-white py-20 px-4">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[15%] top-[20%] w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[160px]" />
        <div className="absolute right-[10%] bottom-[10%] w-[500px] h-[500px] bg-[#d4af37]/8 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            <span className="text-white">OUR SERVICES</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Welcome to a realm where light transcends the ordinary. At Environ Lighting, 
            our services are more than solutions—they're a fusion of art, innovation, 
            and technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="p-8 border border-[#d4af37]/30 rounded-lg hover:border-[#d4af37] transition backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#d4af37]">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gold Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "12rem" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 rounded-full bg-gradient-to-r from-[#8f7424] via-[#f5e7a1] to-[#8f7424] mx-auto mb-12"
        />

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 border border-[#d4af37] text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-black transition font-semibold"
          >
            ← BACK TO HOME
          </button>
        </motion.div>
      </div>
    </section>
  );
}
