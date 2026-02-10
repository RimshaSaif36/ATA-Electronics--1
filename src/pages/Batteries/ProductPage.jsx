import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";
const products = [
  {
    title: "LITHIUM ION BATTERY",
    size: "503×190×408MM (L×W×H)",
    battery: "12V - 100Ah TUBULAR BATTERY",
    img: "/b1.jpg",
  },
  {
    title: "LEAD ACID BATTERY",
    size: "97±1 × 24±1 × 57±2MM (L×W×H)",
    battery: "6V - 1.2Ah VRLA BATTERY",
    img: "/b2.jpg",
  },
  {
    title: "RECHARGEABLE BATTERY",
    size: "70±1 × 47±1 × 106±2MM (L×W×H)",
    battery: "6V 4.5AH VRLA BATTERY",
    img: "/b3.jpg",
  },
  {
    title: "LITHIUM BATTERY",
    size: "151 × 65 × 99MM (L×W×H)",
    battery: "12V - 7Ah LITHIUM BATTERY",
    img: "/b4.jpg",
  },
  {
    title: "ALKALINE BATTERY",
    size: "17.5×26.5×48.5MM (L×W×H)",
    battery: "300mAh - 9V RECHARGEABLE BATTERY",
    img: "/b5.jpg",
  },
  {
    title: "BATTERY PACK",
    size: "522±2 × 268±2 × 226±2MM (L×W×H)",
    battery: "12V - 200Ah LEAD-CARBON BATTERY",
    img: "/b6.jpg",
  },
  {
    title: "SPECIAL BATTERY",
    size: "14 × 14 × 50 mm (L × W × H)",
    battery: "1.5V USB Rechargeable Lithium Battery",
    img: "/b7.jpg",
  },
  {
    title: "LI-PO BATTERY",
    size: "14 × 14 × 50 mm (L × W × H)",
    battery: " 1.2V-1200 mAh ATA Rechargeable Battery",
    img: "/b8.jpg",
  },
  {
    title: "CORDLESS PHONE BATTERY",
    size: "70×47×106MM (L×W×H)",
    battery: "3.6V - 600mAh NiMH Battery",
    img: "/b1.jpg",
  },
  {
    title: "COIN & BUTTON BATTERY",
    size: "20×3.2MM (D×H)",
    battery: "3V - CR2032 Lithium Battery",
    img: "/b2.jpg",
  },
  {
    title: "LEAD-ACID BATTERY CHARGER",
    size: "180×85×60MM (L×W×H)",
    battery: "12V - 2A Smart Battery Charger",
    img: "/b3.jpg",
  },
  {
    title: "BATTERY CHARGER",
    size: "120×68×35MM (L×W×H)",
    battery: "AA/AAA NiMH Battery Charger",
    img: "/b4.jpg",
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

      {/* Header Section with Breadcrumbs */}
      <section className="bg-white">
        <div className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-red-900">
          <div className="max-w-6xl mx-auto px-6 py-10 text-white">
            <div className="text-xs uppercase tracking-widest mb-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/products" className="hover:underline">
                Products Category
              </Link>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">BATTERIES</h1>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <ProductCard key={index} {...item} onEnquiry={() => openModal(item)} />
            ))}
          </div>
        </div>
      </section>

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
    <div className="border border-red-500 p-6 text-center relative">
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
      <h3 className="font-bold text-sm mb-2 uppercase">{title}</h3>

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
          className="bg-red-600 text-white text-xs px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
        >
          VIEW MORE
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
