import { useRef, useEffect, useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import img1 from "../../assets/delivering value.png";

function useCounter(target, duration = 1800, trigger) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

function DeliveringValue() {
  const sectionRef = useReveal();
  const [started, setStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); observer.unobserve(el); }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clients = useCounter(50, 1600, started);
  const years   = useCounter(10, 1400, started);
  const industries = useCounter(5, 1000, started);

  return (
    <section ref={sectionRef} className="dv-section pop-reveal">
      <div className="dv-inner">
        <div className="dv-left">
          <h2 className="dv-heading strike-heading strike-left">
            Delivering Value Beyond Technology
          </h2>

          <p className="dv-text">
            We deliver measurable business outcomes by aligning innovation
            with operational excellence and long-term strategic goals.
          </p>

          <div className="dv-stats" ref={statsRef}>
            <div className="dv-stat">
              <span className="dv-stat-number">{clients}+</span>
              <span className="dv-stat-label">Enterprise Clients</span>
            </div>
            <div className="dv-stat">
              <span className="dv-stat-number">{years}+</span>
              <span className="dv-stat-label">Years Experience</span>
            </div>
            <div className="dv-stat">
              <span className="dv-stat-number">{industries}</span>
              <span className="dv-stat-label">Industries Served</span>
            </div>
          </div>
        </div>

        <div className="dv-right">
          <img src={img1} alt="Delivering Value" className="dv-image" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default DeliveringValue;
