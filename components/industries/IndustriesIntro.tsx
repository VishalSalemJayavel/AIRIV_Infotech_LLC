'use client';

import { useReveal } from '@/hooks/useReveal';
import Image from 'next/image';

export default function IndustriesIntro() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="industries-intro pop-reveal">
      <div className="intro-left">
        <h2 className="intro-heading strike-heading strike-left">Industries We Serve</h2>

        <p className="intro-text">
          We provide industry-focused solutions that help organizations
          navigate complexity, modernize operations, and unlock long-term
          value.
        </p>

        <p className="intro-text">
          Our expertise spans infrastructure, utilities, manufacturing,
          and public-sector environments.
        </p>
      </div>

      <div className="intro-right">
        <Image src="/assets/industries/industries serve.png" alt="Industries" className="intro-image" width={650} height={420} loading="lazy" />
      </div>
    </section>
  );
}
