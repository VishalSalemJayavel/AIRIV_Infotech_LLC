'use client';

import HeroBackground from '@/components/HeroBackground';

export default function AboutHero() {
  return (
    <section style={{ position: 'relative' }}>
      <HeroBackground compact />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        display: 'flex', alignItems: 'flex-end',
        paddingBottom: '4rem',
        paddingLeft: 'clamp(1.5rem, 8vw, 6rem)',
        paddingRight: 'clamp(1.5rem, 8vw, 6rem)',
        paddingTop: '70px',
      }}>
        <div style={{ maxWidth: '56rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ display: 'block', width: '2rem', height: '1.5px', background: '#0077FF' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0077FF', fontFamily: 'var(--font-jakarta, sans-serif)' }}>
              ABOUT US
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-jakarta, sans-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1rem' }}>
            Engineering Technology With Purpose
          </h1>
        </div>
      </div>
    </section>
  );
}
