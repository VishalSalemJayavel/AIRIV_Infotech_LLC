'use client';

import { useReveal } from '@/hooks/useReveal';
import Image from 'next/image';
import Link from 'next/link';

export default function Careers() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="careers-section pop-reveal">
      <div>
        <Image src="/assets/career.png" alt="Careers" className="career-image" width={600} height={520} loading="lazy" />
      </div>

      <div className="career-content">
        <h2 className="career-heading">Careers</h2>
        <h3 className="career-subheading">Grow Your Career at the Heart of Change</h3>

        <p className="career-text">
          It&apos;s your time to shine. Bring your ingenuity, curiosity, and bold
          ideas to a team that values innovation, collaboration, and impact.
        </p>

        <Link href="/contact" className="btn-primary">Join Us</Link>
      </div>
    </section>
  );
}
