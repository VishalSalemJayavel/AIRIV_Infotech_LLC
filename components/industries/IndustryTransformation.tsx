'use client';

import { useReveal } from '@/hooks/useReveal';
import { BookOpen, Server, ShieldCheck, Handshake, Rocket } from 'lucide-react';

const items = [
  {
    icon: BookOpen,
    title: 'Domain Expertise',
    desc: 'Deep understanding of industry-specific challenges and workflows.',
    color: '#00D4FF',
  },
  {
    icon: Server,
    title: 'Scalable Architecture',
    desc: 'Solutions designed to grow with your business at every stage.',
    color: '#7C6FFF',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'Strong focus on reliability, governance, and risk management.',
    color: '#00E5A0',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    desc: 'We work as an extension of your team, not just a vendor.',
    color: '#FF6B6B',
  },
  {
    icon: Rocket,
    title: 'Digital Acceleration',
    desc: 'Enabling rapid modernization through cloud and automation.',
    color: '#FFB347',
  },
];

export default function IndustryTransformation() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="trans-section pop-reveal">
      <h2 className="trans-heading strike-heading">Industry Transformation</h2>
      <p className="trans-intro">
        We help organizations accelerate transformation through intelligent
        technologies and strategic modernization initiatives.
      </p>

      <div className="trans-strip">
        {items.map(({ icon: Icon, title, desc, color }, i) => (
          <div key={title} className="trans-item" style={{ '--item-color': color } as React.CSSProperties}>
            <div className="trans-item-line" />
            <div className="trans-item-icon">
              <Icon size={20} strokeWidth={1.6} />
            </div>
            <h3 className="trans-item-title">{title}</h3>
            <p className="trans-item-desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
