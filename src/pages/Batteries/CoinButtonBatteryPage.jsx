import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const coinButtonBatteries = [
  {
    title: "RENATA 10 ZINC-AIR",
    spec: "1.45V - MADE IN GERMANY",
    type: "HEARING AID BATTERY",
    img: "/RENATA 10 ZINC-AIR.jpg",
  },
  {
    title: "RENATA 13 ZINC-AIR",
    spec: "1.45V - MADE IN GERMANY",
    type: "HEARING AID BATTERY",
    img: "/RENATA 13 ZINC-AIR.jpg",
  },
  {
    title: "RENATA 312 ZINC-AIR",
    spec: "1.45V - MADE IN GERMANY",
    type: "HEARING AID BATTERY",
    img: "/RENATA 312 ZINC-AIR.jpg",
  },
  {
    title: "RENATA 329",
    spec: "SILVER 1.55V -SWISS MADE",
    type: "WATCH BATTERY",
    img: "/RENATA 329.jpg",
  },
  {
    title: "ENERGIZER 2L76",
    spec: "3 VOLT BATTERY",
    type: "GLUCOSE MONITORS BATTERY",
    img: "/ENERGIZER 2L76.jpg",
  },
  {
    title: "GLUCOSE MONITORS BATTERY",
    spec: "1.5 VOLT , ALKALINE",
    type: "LR44 BUTTON BATTERY",
    img: "/GLUCOSE MONITORS BATTERY.jpg",
  },
  {
    title: "ENERGIZER A76 LR44",
    spec: "1.5 VOLT , ALKALINE",
    type: "LR44 BUTTON BATTERY",
    img: "/ENERGIZER A76 LR44.jpg",
  },
  {
    title: "MAXELL LR1130",
    spec: "1.5 VOLT , ALKALINE",
    type: "LR1130 BUTTON BATTERY",
    img: "/MAXELL LR1130.jpg",
  },
  {
    title: "PANASONIC CR2032 BATTERY",
    spec: "3V , MADE IN INDONESIA",
    type: "LITHIUM COIN BATTERY IN QATAR",
    img: "/PANASONIC CR2032 BATTERY.jpg",
  },
  {
    title: "PANASONIC CR2025",
    spec: "3 VOLT",
    type: "LITHUM COIN BATTERY",
    img: "/PANASONIC CR2025.jpg",
  },
   {
    title: "PANASONIC CR2012",
    spec: "3 VOLT",
    type: "LITHUM COIN BATTERY",
    img: "/PANASONIC CR2012.jpg",
  },
  {
    title: "PANASONIC CR2016",
    spec: "3 VOLT",
    type: "LITHUM COIN BATTERY",
    img: "/PANASONIC CR2016.jpg",
  },
  {
    title: "PANASONIC CR2477",
    spec: "3 VOLT",
    type: "LITHUM COIN BATTERY",
    img: "/PANASONIC CR2477.jpg",
  },
  {
    title: "PANASONIC BR2325",
    spec: "3 VOLT",
    type: "LITHUM COIN BATTERY",
    img: "/PANASONIC BR2325.jpg",
  },
   {
    title: "MURATA / SONY CR1220",
    spec: "3 VOLT",
    type: "LITHUM COIN BATTERY",
    img: "/MURATASONY CR1220.jpg",
  },
];

export default function CoinButtonBatteryPage() {
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

      <section className="bg-gradient-to-r from-red-800 via-red-700 to-red-900">
        <div className="max-w-6xl mx-auto px-6 py-10 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold">
            COIN & BUTTON BATTERIES
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coinButtonBatteries.map((item, index) => (
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
