import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/mainnavbar';
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
            <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
              <img
                src="/dubai.jpg"
                alt="ATA Electronics project skyline"
                className="w-full h-full max-h-[360px] object-cover"
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
                Founded in the UAE, ATA Electronics was built around a single
                idea – to make professional lighting and electronics solutions
                simple, reliable and accessible for consultants, contractors and
                end users.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                Over the years we have expanded our portfolio from lighting to
                include batteries, sound systems and microelectronics, giving our
                partners a single source for complete low‑voltage solutions.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Today we continue to support projects across the Middle East
                with engineered products, design assistance and dependable
                after‑sales service.
              </p>
            </div>
          </section>

          {/* EVOLUTION & GROWTH */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 mb-2">
                THE EVOLUTION
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Meeting the Challenge
              </h2>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                As projects became smarter and more connected, our portfolio
                evolved beyond individual products to complete solutions:
                coordinated lighting, power, sound and control that work
                seamlessly together.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                ATA Electronics now supports consultants and integrators with
                detailed design input, product selection and technical
                documentation so that every project is practical to install and
                simple to maintain.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Our goal is to remove complexity while keeping performance and
                aesthetics at the highest level.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 h-48">
                <p className="text-sm md:text-base text-gray-600 max-w-xs text-center">
                  Concept‑to‑commissioning support for consultants, architects
                  and system integrators.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 mb-2">
                  THE GROWTH
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  Expanding our Footprint
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-3">
                  With a growing presence in the GCC and strong relationships
                  with regional partners, ATA Electronics is trusted for hotels,
                  villas, offices, retail and outdoor environments.
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  We continue to invest in product development and local support
                  to stay aligned with emerging standards and design trends.
                </p>
              </div>
            </div>
          </section>

          {/* STRATEGY / TEAMWORK / QUALITY */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="space-y-10">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 mb-2">
                  STRATEGY
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Focused on Complete Solutions
                </h2>
                <p className="text-sm md:text-base text-gray-700">
                  Our end‑to‑end approach allows customers to deploy ATA
                  products on projects of any size – from a single villa to
                  multi‑tower developments – while relying on consistent quality
                  and documentation.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 mb-2">
                  TEAMWORK
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Working Alongside Your Team
                </h2>
                <p className="text-sm md:text-base text-gray-700">
                  Every project is different. We position ourselves as an
                  extension of your design and execution team – answering
                  technical questions, reviewing layouts and helping value
                  engineer where required.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 mb-2">
                  QUALITY
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Built for Long‑Term Performance
                </h2>
                <p className="text-sm md:text-base text-gray-700">
                  We carefully qualify our manufacturing partners and test
                  products to ensure durability, safety and consistent
                  performance, helping our customers deliver projects they can
                  confidently stand behind.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="rounded-lg overflow-hidden bg-gray-50 border border-gray-100 h-28 md:h-32 flex items-center justify-center text-xs md:text-sm text-gray-600 text-center px-3">
                Lighting, power and low‑voltage products
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-50 border border-gray-100 h-28 md:h-32 flex items-center justify-center text-xs md:text-sm text-gray-600 text-center px-3">
                Support for consultants and design offices
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-50 border border-gray-100 h-28 md:h-32 flex items-center justify-center text-xs md:text-sm text-gray-600 text-center px-3">
                Logistics and delivery across the region
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-50 border border-gray-100 h-28 md:h-32 flex items-center justify-center text-xs md:text-sm text-gray-600 text-center px-3">
                Commitment to continuous improvement and innovation
              </div>
            </div>
          </section>
          
        </div>
        
      </main>
      
    </>
  );
}