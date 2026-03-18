import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="home" className="hero">
      <video
        className="hero-video"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-gradient-overlay" />
      <div className="hero-overlay bottom-left">
        <h1 className="hero-title">
          Technology with Intelligence.<br />
          Solutions with Purpose.
        </h1>
        <p className="hero-subtitle">
          We engineer intelligent, scalable, and secure enterprise solutions
          that drive real business outcomes.
        </p>
        <div className="hero-cta">
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
          <Link to="/services" className="btn-ghost">Our Services</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
