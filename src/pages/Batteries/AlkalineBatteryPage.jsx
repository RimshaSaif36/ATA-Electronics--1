import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const alkalineBatteries = [
  {
    title: "DURACELL AA",
    spec: "1.5V ALKALINE BATTERY",
    type: "AA ALKALINE BATTERY",
    img: "/DURACELLAA.jpg",
  },
  {
    title: "DURACELL AAA",
    spec: "1.5V ALKALINE BATTERY",
    type: "AAA ALKALINE BATTERY",
    img: "/DURACELLAAA.jpg",
  },
  {
    title: "DURACELL C",
    spec: "1.5V ALKALINE BATTERY",
    type: "C SIZE ALKALINE BATTERY",
    img: "/DURACELLC.jpg",
  },
  {
    title: "DURACELL D",
    spec: "1.5V ALKALINE BATTERY",
    type: "D SIZE ALKALINE BATTERY",
    img: "/DURACELLD.jpg",
  },
  {
    title: "DURACELL 9V",
    spec: "6LR61 9V ALKALINE",
    type: "9V ALKALINE BATTERY",
    img: "/DURACELL9V.jpg",
  },
  {
    title: "ENERGIZER AA MAX",
    spec: "1.5V ALKALINE BATTERY",
    type: "AA ALKALINE BATTERY",
    img: "/ENERGIZERAA.jpg",
  },
  {
    title: "ENERGIZER AAA MAX",
    spec: "1.5V ALKALINE BATTERY",
    type: "AAA ALKALINE BATTERY",
    img: "/ENERGIZERAAA.jpg",
  },
  {
    title: "ENERGIZER C",
    spec: "1.5V ALKALINE BATTERY",
    type: "C SIZE ALKALINE BATTERY",
    img: "/ENERGIZERC.jpg",
  },
  {
    title: "ENERGIZER D",
    spec: "1.5V ALKALINE BATTERY",
    type: "D SIZE ALKALINE BATTERY",
    img: "/ENERGIZERD.jpg",
  },
  {
    title: "ENERGIZER 9V",
    spec: "6LR61 9V ALKALINE",
    type: "9V ALKALINE BATTERY",
    img: "/ENERGIZER9V.jpg",
  },
  {
    title: "PANASONIC AA",
    spec: "1.5V ALKALINE BATTERY",
    type: "AA ALKALINE BATTERY",
    img: "/PANASONICAA.jpg",
  },
  {
    title: "PANASONIC AAA",
    spec: "1.5V ALKALINE BATTERY",
    type: "AAA ALKALINE BATTERY",
    img: "/PANASONICAAA.jpg",
  },
  {
    title: "PANASONIC C",
    spec: "1.5V ALKALINE BATTERY",
    type: "C SIZE ALKALINE BATTERY",
    img: "/PANASONICC.jpg",
  },
  {
    title: "PANASONIC D",
    spec: "1.5V ALKALINE BATTERY",
    type: "D SIZE ALKALINE BATTERY",
    img: "/PANASONICD.jpg",
  },
  {
    title: "PANASONIC 9V",
    spec: "6LR61 9V ALKALINE",
    type: "9V ALKALINE BATTERY",
    img: "/PANASONIC9V.jpg",
  },
];

export default function AlkalineBatteryPage() {
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
            ALKALINE BATTERIES
          </h1>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {alkalineBatteries.map((item, index) => (
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
