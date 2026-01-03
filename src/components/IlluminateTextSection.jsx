import React from "react";
import { motion as Motion } from "framer-motion";

export default function IlluminateTextSection() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">



      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">

        {/* BIG MASKED TEXT */}
        <Motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1.08 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[22vw] md:text-[18vw] font-black tracking-tighter uppercase leading-none"
          style={{
            backgroundImage: "url('/light.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",

            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",

            filter: "brightness(1.3) contrast(1.15)"
          }}
        >
          SPARK
        </Motion.h1>

        {/* SUB HEADING */}
        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-6 text-[#d4af37] text-sm md:text-base tracking-widest uppercase"
        >
          Igniting smarter lighting solutions
        </Motion.p>

        {/* CTA BUTTON */}
        <Motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-10 px-8 py-3 border border-[#d4af37] text-[#d4af37] uppercase tracking-wider text-sm
                     hover:bg-[#d4af37] hover:text-black transition duration-300"
        >
          Explore Our Lighting
        </Motion.button>
      </div>
    </section>
  );
}
