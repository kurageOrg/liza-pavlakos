import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import FirstSection from '../components/Contact/firstSection';

const SecondSection = dynamic(() => import("../components/Contact/secondSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export const metadata: Metadata = {
  title: 'Contact Liza Pavlakos - Speaking & Media Enquiries',
  description: 'Get in touch with Liza Pavlakos for speaking engagements, media enquiries, or any other questions. Fill out the contact form or reach out directly via email or phone.',
  keywords: ['Liza Pavlakos', 'contact', 'speaking enquiries', 'media enquiries', 'keynote speaker', 'motivational speaker'],
  authors: [{ name: 'Liza Pavlakos' }],
  openGraph: {
    title: 'Contact Liza Pavlakos - Speaking & Media Enquiries',
    description: 'Get in touch with Liza Pavlakos for speaking engagements, media enquiries, or any other questions. Fill out the contact form or reach out directly via email or phone.',
    images: [
      {
        url: '/path/to/contact_image.jpg',
        width: 800,
        height: 600,
        alt: 'Contact Liza Pavlakos',
      },
    ],
    url: 'https://www.lizapavlakos.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Liza Pavlakos - Speaking & Media Enquiries',
    description: 'Get in touch with Liza Pavlakos for speaking engagements, media enquiries, or any other questions. Fill out the contact form or reach out directly via email or phone.',
    images: [{ url: '/path/to/contact_image.jpg' }],
  },
  alternates: {
    canonical: 'https://www.lizapavlakos.com/contact',
  },
};

export default function Contact() {
  return (
    <div className="headerWrapper">
      <FirstSection />
      <SecondSection />
      <SixthSection />
    </div>
  );
}
