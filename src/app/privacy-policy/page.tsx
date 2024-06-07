import dynamic from 'next/dynamic';
import FirstSection from '../components/PrivacyPolicy/firstSection';

const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export default function PrivacyPolicy() {
  return (
    <div className="headerWrapper">
      <FirstSection />
      <SixthSection />
    </div>
  );
}
