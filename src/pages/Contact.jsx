import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHero from "../components/Contact/ContactHero";
import ContactFormSection from "../components/Contact/ContactFormSection";
import ContactInfoStrip from "../components/Contact/ContactInfoStrip";

function Contact() {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactFormSection />
      <ContactInfoStrip />
      <Footer />
    </>
  );
}

export default Contact;