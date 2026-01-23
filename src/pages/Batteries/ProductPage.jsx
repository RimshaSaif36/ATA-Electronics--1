import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    title: "LECXO LX2.8-6 VIETNAM",
    size: "65×32×97MM (L×W×H)",
    battery: "6V 2.8AH LEAD ACID BATTERY",
    img: "/b1.jpg",
  },
  {
    title: "LECXO LX3.4-6 VIETNAM",
    size: "134×33×59MM (L×W×H)",
    battery: "6V 3.4AH LEAD ACID BATTERY",
    img: "/b2.jpg",
  },
  {
    title: "LECXO LX4.5-6 VIETNAM",
    size: "70×47×101MM (L×W×H)",
    battery: "6V 4.5AH LEAD ACID BATTERY",
    img: "/b3.jpg",
  },
  {
    title: "LECXO LX7-6 VIETNAM",
    size: "151×34×94MM (L×W×H)",
    battery: "6V 7AH LEAD ACID BATTERY",
    img: "/b4.jpg",
  },
  {
    title: "LECXO LX12-6 VIETNAM",
    size: "151×50×94MM (L×W×H)",
    battery: "6V 12AH LEAD ACID BATTERY",
    img: "/b5.jpg",
  },
  {
    title: "LECXO LX0.8-12 VIETNAM",
    size: "96×25×62MM (L×W×H)",
    battery: "12V 0.8AH LEAD ACID BATTERY",
    img: "/b6.jpg",
  },
];

export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ title, size, battery, img }) {
  return (
    <div className="border border-red-500 p-6 text-center relative">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="mx-auto h-44 object-contain mb-4"
      />

      {/* Copyright */}
      <p className="text-[10px] text-gray-400 mb-3">
        Copyright © Square Electronics & Trading
      </p>

      {/* Title */}
      <h3 className="font-bold text-sm mb-2">{title}</h3>

      {/* Size */}
      <p className="text-xs mb-1">
        <span className="font-semibold">SIZE :</span> {size}
      </p>

      {/* Battery */}
      <p className="text-xs font-semibold text-red-600 mb-4">
        {battery}
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-3">
        <button className="bg-red-600 text-white text-xs px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition">
          ENQUIRY
        </button>

        <a
          href="#"
          className="bg-green-500 text-white p-2 rounded"
        >
          <FaWhatsapp size={16} />
        </a>
      </div>
    </div>
  );
}
