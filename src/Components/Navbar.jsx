import "../Styles/Navbar.css";
import logo from "../assets/logos/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="pv-header">
      <div className="pv-topbar">
        <div className="pv-container pv-topbar-content">
          <div className="pv-top-left">
            <span>📍 2/121, Main New Rohtak Road Karol Bagh, New Delhi-110005</span>
          </div>

          <div className="pv-top-right">
            <span>✉️ info@payvang.com</span>
            <span>📞 +91 7303883194 / +91 7303883192</span>

            <div className="pv-social">
              <a href="/">f</a>
              <a href="/">x</a>
              <a href="/">in</a>
            </div>
          </div>
        </div>
      </div>

      <nav className="pv-navbar">
        <div className="pv-container pv-nav-content">
          <NavLink to="/" end className="pv-logo">
            <img src={logo} alt="Payvang Logo" />
          </NavLink>

          <ul className="pv-menu">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            <li>
              <NavLink to="/services">Services</NavLink>
            </li>

            <li>
              <NavLink to="/faq">FAQs</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          <div className="pv-call">
            <span>CALL US:</span>
            <strong>+91 7303883194</strong>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;