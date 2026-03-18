import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceHero from "../components/service/ServiceHero";
import OurService from "../components/service/OurService";
import ServicesCarousel from "../components/service/ServicesCarousel";
import ServiceDelivery from "../components/service/ServiceDelivery";
import ValueCreated from "../components/service/ValueCreated";
import Careers from "../components/Careers";

function Services() {
  return (
    <>
      <Header />
      <ServiceHero />
      <OurService />
      <ServicesCarousel />
      <ServiceDelivery />
      <ValueCreated />
      <Careers />
      <Footer />
    </>
  );
}

export default Services;