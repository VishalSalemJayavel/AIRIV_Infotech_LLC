'use client';

import { useReveal } from '@/hooks/useReveal';
import Image from 'next/image';

export default function ValueCreated() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="value-created pop-reveal">
      <div className="value-left">
        <h2 className="value-heading strike-heading strike-left">
          Value Created Through Services
        </h2>

        <p className="value-lead">
          Our service portfolio is designed to generate measurable impact
          across operational efficiency, innovation velocity, and long-term
          enterprise scalability.
        </p>

        <p className="value-text">
          By aligning technology execution with business strategy, we enable
          organizations to achieve sustainable competitive advantage and
          accelerate digital transformation with confidence.
        </p>
      </div>

      <div className="value-right">
        <Image src="/assets/services/value1.png" alt="Value Created" className="value-image" width={520} height={400} loading="lazy" />
      </div>
    </section>
  );
}
