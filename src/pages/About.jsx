import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/About/AboutHero";
import WhoWeAre from "../components/About/WhoWeAre";
import MissionVision from "../components/about/MissionVision";
import WhatDrivesUs from "../components/about/WhatDrivesUs";
import AboutCTA from "../components/about/AboutCTA";

function About() {
  return (
    <>
      <Header />
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WhatDrivesUs />
      <AboutCTA />
      <Footer />
    </>
  );
}
 
export default About;