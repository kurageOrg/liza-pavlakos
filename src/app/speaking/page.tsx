import dynamic from 'next/dynamic';
import Head from 'next/head';
import FirstSection from '../components/Speaking/firstSection';

const SecondSection = dynamic(() => import("../components/Speaking/secondSection"), { ssr: false });
const ThirdSection = dynamic(() => import("../components/Speaking/thirdSection"), { ssr: false });
const FourthSection = dynamic(() => import("../components/Speaking/fourthSection"), { ssr: false });
const FifthSection = dynamic(() => import("../components/Speaking/fifthSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Liza Pavlakos Speaking Engagements - Empowering Keynote Programs</title>
        <meta name="description" content="Experience Liza Pavlakos' transformative keynote programs on leadership, resilience, and overcoming adversity. Customizable topics to align with your corporate event preferences." />
        <meta name="keywords" content="Liza Pavlakos, keynote speaker, leadership, resilience, motivational speaker, corporate events, mental strength" />
        <meta name="author" content="Liza Pavlakos" />
        <meta property="og:title" content="Liza Pavlakos Speaking Engagements - Empowering Keynote Programs" />
        <meta property="og:description" content="Experience Liza Pavlakos' transformative keynote programs on leadership, resilience, and overcoming adversity. Customizable topics to align with your corporate event preferences." />
        <meta property="og:image" content="/path/to/speaking_image.jpg" />
        <meta property="og:url" content="https://www.lizapavlakos.com/speaking" />
        <meta name="twitter:title" content="Liza Pavlakos Speaking Engagements - Empowering Keynote Programs" />
        <meta name="twitter:description" content="Experience Liza Pavlakos' transformative keynote programs on leadership, resilience, and overcoming adversity. Customizable topics to align with your corporate event preferences." />
        <meta name="twitter:image" content="/path/to/speaking_image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.lizapavlakos.com/speaking" />
      </Head>
      <div className="headerWrapper">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
      </div>
    </>
  );
}
