
import PageBanner from "../Components/PageBanner";
import About from "../Components/About";
import WhyChoose from "../Components/WhyChoose";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function AboutPage() {
  document.title = "About Payvang - Payvang";



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