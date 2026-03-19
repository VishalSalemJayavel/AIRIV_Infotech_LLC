import type { Metadata } from 'next';
import AboutHero from '@/components/About/AboutHero';
import WhoWeAre from '@/components/About/WhoWeAre';
import MissionVision from '@/components/About/MissionVision';
import WhatDrivesUs from '@/components/About/WhatDrivesUs';
import AboutCTA from '@/components/About/AboutCTA';

export const metadata: Metadata = {
  title: 'About - Airiv Infotech',
  description: 'Engineering Technology With Purpose. Learn about Airiv Infotech and our mission to deliver intelligent enterprise solutions.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WhatDrivesUs />
      <AboutCTA />
    </>
  );
}
