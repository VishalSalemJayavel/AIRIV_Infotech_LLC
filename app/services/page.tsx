import type { Metadata } from 'next';
import ServiceHero from '@/components/service/ServiceHero';
import OurService from '@/components/service/OurService';
import ServicesCarousel from '@/components/service/ServicesCarousel';
import ServiceDelivery from '@/components/service/ServiceDelivery';
import ValueCreated from '@/components/service/ValueCreated';
import Careers from '@/components/Careers';

export const metadata: Metadata = {
  title: 'Services - Airiv Infotech',
  description: 'Technology Services Designed for Business Impact. AI & Data Analytics, Cloud Development, Enterprise Asset Management, QA & Testing, and Talent Services.',
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <OurService />
      <ServicesCarousel />
      <ServiceDelivery />
      <ValueCreated />
      <Careers />
    </>
  );
}
