import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Lighting Solutions", path: "/lighting-solutions" },
    { name: "Residential Lighting", path: "/residential-lighting" },
    { name: "Architectural Lighting", path: "/architectural-lighting" },
    { name: "Commercial Lighting", path: "/commercial-lighting" },
    { name: "Outdoor Lighting", path: "/outdoor-lighting" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">
        <Link to="/">
          <img
            src="/logo2.png"
            alt="ATA Electronics Logo"
            className="w-20 sm:w-32 md:w-40 cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </Link>

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

                      {/* TEXT */}
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-[#d4af37] 
                                transition-colors duration-300">
                          {item.name}
                        </h3>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
