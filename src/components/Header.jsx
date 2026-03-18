import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logoPic from "../assets/logo.svg";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <NavLink to="/" className="logo-link" onClick={close}>
        <img src={logoPic} alt="Logo" className="logo img-fluid" />
      </NavLink>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="hamburger" />
      </button>

      <nav className={`site-nav ${open ? "mobile open" : ""}`}>
        <NavLink to="/" end onClick={close}>Home</NavLink>
        <NavLink to="/industries" onClick={close}>Industries</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink to="/services" onClick={close}>Services</NavLink>
        <NavLink to="/contact" onClick={close}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
