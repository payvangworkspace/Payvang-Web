
import PageBanner from "../components/PageBanner";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
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