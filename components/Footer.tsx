import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-glass-card">
          <div className="footer-brand">
            <Image src="/assets/logo.svg" alt="Airiv Infotech" className="footer-logo" width={130} height={40} />
            <p className="footer-tagline">
              Engineering technology solutions that empower organizations to
              innovate with confidence and build for the future.
            </p>
          </div>

          <div className="footer-links-col">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-contact-col">
            <h4>Contact</h4>
            <p>info@airivinfotech.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Airiv Infotech. All rights reserved.</p>
      </div>
    </footer>
  );
}
