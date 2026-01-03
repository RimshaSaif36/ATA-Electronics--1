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
        <source src="http://environls.com/wp-content/uploads/2025/02/curtain-shiny-golden-particles-with-bright-lightin-2023-11-27-04-56-40-utc.mp4" type="video/mp4" />
      </video>

      {/* HEADER */}
      <header className="relative z-10 flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f5e7a1] to-[#b8962e]" />
          <div>
            <p className="text-xs tracking-widest opacity-70">ATA Electronics</p>
            <p className="text-[10px] opacity-50">LIGHTING LLC</p>
          </div>
        </div>

        <button className="px-6 py-2 rounded-full bg-[#d4af37] text-black font-medium">
          MENU
        </button>
      </header>

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[75vh] px-6">

        <div className="flex items-center gap-4 text-sm opacity-80 mb-6">
          <span className="w-12 h-px bg-white/40" />
          Precision Power Performance
          <span className="w-12 h-px bg-white/40" />
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          ATA Electronics
          <br />
          <span className="text-[#d4af37]">DEFINING LUXURY</span>
        </h1>

        {/* STATS */}
        <div className="absolute bottom-16 w-full flex justify-center gap-12 text-sm opacity-90">
          <Stat text="+200 Projects Illuminated" />
          <Stat text="+100 Happy Clients" />
          <Stat text="+8 Years of Brilliance" />
          <Stat text="+15 Awards & Accolades" />
        </div>
      </div>

      {/* WHATSAPP */}
      {/* <div className="fixed bottom-6 right-6 z-20 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center">
        <span className="text-black text-xl">✆</span>
      </div> */}
    <a
  href="https://wa.me/91XXXXXXXXXX"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-20 w-14 h-14
             bg-[#25D366] rounded-full
             flex items-center justify-center
             shadow-xl
             transition-all duration-300
             hover:scale-110 hover:shadow-2xl"
>
  <FaWhatsapp className="text-white text-3xl" />
</a>



    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

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
