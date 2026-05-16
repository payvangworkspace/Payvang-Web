import { Link } from "react-router-dom";
import "../Styles/Hero.css";
import heroImg from "../assets/home/fintech-hero.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">FINTECH & ENTERPRISE SOLUTIONS</span>

          <h1>Secure FinTech Solutions for Growing Digital Businesses</h1>

          <p>
            Payvang builds scalable fintech platforms, enterprise software,
            payment technology, API integrations, and secure digital finance
            solutions for modern businesses.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="hero-btn primary-btn">
              Explore Services
            </Link>
            <Link to="/contact" className="hero-btn secondary-btn">
              Talk to Expert
            </Link>
          </div>
        </div>

        <div className="hero-image-box">
          <img src={heroImg} alt="Payvang fintech solutions" />
        </div>
      </div>
    </section>
  );
}

export default Hero;