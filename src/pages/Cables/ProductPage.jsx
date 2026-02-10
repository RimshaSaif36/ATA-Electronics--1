import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const products = [
  {
    title: "HDMI CABLE",
    size: "1.5M / 3M / 5M / 10M",
    battery: "4K ULTRA HD HDMI 2.0 CABLE",
    img: "/cable1.jpg",
  },
  {
    title: "USB CABLE",
    size: "1M / 2M / 3M LENGTH",
    battery: "USB 3.0 TYPE-C CABLE",
    img: "/cable2.jpg",
  },
  {
    title: "VGA CABLE",
    size: "1.5M / 3M / 5M LENGTH",
    battery: "VGA MALE TO MALE CABLE",
    img: "/cable3.jpg",
  },
  {
    title: "AUDIO CABLE",
    size: "1M / 2M / 5M LENGTH",
    battery: "3.5MM AUX AUDIO CABLE",
    img: "/cable4.jpg",
  },
  {
    title: "ETHERNET CABLE",
    size: "1M / 5M / 10M / 20M",
    battery: "CAT6 LAN NETWORK CABLE",
    img: "/cable1.jpg",
  },
  {
    title: "POWER CABLE",
    size: "1.5M / 3M LENGTH",
    battery: "3 PIN POWER CABLE",
    img: "/cable2.jpg",
  },
  {
    title: "COAXIAL CABLE",
    size: "5M / 10M / 20M",
    battery: "RG6 COAXIAL CABLE",
    img: "/cable3.jpg",
  },
  {
    title: "DISPLAYPORT CABLE",
    size: "1.5M / 3M / 5M",
    battery: "4K DISPLAYPORT CABLE",
    img: "/cable4.jpg",
  },
];

export default function CablesPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold">CABLES</h1>
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
      <img
        src={img}
        alt={title}
        className="mx-auto h-44 object-contain mb-4"
      />
      <h3 className="font-bold text-sm mb-2 uppercase">{title}</h3>
      <p className="text-xs mb-1">
        <span className="font-semibold">LENGTH :</span> {size}
      </p>
      <p className="text-xs font-semibold text-red-600 mb-4">
        {battery}
      </p>
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