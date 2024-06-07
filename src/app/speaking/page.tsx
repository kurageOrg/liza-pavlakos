import dynamic from 'next/dynamic';
import FirstSection from '../components/Speaking/firstSection';

const SecondSection = dynamic(() => import("../components/Speaking/secondSection"), { ssr: false });
const ThirdSection = dynamic(() => import("../components/Speaking/thirdSection"), { ssr: false });
const FourthSection = dynamic(() => import("../components/Speaking/fourthSection"), { ssr: false });
const FifthSection = dynamic(() => import("../components/Speaking/fifthSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export default function Speaking() {
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
