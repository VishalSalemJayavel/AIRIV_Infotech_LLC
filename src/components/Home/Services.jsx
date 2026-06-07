import { useReveal } from "../../hooks/useReveal";
import s1 from "../../assets/service.svg";
import s2 from "../../assets/service-2.svg";
import s3 from "../../assets/service-3.svg";
import s4 from "../../assets/service-4.svg";
import s5 from "../../assets/service-5.svg";

function Services() {
  const ref = useReveal();

  const items = [
  { title: "Custom Application Development", img: s1 },
  { title: "IT Consulting & Digital Transformation", img: s2 },
  { title: "Enterprise Systems & Asset Solutions", img: s3 },
  { title: "AI, Analytics, IoT & Cloud", img: s4 },
  { title: "Workforce Solutions & Mobility", img: s5 },
];

  return (
    <section ref={ref} id="services" className="services-section pop-reveal">
      <h2 className="services-heading">OUR SERVICES</h2>

      <div className="services-grid">
        {items.map((item, index) => (
          <div key={item.title} className="service-card" style={{ '--stagger': `${index * 100}ms` }}>
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
