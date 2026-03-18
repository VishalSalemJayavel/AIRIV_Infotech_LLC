import Header from "../components/Header";
import Footer from "../components/Footer";
import IndustriesHero from "../components/industries/IndustriesHero";
import IndustriesIntro from "../components/industries/IndustriesIntro";
import IndustriesSlider from "../components/industries/IndustriesSlider";
import EngagementModel from "../components/industries/EngagementModel";
import IndustryTransformation from "../components/industries/IndustryTransformation";
import ValueDelivered from "../components/industries/ValueDelivered";
import Careers from "../components/Careers";


function Industries() {
  return (
    <>
      <Header />
      <IndustriesHero />
      <IndustriesIntro />
      <IndustriesSlider />
      <EngagementModel />
      <IndustryTransformation />
      <ValueDelivered />
      <Careers />
      <Footer />
    </>
  );
}

export default Industries;