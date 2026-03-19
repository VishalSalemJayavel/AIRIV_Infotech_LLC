import type { Metadata } from 'next';
import Hero from '@/components/Home/Hero';
import WhatsNew from '@/components/Home/WhatsNew';
import PoweringBusiness from '@/components/Home/PoweringBusiness';
import DeliveringValue from '@/components/Home/DeliveringValue';
import ScrollServices from '@/components/ScrollServices';
import Careers from '@/components/Careers';

export const metadata: Metadata = {
  title: 'AIRIV - Technology with Intelligence. Solutions with Purpose.',
  description: 'We engineer intelligent, scalable, and secure enterprise solutions that drive real business outcomes.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatsNew />
      <PoweringBusiness />
      <DeliveringValue />
      <ScrollServices />
      <Careers />
    </>
  );
}
