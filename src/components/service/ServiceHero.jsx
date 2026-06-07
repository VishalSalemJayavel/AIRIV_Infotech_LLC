function ServicesHero() {
  return (
    <section className="service-hero">
      <video
        className="hero-video"
        src="/service-hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-gradient-overlay" />
      <div className="service-overlay">
        <h1 className="service-title">Technology Services Designed for Business Impact</h1>
      </div>
    </section>
  );
}

export default ServicesHero;
