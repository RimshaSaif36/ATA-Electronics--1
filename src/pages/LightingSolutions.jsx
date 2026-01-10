import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function LightingSolutions() {
    const navigate = useNavigate();
    const lightingSolutions = [
        {
            title: "Residential Lighting",
            description:
                "Transform your home with premium architectural and decorative lighting solutions. Our residential lighting designs elevate luxury spaces with precision and elegance, creating the perfect ambiance for every room.",
            image: "/light6.jpg",
            hoverImage: "/light5.jpg",
            link: "/residential-lighting",
        },
        {
            title: "Architectural Lighting",
            description:
                "Illuminate buildings with stunning architectural lighting that showcases structural beauty and enhances nighttime aesthetics. Perfect for commercial buildings, museums, and landmark structures.",
            image: "/light5.jpg",
            hoverImage: "/light6.jpg",
            link: "/architectural-lighting",
        },
        {
            title: "Commercial Lighting",
            description:
                "Professional lighting solutions for offices, retail spaces, and commercial environments. Our systems provide optimal visibility and energy efficiency while maintaining a sophisticated aesthetic.",
            image: "/light6.jpg",
            hoverImage: "/light5.jpg",
            link: "/commercial-lighting",
        },
        {
            title: "Outdoor Lighting",
            description:
                "Enhance outdoor spaces with durable and stylish lighting solutions. From landscape lighting to facade illumination, we create stunning visual impacts for exterior environments.",
            image: "/light5.jpg",
            hoverImage: "/light6.jpg",
            link: "/outdoor-lighting",
        },
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
                <Navbar />

                {/* ================= HERO SECTION ================= */}
                <section className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="px-6 max-w-3xl"
                    >
                        <p className="text-sm tracking-widest text-[#d4af37] mb-3">
                            ILLUMINATING SPACES
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            LIGHTING SOLUTIONS
                        </h1>
                        <p className="text-base md:text-lg text-white/80 leading-relaxed">
                            Welcome to a realm where light transcends the ordinary. At ATA Electronics,
                            our lighting services are more than solutions—they're a fusion of art,
                            innovation, and technology. Step into our universe where every project is
                            a masterpiece crafted to elevate your space into a beacon of brilliance.
                        </p>
                    </motion.div>
                </section>

                {/* ================= LIGHTING SOLUTIONS SECTIONS ================= */}
                {lightingSolutions.map((solution, index) => (
                    <section key={index} className="py-20 px-6 md:px-16">
                        <div
                            className={`max-w-7xl mx-auto flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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
                                        src={solution.image}
                                        alt={solution.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        variants={{
                                            hover: { opacity: 0, scale: 1.05 },
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />

                                    {/* Hover Image */}
                                    <motion.img
                                        src={solution.hoverImage}
                                        alt={`${solution.title} hover`}
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
                                            EXPLORE
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
                                    {solution.title}
                                </h2>

                                <p className="text-sm md:text-base opacity-90 leading-relaxed mb-6">
                                    {solution.description}
                                </p>

                                <button
                                    onClick={() => navigate(solution.link)}
                                    className="border border-[#d4af37] text-[#d4af37] px-8 py-2 rounded hover:bg-[#d4af37]/10 transition duration-300">
                                    Learn More
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
