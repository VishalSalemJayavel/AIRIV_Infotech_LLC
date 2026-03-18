function AboutHero() {
  return (
    <section className="about-hero">
      <video
        className="hero-video"
        src="/about-hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-gradient-overlay" />
      <div className="about-overlay bottom-left">
        <h1 className="about-title">Engineering Technology With Purpose</h1>
      </div>
    </section>
  );
}

export default AboutHero;
