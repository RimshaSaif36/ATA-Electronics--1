import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Top gold line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20 items-start">

          {/* Brand */}
          <div className="space-y-2 self-start">
            <img
              src="/logo2.png"
              alt="ATA Electronics Logo"
              className="
                w-28 sm:w-36 md:w-40
                object-contain
                -mt-2 sm:-mt-3
                drop-shadow-[0_0_14px_rgba(212,175,55,0.35)]
              "
            />


            <div className="flex items-center gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="
                      w-9 h-9 rounded-full
                      border border-[#d4af37]/40
                      flex items-center justify-center
                      hover:bg-[#d4af37]
                      hover:text-black
                      hover:shadow-[0_0_12px_rgba(212,175,55,0.6)]
                      transition-all duration-300
                      text-xs
                    "
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-6 tracking-wide text-sm">
              Solutions
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              {[
                "Residential Lighting",
                "Commercial Lighting",
                "Batteries & Storage",
                "Solar Solutions",
              ].map((item, i) => (
                <li key={i}>
                  <a className="hover:text-[#d4af37] transition" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-6 tracking-wide text-sm">
              Company
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              {["About", "Projects", "Contact", "Support"].map((item, i) => (
                <li key={i}>
                  <a className="hover:text-[#d4af37] transition" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-6 tracking-wide text-sm">
              Subscribe
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 mb-5 leading-relaxed">
              Get updates on new products, energy solutions, and lighting tips.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="
                  flex-1 bg-black/40 backdrop-blur-sm
                  border border-[#d4af37]/40
                  rounded-md px-4 py-3
                  text-xs sm:text-sm
                  focus:outline-none
                  focus:border-[#d4af37]
                "
              />
              <button
                type="submit"
                className="
                  px-5 py-3 rounded-md
                  bg-[#d4af37] text-black
                  text-xs sm:text-sm font-medium
                  hover:bg-[#e6c65c]
                  transition
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom gradient line */}
        {/* <div className="mt-14 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" /> */}

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-xs text-gray-500">
            © {new Date().getFullYear()} ATA Electronics. All rights reserved.
          </p>

          <div className="flex gap-6 text-[10px] sm:text-xs text-gray-500">
            {["Privacy", "Terms", "Cookies"].map((item, i) => (
              <a key={i} href="#" className="hover:text-[#d4af37] transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
