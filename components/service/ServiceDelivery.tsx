'use client';

import { useReveal } from '@/hooks/useReveal';

interface Step {
  title: string;
  desc: string;
  color: string;
}

const steps: Step[] = [
  {
    title: 'Discover & Assess',
    desc: 'Understand business objectives and evaluate the current technology landscape to identify transformation opportunities.',
    color: '#00D4FF',
  },
  {
    title: 'Design & Architect',
    desc: 'Create scalable, secure, and future-ready solution blueprints tailored to enterprise needs.',
    color: '#7C6FFF',
  },
  {
    title: 'Build & Implement',
    desc: 'Develop and deploy solutions with strong governance, agile execution, and operational precision.',
    color: '#00E5A0',
  },
  {
    title: 'Optimize & Support',
    desc: 'Continuously enhance performance, improve efficiency, and ensure long-term operational resilience.',
    color: '#FF6B6B',
  },
];

export default function ServiceDelivery() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="delivery-section pop-reveal">
      <h2 className="delivery-heading strike-heading">Service Delivery Model</h2>

      <p className="delivery-intro">
        Our structured methodology ensures predictable delivery,
        measurable business outcomes, and sustained long-term value creation.
      </p>

      <div className="delivery-grid">
        {steps.map((step, index) => (
          <div key={step.title} className="delivery-card" style={{ '--card-color': step.color } as React.CSSProperties}>
            <div className="delivery-bar"></div>
            <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
