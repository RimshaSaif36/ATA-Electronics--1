import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 lg:py-40">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-gradient-to-br from-[#f5e7a1] to-[#b8962e]" />
              <span className="text-xs sm:text-sm tracking-widest uppercase">
                ATA Electronics
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Smart energy and lighting solutions built with precision,
              performance, and long-term reliability.
            </p>

            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition text-xs"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition text-xs"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition text-xs"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition text-xs"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-4 sm:mb-6 tracking-wide text-sm">
              Solutions
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
              <li><a className="hover:text-[#d4af37] transition" href="#">Residential Lighting</a></li>
              <li><a className="hover:text-[#d4af37] transition" href="#">Commercial Lighting</a></li>
              <li><a className="hover:text-[#d4af37] transition" href="#">Batteries & Storage</a></li>
              <li><a className="hover:text-[#d4af37] transition" href="#">Solar Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-4 sm:mb-6 tracking-wide text-sm">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
              <li><a className="hover:text-[#d4af37] transition" href="#">About</a></li>
              <li><a className="hover:text-[#d4af37] transition" href="#">Projects</a></li>
              <li><a className="hover:text-[#d4af37] transition" href="#">Contact</a></li>
              <li><a className="hover:text-[#d4af37] transition" href="#">Support</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-4 sm:mb-6 tracking-wide text-sm">
              Subscribe
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Get updates on new products, energy solutions, and lighting tips.
            </p>

            <form className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 w-full bg-black border border-[#d4af37]/40 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-3 rounded-md bg-[#d4af37] text-black text-xs sm:text-sm font-medium hover:bg-[#e6c65c] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-[#d4af37]/20 pt-6 sm:pt-8">
          <p className="text-[10px] sm:text-xs text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} ATA Electronics. All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-gray-400">
            <a className="hover:text-[#d4af37] transition" href="#">Privacy</a>
            <a className="hover:text-[#d4af37] transition" href="#">Terms</a>
            <a className="hover:text-[#d4af37] transition" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
