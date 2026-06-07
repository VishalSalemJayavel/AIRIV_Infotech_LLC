import { useState, useEffect } from "react";
import { useReveal } from "../../hooks/useReveal";
import abstractBg from "../../assets/industries/abstract.jpg";

function IndustryTransformation() {
  const ref = useReveal();

  const items = [
    { title: "Domain Expertise", desc: "Deep understanding of industry-specific challenges and workflows." },
    { title: "Scalable Architecture", desc: "Solutions designed to grow with your business." },
    { title: "Security & Compliance", desc: "Strong focus on reliability, governance, and risk management." },
    { title: "Long-Term Partnership", desc: "We work as an extension of your team, not just a vendor." },
    { title: "Digital Acceleration", desc: "Enabling rapid modernization through cloud and automation." },
  ];

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

  const next = () => { if (index < items.length - visibleCards) setIndex(index + 1); };
  const prev = () => { if (index > 0) setIndex(index - 1); };
  const cardWidth = 100 / visibleCards;

  return (
    <section ref={ref} className="trans-section pop-reveal">
      <h2 className="trans-heading strike-heading">Industry Transformation</h2>

      <p className="trans-intro">
        We help organizations accelerate transformation through intelligent
        technologies and strategic modernization initiatives.
      </p>

      <div className="trans-wrapper">
        <button onClick={prev} className="carousel-btn">‹</button>

        <div className="trans-slider">
          <div
            className="trans-inner"
            style={{ transform: `translateX(-${index * cardWidth}%)` }}
          >
            {items.map((item, i) => (
              <div key={i} className="trans-card-wrap" style={{ flex: `0 0 ${cardWidth}%` }}>
                <div className="trans-card" style={{ backgroundImage: `url(${abstractBg})` }}>
                  <div className="trans-overlay">
                    <h3 className="trans-title">{item.title}</h3>
                    <p className="trans-desc">{item.desc}</p>
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

export default IndustryTransformation;
