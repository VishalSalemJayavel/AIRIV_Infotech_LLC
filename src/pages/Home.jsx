import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import WhatsNew from "../components/Home/WhatsNew";
import PoweringBusiness from "../components/Home/PoweringBusiness";
import DeliveringValue from "../components/Home/DeliveringValue";
import CoreCapabilities from "../components/Home/CoreCapabilities";
import Careers from "../components/Careers";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhatsNew />
      <PoweringBusiness />
      <DeliveringValue />
      <CoreCapabilities />
      <Careers />
      <Footer />
    </>
    
  );
}

export default Home;