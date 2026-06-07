function IndustriesHero() {
  return (
    <section className="industries-hero">
      <video
        className="hero-video"
        src="/industries-hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-gradient-overlay" />
      <div className="industries-overlay">
        <h1 className="industries-title">Industry-Focused Solutions for Real Business Challenges</h1>
      </div>
    </section>
  );
}

export default IndustriesHero;
