"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Cloud, Settings, ShieldCheck, Users, type LucideIcon } from "lucide-react";

interface Capability {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  index: string;
}

const capabilities: Capability[] = [
  { title: "Artificial Intelligence & Data Analytics",  description: "Harness the power of AI and machine learning to unlock insights, automate decisions, and drive intelligent outcomes across your enterprise.", Icon: Brain,       color: "#0077FF", index: "01" },
  { title: "Cloud & Application Development",           description: "Build scalable, resilient cloud-native applications and modernize legacy systems for the digital era.",                                    Icon: Cloud,       color: "#00AAFF", index: "02" },
  { title: "Enterprise Asset Management",               description: "Optimize asset lifecycle, reduce downtime, and improve operational efficiency across your enterprise.",                                    Icon: Settings,    color: "#00C9A7", index: "03" },
  { title: "Quality Assurance & Testing",               description: "Deliver flawless software with end-to-end QA strategies, automated testing, and continuous quality validation.",                          Icon: ShieldCheck, color: "#339DFF", index: "04" },
  { title: "Talent & Delivery Services",                description: "Access top-tier technology talent and agile delivery models that scale with your evolving business needs.",                               Icon: Users,       color: "#7B6FFF", index: "05" },
];

export default function CoreCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            setActiveIndex(Number((e.target as HTMLElement).dataset.idx));
        });
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const active = capabilities[activeIndex];
  const ActiveIcon = active.Icon;

  return (
    <section style={{ background: "#000", position: "relative" }}>

      {/* Header */}
      <div style={{ padding: "100px clamp(1.5rem,8vw,6rem) 60px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ display: "block", width: "2rem", height: "1.5px", background: "#0077FF" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0077FF", fontFamily: "var(--font-jakarta,sans-serif)" }}>
              CAPABILITIES
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-jakarta,sans-serif)", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 600, color: "#FFF", lineHeight: 1.2, marginBottom: "1rem", maxWidth: "36rem" }}>
            Our Core Capabilities
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "36rem" }}>
            A comprehensive set of technology disciplines engineered to solve complex business challenges at scale.
          </p>
        </motion.div>
      </div>

      {/* Two-column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", paddingBottom: "160px" }}>

        {/* LEFT — scrollable capability items */}
        <div style={{ paddingLeft: "clamp(1.5rem,8vw,6rem)", paddingRight: "2rem" }}>
          {capabilities.map((cap, i) => (
            <div
              key={cap.index}
              ref={(el) => { itemRefs.current[i] = el; }}
              data-idx={i}
              style={{ minHeight: "85vh", display: "flex", alignItems: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                style={{ maxWidth: "480px" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", fontFamily: "var(--font-jakarta,sans-serif)", color: activeIndex === i ? cap.color : "rgba(255,255,255,0.2)", transition: "color 0.5s" }}>
                    {cap.index}
                  </span>
                  <span style={{ display: "block", height: "1px", width: activeIndex === i ? "40px" : "14px", background: activeIndex === i ? cap.color : "rgba(255,255,255,0.15)", transition: "all 0.5s" }} />
                </div>

                <h3 style={{ fontFamily: "var(--font-jakarta,sans-serif)", fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 600, lineHeight: 1.25, marginBottom: "1.25rem", color: activeIndex === i ? "#FFF" : "rgba(255,255,255,0.3)", transition: "color 0.5s" }}>
                  {cap.title}
                </h3>

                <p style={{ fontSize: "1rem", lineHeight: 1.75, color: activeIndex === i ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.18)", transition: "color 0.5s", maxWidth: "420px" }}>
                  {cap.description}
                </p>

                <div style={{ marginTop: "1.75rem", height: "2px", width: activeIndex === i ? "56px" : "0", background: `linear-gradient(90deg,${cap.color},transparent)`, borderRadius: "2px", transition: "width 0.6s" }} />
              </motion.div>
            </div>
          ))}
        </div>

        {/* RIGHT — sticky icon panel */}
        <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem", zIndex: 3 }}>
          {/* Glow ring */}
          <div style={{
            position: "relative",
            width: 280,
            height: 280,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {/* Outer glow */}
            <div style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${active.color}22 0%, transparent 70%)`,
              transition: "background 0.7s",
            }} />
            {/* Ring */}
            <div style={{
              position: "absolute",
              inset: 20,
              borderRadius: "50%",
              border: `1.5px solid ${active.color}55`,
              transition: "border-color 0.7s",
            }} />
            {/* Inner ring */}
            <div style={{
              position: "absolute",
              inset: 50,
              borderRadius: "50%",
              border: `1px solid ${active.color}33`,
              transition: "border-color 0.7s",
            }} />
            {/* Icon */}
            <ActiveIcon size={100} strokeWidth={1.2} color={active.color} style={{ transition: "color 0.7s", position: "relative", zIndex: 1 }} />
          </div>

          {/* Label */}
          <p style={{
            fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", textAlign: "center",
            color: active.color, fontFamily: "var(--font-jakarta,sans-serif)",
            maxWidth: "280px", transition: "color 0.7s",
          }}>
            {active.index} — {active.title}
          </p>
        </div>

      </div>
    </section>
  );
}
