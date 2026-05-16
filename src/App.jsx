import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";

import ServiceDetail from "./Components/ServiceDetail";
import Home from "./Screens/Home";
import AboutPage from "./Screens/AboutPage";
import ServicesPage from "./Screens/ServicesPage";
import FAQPage from "./Screens/FAQPage";
import ContactPage from "./Screens/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;