"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Artificial Intelligence & Data Analytics",
    description:
      "Harness the power of AI and machine learning to unlock insights, automate decisions, and drive intelligent outcomes across your enterprise.",
    color: "#2563EB",
  },
  {
    number: "02",
    title: "Cloud & Application Development",
    description:
      "Build scalable, resilient cloud-native applications and modernize legacy systems for the digital era.",
    color: "#0EA5E9",
  },
  {
    number: "03",
    title: "Enterprise Asset Management",
    description:
      "Optimize asset lifecycle, reduce downtime, and improve operational efficiency across your enterprise.",
    color: "#059669",
  },
  {
    number: "04",
    title: "Quality Assurance & Testing",
    description:
      "Deliver flawless software with end-to-end QA strategies, automated testing, and continuous quality validation.",
    color: "#6366F1",
  },
  {
    number: "05",
    title: "Talent & Delivery Services",
    description:
      "Access top-tier technology talent and agile delivery models that scale with your evolving business needs.",
    color: "#F97316",
  },
];

export default function ScrollServices() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i); },
        { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section style={{ background: "#FFFFFF" }}>

      {/* Header */}
      <div style={{ padding: "96px clamp(1.5rem,8vw,6rem) 48px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ display: "block", width: "2rem", height: "1.5px", background: "#2563EB" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2563EB", fontFamily: "var(--font-jakarta,sans-serif)" }}>
              Our Services
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-jakarta,sans-serif)", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 600, color: "#0F1729", lineHeight: 1.2, marginBottom: "1rem" }}>
            What We Do
          </h2>
          <p style={{ color: "#4A5568", fontSize: "1rem", lineHeight: 1.7, maxWidth: "40rem" }}>
            Delivering technology-enabled solutions that combine innovation, operational excellence, and long-term value creation.
          </p>
        </motion.div>
      </div>

      {/* Service items — full width */}
      <div style={{ padding: "0 clamp(1.5rem,8vw,6rem) 96px" }}>
        {services.map((svc, i) => {
          const isActive = active === i;
          return (
            <div
              key={svc.number}
              ref={el => { itemRefs.current[i] = el; }}
              style={{ minHeight: "30vh", display: "flex", alignItems: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-15%" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                style={{
                  width: "100%",
                  paddingLeft: "2rem",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  borderLeft: `2px solid ${isActive ? svc.color : "rgba(0,0,0,0.08)"}`,
                  opacity: isActive ? 1 : 0.35,
                  transition: "opacity 0.7s ease, border-color 0.7s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(1.5rem,4vw,4rem)", flexWrap: "wrap" }}>
                  {/* Number */}
                  <span style={{
                    fontFamily: "var(--font-jakarta,sans-serif)",
                    fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em",
                    color: isActive ? svc.color : "#8896AB",
                    transition: "color 0.7s",
                    flexShrink: 0,
                  }}>
                    {svc.number}
                  </span>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "var(--font-jakarta,sans-serif)",
                    fontSize: "clamp(1.4rem,2.8vw,2.2rem)",
                    fontWeight: 600, lineHeight: 1.2,
                    color: isActive ? "#0F1729" : "#8896AB",
                    transition: "color 0.7s",
                    flex: "1 1 260px",
                    margin: 0,
                  }}>
                    {svc.title}
                  </h3>

                  {/* Description + Learn More */}
                  <div style={{ flex: "2 1 320px" }}>
                    <p style={{
                      fontSize: "1rem", lineHeight: 1.75,
                      color: isActive ? "#4A5568" : "#C0C8D4",
                      transition: "color 0.7s",
                      margin: 0,
                    }}>
                      {svc.description}
                    </p>

                    <div style={{
                      marginTop: "1.25rem",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(6px)",
                      transition: "opacity 0.7s, transform 0.7s",
                    }}>
                      <Link href="/services" style={{
                        display: "inline-flex", alignItems: "center", gap: "0.75rem",
                        textDecoration: "none",
                      }}>
                        <span style={{ display: "block", width: 20, height: 1, background: `${svc.color}80` }} />
                        <span style={{
                          fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em",
                          textTransform: "uppercase", color: `${svc.color}b3`,
                          fontFamily: "var(--font-jakarta,sans-serif)",
                        }}>
                          Learn More
                        </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke={`${svc.color}80`} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
