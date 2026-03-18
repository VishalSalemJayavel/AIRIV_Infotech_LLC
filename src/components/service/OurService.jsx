import { useReveal } from "../../hooks/useReveal";
import serviceImg from "../../assets/services/our-service.png";

function OurService() {
  const ref = useReveal();

  return (
    <section ref={ref} className="our-service pop-reveal">
      <div className="service-left">
        <h2 className="service-heading strike-heading strike-left">Our Services</h2>

        <p className="service-lead">
          Delivering technology-enabled solutions that combine innovation,
          operational excellence, and long-term value creation.
        </p>

        <ul className="service-list">
          <li>Business-aligned digital transformation.</li>
          <li>Secure and scalable enterprise solutions.</li>
          <li>Cloud modernization strategies.</li>
          <li>Intelligent automation and analytics.</li>
        </ul>
      </div>

      <div className="service-right">
        <img src={serviceImg} alt="Our Service" className="service-image" loading="lazy" />
      </div>
    </section>
  );
}

export default OurService;
