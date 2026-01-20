// src/components/Clients.jsx
import React from "react";
import "./clients.css";

const clientLogos = [
  { name: "Slack", text: "Collaboration & messaging", img: `${process.env.PUBLIC_URL}/cp.png` },
  { name: "Twitter", text: "Real‑time engagement", img: `${process.env.PUBLIC_URL}/cp.png` },
  { name: "Deliveroo", text: "On‑demand logistics", img: `${process.env.PUBLIC_URL}/cp.png` },
  { name: "Coinbase", text: "Digital asset platform", img: `${process.env.PUBLIC_URL}/cp.png` },
  { name: "Zoom", text: "Video collaboration", img: `${process.env.PUBLIC_URL}/cp.png` },
  { name: "Dropbox", text: "Cloud file sharing", img: `${process.env.PUBLIC_URL}/cp.png` },
];

const Clients = () => (
  <section className="clients-page">
    {/* Top image */}
    <div className="clients-hero">
      <img
        src={`${process.env.PUBLIC_URL}/client.jpg`}
        alt="City skyline"
      />
    </div>

    {/* Text block */}
   <div className="clients-text">
  <h2>Our Clients</h2>
  <p>
    We are proud to be the trusted partner for a diverse range of forward-thinking
    businesses across multiple industries. From emerging startups to established
    enterprises, our clients rely on us for dependable engineering, innovative
    digital solutions, and long-term technological support. Over the years, we
    have built strong relationships rooted in transparency, quality, and
    consistent results.
  </p>

  <p>
    These organizations choose to work with us because we help them transform
    ideas into real-world products—designed with precision, built with modern
    technology, and scaled to support sustained growth. Their success stories
    reflect our commitment to excellence, and we continue to collaborate closely
    with every client to drive performance, accelerate innovation, and create
    meaningful impact in their industries.
  </p>
</div>


    {/* Logo cards */}
     <div className="clients-grid">
      {clientLogos.map((c) => (
        <div key={c.name} className="client-card">
          <img src={c.img} alt={c.name} />
          <div className="client-overlay">
            <h3>{c.name}</h3>
            <p>{c.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
