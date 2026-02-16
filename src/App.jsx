

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHero from "./pages/mainlandingpage";
import LightingSolutions from "./pages/LightingSolutions/LightingSolutions";
import ResidentialLighting from "./pages/LightingSolutions/ResidentialLighting";
import ArchitecturalLighting from "./pages/LightingSolutions/ArchitecturalLighting";
import CommercialLighting from "./pages/LightingSolutions/CommercialLighting";
import OutdoorLighting from "./pages/LightingSolutions/OutdoorLighting";
import Lighting from "./pages/lighting";
import ProductsCategories from "./pages/ProductsCategories";
import ProductPage from "./pages/Batteries/ProductPage";
import SoundProduct from "./pages/SoundSystems/ProductPage";
import ElectronicProducts from "./pages/MicroElectronics/ProductPage";
import InverterPage from "./pages/Inverter/ProductPage";
import TVStandMountPage from "./pages/TVStandMount/ProductPage";
import VoltageStabilizerPage from "./pages/VoltageStabilizer/ProductPage";
import CablesPage from "./pages/Cables/ProductPage";
import SpeakerPage from "./pages/Speaker/ProductPage";
import ConnectorsPage from "./pages/Connectors/ProductPage";
import PowerSuppliersPage from "./pages/PowerSuppliers/ProductPage";
import RemotePage from "./pages/Remote/ProductPage";
import SchoolProjectPage from "./pages/SchoolProject/ProductPage";
import MicrophonePage from "./pages/Microphone/ProductPage";
import MicSpeakerStandPage from "./pages/MicSpeakerStandPage/ProductPage";
import ToolsPage from "./pages/Tools/ProductPage";
import SolderingToolsPage from "./pages/SolderingTools/ProductPage";
import SupportPage from "./pages/SupportPage";
import RelaysPage from "./pages/Relays/ProductPage";
import LeadAcidBatteryPage from "./pages/Batteries/LeadAcidBatteryPage";
import AboutPage from "./pages/AboutPage";
import LithiumIonBatteryPage from "./pages/Batteries/LithiumIonBatteryPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHero />} />
        <Route path="/lighting" element={<Lighting />} />
        <Route path="/products" element={<ProductsCategories />} />

        <Route path="/lighting-solutions" element={<LightingSolutions />} />
        <Route path="/residential-lighting" element={<ResidentialLighting />} />
        <Route path="/architectural-lighting" element={<ArchitecturalLighting />} />
        <Route path="/commercial-lighting" element={<CommercialLighting />} />
        <Route path="/outdoor-lighting" element={<OutdoorLighting />} />
        <Route path="/batteries" element={<ProductPage />} />
        <Route path="/inverter" element={<InverterPage />} />
        <Route path="/voltage-stabilizer" element={<VoltageStabilizerPage />} />
        <Route path="/cables" element={<CablesPage />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        <Route path="/sound" element={<SoundProduct />} />
        <Route path="/micro-electronics" element={<ElectronicProducts />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/tv-stand-mount" element={<TVStandMountPage />} />
        <Route path="/connectors" element={<ConnectorsPage />} />
        <Route path="/power-supplies" element={<PowerSuppliersPage />} />
        <Route path="/remote" element={<RemotePage />} />
        <Route path="/school-projects" element={<SchoolProjectPage />} />
        <Route path="/microphone" element={<MicrophonePage />} />
        <Route
          path="/mic-speaker-stand"
          element={<MicSpeakerStandPage />}
        />
        <Route path="/relays" element={<RelaysPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/soldering-tools" element={<SolderingToolsPage />} />
        
        <Route path="/battery/lead-acid-battery" element={<LeadAcidBatteryPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/battery/lithium-ion-battery" element={<LithiumIonBatteryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
