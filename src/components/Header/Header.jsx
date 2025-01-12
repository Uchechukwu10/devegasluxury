import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;
      setIsVisible(window.scrollY < heroHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isVisible ? '' : 'hidden'}`}>
      <div className="nav-container">
        {/* Logo as an image */}
        <a href="#" className="logo">
          <img src="./devegas-logo.png" alt="Your Company Logo" />
          <span style={{color: '#c09338', fontSize: '0.8rem'}}><strong>DE VEGAS LUXURY HOMES AND PROPERTIES</strong></span>
        </a>

        {/* Navigation */}
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#listings">Listings</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Call-to-Action Button */}
        <a href="#get-started" className="nav-cta-button">Get Started</a>
      </div>
    </header>
  );
};

export default Header;
