import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const products = [
  {
    title: "PURE SINE WAVE INVERTER",
    size: "280×150×70MM (L×W×H)",
    battery: "12V - 1000W PURE SINE WAVE",
    img: "/inverter1.jpg",
  },
  {
    title: "MODIFIED SINE WAVE INVERTER",
    size: "200×100×50MM (L×W×H)",
    battery: "12V - 500W MODIFIED SINE WAVE",
    img: "/inverter2.jpg",
  },
  {
    title: "HIGH FREQUENCY INVERTER",
    size: "350×200×80MM (L×W×H)",
    battery: "24V - 2000W HIGH FREQUENCY",
    img: "/inverter3.jpg",
  },
  {
    title: "SOLAR INVERTER",
    size: "300×180×75MM (L×W×H)",
    battery: "48V - 3000W SOLAR INVERTER",
    img: "/inverter4.jpg",
  },
  {
    title: "UPS INVERTER",
    size: "250×120×60MM (L×W×H)",
    battery: "12V - 800W UPS INVERTER",
    img: "/inverter1.jpg",
  },
  {
    title: "GRID TIE INVERTER",
    size: "400×250×100MM (L×W×H)",
    battery: "220V - 5000W GRID TIE",
    img: "/inverter2.jpg",
  },
  {
    title: "MICRO INVERTER",
    size: "180×120×40MM (L×W×H)",
    battery: "24V - 300W MICRO INVERTER",
    img: "/inverter3.jpg",
  },
  {
    title: "POWER INVERTER",
    size: "320×170×85MM (L×W×H)",
    battery: "12V - 1500W POWER INVERTER",
    img: "/inverter4.jpg",
  },
];

export default function InverterPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold">INVERTER</h1>
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