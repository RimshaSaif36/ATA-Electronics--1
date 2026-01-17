import Hero from "../components/LightingSolutions/Hero";
import ATAStorySection from "../components/LightingSolutions/ATAStorySection";
import BrandsCards from "../components/LightingSolutions/BrandsCards";
import ExpertiseSection from "../components/LightingSolutions/ExpertiseSection";
import IlluminateTextSection from "../components/LightingSolutions/IlluminateTextSection";
// import LightBeamSection from "../components/LightingSolutions/LightBeamSection";

import TestimonialSliderSection from "../components/LightingSolutions/TestimonialSliderSection";
import ServicesSection from "../components/LightingSolutions/ServicesSection";
import Since2016Section from "../components/LightingSolutions/Since2016Section";
import Footer from "../components/LightingSolutions/Footer";
import BackgroundEffects from "../components/LightingSolutions/BackgroundEffects";

// const sectionSpacing = "py-16 sm:py-18 lg:py-22";
const sectionSpacing = "py-[16px] sm:py-[22px] lg:py-[28px]";

const Lighting = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* GLOBAL THEME WASH */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(212,175,55,0.12),transparent_70%)]" />
      {/* GLOBAL BACKGROUND EFFECTS */}
      <BackgroundEffects />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="pb-3 sm:pb-4">
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
          <Since2016Section />
        </section>

        <section className={sectionSpacing}>
          <ATAStorySection />
        </section>
       

        <section className="pt-4 sm:pt-5 lg:pt-6 pb-3">
          <BrandsCards />
        </section>
        <section className={sectionSpacing}>
          {/* <LightBeamSection /> */}
          <TestimonialSliderSection />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Lighting;