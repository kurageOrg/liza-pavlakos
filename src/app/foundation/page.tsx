import dynamic from 'next/dynamic';
import FirstSection from '../components/Foundation/firstSection';

const SecondSection = dynamic(() => import("../components/Foundation/secondSection"), { ssr: false });
const ThirdSection = dynamic(() => import("../components/Foundation/thirdSection"), { ssr: false });
const FourthSection = dynamic(() => import("../components/Foundation/fourthSection"), { ssr: false });
const FifthSection = dynamic(() => import("../components/Foundation/fifthSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export default function Foundation() {
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
