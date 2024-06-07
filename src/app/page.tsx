import dynamic from 'next/dynamic';
import FirstSection from './components/Home/firstSection';

const FifthSection = dynamic(() => import('./components/Home/fifthSection'));
const ForthSection = dynamic(() => import('./components/Home/forthSection'));
const SecondSection = dynamic(() => import('./components/Home/secondSection'));
const SixthSection = dynamic(() => import('./components/Home/sixthSection'));
const ThirdSection = dynamic(() => import('./components/Home/thirdSection'));

export default function Home() {
  return (
    <div className="headerWrapper">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
}
