import "../Styles/Services.css";
import {
  FiCode,
  FiLayers,
  FiLink,
  FiCloud,
  FiSmartphone,
  FiShield,
  FiShoppingCart,
  FiBarChart2,
  FiSettings,
  FiCreditCard,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const services = [
  {
    slug: "digital-product-development",
    icon: <FiCode />,
    title: "Digital Product Development",
    desc: "Custom web platforms, business portals, dashboards and internal tools designed to solve real business problems.",
    price: "₹24,999",
    points: ["Business portals", "Admin dashboards", "Customer platforms"],
  },
  {
    slug: "enterprise-software-solutions",
    icon: <FiLayers />,
    title: "Enterprise Software Solutions",
    desc: "CRM, ERP, workflow systems and reporting tools that help teams manage operations with better control.",
    price: "₹48,499",
    points: ["CRM & ERP", "Workflow automation", "Reports & analytics"],
  },
  {
    slug: "api-system-integration",
    icon: <FiLink />,
    title: "API & System Integration",
    desc: "Connect your platform with banking services, payment systems, verification APIs, SMS, email and third-party tools.",
    price: "₹36,499",
    points: ["Banking APIs", "Payment systems", "Webhook setup"],
  },
  {
    slug: "cloud-infrastructure",
    icon: <FiCloud />,
    title: "Cloud & Infrastructure",
    desc: "Reliable deployment, server setup, CI/CD pipelines, monitoring and scalable infrastructure for production systems.",
    price: "₹19,999",
    points: ["Cloud deployment", "CI/CD setup", "Server monitoring"],
  },
  {
    slug: "web-mobile-applications",
    icon: <FiSmartphone />,
    title: "Web & Mobile Applications",
    desc: "Responsive websites, React applications and mobile-ready platforms with clean interface and smooth user experience.",
    price: "₹29,999",
    points: ["React websites", "Mobile-friendly UI", "Fast performance"],
  },
  {
    slug: "security-compliance-support",
    icon: <FiShield />,
    title: "Security & Compliance Support",
    desc: "Secure coding practices, authentication, access control, data protection and system hardening for safer applications.",
    price: "₹22,499",
    points: ["Secure login", "Role-based access", "Data protection"],
  },
  {
    slug: "payment-gateway-integration",
    icon: <FiCreditCard />,
    title: "Payment Gateway Integration",
    desc: "Integrate secure payment gateways for websites, apps and business platforms with complete callback handling.",
    price: "₹18,999",
    points: ["UPI payments", "Card payments", "Webhook handling"],
  },
  {
    slug: "crm-software-development",
    icon: <FiBarChart2 />,
    title: "CRM Software Development",
    desc: "Custom CRM systems to manage leads, customers, follow-ups, sales teams and business communication.",
    price: "₹39,999",
    points: ["Lead management", "Customer tracking", "Sales reports"],
  },
  {
    slug: "ecommerce-development",
    icon: <FiShoppingCart />,
    title: "E-Commerce Development",
    desc: "Online store development with product catalog, cart, checkout, payment and order management features.",
    price: "₹34,999",
    points: ["Product catalog", "Cart & checkout", "Order management"],
  },
  {
    slug: "admin-dashboard-development",
    icon: <FiBarChart2 />,
    title: "Admin Dashboard Development",
    desc: "Modern admin panels and dashboards for managing users, reports, transactions and business data.",
    price: "₹21,999",
    points: ["User management", "Reports", "Data visualization"],
  },
  {
    slug: "business-website-development",
    icon: <FiSmartphone />,
    title: "Business Website Development",
    desc: "Professional responsive websites for companies, startups, service providers and growing brands.",
    price: "₹14,999",
    points: ["Responsive design", "SEO-friendly", "Contact forms"],
  },
  {
    slug: "technical-support-maintenance",
    icon: <FiSettings />,
    title: "Technical Support & Maintenance",
    desc: "Ongoing website, server, application and technical maintenance support for business systems.",
    price: "₹9,999",
    points: ["Bug fixing", "Updates", "Monitoring"],
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

            <div className="service-price">{item.price}</div>

            <button
              className="service-btn"
              onClick={() => navigate(`/services/${item.slug}`)}
            >
              Explore More <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;