import React from "react";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Contact Us"
        subtitle="Share your requirement with Payvang and let’s discuss how we can build the right solution for your business."
        currentPage="Contact"
      />
      <Contact />

      <Footer />
    </>
  );
}

export default ContactPage;