import Hero from "../components/LightingSolutions/Hero";
import ATAStorySection from "../components/LightingSolutions/ATAStorySection";
import BrandsCards from "../components/LightingSolutions/BrandsCards";
import ExpertiseSection from "../components/LightingSolutions/ExpertiseSection";
import IlluminateTextSection from "../components/LightingSolutions/IlluminateTextSection";
import LightBeamSection from "../components/LightingSolutions/LightBeamSection";
import ServicesSection from "../components/LightingSolutions/ServicesSection";
import Since2016Section from "../components/LightingSolutions/Since2016Section";
import Footer from "../components/LightingSolutions/Footer";
import BackgroundEffects from "../components/LightingSolutions/BackgroundEffects";

// const sectionSpacing = "py-16 sm:py-18 lg:py-22";
const sectionSpacing = "py-[48px] sm:py-[64px] lg:py-[80px]";


const Lighting = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">

      {/* GLOBAL BACKGROUND EFFECTS */}
      <BackgroundEffects />

      {/* CONTENT */}
      <div className="relative z-10">
        
        {/* Hero */}
        <section className="pb-10 sm:pb-16">
          <Hero />
        </section>

        <section className={sectionSpacing}>
          <ExpertiseSection />
        </section>

        <section className={sectionSpacing}>
          <IlluminateTextSection />
        </section>

        <section className={sectionSpacing}>
          <ServicesSection />
        </section>

        <section className={sectionSpacing}>
          <LightBeamSection />
        </section>

        <section className={sectionSpacing}>
          <Since2016Section />
        </section>

        <section className={sectionSpacing}>
          <ATAStorySection />
        </section>

        <section className="pt-16 sm:pt-20 lg:pt-24 pb-10">
          <BrandsCards />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Lighting;
