import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/LightingSolutions/Footer";
import Navbar from "../../components/LightingSolutions/Navbar";

export default function CommercialLighting() {
    const navigate = useNavigate();

    const features = [
        {
            title: "Professional Workspaces Optimized",
            description:
                "Commercial lighting goes beyond aesthetics—it directly impacts productivity and employee well-being. Our solutions provide optimal illumination levels that reduce eye strain and fatigue. With flicker-free LED technology and balanced color rendering, we create professional environments that enhance focus and concentration across offices, retail spaces, and commercial facilities.",
            image: "/light6.jpg",
        },
        {
            title: "Retail Excellence & Brand Experience",
            description:
                "For retail environments, lighting is a powerful tool for product showcase and customer engagement. Our commercial systems highlight merchandise, create welcoming atmospheres, and guide customer flow. Advanced dimming and color temperature controls allow retailers to adapt lighting to different times of day and seasonal promotions, maximizing sales impact.",
            image: "/light5.jpg",
        },
        {
            title: "Sustainability & Cost Savings",
            description:
                "Commercial spaces demand energy-efficient solutions. Our LED systems consume 70% less energy than traditional lighting while delivering superior performance. Smart controls enable occupancy-based dimming and daylight harvesting, significantly reducing operational costs. With long lifespans and minimal maintenance, our commercial lighting is a smart investment for any enterprise.",
            image: "/light6.jpg",
        },
    ];

    const galleryImages = [
        "/light5.jpg",
        "/light6.jpg",
        "/light5.jpg",
        "/light6.jpg",
        "/light5.jpg",
        "/light6.jpg",
    ];

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Background Effects */}
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
<section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/commercial.jpg')" }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 px-6 max-w-4xl text-white"
  >
    <p className="text-sm tracking-widest text-[#d4af37] mb-3">
      COMMERCIAL SOLUTIONS
    </p>

    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      COMMERCIAL LIGHTING
    </h1>

    <p className="text-base md:text-lg text-white/80 leading-relaxed">
      Elevate your commercial spaces with intelligent lighting solutions
      that enhance productivity, showcase your brand, and optimize energy
      efficiency for your bottom line.
    </p>

    {/* Back Button */}
    <motion.button
      onClick={() => navigate("/lighting-solutions")}
      className="mt-8 border border-[#d4af37] text-[#d4af37] px-6 py-2 rounded hover:bg-[#d4af37]/10 transition duration-300"
      whileHover={{ scale: 1.05 }}
    >
      ← Back to Lighting Solutions
    </motion.button>
  </motion.div>

</section>


                {/* ================= FEATURES SECTION ================= */}


                {/* ================= GALLERY SECTION ================= */}
                <section className="py-20 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-center mb-16"
                        >
                            <p className="text-sm tracking-widest text-[#d4af37] mb-3">
                                OUR PORTFOLIO
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Commercial Projects
                            </h2>
                            <div className="w-20 h-1 bg-[#d4af37] mx-auto" />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {galleryImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative h-64 md:h-72 rounded-lg overflow-hidden group cursor-pointer"
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                        <span className="text-[#d4af37] tracking-widest text-sm">
                                            VIEW
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= CTA SECTION ================= */}
                <section className="py-20 px-6 md:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                            Enhance Your Commercial Space Today
                        </h2>
                        <p className="text-base opacity-90 leading-relaxed mb-8">
                            Our commercial lighting solutions are designed to maximize productivity,
                            reduce costs, and create an impressive brand experience for your clients.
                        </p>
                        <button className="border border-[#d4af37] text-[#d4af37] px-8 py-3 rounded hover:bg-[#d4af37]/10 transition duration-300">
                            Get in touch
                        </button>
                    </motion.div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
