import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const products = [
  {
    title: "AWT 18650 3500MAH",
    size: "3.7 VOLT 3500MAH RECHARGEABLE",
    battery: "18650 BATTERY",
    img: "/AWT186503500MAH.jpg",
  },
  {
    title: "AWT 18650 3000MAH",
    size: "3.7V / 5000mAh",
    battery: "HIGH CAPACITY BATTERY",
    img: "/AWT186503000MAH.jpg",
  },
  {
    title: "PANASONIC NCR 18650BD GREY",
    size: "3.7 VOLT 3030MAH RECHARGEABLE",
    battery: "18650 BATTERY",
    img: "/PANASONICNCR18650BDGREY.jpg",
  },
  {
    title: "PANASONIC NCR 18650 GREEN",
    size: "3.7 VOLT 3400MAH RECHARGEABLE",
    battery: "18650 BATTERY",
    img: "/PANASONICNCR18650GREEN.jpg",
  },
  {
    title: "SAMSUNG 18650",
    size: "3.7 VOLT 2600MAH RECHARGEABLE",
    battery: "18650 BATTERY",
    img: "/SAMSUNG18650.jpg",
  },
  {
    title: "MP 18650 3800MAH (PACK OF 2PC)",
    size: "3.7 VOLT 3800MAH RECHARGEABLE",
    battery: "18650 BATTERY",
    img: "/MP186503800MAH(PACKOF2PC).jpg",
  },
  {
    title: "XTAR 18650 2600MAH",
    size: "3.7 VOLT 2600MAH RECHARGEABLE",
    battery: "18650 BATTERY",
    img: "/XTAR186502600MAH.jpg",
  },
  {
    title: "LUCKY SKY ICR16340",
    size: "2400MAH 3.7V",
    battery: "16340 BATTERY",
    img: "/LUCKYSKYICR16340.jpg",
  },
  {
    title: "AWT 20700 4200MAH 40A",
    size: "3.7 VOLT 4200MAH RECHARGEABLE",
    battery: "20700 BATTERY",
    img: "/AWT207004200MAH40A.jpg",
  },
  {
    title: "EFEST 21700 3700MAH",
    size: "3.7 VOLT 2600MAH RECHARGEABLE",
    battery: "18650 BATTERY",
    img: "/EFEST217003700MAH.jpg",
  },
  {
    title: "AWT 26650 4500MAH 75A",
    size: "3.7 VOLT 4500MAH RECHARGEABLE",
    battery: "26650 BATTERY",
    img: "/AWT266504500MAH75A.jpg",
  },
  {
    title: "XTAR 26650 5200MAH",
    size: "3.7 VOLT 4200MAH RECHARGEABLE",
    battery: "20700 BATTERY",
    img: "/XTAR266505200MAH.jpg",
  },
  
];

export default function LithiumIonBatteryPage() {

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
        <div className="bg-gradient-to-r from-red-800 via-red-700 to-red-900">
          <div className="max-w-6xl mx-auto px-6 py-10 text-white">
            <h1 className="text-3xl sm:text-4xl font-bold">
              LITHIUM ION BATTERIES
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((item, index) => (
              <div key={index} className="border border-red-500 p-6 text-center">

                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto h-44 object-contain mb-4"
                />

                <h3 className="font-bold text-sm mb-2 uppercase">
                  {item.title}
                </h3>

                <p className="text-xs mb-1">{item.size}</p>

                <p className="text-xs font-semibold text-red-600 mb-4">
                  {item.battery}
                </p>

                <div className="flex items-center justify-center gap-3">

                  {/* ENQUIRY BUTTON */}
                  <button
                    onClick={() => openModal(item)}
                    className="bg-red-600 text-white text-xs px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
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

      {/* MODAL */}
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
