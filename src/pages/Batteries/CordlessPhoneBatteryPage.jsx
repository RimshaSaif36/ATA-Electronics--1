import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const cordlessPhoneBatteries = [
  {
    title: "MULTIPLE POWER MP-104",
    spec: "3.6V 850MAH , REPLACEMENT FOR HHR-P104",
    type: "PANASONIC CORDLESS PHONE BATTERY",
    img: "/MULTIPLE POWER MP-104.jpg",
  },
  {
    title: "MULTIPLE POWER MP-105",
    spec: "2.4V 830MAH , REPLACEMENT FOR HHR-P105",
    type: "PANASONIC CORDLESS PHONE BATTERY",
    img: "/MULTIPLE POWER MP-105.jpg",
  },
  {
    title: "MULTIPLE POWER MP-107",
    spec: "3.6V 800MAH , REPLACEMENT FOR HHR-P107",
    type: "PANASONIC CORDLESS PHONE BATTERY",
    img: "/MULTIPLE POWER MP-107.jpg",
  },
  {
    title: "PANASONIC BK-4LDAW",
    spec: "1.2V 650MAH , AAA CELL X 2 PCS",
    type: "PANASONIC CORDLESS PHONE BATTERY",
    img: "/PANASONIC BK-4LDAW.jpg",
  },
    {
    title: "PANASONIC HHR-P301",
    spec: "3.6V 350MAH , 3 CELL NI-MH",
    type: "PANASONIC CORDLESS PHONE BATTERY",
    img: "/PANASONIC HHR-P301.jpg",
  },
   {
    title: "PANASONIC HHR-P102",
    spec: "3.6V 700MAH , 3 CELL NI-MH",
    type: "PANASONIC CORDLESS PHONE BATTERY",
    img: "/PANASONIC HHR-P102.jpg",
  },
];

export default function CordlessPhoneBatteryPage() {
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

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-red-800 via-red-700 to-red-900">
        <div className="max-w-6xl mx-auto px-6 py-10 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold">
            CORDLESS PHONE BATTERIES
          </h1>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cordlessPhoneBatteries.map((item, index) => (
              <div key={index} className="border border-red-500 p-6 text-center">

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
                    href="https://wa.me/923000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-500 text-white p-2 rounded"
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
