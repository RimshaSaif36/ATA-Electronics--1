import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const floorStands = [
  {
    title: "SKILL TECH FS-601T",
    spec: "32\"- 70\" 50KG MAX HEIGHT : 1530MM",
    type: "ECONOMY TV TROLLEY STAND",
    img: "/floor.jpg",
  },
  {
    title: "DG TEK DG 75B FS",
    spec: "32\"- 75\" 50KG MAX HEIGHT : 1500MM",
    type: "ECONOMY TV TROLLEY STAND",
    img: "/f2.jpg",
  },
  {
    title: "SLIM FLOOR STAND",
    spec: "32\"- 75\" 46KG MAX HEIGHT : 1520MM",
    type: "HEIGHT ADJUSTABLE TV TROLLEY STAND",
    img: "/f3.jpg",
  },
  {
    title: "NORTH BAYOU AVA1800-70-1P",
    spec: "55\"- 85\" 90KG MAX HEIGHT : 1650MM",
    type: "TILT FLOOR STAND",
    img: "/f4.jpg",
  },
  {
    title: "SKILL TECH SH 100FS",
    spec: "60\" - 85\" 80KG MAX HEIGHT : 1470MM",
    type: "HEAVY DUTY TV TROLLEY STAND",
    img: "/f5.jpg",
  },{
    title: "DG TECH DG 110B FS",
    spec: "42\" - 86\" 80KG MAX HEIGHT : 1470MM",
    type: "HEAVY DUTY TV TROLLEY STAND",
    img: "/f6.jpg",
  },{
    title: "SKILL TECH SH 666TB",
    spec: "60\" - 100\" 100KG MAX HEIGHT : 1660MM",
    type: "HEAVY DUTY TV TROLLEY STAND",
    img: "/f7.jpg",
  },{
    title: "SKILL TECH SH 400 FS",
    spec: "32\" - 70\" 40KG MAX HEIGHT : 1800MM",
    type: "PREMIUM TV TROLLEY STAND",
    img: "/f8.jpg",
  },
  {
    title: "SKILL TECH FS14-46F-10",
    spec: "65\"- 85\" 60KG MAX HEIGHT : 1445MM",
    type: "STEEL STUDIO FLOOR STAND",
    img: "/f9.jpg",
  },{
    title: "SKILL TECH SH 17FS",
    spec: "VESA : 400X400 - 32\" - 65\" - 40KG",
    type: "FIXED TV FLOOR STAND",
    img: "/f10.jpg",
  },{
    title: "SKILL TECH SH 223FS",
    spec: "23\" - 50\" 40KG MAX HEIGHT : 1294MM",
    type: "TABLE TYPE TV STAND",
    img: "/f11.jpg",
  },{
    title: "SKILL TECH SH 224FS",
    spec: "23\" - 50\" 40KG MAX HEIGHT : 1394MM",
    type: "TABLE TYPE TV STAND",
    img: "/f12.jpg",
  },
];

export default function FloorStandPage() {
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

      {/* Page Banner */}
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
              <Link to="/tv-stand-mount" className="hover:underline">
                TV Stand Mount
              </Link>
              <span className="mx-2">/</span>
              <span>Floor Stand</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">FLOOR STAND</h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {floorStands.map((item, index) => (
              <div
                key={index}
                className="border border-red-500 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto h-44 object-contain mb-4"
                />

                <h3 className="font-bold text-sm mb-2 uppercase">
                  {item.title}
                </h3>

                <p className="text-xs mb-1">{item.spec}</p>

                <p className="text-xs font-semibold text-red-600 mb-4">
                  {item.type}
                </p>

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
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </>
  );
}
