import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import FirstSection from '../components/PrivacyPolicy/firstSection';

const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export const metadata: Metadata = {
  title: 'Privacy Policy - Liza Pavlakos',
  description: 'Liza Pavlakos respects your right to privacy. Learn about our data protection policies and how we handle your personal information when you visit our website or use our services.',
  keywords: ['Liza Pavlakos', 'privacy policy', 'data protection', 'personal information', 'GDPR compliance'],
  authors: [{ name: 'Liza Pavlakos' }],
  openGraph: {
    title: 'Privacy Policy - Liza Pavlakos',
    description: 'Liza Pavlakos respects your right to privacy. Learn about our data protection policies and how we handle your personal information when you visit our website or use our services.',
    images: [
      {
        url: '/path/to/privacy_policy_image.jpg',
        width: 800,
        height: 600,
        alt: 'Privacy Policy',
      },
    ],
    url: 'https://www.lizapavlakos.com/privacy-policy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Liza Pavlakos',
    description: 'Liza Pavlakos respects your right to privacy. Learn about our data protection policies and how we handle your personal information when you visit our website or use our services.',
    images: [{ url: '/path/to/privacy_policy_image.jpg' }],
  },
  alternates: {
    canonical: 'https://www.lizapavlakos.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="headerWrapper">
      <FirstSection />
      <SixthSection />
    </div>
  );
}
