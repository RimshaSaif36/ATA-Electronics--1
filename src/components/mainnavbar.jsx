import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="flex items-center justify-between px-8 h-16  bg-white">
        {/* Logo */}
        <div className="flex items-center h-full">
  <Link to="/">
    <img
      src="/logo1.png"
      alt="ATA Electronics Logo"
      className="h-28 w-auto object-contain cursor-pointer"
    />
  </Link>
</div>


        {/* Desktop Navbar */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/lighting" className="hover:text-gray-600 transition">
            Lighting Solutions
          </Link>
          <Link to="/batteries" className="hover:text-gray-600 transition">
            Batteries
          </Link>
          <Link to="/sound" className="hover:text-gray-600 transition">
            Sound Systems
          </Link>
          <Link to="/micro-electronics" className="hover:text-gray-600 transition">
            Microelectronics
          </Link>
          <Link to="/support" className="hover:text-gray-600 transition">
            Customer Support
          </Link>
          <Link to="/about" className="hover:text-gray-600 transition">
            About Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm font-medium transition"
        >
          MENU
        </button>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="relative w-full max-w-sm h-full bg-white shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
                type="button"
              >
                ✕
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-4">
              <Link
                to="/lighting"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-2 border-b text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition rounded"
              >
                Lighting Solutions
              </Link>
              <Link
                to="/batteries"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-2 border-b text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition rounded"
              >
                Batteries
              </Link>
              <Link
                to="/sound"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-2 border-b text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition rounded"
              >
                Sound Systems
              </Link>
              <Link
                to="/micro-electronics"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-2 border-b text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition rounded"
              >
                Microelectronics
              </Link>
              <Link
                to="/support"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-2 border-b text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition rounded"
              >
                Customer Support
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition rounded"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
