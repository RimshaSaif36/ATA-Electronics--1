import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
const products = [
  {
    title: "LXA-30 ВТ",
    size: "250×80×210MM (L×W×H)",
    battery: "LXA Series AMPLIFIER",
    img: "/s1.jpg",
  },
  {
    title: "10W Black",
    size: "35×30×2MM (L×W×H)",
    battery: "120V - 0.25A VOLUME CONTROLLER",
    img: "/s2.jpg",
  },
  {
    title: "SP1601",
    size: "105×19MM (Diameter × Depth)",
    battery: "70-100V - 6W CEILING SPEAKER",
    img: "/s3.jpg",
  },
  {
    title: "LX-25S",
    size: " 255×178×15MM (L×W×H)",
    battery: "90-20KHZ WALL SPEAKER",
    img: "/s4.jpg",
  },
  {
    title: "LX-12",
    size: "375×400*61MM (L×W×H)",
    battery: "45Hz-20kHz Speakers",
    img: "/s6.jpg",
  },
  {
    title: "PAM-400X2",
    size: "483×465×90MM (L×W×H)",
    battery: "AC 220V-240V Power Amplifier",
    img: "/s5.jpg",
  },
  {
    title: "AS2351",
    size: "131.8×85.5×27MM (L×W×H)",
    battery: "20Hz to 20kHz Wireless Streaming Amplifier",
    img: "/s7.jpg",
  },
  {
    title: "STS50Р",
    size: "960MM height",
    battery: "Tripod Floor Speaker Stand",
    img: "/s8.jpg",
  },
   {
    title: "VHF-681H",
    size: "up to 60 m",
    battery: "80Hz-10KHz Wireless Microphone",
    img: "/s9.jpg",
  },
  {
    title: "ASC 315T",
    size: "115 x 90 x 347MM (L×W×H)",
    battery: "150 - 15KHz COLUMN SPEAKER",
    img: "/s10.jpg",
  },
  {
    title: "ASC 315T",
    size: "115 x 90 x 347MM (L×W×H)",
    battery: "150 - 15KHz COLUMN SPEAKER",
    img: "/s11.jpg",
  },
  {
    title: "PW 4606 BT",
    size: "322 × 392 × 153MM (L×W×H)",
    battery: "15Hz – 22kHz POWERED MIXERS WITH USB / BT",
    img: "/s13.jpg",
  },
  {
    title: "MX 800",
    size: "435 × 483 × 132MM (L×W×H)",
    battery: "BOOSTER AMPLIFIERS",
    img: "/s12.jpg",
  },
  {
    title: "AL - 3815",
    size: "385 × 160 × 175MM (L×W×H)",
    battery: "Impedence 8Ω 300W RMS 800W MAX 15 WOOFERS",
    img: "/s14.jpg",
  },
  {
    title: "DRM 522 Blue / Red / Gold",
    size: "24.0 × 31.0 × 24.0MM (L×W×H)",
    battery: " 5-Piece DRUM SET",
    img: "/s16.jpg",
  },
  {
    title: "HD 02",
    size: "3.5 × 7.0 × 8.5MM (L×W×H)",
    battery: " HEADPHONES",
    img: "/s17.jpg",
  },
];

export default function SoundProduct() {
  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}


function ProductCard({ title, size, battery, img }) {
  return (
    <div className="border border-blue-800 p-6 text-center relative">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="mx-auto h-44 object-contain mb-4"
      />

      {/* Copyright */}
      <p className="text-[10px] text-gray-400 mb-3">
        {/* Copyright © Square Electronics & Trading */}
      </p>

      {/* Title */}
      <h3 className="font-bold text-sm mb-2">{title}</h3>

      {/* Size */}
      <p className="text-xs mb-1">
        <span className="font-semibold">DIMENSIONS :</span> {size}
      </p>

      {/* Battery */}
      <p className="text-xs font-semibold text-red-600 mb-4">
        {battery}
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-3">
        <button className="bg-blue-800 text-white text-xs px-6 py-2 rounded-full font-semibold hover:bg-blue-900 transition">
          DETAIL
        </button>

        <a
          href="#"
          className="bg-green-500 text-white p-2 rounded"
        >
          <FaWhatsapp size={16} />
        </a>
      </div>
    </div>
  );
}
