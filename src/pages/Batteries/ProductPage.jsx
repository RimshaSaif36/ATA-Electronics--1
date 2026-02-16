import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/mainnavbar";

const products = [
  { title: "Lithium Ion Battery", img: "/lithiumionbattery.jpg" },
  { title: "Lead Acid Battery", img: "/LeadAcidBattery.jpg" },
  { title: "Rechargeable Battery", img: "/RechargeableBattery.jpg" },
  { title: "Lithium Battery", img: "/LithiumBattery.jpg" },
  { title: "Alkaline Battery", img: "/AlkalineBattery.jpg" },
  { title: "Battery Pack", img: "/BatteryPack.jpg" },
  { title: "Special Battery", img: "/SpecialBattery.jpg" },
  { title: "Li-Po Battery", img: "/LiPoBattery.jpg" },
  { title: "Cordless Phone Battery", img: "/CordlessPhoneBattery.jpg" },
  { title: "Coin & Button Battery", img: "/CoinButtonBattery.jpg" },
  { title: "Lead-Acid Battery Charger", img: "/LeadAcidBatteryCharger.jpg" },
  { title: "Battery Charger", img: "/BATTERYCHARGER.jpg" },
  { title: "Battery Materials", img: "/BatteryMaterials.jpg" },
];

export default function BatteriesPage() {
  return (
    <>
      <Header />

      {/* Header Section */}
      <section className="bg-white">
        <div className="bg-gradient-to-r from-red-800 via-red-700 to-red-900">
          <div className="max-w-6xl mx-auto px-6 py-10 text-white">

            <div className="text-xs uppercase tracking-widest mb-2">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/products" className="hover:underline">Products Category</Link>
              <span className="mx-2">/</span>
              <span>Batteries</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold">
              BATTERIES
            </h1>

          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((item, index) => (
              <div key={index} className="border border-red-500 p-6 text-center">

                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto h-36 object-contain mb-4"
                />

                <h3 className="text-xs font-semibold tracking-wide mb-4 uppercase">
                  {item.title}
                </h3>

                {/* View More → Product Page */}
                <Link
                  to={`/battery/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="inline-flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-semibold px-5 py-2 hover:bg-red-700 transition"
                >
                  View More
                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}
