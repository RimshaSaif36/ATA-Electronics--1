import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";
const products = [
  {
    title: "LX1000 TT VIETNAM",
    size: "503×190×408MM (L×W×H)",
    battery: "12V - 100Ah TUBULAR BATTERY",
    img: "/b1.jpg",
  },
  {
    title: "LX1.2-6 VIETNAM",
    size: "97±1 × 24±1 × 57±2MM (L×W×H)",
    battery: "6V - 1.2Ah VRLA BATTERY",
    img: "/b2.jpg",
  },
  {
    title: "LX4.5-6 VIETNAM",
    size: "70±1 × 47±1 × 106±2MM (L×W×H)",
    battery: "6V 4.5AH VRLA BATTERY",
    img: "/b3.jpg",
  },
  {
    title: "LEP1207 VIETNAM",
    size: "151 × 65 × 99MM (L×W×H)",
    battery: "12V - 7Ah LITHIUM BATTERY",
    img: "/b4.jpg",
  },
  {
    title: "9V VIETNAM",
    size: "17.5×26.5×48.5MM (L×W×H)",
    battery: "300mAh - 9V RECHARGEABLE BATTERY",
    img: "/b5.jpg",
  },
  {
    title: "LXRC12-200 VIETNAM",
    size: "522±2 × 268±2 × 226±2MM (L×W×H)",
    battery: "12V - 200Ah LEAD-CARBON BATTERY",
    img: "/b6.jpg",
  },
  {
    title: "AA Series",
    size: "14 × 14 × 50 mm (L × W × H)",
    battery: "1.5V USB Rechargeable Lithium Battery",
    img: "/b7.jpg",
  },
  {
    title: "AA Series",
    size: "14 × 14 × 50 mm (L × W × H)",
    battery: " 1.2V-1200 mAh ATA Rechargeable Battery",
    img: "/b8.jpg",
  },

];

export default function ProductPage() {
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
