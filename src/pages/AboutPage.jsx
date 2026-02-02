import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/mainnavbar";

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* HERO / BREADCRUMB SECTION */}
      <section className="bg-[#e6f4ff]">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <div className="text-xs md:text-sm text-gray-500 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:underline hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-700 font-medium">About Us</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-gray-700">
            From boutique spaces to large commercial projects, ATA Electronics
            delivers complete solutions in lighting, batteries, sound systems and
            microelectronics for modern environments.
          </p>
        </div>
      </section>

      <main className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-16 md:space-y-20">

          {/* JOURNEY SECTION */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="overflow-hidden shadow-md border border-gray-100 h-80 md:h-[350px] ">
              <img
                src="/building.jpg"
                alt="ATA Electronics project skyline"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 mb-2">
                SINCE 2016
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Our Remarkable Journey Continues
              </h2>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                Founded in Saudi Arabia, ATA Electronics was built around a single
                idea — to make professional lighting and electronics solutions
                simple, reliable, and accessible for consultants, contractors
                and end users.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                Over the years we have expanded our portfolio from lighting to
                include batteries, sound systems and microelectronics.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Today we continue to support projects across the Middle East
                with engineered products and dependable after-sales service.
              </p>
            </div>
          </section>

          {/* EVOLUTION & GROWTH */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">

            {/* LEFT TEXT */}
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 mb-2">
                THE EVOLUTION
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Meeting the Challenge
              </h2>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                As projects became smarter and more connected, our portfolio
                evolved beyond individual products to complete solutions.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                ATA Electronics supports consultants with detailed design input
                and technical documentation.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Our goal is to remove complexity while keeping performance high.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative overflow-hidden h-80 md:h-[350px] ">
              <img
                src="/mission.jpg"
                alt="Evolution"
                className="w-full h-full object-cover"
              />
            </div>

            {/* LEFT IMAGE */}
            <div className="relative overflow-hidden h-80 md:h-[350px]  md:order-none order-2">
              <img
                src="/building1.jpg"
                alt="Growth"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="md:order-none order-1">
              <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 mb-2">
                THE GROWTH
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Expanding our Footprint
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                With a growing presence in the GCC, ATA Electronics is trusted
                for hotels, villas, offices and retail environments.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                We continue investing in product development and local support.
              </p>
            </div>
          </section>

          {/* STRATEGY / TEAMWORK / QUALITY */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="space-y-10">
              {[
                ["STRATEGY", "Focused on Complete Solutions"],
                ["TEAMWORK", "Working Alongside Your Team"],
                ["QUALITY", "Built for Long-Term Performance"],
              ].map(([title, heading]) => (
                <div key={title}>
                  <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 mb-2">
                    {title}
                  </p>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    {heading}
                  </h2>
                  <p className="text-sm md:text-base text-gray-700">
                    We deliver consistency, support and reliability on every
                    project we undertake.
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {[
                "Lighting, power and low-voltage products",
                "Support for consultants and design offices",
                "Logistics and delivery across the region",
                "Commitment to innovation and quality",
              ].map((text, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-gray-50 border border-gray-100 h-28 md:h-32 flex items-center justify-center text-xs md:text-sm text-gray-600 text-center px-3"
                >
                  {text}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
