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
    title: "LECXO LX3.4-6 VIETNAM",
    size: "SIZE : 134X33X59MM (LXWXH)",
    battery: "6V 3.4AH LEAD ACID BATTERY",
    img: "/LECXOLX3.4-6VIETNAM.jpg",
  },
  {
    title: "LECXO LX4.5-6 VIETNAM",
    size: "SIZE : 70X47X101MM (LXWXH)",
    battery: "6V 4.5AH LEAD ACID BATTERY",
    img: "/LECXOLX4.5-6VIETNAM.jpg",
  },
  {
    title: "LECXO LX7-6 VIETNAM",
    size: "SIZE : 151X34X94MM (LXWXH)",
    battery: "6V 7AH LEAD ACID BATTERY",
    img: "/LECXOLX7-6VIETNAM.jpg",
  },
   {
    title: "LECXO LX12-6 VIETNAM",
    size: "SIZE : 151X50X94MM (LXWXH)",
    battery: "6V 12AH LEAD ACID BATTERY",
    img: "/LECXOLX12-6VIETNAM.jpg",
  },
  {
    title: "LECXO LX0.8-12 VIETNAM",
    size: "SIZE : 96X25X62MM (LXWXH)",
    battery: "12V 0.8AH LEAD ACID BATTERY",
    img: "/LECXOLX0.8-12VIETNAM.jpg",
  },
  {
    title: "LECXO LX1.2-12 VIETNAM",
    size: "SIZE : 97X49X50MM (LXWXH)",
    battery: "12V 1.2AH LEAD ACID BATTERY",
    img: "/LECXOLX1.2-12VIETNAM1.jpg",
  },
  {
    title: "LECXO LX2.3-12 VIETNAM",
    size: "SIZE : 178X34X60MM (LXWXH)",
    battery: "12V 2.3AH LEAD ACID BATTERY",
    img: "/LECXOLX2.3-12VIETNAM.jpg",
  },
  {
    title: "LECXO LX2.6-12 VIETNAM",
    size: "SIZE : 178X34X60MM (LXWXH)",
    battery: "12V 2.6AH LEAD ACID BATTERY",
    img: "/LECXOLX2.6-12VIETNAM.jpg",
  },
    {
    title: "LECXO LX2.9-12 VIETNAM",
    size: "SIZE : 78X54X99MM (LXWXH)",
    battery: "12V 2.9AH LEAD ACID BATTERY",
    img: "/LECXOLX2.9-12VIETNAM.jpg",
  },
  {
    title: "LECXO LX3-12 VIETNAM",
    size: "SIZE : 134X67X60MM (LXWXH)",
    battery: "12V 3AH LEAD ACID BATTERY",
    img: "/LECXOLX3-12VIETNAM.jpg",
  },
  {
    title: "LECXO LX5-12 VIETNAM",
    size: "SIZE : 90X70X101MM (LXWXH)",
    battery: "12V 5AH LEAD ACID BATTERY",
    img: "/LECXOLX5-12VIETNAM.jpg",
  },
    {
    title: "LECXO LX7-12 VIETNAM",
    size: "SIZE : 151X65X94MM (LXWXH)",
    battery: "12V 7AH LEAD ACID BATTERY",
    img: "/LECXOLX7-12VIETNAM.jpg",
  },
  {
    title: "LECXO LX14-12 VIETNAM",
    size: "SIZE : 151X98X95 (LXWXH)",
    battery: "12V 14AH LEAD ACID BATTERY",
    img: "/LECXOLX14-12VIETNAM.jpg",
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
