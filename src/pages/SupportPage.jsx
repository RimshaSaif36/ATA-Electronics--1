import React from "react";
import Header from "../components/mainnavbar";

export default function ContactUs() {
  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#f6fbfb] flex items-center py-14">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-white  rounded-3xl shadow-lg overflow-hidden">

            {/* LEFT IMAGE */}
            <div className="h-full">
              <img
                src="/contact.jpg" // image like screenshot
                alt="Contact Us"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT FORM */}
            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Contact Us
              </h1>

              <form className="space-y-6">

                {/* Name */}
                <div>
                  <label className="block mb-2 font-medium text-gray-800">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-gray-900 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-gray-900 outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 font-medium text-gray-800">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-gray-900 outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2 font-medium text-gray-800">
                    Leave us a few words <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="4"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-gray-900 outline-none resize-none"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="mt-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-md transition"
                >
                  SUBMIT
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FOOTER ================= */}
      <footer className="bg-[#363839] text-gray-300 px-4 sm:px-8 py-12 sm:py-20 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 max-w-7xl mx-auto">

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 uppercase text-sm sm:text-base">
              About Us
            </h4>
            <ul className="space-y-4">
              <li className="inline-block w-fit pb-1 border-b border-white/60 hover:text-white transition cursor-pointer">
                About ATA Electronics
              </li><br />
              <li className="inline-block w-fit pb-1 border-b border-white/60 hover:text-white transition cursor-pointer">
                Solutions
              </li><br />
              <li className="inline-block w-fit pb-1 border-b border-white/60 hover:text-white transition cursor-pointer">
                Warranty Policy
              </li><br />
              <li className="inline-block w-fit hover:text-white transition cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 uppercase text-sm sm:text-base">
              Locations
            </h4>
            <ul className="space-y-4">
              <li className="inline-block w-fit pb-1 border-b border-white/60">
                Jeddah
              </li><br />
              <li className="inline-block w-fit pb-1 border-b border-white/60">
                Riyadh
              </li><br />
              <li className="inline-block w-fit">
                Madinah
              </li>
            </ul>
          </div>

          {/* CSR */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 uppercase text-sm sm:text-base">
              CSR Statement
            </h4>
            <p className="leading-relaxed text-gray-300 text-sm">
              Taking responsibility for a better tomorrow
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 uppercase text-sm sm:text-base">
              Follow Us
            </h4>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <span className="hover:text-white transition cursor-pointer text-sm">
                Facebook
              </span>
              <span className="hover:text-white transition cursor-pointer text-sm">
                Twitter
              </span>
              <span className="hover:text-white transition cursor-pointer text-sm">
                LinkedIn
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-4 sm:pt-6 border-t border-white/40 text-center text-gray-400 text-xs sm:text-sm">
          © 2026 ATA Electronics Inc. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
