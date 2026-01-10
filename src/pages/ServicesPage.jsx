

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Footer from "../components/Footer";

// export default function ServicesPage() {
//   const services = [
//     {
//       title: "Lighting Solutions",
//       description:
//         "Premium architectural and decorative lighting solutions designed to elevate luxury residential and commercial spaces with precision and elegance.",
//       image: "/light5.jpg",
//     },
//     {
//       title: "Sound Systems",
//       description:
//         "High-performance sound systems delivering immersive audio experiences for homes, offices, and commercial environments.",
//       image: "/sound.jpg",
//     },
//     {
//       title: "Batteries",
//       description:
//         "Reliable and long-lasting battery solutions engineered for consistent power and superior performance.",
//       image: "/battery.jpg",
//     },
//     {
//       title: "Microelectronics",
//       description:
//         "Advanced microelectronic solutions supporting innovation, automation, and modern smart technologies.",
//       image: "/microelectronics.jpg",
//     },
//   ];

//   // Hero background slider images
//   const heroImages = ["/light5.jpg", "/sound.jpg", "/microelectronics.jpg"];
//   const [currentHero, setCurrentHero] = useState(0);

//   // Auto slide hero images every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHero((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-black text-white overflow-hidden">

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
//         {/* Background Slider */}
//         <AnimatePresence>
//           {heroImages.map((img, index) =>
//             index === currentHero ? (
//               <motion.div
//                 key={img}
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${img})` }}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1 }}
//               />
//             ) : null
//           )}
//         </AnimatePresence>

//         {/* Golden Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

//         {/* Hero Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 px-6"
//         >
//           <p className="text-sm tracking-widest text-[#d4af37] mb-3">
//             OUR EXPERTISE
//           </p>

//           <h1 className="text-5xl md:text-7xl font-bold mb-4">
//             SERVICES
//           </h1>
//         </motion.div>
//       </section>

//       {/* ================= SERVICES SECTIONS ================= */}
//       {services.map((service, index) => (
//         <section key={index} className="py-20 px-6 md:px-16">
//           <div
//             className={`max-w-7xl mx-auto flex flex-col ${
//               index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//             } items-center gap-12`}
//           >
//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//               className="w-full md:w-1/2"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="rounded-xl shadow-2xl w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
//               />
//             </motion.div>

//             {/* Text */}
// <motion.div
//   initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 1 }}
//   className="w-full md:w-1/2 text-center md:text-left text-white"
// >
//   <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
//     {service.title}
//   </h2>

//   {/* <div className="w-20 h-1 bg-[#d4af37] mb-6" /> */}

//   <p className="text-sm md:text-base opacity-90 leading-relaxed mb-4 text-white">
//     {service.description}
//   </p>

//   <button className="border border-white text-white px-6 py-2 rounded hover:bg-white/10 transition">
//     Details
//   </button>
// </motion.div>

//           </div>
//         </section>
//       ))}

//       {/* ================= FOOTER ================= */}
//       <Footer />
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Lighting Solutions",
      description:
        "Premium architectural and decorative lighting solutions designed to elevate luxury residential and commercial spaces with precision and elegance.",
      image: "/light6.jpg",
      hoverImage: "/light5.jpg",
    },
    {
      title: "Sound Systems",
      description:
        "High-performance sound systems delivering immersive audio experiences for homes, offices, and commercial environments.",
      image: "/sound1.jpg",
      hoverImage: "/sound.jpg",
    },
    {
      title: "Batteries",
      description:
        "Reliable and long-lasting battery solutions engineered for consistent power and superior performance.",
      image: "/battery.jpg",
      hoverImage: "/battery1.jpg",
    },
    {
      title: "Microelectronics",
      description:
        "Advanced microelectronic solutions supporting innovation, automation, and modern smart technologies.",
      image: "/microelectronics.jpg",
      hoverImage: "/microelectronics2.jpg",
    },
  ];

  // Hero background slider images
  const heroImages = ["/light5.jpg", "/sound.jpg", "/microelectronics.jpg"];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 20px)",
          }}
        />
        <div className="absolute left-[15%] top-[20%] w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[160px]" />
        <div className="absolute right-[10%] bottom-[10%] w-[500px] h-[500px] bg-[#d4af37]/8 rounded-full blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#d4af37] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#d4af37]/60 to-transparent" />
      </div>
      <div className="relative z-10">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <AnimatePresence>
          {heroImages.map(
            (img, index) =>
              index === currentHero && (
                <motion.div
                  key={img}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              )
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <p className="text-sm tracking-widest text-[#d4af37] mb-3">
            OUR EXPERTISE
          </p>
          <h1 className="text-5xl md:text-7xl font-bold">SERVICES</h1>
        </motion.div>
      </section>

      {/* ================= SERVICES SECTIONS ================= */}
      {services.map((service, index) => (
        <section key={index} className="py-20 px-6 md:px-16">
          <div
            className={`max-w-7xl mx-auto flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-12`}
          >

            {/* IMAGE WITH HOVER EFFECT */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden"
                whileHover="hover"
              >
                {/* Default Image */}
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  variants={{
                    hover: { opacity: 0, scale: 1.05 },
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Hover Image */}
                <motion.img
                  src={service.hoverImage}
                  alt={`${service.title} hover`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  variants={{
                    hover: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Golden Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <span className="text-[#d4af37] tracking-widest text-sm">
                    VIEW DETAILS
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {service.title}
              </h2>

              <p className="text-sm md:text-base opacity-90 leading-relaxed mb-6">
                {service.description}
              </p>

              <button className="border border-white px-6 py-2 rounded hover:bg-white/10 transition">
                Details
              </button>
            </motion.div>
          </div>
        </section>
      ))}

      <Footer />
      </div>
    </div>
  );
}
