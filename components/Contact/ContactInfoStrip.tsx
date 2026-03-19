'use client';

import { useReveal } from '@/hooks/useReveal';

export default function ContactInfoStrip() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="info-strip pop-reveal">
      <div className="info-item" style={{ '--stagger': '0ms' } as React.CSSProperties}>
        <strong>Phone</strong>
        <p>+1 (555) 123-4567</p>
      </div>

      <div className="info-item" style={{ '--stagger': '120ms' } as React.CSSProperties}>
        <strong>Email</strong>
        <p>info@airivinfotech.com</p>
      </div>
    </section>
  );
}
