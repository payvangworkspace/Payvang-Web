import "../Styles/ServiceDetail.css";
import { Link, useParams } from "react-router-dom";
import {
  FiCode,
  FiLayers,
  FiLink,
  FiCloud,
  FiSmartphone,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import Navbar from "./Navbar";
import PageBanner from "./PageBanner";
import Contact from "./Contact";
import Footer from "./Footer";

const serviceDetails = {
  "digital-product-development": {
    icon: <FiCode />,
    title: "Digital Product Development",
    intro:
      "We design and develop scalable digital products that help businesses automate processes, serve customers better and grow faster.",
    description:
      "From business portals and dashboards to customer platforms and internal tools, we build complete digital systems with clean UI, secure backend, database architecture and deployment support.",
    features: [
      "Custom business portals",
      "Admin dashboards",
      "Customer platforms",
      "Backend API development",
      "Database design",
      "Reports and analytics",
    ],
    benefits: [
      "Improve business efficiency",
      "Reduce manual work",
      "Centralize operations",
      "Scale your product easily",
    ],
  },

  "enterprise-software-solutions": {
    icon: <FiLayers />,
    title: "Enterprise Software Solutions",
    intro:
      "Powerful software systems for managing teams, workflows, customers, reports and business operations.",
    description:
      "We build CRM, ERP, workflow and reporting systems that help organizations manage data, automate routine tasks and improve operational control.",
    features: [
      "CRM modules",
      "ERP workflows",
      "Employee management",
      "Lead tracking",
      "Approval systems",
      "Role-based access",
    ],
    benefits: [
      "Better team productivity",
      "Organized data management",
      "Faster decision making",
      "Improved process control",
    ],
  },

  "api-system-integration": {
    icon: <FiLink />,
    title: "API & System Integration",
    intro:
      "Connect your application with payment gateways, banking APIs, verification services and third-party platforms.",
    description:
      "We integrate secure and reliable APIs into your platform, including payment systems, banking services, SMS, email, KYC, webhook callbacks and external business tools.",
    features: [
      "Payment gateway integration",
      "Banking API integration",
      "Webhook handling",
      "SMS and email APIs",
      "KYC/verification APIs",
      "Third-party integrations",
    ],
    benefits: [
      "Automated data flow",
      "Faster transactions",
      "Reduced manual dependency",
      "Reliable system communication",
    ],
  },

  "cloud-infrastructure": {
    icon: <FiCloud />,
    title: "Cloud & Infrastructure",
    intro:
      "Reliable cloud deployment and infrastructure setup for secure and scalable production applications.",
    description:
      "We help businesses deploy applications on cloud servers with CI/CD pipelines, SSL, domain setup, monitoring, backups and infrastructure maintenance.",
    features: [
      "Cloud server setup",
      "Application deployment",
      "CI/CD pipelines",
      "SSL and domain setup",
      "Server monitoring",
      "Backup support",
    ],
    benefits: [
      "Stable production setup",
      "Better performance",
      "Easy scaling",
      "Reduced downtime",
    ],
  },

  "web-mobile-applications": {
    icon: <FiSmartphone />,
    title: "Web & Mobile Applications",
    intro:
      "Modern responsive websites and mobile-ready applications with smooth user experience and clean interface.",
    description:
      "We create fast, responsive and professional web applications using modern frontend technologies. Our focus is on clean design, performance, responsiveness and business usability.",
    features: [
      "React websites",
      "Responsive UI",
      "Landing pages",
      "Business websites",
      "API-connected frontend",
      "Performance optimization",
    ],
    benefits: [
      "Better user experience",
      "Mobile-friendly design",
      "Fast loading pages",
      "Professional brand presence",
    ],
  },

  "security-compliance-support": {
    icon: <FiShield />,
    title: "Security & Compliance Support",
    intro:
      "Improve application safety with secure authentication, access control, API protection and data security practices.",
    description:
      "We help improve your system security through secure login, JWT authentication, role-based permissions, API protection, data validation and safer coding practices.",
    features: [
      "Secure authentication",
      "JWT implementation",
      "Role-based permissions",
      "API protection",
      "Input validation",
      "System hardening",
    ],
    benefits: [
      "Safer applications",
      "Controlled user access",
      "Protected business data",
      "Reduced security risks",
    ],
  },
};

function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <section className="sd-section">
        <div className="sd-container">
          <h2>Service Not Found</h2>
          <Link to="/services" className="sd-btn">
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
    <Navbar/>
  <PageBanner
  title={service.title}
  subtitle={service.intro}
  currentPage="Service Detail"
/>
    <section className="sd-section">
      <div className="sd-container">
        <div className="sd-layout">
          <div className="sd-main">
            <div className="sd-heading">
              <div className="sd-icon">{service.icon}</div>

              <div>
                <span className="sd-tag">Service Detail</span>
                <h2>{service.title}</h2>
              </div>
            </div>

            <p className="sd-intro">{service.intro}</p>

            <div className="sd-card">
              <h3>Overview</h3>
              <p>{service.description}</p>
            </div>

            <div className="sd-card">
              <h3>What We Provide</h3>

              <div className="sd-feature-grid">
                {service.features.map((feature, index) => (
                  <div className="sd-feature" key={index}>
                    <FiCheckCircle />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sd-card">
              <h3>Business Benefits</h3>

              <div className="sd-benefit-list">
                {service.benefits.map((benefit, index) => (
                  <div className="sd-benefit" key={index}>
                    <strong>{index + 1}</strong>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="sd-sidebar">
            <h3>Have a similar requirement?</h3>
            <p>
              Tell us about your project and our team will help you choose the
              right solution.
            </p>

            <Link to="/contact" className="sd-btn">
              Contact Us <FiArrowRight />
            </Link>
          </aside>
        </div>
      </div>
    </section>
    <Contact/>
    <Footer/>
    </>
  );
}

export default ServiceDetail;