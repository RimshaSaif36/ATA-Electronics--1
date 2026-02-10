import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const products = [
  {
    title: "AC VOLTAGE STABILIZER",
    size: "200×150×80MM (L×W×H)",
    battery: "220V - 5KVA AUTOMATIC STABILIZER",
    img: "/stabilizer1.jpg",
  },
  {
    title: "SERVO VOLTAGE STABILIZER", 
    size: "300×200×100MM (L×W×H)",
    battery: "415V - 10KVA SERVO STABILIZER",
    img: "/stabilizer2.jpg",
  },
  {
    title: "DIGITAL VOLTAGE STABILIZER",
    size: "180×120×60MM (L×W×H)", 
    battery: "220V - 2KVA DIGITAL STABILIZER",
    img: "/stabilizer3.jpg",
  },
  {
    title: "RELAY VOLTAGE STABILIZER",
    size: "250×180×90MM (L×W×H)",
    battery: "220V - 3KVA RELAY STABILIZER", 
    img: "/stabilizer4.jpg",
  },
  {
    title: "SINGLE PHASE STABILIZER",
    size: "220×160×85MM (L×W×H)",
    battery: "220V - 1KVA SINGLE PHASE",
    img: "/stabilizer1.jpg",
  },
  {
    title: "THREE PHASE STABILIZER",
    size: "400×300×150MM (L×W×H)", 
    battery: "415V - 25KVA THREE PHASE",
    img: "/stabilizer2.jpg",
  },
  {
    title: "OIL COOLED STABILIZER",
    size: "500×350×200MM (L×W×H)",
    battery: "415V - 50KVA OIL COOLED",
    img: "/stabilizer3.jpg",
  },
  {
    title: "MAINLINE STABILIZER",
    size: "350×250×120MM (L×W×H)",
    battery: "220V - 5KVA MAINLINE STABILIZER",
    img: "/stabilizer4.jpg",
  },
];

export default function VoltageStabilizerPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold">VOLTAGE STABILIZER</h1>
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
        <span className="font-semibold">DIMENSION :</span> {size}
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