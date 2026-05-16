import React from "react";    
import Navbar from "../Components/Navbar";
import PageBanner from "../components/PageBanner";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function FAQPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Find answers about our services, development process, integrations, deployment and support."
        currentPage="FAQs"
      />
      <FAQ />
      <Footer />
    </>
  );
}

export default FAQPage;