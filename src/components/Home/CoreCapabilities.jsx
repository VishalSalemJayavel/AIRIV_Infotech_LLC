import { useEffect, useRef, useState } from "react";
import bgImg from "../../assets/core/core capability bg.jpg";

import aiImg from "../../assets/core/img1.jpg";
import cloudImg from "../../assets/core/img2.jpg";
import enterpriseImg from "../../assets/core/img3.jpg";
import qaImg from "../../assets/core/img4.jpg";
import talentImg from "../../assets/core/img5.jpg";

function CoreCapabilities() {
  const sectionsRef = useRef([]);
  // Use a Set so cards stay visible once they've been seen
  const [seenSet, setSeenSet] = useState(new Set());

  const cards = [
    { title: "Artificial Intelligence & Data Analytics", img: aiImg },
    { title: "Cloud & Application Development", img: cloudImg },
    { title: "Enterprise Asset Management", img: enterpriseImg },
    { title: "Quality Assurance & Testing", img: qaImg },
    { title: "Talent & Delivery Services", img: talentImg },
  ];

  const alignmentPattern = ["left", "center", "right", "center", "left"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setSeenSet((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="core-wrapper" style={{ backgroundImage: `url(${bgImg})` }}>
      <h2 className="core-heading strike-heading">Our Core Capabilities</h2>

      {cards.map((card, index) => {
        const alignment = alignmentPattern[index];
        const isVisible = seenSet.has(index);

        return (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            data-index={index}
            className="core-fullscreen"
          >
            <div
              className={`core-card ${
                alignment === "left"
                  ? "core-left"
                  : alignment === "right"
                  ? "core-right"
                  : "core-center"
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translate(0, 0)"
                  : alignment === "left"
                  ? "translateX(-80px)"
                  : alignment === "right"
                  ? "translateX(80px)"
                  : "translateY(60px)",
              }}
            >
              <img src={card.img} alt={card.title} loading="lazy" />
              <div className="core-overlay">
                <h3>{card.title}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default CoreCapabilities;
