import { useState, useEffect } from "react";
import { useReveal } from "../../hooks/useReveal";
import img1 from "../../assets/services/img1.jpg";
import img2 from "../../assets/services/img2.jpg";
import img3 from "../../assets/services/img3.jpg";
import img4 from "../../assets/services/img4.jpg";
import img5 from "../../assets/services/img5.jpg";

const services = [
  {
    image: img1,
    title: "AI & Data Analytics",
    desc: "Transforming raw data into intelligent insights that power smarter business decisions.",
  },
  {
    image: img2,
    title: "Cloud & App Development",
    desc: "Scalable cloud-native applications built for performance, security, and growth.",
  },
  {
    image: img3,
    title: "Enterprise Asset Management",
    desc: "Optimizing asset lifecycles with intelligent monitoring and predictive maintenance.",
  },
  {
    image: img4,
    title: "QA & Testing",
    desc: "Ensuring reliability, performance, and security across every layer of your product.",
  },
  {
    image: img5,
    title: "Talent Services",
    desc: "Connecting enterprises with skilled technology professionals to accelerate delivery.",
  },
];

function ServicesCarousel() {
  const ref = useReveal();
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth <= 768) setVisibleCards(1);
      else if (window.innerWidth <= 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const cardWidth = 100 / visibleCards;
  const next = () => { if (index < services.length - visibleCards) setIndex(index + 1); };
  const prev = () => { if (index > 0) setIndex(index - 1); };

  return (
    <section ref={ref} className="services-carousel pop-reveal">
      <div className="services-wrapper">
        <button onClick={prev} className="carousel-btn">‹</button>

        <div className="slider">
          <div
            className="inner"
            style={{ transform: `translateX(-${index * cardWidth}%)` }}
          >
            {services.map((svc, i) => (
              <div key={i} className="svc-card-wrap" style={{ flex: `0 0 ${cardWidth}%` }}>
                <div className="svc-card">
                  <img src={svc.image} alt={svc.title} loading="lazy" />
                  <div className="svc-content">
                    <h3 className="svc-title">{svc.title}</h3>
                    <p className="svc-desc">{svc.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={next} className="carousel-btn">›</button>
      </div>
    </section>
  );
}

export default ServicesCarousel;
