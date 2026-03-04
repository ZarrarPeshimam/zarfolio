import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-card">
        <div className="contact-row">
          <div className="contact-label">Email</div>
          <div className="contact-value">
            zarrarpeshimam@gmail.com
          </div>
        </div>

        <div className="contact-row">
          <div className="contact-label">Phone</div>
          <div className="contact-value">
            +91 99201 01840
          </div>
        </div>

        <div className="contact-row">
          <div className="contact-label">Location</div>
          <div className="contact-value">
            Mumbai, Maharashtra, India
          </div>
        </div>

        <div className="contact-divider"></div>

        <div className="social-section">
          <p className="connect-text">Connect with me</p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/zarrar-peshimam-a2439b28b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/ZarrarPeshimam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/github.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}