'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  desc: string;
}

const slides: Slide[] = [
  {
    image: '/assets/industries/insurance.jpg',
    title: 'Insurance',
    desc: 'Driving digital transformation for insurers through data modernization, risk analytics, and intelligent automation.',
  },
  {
    image: '/assets/industries/utilities.jpg',
    title: 'Utilities',
    desc: 'Optimizing asset performance, grid reliability, and operational efficiency across energy ecosystems.',
  },
  {
    image: '/assets/industries/healthcare.jpg',
    title: 'Healthcare',
    desc: 'Enhancing patient experience, compliance, and system interoperability through secure digital platforms.',
  },
  {
    image: '/assets/industries/manufacturing.jpg',
    title: 'Manufacturing',
    desc: 'Enabling smart factories, predictive maintenance, and supply chain intelligence.',
  },
  {
    image: '/assets/industries/tech.jpg',
    title: 'Technology Services',
    desc: 'Delivering scalable cloud, AI, and enterprise solutions to accelerate digital growth.',
  },
];

export default function IndustriesSlider() {
  const [index, setIndex] = useState(0);
  const ref = useReveal();
  const visibleCount = 3.5;
  const cardPct = 100 / visibleCount;
  const maxIndex = slides.length - visibleCount;

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section industries-section pop-reveal">
      <div className="container">
        <h2 className="is-heading strike-heading">Industries We Serve</h2>
      </div>

      <div className="nf-row">
        <button
          className="nf-arrow nf-arrow-left"
          onClick={prev}
          aria-label="Previous"
          style={{ opacity: index === 0 ? 0.2 : 1, pointerEvents: index === 0 ? 'none' : 'auto' }}
        >
          <ChevronLeft size={28} />
        </button>

        <div className="nf-viewport">
          <div
            className="nf-track"
            style={{ transform: `translateX(-${index * cardPct}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.title}
                className="nf-card"
                style={{ flex: `0 0 ${cardPct}%` }}
              >
                <div className="nf-card-inner">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="nf-card-img"
                    loading="lazy"
                  />
                  <div className="nf-card-overlay" />
                  <div className="nf-card-body">
                    <h3 className="nf-card-title">{slide.title}</h3>
                    <p className="nf-card-desc">{slide.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="nf-arrow nf-arrow-right"
          onClick={next}
          aria-label="Next"
          style={{ opacity: index >= maxIndex ? 0.2 : 1, pointerEvents: index >= maxIndex ? 'none' : 'auto' }}
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
