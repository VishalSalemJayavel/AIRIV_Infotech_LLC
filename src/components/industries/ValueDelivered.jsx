import { useReveal } from "../../hooks/useReveal";

const icons = {
  efficiency: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  reliability: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10"/>
      <path d="M12 6v6l4 2"/>
      <path d="M22 2 12 12"/>
      <circle cx="22" cy="2" r="2"/>
    </svg>
  ),
};

function ValueDelivered() {
  const ref = useReveal();

  const values = [
    {
      icon: icons.efficiency,
      title: "Operational Efficiency",
      desc: "Streamlining processes to reduce waste and boost productivity across every business unit.",
    },
    {
      icon: icons.rocket,
      title: "Faster Time-to-Market",
      desc: "Accelerating delivery cycles through agile methodologies and intelligent automation.",
    },
    {
      icon: icons.shield,
      title: "Reduced Technology Risk",
      desc: "Proactive governance, compliance frameworks, and risk mitigation built into every solution.",
    },
    {
      icon: icons.reliability,
      title: "Enhanced System Reliability",
      desc: "Resilient, fault-tolerant architectures designed for enterprise-grade uptime and performance.",
    },
  ];

  return (
    <section ref={ref} className="value-section pop-reveal">
      <div className="value-container">
        <h2 className="value-heading strike-heading">Value Delivered Across Industries</h2>
        <p className="value-subtext">
          Our industry solutions are engineered to deliver measurable, lasting business impact.
        </p>

        <div className="value-grid">
          {values.map((item, index) => (
            <div key={index} className="value-card" style={{ '--stagger': `${index * 130}ms` }}>
              <div className="value-icon">{item.icon}</div>
              <div className="value-card-body">
                <h3 className="value-card-title">{item.title}</h3>
                <p className="value-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueDelivered;
