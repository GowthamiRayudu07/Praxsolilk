import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";


const About = () => {
  const navigate = useNavigate();
  return(

  <>
    {/* First section remains unchanged */}
    <div
      className="about-hero"
      style={{ backgroundImage: "url('/aboutus.jpg')" }}
    >
      <div className="about-hero-overlay">
        <h1 className="about-hero-title">Get to know us</h1>
        <p className="about-hero-text">
          Learn more about our journey, our values, and how we work to deliver the best solutions for you.
        </p>
 <button
            className="about-hero-button"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>      </div>
    </div>

    {/* Second section redesigned */}
    <section className="about-company-section">
      <div className="company-content">
        <img
          src="/cutcut.png" // put your image in public as image.jpg
          alt="Company"
          className="company-image"
        />
        <div className="company-main-right">
          <h2 className="company-main-heading">About Our Company</h2>
          <div className="company-main-text">
            <p>
              Our company delivers innovative technology solutions that help industries improve efficiency and performance. We specialize in Asset Performance Monitoring, Digital Twin, Cloud Computing, and advanced Testing Tools. With strong expertise in DeepTech engineering and Industrial IoT (IIoT), we connect systems, data, and processes to enable smarter operations. Our end-to-end services empower clients with better insights, higher reliability, and sustainable growth.
            </p>
          </div>
         <div className="company-main-badges">
  <div className="main-badge-card">
    <span className="badge-number">20+</span>
    <span className="badge-label">Years of Experience</span>
  </div>
  <div className="main-badge-card">
    <span className="badge-number">10+</span>
    <span className="badge-label">Projects</span>
  </div>
  <div className="main-badge-card">
    <span className="badge-number">50+</span>
    <span className="badge-label">Employees</span>
  </div>
</div>

        </div>
      </div>
    </section>

   {/* --- Team Section Updated Like Your First Screenshot --- */}
<section className="team-section">
  <h2 className="team-heading">Our Perfect Team</h2>

  <div className="team-row-horizontal">
    {/* Member 1 */}
    <div className="team-member-horizontal">
      <img src="/directorps.jpg" className="team-avatar-big" alt="Jeffrey Brown" />

      <div className="team-info">
        <h3 className="team-name">SATYA</h3>
        <p className="team-role leader">creative leader</p>
        <p className="team-text">
          Sample text. Click to select the text box. Click again or double-click to start editing the text.
        </p>
      </div>
    </div>

    {/* Member 2 */}
    <div className="team-member-horizontal">
      <img src="/directorps.jpg" className="team-avatar-big" alt="Ann Richmond" />

      <div className="team-info">
        <h3 className="team-name">SATYA</h3>
        <p className="team-role manager">manager</p>
        <p className="team-text">
          Sample text. Click to select the text box. Click again or double-click to start editing the text.
        </p>
      </div>
    </div>
  </div>

  <div className="team-row-horizontal">
    {/* Member 3 */}
    <div className="team-member-horizontal">
      <img src="/directorps.jpg"  className="team-avatar-big" alt="Alex Grinfield" />

      <div className="team-info">
        <h3 className="team-name">SATYA</h3>
        <p className="team-role guru">programming guru</p>
        <p className="team-text">
          Sample text. Click to select the text box. Click again or double-click to start editing the text.
        </p>
      </div>
    </div>

    {/* Member 4 */}
    <div className="team-member-horizontal">
      <img src="/directorps.jpg"  className="team-avatar-big" alt="Roxie Swanson" />

      <div className="team-info">
        <h3 className="team-name">SATYA</h3>
        <p className="team-role sales">Sales Manager</p>
        <p className="team-text">
          Sample text. Click to select the text box. Click again or double-click to start editing the text.
        </p>
      </div>
    </div>
  </div>
</section>

{/* ---------------- NEW OBJECTIVE SECTION ---------------- */}
<section className="objective-section">
  <div className="objective-container">

    {/* LEFT SIDE TEXT */}
    <div className="objective-left">
      <h2 className="objective-title">Our Objective</h2>
      <p className="objective-desc">
        Our objective is to provide our clients with an assured experience when we 
        are chosen to execute their projects. Our commitments to client’s objectives 
        are top priority in the execution of all our works.
        <br /><br />
        We take pride in our delivery; thus our clients can always be assured that 
        only the most experienced and qualified people are serving them.
      </p>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="objective-right">
      <img src="/kop.png" alt="Objective" className="objective-image" />
    </div>
  </div>

  {/* ------ TWO HORIZONTAL CARDS ------ */}
  <div className="objective-cards">

    <div className="objective-card">
      <div className="card-icon">📌</div>
      <div>
        <h3 className="card-title">Quality Commitment</h3>
        <p className="card-text">
          We always ensure our projects meet the highest standards with 
          quality-driven execution.
        </p>
      </div>
    </div>

    <div className="objective-card">
      <div className="card-icon">🎯</div>
      <div>
        <h3 className="card-title">Client Satisfaction</h3>
        <p className="card-text">
          Our team focuses on delivering solutions that exceed client expectations 
          through expertise and dedication.
        </p>
      </div>
    </div>

  </div>

</section>




  </>
);
};

export default About;
