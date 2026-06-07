import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Airiv Infotech',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 20px',
        background: 'var(--color-bg)',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(60px, 10vw, 120px)',
          fontWeight: 700,
          color: 'var(--color-primary)',
          lineHeight: 1,
          marginBottom: '16px',
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: 'clamp(20px, 3vw, 32px)',
          fontWeight: 600,
          color: 'var(--color-text)',
          marginBottom: '16px',
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: 'var(--color-muted)',
          maxWidth: '480px',
          lineHeight: 1.7,
          marginBottom: '36px',
        }}
      >
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Return to Home
      </Link>
    </div>
  );
}
