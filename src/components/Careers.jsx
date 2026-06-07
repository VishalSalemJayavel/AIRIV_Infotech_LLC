import { useReveal } from "../hooks/useReveal";
import careersImg from "../assets/career.png";

function Careers() {
  const ref = useReveal();

  return (
    <section ref={ref} className="careers-section pop-reveal">
      <div>
        <img src={careersImg} alt="Careers" className="career-image" loading="lazy" />
      </div>

      <div className="career-content">
        <h2 className="career-heading">Careers</h2>
        <h3 className="career-subheading">Grow Your Career at the Heart of Change</h3>

        <p className="career-text">
          It's your time to shine. Bring your ingenuity, curiosity, and bold
          ideas to a team that values innovation, collaboration, and impact.
        </p>

        <button className="btn-primary">Join Us</button>
      </div>
    </section>
  );
}

export default Careers;
