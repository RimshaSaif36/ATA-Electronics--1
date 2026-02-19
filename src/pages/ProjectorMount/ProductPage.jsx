import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const projectorMounts = [
  {
    title: "CEILING PROJECTOR MOUNT",
    spec: "Adjustable tilt & rotation, Holds up to 15kg",
    type: "FIXED CEILING MOUNT",
    img: "/ceiling-projector-mount.jpg",
  },
  {
    title: "EXTENDABLE PROJECTOR MOUNT",
    spec: "Telescopic arm up to 50cm, 360° Rotation",
    type: "ADJUSTABLE CEILING MOUNT",
    img: "/extendable-projector-mount.jpg",
  },
  {
    title: "WALL PROJECTOR MOUNT",
    spec: "Mounts projector to wall, Tilt & Swivel",
    type: "WALL MOUNT",
    img: "/wall-projector-mount.jpg",
  },
  {
    title: "UNIVERSAL PROJECTOR MOUNT",
    spec: "Fits most projectors, Height & Tilt adjustable",
    type: "UNIVERSAL CEILING MOUNT",
    img: "/universal-projector-mount.jpg",
  },
  {
    title: "HEAVY DUTY PROJECTOR MOUNT",
    spec: "Supports projectors up to 25kg",
    type: "INDUSTRIAL MOUNT",
    img: "/heavy-duty-projector-mount.jpg",
  },
  {
    title: "SHORT ARM CEILING PROJECTOR MOUNT",
    spec: "Compact design, Height adjustable",
    type: "CEILING MOUNT",
    img: "/short-arm-projector-mount.jpg",
  },
];

export default function ProjectorMountPage() {
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
            PROJECTOR MOUNTS
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectorMounts.map((item, index) => (
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
