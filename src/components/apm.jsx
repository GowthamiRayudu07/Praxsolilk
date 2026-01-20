// src/components/APM.jsx
import React from "react";
import styles from "./apmStyles.module.css";

const services = [
  {
    img: "/aboutus.jpg",
    title: "Real-Time Condition Monitoring",
    text: "Track asset health through vibration, temperature, and performance data."
  },
  {
    img: "/aboutus.jpg",
    title: "Predictive Maintenance",
    text: "AI-based analytics to predict failures and schedule maintenance."
  },
  {
    img: "/aboutus.jpg",
    title: "Asset Health Scoring",
    text: "Health index calculation based on risk and performance."
  },
  {
    img: "/aboutus.jpg",
    title: "Advanced Diagnostics",
    text: "Fault detection using vibration, thermography, and acoustic analysis."
  },
  {
    img: "/aboutus.jpg",
    title: "KPI Dashboards",
    text: "OEE, MTBF, downtime insights with real-time dashboards."
  },
  {
    img: "/aboutus.jpg",
    title: "SCADA/ERP/CMMS Integration",
    text: "Seamless asset data flow between industrial systems."
  },
  {
    img: "/aboutus.jpg",
    title: "Remote Monitoring",
    text: "Monitor assets remotely with mobile alerts."
  },
  {
    img: "/aboutus.jpg",
    title: "Lifecycle & Warranty Management",
    text: "Track asset lifecycle from installation to replacement."
  }
];

const outcomes = [
  { icon: "/aboutus.jpg", text: "Reduced unplanned downtime" },
  { icon: "/aboutus.jpg", text: "Lower maintenance & operational cost" },
  { icon: "/aboutus.jpg", text: "Improved asset reliability" },
  { icon: "/aboutus.jpg", text: "Longer equipment lifespan" },
  { icon: "/aboutus.jpg", text: "Faster decision-making" },
  { icon: "/aboutus.jpg", text: "Higher operational safety" },
  { icon: "/aboutus.jpg", text: "Increased productivity" },
  { icon: "/aboutus.jpg", text: "Full visibility across plant assets" }
  
];

function APM() {
  return (
    <>
     {/* ===================== SECTION 1 (Hero) ===================== */}
<section className={styles.bgSection}>
  <div className={styles.heroInner}>
    {/* Left: Image */}
    <div className={styles.heroImageWrap}>
      <img
        src="allbranches.png" // put this file in /public
        alt="Asset Performance Monitoring"
        className={styles.heroImage}
      />
    </div>

    {/* Right: Text */}
    <div className={styles.overlayContent}>
      <h1 className={styles.title}>Asset Performance Monitoring</h1>
      <p className={styles.desc}>
        Asset Performance Monitoring helps industries track equipment
        health, analyze performance data, predict failures, and reduce
        downtime.
      </p>
      <button className={styles.btn}>Connect with Us</button>
    </div>
  </div>
</section>

      {/* ===================== SECTION 2 (Services) ===================== */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionHeading}>Our Services</h2>
        <p className={styles.sectionSub}>
          We provide advanced monitoring, diagnostics, predictive maintenance and
          lifecycle management solutions to maximize asset performance.
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

      {/* ===================== SECTION 3 (Outcomes) ===================== */}
      <section className={styles.outcomesSection}>
        <h2 className={styles.outcomeHeading}>Our Outcomes</h2>

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

      {/* ===================== SECTION 4 (Workflow Steps) ===================== */}
      <section className={styles.workflowSection}>
        <h2 className={styles.workflowHeading}>Workflow Steps Guide</h2>
        <p className={styles.workflowSub}>
          Five steps ensure structured yet flexible project flow
        </p>

        <div className={styles.workflowGrid}>
          {/* 1 — Set Goals */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.greenTag}`}>
                Set Goals
              </div>
              <div className={styles.iconCircle}>
                <i className="fas fa-bullseye"></i>
              </div>
              <p className={styles.workflowText}>
                Clarify the project's overall purpose and establish specific,
                measurable targets.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#51d06e" }}>
                01
              </div>
              <div
                className={styles.bottomBar}
                style={{ background: "#51d06e" }}
              ></div>
            </div>
          </div>

          {/* 2 — Plan Iteration */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.cyanTag}`}>
                Plan Iteration
              </div>
              <div className={styles.iconCircle}>
                <i className="fas fa-calendar-alt"></i>
              </div>
              <p className={styles.workflowText}>
                Organize short phases with clearly defined, achievable, and
                realistic objectives.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#31c1bc" }}>
                02
              </div>
              <div
                className={styles.bottomBar}
                style={{ background: "#31c1bc" }}
              ></div>
            </div>
          </div>

          {/* 3 — Assign Tasks */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.blueTag}`}>
                Assign Tasks
              </div>
              <div className={styles.iconCircle}>
                <i className="fas fa-users-cog"></i>
              </div>
              <p className={styles.workflowText}>
                Distribute responsibilities based on expertise and specific
                roles.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#1780b8" }}>
                03
              </div>
              <div
                className={styles.bottomBar}
                style={{ background: "#1780b8" }}
              ></div>
            </div>
          </div>

          {/* 4 — Track Progress */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.darkBlueTag}`}>
                Track Progress
              </div>
              <div className={styles.iconCircle}>
                <i className="fas fa-chart-line"></i>
              </div>
              <p className={styles.workflowText}>
                Monitor ongoing activities and resolve any emerging blockers.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#016aad" }}>
                04
              </div>
              <div
                className={styles.bottomBar}
                style={{ background: "#016aad" }}
              ></div>
            </div>
          </div>

          {/* 5 — Evaluate Results */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.navyTag}`}>
                Evaluate Results
              </div>
              <div className={styles.iconCircle}>
                <i className="fas fa-search"></i>
              </div>
              <p className={styles.workflowText}>
                Review outcomes regularly to accurately measure progress and
                alignment.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#001d4a" }}>
                05
              </div>
              <div
                className={styles.bottomBar}
                style={{ background: "#001d4a" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default APM;
