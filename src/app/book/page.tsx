import dynamic from 'next/dynamic';
import FirstSection from '../components/Book/firstSection';

const SecondSection = dynamic(() => import("../components/Book/secondSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export default function Book() {
  return (
    <div className="headerWrapper">
      <FirstSection />
      <SecondSection />
      <SixthSection />
    </div>
  );
}
