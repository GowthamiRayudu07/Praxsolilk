// src/components/IIOT.jsx
import React from "react";
import styles from "./industriot.module.css";

const services = [
  {
    img: "/aboutus.jpg",
    title: "IIoT Strategy & Roadmap Development",
    text: "Build a structured strategy aligning IIoT adoption with business goals and measurable ROI."
  },
  {
    img: "/aboutus.jpg",
    title: "Smart Sensor Deployment",
    text: "Install industrial sensors for vibration, temperature, humidity, and energy monitoring."
  },
  {
    img: "/aboutus.jpg",
    title: "Edge Computing Solutions",
    text: "Enable high-speed local data processing to reduce cloud dependency and latency."
  },
  {
    img: "/aboutus.jpg",
    title: "Real-Time Data Acquisition Systems",
    text: "Capture and process production and machine data in real time."
  },
  {
    img: "/aboutus.jpg",
    title: "Predictive Analytics & Anomaly Detection",
    text: "Use AI/ML models to detect anomalies early and prevent equipment failures."
  },
  {
    img: "/aboutus.jpg",
    title: "Industrial Automation & Robotics Integration",
    text: "Integrate automation systems and robotics for smart, efficient manufacturing."
  },
  {
    img: "/aboutus.jpg",
    title: "Cloud & Hybrid Connectivity",
    text: "Connect industrial machines to secure cloud platforms for scalable analytics."
  },
  {
    img: "/aboutus.jpg",
    title: "OT/IT Cybersecurity for IIoT Systems",
    text: "Ensure safe communication between IT and OT systems with secure protocols."
  }
];

const outcomes = [
  { icon: "/aboutus.jpg", text: "Real-time visibility across production lines" },
  { icon: "/aboutus.jpg", text: "Reduced downtime and optimized performance" },
  { icon: "/aboutus.jpg", text: "Improved product quality and consistency" },
  { icon: "/aboutus.jpg", text: "Lower operational and energy costs" },
  { icon: "/aboutus.jpg", text: "Better safety and compliance in industrial systems" },
  { icon: "/aboutus.jpg", text: "Faster problem detection and resolution" },
  { icon: "/aboutus.jpg", text: "More efficient resource and supply chain management" },
  { icon: "/aboutus.jpg", text: "Scalable IIoT infrastructure for future growth" }
];

function IIOT() {
  return (
    <>
      {/* ===================== SECTION 1 (Hero) - SAME AS APM ===================== */}
      <section className={styles.bgSection}>
        <div className={styles.heroInner}>
          {/* Left: Image */}
          <div className={styles.heroImageWrap}>
            <img
              src="allbranches.png" // put this file in /public
              alt="Industrial IoT"
              className={styles.heroImage}
            />
          </div>

          {/* Right: Text */}
          <div className={styles.overlayContent}>
            <h1 className={styles.title}>Industrial IoT (IIoT)</h1>
            <p className={styles.desc}>
              Industrial IoT enables real-time data collection, analytics, automation,
              and smart manufacturing by connecting machines, sensors, and systems.
            </p>
            <button className={styles.btn}>Connect with Us</button>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2 (SERVICES) ===================== */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionHeading}>Our IIoT Services</h2>
        <p className={styles.sectionSub}>
          We help industries adopt smart, connected, automated manufacturing
          using IIoT sensors, analytics, and real-time systems.
        </p>

        <div className={styles.servicesGrid}>
          {services.map((srv, index) => (
            <div key={index} className={styles.serviceCard}>
              <img src={srv.img} className={styles.serviceImg} alt="icon" />
              <h3>{srv.title}</h3>
              <p>{srv.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SECTION 3 (OUTCOMES) ===================== */}
      <section className={styles.outcomesSection}>
        <h2 className={styles.outcomeHeading}>IIoT Outcomes</h2>

        <div className={styles.outcomeGrid}>
          {outcomes.map((out, index) => (
            <div key={index} className={styles.outcomeCard}>
              <img src={out.icon} className={styles.outcomeIcon} alt="outcome" />
              <div className={styles.verticalLine}></div>
              <p className={styles.outcomeText}>{out.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SECTION 4 — WORKFLOW ===================== */}
      <section className={styles.workflowSection}>
        <h2 className={styles.workflowHeading}>Workflow Steps Guide</h2>
        <p className={styles.workflowSub}>
          Five steps ensure structured yet flexible project flow
        </p>

        <div className={styles.workflowGrid}>
          {/* 1 */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.greenTag}`}>Set Goals</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-bullseye"></i>
              </div>
              <p className={styles.workflowText}>
                Define manufacturing goals and identify areas to digitize using IIoT.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#51d06e" }}>01</div>
              <div className={styles.bottomBar} style={{ background: "#51d06e" }}></div>
            </div>
          </div>

          {/* 2 */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.cyanTag}`}>Plan Iteration</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-calendar-alt"></i>
              </div>
              <p className={styles.workflowText}>
                Identify sensors, connectivity layers, analytics models required for deployment.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#31c1bc" }}>02</div>
              <div className={styles.bottomBar} style={{ background: "#31c1bc" }}></div>
            </div>
          </div>

          {/* 3 */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.blueTag}`}>Assign Tasks</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-users-cog"></i>
              </div>
              <p className={styles.workflowText}>
                Allocate work across IoT engineers, networking experts, and automation teams.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#1780b8" }}>03</div>
              <div className={styles.bottomBar} style={{ background: "#1780b8" }}></div>
            </div>
          </div>

          {/* 4 */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.darkBlueTag}`}>Track Progress</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-chart-line"></i>
              </div>
              <p className={styles.workflowText}>
                Track connected device status, anomalies, and data flow during deployment.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#016aad" }}>04</div>
              <div className={styles.bottomBar} style={{ background: "#016aad" }}></div>
            </div>
          </div>

          {/* 5 */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.navyTag}`}>Evaluate Results</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-search"></i>
              </div>
              <p className={styles.workflowText}>
                Analyze IIoT impact: downtime reduction, performance gains, and ROI.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#001d4a" }}>05</div>
              <div className={styles.bottomBar} style={{ background: "#001d4a" }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IIOT;
