import whatWeDoImg from "../assets/what-we-do.svg";

function WhatWeDo() {
  return (
    <section style={styles.section}>
      <div style={styles.text}>
        <h2>WHAT WE DO</h2>
        <p>
          We design, develop, and manage enterprise technology solutions from
          modernization to ongoing operational support.
        </p>
      </div>

      <div
  style={{
    ...styles.visual,
    background: `url(${whatWeDoImg}) center/cover no-repeat`,
  }}
></div>

    </section>
  );
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    background: "#f3f5f8",
  },
  text: {
    maxWidth: "480px",
  },
  visual: {
    height: "300px",
    background: "#1e3558",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default WhatWeDo;
