import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const products = [
  {
    title: "LECXO LX2.8-6 VIETNAM",
    size: "SIZE : 65X32X97MM (LXWXH)",
    battery: "6V 2.8AH LEAD ACID BATTERY",
    img: "/LECXOLX2.8-6VIETNAM.jpg",
  },
  {
    title: "12V 9AH LEAD ACID",
    size: "Rechargeable",
    battery: "UPS BATTERY",
    img: "/lead2.jpg",
  },
  {
    title: "12V 12AH",
    size: "High Backup",
    battery: "LEAD ACID BATTERY",
    img: "/lead3.jpg",
  },
  {
    title: "12V 18AH",
    size: "Long Life",
    battery: "INDUSTRIAL BATTERY",
    img: "/lead4.jpg",
  },
];

export default function LeadAcidBatteryPage() {

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
              LEAD ACID BATTERIES
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
