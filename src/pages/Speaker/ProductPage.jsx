import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const products = [
  {
    title: "BLUETOOTH SPEAKER",
    size: "150×80×80MM (L×W×H)",
    battery: "10W BLUETOOTH PORTABLE SPEAKER",
    img: "/speaker1.jpg",
  },
  {
    title: "HOME THEATER SPEAKER",
    size: "250×180×200MM (L×W×H)",
    battery: "5.1 HOME THEATER SYSTEM",
    img: "/speaker2.jpg",
  },
  {
    title: "PA SPEAKER",
    size: "500×350×300MM (L×W×H)",
    battery: "500W PA SPEAKER SYSTEM",
    img: "/speaker3.jpg",
  },
  {
    title: "CEILING SPEAKER",
    size: "200MM DIAMETER",
    battery: "20W CEILING MOUNTED SPEAKER",
    img: "/speaker4.jpg",
  },
  {
    title: "WALL MOUNT SPEAKER",
    size: "180×120×150MM (L×W×H)",
    battery: "30W WALL SPEAKER",
    img: "/speaker1.jpg",
  },
  {
    title: "COLUMN SPEAKER",
    size: "800×150×150MM (H×W×D)",
    battery: "60W COLUMN SPEAKER",
    img: "/speaker2.jpg",
  },
  {
    title: "HORN SPEAKER",
    size: "300×250×200MM (L×W×H)",
    battery: "100W HORN SPEAKER",
    img: "/speaker3.jpg",
  },
  {
    title: "SUBWOOFER",
    size: "350×300×350MM (L×W×H)",
    battery: "200W POWERED SUBWOOFER",
    img: "/speaker4.jpg",
  },
];

export default function SpeakerPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold">SPEAKER</h1>
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