import img1 from "../assets/Industry-tech-1.svg";
import img2 from "../assets/Industry-tech-2.svg";

function IndustryFocus() {
  return (
    <section style={styles.section}>
      <div style={styles.left}>
        <h2>INDUSTRY & TECHNOLOGY FOCUS</h2>
        <p>
          Airiv Infotech works with organizations across infrastructure,
          utilities, transportation, manufacturing, and public-sector
          environments.
        </p>

        <div style={styles.badges}>
          <span>Intelligent operational insights</span>
          <span>Connected and monitored systems</span>
          <span>Performance optimization through analytics</span>
          <span>Scalable digital infrastructure</span>
        </div>
      </div>

      <div style={styles.right}>
        <img src={img1} style={styles.imgTop} />
        <img src={img2} style={styles.imgBottom} />
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
  },
  left: {
    maxWidth: "520px",
  },
  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "20px",
  },
  right: {
    position: "relative",
    height: "360px",
  },
  image: {
    width: "220px",
    height: "300px",
    background: "#1e3558",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgTop: {
  position: "absolute",
  width: "220px",
  left: "40px",
  top: "0",
  },
  imgBottom: {
  position: "absolute",
  width: "220px",
  right: "40px",
  bottom: "0",
  },
 
};

export default IndustryFocus;
