import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const audioVideoConverters = [
  {
    title: "HDMI TO AV (RCA) CONVERTER",
    spec: "HDMI Input to Composite Video Output",
    type: "VIDEO SIGNAL CONVERTER",
    img: "/hdmi-to-av.jpg",
  },
  {
    title: "AV (RCA) TO HDMI CONVERTER",
    spec: "Composite to HDMI 1080P",
    type: "AUDIO VIDEO CONVERTER",
    img: "/av-to-hdmi.jpg",
  },
  {
    title: "HDMI AUDIO EXTRACTOR",
    spec: "HDMI to HDMI + 3.5mm + Optical",
    type: "AUDIO SPLITTER",
    img: "/hdmi-audio-extractor.jpg",
  },
  {
    title: "DIGITAL TO ANALOG AUDIO CONVERTER",
    spec: "Optical / Coaxial to RCA",
    type: "DAC CONVERTER",
    img: "/digital-to-analog.jpg",
  },
  {
    title: "ANALOG TO DIGITAL AUDIO CONVERTER",
    spec: "RCA to Optical / Coaxial",
    type: "ADC CONVERTER",
    img: "/analog-to-digital.jpg",
  },
  {
    title: "HDMI TO VGA WITH AUDIO",
    spec: "1080P with 3.5mm Audio Output",
    type: "VIDEO + AUDIO CONVERTER",
    img: "/hdmi-to-vga-audio.jpg",
  },
  {
    title: "SDI TO HDMI CONVERTER",
    spec: "Professional Video Converter",
    type: "BROADCAST VIDEO CONVERTER",
    img: "/sdi-to-hdmi.jpg",
  },
  {
    title: "MINI AV2HDMI UPSCALER",
    spec: "Composite to HDMI 720P/1080P",
    type: "VIDEO UPSCALER",
    img: "/mini-av2hdmi.jpg",
  },
];

export default function AudioVideoConverterPage() {
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
            AUDIO - VIDEO CONVERTERS
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audioVideoConverters.map((item, index) => (
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
