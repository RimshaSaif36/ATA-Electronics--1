import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const specialBatteries = [
  {
    title: "PANASONIC BR 2/3A",
    spec: "3V , WITH 2PIN CABLE , JAPAN",
    type: "BR-2/3A LITHUM BATTERY",
    img: "/PANASONIC BR 23A.jpg",
  },
  {
    title: "FUJI CR8-LHC",
    spec: "3V , WITH 2PIN WIRE , JAPAN",
    type: "CR8-LHC LITHUM BATTERY",
    img: "/FUJI CR8-LHC.jpg",
  },
  {
    title: "MITSUBISHI CR17335SE-R 3V",
    spec: "3V , WITH 2PIN CABLE , JAPAN",
    type: "PROGRAMMABLE CONTROLLER BATTERY",
    img: "/MITSUBISHI CR17335SE-R 3V.jpg",
  },
  {
    title: "FUJI CR1/2 6L (OMRON CJ1W-BAT01)",
    spec: "3V , WITH 2PIN CABLE , JAPAN",
    type: "CR 1/2 6L LITHUM BATTERY",
    img: "/FUJI CR12 6L (OMRON CJ1W-BAT01).jpg",
  },
   {
    title: "SANYO CR14250SE (3V)",
    spec: "3V , WITH 2PIN CABLE , JAPAN",
    type: "CR14250SE BATTERY",
    img: "/SANYO CR14250SE (3V).jpg",
  },
  {
    title: "TOSHIBA ER3V / 3.6V",
    spec: "3.6V , WITH 2PIN WIRE , JAPAN",
    type: "ER 3V LITHUM BATTERY",
    img: "/TOSHIBA ER3V3.6V.jpg",
  },
  {
    title: "MAXWELL ER3",
    spec: "3.6V , WITH 2PIN WIRE , JAPAN",
    type: "ER3 LITHUM BATTERY",
    img: "/MAXWELL ER3.jpg",
  },
  {
    title: "MITSUBISHI CR17330V 3.6V",
    spec: "3.6V , WITH 2PIN WIRE , JAPAN",
    type: "CR17330 LITHUM BATTERY",
    img: "/MITSUBISHI CR17330V 3.6V.jpg",
  }, 
];

export default function SpecialBatteryPage() {
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
            SPECIAL BATTERIES
          </h1>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialBatteries.map((item, index) => (
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
