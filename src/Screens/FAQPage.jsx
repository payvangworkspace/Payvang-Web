import React from "react";    
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import FAQ from "../Components/FAQ";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

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