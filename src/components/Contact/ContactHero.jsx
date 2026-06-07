import heroImg from "../../assets/contact/contact-hero.jpg";

function ContactHero() {
  return (
    <section className="contact-hero">
      <img src={heroImg} alt="Contact" className="img-fluid" />
      <div className="hero-gradient-overlay" />
      <div className="contact-overlay bottom-left">
        <h1 className="contact-title">Let's Start a Conversation</h1>
      </div>
    </section>
  );
}

export default ContactHero;
