import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-us">
      <div className="container">
        {/* Left Side: Image */}
        <div className="about-image">
          <img
            src="./happy-man-with-house.jpg"
            alt="about"
            className="about-photo"
          />
        </div>

        {/* Right Side: Text */}
        <div className="about-content">
          <h2 className="about-heading">Who We Are</h2>
          <p className="about-text">
            At <strong>De Vegas Luxury Homes and Properties</strong>, Our goal
            is to build a legacy of trust by putting our clients first and
            offering innovative solutions for buyers and sellers alike.
          </p>
          <ul className="about-values">
            <li>
              🌟 <strong>Commitment:</strong> Dedicated to delivering
              personalized and attentive service.
            </li>
            <li>
              🔑 <strong>Transparency:</strong> Clear and honest communication
              at every step.
            </li>
            <li>
              📈 <strong>Innovation:</strong> Using modern tools and insights to
              ensure success.
            </li>
            <li>
              🌍 <strong>Community Focus:</strong> Building connections within
              the local market.
            </li>
          </ul>
          <a href="#contact-us" className="cta-button">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
