// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Interface from "./Interface";
import About from "./components/About";
import Clients from "./components/Clients";
import Vision from "./components/Vision";
import Contact from "./components/Contact";

import Header from "./Header";
import Footer from "./components/Footer";

import APM from "./components/apm.jsx";
import IndustrialIoT from "./components/IndustrialIoT.jsx";
import DeepTechEngineering from "./components/DeepTechEngineering.jsx";
import TestingTools from "./components/TestingTools.jsx";
import CyberSecurity from "./components/CyberSecurity.jsx";
import DigitalTwin from "./components/DigitalTwin.jsx";
import ScrollToTop from "./ScrollToTop";   // import it

function App() {
  return (
    <Router>
      <ScrollToTop />        {/* put it inside Router, above Routes */}
      <Header />

      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/service-asset-monitoring" element={<APM />} />
        <Route path="/service-industrial-iot" element={<IndustrialIoT />} />
        <Route path="/service-deeptech" element={<DeepTechEngineering />} />
        <Route path="/service-testing-tools" element={<TestingTools />} />
        <Route path="/service-cyber-security" element={<CyberSecurity />} />
        <Route path="/service-digital-twin" element={<DigitalTwin />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
