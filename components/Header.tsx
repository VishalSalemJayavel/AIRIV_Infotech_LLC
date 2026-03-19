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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

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
          <Image src="/assets/logo.svg" alt="Airiv Infotech" className="logo img-fluid" width={130} height={40} />
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
          <Link
            href="/contact"
            className={`nav-contact-btn${isActive('/contact') ? ' active' : ''}`}
            onClick={close}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`hamburger${open ? ' open' : ''}`} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="mobile-menu-overlay">
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
