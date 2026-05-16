import "../Styles/Services.css";
import {
  FiCode,
  FiLayers,
  FiLink,
  FiCloud,
  FiSmartphone,
  FiShield,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const services = [
  {
    slug: "digital-product-development",
    icon: <FiCode />,
    title: "Digital Product Development",
    desc: "Custom web platforms, business portals, dashboards and internal tools designed to solve real business problems.",
    points: ["Business portals", "Admin dashboards", "Customer platforms"],
  },
  {
    slug: "enterprise-software-solutions",
    icon: <FiLayers />,
    title: "Enterprise Software Solutions",
    desc: "CRM, ERP, workflow systems and reporting tools that help teams manage operations with better control.",
    points: ["CRM & ERP", "Workflow automation", "Reports & analytics"],
  },
  {
    slug: "api-system-integration",
    icon: <FiLink />,
    title: "API & System Integration",
    desc: "Connect your platform with banking services, payment systems, verification APIs, SMS, email and third-party tools.",
    points: ["Banking APIs", "Payment systems", "Webhook setup"],
  },
  {
    slug: "cloud-infrastructure",
    icon: <FiCloud />,
    title: "Cloud & Infrastructure",
    desc: "Reliable deployment, server setup, CI/CD pipelines, monitoring and scalable infrastructure for production systems.",
    points: ["Cloud deployment", "CI/CD setup", "Server monitoring"],
  },
  {
    slug: "web-mobile-applications",
    icon: <FiSmartphone />,
    title: "Web & Mobile Applications",
    desc: "Responsive websites, React applications and mobile-ready platforms with clean interface and smooth user experience.",
    points: ["React websites", "Mobile-friendly UI", "Fast performance"],
  },
  {
    slug: "security-compliance-support",
    icon: <FiShield />,
    title: "Security & Compliance Support",
    desc: "Secure coding practices, authentication, access control, data protection and system hardening for safer applications.",
    points: ["Secure login", "Role-based access", "Data protection"],
  },
];

function Services() {
  const navigate = useNavigate();

  return (
    <section className="services-section" id="services">
      <div className="services-top">
        <div>
          <span className="services-label">Our Services</span>
          <h2>Technology Solutions Designed for Real Business Growth</h2>
        </div>

        <p>
          We help businesses build powerful digital systems that improve
          operations, connect platforms, automate workflows and create better
          customer experiences.
        </p>
      </div>

      <div className="service-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{item.icon}</div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <button
              className="service-btn"
              onClick={() => navigate(`/services/${item.slug}`)}
            >
              Know More <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;