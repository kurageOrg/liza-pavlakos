import dynamic from 'next/dynamic';
import Head from 'next/head';
import FirstSection from '../components/Foundation/firstSection';

const SecondSection = dynamic(() => import("../components/Foundation/secondSection"), { ssr: false });
const ThirdSection = dynamic(() => import("../components/Foundation/thirdSection"), { ssr: false });
const FourthSection = dynamic(() => import("../components/Foundation/fourthSection"), { ssr: false });
const FifthSection = dynamic(() => import("../components/Foundation/fifthSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export default function Foundation() {
  return (
    <>
      <Head>
        <title>The Liza Pavlakos Foundation - For Better Lives</title>
        <meta name="description" content="Learn about the Liza Pavlakos Foundation's mission to uplift and empower underprivileged communities through mental health education, counselling, and providing necessities." />
        <meta name="keywords" content="Liza Pavlakos Foundation, charitable foundation, mental health support, empowerment, underprivileged communities, donation, support women and children" />
        <meta name="author" content="Liza Pavlakos" />
        <meta property="og:title" content="The Liza Pavlakos Foundation - For Better Lives" />
        <meta property="og:description" content="Learn about the Liza Pavlakos Foundation's mission to uplift and empower underprivileged communities through mental health education, counselling, and providing necessities." />
        <meta property="og:image" content="/path/to/foundation_image.jpg" />
        <meta property="og:url" content="https://www.lizapavlakos.com/foundation" />
        <meta name="twitter:title" content="The Liza Pavlakos Foundation - For Better Lives" />
        <meta name="twitter:description" content="Learn about the Liza Pavlakos Foundation's mission to uplift and empower underprivileged communities through mental health education, counselling, and providing necessities." />
        <meta name="twitter:image" content="/path/to/foundation_image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.lizapavlakos.com/foundation" />
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
