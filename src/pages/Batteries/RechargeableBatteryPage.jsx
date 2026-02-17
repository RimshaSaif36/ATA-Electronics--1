import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const rechargeableBatteries = [
  {
    title: "PANASONIC ENELOOP BK-3MCCE/2BS",
    spec: "1.2V 1900MAH RECHARGEABLE",
    type: "AA NIMH RECHARGABLE BATTERY",
    img: "/PANASONICENELOOPBK-3MCCE2BS.jpg",
  },
  {
    title: "PANASONIC ENELOOP BK-4MCCE/2BT",
    spec: "1.2V 800MAH RECHARGEABLE",
    type: "AAA NI-MH RECHARGABLE BATTERY",
    img: "/PANASONICENELOOPBK-4MCCE2BT.jpg",
  },
  {
    title: "PANASONIC CHARGER K-KJ51MCC20S",
    spec: "FREE 2PC AA 1.2V 2000MAH NI-MH BATTERY",
    type: "AA & AAA BATTERY CHARGER",
    img: "/PANASONICCHARGERK-KJ51MCC20S.jpg",
  },
  {
    title: "PANASONIC BK-4LDAW/2BT",
    spec: "AAA 1.2V 650MAH RECHARGEABLE",
    type: "CORDLESS PHONE RECHARGABLE BATTERY",
    img: "/PANASONICBK-4LDAW2BT.jpg",
  },
  {
    title: "DURACELL AAA HR03 DX2400",
    spec: "1.2V 850MAH RECHARGEABLE",
    type: "AAA NI-MH RECHARGABLE BATTERY",
    img: "/DURACELLAAAHR03DX2400.jpg",
  },
  {
    title: "DURACELL CHARGER CEF14UK4",
    spec: "FREE 2PC AA 1300MAH & AAA 750MAH BATTERY",
    type: "AA & AAA BATTERY CHARGER",
    img: "/DURACELLCHARGERCEF14UK4.jpg",
  },
  {
    title: "MULTIPLE POWER (MP) AA R6 1.2V",
    spec: "AA 1.2V 2300MAH RECHARGEABLE",
    type: "AA NIMH RECHARGABLE BATTERY",
    img: "/MULTIPLEPOWER(MP)AAR61.2V.jpg",
  },
   {
    title: "MULTIPLE POWER C R14 1.2V",
    spec: "AA 1.2V 2300MAH RECHARGEABLE",
    type: "AA NIMH RECHARGABLE BATTERY",
    img: "/MULTIPLEPOWERCR141.2V.jpg",
  },
  {
    title: "MULTIPLE POWER D R20 1.2V",
    spec: "5000MAH RECHARGEABLE BATTERY",
    type: "1.2 V NI-CD RECHARGEABLE BATTERY",
    img: "/MULTIPLEPOWERDR201.2V.jpg",
  },
  {
    title: "MULTIPLE POWER (MP) AAA R3 1.2V",
    spec: "AAA 1.2V 1100MAH RECHARGEABLE",
    type: "AAA NI-MH RECHARGABLE BATTERY",
    img: "/MULTIPLEPOWER(MP)AAAR31.2V.jpg",
  },
   {
    title: "MULTIPLE POWER (MP) 9V",
    spec: "9V 300MAH RECHARGEABLE",
    type: "NI-MH REACHARGEABLE BATTERY",
    img: "/MULTIPLEPOWER(MP)9V.jpg",
  },
   {
    title: "MULTIPLE POWER (MP) MP-107",
    spec: "NI-MH BATTERY CHARGER",
    type: "AA , AAA , 9V BATTERY CHARGER",
    img: "/MULTIPLEPOWER(MP)MP-107.jpg",
  },
   {
    title: "ENERGIZER 9V NH22N 6HR61",
    spec: "9V 175MAH RECHARGEABLE",
    type: "9V NI-MH RECHARGABLE BATTERY",
    img: "/ENERGIZER9VNH22N6HR61.jpg",
  },
  {
    title: "LECXO NI-MH 9V",
    spec: "9V 300MAH RECHARGEABLE",
    type: "9V NI-MH RECHARGABLE BATTERY",
    img: "/LECXONI-MH9V.jpg",
  },
  {
    title: "ENERGIZER C SIZE NH35 HR14",
    spec: "1.2V 2500MAH RECHARGEABLE",
    type: "C SIZE NI-MH RECHARGABLE BATTERY",
    img: "/ENERGIZERCSIZENH35HR14.jpg",
  },
  {
    title: "BESTON BST-C821BW",
    spec: "4 PORT , NI-MH & NI-CD CHARGER",
    type: "AA , AAA , SC , C , D BATTERY CHARGER",
    img: "/BESTONBST-C821BW.jpg",
  },
];

export default function RechargeableBatteries() {
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
            RECHARGEABLE BATTERIES
          </h1>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {rechargeableBatteries.map((item, index) => (
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
