import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import FirstSection from '../components/Speaking/firstSection';

const SecondSection = dynamic(() => import("../components/Speaking/secondSection"), { ssr: false });
const ThirdSection = dynamic(() => import("../components/Speaking/thirdSection"), { ssr: false });
const FourthSection = dynamic(() => import("../components/Speaking/fourthSection"), { ssr: false });
const FifthSection = dynamic(() => import("../components/Speaking/fifthSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export const metadata: Metadata = {
  title: 'Liza Pavlakos Speaking Engagements - Empowering Keynote Programs',
  description: "Experience Liza Pavlakos' transformative keynote programs on leadership, resilience, and overcoming adversity. Customizable topics to align with your corporate event preferences.",
  keywords: ['Liza Pavlakos', 'keynote speaker', 'leadership', 'resilience', 'motivational speaker', 'corporate events', 'mental strength'],
  authors: [{ name: 'Liza Pavlakos' }],
  openGraph: {
    title: 'Liza Pavlakos Speaking Engagements - Empowering Keynote Programs',
    description: "Experience Liza Pavlakos' transformative keynote programs on leadership, resilience, and overcoming adversity. Customizable topics to align with your corporate event preferences.",
    images: [
      {
        url: '/path/to/speaking_image.jpg',
        width: 800,
        height: 600,
        alt: 'Liza Pavlakos Speaking Engagements',
      },
    ],
    url: 'https://www.lizapavlakos.com/speaking',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liza Pavlakos Speaking Engagements - Empowering Keynote Programs',
    description: "Experience Liza Pavlakos' transformative keynote programs on leadership, resilience, and overcoming adversity. Customizable topics to align with your corporate event preferences.",
    images: [{ url: '/path/to/speaking_image.jpg' }],
  },
  alternates: {
    canonical: 'https://www.lizapavlakos.com/speaking',
  },
};

export default function Speaking() {
  return (
    <div className="headerWrapper">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
}
