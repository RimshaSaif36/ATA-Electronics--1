import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

// ✅ Define a Product type
type Product = {
  title: string;
  img: string;
};

// ✅ Typed products array
const products: Product[] = [
  { title: "Microphone Stand", img: "/MicrophoneStand.jpg" },
  { title: "Speaker Stand", img: "/SpeakerStand.jpg" },
  
];

export default function MicSpeakerStandPage() {
  // ✅ Typed state for selectedProduct
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // ✅ Typed parameter
  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />

      {/* Header Section */}
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
              <span className="mx-2">/</span>
              <span>Mic & Speaker Stands</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold">
              MIC & SPEAKER STANDS
            </h1>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <div
                key={index}
                className="border border-red-500 p-6 text-center"
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
                  className="inline-flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-semibold px-5 py-2 hover:bg-red-700 transition"
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
