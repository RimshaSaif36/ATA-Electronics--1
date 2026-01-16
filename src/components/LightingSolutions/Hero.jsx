import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="http://environls.com/wp-content/uploads/2025/02/curtain-shiny-golden-particles-with-bright-lightin-2023-11-27-04-56-40-utc.mp4"
          type="video/mp4"
        />
      </video>

      {/* HEADER */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-10 py-2 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src="/logo2.png"
            alt="ATA Electronics Logo"
            className="w-20 sm:w-32 md:w-40"
          />
        </div>

        <button className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-[#d4af37] text-black font-medium text-xs sm:text-sm">
          MENU
        </button>
      </header>

      {/* CENTER CONTENT (SHIFTED UP) */}
      <div className="relative z-10 flex flex-col items-center justify-start text-center min-h-[75vh] px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32">

        {/* TAGLINE */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm opacity-80 mb-4 sm:mb-6">
          <span className="w-8 sm:w-12 h-px bg-white/40" />
          <span className="whitespace-nowrap">
            Precision Power Performance
          </span>
          <span className="w-8 sm:w-12 h-px bg-white/40" />
        </div>

        {/* HEADING */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-snug">
          ATA Electronics
          <br />
          <span className="text-white">Defining Luxury</span>
        </h1>

        {/* STATS */}
        <div className="absolute bottom-14 sm:bottom-20 w-full px-4 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-12 text-xs sm:text-sm opacity-90">
          <Stat text="+200 Projects Illuminated" />
          <Stat text="+100 Happy Clients" />
          <Stat text="+8 Years of Brilliance" />
          <Stat text="+15 Awards & Accolades" />
        </div>
      </div>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 w-12 h-12 sm:w-14 sm:h-14
          bg-[#25D366] rounded-full flex items-center justify-center
          shadow-xl transition-all duration-300
          hover:scale-110 hover:shadow-2xl"
      >
        <FaWhatsapp className="text-white text-xl sm:text-3xl" />
      </a>

    </section>
  );
}

/* ---------------- STAT COMPONENT ---------------- */

function Stat({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
        <div className="w-3 h-3 rotate-45 bg-[#d4af37]" />
      </div>
      <span>{text}</span>
    </div>
  );
}
