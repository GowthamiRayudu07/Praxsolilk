import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Small Top Header */}
      <div className={`top-header ${scrolled ? "hidden" : ""}`}>
        <div className="contact-info">
          <span><FaEnvelope className="icon" /> info@praxsol.in</span>
          <span><FaWhatsapp className="icon whatsapp" /> +91 91000 13228</span>
          <span><FaPhoneAlt className="icon phone" /> +91 910 001 3128</span>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${scrolled ? "fixed-top" : ""}`}>
        <div className="header-left">
          <img
            src={`${process.env.PUBLIC_URL}/Praxsolilklogo.png`}
            alt="Company Logo"
            className="logo-img spin-logo"
          />
          <span className="company-name gradient-text">
            PRAXSOL INNOLOGIKODES
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="close-icon" />
          ) : (
            <FaBars className="hamburger-icon" />
          )}
        </div>

        {/* NAV MENU */}
        <nav className={`header-right ${menuOpen ? "open" : ""}`}>
          <NavLink onClick={() => setMenuOpen(false)} to="/" end className="nav-link">Home</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/aboutus" className="nav-link">About Us</NavLink>

          {/* SERVICES DROPDOWN */}
          <div className="dropdown">
            <span className="nav-link dropdown-toggle">Services ▾</span>

            <div className="dropdown-menu">
              <NavLink onClick={() => setMenuOpen(false)} to="/service-asset-monitoring" className="dropdown-item">
                Asset Performance Monitoring
              </NavLink>
              <NavLink onClick={() => setMenuOpen(false)} to="/service-industrial-iot" className="dropdown-item">
                Industrial IoT
              </NavLink>
              <NavLink onClick={() => setMenuOpen(false)} to="/service-deeptech" className="dropdown-item">
                DeepTech in Engineering
              </NavLink>
              <NavLink onClick={() => setMenuOpen(false)} to="/service-testing-tools" className="dropdown-item">
                Testing Tools
              </NavLink>
              <NavLink onClick={() => setMenuOpen(false)} to="/service-cyber-security" className="dropdown-item">
                Cyber Security
              </NavLink>
              <NavLink onClick={() => setMenuOpen(false)} to="/service-digital-twin" className="dropdown-item">
                Digital Twin
              </NavLink>
            </div>
          </div>

          <NavLink onClick={() => setMenuOpen(false)} to="/clients" className="nav-link">Clients</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/vision" className="nav-link">Vision</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/contact" className="nav-link">Contact</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
