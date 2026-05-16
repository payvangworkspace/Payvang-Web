import React from "react";
import Navbar from "../Components/Navbar";
import PageBanner from "../components/PageBanner";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

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