import dynamic from 'next/dynamic';
import Head from 'next/head';
import FirstSection from '../components/About/firstSection';

const SecondSection = dynamic(() => import("../components/About/secondSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export default function About() {
  return (
    <>
      <Head>
        <title>About Liza Pavlakos - Keynote Speaker & Entrepreneur</title>
        <meta name="description" content="Liza Pavlakos is a globally recognized keynote speaker, entrepreneur, and mental health trailblazer. Learn about her journey, achievements, and how she inspires others." />
        <meta name="keywords" content="Liza Pavlakos, keynote speaker, entrepreneur, mental health, motivational speaker, inspirational speaker, businesswoman" />
        <meta name="author" content="Liza Pavlakos" />
        <meta property="og:title" content="About Liza Pavlakos - Keynote Speaker & Entrepreneur" />
        <meta property="og:description" content="Liza Pavlakos is a globally recognized keynote speaker, entrepreneur, and mental health trailblazer. Learn about her journey, achievements, and how she inspires others." />
        <meta property="og:image" content="/path/to/liza_firstSectionImg1.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/about" />
        <meta name="twitter:title" content="About Liza Pavlakos - Keynote Speaker & Entrepreneur" />
        <meta name="twitter:description" content="Liza Pavlakos is a globally recognized keynote speaker, entrepreneur, and mental health trailblazer. Learn about her journey, achievements, and how she inspires others." />
        <meta name="twitter:image" content="/path/to/liza_firstSectionImg1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.yourwebsite.com/about" />
      </Head>
      <div className="headerWrapper">
        <FirstSection />
        <SecondSection />
        <SixthSection />
      </div>
    </>
  );
}
