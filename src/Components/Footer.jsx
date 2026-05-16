import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import logo from "../assets/logos/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg footer-bg-one"></div>
      <div className="footer-bg footer-bg-two"></div>

      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img
              src={logo}
              alt="Payvang Logo"
              className="footer-logo"
            />
          </div>

          <p>
            Building secure digital platforms, scalable business systems and
            reliable technology solutions for modern businesses.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h3>Services</h3>

          <Link to="/services/digital-product-development">
            Digital Product Development
          </Link>

          <Link to="/services/enterprise-software-solutions">
            Enterprise Software
          </Link>

          <Link to="/services/api-system-integration">
            API Integration
          </Link>

          <Link to="/services/cloud-infrastructure">
            Cloud & Infrastructure
          </Link>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h3>Get in Touch</h3>

          <p>info@payvang.com</p>

          <p>+91 7303883194</p>

          <p>New Delhi, India</p>

          <Link to="/contact" className="footer-btn">
            Contact Us
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Payvang. All rights reserved.</p>

        <div>
          <Link to="/about">About</Link>
          <Link to="/contact">Support</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;