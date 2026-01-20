// src/components/CyberSecurity.jsx
import React from "react";
import styles from "./cybersecurity.module.css";

const services = [
  {
    icon: "🔍",
    title: "Cyber Risk Assessment & Management",
    text: "Identify vulnerabilities in IT/OT systems and create mitigation strategies."
  },
  {
    icon: "🌐",
    title: "Network Security & Segmentation",
    text: "Secure industrial networks, firewalls, and traffic flows."
  },
  {
    icon: "🖥️",
    title: "Endpoint Protection for OT/IT",
    text: "Protect PLCs, HMIs, sensors, servers, and workstations."
  },
  {
    icon: "⚙️",
    title: "ICS / SCADA Security Solutions",
    text: "Secure industrial control systems and prevent cyber threats."
  },
  {
    icon: "🔐",
    title: "Data Security & Encryption",
    text: "Protect sensitive data with encryption and data loss prevention."
  },
  {
    icon: "🧩",
    title: "Identity & Access Management",
    text: "Implement MFA, RBAC, and privileged access management."
  },
  {
    icon: "🛡️",
    title: "Incident Response & Digital Forensics",
    text: "Respond quickly to cyberattacks and identify root causes."
  },
  {
    icon: "📡",
    title: "24/7 SOC & Threat Monitoring",
    text: "Continuous monitoring and threat intelligence to detect attacks early."
  }
];

const outcomes = [
  { icon: "✔️", text: "Strong protection against cyber threats" },
  { icon: "✔️", text: "Reduced risk of data breaches and downtime" },
  { icon: "✔️", text: "Better control over access to sensitive systems" },
  { icon: "✔️", text: "Compliance with global security standards" },
  { icon: "✔️", text: "Faster incident recovery and reduced impact" },
  { icon: "✔️", text: "Improved security posture across OT/IT systems" },
  { icon: "✔️", text: "Continuous protection with proactive monitoring" },
  { icon: "✔️", text: "Increased trust and safety in operations" }
];

function CyberSecurity() {
  return (
    <>
      {/* ===================== SECTION 1 (Hero) - SAME AS APM ===================== */}
      <section className={styles.bgSection}>
        <div className={styles.heroInner}>
          {/* Left: Image */}
          <div className={styles.heroImageWrap}>
            <img
              src="allbranches.png" // put this file in /public
              alt="Cyber Security"
              className={styles.heroImage}
            />
          </div>

          {/* Right: Text */}
          <div className={styles.overlayContent}>
            <h1 className={styles.title}>Cyber Security</h1>
            <p className={styles.desc}>
              Protect your IT & OT environments from cyber threats with advanced
              security systems, proactive monitoring, and rapid incident response.
            </p>
            <button className={styles.btn}>Connect with Us</button>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2 — SERVICES ===================== */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionHeading}>Our Cyber Security Services</h2>
        <p className={styles.sectionSub}>
          We secure industrial operations with advanced protection across IT, OT, SCADA and cloud systems.
        </p>

        <div className={styles.servicesGrid}>
          {services.map((srv, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconCircleLarge}>{srv.icon}</div>
              <h3>{srv.title}</h3>
              <p>{srv.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SECTION 3 — OUTCOMES ===================== */}
      <section className={styles.outcomesSection}>
        <h2 className={styles.outcomeHeading}>Our Outcomes</h2>

        <div className={styles.outcomeGrid}>
          {outcomes.map((out, index) => (
            <div key={index} className={styles.outcomeCard}>
              <div className={styles.outcomeIconText}>{out.icon}</div>
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
          Five steps ensure structured, secure, and reliable cyber protection.
        </p>

        <div className={styles.workflowGrid}>
          {[
            {
              tag: "Identify Risks",
              icon: "⚠️",
              color: "#51d06e",
              text: "Analyze IT/OT vulnerabilities and map attack surfaces.",
              num: "01"
            },
            {
              tag: "Plan Controls",
              icon: "🛡️",
              color: "#31c1bc",
              text: "Build a security strategy with preventive safeguards.",
              num: "02"
            },
            {
              tag: "Implement Security",
              icon: "⚙️",
              color: "#1780b8",
              text: "Deploy firewalls, IAM, encryption, and monitoring tools.",
              num: "03"
            },
            {
              tag: "Monitor & Detect",
              icon: "📡",
              color: "#016aad",
              text: "Track real-time threats through SOC and alert systems.",
              num: "04"
            },
            {
              tag: "Respond & Recover",
              icon: "🔍",
              color: "#001d4a",
              text: "Handle incidents, perform forensics, and strengthen systems.",
              num: "05"
            }
          ].map((step, i) => (
            <div key={i} className={styles.workflowCard}>
              <div className={styles.workflowTop}>
                <div
                  className={styles.hexTag}
                  style={{ background: step.color }}
                >
                  {step.tag}
                </div>

                <div className={styles.iconCircle}>{step.icon}</div>

                <p className={styles.workflowText}>{step.text}</p>
              </div>

              <div className={styles.workflowBottom}>
                <div
                  className={styles.stepNumber}
                  style={{ color: step.color }}
                >
                  {step.num}
                </div>
                <div
                  className={styles.bottomBar}
                  style={{ background: step.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CyberSecurity;
