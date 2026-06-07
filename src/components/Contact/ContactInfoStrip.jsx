import { useReveal } from "../../hooks/useReveal";

function ContactInfoStrip() {
  const ref = useReveal();

  return (
    <section ref={ref} className="info-strip pop-reveal">
      <div className="info-item" style={{ '--stagger': '0ms' }}>
        <strong>Phone</strong>
        <p>+1 (555) 123-4567</p>
      </div>

      <div className="info-item" style={{ '--stagger': '120ms' }}>
        <strong>Email</strong>
        <p>info@airivinfotech.com</p>
      </div>
    </section>
  );
}

export default ContactInfoStrip;
