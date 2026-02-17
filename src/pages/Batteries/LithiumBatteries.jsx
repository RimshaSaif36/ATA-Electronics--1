import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const lithiumBatteries = [
  {
    title: "SAFT LS 14250",
    spec: "1/2 AA , 3.6V (LI-SOCL2) MADE IN FRANCE",
    type: "14250 LITHIUM BATTERY",
    img: "/SAFTLS14250.jpg",
  },
  {
    title: "RAMWAY ER14250",
    spec: "3.6V , 1/2 AA SIZE",
    type: "14250 LITHIUM BATTERY",
    img: "/RAMWAYER14250.jpg",
  },
  {
    title: "EVE ER14250",
    spec: "1/2 AA SIZE , 3.6V 1.2AH (LI-SOCL2)",
    type: "14250 LITHIUM BATTERY",
    img: "/EVEER14250.jpg",
  },
  {
    title: "RAMWAY ER14250",
    spec: "3V , 1/2 AA SIZE",
    type: "14250 LITHIUM BATTERY",
    img: "/RAMWAYER14250.jpg",
  },
  {
    title: "VARTA CR 1/2 AA",
    spec: "3V , MADE IN GERMANY",
    type: "1/2 AA LITHIUM BATTERY",
    img: "/VARTACR12AA.jpg",
  },
  {
    title: "CMOS NI-CD 3.6V",
    spec: "3.6V 60MAH WITH LEG",
    type: "CMOS MEMORY BATTERY",
    img: "/CMOSNI-CD3.6V.jpg",
  },
  {
    title: "SAFT LS 14500",
    spec: "AA SIZE , 3.6V (Li-SOCl2) MADE IN FRANCE",
    type: "14500 LITHIUM BATTERY",
    img: "/SAFTLS14500.jpg",
  },
  {
    title: "RAMWAY ER14505",
    spec: "3.6V , AA SIZE",
    type: "14505 LITHIUM BATTERY",
    img: "/RAMWAYER14505.jpg",
  },
  {
    title: "RAMWAY CR14505",
    spec: "3V , AA SIZE",
    type: "14505 LITHIUM BATTERY",
    img: "/RAMWAYCR14505.jpg",
  },
  {
    title: "EVE ER 14505",
    spec: "AA SIZE , 3.6V 2.7AH",
    type: "14505 LITHIUM BATTERY",
    img: "/EVEER14505.jpg",
  },
  {
    title: "EVE ER 14335",
    spec: "2/3 AA , 3.6V",
    type: "14335 LITHIUM BATTERY",
    img: "/EVEER14335.jpg",
  },
  {
    title: "RAMWAY ER14335H",
    spec: "3.6V , 2/3 AA SIZE",
    type: "14335 LITHIUM BATTERY",
    img: "/RAMWAYER14335H.jpg",
  },
   {
    title: "PANASONIC BR 2/3A BATTERY",
    spec: "3V , INDUSTRIAL LITHIUM BATTERY",
    type: "BR 2/3A LITHIUM BATTERY",
    img: "/PANASONICBR23ABATTERY.jpg",
  }, {
    title: "SAFT LS 17330 LITHIUM BATTERY",
    spec: "2/3 A SIZE 3.6V (LI-SOCL2) MADE IN UK",
    type: "LITHIUM BATTERY 17330",
    img: "/SAFT LS17330LITHIUMBATTERY.jpg",
  }, {
    title: "SAFT LS 17500 LITHIUM BATTERY",
    spec: "A SIZE 3.6V (LI-SOCL2) MADE IN FRANCE",
    type: "LITHIUM BATTERY 17500",
    img: "/SAFTLS17500LITHIUMBATTERY.jpg",
  }, {
    title: "EVE ER 18505",
    spec: "3.6V , 18505 SIZE",
    type: "18505 LITHIUM BATTERY",
    img: "/EVEER18505.jpg",
  }, {
    title: "SAFT LS 26500 LITHIUM BATTERY",
    spec: "3.6V C SIZE (LI-SOCL2) MADE IN FRANCE",
    type: "26500 LITHIUM BATTERY",
    img: "/SAFTLS26500LITHIUMBATTERY.jpg",
  },
  {
    title: "RAMWAY ER26500 LITHIUM BATTERY",
    spec: "3.6V D SIZE (LI-SOCL2) MADE IN FRANCE",
    type: "26500 LITHIUM BATTERY",
    img: "/RAMWAY ER26500 LITHIUM BATTERY.jpg",
  },{
    title: "SAFT LSH 20 LITHIUM BATTERY",
    spec: "3.6V C SIZE (LI-SOCL2) MADE IN FRANCE",
    type: "LSH 20 LITHIUM BATTERY",
    img: "/SAFT LSH 20 LITHIUM BATTERY.jpg",
  },{
    title: "SAFT LS 33600 LITHIUM BATTERY",
    spec: "3.6V D SIZE (LI-SOCL2) MADE IN FRANCE",
    type: "33600 LITHIUM BATTERY",
    img: "/SAFT LS 33600 LITHIUM BATTERY.jpg",
  },{
    title: "RAMWAY ER34615 LITHIUM BATTERY",
    spec: "3.6V D SIZE BATTERY",
    type: "34615 LITHIUM BATTERY",
    img: "/RAMWAY ER34615 LITHIUM BATTERY.jpg",
  },{
    title: "SAFT LS 26500 LITHIUM BATTERY",
    spec: "3.6V C SIZE (LI-SOCL2) MADE IN FRANCE",
    type: "26500 LITHIUM BATTERY",
    img: "/SAFTLS26500LITHIUMBATTERY.jpg",
  },
];

export default function LithiumBatteries() {
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
            LITHIUM BATTERIES
          </h1>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {lithiumBatteries.map((item, index) => (
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
