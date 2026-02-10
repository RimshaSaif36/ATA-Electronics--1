import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/mainnavbar";

const categories = [
  {
    title: "Batteries",
    image: "/batteries.jpg",
    to: "/batteries",
  },
  {
    title: "Inverter",
    image: "/inverter.jpg",
    to: "/inverter",
  },
  {
    title: "Voltage Converters",
    image: "/VoltageConverters.jpg",
    to: "/voltage-converters",
  },
  {
    title: "Voltage Stabilizer",
    image: "/VoltageStabilizer.jpg",
    to: "/voltage-stabilizer",
  },
  {
    title: "TV Stand & Mount",
    image: "/TVStand&Mount.jpg",
    to: "/tv-stand-mount",
  },
  {
    title: "Monitor Stand & Mount",
    image: "/MonitorStand.jpg",
    to: "/monitor-stand-mount",
  },
  {
    title: "Projector Mount",
    image: "/projector.jpg",
    to: "/projector",
  },
   {
    title: "Tablet Stand",
    image: "/tabletstand.jpg",
    to: "/tablet-stand",
  },
   {
    title: "Cables",
    image: "/Cables.jpg",
    to: "/tablet-stand",
  },
    
   {
    title: "Cable Converters",
    image: "/cable.jpg",
    to: "/tablet-stand",
  },
   {
    title: "Audio-Video Converters",
    image: "/Audiovideoconverters.jpg",
    to: "/tablet-stand",
  },
   {
    title: "Splitter",
    image: "/Splitter.jpg",
    to: "/Splitter",
  },
   {
    title: "Extender",
    image: "/extender.jpg",
    to: "/extender",
  },
   {
    title: "SELECTOR SWITCH",
    image: "/SELECTORSWITCH.jpg",
    to: "/selector-switch",
  },
  {
    title: "Connectors",
    image: "/Connectors.jpg",
    to: "/connectors",
  },
   
   {
    title: "Power Supplies",
    image: "/PowerSupplies.jpg",
    to: "/power-supplies",
  },
  
   {
    title: "Multi Adapter",
    image: "/MultiAdapter.jpg",
    to: "/multi-adapter",
  },
   {
    title: "Power Extension",
    image: "/PowerExtension.jpg",
    to: "/power-extension",
  },
  {
    title: "DESKTOP SOCKETS",
    image: "/DESKTOPSOCKETS.jpg",
    to: "/desktop-sockets",
  },
   {
    title: "Remote",
    image: "/Remote.jpg",
    to: "/remote",
  },
  {
    title: "Cooling Fan",
    image: "/CoolingFan.jpg",
    to: "/cooling-fan",
  },
    {
    title: "Electronics Components",
    image: "/ElectronicsComponents.jpg",
    to: "/electronics-components",
  },
   {
    title: "School Projects",
    image: "/SchoolProjects.jpg",
    to: "/school-projects",
  },
  
   {
    title: "Arduino Kit",
    image: "/ArduinoKit.jpg",
    to: "/arduino-kit",
  },
  {
    title: "Amplifier & Mixers",
    image: "/AmplifierMixers.jpg",
    to: "/amplifier-mixers",
  },
  {
    title: "Speaker",
    image: "/Speaker.jpg",
    to: "/speaker",
  },
  {
    title: "VOLUME CONTROLLERS",
    image: "/VOLUMECONTROLLERS.jpg.jpg",
    to: "/volume-controllers",
  },
   {
    title: "Microphone",
    image: "/Microphone.jpg",
    to: "/microphone",
  },
   {
    title: "Mic & Speaker Stand",
    image: "/MicSpeakerStand.jpg",
    to: "/mic-speaker-stand",
  },
   {
    title: "Faceplate",
    image: "/Faceplate.jpg",
    to: "/faceplate",
  },
  {
    title: "Tracer & Tester",
    image: "/TracerTester.jpg",
    to: "/Tracer & Tester",
  },
  {
    title: "MultiMeter",
    image: "/MultiMeter.jpg",
    to: "/multi-meter",
  },
   {
    title: "Clamp Meter",
    image: "/ClampMeter.jpg",
    to: "/clamp-meter",
  },
  {
    title: "Instruments",
    image: "/Instruments.jpg",
    to: "/instruments",
  },
    {
    title: "Tools",
    image: "/Tools.jpg",
    to: "/tools",
  },
  {
    title: "Soldering Tools",
    image: "/SolderingTools.jpg",
    to: "/Soldering Tools",
  },
  {
    title: "Thermometer & Hygromet",
    image: "/ThermometerHygromet.jpg",
    to: "/thermometer-hygromet",
  },
  {
    title: "Media Devices",
    image: "/MediaDevices.jpg",
    to: "/media-devices",
  },
  {
    title: "Computer Accessories",
    image: "/ComputerAccessories.jpg",
    to: "/computer-accessories",
  },
  {
    title: "Network Products",
    image: "/NetworkProducts.jpg",
    to: "/network-products",
  },
  {
    title: "Relays",
    image: "/Relays.jpg",
    to: "/relays",
  },
];

export default function ProductsCategories() {
  return (
    <>
      <Header />

      <section className="bg-white">
        <div className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-red-900">
          <div className="max-w-6xl mx-auto px-6 py-10 text-white">
            <div className="text-xs uppercase tracking-widest mb-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Products Category</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">Our Products</h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item) => (
              <div key={item.title} className="border border-red-500 p-6 text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto h-36 object-contain mb-4"
                />
                <h3 className="text-xs font-semibold tracking-wide mb-4 uppercase">
                  {item.title}
                </h3>
                <Link
                  to={item.to}
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
