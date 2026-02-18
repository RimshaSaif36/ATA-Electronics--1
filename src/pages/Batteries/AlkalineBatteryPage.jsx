import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const alkalineBatteries = [
  {
    title: "KODAK AAAA LR8D425",
    spec: "1.5 VOLT , MADE IN CHINA",
    type: "AAAA ALKALINE BATTERY",
    img: "/KODAK AAAA LR8D425.jpg",
  },
  {
    title: "DURACELL AA MN1500",
    spec: "1.5 VOLT , PACK OF 2PC",
    type: "AA ALKALINE BATTERY",
    img: "/DURACELL AA MN1500.jpg",
  },
  {
    title: "DURACELL AA MN1500",
    spec: "1.5 VOLT , PACK OF 20 PC",
    type: "AA ALKALINE BATTERY",
    img: "/DURACELL AA MN15001.jpg",
  },
  {
    title: "PANASONIC AA LR6T",
    spec: "1.5 VOLT , MADE IN BELGIUM",
    type: "AA ALKALINE BATTERY",
    img: "/PANASONIC AA LR6T.jpg",
  },
  {
    title: "KODAK AA LR6 MN1500",
    spec: "1.5 VOLT , SUPER ALKALINE",
    type: "AA ALKALINE BATTERY",
    img: "/KODAK AA LR6 MN1500.jpg",
  },
  {
    title: "PANASONIC AA R6 UM3",
    spec: "1.5 VOLT , MADE IN POLAND",
    type: "AA ZINC CARBON BATTERY",
    img: "/PANASONIC AA R6 UM3.jpg",
  },
  {
    title: "VARTA INDUSTRIAL PRO AA LR6",
    spec: "1.5 VOLT , MADE IN GERMANY",
    type: "AA INDUSTRIAL ALKALINE BATTERY",
    img: "/VARTA INDUSTRIAL PRO AA LR6.jpg",
  },
  {
    title: "PANASONIC AAA LR03T",
    spec: "1.5 VOLT , MADE IN BELGIUM",
    type: "AAA ALKALINE BATTERY",
    img: "/PANASONIC AAA LR03T.jpg",
  },
  {
    title: "DURACELL AAA MN2400",
    spec: "1.5 VOLT , PACK OF 2PC",
    type: "AAA ALKALINE BATTERY",
    img: "/DURACELL AAA MN2400.jpg",
  },
  {
    title: "DURACELL AAA MN2400",
    spec: "1.5 VOLT , PACK OF 20 PC",
    type: "AAA ALKALINE BATTERY",
    img: "/DURACELL AAA MN24001.jpg",
  },
  {
    title: "KODAK AAA LR03 MN2400",
    spec: "1.5 VOLT , SUPER ALKALINE",
    type: "AAA ALKALINE BATTERY",
    img: "/KODAK AAA LR03 MN2400.jpg",
  },
  {
    title: "VARTA INDUSTRIAL PRO AAA LR03",
    spec: "1.5 VOLT , MADE IN GERMANY",
    type: "AAA INDUSTRIAL ALKALINE BATTERY",
    img: "/VARTA INDUSTRIAL PRO AAA LR03.jpg",
  },
  {
    title: "PANASONIC AA R03 UM4",
    spec: "1.5 VOLT , MADE IN POLAND",
    type: "AAA ZINC CARBON BATTERY",
    img: "/PANASONIC AA R03 UM4.jpg",
  },
  {
    title: "PANASONIC C2",
    spec: "1.5 VOLT",
    type: "C SIZE ALKALINE BATTERY",
    img: "/PANASONIC C2.jpg",
  },
  {
    title: "KODAK C2 LR14 MN1400",
    spec: "1.5 VOLT , SUPER ALKALINE",
    type: "C SIZE ALKALINE BATTERY",
    img: "/KODAK C2 LR14 MN1400.jpg",
  },
  {
    title: "FUJI C2",
    spec: "1.5 VOLT",
    type: "C SIZE ALKALINE BATTERY",
    img: "/FUJI C2.jpg",
  },
  {
    title: "DURACELL C2 MN1300",
    spec: "1.5 VOLT , LONG LASTING",
    type: "C SIZE ALKALINE BATTERY",
    img: "/DURACELL C2 MN1300.jpg",
  },
  {
    title: "PANASONIC D2",
    spec: "1.5 VOLT",
    type: "D SIZE ALKALINE BATTERY",
    img: "/PANASONIC D2.jpg",
  },
   {
    title: "KODAK D2 LR20 MN1300",
    spec: "1.5 VOLT , SUPER ALKALINE",
    type: "D SIZE ALKALINE BATTERY",
    img: "/KODAK D2 LR20 MN1300.jpg",
  },
  {
    title: "FUJI D2",
    spec: "1.5 VOLT",
    type: "D SIZE ALKALINE BATTERY",
    img: "/FUJI D21.jpg",
  },
  {
    title: "DURACELL D SIZE MN1300",
    spec: "1.5 VOLT , LONG LASTING",
    type: "D SIZE ALKALINE BATTERY",
    img: "/DURACELL D SIZE MN1300.jpg",
  },
  {
    title: "GP ULTRA PLUS 9V 6LF22 6LR61 MN1604",
    spec: "9 VOLT , MADE IN MALAYSIA",
    type: "9V ALKALINE BATTERY",
    img: "/GP ULTRA PLUS 9V 6LF22 6LR61 MN1604.jpg",
  },
  {
    title: "DURACELL 9V 6LR61",
    spec: "9 VOLT , MADE IN MALAYSIA",
    type: "9V ALKALINE BATTERY",
    img: "/DURACELL 9V 6LR61.jpg",
  },
   {
    title: "VARTA INDUSTRIAL PRO 9V 6LR61",
    spec: "9 VOLT , MADE IN GERMANY",
    type: "9V INDUSTRIAL ALKALINE BATTERY",
    img: "/VARTA INDUSTRIAL PRO 9V 6LR61.jpg",
  },
  {
    title: "TOSHIBA 9V 6F22 1604",
    spec: "9 VOLT , HEAVY DUTY",
    type: "9V CARBON ZINC BATTERY",
    img: "/TOSHIBA 9V 6F22 1604.jpg",
  },
  {
    title: "KODAK 9V 6F22",
    spec: "9 VOLT , SUPER HEAVY DUTY",
    type: "9V CARBON ZINC BATTERY",
    img: "/KODAK 9V 6F22.jpg",
  },
   {
    title: "GP LR1 910A N SIZE",
    spec: "1.5 VOLT , SUPER ALKALINE",
    type: "N SIZE LR1 BATTERY",
    img: "/GP LR1 910A N SIZE.jpg",
  },
  {
    title: "ENERGYCELL LR1",
    spec: "1V",
    type: "N SIZE BATTERY ALKALINE",
    img: "/ENERGYCELL LR1.jpg",
  },
   {
    title: "ENERGIZER LR1 E90 N SIZE",
    spec: "1.5 VOLT , MADE IN USA",
    type: "N SIZE LR1 BATTERY",
    img: "/ENERGIZER LR1 E90 N SIZE.jpg",
  },
   {
    title: "GP 23A BATTERY",
    spec: "12V SUPER HIGH VOLTAGE",
    type: "23A CAR KEY BATTERY",
    img: "/GP 23A BATTERY.jpg",
  },
  {
    title: "GP 27A BATTERY",
    spec: "12V SUPER HIGH VOLTAGE",
    type: "27A CAR KEY BATTERY",
    img: "/GP 27A BATTERY.jpg",
  },
  {
    title: "ENERGIZER A23 BATTERY",
    spec: "12V SUPER HIGH VOLTAGE",
    type: "23A CAR KEY BATTERY",
    img: "/ENERGIZER A23 BATTERY.jpg",
  },
  {
    title: "ENERGIZER A27 BATTERY",
    spec: "12V SUPER HIGH VOLTAGE",
    type: "27A CAR KEY BATTERY",
    img: "/ENERGIZER A27 BATTERY.jpg",
  },
  {
    title: "ENERGIZER E96 AAAA",
    spec: "1.5 VOLT , MADE IN SINGAPORE",
    type: "ENERGIZER AAAA BATTERY",
    img: "/ENERGIZER E96 AAAA.jpg",
  },
  {
    title: "ENERGIZER AAA LR03",
    spec: "1.5 VOLT , MADE IN SINGAPORE",
    type: "AAA ALKALINE BATTERY",
    img: "/ENERGIZER AAA LR03.jpg",
  },
  {
    title: "ENERGIZER AA LR6",
    spec: "1.5 VOLT , MADE IN SINGAPORE",
    type: "AA ALKALINE BATTERY",
    img: "/ENERGIZER AA LR6.jpg",
  },
   {
    title: "ENERGIZER 9V 6LF22",
    spec: "9 VOLT , MADE IN SINGAPORE",
    type: "9V ALKALINE BATTERY",
    img: "/ENERGIZER 9V 6LF22.jpg",
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
