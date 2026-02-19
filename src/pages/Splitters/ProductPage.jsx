import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const splitters = [
  {
    title: "HDMI 1x2 SPLITTER",
    spec: "1 Input to 2 Outputs, 4K Support",
    type: "HDMI SPLITTER",
    img: "/hdmi-1x2-splitter.jpg",
  },
  {
    title: "HDMI 1x4 SPLITTER",
    spec: "1 Input to 4 Outputs, Full HD",
    type: "HDMI DISTRIBUTOR",
    img: "/hdmi-1x4-splitter.jpg",
  },
  {
    title: "VGA 1x2 SPLITTER",
    spec: "1 Input to 2 Outputs",
    type: "VGA VIDEO SPLITTER",
    img: "/vga-1x2-splitter.jpg",
  },
  {
    title: "AUDIO 3.5MM SPLITTER",
    spec: "1 Male to 2 Female",
    type: "AUDIO SPLITTER",
    img: "/3.5mm-splitter.jpg",
  },
  {
    title: "HDMI AUDIO EXTRACTOR SPLITTER",
    spec: "HDMI to HDMI + Optical + 3.5mm",
    type: "AUDIO VIDEO SPLITTER",
    img: "/hdmi-audio-splitter.jpg",
  },
  {
    title: "DISPLAYPORT 1x2 SPLITTER",
    spec: "4K Resolution Support",
    type: "DISPLAY SPLITTER",
    img: "/dp-1x2-splitter.jpg",
  },
  {
    title: "USB HUB SPLITTER",
    spec: "1 USB to 4 USB Ports",
    type: "USB SPLITTER",
    img: "/usb-hub-splitter.jpg",
  },
  {
    title: "DVI 1x2 SPLITTER",
    spec: "Digital Video Distribution",
    type: "DVI SPLITTER",
    img: "/dvi-1x2-splitter.jpg",
  },
];

export default function SplitterPage() {
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
            SPLITTERS
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {splitters.map((item, index) => (
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
