import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const cableData = {
  "hdmi-cables": {
    heading: "HDMI CABLES",
    img: "/HDMICables.jpg",
    products: [
      { title: "HDMI CABLE 1.5M", spec: "4K Ultra HD, High Speed", type: "HDMI 2.0 CABLE" },
      { title: "HDMI CABLE 3M", spec: "4K Ultra HD, High Speed", type: "HDMI 2.0 CABLE" },
      { title: "HDMI CABLE 5M", spec: "4K Ultra HD, High Speed", type: "HDMI 2.0 CABLE" },
      { title: "HDMI CABLE 10M", spec: "4K Ultra HD, High Speed", type: "HDMI 2.0 CABLE" },
      { title: "HDMI CABLE 15M", spec: "4K Ultra HD, High Speed", type: "HDMI 2.0 CABLE" },
      { title: "HDMI CABLE 20M", spec: "4K Ultra HD, High Speed", type: "HDMI 2.0 CABLE" },
    ],
  },
  "display-port-cables": {
    heading: "DISPLAY PORT CABLES",
    img: "/DisplayPortCables.jpg",
    products: [
      { title: "DISPLAY PORT CABLE 1.5M", spec: "4K@60Hz, High Speed", type: "DISPLAY PORT 1.4 CABLE" },
      { title: "DISPLAY PORT CABLE 3M", spec: "4K@60Hz, High Speed", type: "DISPLAY PORT 1.4 CABLE" },
      { title: "DISPLAY PORT CABLE 5M", spec: "4K@60Hz, High Speed", type: "DISPLAY PORT 1.4 CABLE" },
      { title: "DISPLAY PORT CABLE 10M", spec: "4K@60Hz, High Speed", type: "DISPLAY PORT 1.4 CABLE" },
    ],
  },
  "usb-cables": {
    heading: "USB CABLES",
    img: "/USBCables.jpg",
    products: [
      { title: "USB TYPE-A TO TYPE-B", spec: "USB 2.0, 1.5M", type: "USB CABLE" },
      { title: "USB TYPE-A TO MICRO USB", spec: "USB 2.0, 1M", type: "USB CABLE" },
      { title: "USB TYPE-A TO TYPE-C", spec: "USB 3.0, 1M", type: "USB CABLE" },
      { title: "USB TYPE-C TO TYPE-C", spec: "USB 3.1, 1M", type: "USB CABLE" },
      { title: "USB EXTENSION CABLE 3M", spec: "USB 2.0, Extension", type: "USB EXTENSION CABLE" },
      { title: "USB HUB CABLE", spec: "USB 3.0, 4 Port Hub", type: "USB HUB CABLE" },
    ],
  },
  "network-cables": {
    heading: "NETWORK CABLES",
    img: "/NetworkCables.jpg",
    products: [
      { title: "CAT5E NETWORK CABLE", spec: "100 Mbps, 305M Roll", type: "CAT5E CABLE" },
      { title: "CAT6 NETWORK CABLE", spec: "1 Gbps, 305M Roll", type: "CAT6 CABLE" },
      { title: "CAT6A NETWORK CABLE", spec: "10 Gbps, 305M Roll", type: "CAT6A CABLE" },
      { title: "CAT7 NETWORK CABLE", spec: "10 Gbps, Shielded", type: "CAT7 CABLE" },
      { title: "PATCH CORD CAT6 1M", spec: "1 Gbps, RJ45", type: "PATCH CORD" },
      { title: "PATCH CORD CAT6 3M", spec: "1 Gbps, RJ45", type: "PATCH CORD" },
    ],
  },
  "audio-cables": {
    heading: "AUDIO CABLES",
    img: "/AudioCables.jpg",
    products: [
      { title: "XLR MALE TO FEMALE 3M", spec: "Balanced Audio, Microphone Cable", type: "XLR CABLE" },
      { title: "XLR MALE TO FEMALE 6M", spec: "Balanced Audio, Microphone Cable", type: "XLR CABLE" },
      { title: "XLR TO TRS 3M", spec: "Balanced Audio, Studio Cable", type: "XLR TO TRS CABLE" },
      { title: "TRS 6.35MM CABLE 3M", spec: "Stereo, Instrument Cable", type: "TRS CABLE" },
      { title: "TS 6.35MM CABLE 3M", spec: "Mono, Instrument Cable", type: "TS CABLE" },
      { title: "RCA AUDIO CABLE 1.5M", spec: "Stereo, Red & White", type: "RCA CABLE" },
    ],
  },
  "vga-cables": {
    heading: "VGA CABLES",
    img: "/VGACables.jpg",
    products: [
      { title: "VGA CABLE 1.5M", spec: "1080p, Male to Male", type: "VGA CABLE" },
      { title: "VGA CABLE 3M", spec: "1080p, Male to Male", type: "VGA CABLE" },
      { title: "VGA CABLE 5M", spec: "1080p, Male to Male", type: "VGA CABLE" },
      { title: "VGA CABLE 10M", spec: "1080p, Male to Male", type: "VGA CABLE" },
    ],
  },
  "optical-cables": {
    heading: "OPTICAL CABLES",
    img: "/OpticalCables.jpg",
    products: [
      { title: "TOSLINK OPTICAL CABLE 1.5M", spec: "Digital Audio, S/PDIF", type: "OPTICAL CABLE" },
      { title: "TOSLINK OPTICAL CABLE 3M", spec: "Digital Audio, S/PDIF", type: "OPTICAL CABLE" },
      { title: "TOSLINK OPTICAL CABLE 5M", spec: "Digital Audio, S/PDIF", type: "OPTICAL CABLE" },
      { title: "TOSLINK OPTICAL CABLE 10M", spec: "Digital Audio, S/PDIF", type: "OPTICAL CABLE" },
    ],
  },
  "printer-cables": {
    heading: "PRINTER CABLES",
    img: "/PrinterCables.jpg",
    products: [
      { title: "USB PRINTER CABLE 1.5M", spec: "USB 2.0, Type-A to Type-B", type: "PRINTER CABLE" },
      { title: "USB PRINTER CABLE 3M", spec: "USB 2.0, Type-A to Type-B", type: "PRINTER CABLE" },
      { title: "USB PRINTER CABLE 5M", spec: "USB 2.0, Type-A to Type-B", type: "PRINTER CABLE" },
      { title: "PARALLEL PRINTER CABLE 1.5M", spec: "IEEE 1284, Centronics", type: "PARALLEL PRINTER CABLE" },
    ],
  },
  "aux-cables": {
    heading: "AUX CABLES",
    img: "/AuxCables.jpg",
    products: [
      { title: "AUX CABLE 1M", spec: "3.5mm Jack, Stereo", type: "AUX CABLE" },
      { title: "AUX CABLE 1.5M", spec: "3.5mm Jack, Stereo", type: "AUX CABLE" },
      { title: "AUX CABLE 3M", spec: "3.5mm Jack, Stereo", type: "AUX CABLE" },
      { title: "AUX CABLE 5M", spec: "3.5mm Jack, Stereo", type: "AUX CABLE" },
      { title: "AUX EXTENSION CABLE 3M", spec: "3.5mm Male to Female", type: "AUX EXTENSION CABLE" },
    ],
  },
  "coaxial-cables": {
    heading: "COAXIAL CABLES",
    img: "/CoaxialCables.jpg",
    products: [
      { title: "RG6 COAXIAL CABLE", spec: "75 Ohm, 305M Roll", type: "RG6 COAXIAL CABLE" },
      { title: "RG59 COAXIAL CABLE", spec: "75 Ohm, 305M Roll", type: "RG59 COAXIAL CABLE" },
      { title: "RG11 COAXIAL CABLE", spec: "75 Ohm, 305M Roll", type: "RG11 COAXIAL CABLE" },
      { title: "COAXIAL PATCH CABLE 1.5M", spec: "75 Ohm, F Male to F Male", type: "COAXIAL PATCH CABLE" },
      { title: "COAXIAL PATCH CABLE 3M", spec: "75 Ohm, F Male to F Male", type: "COAXIAL PATCH CABLE" },
    ],
  },
  "telephone-cables": {
    heading: "TELEPHONE CABLES",
    img: "/TelephoneCables.jpg",
    products: [
      { title: "TELEPHONE CABLE 2 PAIR", spec: "0.5mm, 305M Roll", type: "TELEPHONE CABLE" },
      { title: "TELEPHONE CABLE 4 PAIR", spec: "0.5mm, 305M Roll", type: "TELEPHONE CABLE" },
      { title: "TELEPHONE PATCH CORD 1.5M", spec: "RJ11, Flat Cable", type: "TELEPHONE PATCH CORD" },
      { title: "TELEPHONE PATCH CORD 3M", spec: "RJ11, Flat Cable", type: "TELEPHONE PATCH CORD" },
    ],
  },
  "speaker-cables": {
    heading: "SPEAKER CABLES",
    img: "/SpeakerCables.jpg",
    products: [
      { title: "SPEAKER CABLE 2 CORE", spec: "2x0.75mm², 100M Roll", type: "SPEAKER CABLE" },
      { title: "SPEAKER CABLE 2 CORE", spec: "2x1.5mm², 100M Roll", type: "SPEAKER CABLE" },
      { title: "SPEAKER CABLE 2 CORE", spec: "2x2.5mm², 100M Roll", type: "SPEAKER CABLE" },
      { title: "SPEAKER PATCH CABLE 1.5M", spec: "6.35mm Jack to Bare Wire", type: "SPEAKER PATCH CABLE" },
      { title: "SPEAKER PATCH CABLE 3M", spec: "6.35mm Jack to Bare Wire", type: "SPEAKER PATCH CABLE" },
    ],
  },
  "power-cables": {
    heading: "POWER CABLES",
    img: "/PowerCables.jpg",
    products: [
      { title: "IEC POWER CABLE 1.5M", spec: "C13 to UK Plug, 10A", type: "IEC POWER CABLE" },
      { title: "IEC POWER CABLE 3M", spec: "C13 to UK Plug, 10A", type: "IEC POWER CABLE" },
      { title: "IEC C19 POWER CABLE 1.5M", spec: "C19 to UK Plug, 16A", type: "IEC POWER CABLE" },
      { title: "EXTENSION POWER CABLE 3M", spec: "13A, 3 Way Socket", type: "EXTENSION POWER CABLE" },
      { title: "EXTENSION POWER CABLE 5M", spec: "13A, 4 Way Socket", type: "EXTENSION POWER CABLE" },
    ],
  },
  "av-cables": {
    heading: "AV CABLES",
    img: "/AVCables.jpg",
    products: [
      { title: "RCA AV CABLE 1.5M", spec: "Composite Video + Audio", type: "RCA AV CABLE" },
      { title: "RCA AV CABLE 3M", spec: "Composite Video + Audio", type: "RCA AV CABLE" },
      { title: "RCA AV CABLE 5M", spec: "Composite Video + Audio", type: "RCA AV CABLE" },
      { title: "COMPONENT AV CABLE 1.5M", spec: "YPbPr + Audio, HD Video", type: "COMPONENT AV CABLE" },
      { title: "COMPONENT AV CABLE 3M", spec: "YPbPr + Audio, HD Video", type: "COMPONENT AV CABLE" },
    ],
  },
  "fiber-patchcords": {
    heading: "FIBER PATCHCORDS",
    img: "/FIBERPATCHCORDS.jpg",
    products: [
      { title: "SC TO SC FIBER PATCHCORD 1M", spec: "Single Mode, 9/125µm", type: "FIBER PATCHCORD" },
      { title: "SC TO LC FIBER PATCHCORD 1M", spec: "Single Mode, 9/125µm", type: "FIBER PATCHCORD" },
      { title: "LC TO LC FIBER PATCHCORD 1M", spec: "Single Mode, 9/125µm", type: "FIBER PATCHCORD" },
      { title: "SC TO SC FIBER PATCHCORD 3M", spec: "Multimode, 50/125µm", type: "FIBER PATCHCORD" },
      { title: "LC TO LC FIBER PATCHCORD 3M", spec: "Multimode, 50/125µm", type: "FIBER PATCHCORD" },
      { title: "SC TO LC FIBER PATCHCORD 5M", spec: "Multimode, 50/125µm", type: "FIBER PATCHCORD" },
    ],
  },
};

export default function CableDetailPage() {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const data = cableData[slug];
  if (!data) return <Navigate to="/cables" replace />;

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
        <div className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-red-900">
          <div className="max-w-6xl mx-auto px-6 py-10 text-white">
            <div className="text-xs uppercase tracking-widest mb-2">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/products" className="hover:underline">Products Category</Link>
              <span className="mx-2">/</span>
              <Link to="/cables" className="hover:underline">Cables</Link>
              <span className="mx-2">/</span>
              <span>{data.heading}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">{data.heading}</h1>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.products.map((item, index) => (
              <div
                key={index}
                className="border border-red-500 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={data.img}
                  alt={item.title}
                  className="mx-auto h-44 object-contain mb-4"
                />
                <h3 className="font-bold text-sm mb-2 uppercase">{item.title}</h3>
                <p className="text-xs mb-1">{item.spec}</p>
                <p className="text-xs font-semibold text-red-600 mb-4">{item.type}</p>
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
        <EnquiryModal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
      )}
    </>
  );
}
