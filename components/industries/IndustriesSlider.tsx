'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import Image from 'next/image';

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

  const next = () => { if (index < slides.length - 3) setIndex(index + 1); };
  const prev = () => { if (index > 0) setIndex(index - 1); };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section industries-section pop-reveal">
      <div className="container">
        <h2 className="is-heading strike-heading">Industries We Serve</h2>
      </div>

      <div className="is-carousel-fullwidth">
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{ transform: `translateX(-${index * 33.33}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="industry-card-wrap">
                <div className="industry-card">
                  <Image src={slide.image} alt={slide.title} width={400} height={400} loading="lazy" />
                  <div className="industry-content">
                    <span className="industry-number">{String(i + 1).padStart(2, '0')}.</span>
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-nav-bottom">
          <button onClick={prev} className="carousel-btn">&#8249;</button>
          <button onClick={next} className="carousel-btn">&#8250;</button>
        </div>
      </div>
    </section>
  );
}
