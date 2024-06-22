import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import FirstSection from '../components/Foundation/firstSection';

const SecondSection = dynamic(() => import("../components/Foundation/secondSection"), { ssr: false });
const ThirdSection = dynamic(() => import("../components/Foundation/thirdSection"), { ssr: false });
const FourthSection = dynamic(() => import("../components/Foundation/fourthSection"), { ssr: false });
const FifthSection = dynamic(() => import("../components/Foundation/fifthSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export const metadata: Metadata = {
  title: 'The Liza Pavlakos Foundation - For Better Lives',
  description: "Learn about the Liza Pavlakos Foundation's mission to uplift and empower underprivileged communities through mental health education, counselling, and providing necessities.",
  keywords: ['Liza Pavlakos Foundation', 'charitable foundation', 'mental health support', 'empowerment', 'underprivileged communities', 'donation', 'support women and children'],
  authors: [{ name: 'Liza Pavlakos' }],
  openGraph: {
    title: 'The Liza Pavlakos Foundation - For Better Lives',
    description: "Learn about the Liza Pavlakos Foundation's mission to uplift and empower underprivileged communities through mental health education, counselling, and providing necessities.",
    images: [
      {
        url: '/path/to/foundation_image.jpg',
        width: 800,
        height: 600,
        alt: 'Liza Pavlakos Foundation',
      },
    ],
    url: 'https://www.lizapavlakos.com/foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Liza Pavlakos Foundation - For Better Lives',
    description: "Learn about the Liza Pavlakos Foundation's mission to uplift and empower underprivileged communities through mental health education, counselling, and providing necessities.",
    images: [{ url: '/path/to/foundation_image.jpg' }],
  },
  alternates: {
    canonical: 'https://www.lizapavlakos.com/foundation',
  },
};

export default function Foundation() {
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
