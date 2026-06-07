import type { Metadata } from 'next';
import IndustriesHero from '@/components/industries/IndustriesHero';
import IndustriesIntro from '@/components/industries/IndustriesIntro';
import IndustriesSlider from '@/components/industries/IndustriesSlider';
import EngagementModel from '@/components/industries/EngagementModel';
import IndustryTransformation from '@/components/industries/IndustryTransformation';
import ValueDelivered from '@/components/industries/ValueDelivered';
import Careers from '@/components/Careers';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Industry-Focused Solutions for Real Business Challenges. We serve insurance, utilities, healthcare, manufacturing, and technology enterprises.',
  openGraph: {
    title: 'Industries | Airiv Infotech',
    description: 'Industry-Focused Solutions for Real Business Challenges. We serve insurance, utilities, healthcare, manufacturing, and technology enterprises.',
    url: 'https://airivinfotech.com/industries',
    siteName: 'Airiv Infotech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries | Airiv Infotech',
    description: 'Industry-Focused Solutions for Real Business Challenges. We serve insurance, utilities, healthcare, manufacturing, and technology enterprises.',
  },
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustriesIntro />
      <IndustriesSlider />
      <EngagementModel />
      <IndustryTransformation />
      <ValueDelivered />
      <Careers />
    </>
  );
}
