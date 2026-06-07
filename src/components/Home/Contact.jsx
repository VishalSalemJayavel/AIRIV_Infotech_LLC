function Contact() {
  return (
    <>
      <section id="contact" style={styles.section}>
        <div style={styles.left}>
          <h2 style={styles.heading}>Get in Touch</h2>
          <p style={styles.text}>
            Let’s discuss how Airiv Infotech can support your next digital
            initiative.
          </p>
        </div>

        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div style={styles.inputGroup}>
            <input type="text" required style={styles.input} />
            <label style={styles.label}>Full Name</label>
          </div>

          <div style={styles.inputGroup}>
            <input type="email" required style={styles.input} />
            <label style={styles.label}>Email Address</label>
          </div>

          <div style={styles.inputGroup}>
            <input type="text" required style={styles.input} />
            <label style={styles.label}>Company</label>
          </div>

          <button type="submit" style={styles.button}>
            Contact Us
          </button>
        </form>
      </section>

      <style>{`
        input:focus + label,
        input:not(:placeholder-shown) + label {
          top: -8px !important;
          font-size: 12px !important;
          color: #1f4f91 !important;
        }

        input:focus {
          border-color: #1f4f91 !important;
          box-shadow: 0 0 0 3px rgba(31, 79, 145, 0.1);
        }
      `}</style>
    </>
  );
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    padding: "100px 80px",
    background: "#f4f6f9",
    alignItems: "center",
  },
  left: {
    maxWidth: "420px",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "16px",
  },
  text: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    maxWidth: "380px",
  },
  inputGroup: {
    position: "relative",
  },
  input: {
    width: "100%",
    height: "48px",
    padding: "0 12px",
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    fontSize: "14px",
    background: "#fff",
    transition: "all 0.3s ease",
  },
  label: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "14px",
    color: "#888",
    pointerEvents: "none",
    transition: "all 0.3s ease",
    background: "#fff",
    padding: "0 4px",
  },
  button: {
    height: "48px",
    background: "#1f4f91",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default Contact;
