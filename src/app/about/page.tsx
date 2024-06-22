import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import FirstSection from '../components/About/firstSection';

const SecondSection = dynamic(() => import("../components/About/secondSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export const metadata: Metadata = {
  title: 'About Liza Pavlakos - Keynote Speaker & Entrepreneur',
  description: 'Liza Pavlakos is a globally recognized keynote speaker, entrepreneur, and mental health trailblazer. Learn about her journey, achievements, and how she inspires others.',
  keywords: ['Liza Pavlakos', 'keynote speaker', 'entrepreneur', 'mental health', 'motivational speaker', 'inspirational speaker', 'businesswoman'],
  authors: [{ name: 'Liza Pavlakos' }],
  openGraph: {
    title: 'About Liza Pavlakos - Keynote Speaker & Entrepreneur',
    description: 'Liza Pavlakos is a globally recognized keynote speaker, entrepreneur, and mental health trailblazer. Learn about her journey, achievements, and how she inspires others.',
    images: [
      {
        url: '/path/to/liza_firstSectionImg1.jpg',
        width: 800,
        height: 600,
        alt: 'Liza Pavlakos',
      },
    ],
    url: 'https://www.lizapavlakos.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Liza Pavlakos - Keynote Speaker & Entrepreneur',
    description: 'Liza Pavlakos is a globally recognized keynote speaker, entrepreneur, and mental health trailblazer. Learn about her journey, achievements, and how she inspires others.',
    images: [{ url: '/path/to/liza_firstSectionImg1.jpg' }],
  },
  alternates: {
    canonical: 'https://www.lizapavlakos.com/about',
  },
};

export default function About() {
  return (
    <div className="headerWrapper">
      <FirstSection />
      <SecondSection />
      <SixthSection />
    </div>
  );
}
