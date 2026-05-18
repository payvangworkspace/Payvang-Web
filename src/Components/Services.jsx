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
  FiRefreshCw,
  FiUsers,
  FiPackage,
  FiHeadphones,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const services = [
  {
    slug: "digital-product-development",
    icon: <FiCode />,
    title: "Digital Product Development",
    desc: "Custom web platforms, business portals, dashboards and internal tools designed to solve real business problems.",
    price: "₹24,999",
  },
  {
    slug: "enterprise-software-solutions",
    icon: <FiLayers />,
    title: "Enterprise Software Solutions",
    desc: "CRM, ERP, workflow systems and reporting tools that help teams manage operations with better control.",
    price: "₹48,499",
  },
  {
    slug: "api-system-integration",
    icon: <FiLink />,
    title: "API & System Integration",
    desc: "Connect your platform with banking services, payment systems, verification APIs, SMS, email and third-party tools.",
    price: "₹36,499",
  },
  {
    slug: "cloud-infrastructure",
    icon: <FiCloud />,
    title: "Cloud & Infrastructure",
    desc: "Reliable deployment, server setup, CI/CD pipelines, monitoring and scalable infrastructure for production systems.",
    price: "₹19,999",
  },
  {
    slug: "web-mobile-applications",
    icon: <FiSmartphone />,
    title: "Web & Mobile Applications",
    desc: "Responsive websites, React applications and mobile-ready platforms with clean interface and smooth user experience.",
    price: "₹29,999",
  },
  {
    slug: "security-compliance-support",
    icon: <FiShield />,
    title: "Security & Compliance Support",
    desc: "Secure coding practices, authentication, access control, data protection and system hardening for safer applications.",
    price: "₹22,499",
  },
  {
    slug: "payment-gateway-integration",
    icon: <FiCreditCard />,
    title: "Payment Gateway Integration",
    desc: "Integrate secure payment gateways for websites, apps and business platforms with complete callback handling.",
    price: "₹18,999",
  },
  {
    slug: "crm-software-development",
    icon: <FiBarChart2 />,
    title: "CRM Software Development",
    desc: "Custom CRM systems to manage leads, customers, follow-ups, sales teams and business communication.",
    price: "₹39,999",
  },
  {
    slug: "ecommerce-development",
    icon: <FiShoppingCart />,
    title: "E-Commerce Development",
    desc: "Online store development with product catalog, cart, checkout, payment and order management features.",
    price: "₹34,999",
  },
  {
    slug: "admin-dashboard-development",
    icon: <FiBarChart2 />,
    title: "Admin Dashboard Development",
    desc: "Modern admin panels and dashboards for managing users, reports, transactions and business data.",
    price: "₹21,999",
  },
  {
    slug: "business-website-development",
    icon: <FiSmartphone />,
    title: "Business Website Development",
    desc: "Professional responsive websites for companies, startups, service providers and growing brands.",
    price: "₹14,999",
  },
  {
    slug: "technical-support-maintenance",
    icon: <FiSettings />,
    title: "Technical Support & Maintenance",
    desc: "Ongoing website, server, application and technical maintenance support for business systems.",
    price: "₹9,999",
  },
];

const subscriptionPlans = [
  {
    icon: <FiRefreshCw />,
    title: "Payvang Switch",
    desc: "Daily basis support for switching, managing and improving business technology operations with expert assistance.",
    price: "₹999 / Day",
  },
  {
    icon: <FiPackage />,
    title: "Payvang Nidhi Solution",
    desc: "Daily subscription support for Nidhi solution operations, reporting, member data and software assistance.",
    price: "₹1,499 / Day",
  },
  {
    icon: <FiHeadphones />,
    title: "Payvang Team Support Service",
    desc: "Dedicated daily team support for technical coordination, business operations and service management.",
    price: "₹1,999 / Day",
  },
  {
    icon: <FiUsers />,
    title: "Payvang Product Management Service",
    desc: "Daily product management service for planning, tracking, feature coordination and product execution support.",
    price: "₹2,999 / Day",
  },
];

function Services() {
  const navigate = useNavigate();

  return (
    <section className="services-section" id="services">
      <div className="services-top">
        <span className="services-label">Our Services</span>
        <h2>Technology Solutions Designed for Real Business Growth</h2>
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

      <div className="subscription-top">
        <span className="services-label">Subscription Plans</span>
        <h2>Daily Basis Subscription Plans</h2>
        <p>
          Flexible daily subscription plans for Payvang Switch, Nidhi solution,
          team support and product management services.
        </p>
      </div>

      <div className="subscription-grid">
        {subscriptionPlans.map((plan, index) => (
          <div className="subscription-card" key={index}>
            <div className="subscription-icon">{plan.icon}</div>
            <h3>{plan.title}</h3>
            <p>{plan.desc}</p>

            <div className="subscription-price">{plan.price}</div>

            <button
              className="subscription-btn"
              onClick={() => navigate("/contact")}
            >
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;