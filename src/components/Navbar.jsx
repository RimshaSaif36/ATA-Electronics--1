import React from "react";

export default function Navbar() {
  const services = [
    "Lighting Solutions",
    "Sound Systems",
    "Batteries",
    "Microelectronics",
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="flex items-center justify-center px-6 py-4">

        {/* SERVICES MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
          {services.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer text-white/80
                         transition-all duration-300
                         hover:text-[#d4af37]"
            >
              {item}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#d4af37]
                               transition-all duration-300
                               group-hover:w-full" />
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
