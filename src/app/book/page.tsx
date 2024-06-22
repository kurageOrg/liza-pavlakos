import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import FirstSection from '../components/Book/firstSection';

const SecondSection = dynamic(() => import("../components/Book/secondSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export const metadata: Metadata = {
  title: 'Conviction by Liza Pavlakos - An Inspiring Journey',
  description: 'Discover "Conviction" by Liza Pavlakos, a powerful story of overcoming trauma and finding purpose. Pre-order your copy now.',
  keywords: ['Liza Pavlakos', 'Conviction', 'book', 'inspirational story', 'overcoming trauma', 'motivational speaker'],
  authors: [{ name: 'Liza Pavlakos' }],
  openGraph: {
    title: 'Conviction by Liza Pavlakos - An Inspiring Journey',
    description: 'Discover "Conviction" by Liza Pavlakos, a powerful story of overcoming trauma and finding purpose. Pre-order your copy now.',
    images: [
      {
        url: '/path/to/liza_book_cover.jpg',
        width: 800,
        height: 600,
        alt: 'Conviction by Liza Pavlakos',
      },
    ],
    url: 'https://www.lizapavlakos.com/book',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conviction by Liza Pavlakos - An Inspiring Journey',
    description: 'Discover "Conviction" by Liza Pavlakos, a powerful story of overcoming trauma and finding purpose. Pre-order your copy now.',
    images: [{ url: '/path/to/liza_book_cover.jpg' }],
  },
  alternates: {
    canonical: 'https://www.lizapavlakos.com/book',
  },
};

export default function Book() {
  return (
    <div className="headerWrapper">
      <FirstSection />
      <SecondSection />
      <SixthSection />
    </div>
  );
}
