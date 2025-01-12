import React from "react";
import "./Hero.css";


const Hero = () => {
  return (
    <section className="hero">
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
