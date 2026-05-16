
import PageBanner from "../Components/PageBanner";
import Services from "../Components/Services";
import WhyChoose from "../Components/WhyChoose";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Our Services"
        subtitle="Explore our software development, API integration, cloud support and business technology services."
        currentPage="Services"
      />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default ServicesPage;