import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import FirstSection from './components/Home/firstSection';

const FifthSection = dynamic(() => import('./components/Home/fifthSection'));
const FourthSection = dynamic(() => import('./components/Home/forthSection'));
const SecondSection = dynamic(() => import('./components/Home/secondSection'));
const SixthSection = dynamic(() => import('./components/Home/sixthSection'));
const ThirdSection = dynamic(() => import('./components/Home/thirdSection'));

export const metadata: Metadata = {
  title: 'Liza Pavlakos - Inspirational Keynote Speaker on Leadership and Mental Resilience',
  description: 'Liza Pavlakos is an internationally renowned keynote speaker on leadership and mental resilience. Learn more about her journey and how she can inspire your team.',
  keywords: ['Liza Pavlakos', 'keynote speaker', 'leadership', 'mental resilience', 'motivational speaker', 'corporate events', 'business experience'],
  authors: [{ name: 'Liza Pavlakos' }],
  openGraph: {
    title: 'Liza Pavlakos - Inspirational Keynote Speaker on Leadership and Mental Resilience',
    description: 'Liza Pavlakos is an internationally renowned keynote speaker on leadership and mental resilience. Learn more about her journey and how she can inspire your team.',
    images: [
      {
        url: '/path/to/home_image.jpg',
        width: 800,
        height: 600,
        alt: 'Liza Pavlakos Home',
      },
    ],
    url: 'https://www.yourwebsite.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liza Pavlakos - Inspirational Keynote Speaker on Leadership and Mental Resilience',
    description: 'Liza Pavlakos is an internationally renowned keynote speaker on leadership and mental resilience. Learn more about her journey and how she can inspire your team.',
    images: [{ url: '/path/to/home_image.jpg' }],
  },
  alternates: {
    canonical: 'https://www.yourwebsite.com',
  },
};

export default function Home() {
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
