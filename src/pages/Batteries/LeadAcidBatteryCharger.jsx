import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const leadAcidChargers = [
  {
    title: "NEWSTAR N60100",
    spec: "OUTPUT : DC 8V 1000MA",
    type: "6V 1A BATTERY CHARGER",
    img: "/NEWSTAR N60100.jpg",
  },
  {
    title: "NEWSTAR N120200",
    spec: "OUTPUT : DC 14V 2000MA",
    type: "12V 2A BATTERY CHARGER",
    img: "/NEWSTAR N120200.jpg",
  },
  {
    title: "LECXO LX-1210A BATTERY CHARGER",
    spec: "12V 10 AMPS",
    type: "LEAD-ACID BATTERY CHARGER",
    img: "/LECXO LX-1210A BATTERY CHARGER.jpg",
  },
  {
    title: "LECXO LX-1220A BATTERY CHARGER",
    spec: "12V 20 AMPS",
    type: "LEAD-ACID BATTERY CHARGER",
    img: "/LECXO LX-1220A BATTERY CHARGER.jpg",
  },
  {
    title: "NEWSTAR 35-1210HC 12V",
    spec: "12V 10A , 3 STAGE",
    type: "LEAD-ACID BATTERY CHARGER",
    img: "/NEWSTAR 35-1210HC 12V.jpg",
  },
  {
    title: "NEWSTAR 35-2410HC 24V",
    spec: "24V 10A , 3 STAGE",
    type: "LEAD-ACID BATTERY CHARGER",
    img: "/NEWSTAR 35-2410HC 24V.jpg",
  },
   {
    title: "EDON CB-10 BATTERY CHARGER",
    spec: "12V & 24V 10 AMP",
    type: "LEAD-ACID BATTERY CHARGER",
    img: "/EDON CB-10 BATTERY CHARGER.jpg",
  },
  {
    title: "EDON CB-20 BATTERY CHARGER",
    spec: "12V & 24V 20 AMP",
    type: "LEAD-ACID BATTERY CHARGER",
    img: "/EDON CB-20 BATTERY CHARGER.jpg",
  },
  {
    title: "EDON CB-30 BATTERY CHARGER",
    spec: "12V & 24V 30 AMP",
    type: "LEAD-ACID BATTERY CHARGER",
    img: "/EDON CB-30 BATTERY CHARGER.jpg",
  },
  {
    title: "EDON CB-40 BATTERY CHARGER",
    spec: "12V & 24V 40 AMP",
    type: "LEAD-ACID BATTERY CHARGER",
    img: "/EDON CB-40 BATTERY CHARGER.jpg",
  },
  {
    title: "EDON CB-50 BATTERY CHARGER",
    spec: "12V & 24V 50 AMP",
    type: "LEAD-ACID BATTERY CHARGER",
    img: "/EDON CB-50 BATTERY CHARGER.jpg",
  },
];

export default function LeadAcidChargerPage() {
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
            LEAD-ACID BATTERY CHARGERS
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadAcidChargers.map((item, index) => (
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
