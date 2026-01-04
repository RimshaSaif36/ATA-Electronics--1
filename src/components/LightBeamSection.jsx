import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LightBeamSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Light beam movement
  const beamX = useTransform(scrollYProgress, [0, 1], ["-40%", "120%"]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.6], [40, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen md:h-screen overflow-hidden flex items-center justify-center px-4 py-12 md:py-0"
    >
      {/* LEFT IMAGE PLACEHOLDER */}
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[70%] ">
        {/* image yahan add karna */}
        <img
  src="/ata1.jpg"
  alt="Lighting Design"
  className="w-full h-full object-cover"
/>

      </div>

      {/* RIGHT IMAGE PLACEHOLDER */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[70%] opacity-40">
       

       
      </div>

      {/* LIGHT BEAM */}
      <Motion.div
        style={{ x: beamX }}
        className="hidden md:block absolute top-1/2 h-[2px] w-[40%]
        bg-gradient-to-r from-transparent via-[#d4af37] to-transparent
        blur-sm"
      />

      {/* GLOW */}
      <Motion.div
        style={{ x: beamX }}
        className="hidden md:block absolute top-1/2 h-[120px] w-[120px]
        bg-[#d4af37]/10 rounded-full blur-3xl"
      />

      {/* TEXT */}
      <Motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-2xl"
      >
        <p className="text-xs sm:text-sm tracking-widest text-[#d4af37] mb-3 sm:mb-4">
          OUR PHILOSOPHY
        </p>

        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          Lighting is not just brightness,
          <br />
          it’s emotion.
        </h2>
      </Motion.div>
    </section>
  );
}
