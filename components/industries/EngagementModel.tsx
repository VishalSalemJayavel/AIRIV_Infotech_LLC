'use client';

import { useReveal } from '@/hooks/useReveal';
import { useEffect, useRef } from 'react';
import { Search, Layers, Zap, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: Search,
    label: 'Discover',
    text: 'Collaborative discovery with business and IT stakeholders to define scope, risk, and opportunity.',
    tag: 'Foundation',
    color: '#0284C7',
  },
  {
    icon: Layers,
    label: 'Design',
    text: 'Flexible delivery models shaped around your industry cadence — project-based or long-term partnership.',
    tag: 'Architecture',
    color: '#4F46E5',
  },
  {
    icon: Zap,
    label: 'Execute',
    text: 'Agile execution backed by enterprise-grade governance, security, and quality assurance at every layer.',
    tag: 'Delivery',
    color: '#059669',
  },
  {
    icon: RefreshCw,
    label: 'Evolve',
    text: 'Continuous improvement post-deployment — measuring outcomes, iterating fast, and compounding value.',
    tag: 'Growth',
    color: '#DC2626',
  },
];

export default function EngagementModel() {
  const ref = useReveal();
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rows = rowsRef.current?.querySelectorAll('.eng-row');
    if (!rows) return;

    // Entrance animation — fires once per row
    const enterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.style.getPropertyValue('--stagger') || '0ms';
            setTimeout(() => el.classList.add('entered'), parseInt(delay));
            enterObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Active glow — fires on every scroll in/out
    const activeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
          else entry.target.classList.remove('active');
        });
      },
      { threshold: 0.4 }
    );

    rows.forEach((row) => {
      enterObs.observe(row);
      activeObs.observe(row);
    });
    return () => { enterObs.disconnect(); activeObs.disconnect(); };
  }, []);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="eng-section pop-reveal">
      <div className="eng-container">
        <div className="eng-header">
          <h2 className="eng-heading strike-heading strike-left">
            Our Industry Engagement Model
          </h2>
          <p className="eng-intro">
            We adapt our delivery model to align with each industry&apos;s pace,
            risk profile, and transformation goals.
          </p>
        </div>

        <div className="eng-rows" ref={rowsRef}>
          <div className="eng-spine" />
          {steps.map(({ icon: Icon, label, text, tag, color }, index) => (
            <div
              key={label}
              className="eng-row"
              style={{ '--stagger': `${index * 80}ms`, '--step-color': color } as React.CSSProperties}
            >
              <div className="eng-spine-node">
                <div className="eng-spine-dot" />
              </div>

              <div className="eng-ghost-num">0{index + 1}</div>

              <div className="eng-row-body">
                <div className="eng-row-top">
                  <span className="eng-tag">{tag}</span>
                  <div className="eng-row-icon">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                </div>
                <h3 className="eng-row-title">{label}</h3>
                <p className="eng-row-text">{text}</p>
              </div>

              <div className="eng-row-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
