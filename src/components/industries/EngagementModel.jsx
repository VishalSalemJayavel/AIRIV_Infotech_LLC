import { useReveal } from "../../hooks/useReveal";

function EngagementModel() {
  const ref = useReveal();

  const items = [
    "Collaborative discovery with business and IT stakeholders.",
    "Flexible delivery models (project-based or long-term support).",
    "Agile execution with enterprise-grade governance.",
    "Continuous improvement post-deployment.",
  ];

  return (
    <section ref={ref} className="eng-section pop-reveal">
      <div className="eng-container">
        <h2 className="eng-heading strike-heading strike-left">
          Our Industry Engagement Model
        </h2>

        <p className="eng-intro">
          We adapt our delivery model to align with each industry's pace,
          risk profile, and transformation goals.
        </p>

        <div className="eng-grid">
          {items.map((text, index) => (
            <div key={index} className="eng-card" style={{ '--stagger': `${index * 150}ms` }}>
              <div className="eng-card-content">
                <span className="eng-item-number">0{index + 1}</span>
                <p className="eng-card-text">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngagementModel;
