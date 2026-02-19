import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const batteryMaterials = [
  {
    title: "18650 LI-ION BATTERY",
    spec: "3.7V RECHARGEABLE CELL",
    type: "LITHIUM-ION BATTERY",
    img: "/18650.jpg",
  },
  {
    title: "21700 LI-ION BATTERY",
    spec: "3.7V HIGH CAPACITY CELL",
    type: "LITHIUM-ION BATTERY",
    img: "/21700.jpg",
  },
  {
    title: "AA RECHARGEABLE BATTERY",
    spec: "1.2V NI-MH",
    type: "RECHARGEABLE BATTERY",
    img: "/AA.jpg",
  },
  {
    title: "AAA RECHARGEABLE BATTERY",
    spec: "1.2V NI-MH",
    type: "RECHARGEABLE BATTERY",
    img: "/AAA.jpg",
  },
  {
    title: "9V RECHARGEABLE BATTERY",
    spec: "NI-MH / LI-ION",
    type: "RECHARGEABLE BATTERY",
    img: "/9V.jpg",
  },
  {
    title: "BATTERY HOLDERS",
    spec: "18650 / AA / AAA",
    type: "BATTERY ACCESSORIES",
    img: "/holder.jpg",
  },
];

export default function BatteryMaterialsPage() {
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

      {/* Page Banner */}
      <section className="bg-gradient-to-r from-red-800 via-red-700 to-red-900">
        <div className="max-w-6xl mx-auto px-6 py-10 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold">
            BATTERY MATERIALS
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {batteryMaterials.map((item, index) => (
              <div
                key={index}
                className="border border-red-500 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
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
                    href={`https://wa.me/923000000000?text=I am interested in ${item.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
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
