import "../Styles/About.css";
import { Link } from "react-router-dom";  
function About() {
  return (
    <section className="about-payvang" id="about">
      <div className="about-bg-blur"></div>

      <div className="about-wrapper">
        <div className="about-content">
          <span className="about-label">About Payvang</span>

          <h2>
            We Build Digital Products That Help Businesses Move Faster
          </h2>

          <p className="about-main-text">
            Payvang is a technology company helping businesses create secure,
            scalable and easy-to-use digital platforms. We work with companies
            that need strong software, smooth integrations and reliable systems
            to manage their operations better.
          </p>

          <p>
            Our focus is on building practical solutions — from business
            dashboards and customer portals to API-based systems, automation
            tools and cloud-ready applications.
          </p>

          <div className="about-points">
            <div>
              <span></span>
              Custom software for business needs
            </div>
            <div>
              <span></span>
              Secure architecture and clean development
            </div>
            <div>
              <span></span>
              Scalable platforms ready for future growth
            </div>
          </div>

          <Link to="/services" className="about-action">
            Explore What We Do
          </Link>
        </div>

        <div className="about-visual">
          <div className="about-orbit-card card-top">
            <strong>API</strong>
            <span>Connected Systems</span>
          </div>

          <div className="about-main-card">
            <div className="card-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h3>Business Technology Stack</h3>

            <div className="tech-row">
              <p>Enterprise Software</p>
              <b>92%</b>
            </div>
            <div className="progress">
              <span style={{ width: "92%" }}></span>
            </div>

            <div className="tech-row">
              <p>Secure Integrations</p>
              <b>88%</b>
            </div>
            <div className="progress">
              <span style={{ width: "88%" }}></span>
            </div>

            <div className="tech-row">
              <p>Cloud Ready Systems</p>
              <b>95%</b>
            </div>
            <div className="progress">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>

          <div className="about-orbit-card card-bottom">
            <strong>24/7</strong>
            <span>Reliable Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;