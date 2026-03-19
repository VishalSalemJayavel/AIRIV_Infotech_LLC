'use client';

import { useReveal } from '@/hooks/useReveal';
import Image from 'next/image';

export default function OurService() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="our-service pop-reveal">
      <div className="service-left">
        <h2 className="service-heading strike-heading strike-left">Our Services</h2>

        <p className="service-lead">
          Delivering technology-enabled solutions that combine innovation,
          operational excellence, and long-term value creation.
        </p>

        <ul className="service-list">
          <li>Business-aligned digital transformation.</li>
          <li>Secure and scalable enterprise solutions.</li>
          <li>Cloud modernization strategies.</li>
          <li>Intelligent automation and analytics.</li>
        </ul>
      </div>

      <div className="service-right">
        <Image src="/assets/services/our-service.png" alt="Our Service" className="service-image" width={480} height={400} loading="lazy" />
      </div>
    </section>
  );
}
