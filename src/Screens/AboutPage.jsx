
import PageBanner from "../components/PageBanner";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../Components/Navbar";

function AboutPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="About Payvang"
        subtitle="We build reliable digital products, business platforms and technology solutions that help companies grow with confidence."
        currentPage="About"
      />
      <About />
      <WhyChoose />
      <Footer />
    </>
  );
}

export default AboutPage;