import React from 'react'
import Navbar from '../Components/Navbar';
// import "../Styles/Home.css";
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Services';
import WhyChoose from '../Components/WhyChoose';
import FAQ from '../Components/FAQ';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
  return (
  <>
  <Navbar/>  
  <Hero/>
  <About/>
  <Services/>
  <WhyChoose/>
  <FAQ/>
  <Contact/>
  <Footer/>
  </>
  )
}

export default Home
