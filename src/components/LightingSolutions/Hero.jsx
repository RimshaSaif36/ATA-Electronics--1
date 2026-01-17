import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Residential Lighting", path: "/residential-lighting" },
    { name: "Architectural Lighting", path: "/architectural-lighting" },
    { name: "Commercial Lighting", path: "/commercial-lighting" },
    { name: "Outdoor Lighting", path: "/outdoor-lighting" },
  ];

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
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">
        <img
          src="/logo2.png"
          alt="ATA Electronics Logo"
          className="w-20 sm:w-32 md:w-40"
        />

        <button
          onClick={() => setIsMenuOpen(true)}
          className="px-5 py-2 rounded-full bg-[#d4af37] text-black text-sm font-medium"
        >
          MENU
        </button>
      </header>

      {/* MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end items-start">

          {/* BACKDROP */}
          {/* <div 
      className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-md
                 animate-[fadeIn_0.4s_ease-out]"
      onClick={() => setIsMenuOpen(false)}
    /> */}

          {/* MENU PANEL */}
          <div
            className="relative w-full sm:w-[450px] max-h-[90vh] overflow-auto
           bg-white/5 backdrop-blur-2xl
           sm:rounded-l-3xl
           shadow-[0_30px_80px_rgba(0,0,0,0.7)]
           transform translate-x-0 animate-[slideInRight_0.5s_ease-out]"

          >

            {/* DECORATIVE ELEMENTS */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d4af37]/20 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#d4af37]/15 to-transparent rounded-tr-full" />

            {/* HEADER */}
            <div className="relative p-8 sm:p-10 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  {/* <h2 className="text-2xl font-bold text-white mb-1">
              Lighting Solutions
            </h2>
            <p className="text-sm text-white/70">
              Illuminate Your Vision
            </p> */}
                </div>

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative w-10 h-10 rounded-full 
                       bg-white/10 hover:bg-[#d4af37] 
                       transition-all duration-300 
                       hover:rotate-90 hover:scale-110"
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white group-hover:text-black transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-[#d4af37]/30 transition-all duration-300" />
                </button>
              </div>
            </div>

            {/* MENU ITEMS */}
            <div className="p-8 sm:p-10 space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative block p-4
           transition-all duration-300 ease-out
           transform hover:translate-x-2
           animate-[slideUp_0.6s_ease-out]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >

                  {/* BACKGROUND GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/5 to-[#d4af37]/0 
                            transform -translate-x-full group-hover:translate-x-full 
                            transition-transform duration-700 ease-out" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* ICON */}
                      {/* <div className="w-12 h-12 rounded-lg bg-[#d4af37]/20 
                               flex items-center justify-center
                               group-hover:bg-[#d4af37] group-hover:scale-110
                               transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-sm 
                                 group-hover:from-black group-hover:to-gray-800
                                 transition-all duration-300" />
                </div> */}

                      {/* TEXT */}
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-[#d4af37] 
                                transition-colors duration-300">
                          {item.name}
                        </h3>
                        {/* <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                    Premium solutions
                  </p> */}
                      </div>
                    </div>

                    {/* ARROW */}
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-white/40 group-hover:text-[#d4af37] 
                            transform group-hover:translate-x-1 group-hover:scale-125
                            transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* FOOTER */}
            <div className="relative p-8 sm:p-10 border-t border-white/10 bg-black/20">
              <div className="text-center">
                {/* <p className="text-sm text-white/60 mb-2">
            Ready to illuminate your space?
          </p>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f4d03f] 
                           text-black font-semibold text-sm
                           hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]
                           hover:scale-105 transform transition-all duration-300">
            Get Quote
          </button> */}
              </div>
            </div>
          </div>
        </div>
      )}


      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center min-h-[75vh] pt-28">

        {/* TAGLINE */}
        <div className="flex items-center gap-4 text-xs sm:text-sm opacity-80 mb-6">
          <span className="w-10 h-px bg-white/40" />
          <span>Precision Power Performance</span>
          <span className="w-10 h-px bg-white/40" />
        </div>

        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-snug">
          ATA Electronics
          <br />
          <span>Defining Luxury</span>
        </h1>

        {/* STATS */}
        <div className="absolute bottom-16 w-full flex flex-col sm:flex-row justify-center gap-6 text-xs sm:text-sm opacity-90">
          <Stat text="+200 Projects Illuminated" />
          <Stat text="+100 Happy Clients" />
          <Stat text="+8 Years of Brilliance" />
          <Stat text="+15 Awards & Accolades" />
        </div>
      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-20
                   w-14 h-14 rounded-full bg-[#25D366]
                   flex items-center justify-center
                   shadow-xl hover:scale-110 transition"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </section>
  );
}

/* STAT */
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
