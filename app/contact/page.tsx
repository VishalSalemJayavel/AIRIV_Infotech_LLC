import type { Metadata } from 'next';
import ContactHero from '@/components/Contact/ContactHero';
import ContactFormSection from '@/components/Contact/ContactFormSection';
import ContactInfoStrip from '@/components/Contact/ContactInfoStrip';

export const metadata: Metadata = {
  title: 'Contact - Airiv Infotech',
  description: "Let's Start a Conversation. Reach out to Airiv Infotech to explore how our technology services can support your business goals.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactInfoStrip />
    </>
  );
}
