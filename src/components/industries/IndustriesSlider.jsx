import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import slide1 from "../../assets/industries/insurance.jpg";
import slide2 from "../../assets/industries/utilities.jpg";
import slide3 from "../../assets/industries/healthcare.jpg";
import slide4 from "../../assets/industries/manufacturing.jpg";
import slide5 from "../../assets/industries/tech.jpg";

function IndustriesSlider() {
  const slides = [
    {
      image: slide1,
      title: "Insurance",
      desc: "Driving digital transformation for insurers through data modernization, risk analytics, and intelligent automation.",
    },
    {
      image: slide2,
      title: "Utilities",
      desc: "Optimizing asset performance, grid reliability, and operational efficiency across energy ecosystems.",
    },
    {
      image: slide3,
      title: "Healthcare",
      desc: "Enhancing patient experience, compliance, and system interoperability through secure digital platforms.",
    },
    {
      image: slide4,
      title: "Manufacturing",
      desc: "Enabling smart factories, predictive maintenance, and supply chain intelligence.",
    },
    {
      image: slide5,
      title: "Technology Services",
      desc: "Delivering scalable cloud, AI, and enterprise solutions to accelerate digital growth.",
    },
  ];

  const [index, setIndex] = useState(0);
  const ref = useReveal();

  const next = () => { if (index < slides.length - 3) setIndex(index + 1); };
  const prev = () => { if (index > 0) setIndex(index - 1); };

  return (
    <section ref={ref} className="section industries-section pop-reveal">
      <div className="container">
        <h2 className="is-heading strike-heading">Industries We Serve</h2>
      </div>

      <div className="is-carousel-fullwidth">
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{ transform: `translateX(-${index * 33.33}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="industry-card-wrap">
                <div className="industry-card">
                  <img src={slide.image} alt={slide.title} loading="lazy" />
                  <div className="industry-content">
                    <span className="industry-number">{String(i + 1).padStart(2, "0")}.</span>
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-nav-bottom">
          <button onClick={prev} className="carousel-btn">‹</button>
          <button onClick={next} className="carousel-btn">›</button>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSlider;
