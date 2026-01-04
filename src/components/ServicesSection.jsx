

// import React, { useEffect, useState } from "react";

// export default function ServicesSection() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center">

//       {/* LEFT IMAGE (placeholder) */}
//       <div
//         className="absolute left-0 top-1/2 w-[35%] h-[70%] -translate-y-1/2"
//         style={{
//           transform: `translateY(${scrollY * 0.15}px)`
//         }}
//       >
//         {/* ADD IMAGE HERE */}
//         <img src="/ata(1).jpg" className="w-full h-full object-cover" />
//       </div>

//       {/* RIGHT IMAGE (placeholder) */}
//       <div
//         className="absolute right-0 top-1/2 w-[35%] h-[70%] -translate-y-1/2"
//         style={{
//           transform: `translateY(-${scrollY * 0.15}px)`
//         }}
//       >
//         {/* ADD IMAGE HERE */}
//         <img src="/ata2.jpg" className="w-full h-full object-cover" />
//       </div>

//       {/* CENTER CONTENT */}
//       <div className="relative z-10 text-center max-w-xl px-6">
//         <p className="text-sm opacity-70 mb-3">Services</p>

//         <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
//           Residential Lighting
//           <br />
//           Solutions
//         </h2>

//         <button className="mt-8 px-6 py-2 border border-white/60 rounded-full text-sm hover:bg-white hover:text-black transition">
//           SEE MORE
//         </button>

//         {/* GOLD BAR */}
//         <div className="mt-16 w-48 h-3 rounded-full bg-gradient-to-r from-[#8f7424] via-[#f5e7a1] to-[#8f7424] mx-auto" />
//       </div>

//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center bg-black px-4 py-12 md:py-0">

      {/* LEFT IMAGE - HIDDEN ON MOBILE */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:block absolute left-0 top-1/2 w-[35%] h-[70%] -translate-y-1/2"
      >
        <img
          src="/ata(1).jpg"
          alt="Left Service"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </motion.div>

      {/* RIGHT IMAGE - HIDDEN ON MOBILE */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:block absolute right-0 top-1/2 w-[35%] h-[70%] -translate-y-1/2"
      >
        <img
          src="/ata2.jpg"
          alt="Right Service"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </motion.div>

      {/* CENTER CONTENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center max-w-2xl px-4 sm:px-6"
      >
        <p className="text-xs sm:text-sm opacity-70 mb-3 tracking-wide">Services</p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Residential Lighting
          <br />
          Solutions
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/services")}
          className="mt-6 sm:mt-8 px-6 py-2 border border-white/60 rounded-full text-xs sm:text-sm hover:bg-white hover:text-black transition"
        >
          SEE MORE
        </motion.button>

        {/* GOLD BAR */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "12rem" }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 sm:mt-16 h-3 rounded-full bg-linear-to-r from-[#8f7424] via-[#f5e7a1] to-[#8f7424] mx-auto"
        />
      </motion.div>
    </section>
  );
}
