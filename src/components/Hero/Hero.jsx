import React, { useState, useEffect } from "react";
import "./Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  const images = [
    "/analog-landscape-city-with-buildings.jpg",
    "/cityscape-wuxi.jpg",
    "/residential-house-process-building.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <section id="home" className="hero">
      {/* Background image changes based on currentImageIndex */}
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      ></div>

      {/* Overlay and content */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Home With Us Today</h1>
          <p className="hero-subtitle">
            Discover a wide range of properties tailored to your unique needs
            and preferences, and take the first step on your journey to finding
            the perfect space for you today.
          </p>
          <div className="hero-buttons">
            <Link to="footer" smooth={true} duration={500} className="hero-button primary-button">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
