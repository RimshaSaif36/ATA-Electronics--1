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
          <section className="space-y-16 md:space-y-20">

            {/* Evolution Section */}
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
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
            </div>

            {/* Growth Section */}
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
              {/* LEFT IMAGE */}
              <div className="relative overflow-hidden h-80 md:h-[350px]">
                <img
                  src="/building1.jpg"
                  alt="Growth"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* RIGHT TEXT */}
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 mb-2">
                  THE GROWTH
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  Expanding our Footprint
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-3">
                  With a growing presence in the GCC, ATA Electronics is trusted
                  for hotels, villas, offices, and retail environments.
                </p>
                <p className="text-sm md:text-base text-gray-700 mb-3">
                  Our solutions are designed to meet regional standards while
                  maintaining international quality and reliability.
                </p>
                <p className="text-sm md:text-base text-gray-700 mb-3">
                  Through strategic partnerships and a strong distribution network,
                  we ensure timely delivery, consistent performance, and long-term value.
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  We continue investing in advanced product development, skilled teams,
                  and localized technical support to better serve our customers.
                </p>
              </div>
            </div>
          </section>

          {/* STRATEGY / TEAMWORK / QUALITY */}
          <section className="space-y-16 md:space-y-20">
  {[
    {
      title: "Strategy",
      description:
        "Our end-to-end solutions provide customers the flexibility to deploy our products on projects of any size. With regional offices combined with a network of distributors and system integrators, our customers are guaranteed to receive unconditional service and support from a team of diligent and seasoned professionals.",
      images: [
        "/1.jpg",
        "/copper.jpg",
        "/3.jpg",
        "/video.jpg",
        "/strategy.jpg",
        "/fiber.jpg",
      ],
    },
    {
      title: "Teamwork",
      description:
        "Every project has its challenges and we are with you in your quest to get the best from it. Think of us as an extension of your team and we are here to answer any questions you may have regarding the project design and estimation, installation and commissioning of our products.",
      images: [
        "/tw.jpg",
        "/tw1.jpg",
        "/quality.jpg",
        "/tw2.jpg",
        "/tw3.jpg",
        "/tw4.jpg",
      ],
    },
    {
      title: "Quality",
      description:
        "We focus on providing high quality products for a wide range of structured cabling and video surveillance solutions that help our customers realize true business value through a process of continuous improvement of both design and manufacture.",
      images: [
        "/hosca.jpg",
        "/kld.jpg",
        "/lug.jpg",
        "/unilamp.jpg",
        "/tryka.jpg",
        "/atm.jpg",
      ],
    },
  ].map((item) => {
    const isTeamwork = item.title === "Teamwork";

    return (
      <div
        key={item.title}
        className="grid md:grid-cols-2 gap-10 md:gap-12 items-center"
      >
        {/* TEXT */}
        <div className={isTeamwork ? "md:order-1" : ""}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {item.title}
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            {item.description}
          </p>

          {item.title === "Quality" && (
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:underline mt-4 inline-block"
            >
              
            </a>
          )}
        </div>

        {/* IMAGES */}
        <div
          className={`grid grid-cols-3 gap-2 ${
            isTeamwork ? "md:order-2" : ""
          }`}
        >
          {item.images.map((src, i) => (
            <div
              key={i}
              className="bg-gray-100 h-24 md:h-28 overflow-hidden"
            >
              <img
                src={src}
                alt={`${item.title} image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  })}
</section>

        </div>
      </main>
      {/* ================= CTA ================= */}
      <section
        className="relative py-11 text-white text-center bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/about.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="py-8 sm:py-10 px-4">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
            Need help on your project?
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-sm xs:text-base leading-relaxed px-4 sm:px-0">
            We have a team of specialists ready to find the right products
that suit your project requirements.
          </p>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white/60 text-black text-sm sm:text-base font-medium hover:bg-white/80 transition rounded">
            Contact Us
          </button>
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
