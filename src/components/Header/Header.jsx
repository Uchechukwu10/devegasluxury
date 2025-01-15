import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Link } from "react-scroll"

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
            <li><Link to="home" smooth={true} duration={500} onClick={handleMenuItemClick}>Home</Link></li>
            <li><Link to="about-us" smooth={true} duration={500} onClick={handleMenuItemClick}>About Us</Link></li>
            <li><Link to="services" smooth={true} duration={500} onClick={handleMenuItemClick}>Services</Link></li>
            <li><Link to="footer" smooth={true} duration={500} onClick={handleMenuItemClick}>Contact Us</Link></li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Call-to-Action Button */}
        <Link to="about-us" smooth={true} duration={500} className="nav-cta-button">Learn More</Link>
      </div>
    </header>
  );
};

export default Header;
