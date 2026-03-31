import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const connectorData = {
  "xlr-connectors": {
    heading: "XLR CONNECTORS",
    img: "/XLRConnectors.jpg",
    products: [
      { title: "XLR 3 PIN MALE CONNECTOR", spec: "3 Pin, Male, Zinc Alloy Body", type: "XLR MALE CONNECTOR" },
      { title: "XLR 3 PIN FEMALE CONNECTOR", spec: "3 Pin, Female, Zinc Alloy Body", type: "XLR FEMALE CONNECTOR" },
      { title: "XLR 4 PIN MALE CONNECTOR", spec: "4 Pin, Male, Metal Body", type: "XLR MALE CONNECTOR" },
      { title: "XLR 4 PIN FEMALE CONNECTOR", spec: "4 Pin, Female, Metal Body", type: "XLR FEMALE CONNECTOR" },
      { title: "XLR 5 PIN MALE CONNECTOR", spec: "5 Pin, Male, Metal Body", type: "XLR MALE CONNECTOR" },
      { title: "XLR 5 PIN FEMALE CONNECTOR", spec: "5 Pin, Female, Metal Body", type: "XLR FEMALE CONNECTOR" },
    ],
  },
  "microphone-jack": {
    heading: "MICROPHONE JACK",
    img: "/MicrophoneJack.jpg",
    products: [
      { title: "6.35MM MONO JACK MALE", spec: "6.35mm, Mono, Male", type: "MONO JACK" },
      { title: "6.35MM STEREO JACK MALE", spec: "6.35mm, Stereo, Male", type: "STEREO JACK" },
      { title: "3.5MM MONO JACK MALE", spec: "3.5mm, Mono, Male", type: "MONO JACK" },
      { title: "3.5MM STEREO JACK MALE", spec: "3.5mm, Stereo, Male", type: "STEREO JACK" },
      { title: "6.35MM PANEL MOUNT SOCKET", spec: "6.35mm, Stereo, Panel Mount", type: "PANEL MOUNT SOCKET" },
      { title: "3.5MM PANEL MOUNT SOCKET", spec: "3.5mm, Stereo, Panel Mount", type: "PANEL MOUNT SOCKET" },
    ],
  },
  "powercon": {
    heading: "POWERCON",
    img: "/POWERCON.jpg",
    products: [
      { title: "POWERCON 20A BLUE MALE", spec: "20A, 250V, Blue, In Power", type: "POWERCON MALE" },
      { title: "POWERCON 20A GREY FEMALE", spec: "20A, 250V, Grey, Out Power", type: "POWERCON FEMALE" },
      { title: "POWERCON 32A BLUE MALE", spec: "32A, 250V, Blue, In Power", type: "POWERCON MALE" },
      { title: "POWERCON TRUE1 MALE", spec: "20A, 250V, IP65 Rated", type: "POWERCON TRUE1" },
      { title: "POWERCON TRUE1 FEMALE", spec: "20A, 250V, IP65 Rated", type: "POWERCON TRUE1" },
    ],
  },
  "terminal-block": {
    heading: "TERMINAL BLOCK",
    img: "/TerminalBlock.jpg",
    products: [
      { title: "TERMINAL BLOCK 2 PIN", spec: "5.08mm Pitch, 2 Pin", type: "PCB TERMINAL BLOCK" },
      { title: "TERMINAL BLOCK 3 PIN", spec: "5.08mm Pitch, 3 Pin", type: "PCB TERMINAL BLOCK" },
      { title: "TERMINAL BLOCK 4 PIN", spec: "5.08mm Pitch, 4 Pin", type: "PCB TERMINAL BLOCK" },
      { title: "TERMINAL BLOCK 6 PIN", spec: "5.08mm Pitch, 6 Pin", type: "PCB TERMINAL BLOCK" },
      { title: "DIN RAIL TERMINAL BLOCK", spec: "35mm DIN Rail, 10A", type: "DIN RAIL TERMINAL BLOCK" },
      { title: "BARRIER TERMINAL BLOCK", spec: "10mm Pitch, 15A", type: "BARRIER TERMINAL BLOCK" },
    ],
  },
  "network-connectors": {
    heading: "NETWORK CONNECTORS",
    img: "/NetworkConnectors.jpg",
    products: [
      { title: "RJ45 CAT5E CONNECTOR", spec: "8P8C, Pass Through, CAT5E", type: "RJ45 CONNECTOR" },
      { title: "RJ45 CAT6 CONNECTOR", spec: "8P8C, Pass Through, CAT6", type: "RJ45 CONNECTOR" },
      { title: "RJ45 COUPLER FEMALE", spec: "8P8C, Female to Female", type: "RJ45 COUPLER" },
      { title: "RJ45 KEYSTONE JACK CAT6", spec: "180° Keystone, CAT6", type: "KEYSTONE JACK" },
      { title: "RJ11 TELEPHONE CONNECTOR", spec: "6P4C, Telephone", type: "RJ11 CONNECTOR" },
      { title: "SFP MODULE", spec: "1.25 Gbps, Single Mode", type: "SFP MODULE" },
    ],
  },
  "f-connectors": {
    heading: "F CONNECTORS",
    img: "/FConnectors.jpg",
    products: [
      { title: "F CONNECTOR CRIMP RG6", spec: "For RG6 Cable, Crimp Type", type: "F CONNECTOR" },
      { title: "F CONNECTOR CRIMP RG59", spec: "For RG59 Cable, Crimp Type", type: "F CONNECTOR" },
      { title: "F CONNECTOR COMPRESSION RG6", spec: "For RG6 Cable, Compression Type", type: "F CONNECTOR" },
      { title: "F COUPLER FEMALE TO FEMALE", spec: "Female to Female, Barrel", type: "F COUPLER" },
      { title: "F TO RCA ADAPTER", spec: "F Female to RCA Male", type: "F ADAPTER" },
      { title: "F TO BNC ADAPTER", spec: "F Female to BNC Male", type: "F ADAPTER" },
    ],
  },
  "telephone-connectors": {
    heading: "TELEPHONE CONNECTORS",
    img: "/TelephoneConnectors.jpg",
    products: [
      { title: "RJ11 6P2C CONNECTOR", spec: "6P2C, Telephone Line", type: "RJ11 CONNECTOR" },
      { title: "RJ11 6P4C CONNECTOR", spec: "6P4C, Telephone Line", type: "RJ11 CONNECTOR" },
      { title: "RJ11 COUPLER", spec: "Female to Female, Inline", type: "RJ11 COUPLER" },
      { title: "RJ11 KEYSTONE JACK", spec: "Keystone, Wall Plate", type: "KEYSTONE JACK" },
      { title: "TELEPHONE WALL SOCKET", spec: "Dual Port, IDC Termination", type: "TELEPHONE SOCKET" },
    ],
  },
  "iec-connectors": {
    heading: "IEC CONNECTORS",
    img: "/IECConnectors.jpg",
    products: [
      { title: "IEC C13 FEMALE CONNECTOR", spec: "10A, 250V, 3 Pin", type: "IEC C13 CONNECTOR" },
      { title: "IEC C14 MALE CONNECTOR", spec: "10A, 250V, 3 Pin, Panel Mount", type: "IEC C14 CONNECTOR" },
      { title: "IEC C19 FEMALE CONNECTOR", spec: "16A, 250V, 3 Pin", type: "IEC C19 CONNECTOR" },
      { title: "IEC C20 MALE CONNECTOR", spec: "16A, 250V, 3 Pin, Panel Mount", type: "IEC C20 CONNECTOR" },
      { title: "IEC C7 FIGURE 8 CONNECTOR", spec: "2.5A, 250V, 2 Pin", type: "IEC C7 CONNECTOR" },
      { title: "IEC C5 CLOVER CONNECTOR", spec: "2.5A, 250V, 3 Pin", type: "IEC C5 CONNECTOR" },
    ],
  },
};

export default function ConnectorDetailPage() {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const data = connectorData[slug];
  if (!data) return <Navigate to="/connectors" replace />;

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
              <Link to="/connectors" className="hover:underline">Connectors</Link>
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
