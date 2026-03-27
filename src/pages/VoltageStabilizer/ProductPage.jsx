import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const products = [
  {
    title: "TERMINATOR TVS 500W",
    size: "MAXIMUM POWER LOAD : 500W",
    battery: "AUTOMATIC VOLTAGE REGULATOR",
    img: "/voltage.jpg",
  },
  {
    title: "TERMINATOR TVS 1000W",
    size: "MAXIMUM POWER LOAD : 1000W",
    battery: "AUTOMATIC VOLTAGE REGULATOR",
    img: "/voltage1.jpg",
  },
  {
    title: "TERMINATOR TVS 1000W WM",
    size: "MAXIMUM POWER LOAD : 1000W",
    battery: "AUTOMATIC VOLTAGE REGULATOR",
    img: "/v3.jpg",
  },
  {
    title: "TERMINATOR TVS 1500W",
    size: "MAXIMUM POWER LOAD : 1500W",
    battery: "AUTOMATIC VOLTAGE REGULATOR",
    img: "/v4.jpg",
  },
  {
    title: "TERMINATOR TVS 2000W",
    size: "MAXIMUM POWER LOAD : 2000W",
    battery: "AUTOMATIC VOLTAGE REGULATOR",
    img: "/v5.jpg",
  },
  {
    title: "TERMINATOR TVS 2000W WM",
    size: "MAXIMUM POWER LOAD : 1000W",
    battery: "AUTOMATIC VOLTAGE REGULATOR",
    img: "/v6.jpg",
  },
  {
    title: "TERMINATOR TVS 3000W",
    size: "MAXIMUM POWER LOAD : 3000W",
    battery: "AUTOMATIC VOLTAGE REGULATOR",
    img: "/v7.jpg",
  },
  {
    title: "TERMINATOR TVS 5000W",
    size: "MAXIMUM POWER LOAD : 5000W",
    battery: "TERMINATOR TVS 5000W",
    img: "/v8.jpg",
  },
  {
    title: "ANDELI SVC-D500VA",
    size: "COLOR : GRAY",
    battery: "500W VOLTAGE STABILIZER",
    img: "/v9.jpg",
  },{
    title: "ANDELI SVC-1500VA",
    size: "COLOR : GRAY",
    battery: "1500W VOLTAGE STABILIZER",
    img: "/v10.jpg",
  },{
    title: "ANDELI SVC-D3000VA",
    size: "COLOR : GREY",
    battery: "3000W VOLTAGE STABILIZER",
    img: "/v11.jpg",
  },
  {
    title: "TERMINATOR TVS 10000W",
    size: "MAXIMUM POWER LOAD : 10,000W",
    battery: "AUTOMATIC VOLTAGE REGULATOR",
    img: "/v12.jpg",
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
        <span className="font-semibold"></span> {size}
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