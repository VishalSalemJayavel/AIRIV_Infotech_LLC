import { useReveal } from "../../hooks/useReveal";
import introImg from "../../assets/industries/industries serve.png";

function IndustriesIntro() {
  const ref = useReveal();

  return (
    <section ref={ref} className="industries-intro pop-reveal">
      <div className="intro-left">
        <h2 className="intro-heading strike-heading strike-left">Industries We Serve</h2>

        <p className="intro-text">
          We provide industry-focused solutions that help organizations
          navigate complexity, modernize operations, and unlock long-term
          value.
        </p>

        <p className="intro-text">
          Our expertise spans infrastructure, utilities, manufacturing,
          and public-sector environments.
        </p>
      </div>

      <div className="intro-right">
        <img src={introImg} alt="Industries" className="intro-image" loading="lazy" />
      </div>
    </section>
  );
}

export default IndustriesIntro;
