import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

// Products array for Soldering Tools
const solderingProducts = [
  { title: "Soldering Iron", img: "/SolderingIron.jpg" },
  { title: "Desoldering Pump", img: "/DesolderingPump.jpg" },
  { title: "Solder Wire", img: "/SolderWire.jpg" },
  { title: "Helping Hands Tool", img: "/HelpingHands.jpg" },
  { title: "Soldering Station", img: "/SolderingStation.jpg" },
  { title: "Flux Paste", img: "/FluxPaste.jpg" },
  { title: "Heat Gun", img: "/HeatGun.jpg" },
  { title: "Tip Cleaner", img: "/TipCleaner.jpg" },
];

export default function SolderingToolsPage() {
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

      {/* Header Section */}
      <section className="bg-white">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900">
          <div className="max-w-6xl mx-auto px-6 py-10 text-white">
            <div className="text-xs uppercase tracking-widest mb-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/products" className="hover:underline">
                Products Category
              </Link>
              <span className="mx-2">/</span>
              <span>Soldering Tools</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold">SOLDERING TOOLS</h1>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solderingProducts.map((item, index) => (
              <div
                key={index}
                className="border border-blue-500 p-6 text-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto h-36 object-contain mb-4"
                />

                <h3 className="text-xs font-semibold tracking-wide mb-4 uppercase">
                  {item.title}
                </h3>

                <button
                  onClick={() => openModal(item)}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-semibold px-5 py-2 hover:bg-blue-700 transition"
                >
                  View More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {isModalOpen && selectedProduct && (
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </>
  );
}
