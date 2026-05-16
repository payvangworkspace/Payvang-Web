import "../Styles/WhyChoose.css";
import {
  FiShield,
  FiSettings,
  FiTrendingUp,
  FiUsers,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const reasons = [
  {
    icon: <FiShield />,
    title: "Security-First Approach",
    desc: "We design systems with strong authentication, access control, data protection and reliable backend architecture.",
  },
  {
    icon: <FiSettings />,
    title: "Custom-Built Solutions",
    desc: "Every platform is planned around your business workflow, team process, customer journey and growth goals.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Scalable Development",
    desc: "Our solutions are built to handle future users, new features, integrations and business expansion.",
  },
  {
    icon: <FiUsers />,
    title: "Business-Focused Team",
    desc: "We do not just write code. We understand your requirement and build solutions that solve real operational problems.",
  },
];

function WhyChoose() {
  return (
    <section className="why-section" id="why-choose">
      <div className="why-container">
        <div className="why-left">
          <span className="why-label">Why Choose Us</span>

          <h2>Reliable Technology Partner for Your Digital Growth</h2>

          <p>
            Payvang helps businesses build secure, practical and high-performing
            digital platforms. Our focus is on clean development, strong system
            design and long-term reliability.
          </p>

          <div className="why-stats">
            <div>
              <FiClock />
              <h3>Fast Delivery</h3>
              <span>Planned execution with clear milestones</span>
            </div>

            <div>
              <FiCheckCircle />
              <h3>Quality Work</h3>
              <span>Clean code and stable implementation</span>
            </div>
          </div>
        </div>

        <div className="why-grid">
          {reasons.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;