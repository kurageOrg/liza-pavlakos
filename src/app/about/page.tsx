import dynamic from 'next/dynamic';
import FirstSection from '../components/About/firstSection';

const SecondSection = dynamic(() => import("../components/About/secondSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export default function About() {
  return (
    <div className="headerWrapper">
      <FirstSection />
      <SecondSection />
      <SixthSection />
    </div>
  );
}
