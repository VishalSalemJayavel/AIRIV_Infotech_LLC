'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top gradient bar */}
      <div className="header-top-bar" />

      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="logo-link" onClick={close}>
          <Image src="/assets/logo.svg" alt="Airiv Infotech" className="logo-icon" width={44} height={44} />
        </Link>

        {/* Desktop Nav */}
        <nav className="site-nav desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? 'active' : ''}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className={`nav-contact-btn desktop-only${isActive('/contact') ? ' active' : ''}`}
          onClick={close}
        >
          Contact
        </Link>

        {/* Mobile hamburger */}
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`hamburger${open ? ' open' : ''}`} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
          {[...navLinks, { href: '/contact', label: 'Contact' }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link${isActive(link.href) ? ' active' : ''}`}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
