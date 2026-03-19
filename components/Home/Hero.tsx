'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';

export default function Hero() {
  return (
    <section id="home" style={{ position: 'relative' }}>
      <HeroBackground />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        display: 'flex', alignItems: 'center',
        paddingLeft: 'clamp(1.5rem, 8vw, 6rem)',
        paddingRight: 'clamp(1.5rem, 8vw, 6rem)',
        paddingTop: '70px',
      }}>
        <div style={{ maxWidth: '56rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}
          >
            <span style={{ display: 'block', width: '2rem', height: '1.5px', background: '#0077FF' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0077FF', fontFamily: 'var(--font-jakarta, sans-serif)' }}>
              AIRIV INFOTECH
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-jakarta, sans-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Technology with Intelligence.<br />
            Solutions with Purpose.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '38rem', lineHeight: 1.8, marginBottom: '2.5rem', fontFamily: 'var(--font-inter, sans-serif)' }}
          >
            We engineer intelligent, scalable, and secure enterprise solutions
            that drive real business outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-cta"
          >
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
            <Link href="/services" className="btn-ghost">Our Services</Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
      }}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter, sans-serif)' }}>Scroll</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  );
}
