import { useState, useEffect } from "react";
import { useReveal } from "../../hooks/useReveal";
import img1 from "../../assets/whatsnew/img1.jpg";
import img2 from "../../assets/whatsnew/img2.jpg";
import img3 from "../../assets/whatsnew/img3.webp";
import img4 from "../../assets/whatsnew/img4.jpg";

function WhatsNew() {
  const ref = useReveal();

  const items = [
    {
      image: img1,
      title: "AI-Driven Solutions",
      desc: "Leveraging AI to drive measurable business impact through automation and intelligent insights.",
    },
    {
      image: img2,
      title: "Enterprise Transformation",
      desc: "Modernizing legacy systems at scale with secure, cloud-first architectures.",
    },
    {
      image: img3,
      title: "Security & Reliability",
      desc: "Building resilient and secure digital platforms designed for long-term growth.",
    },
    {
      image: img4,
      title: "Cloud Innovation",
      desc: "Designing scalable cloud ecosystems for performance, flexibility and resilience.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth <= 768) setVisibleCards(1);
      else if (window.innerWidth <= 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const next = () => { if (index < items.length - visibleCards) setIndex(index + 1); };
  const prev = () => { if (index > 0) setIndex(index - 1); };
  const cardWidth = 100 / visibleCards;

  return (
    <section ref={ref} className="wn-section pop-reveal">
      <h2 className="wn-heading strike-heading">What's New</h2>

      <div className="wn-carousel-wrapper">
        <button onClick={prev} className="carousel-btn">‹</button>

        <div className="wn-carousel">
          <div
            className="wn-inner"
            style={{ transform: `translateX(-${index * cardWidth}%)` }}
          >
            {items.map((item, i) => (
              <div key={i} className="wn-card-wrap" style={{ flex: `0 0 ${cardWidth}%`, '--stagger': `${i * 150}ms` }}>
                <div className="wn-card">
                  <img src={item.image} alt={item.title} className="wn-image" loading="lazy" />
                  <div className="wn-content">
                    <h4 className="wn-title">{item.title}</h4>
                    <p className="wn-desc">{item.desc}</p>
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

export default WhatsNew;
