import React from "react";
import "./footer.css";
import { Link } from "react-router-dom"; // Add this import
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    backgroundImage: 'url("/footerbg.png")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "100% 100%",
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer-main center-content">
        <div className="footer-brand">
          <div className="brand-flex">
            <div className="logo-circle">
              <img src="/footerlogo.png" alt="Praxsol Logo" className="footer-logo" />
            </div>
            <div className="brand-info">
              <h3>Praxsol Innologikodes</h3>
              <p className="footer-small">Solutions | Services | Societies</p>
            </div>
          </div>
          <p className="footer-description">
            Praxsol Innologikodes provides innovative technology solutions,
            engineering services, digital transformation, and industry-focused
            products to help businesses accelerate growth.
          </p>
          <div className="footer-social">
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaTwitter /></a>
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/vision">Vision</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><Link to="/service-asset-monitoring">Asset Performance Monitoring</Link></li>
            <li><Link to="/service-industrial-iot">Industrial IoT</Link></li>
            <li><Link to="/service-deeptech">DeepTech in Engineering</Link></li>
            <li><Link to="/service-testing-tools">Testing Tools</Link></li>
            <li><Link to="/service-cyber-security">Cyber Security</Link></li>
            <li><Link to="/service-digital-twin">Digital Twin</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <FaMapMarkerAlt />
            <span>
              Dwaraka Nagar, Visakhapatnam,<br />
              Andhra Pradesh 530016
            </span>
          </p>
          <p>
            <FaEnvelope />
            <span>info@praxsol.in</span>
          </p>
          <p>
            <FaPhoneAlt />
            <span>+91-910 001 3128</span>
          </p>
          <p>
            <FaWhatsapp />
            <span>+91-910 001 3228</span>
          </p>
        </div>
      </div>
      <div className="footer-bottom center-content">
        <p>© {new Date().getFullYear()} All Rights Reserved By <span className="footer-brand-color">Praxsol Innologikodes</span>.</p>
        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
