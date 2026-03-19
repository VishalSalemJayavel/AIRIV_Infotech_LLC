'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

export default function AboutCTA() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="cta-section pop-reveal">
      <div className="cta-content">
        <h2 className="cta-heading">Each One Empowers One</h2>

        <p className="cta-text">
          Join us to collaborate, engineer and build self-reliant
          communities and future-ready businesses driven by innovation.
        </p>

        <Link href="/contact" className="btn-primary">Contact Us</Link>
      </div>
    </section>
  );
}
