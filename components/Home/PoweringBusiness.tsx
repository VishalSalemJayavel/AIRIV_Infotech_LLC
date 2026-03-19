'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import Image from 'next/image';

interface PoweringItem {
  image: string;
  title: string;
  desc: string;
  link: string;
}

const items: PoweringItem[] = [
  {
    image: '/assets/powering/img1.jpg',
    title: 'Industries',
    desc: 'We support clients across insurance, utilities, healthcare, manufacturing, and technology-driven enterprises.',
    link: '/industries',
  },
  {
    image: '/assets/powering/img2.png',
    title: 'Services',
    desc: 'AI & Data Analytics, Cloud & Application Development, Enterprise Asset Management, QA & Testing, and Talent Services.',
    link: '/services',
  },
  {
    image: '/assets/powering/img3.jpg',
    title: 'Careers',
    desc: 'Join a team of innovators, problem-solvers, and technologists shaping the future of digital solutions.',
    link: '/contact',
  },
];

export default function PoweringBusiness() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="pb-section pop-reveal">
      <h2 className="pb-heading strike-heading">Powering Business With Intelligent Solutions</h2>

      <div className="pb-grid">
        {items.map((item, index) => (
          <div
            key={index}
            className="pb-card"
            style={{ '--stagger': `${index * 150}ms` } as React.CSSProperties}
          >
            <Image src={item.image} alt={item.title} className="pb-image" width={400} height={225} loading="lazy" />
            <div className="pb-content">
              <h3 className="pb-title">{item.title}</h3>
              <p className="pb-desc">{item.desc}</p>
              <Link href={item.link} className="pb-card-link">Explore →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
