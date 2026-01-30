// import React from "react";

// export default function App() {
//   return (
//     <div className="font-sans text-gray-800">
//       {/* Header */}
//       {/* <header className="flex items-center justify-between px-8 py-4 shadow-sm">
//         <div className="text-xl font-bold text-red-600">ATA Electronics</div>
//         <nav className="hidden md:flex gap-6 text-sm font-medium">
//           <a href="#">Lighting Solutions</a>
//           <a href="#">Batteries</a>
//           <a href="#">Sound Systems</a>
//           <a href="#">Microelectronics</a>
//           <a href="#">Customer Support</a>
//           <a href="#">About Us</a>
//         </nav>
//       </header> */}
//       {/* Header */}
// <header className="flex items-center justify-between px-8 h-16 shadow-sm bg-white">

//   {/* Logo */}
//   <div className="flex items-center h-full">
//     <img
//       src="/logo1.png"
//       alt="ATA Electronics Logo"
//       className="max-h-28 w-auto object-contain"
//     />
//   </div>

//   {/* Navbar */}
//   <nav className="hidden md:flex gap-6 text-sm font-medium">
//     <a href="#">Lighting Solutions</a>
//     <a href="#">Batteries</a>
//     <a href="#">Sound Systems</a>
//     <a href="#">Microelectronics</a>
//     <a href="#">Customer Support</a>
//     <a href="#">About Us</a>
//   </nav>

// </header>


//       {/* Hero Section */}
//       <section
//         className="relative h-[80vh] bg-cover bg-center flex items-center"
//         style={{ backgroundImage: "url('/bg1.jpg')" }}
//       >
//         <div className="absolute inset-0 " />
//         <div className="relative z-10 max-w-4xl px-8 text-white">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">End-to-End Solutions</h1>
//           <p className="max-w-xl text-lg">
//             ATA Electronics is a manufacturer of video surveillance and structured cabling solutions, founded with commitment to product quality and excellence.
//           </p>
//           <div className="flex gap-4 mt-8">
//             <button className="px-6 py-3 bg-black/80 rounded">Video Surveillance</button>
//             <button className="px-6 py-3 bg-black/80 rounded">Structured Cabling</button>
//           </div>
//         </div>
//       </section>

//       {/* Discover Products */}
//       <section className="py-16 px-8">
//         <h2 className="text-3xl font-semibold text-center mb-12">Discover our products</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <ProductCard
//             title="Video Surveillance"
//             desc="Scalable and easy to integrate cameras, NVRs, servers and analytics solutions."
//             img="https://images.unsplash.com/photo-1581092334631-4f4b2a6c5f45"
//           />
//           <ProductCard
//             title="Fiber Optics"
//             desc="Singlemode and multimode fiber optic cables and enclosures."
//             img="https://images.unsplash.com/photo-1581091870627-3f91c1b7d9a4"
//           />
//           <ProductCard
//             title="Copper Cabling"
//             desc="Certified cabling systems with guaranteed performance."
//             img="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
//           />
//         </div>
//       </section>

//       {/* Featured Projects */}
//       <section className="py-16 px-8 bg-gray-100">
//         <h2 className="text-3xl font-semibold text-center mb-12">Featured Projects</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           <ProjectCard title="Radisson Blu, Dubai Canal" img="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1" />
//           <ProjectCard title="Riyadh Metro, Saudi Arabia" img="https://images.unsplash.com/photo-1529421308261-d0a9e61c0c1c" />
//           <ProjectCard title="Best Western, Muscat, Oman" img="https://images.unsplash.com/photo-1566073771259-6a8506099945" />
//         </div>
//       </section>

//       {/* Advantage */}
//       <section className="py-16 px-8">
//         <h2 className="text-3xl font-semibold text-center mb-12">Infinique Advantage</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <AdvantageCard title="Quality" desc="Certified products with strict quality processes." />
//           <AdvantageCard title="Support" desc="Design, value engineering and customer service." />
//           <AdvantageCard title="Partnership" desc="Channel partner programs for integrators and resellers." />
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-blue-800 text-white text-center">
//         <h2 className="text-3xl font-semibold mb-4">Are you working on a project?</h2>
//         <p className="max-w-2xl mx-auto mb-6">
//           With quality products and industry leading warranties, we help customers realize true business value.
//         </p>
//         <button className="px-8 py-3 bg-white text-blue-800 rounded font-medium">Contact us</button>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 px-8 py-12 text-sm">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div>
//             <h4 className="font-semibold mb-3 text-white">About Us</h4>
//             <ul className="space-y-2">
//               <li>About AtA Electronics</li>
//               <li>Solutions</li>
//               <li>Warranty Policy</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-3 text-white">Locations</h4>
//             <ul className="space-y-2">
//               <li>North America</li>
//               <li>Middle East</li>
//               <li>Asia Pacific</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-3 text-white">CSR Statement</h4>
//             <p>Taking responsibility for a better tomorrow</p>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-3 text-white">Follow Us</h4>
//             <div className="flex gap-4">
//               <span>Facebook</span>
//               <span>Twitter</span>
//               <span>LinkedIn</span>
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-10 text-gray-500">© 2026 ATA Electronics Inc. All Rights Reserved.</div>
//       </footer>
//     </div>
//   );
// }

// function ProductCard({ title, desc, img }) {
//   return (
//     <div className="border rounded-lg overflow-hidden shadow-sm">
//       <img src={img} alt={title} className="h-56 w-full object-cover" />
//       <div className="p-4">
//         <h3 className="font-semibold text-lg mb-2">{title}</h3>
//         <p className="text-sm text-gray-600 mb-2">{desc}</p>
//         <a href="#" className="text-sm font-medium">Learn more</a>
//       </div>
//     </div>
//   );
// }

// function ProjectCard({ title, img }) {
//   return (
//     <div className="relative h-64 rounded-lg overflow-hidden">
//       <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
//       <div className="absolute inset-0 bg-black/40 flex items-end p-4">
//         <span className="text-white font-semibold">{title}</span>
//       </div>
//     </div>
//   );
// }

// function AdvantageCard({ title, desc }) {
//   return (
//     <div className="text-center p-6 border rounded-lg">
//       <h3 className="font-semibold text-lg mb-2">{title}</h3>
//       <p className="text-sm text-gray-600">{desc}</p>
//       <a href="#" className="block mt-3 font-medium">Learn more</a>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">

      {/* ================= HEADER ================= */}
      <header className="flex items-center justify-between px-8 h-16 shadow-sm bg-white ">
        {/* Logo */}
        <div className="flex items-center h-full">
          <img
            src="/logo1.png"
            alt="ATA Electronics Logo"
            className="h-28 w-auto object-contain"
          />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/lighting" className="hover:text-gray-600 transition">Lighting Solutions</Link>
  
          <Link to="/batteries" className="hover:text-gray-600 transition">Batteries</Link>
          <Link to="/sound" className="hover:text-gray-600 transition">Sound Systems</Link>
          <a href="/micro-electronics" className="hover:text-gray-600 transition">Microelectronics</a>
          <a href="#" className="hover:text-gray-600 transition">Customer Support</a>
          <a href="#" className="hover:text-gray-600 transition">About Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm font-medium transition"
        >
          MENU
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end items-start md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="relative w-full max-w-sm h-full bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-4 sm:p-6">
              <Link
                to="/lighting"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium border-b border-gray-100 transition text-base"
              >
                Lighting Solutions
              </Link>
              <a
                href="/batteries"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium border-b border-gray-100 transition text-base"
              >
                Batteries
              </a>
              <a
                href="/sound"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium border-b border-gray-100 transition text-base"
              >
                Sound Systems
              </a>
              <a
                href="/micro-electronics"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium border-b border-gray-100 transition text-base"
              >
                Microelectronics
              </a>
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium border-b border-gray-100 transition text-base"
              >
                Customer Support
              </a>
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium border-b border-gray-100 last:border-b-0 transition text-base"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] sm:h-[80vh] w-full">
        {/* Background image */}
        <img
          src="/bg2.jpg"  // use this path if image is in public folder
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Optional dark overlay */}
        {/* <div className="absolute inset-0 bg-black/30" /> */}

        {/* Content → TOP RIGHT */}
        <div className="relative z-10 h-full flex items-start justify-center sm:justify-end px-4 sm:px-8 pt-16 sm:pt-24 text-white">
          <div className="max-w-xl text-center sm:text-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              End-to-End Solutions
            </h1>
            <p className="text-lg mb-8">
              ATA Electronics is a trusted electronics brand offering advanced lighting solutions, batteries, sound systems, and microelectronics with a commitment to quality and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end">
              {/* <button className="px-6 py-3 bg-black/60 rounded hover:bg-black/70 transition">
                Micro Electronics
              </button>
              <button className="px-6 py-3 bg-black/60 rounded hover:bg-black/70 transition">
                Lighting Solutions
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 px-4">
          Discover our products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ProductCard
            title="Sound Systems"
            desc="Smart, scalable security and analytics solutions built for seamless integration."
            img="/sound2.jpg"
          />
          <ProductCard
            title="Batteries"
            desc="High-performance lithium lighting engineered for durability, efficiency, and uninterrupted illumination."
            img="/battery2.jpg"
          />
          <ProductCard
            title="Lighting Solutions"
            desc="Smart lighting solutions that enhance spaces with efficiency, control, and modern design."
            img="/l1.jpg"
          />
          <ProductCard
            title="Microelectronics"
            desc="Advanced microelectronics solutions enabling efficient, reliable, and intelligent systems."
            img="/microelectronics.jpg"
          />
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 px-4">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <ProjectCard
            title=""
            img="/dubai.jpg"
          />
          <ProjectCard
            title=""
            img="/saudi.jpg"
          />
          <ProjectCard
            title=""
            img="/oman.jpg"
          />
          <ProjectCard
            title=" Hilton Abu Dhabi Yas Island, Abu Dhabi"
            img="/project.jpg"
          // Hilton Abu Dhabi Yas Island, Abu Dhabi 
          />
          <ProjectCard
            title=""
            img="/abu.jpg"
          />
          <ProjectCard
            title=""
            img="/plant.jpg"
          />
          <ProjectCard
            title=""
            img="/dubai1.jpg"
          />
          <ProjectCard
            title=""
            img="/abu1.jpg"
          />
          <ProjectCard
            title=""
            img="/usa.jpg"
          />
        </div>
      </section>

      {/* ================= ADVANTAGE ================= */}
      {/* <section className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Infinique Advantage
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <AdvantageCard title="Quality" desc="Certified products with strict quality processes." />
          <AdvantageCard title="Support" desc="Design, value engineering and customer service." />
          <AdvantageCard title="Partnership" desc="Channel partner programs for integrators and resellers." />
        </div>
      </section> */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 px-4">
          ATA Electronics Advantage
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <ProductCard
            title="Quality"
            desc="We are focused on providing quality products; check out our quality process and product performance certifications that help realize our quality goals."
            img="/quality.jpg"
          />
          <ProductCard
            title="Support"
            desc="Customer service is integral to our business.  Design, value engineering or quotes, we help you find the right products and solution."
            img="/support.jpg"
          />
          <ProductCard
            title="Partnership"
            desc="Big or Small, we welcome partners of all sizes.  ATA Electronics' channel partner program is designed for qualified resellers and integrators."
            img="/partner.jpg"
          />
        </div>
      </section>

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
            Are you working on a project?
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-sm xs:text-base leading-relaxed px-4 sm:px-0">
            With quality products and industry-leading warranties, we help customers
            realize true business value.
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
                North America
              </li><br />
              <li className="inline-block w-fit pb-1 border-b border-white/60">
                Middle East
              </li><br />
              <li className="inline-block w-fit">
                Asia Pacific
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



    </div>
  );
}

/* ================= COMPONENTS ================= */

function ProductCard({ title, desc, img }) {
  return (
    <div className=" overflow-hidden">
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-base sm:text-lg mb-2 leading-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">{desc}</p>
        <a href="#" className="text-xs sm:text-sm font-medium hover:text-gray-800 transition">
          Learn more
        </a>
      </div>
    </div>
  );
}

function ProjectCard({ title, img }) {
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover"
      />

      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 px-3 py-4">
          <span className="text-white text-base sm:text-lg lg:text-xl font-bold leading-snug">
            {title}
          </span>
        </div>
      )}
    </div>
  );
}


function AdvantageCard({ title, desc }) {
  return (
    <div className="text-center p-4 sm:p-6 border rounded-lg">
      <h3 className="font-semibold text-base sm:text-lg mb-2 leading-tight">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">{desc}</p>
      <a href="#" className="block mt-3 font-medium text-xs sm:text-sm hover:text-gray-800 transition">
        Learn more
      </a>
    </div>
  );
}
