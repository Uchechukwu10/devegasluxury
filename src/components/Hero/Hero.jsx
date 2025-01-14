import React, { useState, useEffect } from "react";
import "./Hero.css";

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
    <section className="hero">
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
          <h1 className="hero-title">Find Your Dream Home</h1>
          <p className="hero-subtitle">
            Discover properties tailored to your needs and start your journey to the perfect place today.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="hero-button primary-button">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
