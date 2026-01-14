import React from "react";

export default function ATAHubSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto p-10">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="inline-block px-6 py-2 mb-4 text-sm font-semibold tracking-widest text-white  rounded-full">
            Solutions
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-4">
            Smart Energy Solutions
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
            ATA Electronics provides advanced{" "}
            <span className="text-[#d4af37]">Batteries</span>,{" "}
            <span className="text-[#d4af37]">Lighting</span>, and{" "}
            <span className="text-[#d4af37]">Solar Solutions</span>{" "}
            to power your home and business efficiently.
          </p>

          {/* <div className="flex justify-center gap-4 mt-8">
            <button className="bg-[#d4af37] hover:bg-[#e6c65c] text-black px-6 py-3 rounded-lg font-semibold transition">
              Explore Products
            </button>

            <button className="border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black px-6 py-3 rounded-lg font-semibold transition">
              Get a Quote
            </button>
          </div> */}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Batteries */}
          <div className="bg-black border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[#d4af37]/20 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-[#d4af37] mb-3">
              Batteries
            </h3>
            <p className="text-gray-400 mb-4">
              Reliable and long-lasting batteries for backup power, UPS systems, and solar storage.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm mb-6">
              <li>✔ Lithium & Lead-Acid</li>
              <li>✔ High Backup Capacity</li>
              <li>✔ Industrial & Home Use</li>
            </ul>
            <button className="w-full bg-[#d4af37] text-black py-2 rounded-lg font-semibold hover:bg-[#e6c65c] transition">
              Learn More
            </button>
          </div>

          {/* Lighting */}
          <div className="bg-black border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[#d4af37]/20 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-[#d4af37] mb-3">
              Lighting
            </h3>
            <p className="text-gray-400 mb-4">
              Energy-efficient LED and smart lighting solutions for indoor and outdoor use.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm mb-6">
              <li>✔ LED Panels & Bulbs</li>
              <li>✔ Smart & Decorative Lights</li>
              <li>✔ Low Power Consumption</li>
            </ul>
            <button className="w-full bg-[#d4af37] text-black py-2 rounded-lg font-semibold hover:bg-[#e6c65c] transition">
              Learn More
            </button>
          </div>

          {/* Solar */}
          <div className="bg-black border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[#d4af37]/20 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-[#d4af37] mb-3">
              Solar Solutions
            </h3>
            <p className="text-gray-400 mb-4">
              Complete solar systems to reduce electricity costs and ensure clean energy.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm mb-6">
              <li>✔ Solar Panels</li>
              <li>✔ Inverters & Controllers</li>
              <li>✔ On-Grid & Off-Grid Systems</li>
            </ul>
            <button className="w-full bg-[#d4af37] text-black py-2 rounded-lg font-semibold hover:bg-[#e6c65c] transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
