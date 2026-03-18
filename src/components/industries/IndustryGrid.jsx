import IndustryCard from "./IndustryCard";

import infraImg from "../../assets/industries/infra.png";
import utilitiesImg from "../../assets/industries/utilities.png";
import manufacturingImg from "../../assets/industries/manufacturing.png";
import publicImg from "../../assets/industries/public.png";

function IndustriesGrid() {
  const industries = [
    {
      title: "Infrastructure",
      image: infraImg,
      description: "Smart infrastructure solutions at scale.",
    },
    {
      title: "Utilities",
      image: utilitiesImg,
      description: "Digital transformation for energy & utilities.",
    },
    {
      title: "Manufacturing",
      image: manufacturingImg,
      description: "Industry 4.0 powered systems.",
    },
    {
      title: "Public Sector",
      image: publicImg,
      description: "Secure and compliant public solutions.",
    },
  ];

  return (
    <section style={styles.section}>
      <h2>Industries We Serve</h2>
      <div style={styles.grid}>
        {industries.map((item, index) => (
          <IndustryCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 80px",
    background: "#f4f6f9",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "30px",
    marginTop: "40px",
  },
};

export default IndustriesGrid;