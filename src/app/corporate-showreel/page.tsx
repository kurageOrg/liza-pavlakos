"use client";
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import FirstSection from '../components/CorporateShowreel/firstSection';

const SecondSection = dynamic(() => import("../components/CorporateShowreel/secondSection"), { ssr: false });

export const metadata: Metadata = {
  title: 'Liza Pavlakos Corporate Showreel - Motivational and Leadership Speaker',
  description: "Watch Liza Pavlakos' corporate showreel and experience her captivating keynote presentations. Discover why Liza is a highly sought-after speaker on leadership and mental resilience.",
  keywords: ['Liza Pavlakos', 'corporate showreel', 'motivational speaker', 'inspirational speaker', 'leadership speaker', 'keynote speaker'],
  authors: [{ name: 'Liza Pavlakos' }],
  openGraph: {
    title: 'Liza Pavlakos Corporate Showreel - Motivational and Leadership Speaker',
    description: "Watch Liza Pavlakos' corporate showreel and experience her captivating keynote presentations. Discover why Liza is a highly sought-after speaker on leadership and mental resilience.",
    images: [
      {
        url: '/path/to/showreel_image.jpg',
        width: 800,
        height: 600,
        alt: 'Liza Pavlakos Corporate Showreel',
      },
    ],
    url: 'https://www.lizapavlakos.com/corporate-showreel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liza Pavlakos Corporate Showreel - Motivational and Leadership Speaker',
    description: "Watch Liza Pavlakos' corporate showreel and experience her captivating keynote presentations. Discover why Liza is a highly sought-after speaker on leadership and mental resilience.",
    images: [{ url: '/path/to/showreel_image.jpg' }],
  },
  alternates: {
    canonical: 'https://www.lizapavlakos.com/corporate-showreel',
  },
};

export default function CorporateShowreel() {
  return (
    <div className="headerWrapper">
      <FirstSection />
      <SecondSection />
    </div>
  );
}
