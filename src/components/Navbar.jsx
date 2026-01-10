import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const services = [
    { name: "Lighting Solutions", path: "/lighting-solutions" },
    { name: "Sound Systems", path: "/sound-systems" },
    { name: "Batteries", path: "/batteries" },
    { name: "Microelectronics", path: "/microelectronics" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="flex items-center justify-center px-6 py-4">

        {/* SERVICES MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
          {services.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="relative cursor-pointer text-white/80
                           transition-all duration-300
                           hover:text-[#d4af37]"
              >
                {item.name}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#d4af37]
                                 transition-all duration-300
                                 hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
