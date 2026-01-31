

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHero from "./pages/mainlandingpage";
import LightingSolutions from "./pages/LightingSolutions/LightingSolutions";
import ResidentialLighting from "./pages/LightingSolutions/ResidentialLighting";
import ArchitecturalLighting from "./pages/LightingSolutions/ArchitecturalLighting";
import CommercialLighting from "./pages/LightingSolutions/CommercialLighting";
import OutdoorLighting from "./pages/LightingSolutions/OutdoorLighting";
import Lighting from "./pages/lighting";
import ProductPage from "./pages/Batteries/ProductPage";
import SoundProduct from "./pages/SoundSystems/ProductPage";
import ElectronicProducts from "./pages/MicroElectronics/ProductPage";
import SupportPage from "./pages/SupportPage";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHero />} />
        <Route path="/lighting" element={<Lighting />} />

        <Route path="/lighting-solutions" element={<LightingSolutions />} />
        <Route path="/residential-lighting" element={<ResidentialLighting />} />
        <Route path="/architectural-lighting" element={<ArchitecturalLighting />} />
        <Route path="/commercial-lighting" element={<CommercialLighting />} />
        <Route path="/outdoor-lighting" element={<OutdoorLighting />} />
        <Route path="/batteries" element={<ProductPage />} />
        <Route path="/sound" element={<SoundProduct />} />
        <Route path="/micro-electronics" element={<ElectronicProducts />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
