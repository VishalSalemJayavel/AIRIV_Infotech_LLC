import aboutImg from "../assets/About.svg";

function About() {
  return (
    <section id="about" style={styles.wrapper}>
      <div
        style={{
          ...styles.image,
          background: `url(${aboutImg}) center/cover no-repeat`,
      }}
      >
       ABOUT US
      </div>

      <div style={styles.text}>
        <h2>WHO WE ARE</h2>
        <p>
          Airiv Infotech is headquartered in the United States with delivery
          operations in India, combining strong governance standards with deep
          engineering expertise.
        </p>
        <button style={styles.button}>CONTACT US →</button>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
  },
  image: {
    height: "320px",
    background: "#0b2a4a",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
  },
  text: {
    maxWidth: "500px",
  },
  button: {
    marginTop: "20px",
    padding: "12px 24px",
    background: "#2c5fa8",
    color: "#fff",
    border: "none",
  },
};

export default About;
