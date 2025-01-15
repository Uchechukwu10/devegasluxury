import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        {/* Brand Logo */}
        <div className="footer-section brand-logo">
          <Link to="home" smooth={true} duration={500} className="footer-logo">
            <img src="./devegas-logo.png" alt="De Vegas Luxury Homes Logo" />
            <span style={{ color: "#c09338", fontSize: "0.8rem" }}>
              <strong>DE VEGAS LUXURY HOMES AND PROPERTIES</strong>
            </span>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>Unit 6 Block 72 Plot 143 at APDC Capital Estate</p>
          <p>Phase 2, Kaba District</p>
          <p>Abuja 904104, FCT</p>
          <p>
            Phone: <a href="tel:+2348133203877">+2348133203877</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@devegasluxuryhomes.com">
              info@devegasluxuryhomes.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
            <Link to="about-us" smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li>
            <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
            <Link to="footer" smooth={true} duration={500}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} De Vegas Luxury Homes and
          Properties. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
