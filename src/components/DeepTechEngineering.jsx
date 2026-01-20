// src/components/DeepTechEngineering.jsx
import React from "react";
import styles from "./deeptech.module.css";

const services = [
  {
    icon: "/aboutus.jpg",
    title: "Artificial Intelligence Solutions",
    text: "Develop AI algorithms for prediction, automation, and optimization in engineering tasks."
  },
  {
    icon: "/aboutus.jpg",
    title: "Machine Learning Models",
    text: "Implement ML models for defect detection, forecasting, and operational insights."
  },
  {
    icon: "/aboutus.jpg",
    title: "IoT-Driven Engineering Optimization",
    text: "Use sensor data to optimize machine performance and workflow efficiency."
  },
  {
    icon: "/aboutus.jpg",
    title: "Robotics & Automation Systems",
    text: "Deploy advanced robotics for precision manufacturing and repetitive task automation."
  },
  {
    icon: "/aboutus.jpg",
    title: "AR/VR-Based Engineering Solutions",
    text: "Enhance training, maintenance, and visualization using immersive AR/VR tools."
  },
  {
    icon: "/aboutus.jpg",
    title: "Digital Process Optimization",
    text: "Use deep-tech tools to automate and streamline engineering processes."
  },
  {
    icon: "/aboutus.jpg",
    title: "Data Science & Analytics Solutions",
    text: "Analyze industrial data to reduce errors and improve performance."
  },
  {
    icon: "/aboutus.jpg",
    title: "Smart Product Development",
    text: "Leverage deep-tech innovations to build intelligent and connected products."
  }
];

const outcomes = [
  { icon: "/aboutus.jpg", text: "Higher accuracy and reduced human error" },
  { icon: "/aboutus.jpg", text: "Improved operational efficiency" },
  { icon: "/aboutus.jpg", text: "Faster innovation and product development cycles" },
  { icon: "/aboutus.jpg", text: "Enhanced worker safety with AR/VR" },
  { icon: "/aboutus.jpg", text: "Greater automation leading to cost savings" },
  { icon: "/aboutus.jpg", text: "Improved decision-making through AI insights" },
  { icon: "/aboutus.jpg", text: "Optimized production performance" },
  { icon: "/aboutus.jpg", text: "Future-ready engineering solutions" }
];

function DeepTechEngineering() {
  return (
    <>
      {/* ===================== SECTION 1 (Hero) - SAME AS APM ===================== */}
      <section className={styles.bgSection}>
        <div className={styles.heroInner}>
          {/* Left: Image */}
          <div className={styles.heroImageWrap}>
            <img
              src="allbranches.png" // put this file in /public
              alt="DeepTech Engineering"
              className={styles.heroImage}
            />
          </div>

          {/* Right: Text */}
          <div className={styles.overlayContent}>
            <h1 className={styles.title}>DeepTech in Engineering</h1>
            <p className={styles.desc}>
              Integrating AI, robotics, IoT, AR/VR, and analytics to transform engineering
              processes with automation, intelligence, and efficiency.
            </p>
            <button className={styles.btn}>Connect with Us</button>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2 (SERVICES) ===================== */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionHeading}>Our DeepTech Services</h2>
        <p className={styles.sectionSub}>
          Advanced AI, robotics, IoT, AR/VR and analytics solutions tailored for next-gen engineering.
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
        <h2 className={styles.outcomeHeading}>Expected Outcomes</h2>

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
          {/* Step 1 */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.greenTag}`}>Research</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-search"></i>
              </div>
              <p className={styles.workflowText}>
                Understand challenges deeply and identify technology-driven opportunities.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#51d06e" }}>01</div>
              <div className={styles.bottomBar} style={{ background: "#51d06e" }}></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.cyanTag}`}>Prototype</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-cubes"></i>
              </div>
              <p className={styles.workflowText}>
                Build fast prototypes to validate engineering solutions using AI, IoT and robotics.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#31c1bc" }}>02</div>
              <div className={styles.bottomBar} style={{ background: "#31c1bc" }}></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.blueTag}`}>Develop</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-code"></i>
              </div>
              <p className={styles.workflowText}>
                Build scalable deep-tech engineering systems integrating AI, automation and AR/VR.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#1780b8" }}>03</div>
              <div className={styles.bottomBar} style={{ background: "#1780b8" }}></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.darkBlueTag}`}>Deploy</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-cogs"></i>
              </div>
              <p className={styles.workflowText}>
                Implement the engineered solution into real industrial environments.
              </p>
            </div>
            <div className={styles.workflowBottom}>
              <div className={styles.stepNumber} style={{ color: "#016aad" }}>04</div>
              <div className={styles.bottomBar} style={{ background: "#016aad" }}></div>
            </div>
          </div>

          {/* Step 5 */}
          <div className={styles.workflowCard}>
            <div className={styles.workflowTop}>
              <div className={`${styles.hexTag} ${styles.navyTag}`}>Optimize</div>
              <div className={styles.iconCircle}>
                <i className="fas fa-chart-line"></i>
              </div>
              <p className={styles.workflowText}>
                Improve performance continuously using data insights and automation.
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

export default DeepTechEngineering;
