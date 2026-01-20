import React from "react";
import "./interface.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";



// ✅ Reusable ServiceCard component
function ServiceCard({ icon, heading, text, link }) {
  return (
    <div className="service-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-heading">{heading}</h3>
      <p className="card-text">{text}</p>

      <Link to={link} className="card-btn">
        Know More
      </Link>
    </div>
  );
}

function Interface() {
  const navigate = useNavigate(); // 👈 add this

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));
  }, []);




  return (
    
    <>
      {/* ===== Hero / Landing Section ===== */}
      <div className="interface-container">
  <div className="left-section slide-left">
    <img
      src={`${process.env.PUBLIC_URL}/Praxsol_Innologikodes.png`}
      alt="Praxsol Innologikodes"
      className="hero-image"
    />
  </div>

        {/* Right Section → Text + Button */}
        <div className="right-section slide-right">
          <h1 className="animated-title">
            <span>P</span>
            <span>R</span>
            <span>A</span>
            <span>X</span>
            <span>S</span>
            <span>O</span>
            <span>L</span>
            &nbsp;
            <span>I</span>
            <span>N</span>
            <span>N</span>
            <span>O</span>
            <span>L</span>
            <span>O</span>
            <span>G</span>
            <span>I</span>
            <span>K</span>
            <span>O</span>
            <span>D</span>
            <span>E</span>
            <span>S</span>
          </h1>
          <p>
            Empowering industries through innovation and technology — delivering
            engineering excellence, smart solutions, and sustainable growth.
          </p>
<button
  className="contact-btn"
  onClick={() => navigate("/contact")} // 👈 your contact route path
>
  Contact Us
</button>
        </div>
      </div>

      {/* ===== Director Section (Below Hero) ===== */}
      <section className="director-section">
        {/* Left side - Director Image + Experience Badge */}
        <div className="director-left">
          <div className="experience-badge">
            <h2>20+</h2>
            <p>Years of Experience</p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/directorps.jpg`}
            alt="Mr. Satya"
            className="director-image"
          />
        </div>

        {/* Right side - Text Info */}
        <div className="director-right">
          <h2>MEET OUR FOUNDER</h2>
          <h1>Mr. Satya</h1>
          <h3>Founder & Director, Praxsol Innologikodes</h3>
          <p>
            Mr. Satya, Founder Director of Praxsol Engineering, has worked for
            over <b>24 years</b> with international companies providing Design &
            Engineering and R&D services. His passion drives innovation and
            creativity at workplaces through applications of Artificial
            Intelligence, Industrial Internet of Things, and rapid prototyping
            via 3D Printing — introduced in R&D services with Tech Labs to
            support advancing companies.
          </p>
          <p>
            He has rich experience in value-based product development, plant
            engineering services, customization, downstream engineering, and
            virtual engineering. Throughout his mechanical engineering career,
            he has been associated with various multinational companies across
            Singapore, USA, UK, Germany, Netherlands, and India.
          </p>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="services-section">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          Delivering smart, secure, and scalable engineering solutions for a
          digital future.
        </p>

        <div className="services-grid">
  <ServiceCard
    icon={<i className="fas fa-chart-line"></i>}
    heading="Asset Performance Monitoring"
    text="Enhance operational efficiency with real-time analytics and predictive maintenance insights."
    link="/service-asset-monitoring"
  />

  <ServiceCard
    icon={<i className="fas fa-network-wired"></i>}
    heading="Industrial IoT"
    text="Connect and optimize industrial assets with seamless IIoT automation and integration."
    link="/service-industrial-iot"
  />

  <ServiceCard
    icon={<i className="fas fa-shield-alt"></i>}
    heading="Cyber Security"
    text="Safeguard critical systems with advanced cybersecurity, monitoring, and threat intelligence."
    link="/service-cyber-security"
  />

  <ServiceCard
    icon={<i className="fas fa-vial"></i>}
    heading="Testing Tools"
    text="Ensure superior product quality through robust automated and manual testing tools."
    link="/service-testing-tools"
  />

  <ServiceCard
    icon={<i className="fas fa-robot"></i>}
    heading="Deeptech in Engineering"
    text="Integrate AI, ML, and advanced engineering expertise for next-gen product innovation."
    link="/service-deeptech"
  />

  <ServiceCard
    icon={<i className="fas fa-cubes"></i>}
    heading="Digital Twin"
    text="Create digital replicas of physical systems for simulation, optimization, and lifecycle management."
    link="/service-digital-twin"
  />
</div>

      </section>

      {/* ===== Engagement Models Section ===== */}
      <section className="engagement-models-section">
        <h2 className="engagement-title">Engagement Models</h2>
        <div className="engagement-cards-row">
          <div className="engagement-card card-left">
            <h3>Fixed-Budget</h3>
            <p>
              Our agreement on the fixed budget and SOW on the project. We tie
              payments to milestones.
            </p>
          </div>
          <div className="engagement-card card-center">
            <h3>Time & Material</h3>
            <p>
              We charge according to team size and development progress. The
              recommended option for flexible projects.
            </p>
          </div>
          <div className="engagement-card card-right">
            <h3>Full-time Resource</h3>
            <p>
              Appointment of full-time resources with hourly charge and a fixed
              total budget spend.
            </p>
          </div>
        </div>
      </section>


      
{/* ===== Assurance Section ===== */}
<section
  className="assurance-section"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/shakehands.jpg)`,
  }}
>
  <div className="assurance-overlay">
    <div className="assurance-content">
      <div className="assurance-text">
        <h2>
          Our clients can always be assured that only the<br />
          most experienced and qualified people are serving<br />
          them.
        </h2>
      </div>

      <div className="assurance-cards">
        <div className="assurance-card">
          <div className="card-icon-circle">
            <i className="fas fa-bullseye"></i>
          </div>
          <h3>Our Objective</h3>
          <p>
            Our objective is to provide our clients with an assured
            experience when we are chosen to execute their projects.
          </p>
        </div>

        <div className="assurance-card">
          <div className="card-icon-circle">
            <i className="fas fa-eye"></i>
          </div>
          <h3>Our Vision</h3>
          <p>To be a respectable and reliable contractor.</p>
        </div>

        <div className="assurance-card">
          <div className="card-icon-circle">
            <i className="fas fa-flag-checkered"></i>
          </div>
          <h3>Our Mission</h3>
          <p>
            Deliver quality work within reasonable time frame and provide safe
            working conditions.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>





{/* ===== WHY CHOOSE US SECTION ===== */}
<section className="why-choose-outline">
  <div className="why-choose-box">
    <div className="why-choose-img-wrap">
      <img
        src={`${process.env.PUBLIC_URL}/questionmark.jpg`}
        alt="Why Choose Us"
        className="why-choose-img"
      />
    </div>

    <h2 className="why-choose-title">Why choose us</h2>

    <div className="why-choose-columns">
      <div className="why-choose-col">
        <div className="why-choose-item reveal reveal-delay-1">
          <span className="num-badge">1</span> Proven Industry Expertise
        </div>

        <div className="why-choose-item reveal reveal-delay-2">
          <span className="num-badge">2</span> Innovative Technology Integration
        </div>

        <div className="why-choose-item reveal reveal-delay-3">
          <span className="num-badge">3</span> Customized for Every Client
        </div>
      </div>

      <div className="why-choose-col">
        <div className="why-choose-item reveal reveal-delay-4">
          <span className="num-badge">4</span> Rapid Prototyping to Deployment
        </div>

        <div className="why-choose-item reveal reveal-delay-5">
          <span className="num-badge">5</span> End-to-End Project Ownership
        </div>

        <div className="why-choose-item reveal reveal-delay-6">
          <span className="num-badge">6</span> Commitment to Continuous Innovation
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  );
}

export default Interface;
