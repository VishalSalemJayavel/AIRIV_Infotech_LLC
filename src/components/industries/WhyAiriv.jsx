import { useReveal } from "../../hooks/useReveal";

function WhyAiriv() {
  const ref = useReveal();

  const points = [
    "Deep domain expertise across critical industries.",
    "Enterprise-grade governance and delivery models.",
    "Proven track record of scalable transformations.",
    "Commitment to security, compliance, and resilience.",
  ];

  return (
    <section ref={ref} className="why-section pop-reveal">
      <h2 className="why-heading">WHY AIRIV INFOTECH</h2>

      <div className="why-grid">
        {points.map((point, index) => (
          <div key={index} className="why-card" style={{ '--stagger': `${index * 120}ms` }}>
            <p className="why-text">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default WhyAiriv;
