import dynamic from 'next/dynamic';
import FirstSection from '../components/Contact/firstSection';

const SecondSection = dynamic(() => import("../components/Contact/secondSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export default function Contact() {
  return (
    <div className="headerWrapper">
      <FirstSection />
      <SecondSection />
      <SixthSection />
    </div>
  );
}
