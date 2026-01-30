import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";
const products = [
  {
    title: " IEC 53(RVV)",
    size: " 1.5M (Length)",
    battery: "UK 3-PIN TO C13 POWER CABLE",
    img: "/e1.jpg",
  },
  {
    title: " MIC CABLE",
    size: " 100 Yards (Length)",
    battery: "PROFESSIONAL MICROPHONE CABLE",
    img: "/e2.jpg",
  },
  {
    title: " ATA Audio Link",
    size: "  1.5M (Length)",
    battery: "AUDIO LINK CORD SERIES (Music)",
    img: "/e3.jpg",
  },
  {
    title: " 74.4 CORE DIAPHRAGM",
    size: " 102mm (Outer Diameter) x 74.4mm (Voice Coil Diameter)",
    battery: "500Hz – 20kHz8 OHM ATA SPEAKER DIAPHRAGM",
    img: "/e4.jpg",
  },
  {
    title: " Male-to-Male Audio Cable",
    size: " 5000 × 10 × 10 mm (L × W × H)",
    battery: "20 Hz – 20 kHz ATA Audio Link Cord",
    img: "/e5.jpg",
  },
  {
    title: " Multi-Strand Flexible Copper Wire",
    size: " 100 × 100 × 80 mm (L × W × H)",
    battery: "50 Hz – 60 Hz Copper Winding Wire",
    img: "/e6.jpg",
  },
  {
    title: " SM-16T",
    size: " 50 × 17 × 50 mm (L × W × H)",
    battery: "50 / 60 Hz - 4 W SM-16T Synchronous Motor",
    img: "/e7.jpg",
  },
  {
    title: " VGP-AC19547",
    size: " 105 × 45 × 30 mm (L × W × H)",
    battery: "50 / 60 Hz 19.5V Laptop Power Adapter",
    img: "/e8.jpg",
  },
  {
    title: " High-Power Audio Driver",
    size: " 120 × 120 × 80 mm (L × W × H)",
    battery: "1 kHz – 20 kHz Compression Driver",
    img: "/e9.jpg",
  },
  {
    title: " ATA #144 microphone cable",
    size: " 250 × 250 × 120 mm (L × W × H) ",
    battery: "100 YARDS PROFESSIONAL MICROPHONE CABLE",
    img: "/e10.jpg",
  },
  {
    title: " HIGH POWER SERIES",
    size: " 110 × 50 × 30 mm (L × W × H) ",
    battery: "50 / 60 Hz ATA AC ADAPTER",
    img: "/e11.jpg",
  },
  {
    title: "34.4 (CCAW) Compression Driver",
    size: " 90 × 90 × 65 mm (L × W × H) ",
    battery: "1.2 kHz – 20 kHz ATA 34.4 CCAW Compression Driver",
    img: "/e12.jpg",
  },
  {
    title: "2x7x32/0.11 MIC CABLE",
    size: "3.5 × 9.5 × 9.5MM (L×W×H)",
    battery: " SPEAKER CABLES",
    img: "/s15.jpg",
  },
];

export default function ElectronicProducts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} onEnquiry={() => openModal(item)} />
          ))}
        </div>
      </div>

      {/* Enquiry Modal */}
      {isModalOpen && (
        <EnquiryModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          product={selectedProduct}
        />
      )}
    </>
  );
}


function ProductCard({ title, size, battery, img, onEnquiry }) {
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
        <span className="font-semibold">DIMENSION :</span> {size}
      </p>

      {/* Battery */}
      <p className="text-xs font-semibold text-red-600 mb-4">
        {battery}
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-3">
        <button 
          onClick={onEnquiry}
          className="bg-blue-800 text-white text-xs px-6 py-2 rounded-full font-semibold hover:bg-blue-900 transition"
        >
          ENQUIRY
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
