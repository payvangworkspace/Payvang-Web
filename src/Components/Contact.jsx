import { useState } from "react";
import Swal from "sweetalert2";
import "../Styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      Swal.fire("Required", "Please enter your name.", "warning");
      return false;
    }

    if (!formData.email.trim()) {
      Swal.fire("Required", "Please enter your email address.", "warning");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      Swal.fire("Invalid Email", "Please enter a valid email address.", "error");
      return false;
    }

    if (!formData.subject.trim()) {
      Swal.fire("Required", "Please enter a subject.", "warning");
      return false;
    }

    if (!formData.message.trim()) {
      Swal.fire("Required", "Please enter your message.", "warning");
      return false;
    }

    if (formData.message.trim().length < 10) {
      Swal.fire(
        "Message Too Short",
        "Please enter at least 10 characters in your message.",
        "warning"
      );
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting Payvang. Our team will connect with you soon.",
      confirmButtonColor: "#2563eb",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg contact-bg-one"></div>
      <div className="contact-bg contact-bg-two"></div>

      <div className="contact-container">
        <div className="contact-content">
          <span className="contact-label">Contact Us</span>

          <h2>Let’s Build a Reliable Digital Solution for Your Business</h2>

          <p>
            Share your project idea, business requirement or technical challenge.
            Our team will understand your needs and suggest the right solution.
          </p>

          <div className="contact-info-list">
            <div>
              <span></span>
              Custom software and business platforms
            </div>

            <div>
              <span></span>
              API integration and automation support
            </div>

            <div>
              <span></span>
              Cloud deployment and technical maintenance
            </div>
          </div>

          <div className="contact-mini-card">
            <h3>Quick Response</h3>
            <p>
              Our team will connect with you after reviewing your requirement.
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Project discussion"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your requirement"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;