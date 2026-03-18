import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal";

function AboutCTA() {
  const ref = useReveal();

  return (
    <section ref={ref} className="cta-section pop-reveal">
      <div className="cta-content">
        <h2 className="cta-heading">Each One Empowers One</h2>

        <p className="cta-text">
          Join us to collaborate, engineer and build self-reliant
          communities and future-ready businesses driven by innovation.
        </p>

        <Link to="/contact" className="btn-primary">Contact Us</Link>
      </div>
    </section>
  );
}

export default AboutCTA;
