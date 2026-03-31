import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "../../components/mainnavbar";
import EnquiryModal from "../../components/EnquiryModal";

const powerSupplyData = {
  "adapter": {
    heading: "ADAPTER",
    img: "/Adapter.jpg",
    products: [
      { title: "ADAPTER 5V 1A", spec: "5V, 1A, DC Output, UK Plug", type: "DC ADAPTER" },
      { title: "ADAPTER 5V 2A", spec: "5V, 2A, DC Output, UK Plug", type: "DC ADAPTER" },
      { title: "ADAPTER 9V 1A", spec: "9V, 1A, DC Output, UK Plug", type: "DC ADAPTER" },
      { title: "ADAPTER 12V 1A", spec: "12V, 1A, DC Output, UK Plug", type: "DC ADAPTER" },
      { title: "ADAPTER 12V 2A", spec: "12V, 2A, DC Output, UK Plug", type: "DC ADAPTER" },
      { title: "ADAPTER 12V 3A", spec: "12V, 3A, DC Output, UK Plug", type: "DC ADAPTER" },
      { title: "ADAPTER 12V 5A", spec: "12V, 5A, DC Output, UK Plug", type: "DC ADAPTER" },
      { title: "ADAPTER 24V 2A", spec: "24V, 2A, DC Output, UK Plug", type: "DC ADAPTER" },
    ],
  },
  "laptop-type": {
    heading: "LAPTOP TYPE",
    img: "/LaptopType.jpg",
    products: [
      { title: "LAPTOP ADAPTER 19V 3.42A", spec: "19V, 3.42A, 65W, Universal", type: "LAPTOP ADAPTER" },
      { title: "LAPTOP ADAPTER 19V 4.74A", spec: "19V, 4.74A, 90W, Universal", type: "LAPTOP ADAPTER" },
      { title: "LAPTOP ADAPTER 20V 3.25A", spec: "20V, 3.25A, 65W, Universal", type: "LAPTOP ADAPTER" },
      { title: "LAPTOP ADAPTER 20V 4.5A", spec: "20V, 4.5A, 90W, Universal", type: "LAPTOP ADAPTER" },
      { title: "UNIVERSAL LAPTOP ADAPTER 90W", spec: "Multi-Tip, 90W, Auto Voltage", type: "UNIVERSAL ADAPTER" },
      { title: "UNIVERSAL LAPTOP ADAPTER 120W", spec: "Multi-Tip, 120W, Auto Voltage", type: "UNIVERSAL ADAPTER" },
    ],
  },
  "smps": {
    heading: "SMPS",
    img: "/SMPS.jpg",
    products: [
      { title: "SMPS 5V 10A", spec: "5V, 10A, 50W, DIN Rail", type: "SWITCHING POWER SUPPLY" },
      { title: "SMPS 12V 5A", spec: "12V, 5A, 60W, DIN Rail", type: "SWITCHING POWER SUPPLY" },
      { title: "SMPS 12V 10A", spec: "12V, 10A, 120W, DIN Rail", type: "SWITCHING POWER SUPPLY" },
      { title: "SMPS 12V 20A", spec: "12V, 20A, 240W, DIN Rail", type: "SWITCHING POWER SUPPLY" },
      { title: "SMPS 24V 5A", spec: "24V, 5A, 120W, DIN Rail", type: "SWITCHING POWER SUPPLY" },
      { title: "SMPS 24V 10A", spec: "24V, 10A, 240W, DIN Rail", type: "SWITCHING POWER SUPPLY" },
      { title: "SMPS 48V 5A", spec: "48V, 5A, 240W, DIN Rail", type: "SWITCHING POWER SUPPLY" },
    ],
  },
  "mean-well": {
    heading: "MEAN WELL",
    img: "/MeanWell.jpg",
    products: [
      { title: "MEAN WELL LRS-50-12", spec: "12V, 4.2A, 50W, Slim", type: "MEAN WELL PSU" },
      { title: "MEAN WELL LRS-100-12", spec: "12V, 8.5A, 102W, Slim", type: "MEAN WELL PSU" },
      { title: "MEAN WELL LRS-200-12", spec: "12V, 16A, 192W, Slim", type: "MEAN WELL PSU" },
      { title: "MEAN WELL LRS-350-12", spec: "12V, 29A, 348W, Slim", type: "MEAN WELL PSU" },
      { title: "MEAN WELL LRS-50-24", spec: "24V, 2.2A, 52.8W, Slim", type: "MEAN WELL PSU" },
      { title: "MEAN WELL LRS-100-24", spec: "24V, 4.5A, 108W, Slim", type: "MEAN WELL PSU" },
      { title: "MEAN WELL LRS-200-24", spec: "24V, 8.8A, 211.2W, Slim", type: "MEAN WELL PSU" },
      { title: "MEAN WELL LRS-350-24", spec: "24V, 14.6A, 350.4W, Slim", type: "MEAN WELL PSU" },
    ],
  },
  "multi-adapter": {
    heading: "MULTI ADAPTER",
    img: "/MultiAdapter1.jpg",
    products: [
      { title: "MULTI ADAPTER 3V-12V 1A", spec: "3V/4.5V/5V/6V/7.5V/9V/12V, 1A", type: "MULTI VOLTAGE ADAPTER" },
      { title: "MULTI ADAPTER 3V-12V 2A", spec: "3V/4.5V/5V/6V/7.5V/9V/12V, 2A", type: "MULTI VOLTAGE ADAPTER" },
      { title: "MULTI ADAPTER 3V-12V 3A", spec: "3V/4.5V/5V/6V/7.5V/9V/12V, 3A", type: "MULTI VOLTAGE ADAPTER" },
      { title: "MULTI USB ADAPTER 5V 6A", spec: "5V, 6A, 6x USB Ports", type: "USB MULTI ADAPTER" },
      { title: "MULTI USB ADAPTER 5V 10A", spec: "5V, 10A, 10x USB Ports", type: "USB MULTI ADAPTER" },
    ],
  },
  "charging-station": {
    heading: "CHARGING STATION",
    img: "/Chargingstation.jpg",
    products: [
      { title: "CHARGING STATION 10 PORT USB", spec: "5V, 20A, 10x USB Ports, LED Indicator", type: "USB CHARGING STATION" },
      { title: "CHARGING STATION 20 PORT USB", spec: "5V, 40A, 20x USB Ports, LED Indicator", type: "USB CHARGING STATION" },
      { title: "CHARGING STATION 30 PORT USB", spec: "5V, 60A, 30x USB Ports, LED Indicator", type: "USB CHARGING STATION" },
      { title: "DESKTOP CHARGING STATION", spec: "5x USB + 2x Type-C, 65W Fast Charge", type: "DESKTOP CHARGING STATION" },
      { title: "WIRELESS CHARGING STATION", spec: "15W Fast Wireless, Multi Device", type: "WIRELESS CHARGING STATION" },
    ],
  },
};

export default function PowerSupplyDetailPage() {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const data = powerSupplyData[slug];
  if (!data) return <Navigate to="/power-supplies" replace />;

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
              <Link to="/power-supplies" className="hover:underline">Power Suppliers</Link>
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
