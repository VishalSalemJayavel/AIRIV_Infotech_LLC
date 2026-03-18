import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal";
import industriesImg from "../../assets/powering/img1.jpg";
import servicesImg from "../../assets/powering/img2.png";
import careersImg from "../../assets/powering/img3.jpg";

function PoweringBusiness() {
  const ref = useReveal();

  const items = [
    {
      image: industriesImg,
      title: "Industries",
      desc: "We support clients across insurance, utilities, healthcare, manufacturing, and technology-driven enterprises.",
      link: "/industries",
    },
    {
      image: servicesImg,
      title: "Services",
      desc: "AI & Data Analytics, Cloud & Application Development, Enterprise Asset Management, QA & Testing, and Talent Services.",
      link: "/services",
    },
    {
      image: careersImg,
      title: "Careers",
      desc: "Join a team of innovators, problem-solvers, and technologists shaping the future of digital solutions.",
      link: "/contact",
    },
  ];

  return (
    <section ref={ref} className="pb-section pop-reveal">
      <h2 className="pb-heading strike-heading">Powering Business With Intelligent Solutions</h2>

      <div className="pb-grid">
        {items.map((item, index) => (
          <div key={index} className="pb-card" style={{ '--stagger': `${index * 150}ms` }}>
            <img src={item.image} alt={item.title} className="pb-image" loading="lazy" />
            <div className="pb-content">
              <h3 className="pb-title">{item.title}</h3>
              <p className="pb-desc">{item.desc}</p>
              <Link to={item.link} className="pb-card-link">Explore →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PoweringBusiness;
