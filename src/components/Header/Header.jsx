import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;
      setIsVisible(window.scrollY < heroHeight);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${isVisible ? '' : 'hidden'}`}>
      <div className="nav-container" ref={navRef}>
        {/* Logo as an image */}
        <a href="#" className="logo">
          <img src="./devegas-logo.png" alt="Your Company Logo" />
          <span style={{ color: '#c09338', fontSize: '0.8rem' }}>
            <strong>DE VEGAS LUXURY HOMES AND PROPERTIES</strong>
          </span>
        </a>

        {/* Navigation */}
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={handleMenuItemClick}>Home</a></li>
            <li><a href="#about-us" onClick={handleMenuItemClick}>About Us</a></li>
            <li><a href="#services" onClick={handleMenuItemClick}>Services</a></li>
            <li><a href="#listings" onClick={handleMenuItemClick}>Listings</a></li>
            <li><a href="#contact-us" onClick={handleMenuItemClick}>Contact Us</a></li>
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
