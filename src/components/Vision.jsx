import React from "react";
import "./vision.css";
import { FaCheckCircle, FaHandshake, FaEye, FaUserTie, FaShieldAlt, FaLightbulb } from "react-icons/fa";

const Vision = () => {
  return (
    <>
      <section className="vision-wrapper">
        {/* LEFT SECTION */}
        <div className="vision-left">
          <div className="vision-left-top">
            <div className="vision-icon-circle">
  <FaLightbulb className="vision-bulb-icon" />
</div>


            <div className="vision-text-block">
              <h2 className="vision-main-heading">OUR VISION</h2>
              <p className="vision-subtext">
                We bring innovation, growth, and excellence into every project.
              </p>
            </div>
          </div>

          <p className="vision-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ante id
            nisi iaculis pulvinar sit amet eu nulla. Nulla id posuere sapien.
            Vestibulum id rutrum diam. Vestibulum turpis justo, accumsan et egestas
            ac, varius ac quam.
          </p>

          <div className="vision-points">
            <div className="vision-point">
              <div className="icon-circle-small">💡</div>
              <p className="point-label">Our Vision</p>
            </div>

            <div className="vision-point">
              <div className="icon-circle-small">🎯</div>
              <p className="point-label">Our Objective</p>
            </div>

            <div className="vision-point">
              <div className="icon-circle-small">🚀</div>
              <p className="point-label">Our Mission</p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="vision-right">
          <img
            src="/ourvision.png"
            alt="Vision Illustration"
            className="vision-illustration"
          />
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="core-values-section">
        <h2 className="core-values-title">Our Core Values</h2>

        <div className="core-values-grid">
          <div className="core-value-card">
            <div className="core-value-icon">
              <FaCheckCircle />
            </div>
            <h3 className="core-value-heading">Quality</h3>
            <p className="core-value-text">
              We believe in delivering high quality services with a focus on customer excellence and reliable security results.
            </p>
          </div>

          <div className="core-value-card">
            <div className="core-value-icon">
              <FaHandshake />
            </div>
            <h3 className="core-value-heading">Integrity</h3>
            <p className="core-value-text">
              We maintain the highest ethical standards and strive to create trustworthiness in our relationships.
            </p>
          </div>

          <div className="core-value-card">
            <div className="core-value-icon">
              <FaEye />
            </div>
            <h3 className="core-value-heading">Transparency</h3>
            <p className="core-value-text">
              We are committed to providing our customers with clear, concise and accurate information about our services.
            </p>
          </div>

          <div className="core-value-card">
            <div className="core-value-icon">
              <FaUserTie />
            </div>
            <h3 className="core-value-heading">Professionalism</h3>
            <p className="core-value-text">
              We strive to develop our expertise through continuous learning and keeping up with the latest security trends.
            </p>
          </div>

          <div className="core-value-card">
            <div className="core-value-icon">
              <FaShieldAlt />
            </div>
            <h3 className="core-value-heading">Reliability</h3>
            <p className="core-value-text">
              We always follow through on our commitments and stand by our promises.
            </p>
          </div>

          <div className="core-value-card">
            <div className="core-value-icon">
              <FaLightbulb />
            </div>
            <h3 className="core-value-heading">Innovation</h3>
            <p className="core-value-text">
              We embrace new ideas and technologies to provide tailored security services to meet our customers’ needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
