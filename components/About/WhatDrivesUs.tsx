'use client';

import { useReveal } from '@/hooks/useReveal';

interface DriveItem {
  title: string;
  desc: string;
}

const items: DriveItem[] = [
  {
    title: 'Integrity in Delivery',
    desc: 'We uphold transparency and accountability across every engagement.',
  },
  {
    title: 'Engineering Excellence',
    desc: 'High-quality solutions, built with precision and innovation.',
  },
  {
    title: 'Business-First Thinking',
    desc: 'Technology aligned with measurable business outcomes.',
  },
  {
    title: 'Continuous Improvement',
    desc: 'Committed to evolving with industry and client needs.',
  },
];

export default function WhatDrivesUs() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="drives-section pop-reveal">
      <div className="container">
        {items.map((item, index) => (
          <div key={index} className="drive-card">
            <div className="drive-green"></div>
            <div className="drive-content">
              <h3 className="drive-title">{item.title}</h3>
              <p className="drive-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
