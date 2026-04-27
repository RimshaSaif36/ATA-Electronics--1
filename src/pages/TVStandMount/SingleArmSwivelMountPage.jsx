import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const products = [
  {
    title: "SKILL TECH SH 1015P",
    spec: "VESA SIZE 800X400 - 43'' TO 80'' - 50KG",
    type: "LONG ARM SWIVEL MOUNT",
    img: "/ss1.jpg",
  },
  {
    title: "SKILL TECH SH 604P",
    spec: "VESA SIZE 600X400 - 32'' TO 60'' - 30KG",
    type: "SLIM PROFILE SWIVEL MOUNT",
    img: "/ss2.jpg",
  },
  {
    title: "SKILL TECH SH 64P",
    spec: "VESA SIZE 600X400 - 30'' TO 55'' - 40KG",
    type: "SINGLE HAND SWIVEL MOUNT",
    img: "/ss3.jpg",
  },
  {
    title: "TERMINATOR TTWM 3255S",
    spec: "VESA SIZE 400X400 - 32'' TO 55'' - 35KG",
    type: "FULL MOTION SWIVEL MOUNT",
    img: "/ss4.jpg",
  },
  {
    title: "SKILL TECH SH 44P",
    spec: "VESA SIZE 400X400 - 20'' TO 60'' - 40KG",
    type: "FULL MOTION SWIVEL MOUNT",
    img: "/ss5.jpg",
  }, {
    title: "SKILL TECH SH 43P",
    spec: "VESA SIZE 400X400 - 20'' TO 55'' - 30KG",
    type: "FULL MOTION SWIVEL MOUNT",
    img: "/ss6.jpg",
  }, {
    title: "NB P4",
    spec: "VESA SIZE 400X400 - 32\" TO 55\" - 27KG",
    type: "FULL MOTION SWIVEL MOUNT",
    img: "/ss7.jpg",
  }, {
    title: "GULF STAR GS 806-2",
    spec: "VESA SIZE 400X400 - 17\" TO 46\" - 35KG",
    type: "FULL MOTION SWIVEL MOUNT",
    img: "/ss8.jpg",
  },
  {
    title: "GULF STAR GS 806-1",
    spec: "VESA SIZE 200X200 - 14\" TO 42\" - 30KG",
    type: "FULL MOTION SWIVEL MOUNT",
    img: "/ss9.jpg",
  },
  {
    title: "SKILL TECH SH 34P",
    spec: "VESA SIZE 200X200 - 14\" TO 43\" - 35KG",
    type: "FULL MOTION SWIVEL MOUNT",
    img: "/ss10.jpg",
  },
  {
    title: "DG TECH DG 1010P",
    spec: "VESA SIZE 100X100 - 10\" TO 32\" - 25KG",
    type: "SMALL SCREEN SWIVEL MOUNT",
    img: "/ss11.jpg",
  },
  {
    title: "SKILL TECH SH 21P",
    spec: "VESA SIZE 100X100 - 10\" TO 26\" - 20KG",
    type: "SMALL SCREEN SWIVEL MOUNT",
    img: "/ss12.jpg",
  },
  {
    title: "SKILL TECH SH 10P",
    spec: "VESA SIZE 100X100 - 10\" TO 26\" - 10KG",
    type: "SMALL SCREEN SWIVEL MOUNT",
    img: "/ss13.jpg",
  },
];

export default function SingleArmSwivelMountPage() {
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
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/products" className="hover:underline">Products Category</Link>
              <span className="mx-2">/</span>
              <Link to="/tv-stand-mount" className="hover:underline">TV Stand Mount</Link>
              <span className="mx-2">/</span>
              <span>Single Arm Swivel Mount</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">SINGLE ARM SWIVEL MOUNT</h1>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <div
                key={index}
                className="border border-red-500 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto h-44 object-contain mb-4"
                />
                <h3 className="font-bold text-sm mb-2 uppercase">{item.title}</h3>
                <p className="text-xs mb-1">{item.spec}</p>
                <p className="text-xs font-semibold text-red-600 mb-4">{item.type}</p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => openModal(item)}
                    className="bg-red-600 text-white text-xs px-6 py-2 rounded-full font-semibold hover:bg-red-700"
                  >
                    ENQUIRY
                  </button>
                  <a
                    href={`https://wa.me/923000000000?text=I am interested in ${item.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                  >
                    <FaWhatsapp size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <EnquiryModal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
      )}
    </>
  );
}
