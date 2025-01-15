import React from "react";
import "./About.css";
import { FaStar, FaKey, FaChartLine, FaGlobeAfrica } from "react-icons/fa";

const About = () => {
  return (
    <section id="about-us" className="about-us">
      <h2 className="about-heading">Who We Are</h2>
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
          <p className="about-text">
            At <strong style={{color: "#c09338"}}>De Vegas Luxury Homes and Properties</strong>, we are
            passionate about redefining real estate and construction through a
            commitment to quality, innovation, and customer satisfaction. Our
            team of experts brings together years of industry knowledge and a
            deep understanding of luxury living to create properties that
            inspire and delight. <span className="about-extra-text">We specialize in providing bespoke real estate
            solutions, offering a wide range of services that include real
            estate development, building construction, and project management.
            Our mission is to design and deliver premium residential and
            commercial properties that embody elegance, functionality, and
            lasting value.</span>
          </p>
          <ul className="about-values">
            <li>
              <FaStar style={{color: "#c09338"}}/>
              <strong>Commitment:</strong> Dedicated to delivering valuable
              service.
            </li>
            <li>
              <FaKey style={{color: "#c09338"}}/> <strong>Transparency:</strong> Clear and honest
              communication at every step.
            </li>
            <li>
              <FaChartLine style={{color: "#c09338"}}/> <strong>Innovation:</strong> Using modern tools
              and insights to ensure success.
            </li>
            <li>
              <FaGlobeAfrica style={{color: "#c09338"}}/> <strong>Community Focus:</strong> Building
              connections within the local market.
            </li>
          </ul>
          {/* <a href="#contact-us" className="cta-button">
            Learn More
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
