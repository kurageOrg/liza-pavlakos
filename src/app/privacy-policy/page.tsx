import dynamic from 'next/dynamic';
import Head from 'next/head';
import FirstSection from '../components/PrivacyPolicy/firstSection';

const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Liza Pavlakos</title>
        <meta name="description" content="Liza Pavlakos respects your right to privacy. Learn about our data protection policies and how we handle your personal information when you visit our website or use our services." />
        <meta name="keywords" content="Liza Pavlakos, privacy policy, data protection, personal information, GDPR compliance" />
        <meta name="author" content="Liza Pavlakos" />
        <meta property="og:title" content="Privacy Policy - Liza Pavlakos" />
        <meta property="og:description" content="Liza Pavlakos respects your right to privacy. Learn about our data protection policies and how we handle your personal information when you visit our website or use our services." />
        <meta property="og:image" content="/path/to/privacy_policy_image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/privacy-policy" />
        <meta name="twitter:title" content="Privacy Policy - Liza Pavlakos" />
        <meta name="twitter:description" content="Liza Pavlakos respects your right to privacy. Learn about our data protection policies and how we handle your personal information when you visit our website or use our services." />
        <meta name="twitter:image" content="/path/to/privacy_policy_image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.yourwebsite.com/privacy-policy" />
      </Head>
      <div className="headerWrapper">
        <FirstSection />
        <SixthSection />
      </div>
    </>
  );
}
