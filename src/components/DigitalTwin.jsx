// src/components/DigitalTwin.jsx
import React from "react";
import styles from "./digitaltwin.module.css";

const services = [
  {
    img: "/aboutus.jpg",
    title: "Real-Time Virtual Replication",
    text: "Create digital replicas of physical assets with live data integration for real-time visibility."
  },
  {
    img: "/aboutus.jpg",
    title: "3D Visualization & Monitoring",
    text: "Provide 3D models to visualize asset behavior, operations, and performance in detail."
  },
  {
    img: "/aboutus.jpg",
    title: "Predictive Maintenance Simulation",
    text: "Run predictive algorithms to identify when failures might occur and optimize maintenance scheduling."
  },
  {
    img: "/aboutus.jpg",
    title: "What-If Scenario Simulation",
    text: "Test operating conditions, load variations, and workflows safely in virtual space."
  },
  {
    img: "/aboutus.jpg",
    title: "Virtual Prototyping & Design Validation",
    text: "Validate new engineering designs before manufacturing to reduce costs and errors."
  },
  {
    img: "/aboutus.jpg",
    title: "Performance Optimization Models",
    text: "Simulate asset performance to remove bottlenecks and improve energy efficiency."
  },
  {
    img: "/aboutus.jpg",
    title: "IoT, AI & Cloud Integration",
    text: "Connect digital twins with IoT sensors and AI analytics for deeper insights."
  },
  {
    img: "/aboutus.jpg",
    title: "Remote Monitoring & Control",
    text: "Monitor and control asset parameters remotely with cloud-based digital twin platforms."
  }
];

const outcomes = [
  { icon: "/aboutus.jpg", text: "Lower engineering and prototyping costs." },
  { icon: "/aboutus.jpg", text: "Faster design validation and innovation cycles." },
  { icon: "/aboutus.jpg", text: "Reduced operational risks using simulation." },
  { icon: "/aboutus.jpg", text: "Improved asset reliability and service continuity." },
  { icon: "/aboutus.jpg", text: "Increased production efficiency." },
  { icon: "/aboutus.jpg", text: "Better energy savings and sustainability improvements." },
  { icon: "/aboutus.jpg", text: "More informed decision-making with digital insights." },
  { icon: "/aboutus.jpg", text: "Real-time visibility and control of critical systems." }
];

function DigitalTwin() {
  return (
    <>
      {/* ===================== SECTION 1 (Hero) - SAME AS APM ===================== */}
      <section className={styles.bgSection}>
        <div className={styles.heroInner}>
          {/* Left: Image */}
          <div className={styles.heroImageWrap}>
            <img
              src="allbranches.png" // put this file in /public
              alt="Digital Twin"
              className={styles.heroImage}
            />
          </div>

          {/* Right: Text */}
          <div className={styles.overlayContent}>
            <h1 className={styles.title}>Digital Twin</h1>
            <p className={styles.desc}>
              Digital Twin technology enables real-time virtual replicas of physical assets, providing insights for
              optimized performance, predictive maintenance, and informed decision-making.
            </p>
            <button className={styles.btn}>Connect with Us</button>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2 (SERVICES) ===================== */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionHeading}>Our Services</h2>
        <p className={styles.sectionSub}>
          Explore our range of digital twin solutions to enhance operational efficiency, reliability, and performance visibility.
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

      {/* ===================== SECTION 4 — WORKFLOW ===================== */}
      <section className={styles.workflowSection}>
        <h2 className={styles.workflowHeading}>Workflow Steps Guide</h2>
        <p className={styles.workflowSub}>
          Five steps ensure structured yet flexible project flow
        </p>

        <div className={styles.workflowGrid}>
          {/* 1 — Set Goals */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.greenTag}`}>Set Goals</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-bullseye"></i>
              </div>
              <p className={styles.workflowText}>
                Clarify the project's overall purpose and establish specific, measurable targets.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#51d06e" }}>01</div>
              <div className={styles.bottomBar} style={{ background: "#51d06e" }}></div>
            </div>
          </div>

          {/* 2 — Plan Iteration */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.cyanTag}`}>Plan Iteration</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-calendar-alt"></i>
              </div>
              <p className={styles.workflowText}>
                Organize short phases with clearly defined, achievable, and realistic objectives.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#31c1bc" }}>02</div>
              <div className={styles.bottomBar} style={{ background: "#31c1bc" }}></div>
            </div>
          </div>

          {/* 3 — Assign Tasks */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.blueTag}`}>Assign Tasks</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-users-cog"></i>
              </div>
              <p className={styles.workflowText}>
                Distribute responsibilities based on expertise and specific roles.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#1780b8" }}>03</div>
              <div className={styles.bottomBar} style={{ background: "#1780b8" }}></div>
            </div>
          </div>

          {/* 4 — Track Progress */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.darkBlueTag}`}>Track Progress</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-chart-line"></i>
              </div>
              <p className={styles.workflowText}>
                Monitor ongoing activities and resolve any emerging blockers.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#016aad" }}>04</div>
              <div className={styles.bottomBar} style={{ background: "#016aad" }}></div>
            </div>
          </div>

          {/* 5 — Evaluate Results */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.navyTag}`}>Evaluate Results</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-search"></i>
              </div>
              <p className={styles.workflowText}>
                Review outcomes regularly to accurately measure progress and alignment.
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

export default DigitalTwin;
