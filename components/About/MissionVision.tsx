'use client';

import { useReveal } from '@/hooks/useReveal';
import Image from 'next/image';

export default function MissionVision() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="mv-section pop-reveal">
      <h2 className="mv-heading strike-heading">Our Mission &amp; Vision</h2>

      <div className="mv-card">
        <div className="mv-bar"></div>
        <div className="mv-image-wrapper">
          <Image src="/assets/about/about2.jpg" alt="Mission" className="mv-image" width={300} height={240} loading="lazy" />
        </div>
        <div className="mv-content">
          <h3 className="mv-subHeading">Our Mission</h3>
          <p className="mv-text">
            To deliver intelligent, secure, and scalable technology solutions
            that empower organizations to innovate with confidence and build
            resilient digital ecosystems for sustained growth.
          </p>
        </div>
      </div>

      <div className="mv-card reverse">
        <div className="mv-bar"></div>
        <div className="mv-image-wrapper">
          <Image src="/assets/about/about3.jpg" alt="Vision" className="mv-image" width={300} height={240} loading="lazy" />
        </div>
        <div className="mv-content">
          <h3 className="mv-subHeading">Our Vision</h3>
          <p className="mv-text">
            To be a trusted global technology partner recognized for
            engineering excellence, forward-thinking innovation, and
            long-term value creation.
          </p>
        </div>
      </div>
    </section>
  );
}
