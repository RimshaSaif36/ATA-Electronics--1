import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const voltageConverters = [
  {
    title: "TERMINATOR TACC 90W",
    spec: "UPTO 90W , 3PIN PLUG",
    type: "220V ⇋ 110V VOLTAGE CONVERTER",
    img: "/TERMINATOR TACC 90W.jpg",
  },
  {
    title: "TERMINATOR TACC 150W",
    spec: "UPTO 150W , UNIVERSAL PLUG",
    type: "220V ⇋ 110V VOLTAGE CONVERTER",
    img: "/TERMINATOR TACC 150W.jpg",
  },
  {
    title: "TERMINATOR TACC 200W",
    spec: "MAXIMUM POWER LOAD : 200W",
    type: "220V ⇋ 110V VOLTAGE CONVERTER",
    img: "/TERMINATOR TACC 200W.jpg",
  },
  
  {
    title: "TERMINATOR TACC 300W",
    spec: "MAXIMUM POWER LOAD : 300W",
    type: "220V ⇋ 110V VOLTAGE CONVERTER",
    img: "/TERMINATOR TACC 300W.jpg",
  },
  {
    title: "TERMINATOR TACC 500W",
    spec: "MAXIMUM POWER LOAD : 500W",
    type: "220V ⇋ 110V VOLTAGE CONVERTER",
    img: "/TERMINATOR TACC 500W.jpg",
  },
   {
    title: "NEWSTAR MEE-111 500W",
    spec: "MAXIMUM POWER LOAD : 500W",
    type: "220V TO 110V VOLTAGE CONVERTER",
    img: "/NEWSTAR MEE-111 500W.jpg",
  },
  {
    title: "TERMINATOR TACC 1000W",
    spec: "MAXIMUM POWER LOAD : 1000WATT",
    type: "220V ⇋ 110V VOLTAGE CONVERTER",
    img: "/TERMINATOR TACC 1000W.jpg",
  },
  {
    title: "NEWSTAR MEE-112 1000W",
    spec: "MAXIMUM POWER LOAD :1000W",
    type: "220V TO 110V VOLTAGE CONVERTER",
    img: "/NEWSTAR MEE-112 1000W.jpg",
  },
   {
    title: "TERMINATOR TACC 1500W",
    spec: "MAXIMUM POWER LOAD : 1500W",
    type: "220V ⇋ 110V VOLTAGE CONVERTER",
    img: "/TERMINATOR TACC 1500W.jpg",
  },
  {
    title: "NEWSTAR MEE-113 1500W",
    spec: "MAXIMUM POWER LOAD :1500W",
    type: "220V TO 110V VOLTAGE CONVERTER",
    img: "/NEWSTAR MEE-113 1500W.jpg",
  },
  {
    title: "TERMINATOR TACC 2000W",
    spec: "MAXIMUM POWER LOAD : 2000W",
    type: "220V ⇋ 110V VOLTAGE CONVERTER",
    img: "/TERMINATOR TACC 2000W.jpg",
  },
   {
    title: "NEWSTAR MEE-114 2000W",
    spec: "MAXIMUM POWER LOAD : 2000W",
    type: "220V TO 110V VOLTAGE CONVERTER",
    img: "/NEWSTAR MEE-114 2000W.jpg",
  },
  {
    title: "TERMINATOR TACC 3000W",
    spec: "MAXIMUM POWER LOAD : 3000W",
    type: "220V ⇋ 110V VOLTAGE CONVERTER",
    img: "/TERMINATOR TACC 3000W.jpg",
  },
    {
    title: "NEWSTAR MEE-115 3000W",
    spec: "MAXIMUM POWER LOAD : 3000W",
    type: "220V TO 110V VOLTAGE CONVERTER",
    img: "/NEWSTAR MEE-115 3000W.jpg",
  },
  {
    title: "NEOSTAR TC-3000",
    spec: "MAXIMUM POWER LOAD : 3000W",
    type: "220 TO 110 VOLATAGE CONVERTER",
    img: "/NEOSTAR TC-3000.jpg",
  },
   {
    title: "TERMINATOR TACC 5000W",
    spec: "MAXIMUM POWER LOAD : 5000W",
    type: "220V ⇋ 110V VOLTAGE CONVERTER",
    img: "/TERMINATOR TACC 5000W.jpg",
  },
   {
    title: "NEWSTAR MEE-117 5000W",
    spec: "MAXIMUM POWER LOAD : 5000W",
    type: "220V TO 110V VOLTAGE CONVERTER",
    img: "/NEWSTAR MEE-117 5000W.jpg",
  },
    {
    title: "NEOSTAR ST-3000",
    spec: "MAXIMUM POWER LOAD : 3000W",
    type: "220 TO 110 VOLTAGE CONVERTER",
    img: "/NEOSTAR ST-3000.jpg",
  },
   {
    title: "NEWSTAR MEE-119 10000W",
    spec: "MAXIMUM POWER LOAD : 10000W",
    type: "220V TO 110V VOLTAGE CONVERTER",
    img: "/NEWSTAR MEE-119 10000W.jpg",
  },
  {
    title: "GOLDSOURCE ST-1000 1000W",
    spec: "MAXIMUM POWER LOAD : 1000W",
    type: "220V TO 110V VOLTAGE CONVERTER",
    img: "/GOLDSOURCE ST-1000 1000W.jpg",
  },
   {
    title: "GOLDSOURCE ST-2000 2000W",
    spec: "MAXIMUM POWER LOAD : 2000W",
    type: "220V TO 110V VOLTAGE CONVERTER",
    img: "/GOLDSOURCE ST-2000 2000W.jpg",
  },
  {
    title: "MANUMAG TRANSFORMER VOLTAGE CONVERT",
    spec: "100VA , 200VA , 300VA , 500VA",
    type: "220V TO 110V AC-AC TRANFORMER",
    img: "/MANUMAG TRANSFORMER VOLTAGE CONVERT.jpg",
  },
   {
    title: "MANUMAG TRANSFORMER",
    spec: "1000VA , 2000VA , 3000VA , 5000VA",
    type: "220V TO 110V AC-AC TRANFORMER",
    img: "/MANUMAG TRANSFORMER.jpg",
  },
];

export default function VoltageConverterPage() {
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
            VOLTAGE CONVERTERS
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {voltageConverters.map((item, index) => (
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
