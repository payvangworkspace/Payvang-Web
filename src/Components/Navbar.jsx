import { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../assets/logos/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

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
          <NavLink to="/" end className="pv-logo" onClick={closeMenu}>
            <img src={logo} alt="Payvang Logo" />
          </NavLink>

          <ul className={`pv-menu ${mobileOpen ? "pv-menu-open" : ""}`}>
            <li>
              <NavLink to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/services" onClick={closeMenu}>
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/faq" onClick={closeMenu}>
                FAQs
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="pv-call">
            <span>CALL US:</span>
            <strong>+91 7303883194</strong>
          </div>

          <button
            className={`pv-hamburger ${mobileOpen ? "pv-hamburger-active" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;