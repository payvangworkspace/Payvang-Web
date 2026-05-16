import { useState } from "react";
import "../Styles/FAQ.css";

const faqs = [
  {
    question: "What does Payvang do?",
    answer:
      "Payvang builds secure digital platforms, business software, dashboards, API-based systems, automation tools, and cloud-ready applications for growing businesses.",
  },
  {
    question: "Do you build custom software?",
    answer:
      "Yes. We create custom solutions based on your business workflow, customer journey, operational process, and future growth requirements.",
  },
  {
    question: "Can you integrate third-party APIs?",
    answer:
      "Yes. We can integrate banking APIs, payment systems, verification services, SMS, email, CRM tools, webhooks, and other external platforms.",
  },
  {
    question: "Do you provide cloud and deployment support?",
    answer:
      "Yes. We support server setup, cloud deployment, CI/CD, monitoring, backups, performance optimization, and production-ready infrastructure.",
  },
  {
    question: "Can Payvang improve an existing system?",
    answer:
      "Yes. We can review your current platform, improve performance, modernize UI, fix workflow gaps, add new features, and strengthen security.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-blur faq-blur-one"></div>
      <div className="faq-blur faq-blur-two"></div>

      <div className="faq-container">
        <div className="faq-left">
          <span className="faq-label">FAQ</span>

          <h2>Questions Businesses Usually Ask Us</h2>

          <p>
            Find quick answers about Payvang’s services, development process,
            integrations, deployment support and long-term maintenance.
          </p>

          <div className="faq-support-box">
            <h3>Need more clarity?</h3>
            <p>Share your requirement and our team will guide you.</p>
            <a href="#contact">Contact Us</a>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-card ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <button
                type="button"
                className="faq-question-row"
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{item.question}</h3>

                <span className="faq-toggle">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;