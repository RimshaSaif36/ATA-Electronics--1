

import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import LightBeamSection from "./components/LightBeamSection";
import ATAStorySection from "./components/ATAStorySection";
import SinceSection from "./components/Since2016Section";
import ExpertiseSection from "./components/ExpertiseSection";
import IlluminateTextSection from "./components/IlluminateTextSection";
// import ATAHubSection from "./components/ATAHubSection";
import Footer from "./components/Footer";
import BrandsCards from "./components/BrandsCards";
function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 20px)",
          }}
        />
        <div className="absolute left-[15%] top-[20%] w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[160px]" />
        <div className="absolute right-[10%] bottom-[10%] w-[500px] h-[500px] bg-[#d4af37]/8 rounded-full blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#d4af37] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#d4af37]/60 to-transparent" />
      </div>
      <div className="relative z-10">
        <Hero />
        <ServicesSection />
        <LightBeamSection />
        <ATAStorySection />
        <ExpertiseSection />
        <IlluminateTextSection />
        <SinceSection />
        <BrandsCards />
        {/* <ATAHubSection /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
