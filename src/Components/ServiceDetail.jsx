import { useEffect } from "react";
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
  FiShoppingCart,
  FiBarChart2,
  FiSettings,
  FiCreditCard,
} from "react-icons/fi";

import Navbar from "./Navbar";
import PageBanner from "./PageBanner";
import Contact from "./Contact";
import Footer from "./Footer";

const serviceDetails = {
  "digital-product-development": {
    icon: <FiCode />,
    title: "Digital Product Development",
    price: "₹24,999",
    intro:
      "Custom digital products built to automate business operations, improve customer experience and support long-term growth.",
    description:
      "We design and develop scalable web platforms, portals, dashboards and internal tools based on your business requirements. Our focus is on clean UI, secure backend, reliable database structure and smooth deployment.",
    features: [
      "Business portal development",
      "Admin dashboard development",
      "Customer platform development",
      "Backend API development",
      "Database architecture",
      "Reports and analytics",
    ],
    benefits: [
      "Automates manual business processes",
      "Improves team productivity",
      "Centralizes business data",
      "Supports future scalability",
    ],
    deliverables: [
      "Responsive frontend",
      "Backend APIs",
      "Database setup",
      "Admin panel",
      "Basic deployment support",
    ],
  },

  "enterprise-software-solutions": {
    icon: <FiLayers />,
    title: "Enterprise Software Solutions",
    price: "₹48,499",
    intro:
      "Enterprise-grade CRM, ERP and workflow systems designed to manage operations with better control.",
    description:
      "We create custom enterprise software for managing customers, leads, employees, workflows, reports and approvals. These systems help businesses reduce manual dependency and improve operational visibility.",
    features: [
      "CRM modules",
      "ERP workflows",
      "Employee management",
      "Lead tracking",
      "Approval systems",
      "Role-based access",
    ],
    benefits: [
      "Better process management",
      "Improved data visibility",
      "Faster decision making",
      "Reduced operational errors",
    ],
    deliverables: [
      "Custom modules",
      "User roles",
      "Reports dashboard",
      "Workflow screens",
      "Testing support",
    ],
  },

  "api-system-integration": {
    icon: <FiLink />,
    title: "API & System Integration",
    price: "₹36,499",
    intro:
      "Secure API integrations for payment systems, banking APIs, SMS, email, verification and third-party tools.",
    description:
      "We connect your existing application with external systems using secure APIs and webhook flows. This includes request handling, callback management, response mapping, logging and production-ready integration support.",
    features: [
      "Payment API integration",
      "Banking API integration",
      "Webhook and callback setup",
      "SMS and email APIs",
      "KYC and verification APIs",
      "Third-party SaaS integrations",
    ],
    benefits: [
      "Automated data exchange",
      "Faster business transactions",
      "Reduced manual work",
      "Reliable platform connectivity",
    ],
    deliverables: [
      "API integration code",
      "Webhook handling",
      "Request/response mapping",
      "Testing support",
      "Error handling setup",
    ],
  },

  "cloud-infrastructure": {
    icon: <FiCloud />,
    title: "Cloud & Infrastructure",
    price: "₹19,999",
    intro:
      "Cloud deployment, server setup and infrastructure support for secure and stable production applications.",
    description:
      "We help deploy applications on cloud servers with domain setup, SSL, CI/CD pipelines, backups, monitoring and basic server hardening for production environments.",
    features: [
      "Cloud server setup",
      "Application deployment",
      "CI/CD pipeline setup",
      "Domain and SSL setup",
      "Server monitoring",
      "Backup support",
    ],
    benefits: [
      "Stable production hosting",
      "Improved performance",
      "Reduced downtime",
      "Easy future scaling",
    ],
    deliverables: [
      "Server configuration",
      "Deployment setup",
      "SSL configuration",
      "Domain mapping",
      "Basic monitoring setup",
    ],
  },

  "web-mobile-applications": {
    icon: <FiSmartphone />,
    title: "Web & Mobile Applications",
    price: "₹29,999",
    intro:
      "Responsive websites and mobile-ready applications with modern UI, fast performance and clean user experience.",
    description:
      "We build modern React-based websites and mobile-friendly applications that work smoothly across devices. Our focus is professional UI, clean code, speed and usability.",
    features: [
      "React website development",
      "Responsive UI design",
      "Landing pages",
      "Business websites",
      "API-connected frontend",
      "Performance optimization",
    ],
    benefits: [
      "Professional online presence",
      "Better mobile experience",
      "Fast loading pages",
      "Improved customer trust",
    ],
    deliverables: [
      "Responsive pages",
      "Modern UI components",
      "Contact forms",
      "API integration support",
      "Basic SEO setup",
    ],
  },

  "security-compliance-support": {
    icon: <FiShield />,
    title: "Security & Compliance Support",
    price: "₹22,499",
    intro:
      "Security improvements for authentication, authorization, API protection and safer application workflows.",
    description:
      "We improve application security using secure login flows, JWT authentication, role-based permissions, input validation, API protection and safer coding practices.",
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
    deliverables: [
      "Security review",
      "Authentication setup",
      "Authorization rules",
      "API validation",
      "Basic security report",
    ],
  },

  "payment-gateway-integration": {
    icon: <FiCreditCard />,
    title: "Payment Gateway Integration",
    price: "₹18,999",
    intro:
      "Payment gateway integration for websites, apps and business platforms with secure transaction handling.",
    description:
      "We integrate payment gateways with complete checkout flow, order creation, payment status handling, webhook callbacks and transaction response management.",
    features: [
      "UPI payment integration",
      "Card payment support",
      "Payment status tracking",
      "Webhook callback handling",
      "Order ID mapping",
      "Transaction response handling",
    ],
    benefits: [
      "Accept online payments easily",
      "Secure payment processing",
      "Automated payment status updates",
      "Better customer checkout experience",
    ],
    deliverables: [
      "Payment gateway setup",
      "Checkout integration",
      "Webhook handling",
      "Success/failure flow",
      "Testing support",
    ],
  },

  "crm-software-development": {
    icon: <FiBarChart2 />,
    title: "CRM Software Development",
    price: "₹39,999",
    intro:
      "Custom CRM software to manage leads, customers, follow-ups, sales teams and business communication.",
    description:
      "We build CRM systems that help businesses organize customer data, track leads, manage follow-ups, assign work and generate sales reports from a single platform.",
    features: [
      "Lead management",
      "Customer database",
      "Follow-up tracking",
      "Sales team management",
      "Reports dashboard",
      "Role-based access",
    ],
    benefits: [
      "Better customer management",
      "Improved sales tracking",
      "Faster follow-ups",
      "Organized business communication",
    ],
    deliverables: [
      "CRM dashboard",
      "Lead modules",
      "Customer modules",
      "Reports section",
      "User access control",
    ],
  },

  "ecommerce-development": {
    icon: <FiShoppingCart />,
    title: "E-Commerce Development",
    price: "₹34,999",
    intro:
      "Online store development with product catalog, cart, checkout, payment and order management features.",
    description:
      "We build e-commerce platforms for businesses that want to sell products online with a smooth shopping experience, secure checkout and easy order management.",
    features: [
      "Product catalog",
      "Cart and checkout",
      "Payment integration",
      "Order management",
      "Admin product management",
      "Customer order tracking",
    ],
    benefits: [
      "Start selling online",
      "Manage orders easily",
      "Improve customer buying experience",
      "Scale your online business",
    ],
    deliverables: [
      "Store frontend",
      "Product management",
      "Cart checkout flow",
      "Payment setup",
      "Order dashboard",
    ],
  },

  "admin-dashboard-development": {
    icon: <FiBarChart2 />,
    title: "Admin Dashboard Development",
    price: "₹21,999",
    intro:
      "Modern admin panels and dashboards for managing users, reports, transactions and business data.",
    description:
      "We create clean and easy-to-use admin dashboards that help businesses monitor data, manage users, control operations and view reports in one place.",
    features: [
      "User management",
      "Reports and analytics",
      "Transaction monitoring",
      "Data visualization",
      "Role-based access",
      "Dashboard filters",
    ],
    benefits: [
      "Clear business visibility",
      "Easy data management",
      "Faster admin operations",
      "Better reporting control",
    ],
    deliverables: [
      "Admin dashboard UI",
      "Management modules",
      "Reports section",
      "Charts and tables",
      "Access control",
    ],
  },

  "business-website-development": {
    icon: <FiSmartphone />,
    title: "Business Website Development",
    price: "₹14,999",
    intro:
      "Professional responsive websites for companies, startups, service providers and growing brands.",
    description:
      "We design and develop professional business websites with responsive layouts, clean sections, service pages, contact forms and basic SEO setup.",
    features: [
      "Responsive website design",
      "Company profile pages",
      "Service sections",
      "Contact forms",
      "SEO-friendly structure",
      "Fast loading layout",
    ],
    benefits: [
      "Professional brand presence",
      "Better customer trust",
      "Mobile-friendly experience",
      "Easy business enquiries",
    ],
    deliverables: [
      "Website pages",
      "Responsive design",
      "Contact form",
      "Basic SEO tags",
      "Deployment support",
    ],
  },

  "technical-support-maintenance": {
    icon: <FiSettings />,
    title: "Technical Support & Maintenance",
    price: "₹9,999",
    intro:
      "Ongoing technical support for websites, servers, applications, updates and issue fixing.",
    description:
      "We provide maintenance support for business websites and applications including bug fixing, updates, monitoring, small improvements and technical troubleshooting.",
    features: [
      "Bug fixing",
      "Website updates",
      "Application monitoring",
      "Server support",
      "Performance checks",
      "Small feature improvements",
    ],
    benefits: [
      "Keeps systems stable",
      "Reduces downtime",
      "Fixes issues faster",
      "Improves long-term reliability",
    ],
    deliverables: [
      "Issue fixing",
      "Regular updates",
      "Monitoring support",
      "Minor improvements",
      "Technical guidance",
    ],
  },
};

function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  useEffect(() => {
    if (service) {
      document.title = `${service.title} - Payvang`;
    } else {
      document.title = "Service Not Found - Payvang";
    }
  }, [service]);

  if (!service) {
    return (
      <>
        <Navbar />
        <section className="sd-section">
          <div className="sd-container">
            <h2>Service Not Found</h2>
            <Link to="/services" className="sd-btn">
              Back to Services
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <PageBanner
        title={service.title}
        subtitle={service.intro}
        currentPage={service.title}
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
                  <div className="sd-price">{service.price}</div>
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

              <div className="sd-card">
                <h3>Project Deliverables</h3>

                <div className="sd-feature-grid">
                  {service.deliverables.map((item, index) => (
                    <div className="sd-feature" key={index}>
                      <FiCheckCircle />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="sd-sidebar">
              <span className="sd-sidebar-label">Starting From</span>
              <h2>{service.price}</h2>

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

      <Contact />
      <Footer />
    </>
  );
}

export default ServiceDetail;