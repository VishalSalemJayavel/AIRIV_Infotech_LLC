'use client';

import { useReveal } from '@/hooks/useReveal';
import type React from 'react';

const items = [
  {
    title: 'Integrity in Delivery',
    desc: 'We uphold transparency and accountability across every engagement.',
    color: '#00D4FF',
  },
  {
    title: 'Engineering Excellence',
    desc: 'High-quality solutions, built with precision and innovation.',
    color: '#7C6FFF',
  },
  {
    title: 'Business-First Thinking',
    desc: 'Technology aligned with measurable business outcomes.',
    color: '#00E5A0',
  },
  {
    title: 'Continuous Improvement',
    desc: 'Committed to evolving with industry and client needs.',
    color: '#FF6B6B',
  },
];

export default function WhatDrivesUs() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="drives-section pop-reveal">
      <div className="drives-inner">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="drives-row"
            style={{ '--drive-color': item.color } as React.CSSProperties}
          >
            <div className="drives-bar" />
            <div className="drives-body">
              <h3 className="drives-title">{item.title}</h3>
              <p className="drives-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
