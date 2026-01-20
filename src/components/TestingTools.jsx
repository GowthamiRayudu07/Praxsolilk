// src/components/TestingTools.jsx
import React from "react";
import styles from "./testingtools.module.css";

const services = [
  {
    icon: "/aboutus.jpg",
    title: "Functional Testing",
    text: "Ensure software functionalities operate as per requirements."
  },
  {
    icon: "/aboutus.jpg",
    title: "Automation Testing",
    text: "Automate repetitive test cases to improve speed and accuracy."
  },
  {
    icon: "/aboutus.jpg",
    title: "Performance & Load Testing",
    text: "Assess software stability, scalability, and endurance."
  },
  {
    icon: "/aboutus.jpg",
    title: "API Testing",
    text: "Verify communication between services and APIs."
  },
  {
    icon: "/aboutus.jpg",
    title: "UI/UX Testing",
    text: "Ensure seamless user experience across devices and platforms."
  },
  {
    icon: "/aboutus.jpg",
    title: "Regression Testing",
    text: "Verify new updates do not break existing functionalities."
  },
  {
    icon: "/aboutus.jpg",
    title: "Continuous Testing in CI/CD",
    text: "Integrate automated testing into DevOps pipelines."
  },
  {
    icon: "/aboutus.jpg",
    title: "Security & Vulnerability Testing",
    text: "Identify security risks and strengthen application protection."
  }
];

const outcomes = [
  { icon: "/aboutus.jpg", text: "High-quality, error-free software" },
  { icon: "/aboutus.jpg", text: "Faster release cycles through automation" },
  { icon: "/aboutus.jpg", text: "Reduced defects in production" },
  { icon: "/aboutus.jpg", text: "Improved software performance" },
  { icon: "/aboutus.jpg", text: "Stable and secure applications" },
  { icon: "/aboutus.jpg", text: "Cost savings through early defect detection" },
  { icon: "/aboutus.jpg", text: "Better user experience & reliability" },
  { icon: "/aboutus.jpg", text: "Higher customer satisfaction and trust" }
];

function TestingTools() {
  return (
    <>
      {/* ===================== SECTION 1 (Hero) - SAME AS APM ===================== */}
      <section className={styles.bgSection}>
        <div className={styles.heroInner}>
          {/* Left: Image */}
          <div className={styles.heroImageWrap}>
            <img
              src="allbranches.png" // put this file in /public
              alt="Testing Tools"
              className={styles.heroImage}
            />
          </div>

          {/* Right: Text */}
          <div className={styles.overlayContent}>
            <h1 className={styles.title}>Testing Tools & Quality Assurance</h1>
            <p className={styles.desc}>
              Ensure reliability, performance, scalability, and security of your software
              with advanced manual and automated testing methodologies.
            </p>
            <button className={styles.btn}>Connect with Us</button>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2 (SERVICES) ===================== */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionHeading}>Our Testing Services</h2>
        <p className={styles.sectionSub}>
          We provide end-to-end testing services to ensure software excellence and
          seamless user experience.
        </p>

        <div className={styles.servicesGrid}>
          {services.map((srv, index) => (
            <div key={index} className={styles.serviceCard}>
              <img src={srv.icon} className={styles.serviceImg} alt="service" />
              <h3>{srv.title}</h3>
              <p>{srv.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SECTION 3 (OUTCOMES) ===================== */}
      <section className={styles.outcomesSection}>
        <h2 className={styles.outcomeHeading}>Outcomes You Get</h2>

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
          Five steps ensure structured yet flexible software testing flow
        </p>

        <div className={styles.workflowGrid}>
          {/* 1 — Requirement Analysis */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.greenTag}`}>
                Requirement Analysis
              </div>
              <div className={styles.iconCircle}>
                <i className="fas fa-bullseye"></i>
              </div>
              <p className={styles.workflowText}>
                Understand testing requirements, scope, risks, and deliverables.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#51d06e" }}>01</div>
              <div className={styles.bottomBar} style={{ background: "#51d06e" }}></div>
            </div>
          </div>

          {/* 2 — Test Planning */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.cyanTag}`}>
                Test Planning
              </div>
              <div className={styles.iconCircle}>
                <i className="fas fa-calendar-alt"></i>
              </div>
              <p className={styles.workflowText}>
                Define test strategy, tools, timelines, and responsibilities.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#31c1bc" }}>02</div>
              <div className={styles.bottomBar} style={{ background: "#31c1bc" }}></div>
            </div>
          </div>

          {/* 3 — Test Development */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.blueTag}`}>
                Test Development
              </div>
              <div className={styles.iconCircle}>
                <i className="fas fa-users-cog"></i>
              </div>
              <p className={styles.workflowText}>
                Prepare test cases, automation scripts, and validation flows.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#1780b8" }}>03</div>
              <div className={styles.bottomBar} style={{ background: "#1780b8" }}></div>
            </div>
          </div>

          {/* 4 — Test Execution */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.darkBlueTag}`}>
                Test Execution
              </div>
              <div className={styles.iconCircle}>
                <i className="fas fa-chart-line"></i>
              </div>
              <p className={styles.workflowText}>
                Run tests, log defects, and track progress.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#016aad" }}>04</div>
              <div className={styles.bottomBar} style={{ background: "#016aad" }}></div>
            </div>
          </div>

          {/* 5 — Reporting & Review */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.navyTag}`}>
                Reporting & Review
              </div>
              <div className={styles.iconCircle}>
                <i className="fas fa-search"></i>
              </div>
              <p className={styles.workflowText}>
                Summarize results, defects, coverage, and provide recommendations.
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

export default TestingTools;
