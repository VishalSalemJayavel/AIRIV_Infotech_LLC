import { useReveal } from "../../hooks/useReveal";

function ServiceDelivery() {
  const ref = useReveal();

  const steps = [
    {
      title: "Discover & Assess",
      desc: "Understand business objectives and evaluate the current technology landscape to identify transformation opportunities.",
    },
    {
      title: "Design & Architect",
      desc: "Create scalable, secure, and future-ready solution blueprints tailored to enterprise needs.",
    },
    {
      title: "Build & Implement",
      desc: "Develop and deploy solutions with strong governance, agile execution, and operational precision.",
    },
    {
      title: "Optimize & Support",
      desc: "Continuously enhance performance, improve efficiency, and ensure long-term operational resilience.",
    },
  ];

  return (
    <section ref={ref} className="delivery-section pop-reveal">
      <h2 className="delivery-heading strike-heading">Service Delivery Model</h2>

      <p className="delivery-intro">
        Our structured methodology ensures predictable delivery,
        measurable business outcomes, and sustained long-term value creation.
      </p>

      <div className="delivery-grid">
        {steps.map((step, index) => (
          <div key={index} className="delivery-card">
            <div className="delivery-bar"></div>
            <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceDelivery;
