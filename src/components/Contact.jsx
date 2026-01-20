import React from "react";
import "./contact.css";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* FIRST SECTION (Hero) */}
      <div className="contact-hero">
        <div className="contact-overlay">

          <div className="contact-center-box">

            {/* BIG CENTER IMAGE */}
            <img
              src="/contactleft.png"
              alt="Contact"
              className="contact-big-img"
            />

            {/* TEXT ON RIGHT OF IMAGE */}
            <div className="contact-text-box">
              <h1 className="contact-title">Contact Us</h1>
              <p className="contact-description">
                You can reach us via email at <strong>info@praxsol.com</strong> or
                call us at <strong>+91-1234567890</strong>. Our team is always 
                ready to assist you with any queries or support.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* SECOND SECTION – ADDRESS DETAILS */}
      <div className="contact-details-section">

        <div className="contact-details-container">

          {/* EMAIL CARD */}
          <div className="contact-card">
            <FaEnvelope className="contact-card-icon" />
            <h3 className="contact-card-title">Email Address</h3>
            <p className="contact-card-text">info@praxsol.in</p>
          </div>

          {/* PHONE CARD */}
          <div className="contact-card">
            <FaPhoneAlt className="contact-card-icon" />
            <h3 className="contact-card-title">Make A Call</h3>
            <p className="contact-card-text">+91 9100013128</p>
          </div>

          {/* WHATSAPP CARD */}
          <div className="contact-card">
            <FaWhatsapp className="contact-card-icon" />
            <h3 className="contact-card-title">Whatsapp</h3>
            <p className="contact-card-text">+91 9100013228</p>
          </div>

        </div>

      </div>


 {/* THIRD SECTION – CONTACT FORM */}
  <section className="form-wrapper">
    <div className="form-section">
      {/* LEFT SIDE – IMAGE + ADDRESS */}
      <div className="form-left">
        <img src="/aboutus.jpg" alt="Contact" className="form-left-img" />

        <div className="form-location-box">
          <FaMapMarkerAlt className="form-location-icon" />
          <p>
            Praxsol Engineering Private Limited <br />
            4th Floor, Isnar Satyasri Complex, Above ICICI Bank, <br />
            Dwaraknagar, Visakhapatnam, Andhra Pradesh, India – 530016
          </p>
        </div>
      </div>

      {/* RIGHT SIDE – FORM */}
      <div className="form-right">
        <h2 className="form-title">Get In Touch</h2>

        <div className="form-grid">
          <div className="input-box">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="input-box">
            <label>Company Name</label>
            <input type="text" placeholder="Enter company name" />
          </div>

          <div className="input-box">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter phone number" />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email" />
          </div>
        </div>

        <div className="message-box">
          <label>Your Message</label>
          <textarea placeholder="Type your message here"></textarea>
        </div>

        <button className="submit-btn">Submit</button>
      </div>
    </div>
  </section>

  
{/* ======================= MAP SECTION ONLY ======================= */}
<section className="map-section-only">
  <h2 className="map-heading">Our Location</h2>

  <div className="map-container">
    <iframe
      title="Praxsol Engineering Private Limited"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.652137679755!2d83.30472657472516!3d17.72665349343278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0be00a67c1%3A0xc12eb4ff8e51df0d!2sPraxsol%20Engineering%20Private%20Limited!5e0!3m2!1sen!2sin!4v1701255900000!5m2!1sen!2sin"
      width="100%"
      height="500"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>

    </>
  );
};

export default Contact;
